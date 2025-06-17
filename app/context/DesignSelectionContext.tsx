import { createContext } from "react";
import { ColorProps } from "../_component/types"
import { ReactNode, useContext, useState } from "react";


const DesignSelectionContext = createContext<ColorProps | undefined>(undefined);

export const DesignSelectionProvider = ({ children }: {children: ReactNode}) => {

  const [bg, setBg] = useState("#b98888");
  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBg(e.target.value);
  };

  const [titleText, setTitleText] = useState("Title Area")
  const handleTitleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleText(e.target.value);
  };

  const [text, setText] = useState("type something...")
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [textColor, setTextColor] = useState("#ffffff");
  const handleTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  const [selectedTitleFont, setSelectedTitleFont] = useState("Sawarabi Gothic");
   const handleTitleFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTitleFont(e.target.value)
  };
   const [selectedFont, setSelectedFont] = useState("Mincho");
   const handleFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFont(e.target.value)
  };

  return (
    <DesignSelectionContext.Provider value={{
        bg,
        handleColor,
        titleText,
        handleTitleText,
        text, 
        handleText,
        textColor,
        handleTextColor,
        selectedFont,
        handleFont,
        selectedTitleFont,
        handleTitleFont,
    }}>
        {children}
    </DesignSelectionContext.Provider>
  );
};

export const useDesignSelection = () =>{
    const context = useContext(DesignSelectionContext);
    if (!context) throw new Error("useDesignSelection must be used within a DesignSelectionProvider");
    return context;
} 