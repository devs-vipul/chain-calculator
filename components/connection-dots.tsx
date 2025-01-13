interface ConnectionDotProps {
  type: "input" | "output";
  className?: string;
}

export function ConnectionDot({ type, className = "" }: ConnectionDotProps) {
  return (
    <div
      className={`absolute top-1/2 ${
        type === "input" ? "-left-2" : "-right-2"
      } -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 ${className}`}
    />
  );
}
