import axiosInstance from "@/lib/axiosInstance";
import Cookies from "js-cookie";

interface ApiResponse<T> {
  data: T | null;
  error: any | null;
}

interface AxiosError {
  response?: {
    data: string | null;
    status?: number;
  };
  message: string;
}

const useApi = () => {
  const apiRequest = async <T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    data: T | null = null,
    isProtected: boolean = false
  ): Promise<ApiResponse<T>> => {
    try {
      if (isProtected) {
        const accessToken = Cookies.get("accessToken");
        if (!accessToken) {
          throw new Error("Unauthorized: Access token is required");
        }
      }

      const response = await axiosInstance({ url, method, data });
      return { data: response.data, error: null };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        data: null,
        error: axiosError.response
          ? axiosError.response.data
          : axiosError.message,
      };
    }
  };

  return { apiRequest };
};

export default useApi;
