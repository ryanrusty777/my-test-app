import styles from "./index.module.css";
import { ColorProps } from "../types";
import SelectionItems from "../SelectionScreenItems";
import { useTranslation } from 'react-i18next';

export default function SelectionScreenMobile({handleBtn} :ColorProps) {
  const { t } = useTranslation('common');

    return(
        <section className={styles.selectionScreen}>
      <SelectionItems 
      />
        <button
      onClick={handleBtn}
      >
        {t("done")}
      </button>
    </section>
    )
}