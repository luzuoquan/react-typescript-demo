import fetch from 'isomorphic-fetch';

const defaultRequestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
};

export default async function customFetch(reqUrl: string, reqParams: any) {
  try {
    let time: any = null;
    const { body, timeout = 300000, method, } = reqParams;
    const requestConfig = defaultRequestConfig;
    if (method) {
      requestConfig.method = method;
    }
    const response: any = await Promise.race([
      fetch(reqUrl, {
        ...requestConfig,
        body: JSON.stringify(body),
      }),
      new Promise((resolve, reject)=>{
        time = setTimeout(()=>{
          reject({
            from:'caoh5-request:requestByFetch',
            message:'网络异常'
          });
        },timeout);
      })
    ]);
    clearTimeout(time);
    if (response.status === 200 || (response.status >= 550 && response.status <= 560)) {
      const res = await response.json();
      return Promise.resolve(res);
    }
    return Promise.reject({
      code: response.status,
      data: null,
      message: response.statusText,
    });
  } catch (error) {
    return Promise.reject(error);
  }
}