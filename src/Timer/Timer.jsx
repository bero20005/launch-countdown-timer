import "./Timer.css"
import Hills from "/images/pattern-hills.svg"
import Stars from "/images/bg-stars.svg"
import Faceebook from "/images/icon-facebook.svg"
import Pinterest from "/images/icon-pinterest.svg"
import Instagram from "/images/icon-instagram.svg"
import { useState, useEffect } from "react"

export default function Timer() {
    const [days,setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const countdown = () => {
        const endDate = new Date("December 25,2025 00:00:00").getTime();
        const today = new Date().getTime()

        const timeDiff = endDate - today

        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60 
        const days = hours * 24

        let timeDays = Math.floor(timeDiff / days)
        let timeHours = Math.floor((timeDiff % days) / hours)
        let timeMinutes = Math.floor((timeDiff % hours) / minutes)
        let timeSeconds = Math.floor((timeDiff % minutes) / seconds)


        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
        timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
       
        setDays(timeDays)
        setHours(timeHours)
        setMinutes(timeMinutes)
        setSeconds(timeSeconds)
    }

    useEffect(() => {
        setInterval(countdown,1000)
    })



  return (
    <div className='container'>
        <div className="stars">
            <img src={Stars} alt="" className="star"/>
    </div>
        <h1>We’re launching soon</h1>
        <div className="countdown">
        <div>
            <p>{days}</p>
            <h3>DAYS</h3>
        </div>
        <div>
            <p>{hours}</p>
            <h3>HOURS</h3>
        </div>
        <div>
            <p>{minutes}</p>
            <h3>MINUTES</h3>
        </div>
        <div>
            <p>{seconds}</p>
            <h3>SECONDS</h3>
        </div>
        </div>
        <div className="socials">
            <ul>
                <li><img src={Faceebook} alt="icon-facebook" /></li>
                <li><img src={Pinterest} alt="icon-Pinterest" /></li>
                <li><img src={Instagram} alt="icon-instagram" /></li>
            </ul>
        </div>

        <div className='hills'>
            <img src={Hills} alt="" />
        </div>

    </div>
  )
}
