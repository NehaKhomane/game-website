import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from 'gsap';



import './Style.css'
import React, { useState } from 'react';

const videos = [
  {
    id: 1,
    title: ' International Football-Match',
    src: 'https://videos.pexels.com/video-files/3507660/3507660-sd_640_360_30fps.mp4',
  },
  {
    id: 2,
    title: ' District Football Match',
    src: 'https://videos.pexels.com/video-files/6077699/6077699-sd_640_360_25fps.mp4',
  },
  {
    id: 3,
    title: 'College Football Match',
    src: 'https://videos.pexels.com/video-files/5423460/5423460-hd_1920_1080_30fps.mp4',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + videos.length) % videos.length
    );
  };
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

para1Ref.current.forEach((titlepara,index)=>{
    gsap.fromTo(titlepara,{
        opacity:0,
        x:300
    },{
        opacity:1,
        x:0,
        duration:0.7,
        scrollTrigger:{
            trigger:section1Ref.current[index],
            start:"top 10%",
            toggleActions:"play none none reverse"
        }
    })
})
return()=>{
    ScrollTrigger.getAll().forEach(trigger=>trigger.kill())

}
},[])


  return (
    <div ref={(ele)=>(para1Ref.current[6]=ele)} className="video-slider">
      <h2>{videos[currentIndex].title}</h2>
      <video controls width="900" src={videos[currentIndex].src} />
      <div className="controls">
        <button onClick={prevVideo} disabled={currentIndex === 0} >
        <i class="fa-solid fa-arrow-left"></i>
        
        </button>
        <button onClick={nextVideo} disabled={currentIndex === videos.length - 1}>
        <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
