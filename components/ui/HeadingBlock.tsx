import Badge from "./Badge";

interface HeadingBlockProps {
  badge?: string;
  title: string;
  centered?: boolean;
}

export default function HeadingBlock({
  badge,
  title,
  centered = true,
}: HeadingBlockProps) {
  return (
    <div className={`heading_block style_2 ${centered ? "text-center" : ""}`}>
      {badge && <Badge>{badge}</Badge>}
      <h2 className="heading_text mb-0">{title}</h2>
    </div>
  );
}