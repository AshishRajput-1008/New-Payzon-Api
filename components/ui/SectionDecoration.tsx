interface DecorationShape {
  className: string;
  image: string;
  alt: string;
}

interface SectionDecorationProps {
  shapes: DecorationShape[];
}

export default function SectionDecoration({ shapes }: SectionDecorationProps) {
  return (
    <>
      {shapes.map((shape, index) => (
        <div key={index} className={`decoration_item ${shape.className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shape.image} alt={shape.alt} />
        </div>
      ))}
    </>
  );
}