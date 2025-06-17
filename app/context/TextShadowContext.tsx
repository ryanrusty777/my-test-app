"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type TextShadowContextType = {
  xOffset: number;
  setXOffset: (v: number) => void;
  yOffset: number;
  setYOffset: (v: number) => void;
  blur: number;
  setBlur: (v: number) => void;
  shadowColor: string;
  setShadowColor: (v: string) => void;
  textShadow: string;
  copied: boolean;
  handleCopy: () => Promise<void>; 
};

const TextShadowContext = createContext<TextShadowContextType | undefined>(undefined);

export const TextShadowProvider = ({ children }: { children: ReactNode }) => {
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [blur, setBlur] = useState(5);
  const [shadowColor, setShadowColor] = useState("#ffffff");
  const [copied, setCopied] = useState(false);

  const textShadow = `${xOffset}px ${yOffset}px ${blur}px ${shadowColor}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`text-shadow: ${textShadow}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // 1.5秒後にメッセージを消す
    } catch (err) {
      console.error("コピーに失敗しました:", err);
    }
  };

  return (
    <TextShadowContext.Provider value={{
      xOffset, setXOffset,
      yOffset, setYOffset,
      blur, setBlur,
      shadowColor, setShadowColor,
      textShadow,
      copied,
      handleCopy,
    }}>
      {children}
    </TextShadowContext.Provider>
  );
};

export const useTextShadow = () => {
  const context = useContext(TextShadowContext);
  if (!context) throw new Error("useTextDesign must be used within a TextDesignProvider");
  return context;
};
