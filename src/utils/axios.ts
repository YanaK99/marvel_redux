import md5 from 'md5';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
function generateHash(
  ts: number,
  privateKey: string,
  publicKey: string
): string {
  return md5(`${ts}${privateKey}${publicKey}`);
}

const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY || '';
const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY || '';
const ts = Date.now();
const hash = generateHash(ts, privateKey, publicKey);

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const errorMessage = error.response.data.message || 'Request failed';
    return Promise.reject(errorMessage);
  }
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const params = {
    ...config.params,
    ts,
    apikey: publicKey,
    hash,
  };
  config.params = params;
  return config;
});

export default axiosInstance;
