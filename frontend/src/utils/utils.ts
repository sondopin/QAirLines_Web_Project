import axios, { AxiosError } from "axios";

export function isAxiosError(error: unknown): error is AxiosError {
  return axios.isAxiosError(error);
}

export function isAxiosUnprocessableEntity<FormError>(
  error: unknown
): error is AxiosError<FormError> {
  return (
    isAxiosError(error) &&
    (error.response?.status === 400 || error.response?.status === 404)
  );
}
