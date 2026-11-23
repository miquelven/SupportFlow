import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Preferences from "./Preferences";
import Profile from "./Profile";

export default function TabsArea() {
  return (
    <Tabs defaultValue="preferences" className="w-full ">
      <TabsList className="grid h-11 w-72 mb-4 grid-cols-2 gap-1 rounded-xslg bg-muted p-1 group-data-horizontal/tabs:h-11">
        <TabsTrigger
          value="preferences"
          className="h-9 min-h-9 rounded-xsmd px-3 py-1.5 text-base font-semibold data-active:bg-primary data-active:text-primary-foreground data-active:shadow-sm dark:data-active:bg-primary dark:data-active:text-primary-foreground"
        >
          Preferências
        </TabsTrigger>
        <TabsTrigger
          value="profile"
          className="h-9 min-h-9 rounded-xsmd px-3 py-1.5 text-base font-semibold data-active:bg-primary data-active:text-primary-foreground data-active:shadow-sm dark:data-active:bg-primary dark:data-active:text-primary-foreground"
        >
          Perfil
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preferences">
        <Preferences />
      </TabsContent>
      <TabsContent value="profile">
        <Profile />
      </TabsContent>
    </Tabs>
  );
}
