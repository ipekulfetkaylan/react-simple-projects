import React, { useState, useEffect } from 'react'
import rgbToHex from './utils';
import {BiCopy} from 'react-icons/bi';
import {BsCheck} from 'react-icons/bs'

const SingleColorBox = ({index,hexColor,colorArray, setColorArray,...color}) => {
const[alert, setAlert]= useState(false);

const bgc= color.rgb.join(",");
const hexColorValue=rgbToHex(...color.rgb);

 
  useEffect(() => {
    const alertInhterval= setInterval(() => {
        setAlert(false)
    
    },1500);
  
    return () => {
      clearInterval(alertInhterval)
    }
  }, [alert])
  
  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexColorValue);
    setColorArray((prevValue) => [...prevValue, hexColorValue]);
  };

  return (
    <article
      className={`${index > 10 && 'color-light'}`}
      style={{backgroundColor:`rgb(${bgc})`}}
     
    >
      <p className='percent-value'>{color.weight}%</p>
      <p className='color-value'>{hexColorValue}</p>
       {alert && <p className='alert'> <BsCheck className='icon-check'/>  copied to clipboard</p>}
    <BiCopy className='icon' 
    onClick={handleClick} 
    />
    </article> 
  )
}

export default SingleColorBox;