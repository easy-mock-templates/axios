var convertUrl = exports.convertUrl = function (url) {
  // /restful/:id/:list/{id} -> restful_id_list_id
  // /restful/:id/:list/{id}.json -> restful_id_list_id
  return url
    .replace(/:|{|}/g, '')
    .split('/')
    .filter(value => !!value)
    .join('-')
    .split('.')[0]
};

exports.convertMethod = function (mock) {
  // 防止重名
  // restful_id_list_id => restful_id_list_id_g
  // or
  // restful_id_list_id => restful_id_list_id_p
  return convertUrl(mock.url) + '-' + mock.method.toLowerCase()
    .replace(/-(\w)/g, function ($0, $1) {
      return $1.toUpperCase()
    });
};

exports.joinUrl = function () {
  // https://www.easy-mock.com//mock/.... => https://www.easy-mock.com/mock/....
  var url = [].slice.call(arguments, 0).join('/');
  url = url.replace(/:\//g, '://');
  url = url.replace(/([^:\s\%\3\A])\/+/g, '$1/');
  return url;
}

exports.isREST = function (url) {
  return /(:|{|})/.test(url);
}
