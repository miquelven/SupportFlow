import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PreferencesItemType } from "../types/preferencesType";

export default function PreferencesItem({
  title,
  description,
  values,
}: PreferencesItemType) {
  return (
    <div className="flex w-full items-center justify-between gap-6 rounded-xsxs border border-border/70 bg-background/20 p-4 shadow-sm">
      <div className="flex flex-col gap-2">
        <div className="text-base font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>

      <Select items={values} defaultValue={values[0]?.value}>
        <SelectTrigger className="ml-auto min-w-32 justify-between">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {values.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
