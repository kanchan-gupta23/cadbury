
import React, { useState, useRef, useEffect } from 'react';
import gsap ,{Power2} from 'gsap';

function MilkChoco() {
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
      <h1 className='text-[#dbb667] text-[10vh] uppercase whitespace-nowrap text-center title'>cadbury milk <br/>chocolate</h1>
      <p className='z-9 text-[4vh] py-8  text-center title '>Our classic, Cadbury milk chocolate recipe always goes down a treat - milk chocolate bars, biscuits and chocolate bites. Anyone fancy a chunk of Cadbury Dairy Milk?</p>
      
      </div></div>
      <div className='w-screen flex justify-center py-10'>
      <h1 className='text-[#4b0983] uppercase text-[5vh] tilt-neon'>all milk Chocolate products</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-x-[0.8vw] gap-y-[15vh] mx-[10%] max-w-screen pb-[10vh] ">
        {[
         {image:"https://images-tastehub.mdlzapps.cloud/images/d666a851-6294-4346-952a-25b6ce861742.png?fm=webp&q=80" ,
               para:"CADBURY DAIRY MILK CHOCOLATE CHRISTMAS COINS MONEY TIN 230G",
               h4:"cadbury dairy milk"},
             
                 {image:"https://images-tastehub.mdlzapps.cloud/images/2b088430-9f38-4dc4-81e2-9bb0ebd0f25c.png?fm=webp&q=80",
               para:"CADBURY DAIRY MILK CHOCOLATE CHRISTMAS COINS NET 70G",
               h4:"cadbury dairy milk"},
                 {image:"https://images-tastehub.mdlzapps.cloud/images/dfcbe2bc-9d46-4b8d-a183-f48fa48ebf42.png?fm=webp&q=80",
               para:"CADBURY BRUNCH OATS BAR CHOCOLATE CHIP CEREAL BAR 5 PACK MULITPACK, 160G",
               h4:"brunch",
               
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/8e101e29-28b5-428a-8b5b-43731ad6aa6f.png?fm=webp&q=80",
               para:"CADBURY BRUNCH OATS BAR PEANUT CHOCOLATE CEREAL BAR 5 PACK MULTIPACK, 160G",
               h4:"brunch"},
                 {image:"https://images-tastehub.mdlzapps.cloud/images/d2e54501-aaba-42a4-b63a-2c0318a53d88.png?fm=webp&q=80",
               para:"CADBURY BRUNCH OATS BAR RAISIN CHOCOLATE CEREAL BAR 5 PACK MULTIPACK, 160G",
               h4:"brunch",
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/0c350e62-d802-4836-b26f-c6dd5d37b012.png?fm=webp&q=80",
               para:"CADBURY DOUBLE CHOCOLATE CUSTARD CREAM CHEESE BUTTERCREAM CAKE",
               h4:"cadbury "
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
              alt="Milk Chocolate"
            />
            <p className="text-[2vh] absolute bottom-[5%] px-2" >{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MilkChoco;
