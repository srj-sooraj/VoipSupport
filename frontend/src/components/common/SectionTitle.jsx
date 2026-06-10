function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <span className="text-blue-600 font-semibold">
        {badge}
      </span>

      <h2 className="text-4xl font-bold mt-3 text-slate-900">
        {title}
      </h2>

      <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;