export interface SuccessResponse<Data> {
  message: string;
  data: Data;
}

export interface ErrorResponse<Data> {
  message: string;
  data?: Data;
}


export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}