import { createAPI } from '{{$$.relative("util")}}';
import config from '{{$$.relative("config")}}';

const baseUrl = {
  mock: '{{$$.joinUrl(config.host, "mock", data.project._id, data.project.url)}}',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock'];

export default createAPI(baseUrl);
