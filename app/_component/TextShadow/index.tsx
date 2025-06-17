"use client"

import { useTranslation } from 'react-i18next';
import { useTextShadow } from '@/app/context/TextShadowContext';
import styles from "./index.module.css"

export default function TextShadow() {
    const { t } = useTranslation('common');
      const {
        xOffset, setXOffset,
        yOffset, setYOffset,
        blur, setBlur,
        shadowColor, setShadowColor,
        textShadow,
        copied,
        handleCopy,
      } = useTextShadow();

    return(
        <div>
          <div className={styles.container}>
            <div>
                <label>
                  {t("xOffset")}:
                  <input
                    type="range"
                    min={-15}
                    max={15}
                    value={xOffset}
                    onChange={(e) => setXOffset(Number(e.target.value))}
                  />
                  <span> {xOffset}px</span>
                </label>
              </div>

                <div>
                  <label>
                    {t("yOffset")}:
                    <input
                      type="range"
                      min={-15}
                      max={15}
                      value={yOffset}
                      onChange={(e) => setYOffset(Number(e.target.value))}
                    />
                    <span> {yOffset}px</span>
                  </label>
                </div>

                
          </div>

          <div className={styles.container}>
                  <label>
                  {t("blurRadius")}:
                    <input
                      type="range"
                      min={0}
                      max={15}
                      value={blur}
                      onChange={(e) => setBlur(Number(e.target.value))}
                    />
                    <span> {blur}px</span>
                  </label>
          </div>

          <div className={styles.container}>
                  <label>
                    {t("shadowColor")}:
                    <input
                      type="text"
                      value={shadowColor}
                      onChange={(e) => setShadowColor(e.target.value)}
                    />
                    <input
                      type="color"
                      value={shadowColor}
                      onChange={(e) => setShadowColor(e.target.value)}
                    />
                  </label>
                
          </div>

                <div className={styles.cssCopy}>
                    <div>
                    <p><strong>CSS:</strong></p>
                    <code>
                      text-shadow: {textShadow};
                    </code>
                  </div>
                  
                  <button onClick={handleCopy}>
                    {copied ? t("copied") : t("copyCss")}
                  </button>
                </div>

          </div>
    )
}
