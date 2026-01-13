import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white border border-gray-100 p-6 shadow-sm",
        hoverEffect && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  background?: "white" | "light" | "dark" | "primary";
}

export function Section({ children, className, container = true, background = "white", ...props }: SectionProps) {
  const bgColors = {
    white: "bg-white",
    light: "bg-light",
    dark: "bg-dark text-white",
    primary: "bg-primary text-white",
  };

  return (
    <section
      className={cn(
        "py-16 md:py-24",
        bgColors[background],
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
