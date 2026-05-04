import { useState, useRef, useEffect } from "react";

interface BuyDealerButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

const BuyDealerButton = ({ className = "", style = {} }: BuyDealerButtonProps) => {
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltip({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => setTooltip(null);

  useEffect(() => {
    return () => setTooltip(null);
  }, []);

  return (
    <>
      <button
        type="button"
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.preventDefault()}
        className={className}
        style={{ ...style, cursor: "pointer" }}
      >
        Mua Trực Tiếp Tại Đại Lý
      </button>
      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x + 14,
            top: tooltip.y + 14,
            zIndex: 99999,
            pointerEvents: "none",
            background: "hsl(0,0%,15%)",
            color: "#fff",
            fontSize: "13px",
            fontFamily: "var(--font-body, sans-serif)",
            padding: "6px 12px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          Hàng sắp có, vui lòng chờ thêm
        </div>
      )}
    </>
  );
};

export default BuyDealerButton;
