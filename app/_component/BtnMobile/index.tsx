import styles from "./index.module.css"
import { ColorProps } from "../types"

export default function BtnMobile ({handleBtn}: ColorProps) {
    return (
        <section>
            <button
            onClick={handleBtn}
            >
              Design
            </button>
          </section>
    ) 
}