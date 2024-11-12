export type UserType = {
    _id: string;
    email: string;
    password: string;
    fullname: string;
    sex: string;
    address: string;
    phone: string;
    passport: string;
    date_of_birth: Date;
    role: string;
};
  
export type FlightType = {
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
};

export type SeatType = {
    _id: string;
    flight_id: string;
    seat_number: string;
    seat_class: string;
    is_available: boolean;
}

export type AirportType = {
    _id: string;
    code: string;
    name: string;
    city: string;
    country: string;
    timezone: string;
}
  
export type AircraftType = {
    _id: string;
    user_id: string;
    code: string;
    manufacturer: string;
    model: string;
    manufactured_year: number;
    nums_seat: number;
    total_revenue: number;
    last_updated: Date;
};

export type BookingType = {
    _id: string;
    user_id: string;
    flight_id: string;
    nums_adult: number;
    nums_child: number;
    booking_date: Date;
    status: string;
    total_ammount: number;
    cancellation_deadline: Date;
}

  
export type TicketType = {
    _id: string;
    booking_id: string;
    seat_id: string;
    passenger_name: string;
    price: number;
};
  
export type BlogType = {
    _id: string;
    content: string;
    header: string;
    footer: string;
};