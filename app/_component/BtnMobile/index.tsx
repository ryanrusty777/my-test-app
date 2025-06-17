
import { ColorProps } from "../types"
import { useTranslation } from 'react-i18next';
import styles from "./index.module.css"

export default function BtnMobile ({handleBtn}: ColorProps) {
   const { t } = useTranslation('common');
    return (
        <section className={styles.btn}>
            <button
            onClick={handleBtn}
            >
              {t("design")}
            </button>
          </section>
    ) 
}