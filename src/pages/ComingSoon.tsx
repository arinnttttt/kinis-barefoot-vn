const ComingSoon = () => {
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="text-center px-6">
        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
          Sắp ra mắt
        </h1>
        <p className="font-body text-lg sm:text-xl mb-8" style={{ color: "#737373" }}>
          Trang này đang được <span style={{ color: "#FF760C", fontWeight: 600 }}>Kinis</span> xây dựng.
          <br />
          Quay lại sau nhé!
        </p>
        <a
          href="/#/"
          className="inline-flex items-center gap-2 font-body font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-colors"
          style={{ backgroundColor: "#FF760C", color: "#fff" }}
        >
          Về trang chủ
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
