import axios from 'axios';

const instance = axios.create();

function createAPI(baseURL) {
  return function (conf) {
    conf = conf || {};
    return instance(Object.assign({}, {
      url: conf.url,
      baseURL: baseURL,
      method: conf.method
    }, conf.opts));
  };
}

function convertRESTAPI(url, opts) {
  if (!opts || !opts.path) return url;

  const pathKeys = Object.keys(opts.path);

  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g');
    url = url.replace(r, opts.path[key]);
  });

  return url;
}

function useRequestInterceptor(interceptor) {
  return instance.interceptors.request.use(interceptor);
}

function useResponseInterceptor(interceptor) {
  return instance.interceptors.response.use(interceptor);
}

function ejectRequestInterceptor(interceptor) {
  instance.interceptors.request.eject(interceptor);
}

function ejectResponseInterceptor(interceptor) {
  instance.interceptors.response.eject(interceptor);
}

function mergeDefaults(defaults) {
  return instance.defaults = {...instance.defaults, ...defaults}
}

export {
  createAPI,
  convertRESTAPI,
  useRequestInterceptor,
  useResponseInterceptor,
  ejectRequestInterceptor,
  ejectResponseInterceptor,
  mergeDefaults
};
