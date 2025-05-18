import styles from "./index.module.css"
import { ColorProps } from "../types"

export default function Result({bg, titleText, text, textColor}:ColorProps){

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
                  <div className={styles.titlearea}>
                <p>{titleText}</p>
                </div> 
              <div className={styles.textarea}>
                <p>{text}</p>
                </div> 
            </div>
          </div>
      </div>
    )
}