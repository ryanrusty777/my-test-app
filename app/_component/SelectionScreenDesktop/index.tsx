import styles from "./index.module.css"
import SelectionItems from "../SelectionScreenItems"
import { ColorProps } from "../types"


export default function SelectionScreenDesktop({bg, handleColor, titleText, handleTitleText, text, handleText, textColor, handleTextColor}:ColorProps) {
    return (
       <section>
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
     </section>
    )
}
