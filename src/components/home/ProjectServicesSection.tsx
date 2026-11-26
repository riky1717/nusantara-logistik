const services = [
  {
    title: "Sea Freight",
    image: "/images/sea-freight.jpg",
    description: "Layanan pengiriman barang melalui jalur laut untuk kebutuhan domestik dan internasional.",
  },
  {
    title: "Air Freight",
    image: "/images/air-freight.jpg",
    description: "Pengiriman udara yang cepat dan aman untuk berbagai kebutuhan bisnis.",
  },
  {
    title: "Warehouse",
    image: "/images/warehouse.jpg",
    description: "Penyimpanan dan pengelolaan barang dengan fasilitas gudang yang memadai.",
  },
  {
    title: "Special Service",
    image: "/images/special-service.jpg",
    description: "Penanganan pengiriman khusus sesuai kebutuhan dan karakteristik barang.",
  },
  {
    title: "Custom Clearance",
    image: "/images/custom-clearance.jpg",
    description: "Layanan pengurusan dokumen dan proses kepabeanan untuk pengiriman barang.",
  },
  {
    title: "Logistic Service",
    image: "/images/logistic-service.jpg",
    description: "Solusi transportasi, distribusi, pengemasan, dan pengiriman barang.",
  },
];

export default function ProjectServicesSection() {
  return (
    <section className="project-services">
      <div className="container">
        <div className="project-services-heading">
          <span className="section-subtitle">LAYANAN KAMI</span>
          <h2>Solusi Logistik Nusantara Logistik</h2>
          <p>
            Kami menyediakan berbagai layanan logistik untuk mendukung
            kebutuhan pengiriman dan distribusi bisnis Anda.
          </p>
        </div>

        <div className="project-services-grid">
          {services.map((service) => (
            <div className="project-service-card" key={service.title}>
              <img src={service.image} alt={service.title} />
              <div className="project-service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}