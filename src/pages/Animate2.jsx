import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from 'gsap';
import { useState } from 'react'
import './Style.css'

export default function Animate2(){

const section1Ref=useRef([])
const title1Ref=useRef([])
const para1Ref=useRef([])
console.log(section1Ref)
useLayoutEffect(()=>{
    section1Ref.current.forEach((section1,index)=>{
        gsap.to(section1,{
            ScrollTrigger:{
            trigger:section1,
            start:"top top",
            end:"bottom+=5",
            pin:true
        }
    })
})
title1Ref.current.forEach((title1,index)=>{
    gsap.fromTo(title1,{
        opacity:0,
        x:-200
    },{
        opacity:1,
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:section1Ref.current[index],
            start:"top 50%",
            toggleActions:"play none none reverse"
        }
    })
})
para1Ref.current.forEach((title1,index)=>{
    gsap.fromTo(title1,{
        opacity:0,
        x:-200
    },{
        opacity:1,
        x:0,
        duration:0.7,
        scrollTrigger:{
            trigger:section1Ref.current[index],
            start:"top 50%",
            toggleActions:"play none none reverse"
        }
    })
})
return()=>{
    ScrollTrigger.getAll().forEach(trigger=>trigger.kill())

}
},[])

    const [events,setEvents] = useState([
        {
            image:'https://images.pexels.com/photos/159574/american-football-football-defense-tackle-159574.jpeg',
            team:'Arizona Cardinals ',
            match:'VS',
            team2:'Atlanta Falcons',
            imag:'https://images.pexels.com/photos/6077805/pexels-photo-6077805.jpeg'
        },
        {
            image:'https://images.pexels.com/photos/1147453/pexels-photo-1147453.jpeg',
            team:'Carolina Panthers ',

            match:'VS',
            team2:'Detroit Lions',
            imag:'https://images.pexels.com/photos/1476041/pexels-photo-1476041.jpeg'
        },
        {
            image:'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg',
            team:'Dallas Cowboys',
            match:'VS',
            team2:'Atlanta Falcons',
            imag:'https://images.pexels.com/photos/260606/pexels-photo-260606.jpeg'
        },
        {
            image:'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
            team:'Green Bay  Packers',
            match:'VS',
            team2:'Minnesota',
            imag:'https://images.pexels.com/photos/1618081/pexels-photo-1618081.jpeg'
        },
        {
            image:'https://images.pexels.com/photos/1147453/pexels-photo-1147453.jpeg',
            team:'Atlanta Falcons',
            match:'VS',
            team2:'Minnesota',
            imag:'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg'
        },
        
    ])

    return(
        <>
            <div ref={(ele)=>(section1Ref.current[3]=ele)}className="events-container">
               <h1>  MATCH TIMETABLE</h1>
                {
                    events.map ((event,key) => {
                        return(
                            <div ref={(ele)=>(title1Ref.current[3]=ele)}className="cards">
                                <img src={event.image} alt="image not found"></img>
                                <p><span>{event.team}</span></p>
                                
                                <button><span>{event.match}</span></button>
                                <p><span>{event.team2}</span></p>
                                <img src={event.imag} alt="image not found"></img>
                         </div>
                        )
                    })
                }
            </div>
            
            <div className="imagecontainer">

            </div>
        </>
    )
}