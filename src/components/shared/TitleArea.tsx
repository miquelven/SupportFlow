export default function TitleArea({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-lg font-medium text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
