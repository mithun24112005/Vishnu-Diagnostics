export default function TrustBar() {
  const stats = [
    { value: "10+", label: "Years of Service" },
    { value: "50,000+", label: "Patients Served" },
    { value: "5", label: "Expert Specialists" },
    { value: "24hr", label: "Report Delivery" },
  ];

  return (
    <section className="bg-surface border-y border-hairline">
      <div className="content-container py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                index < stats.length - 1
                  ? "md:border-r md:border-hairline"
                  : ""
              }`}
            >
              <p className="text-display-md text-orange">{stat.value}</p>
              <p className="text-body-sm text-ink-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
