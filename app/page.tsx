"use client"

import styles from "./page.module.css";
import {useState } from "react";
import Result from "./_component/SectionResult";
import useIsMobile from "./_hooks/useIsMobile";
import BtnMobile from "./_component/BtnMobile";
import SelectionScreenMobile from "./_component/SelectionScreenMobile";
import SelectionScreenDesktop from "./_component/SelectionScreenDesktop";
import { DesignSelectionProvider } from "./context/DesignSelectionContext";
import { TextShadowProvider } from "./context/TextShadowContext";
import TextShadow from "./_component/TextShadow";
import LanguageSelection from "./_component/LanguageSelection";

export default function Home() {

 const isMobile = useIsMobile(768);
 
 const [designBtn, setDesignBtn] = useState(false);
  const handleBtn = () => {
    setDesignBtn( (prev) => !prev );
  }


  return (
    <DesignSelectionProvider>
      <TextShadowProvider>
        <LanguageSelection/>
      <div 
    className={isMobile ? styles.mobileLayout : styles.desktopLayout}
    >

      <Result />

      <div className={styles.column}>
            {isMobile ? 
            <>
            <BtnMobile 
            handleBtn={handleBtn}
            /> 
            <TextShadow/>
            </>
            : 
            <SelectionScreenDesktop/>
            }
            
      

      </div>

      { designBtn && 
      <SelectionScreenMobile
      handleBtn={handleBtn}
      />
      }
    </div>

      </TextShadowProvider>
    </DesignSelectionProvider>
  );
}
