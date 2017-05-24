import * as api from './api';

api.demo.restful_id_list_get({
  path: {
    id: 1
  }
}).then((res) => {
  console.log(res.data);
});
