import axios from 'axios';

const instance = axios.create();

const defaultOption = {
  method: 'get',
  dataType: 'json',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  withCredentials: false,
};

instance.interceptors.response.use((response): Promise<any> => {
  const {
    data,
  } = response;

  return Promise.resolve(data);
});

export default function fetch(params: any): Promise<any> {
  const composeOption = { ...defaultOption, ...params };
  return instance.request({
    ...composeOption,
    validateStatus: (status) => status >= 200 && status < 300,
  });
}
