export interface Flight {
  _id: string;
  aircraft_id: string;
  number: string;
  ori_airport: string;
  des_airport: string;
  scheduled_departure: Date;
  scheduled_arrival: Date;
  actual_departure: Date;
  actual_arrival: Date;
  nums_busi_seat_avail: number;
  nums_eco_seat_avail: number;
  base_price: number;
  revenue: number;
}

export type Flights = Flight[];

export interface Airport {
  _id: string;
  code: string;
  name: string;
  city: string;
  country: string;
  timezone: string;
}

export type Airports = Airport[];

export interface Ticket {
  dob: Date | null;
  name: string;
  nationality: string;
  email: string;
  phone: string;
  passport: string;
  price: number;
}

export type Tickets = Ticket[];
