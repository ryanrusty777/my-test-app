"use client"

import styles from "./page.module.css";
import { useState } from "react";
import Result from "./_component/SectionResult";
import useIsMobile from "./_component/useIsMobile";
import BtnMobile from "./_component/BtnMobile";
import SelectionScreenMobile from "./_component/SelectionScreenMobile";
import SelectionScreenDesktop from "./_component/SelectionScreenDesktop";

export default function Home() {

 const isMobile = useIsMobile(768);
 
 const [designBtn, setDesignBtn] = useState(false);
  const handleBtn = () => {
    setDesignBtn( (prev) => !prev );
  }

  const [bg, setBg] = useState("#b98888");
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBg(e.target.value);
  };

  const [titleText, setTitleText] = useState("Title Area")
  const handleTitleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleText(e.target.value);
  };

  const [text, setText] = useState("type something...")
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [textColor, setTextColor] = useState("#ffffff");
  const handleTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };


  return (

    <div 
    className={isMobile ? styles.mobileLayout : styles.desktopLayout}
    >

      <Result 
      bg={bg} 
      text={text} 
      titleText={titleText} 
      textColor={textColor}
      />

      <div className={styles.column}>
            {isMobile ? 
            <BtnMobile 
            handleBtn={handleBtn}
            /> 
            : 
            <SelectionScreenDesktop
            bg={bg}
            handleColor={handleColor}
            titleText={titleText}
            handleTitleText={handleTitleText}
            text={text}
            handleText={handleText}
            textColor={textColor}
            handleTextColor={handleTextColor}
            />
            }
      </div>



    { designBtn && 
    <SelectionScreenMobile
        bg={bg}
        handleColor={handleColor}
        titleText={titleText}
        handleTitleText={handleTitleText}
        text={text}
        handleText={handleText}
        textColor={textColor}
        handleTextColor={handleTextColor}
        handleBtn={handleBtn}
    />}
  
  
    </div>
    

  );
}
