import './Style.css'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { useEffect,useRef ,useLayoutEffect} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Animate(){
    const sectionRef=useRef([])
const titleRef=useRef([])
const paraRef=useRef([])
const titlesRef=useRef([])
console.log(sectionRef)
useLayoutEffect(()=>{
    sectionRef.current.forEach((section,index)=>{
        gsap.to(section,{
            ScrollTrigger:{
            trigger:section,
            start:"top top",
            end:"bottom+=100",
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

paraRef.current.forEach((title,index)=>{
    gsap.fromTo(title,{
        opacity:0,
        x:-200
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
titlesRef.current.forEach((titl,index)=>{
    gsap.fromTo(titl,{
        opacity:0,
        y:50,
        stagger:0.9,
        
    },{
        opacity:0,
         x:20,
        rotate:360,
        
        opacity:1,
        duration:0.9,
        scrollTrigger:{
        
            trigger:sectionRef.current[index],
            start:"top 30%",
            toggleActions:"play none none reverse"
        }
    })
})
return()=>{
    ScrollTrigger.getAll().forEach(trigger=>trigger.kill())

}
},[])

    const data="Take Your Game To The Next Level..!!"
    
    useGSAP(()=>{
        const t1=gsap.timeline()
        t1.from('.header',{
            opacity:0.7,
            x:100
        }).from('.header img',{
            opacity:0.7,
            y:-100,
            
        }).from('.header .links a',{
            opacity:0,
             y:-100,
             stagger:0.5,
             rotate:90

        }).from('.header .links button',{
            opacity:0,
            x:100,
            rotate:100
        }).from('.Main-container',{
            opacity:0,
            x:100,
            stagger:0.5
        
        }).from ('.Main-container h2',
            {
                opacity:0,
                scale:5,
                rotate:180,
                stagger:0.5
            }
        )
    })
    
    return(
        <>
        <div className="header">
            <img src='logos.png'></img>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Final Match</a> 
              
                <a href="#">Timetable</a>
                <button> Book Tickit</button>
            </div>
        </div>
        <div className='Main-container'>
         {
            data.split(' ').map((ch,index)=>{
                return (<h2 key={index}>{ch}</h2>)
            })
         }
         </div>
         <div  ref={(ele)=>(sectionRef.current[0]=ele)}className='Matches-container'>
           
            
                <div ref={(ele)=>(paraRef.current[0]=ele)} className='box1'>
                   <div className="content">
                   
                   <div className="imgbox">
                    <img src="img-03.png" alt="images" />
                    <h3>Super Club Team</h3>
                    </div>
                    <h1><i class="fa-brands fa-brave-reverse"></i></h1>
                    <div className="imgbox1">
                    <img src="img-04.png" alt="images" />
                    <h3>Eastern Conference</h3>
                    </div>
                   </div>
                    
                </div>
                <div ref={(ele)=>(titleRef.current[0]=ele)} className='box2'>
                    
                    
                </div>
            </div>
         
            <div ref={(ele)=>(sectionRef.current[1]=ele)} className='Matches-container'>
           
            <div ref={(ele)=>(paraRef.current[1]=ele)} className='box3'>
               
               
           </div>
           <div ref={(ele)=>(titleRef.current[1]=ele)}  className='box4'>
              <div className="content">
              
              <div className="imgbox">
               <img src="logo_1.png" alt="images" />
               <h3>Atlanta United FC</h3>
               </div>
               <h1><i class="fa-brands fa-brave-reverse"></i></h1>
               <div className="imgbox1">
               <img src="logo_2.png" alt="images" />
               <h3>Charlotte FC</h3>
               </div>
              </div>
               
           </div>
          
       </div>
        <div ref={(ele)=>(sectionRef.current[2]=ele)}className='Myname'>
        <div  ref={(ele)=>(titlesRef.current[2]=ele)}className='Matches-container'>
           
           <div ref={(ele)=>(titlesRef.current[2]=ele)} className='box7'>
           <div className="content">
             
             <div className="imgbox">
              <img src="logo_1.png" alt="images" />
        
              </div>
              <h1><i class="fa-brands fa-brave-reverse"></i></h1>
              <div className="imgbox1">
              <img src="logo_2.png" alt="images" />

              </div>
             </div>
              
          </div>
          <h1><i>Final Match</i></h1>
          <div ref={(ele)=>(titlesRef.current[2]=ele)}className='box5'>
          <div className="content">
             
             <div className="imgbox">
              <img src="logo_2.png" alt="images" />
        
              </div>
              <h1><i class="fa-brands fa-brave-reverse"></i></h1>
              <div className="imgbox1">
              <img src="logo_1.png" alt="images" />

              </div>
             </div>
              
              </div>
          <div   className='box6'>
             
              
          </div>
         
      </div>
        </div>
            
        </>
    )
}