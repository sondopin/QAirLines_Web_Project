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

export function formatDateTime(dateTime: string | Date): string {
  return formatDate(dateTime) + " " + formatTime(dateTime);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}
