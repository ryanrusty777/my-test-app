//import styles from "./index.module.css"
import SelectionItems from "../SelectionScreenItems"
import styles from "./index.module.css"
import TextShadow from "../TextShadow"


export default function SelectionScreenDesktop() {
    return (
       <section className={styles.screen}>
        <SelectionItems/>
        <TextShadow/>
     </section>
    )
}
