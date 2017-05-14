exports.convertUrl = function (url) {
  // /restful/:id/:list/{id} -> restful_id_list_id
  // /restful/:id/:list/{id}.json -> restful_id_list_id
  const _url = url
    .replace(/:|{|}/g, '')
    .split('/')
    .filter(value => !!value).join('_');
  return _url.split('.')[0];
};
