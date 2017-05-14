import instance from './instance';

/** swagger test */
function swagger(opts) {
  return instance({
    method: 'get',
    url: '/swagger',
    opts: opts
  });
}

/** 支持接口代理的mock，试试在 url 上加 ?s={数字} */
function proxy(opts) {
  return instance({
    method: 'get',
    url: '/proxy',
    opts: opts
  });
}

/** 带随机数据的mock */
function mock(opts) {
  return instance({
    method: 'get',
    url: '/mock',
    opts: opts
  });
}

/** 根据请求参数返回指定数据，试试在 url 上加 ?name={任意值} */
function query(opts) {
  return instance({
    method: 'get',
    url: '/query',
    opts: opts
  });
}

/** 支持 restful 的mock，替换 id 试试 */
function restful_id_list(opts) {
  return instance({
    method: 'get',
    url: '/restful/:id/list',
    opts: opts
  });
}

export {
  swagger,
  proxy,
  mock,
  query,
  restful_id_list
};
