import AnimatedCounter from "./AnimatedCounter";

export default function TrustBar() {
  const stats = [
    { value: 10, suffix: "+", label: "Years of Service" },
    { value: 50000, suffix: "+", label: "Patients Served", duration: 2500 },
    { value: 5, suffix: "", label: "Expert Specialists" },
    { value: 24, suffix: "hr", label: "Report Delivery" },
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
              <p
                className="text-orange font-medium leading-tight"
                style={{ fontSize: "40px", letterSpacing: "-1px" }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={stat.duration || 2000} />
              </p>
              <p className="text-body-sm text-ink-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
