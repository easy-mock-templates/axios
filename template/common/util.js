import axios from 'axios'

const instance = axios.create()

function createAPI (baseURL) {
  return async function (conf) {
    conf = conf || {}

    try {
      const response = await instance(Object.assign({}, {
        url: conf.url,
        baseURL: baseURL,
        method: conf.method
      }, conf.opts))
      const {statusText, status} = response
      const data = response.data
      return Object.assign({}, {
        message: statusText,
        status
      }, data)
    } catch (error) {
      const {response} = error
      let msg
      let status
      let otherData = {}
      if (response) {
        const { data, statusText } = response
        otherData = data
        status = response.status
        msg = data.message || statusText || data.RespDesc
      } else {
        status = 404
        msg = '网络异常！'
      }
      return {
        'RespCode': '00000404',
        status,
        'Data': otherData,
        'RespDesc': msg
      }
    }
  }
}

function convertRESTAPI (url, opts) {
  if (!opts || !opts.path) return url

  const pathKeys = Object.keys(opts.path)

  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g')
    url = url.replace(r, opts.path[key])
  })

  return url
}

export {
  createAPI,
  convertRESTAPI
}
