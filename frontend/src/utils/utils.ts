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

export function formatDate(dateTime: string | Date): string {
  if (typeof dateTime === "string") {
    dateTime = new Date(dateTime);
  }
  return (
    dateTime.getDate() +
    "/" +
    (dateTime.getMonth() + 1) +
    "/" +
    dateTime.getFullYear()
  );
}

export function formatTime(dateTime: string | Date): string {
  if (typeof dateTime === "string") {
    dateTime = new Date(dateTime);
  }
  return (
    dateTime.getHours().toString().padStart(2, "0") +
    ":" +
    dateTime.getMinutes().toString().padStart(2, "0")
  );
}
