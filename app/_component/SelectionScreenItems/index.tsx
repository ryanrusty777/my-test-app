"use client"

import { useTranslation } from 'react-i18next';
import styles from "./index.module.css"
import ClientLangWrapper from "@/app/ClientLangWrapper"
import { FONT_OPTIONS } from "@/app/_libs/data"
import { useDesignSelection } from "@/app/context/DesignSelectionContext";


export default function SelectionItems() {
   const { t } = useTranslation('common');
  
  const {
        bg,
        handleColor,
        titleText,
        handleTitleText,
        text,
        handleText,
        textColor, 
        handleTextColor,
        selectedFont,
        handleFont,
        selectedTitleFont,
        handleTitleFont,
  } = useDesignSelection();

  return (
       <ClientLangWrapper>
        <h3>Color Selection</h3>
            <div className={styles.screenItems}>
              <div>
                <label>
                  <p>{t("backgroundColorCode")}:</p>
                    <input
                    value={bg}  
                    type="text" 
                    onChange={handleColor}  
                    pattern="^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$"
                    title="Please enter the color code in #FFF or #FFFFFF format."     
                    />
                    <input 
                    type="color" 
                    onChange={handleColor}
                    value={bg}   
                    />
                </label>
        

                  <label>
                    <p>{t("titleArea")}:</p>

                    <input 
                    type="text" 
                    onChange={handleTitleText}
                    value={titleText}         
                    />
                    
                  
                  </label>

                  <label htmlFor="font-select">
                    <p>{t("titleFontFamily")}:</p>
          
                      <select
                      id="font-select"
                      name="font"
                      value={selectedTitleFont}
                        onChange={handleTitleFont}
                      >
                        {FONT_OPTIONS.map((font) => (
                          <option key={font.value} value={font.value}>
                            {font.label}
                          </option>
                        ))}
                      </select>
                  </label>
            </div>
            <div>
                  <label>

                    <p>{t("textColorCode")}:</p>
                    <input 
                    type="text" 
                    onChange={handleTextColor}  
                    value={textColor} 
                    pattern="^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$"
                    title="Please enter the color code in #FFF or #FFFFFF format."     
                    />
                    <input 
                    type="color" 
                    onChange={handleTextColor}
                    value={textColor}   
                    />
                    
                  
                  </label>
                  <label>
                    <p>{t("textArea")}</p>

                    <input 
                    type="text" 
                    onChange={handleText}
                    value={text}         
                    />
                    
                  
                  </label>

                  <label htmlFor="font-select">
                    <p>{t("chooseFontFamily")}:</p>
          
                      <select
                      id="font-select"
                      name="font"
                      value={selectedFont}
                        onChange={handleFont}
                      >
                        {FONT_OPTIONS.map((font) => (
                          <option key={font.value} value={font.value}>
                            {font.label}
                          </option>
                        ))}
                      </select>
                  </label>

                
            </div>
            </div> 
        </ClientLangWrapper>
       
    )
}
