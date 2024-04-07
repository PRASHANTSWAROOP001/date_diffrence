import { useEffect, useState } from 'react'
import {intervalToDuration} from "date-fns"
import './App.css'

function App() {
  const [date, setDate] = useState(null);
  const [date2, setDate2] =  useState(null)
  const[date_string, setDateStr] = useState(null)
  const[date_string2, setDateStr2] = useState(null)

  const[duration , setDuration] = useState({})

  const handleDate = (e) => {
    setDate(new Date(e.target.value))
    setDateStr(new Date(e.target.value).toLocaleDateString("en-In")) 
  }

  const handleDate2 = (e) => {
    setDate2( new Date(e.target.value))
    setDateStr2(new Date(e.target.value).toLocaleDateString("en-In")) 
  }

  useEffect( () =>{
    if(date && date2){
      const result = intervalToDuration({
        start:date,
        end:date2,
      })
      setDuration(result)
    }  
    else if( date && date2 == null){
      const result = intervalToDuration({
        start: date,
        end: new Date(),
      })
      setDuration(result)
    }
      
  },[date,date2] )  

  const{years, months, days, hours, minutes, seconds} = duration
  
  return (
    <>
      <div className="h-screen w-screen">
        <div className=" w-4/5 h-4/5 border-2 border-green-400  rounded-3xl">
          <div className='flex justify-around '>
            <div className=' py-5'>
              <label className=' px-2 text-lg' htmlFor="inputDate">From Date</label>
              <input
                className='border-2 border-green-200 px-3 rounded-md'
                type="date"
                name="inputDate"
                id="inputDate"
                required
                onChange={handleDate}
              />
              <h1 className=' text-left px-2 py-5 text-lg'>Date is : {date_string} </h1>
            </div>
            <div className='py-5'>
              <label className=' px-2 text-lg' htmlFor="inputDate2">To Date</label>
              <input
                className='border-2 border-green-200 px-3 rounded-md'
                type="date"
                name="inputDate2"
                id="inputDate2"
                onChange={handleDate2}
              />
              <h1 className=' text-left px-2 py-5 text-lg'>Date is : {date_string2} </h1>
            </div>
          </div>

          <div>
            <h1 className='text-3xl'>Diffrence between two given date is: </h1>
            <h1 className='text-2xl'> Days: {years}</h1>
            <h1 className='text-2xl'>Months: {months}</h1>
            <h1 className='text-2xl'>Days: {days}</h1>
            <h1 className='text-2xl'>Hours: {hours}</h1>
            <h1 className='text-2xl'>Minutes: {minutes}</h1>
            <h1 className='text-2xl'>Seconds: {seconds}</h1>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App
