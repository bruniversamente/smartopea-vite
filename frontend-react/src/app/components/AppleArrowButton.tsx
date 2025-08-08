interface AppleArrowButtonProps {
  direction?: "left" | "right";
  onClick: () => void;
  className?: string;
}

export default function AppleArrowButton({
  direction = "right",
  onClick,
  className = "",
}: AppleArrowButtonProps) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Voltar" : "Avançar"}
      className={`w-12 h-12 flex items-center justify-center rounded-full
        bg-[#dedee2] hover:bg-[#e6e6e9]
        transition-colors duration-150 ease-linear ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-[30px] h-[30px] text-[#797979] hover:text-[#535354]
          transition-colors duration-150 ease-linear
          ${isLeft ? "rotate-180" : ""}`}
        aria-hidden="true"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}
