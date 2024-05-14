
import React , { useState, useRef, useEffect } from 'react';
import gsap ,{Power2} from 'gsap';

function DarkChoco() {
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
      <h1 className='text-[#dbb667] text-[10vh] uppercase whitespace-nowrap text-center title'>cadbury dark <br/>chocolate</h1>
      <p className='z-9 text-[4vh] py-8   text-center title '>Dark and intense Bournville, rich and creamy Darkmilk... It’s all about the cocoa with our dark chocolate, with just the right level of sweetness.</p>
      
      </div></div>
      <div className='w-screen flex justify-center py-10'>
      <h1 className='text-[#4b0983] uppercase text-[5vh] tilt-neon'>all dark Chocolate products</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-x-[0.8vw] gap-y-[15vh] mx-[10%] max-w-screen pb-[10vh] ">
        {[
         {image:"https://images-tastehub.mdlzapps.cloud/images/cdd9addf-8523-4765-9a19-0fd1b03a568f.png?fm=webp&q=80" ,
               para:"CADBURY BOURNVILLE BRUNCH OATS BAR CHOCOLATE CHIP CEREAL BAR 5 PACK MULTIPACK, 160G",
               h4:"brunch"},
             
                 {image:"https://images-tastehub.mdlzapps.cloud/images/29b2cf00-c92a-4299-ab46-9b47219f7295.png?fm=webp&q=80",
               para:"CADBURY BOURNVILLE CLASSIC DARK CHOCOLATE BAR, 100G",
               h4:"bournville"},

                 {image:"https://images-tastehub.mdlzapps.cloud/images/949bec8f-7653-47ed-a220-abda48e2d93a.png?fm=webp&q=80",
               para:"CADBURY BOURNVILLE DARK CHOCOLATE GIANT BUTTONS BAG, 110G",
               h4:"bournville",
               
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/245c55cc-6d30-4675-aa75-8daabeee43d6.png?fm=webp&q=80",
               para:"CADBURY DARKMILK BUTTONS CHOCOLATE BAG, 105G",
               h4:"cadbury"},

                 {image:"https://images-tastehub.mdlzapps.cloud/images/b70bbbb6-49c9-4114-8d6f-5cd45b60afba.png?fm=webp&q=80",
               para:"CADBURY BOURNVILLE ORANGE DARK CHOCOLATE BAR, 180G",
               h4:"bournville",
             },
                 {image:"https://images-tastehub.mdlzapps.cloud/images/b63294b5-6162-4bee-90b4-f0246587f208.png?fm=webp&q=80",
               para:"CADBURY BOURNVILLE OLD JAMAICA DARK CHOCOLATE BAR, 100G",
               h4:"bournville "
             },].map((item, index) => (
          <div
            key={index}
            className={`w-[22vw] h-[60vh] relative bg-purple-300 rounded-xl img-container shadow-gray-400 shadow-xl ${
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

export default DarkChoco;
