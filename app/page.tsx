"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

type Props = {
  designBtn: boolean
}

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // 初期判定

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  



  const [designBtn, setDesignBtn] = useState(false);
  const handleBtn = () => {
    setDesignBtn( (prev) => !prev );
  }

  const [bg, setBg] = useState("#ddd");
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBg(e.target.value);
  };
  return (

    <div 
    className={isMobile ? styles.mobileLayout : styles.desktopLayout}
    >

      
      <div className={`${styles.column} ${styles.sectionResult}`}>

          <div 
          className={styles.resultItem}
          style={{ backgroundColor: bg }}
          >
          </div>
      </div>

      <div className={styles.column}>
            {isMobile ?
            <section>
            <button
            onClick={handleBtn}
            >
              Design
            </button>
          </section> 
          :
          <section>
          <h3>Color</h3>
          <div className="color-picker-flex">
              <label>
                <p>Background Color Code: {bg}</p>

                <input 
                type="color" 
                onChange={handleColor}
                value={bg}          
                />
                
              
              </label>
            </div>
        </section>
          }
      </div>



    { designBtn &&
      <section className={styles.selectionScreen}>
      <h3>カラー</h3>
      <div className="color-picker-flex">
          <label>
            <p>バックグラウンドカラーコード: {bg}</p>

            <input 
            type="color" 
            onChange={handleColor}
            value={bg}          
            />
            
           
          </label>
        </div>
        <button
      onClick={handleBtn}
      >
        Done
      </button>
    </section>
    }
  
  
    </div>
    

  );
}
