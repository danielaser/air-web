export interface IReservationData {
    id: string;
    state: string;
    departureDate: Date;
    arrivalDate: Date;
    origin: string;
    destination: string;
    reservationCode: string;
    creationDate: Date;
    paymentMethod: string;
    passengers: string;
    email: string;
    taxes: number;
    numberPassengers: number;
    totalPrice: number;
}
