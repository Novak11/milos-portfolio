"use client";

interface LetterboxProps {
  children: React.ReactNode;
}

export function Letterbox({ children }: LetterboxProps) {
  return (
    <div className="relative">
      <div className="letterbox-bar absolute top-0 left-0 right-0 z-10" />
      {children}
      <div className="letterbox-bar absolute bottom-0 left-0 right-0 z-10" />
    </div>
  );
}
