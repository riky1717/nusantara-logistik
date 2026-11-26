const advantages = [
  {
    number: "01",
    title: "Perencanaan Terstruktur",
    description:
      "Mendukung pengelolaan kebutuhan logistik secara sistematis.",
  },
  {
    number: "02",
    title: "Layanan Terintegrasi",
    description:
      "Menghubungkan proses penyimpanan dan distribusi.",
  },
  {
    number: "03",
    title: "Fokus pada Kebutuhan Pelanggan",
    description:
      "Informasi layanan disusun untuk membantu pelanggan memahami solusi yang tersedia.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-heading">
          <span className="section-subtitle">
            KEUNGGULAN KAMI
          </span>

          <h2>
            Mengapa Memilih Solusi Logistik Kami?
          </h2>
        </div>

        <div className="advantages-grid">
          {advantages.map((item) => (
            <article
              className="advantage-card"
              key={item.number}
            >
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};