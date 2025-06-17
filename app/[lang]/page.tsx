import { TextShadowProvider } from "../context/TextShadowContext";
import ClientLangWrapper from "../ClientLangWrapper";
import Home from "../page";
import ClientTest from "./clientTest";


export default function HomePage() {

  return (
    <ClientLangWrapper>
      <TextShadowProvider>
        <Home />
      
      </TextShadowProvider>
    </ClientLangWrapper>
  );
}
