import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import ReservationForm from "./ReservationForm"

async function Reservation({cabin}) {
    const [settings,bookedDate] = await Promise.all([ 
  getSettings(),
  getBookedDatesByCabinId(cabin.id)
])

    return (
         <div className="grid grid-cols-2 gap-10 border-t border-gray-500 p-2" >
        <DateSelector settings={settings} bookedDates={bookedDate} cabin={cabin}/>
        <ReservationForm cabin={cabin}/>
        </div>
    )
}

export default Reservation
