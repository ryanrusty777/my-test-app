import styles from "./index.module.css"
import { useDesignSelection } from "@/app/context/DesignSelectionContext"
import { useTextShadow } from "@/app/context/TextShadowContext"

export default function Result(){
  const {
    bg, 
    titleText, 
    text, 
    textColor, 
    selectedTitleFont,
    selectedFont
  } = useDesignSelection();

  const { textShadow } = useTextShadow();

    return(
        <div className={`${styles.column} ${styles.sectionResult}`}>

          <div 
          className={styles.resultItem}
          style={{ backgroundColor: bg }}
          >
            <div 
            className={styles.textContainer}
            style={{ color: textColor }}
            >
                  <div 
                  className={styles.titlearea}>
                <p style={{ textShadow, fontFamily: selectedTitleFont }}>{titleText}</p>
                </div> 
              <div
              className={styles.textarea}>
                <p style={{fontFamily: selectedFont }}>{text}</p>
                </div> 
            </div>
          </div>
      </div>
    )
}