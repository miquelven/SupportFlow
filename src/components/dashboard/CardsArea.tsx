import CardKpiArea from "./CardsKpiArea";
import DashboardInsights from "./DashboardInsights";
import RecentTickets from "./RecentTickets";

export default function CardsArea() {
  return (
    <div className="space-y-6">
      <CardKpiArea />
      <DashboardInsights />
      <RecentTickets />
    </div>
  );
}
