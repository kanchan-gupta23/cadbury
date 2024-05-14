
import React, { useState, useRef, useEffect } from 'react';
import gsap ,{Power2} from 'gsap';

function WhiteChoco() {
  const [isHover, setHover] = useState(Array(6).fill(false));
  const imgContainers = useRef([]);
  const images = useRef([]);

  useEffect(() => {
    
    imgContainers.current.forEach((container, index) => {
      gsap.to(container, {
        duration: 0.3,
        translateY: isHover[index] ? '-25%' : '0%',
        ease: 'linear',
      });

      gsap.to(images.current[index], {
        duration: 0.3,
        translateY: isHover[index] ? '-40%' : '0%',
        ease: 'linear',
      });
    });
  }, [isHover]);

 

  const toggleHover = (index) => {
    setHover((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    
  };

  useEffect(()=>{
    gsap.from(".title",{
      y:"20%",
      opacity:0,
      
      ease:Power2.easeInOut,
      duration:1,
      
    })
    gsap.to(".title",{
      y:0,
      opacity:1,
      
      stagger:1,
      ease:Power2.easeInOut,
      duration:1,
      delay:0.2,
    })
   
  },[])

  return (
    <div className="w-screen">
      <div className='w-screen h-[85vh] relative '>
      <img className=' w-full h-full object-cover' src='https://i.pinimg.com/564x/de/97/a8/de97a8a67a138833ea26d1217aa7e15a.jpg'/>
      <div className='z-9 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-screen '>
      <h1 className='text-[#dbb667] text-[10vh] uppercase whitespace-nowrap text-center title'>cadbury white <br/>chocolate</h1>
      <p className='z-9 text-[4vh] py-8   text-center title '>White chocolate bars, white chocolate buttons… however it comes, it’s the creamiest, dreamiest taste of the Cadbury white chocolate we all love.</p>
      
      </div></div>
      <div className='w-screen flex justify-center py-10'>
      <h1 className='text-[#4b0983] uppercase text-[5vh] tilt-neon'>all white Chocolate products</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-x-[0.8vw] gap-y-[15vh] mx-[10%] max-w-screen pb-[10vh] ">
        {[
         {image:"https://images-tastehub.mdlzapps.cloud/images/b218226f-6e8d-4165-89a1-1f2e8fd71a08.png?fm=webp&q=80" ,
               para:"CADBURY CREME EGG 5 PACK MIXED CHOCOLATE BOX 200G",
               h4:"creme egg"},
             
                 {image:"https://images-tastehub.mdlzapps.cloud/images/0568f93a-f57d-4524-bd0e-9db514742e68.png?fm=webp&q=80",
               para:"CADBURY DAIRY MILK TWISTED MILK & WHITE CHOCOLATE BUTTONS BAG, 105G",
               h4:"cadbury dairy milk"},

                 {image:"https://images-tastehub.mdlzapps.cloud/images/b065c01a-3111-44e9-8b89-415f5d77d7b2.png?fm=webp&q=80",
               para:"CADBURY WHITE BUTTONS CHOCOLATE BAG, 110G",
               h4:"cadbury",
               
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/d85d9ccc-1199-4978-bc57-bb03977b26ba.png?fm=webp&q=80",
               para:"CADBURY WHITE CHOCOLATE BUTTONS, 14.4G",
               h4:"cadbury"},

                 {image:"https://images-tastehub.mdlzapps.cloud/images/f6ed8794-4bba-4bcd-a714-898478262adb.png?fm=webp&q=80",
               para:"CADBURY WHITE CHOCOLATE BAR 180G",
               h4:"bournville",
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/f6ed8794-4bba-4bcd-a714-898478262adb.png?fm=webp&q=80",
               para:"CADBURY WHITE CHOCOLATE CREME EGG, 40G",
               h4:"creme egg"
             },].map((item, index) => (
          <div
            key={index}
            className={`w-[22vw] h-[60vh] relative bg-purple-300 rounded-xl img-container shadow-gray-400 shadow-xl${
              isHover[index] ? 'hovered' : ''
            }`}
            onMouseEnter={() => toggleHover(index)}
            onMouseLeave={() => toggleHover(index)}
            ref={(element) => (imgContainers.current[index] = element)}
          >
            <div className='absolute w-[22vw] h-[15vw] bg-[#4b0983] top-1/2 rounded-tl-[60%] rounded-b-xl '></div>
            <h5 className="absolute left-[5%] bg-[#ebc373] rounded-xl px-2 top-2 text-white ">{item.h4}</h5>
            <img
              key={index}
              className={`w-[18vw] h-[35vh] z-9 absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isHover[index] ? 'hovered' : ''
              }`}
              ref={(elem) => (images.current[index] = elem)}
              src={item.image}
              alt="White Chocolate"
            />
            <p className="text-[2vh] absolute bottom-[5%] px-2" >{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhiteChoco;
