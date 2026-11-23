import CardsArea from "@/components/dashboard/CardsArea";
import LayoutContainer from "@/components/layout/LayoutContainer";
import TitleArea from "@/components/shared/TitleArea";

export default function Dashboard() {
  return (
    <LayoutContainer>
      <TitleArea title="Dashboard" subtitle="Visão geral do atendimento" />

      <CardsArea />
    </LayoutContainer>
  );
}
