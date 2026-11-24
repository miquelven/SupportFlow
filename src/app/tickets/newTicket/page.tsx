import LayoutContainer from "@/components/layout/LayoutContainer";
import TitleArea from "@/components/shared/TitleArea";
import NewTicketForm from "../components/NewTicketForm";
import NewTicketSummary from "../components/NewTicketSummary";

export default function NewTicket() {
  return (
    <LayoutContainer>
      <TitleArea
        title="Chamados / Novo chamado"
        subtitle="Preencha os dados da solicitação"
      />
      <div className="flex gap-4">
        <NewTicketForm />
        <NewTicketSummary />
      </div>
    </LayoutContainer>
  );
}
