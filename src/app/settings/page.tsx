import LayoutContainer from "@/components/layout/LayoutContainer";
import Box from "@/components/shared/Box";
import TitleArea from "@/components/shared/TitleArea";
import TabsArea from "./components/TabsArea";

export default function Settings() {
  return (
    <LayoutContainer>
      <TitleArea title="Configurações" subtitle="Preferências da aplicação" />
      <Box>
        <TabsArea />
      </Box>
    </LayoutContainer>
  );
}
