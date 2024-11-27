import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosResponse,
} from "axios";
import useSWR, { SWRConfiguration } from "swr";

const fetcher = async (url: string, apiInstance: AxiosInstance) => {
  return await apiInstance.get(url);
};

export function useFetch<Data = AxiosResponse, Error = AxiosError>(
  url: string,
  options: SWRConfiguration = {},
  condition = true,
  apiInstance: AxiosInstance
) {
  let {
    data: response,
    error,
    mutate,
    isLoading,
    isValidating,
  } = useSWR<AxiosResponse<Data>, Error>(
    condition ? url : null,
    async (url: string) => await fetcher(url, apiInstance),
    options
  );

  if (axios.isAxiosError(error)) {
    error = error?.response?.data;
  }

  return {
    data: response?.data,
    header: response?.headers as AxiosHeaders,
    error,
    mutate,
    isLoading: !response?.data && !error,
    isValidating,
  };
}
