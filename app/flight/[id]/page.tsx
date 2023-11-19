import { FLIGHTS, FLIGHT_INFO } from "../../../app/data"

export default async function Flight({ params }: { params: { id: number } }) {
    const flight = await FLIGHTS.find(f => { return f.id === params.id })!;
    console.log(flight);
    return <div>My Post</div>
}