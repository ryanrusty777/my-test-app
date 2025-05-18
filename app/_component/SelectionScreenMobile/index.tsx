import styles from "./index.module.css";
import { ColorProps } from "../types";
import SelectionItems from "../SelectionScreenItems";

export default function SelectionScreenMobile({bg, handleColor, titleText, handleTitleText, text, handleText, textColor, handleTextColor, handleBtn} :ColorProps) {
    return(
        <section className={styles.selectionScreen}>
      <SelectionItems 
       bg={bg}
    handleColor={handleColor}
    titleText={titleText}
    handleTitleText={handleTitleText}
    text={text}
    handleText={handleText}
    textColor={textColor}
    handleTextColor={handleTextColor}
      />
        <button
      onClick={handleBtn}
      >
        Done
      </button>
    </section>
    )
}