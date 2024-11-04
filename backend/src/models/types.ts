export type UserType = {
    email: string;
    password: string;
    fullname: string;
    sex: string;
    address: string;
    phone: string;
    passport: string;
    role: string;
  };
  
export type TicketType = {
    id_user: string;
    id_flight: string;
    idx_seat: number;
    price: number;
};
  
export type FlightType = {
    time_start: number;
    time_end: number;
    departure: string;
    destination: string;
    revenue: number;
    nums_seat_avail: number;
};
  
export type PlaneType = {
    name: string;
    type: number;
    nums_seat: number;
    total_revenue: number;
    flights: FlightType[];
};
  
export type BlogType = {
    content: string;
    header: string;
    footer: string;
};