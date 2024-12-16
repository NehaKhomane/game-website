import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from 'gsap';

export default function Animate1(){
gsap.registerPlugin(ScrollTrigger)
const sectionRef=useRef([])
const titleRef=useRef([])
const titlenameRef=useRef([])
const titlepageRef=useRef([])
const titleaboutpageRef=useRef([])

const paraRef=useRef([])
console.log(sectionRef)
useLayoutEffect(()=>{
    sectionRef.current.forEach((section,index)=>{
        gsap.to(section,{
            ScrollTrigger:{
            trigger:section,
            start:"top top",
            end:"bottom+=10",
            pin:true
        }
    })
})
titleRef.current.forEach((title,index)=>{
    gsap.fromTo(title,{
        opacity:0,
        x:200
    },{
        opacity:1,
        x:0,
        duration:0.7,
        scrollTrigger:{
            trigger:sectionRef.current[index],
            start:"top 50%",
            toggleActions:"play none none reverse"
        }
    })
})
titlenameRef.current.forEach((titlename,index)=>{
    gsap.fromTo(titlename,{
        opacity:0,
        x:200
    },{
        opacity:1,
        x:0,
        duration:0.7,
        scrollTrigger:{
            trigger:sectionRef.current[index],
            start:"top 50%",
            toggleActions:"play none none reverse"
        }
    })
})
titlepageRef.current.forEach((titlepage,index)=>{
    gsap.fromTo(titlepage,{
        opacity:0,
        x:200
    },{
        opacity:1,
        x:0,
        duration:0.7,
        scrollTrigger:{
            trigger:sectionRef.current[index],
            start:"top 50%",
            toggleActions:"play none none reverse"
        }
    })
})
titleaboutpageRef.current.forEach((titlepage,index)=>{
    gsap.fromTo(titlepage,{
        opacity:0,
        x:200
    },{
        opacity:1,
        x:0,
        duration:0.7,
        scrollTrigger:{
            trigger:sectionRef.current[index],
            start:"top 50%",
            toggleActions:"play none none reverse"
        }
    })
})

return()=>{
    ScrollTrigger.getAll().forEach(trigger=>trigger.kill())

}
},[])

    return(
        <>
        <div  ref={(ele)=>(sectionRef.current[3]=ele)} className="footer">
    <div  ref={(ele)=>(titleRef.current[3]=ele)} className="element">
        <h2>About us</h2>
        <p>Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football generally means the form </p>
    </div>
    <div ref={(ele)=>(titleaboutpageRef.current[3]=ele)}className="element">
        <h2>Important Link</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Match</li>
            <li>Live Match</li>
        </ul>
    </div>
    <div ref={(ele)=>(titlenameRef.current[3]=ele)}className="element">
        <h2>company details</h2>
        <p>JM road Pune</p>
        <p>+91 1234567890</p>
        <p>info@123gmail.com</p>
    </div>
    <div ref={(ele)=>(titlepageRef.current[3]=ele)}className="element">
        <h2>Get Our Updates</h2>
        <div class="input-field">
            <input type="email" placeholder="enter your email address"/>
            <button>get update</button>
        </div>
    </div>
</div>
        </>
    )
}

