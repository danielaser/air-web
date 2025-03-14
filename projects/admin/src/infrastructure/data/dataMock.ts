import { IReservationData } from "../../domain/model/reservation.model";

export const reservationsData: IReservationData[] = [
  {
    id: "1",
    state: "Confirmed",
    departureDate: new Date("2024-03-15T10:00:00"),
    arrivalDate: new Date("2024-03-15T12:30:00"),
    origin: "Medellín",
    destination: "Bucaramanga",
    reservationCode: "RES12345",
    creationDate: new Date("2024-03-10"),
    paymentMethod: "Credit Card",
    passengers: "John Doe",
    email: "john.doe@example.com",
    taxes: 50.0,
    numberPassengers: 2,
    totalPrice: 760500.0
  },
  {
    id: "2",
    state: "Pending",
    departureDate: new Date("2024-04-20T15:00:00"),
    arrivalDate: new Date("2024-04-20T18:00:00"),
    origin: "Bogotá",
    destination: "Cartagena",
    reservationCode: "RES67890",
    creationDate: new Date("2024-04-15"),
    paymentMethod: "PayPal",
    passengers: "Jane Smith",
    email: "jane.smith@example.com",
    taxes: 100.0,
    numberPassengers: 1,
    totalPrice: 760500.0
  },
  {
    id: "3",
    state: "Cancelled",
    departureDate: new Date("2024-05-10T08:00:00"),
    arrivalDate: new Date("2024-05-10T09:45:00"),
    origin: "Barranquilla",
    destination: "Cali",
    reservationCode: "RES13579",
    creationDate: new Date("2024-05-05"),
    paymentMethod: "Bank Transfer",
    passengers: "Alice Johnson",
    email: "alice.johnson@example.com",
    taxes: 200.0,
    numberPassengers: 4,
    totalPrice: 760500.0
  },
];