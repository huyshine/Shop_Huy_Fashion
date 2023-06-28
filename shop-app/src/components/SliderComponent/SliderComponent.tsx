// import React from 'react'
import Slider from "react-slick"
import { Image } from "antd" 

const SliderComponent = ( {arrImages} : any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

//   console.log(arrImages);
  
  return (
    <Slider {...settings}>
        {arrImages.slider.map((image: any) => {
            return (
                <Image src={image} alt="slider" preview={false} width="100%" height="100%" />
            )
        } )}
    </Slider>   
    )
};

export default SliderComponent;
