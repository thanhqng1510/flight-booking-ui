export type FLIGHT_INFO = {
    id: number,
    origin: string,
    destination: string,
    departTime: string,
    arriveTime: string,
    price: string
}

export const FLIGHTS: FLIGHT_INFO[] = [
    {
        id: 0,
        origin: "Ho Chi Minh",
        destination: "Ha Noi",
        departTime: "05:15 20/10/2023",
        arriveTime: "08:15 20/10/2023",
        price: "500.000"
    },
    {
        id: 1,
        origin: "Ho Chi Minh",
        destination: "Ha Long",
        departTime: "21:10 20/10/2023",
        arriveTime: "23:05 20/10/2023",
        price: "700.000"
    },
    {
        id: 2,
        origin: "Ha Noi",
        destination: "Ho Chi Minh",
        departTime: "21:15 21/10/2023",
        arriveTime: "01:20 22/10/2023",
        price: "520.000"
    },
    {
        id: 3,
        origin: "Ha Noi",
        destination: "Can Tho",
        departTime: "05:15 22/10/2023",
        arriveTime: "08:00 22/10/2023",
        price: "1.000.050"
    },
    {
        id: 4,
        origin: "Da Lat",
        destination: "Ha Noi",
        departTime: "11:15 23/10/2023",
        arriveTime: "15:15 23/10/2023",
        price: "650.000"
    }
]