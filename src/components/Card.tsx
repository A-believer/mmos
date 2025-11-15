interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 border border-border/50 ${
        hover
          ? "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
