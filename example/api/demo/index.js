import instance from './instance'
import { convertRESTAPI } from '../util'

/** 支持 restful 的 mock，替换 id 试试 */
function restfulIdListGet(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/restful/:id/list', opts),
    opts: opts
  })
}

/** 支持接口代理的 mock，试试在 url 上加 ?s={数字} */
function proxyGet(opts) {
  return instance({
    method: 'get',
    url:  '/proxy',
    opts: opts
  })
}

/** 带随机数据的 mock */
function mockGet(opts) {
  return instance({
    method: 'get',
    url:  '/mock',
    opts: opts
  })
}

/** 普通的 mock */
function userGet(opts) {
  return instance({
    method: 'get',
    url:  '/user',
    opts: opts
  })
}

/** 这只是一个响应 post 接口返回随机数据的例子 */
function uploadPost(opts) {
  return instance({
    method: 'post',
    url:  '/upload',
    opts: opts
  })
}

/** 根据请求参数返回指定数据，试试在 url 上加 ?name={任意值} */
function queryGet(opts) {
  return instance({
    method: 'get',
    url:  '/query',
    opts: opts
  })
}

export {
  restfulIdListGet,
  proxyGet,
  mockGet,
  userGet,
  uploadPost,
  queryGet
}
