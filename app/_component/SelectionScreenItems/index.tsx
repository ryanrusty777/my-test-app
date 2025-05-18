import { ColorProps } from "../types"

export default function SelectionItems({bg, handleColor, titleText, handleTitleText, text, handleText, textColor, handleTextColor}:ColorProps) {
    return (
       <div>
          <h3>Color</h3>
          <div>
              <label>
                <p>Background Color Code: {bg}</p>

                <input 
                type="color" 
                onChange={handleColor}
                value={bg}   
                />
                
              
              </label>
              <label>
                <input 
                type="text" 
                onChange={handleColor}  
                pattern="^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$"
                title="Please enter the color code in #FFF or #FFFFFF format."     
                />
                
              
              </label>

              <label>
                <p>Title Text Area:</p>

                <input 
                type="text" 
                onChange={handleTitleText}
                value={titleText}         
                />
                
              
              </label>
              <label>
                <p>Text Area:</p>

                <input 
                type="text" 
                onChange={handleText}
                value={text}         
                />
                
              
              </label>
              <label>
                <p>Text Color Code: {textColor}</p>

                <input 
                type="color" 
                onChange={handleTextColor}
                value={textColor}   
                />
                
              
              </label>
              <label>
                <input 
                type="text" 
                onChange={handleTextColor}  
                pattern="^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$"
                title="Please enter the color code in #FFF or #FFFFFF format."     
                />
                
              
              </label>
            </div>
        </div> 
    )
}
