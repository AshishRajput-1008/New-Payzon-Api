interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="badge text-uppercase text-primary bg-primary-subtle">
      {children}
    </div>
  );
}