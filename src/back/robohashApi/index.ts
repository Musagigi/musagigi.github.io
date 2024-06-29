import axios, { AxiosPromise, InternalAxiosRequestConfig } from 'axios';

export const robohashApi = (config: InternalAxiosRequestConfig) => {
  const prepareUrl = config.url!.replace('/api/robot/', '');
  const robohashUrl = `https://robohash.org/${prepareUrl}`;

  config.adapter = (): AxiosPromise =>
    axios
      .get(robohashUrl, { responseType: 'blob' })
      .then((response) => {
        const reader = new FileReader();
        reader.readAsDataURL(response.data);
        return new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result);
        });
      })
      .then((base64) => ({
        data: base64,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      }));
};
