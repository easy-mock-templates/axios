import * as api from './api';

api.demo.restful_id_list_g({
  path: {
    id: 1
  }
}).then((res) => {
  console.log(res.data);
});
