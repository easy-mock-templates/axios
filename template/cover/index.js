import instance from './instance';

<% _.forEach(data.mocks, function(mock){ %>/** <%- mock.description %> */
function <%- $$.convertUrl(mock.url) %>(opts) {
  return instance({
    method: '<%- mock.method %>',
    url: '<%- mock.url %>',
    opts: opts
  });
}

<% }) %>export {<% _.forEach(data.mocks, function(mock, i){ %>
  <%- $$.convertUrl(mock.url) %><% if(data.mocks.length - 1 !== i) { %>,<% } %><% }) %>
};
