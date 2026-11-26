import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const services = [
      {
      title: "jasa pengadaan barang china",
      image: "/images/sea-freight1.jpg",
      desc: "Layanan pencarian barang untuk kebutuhan bisnis anda, penitipan jasa tranfer rmb/yuan.",
    },
    {
      title: "Sea Freight",
      image: "/images/sea-freight.jpg",
      desc: "Layanan pengiriman barang melalui jalur laut untuk kebutuhan bisnis.",
    },
    {
      title: "Air Freight",
      image: "/images/air-freight.jpg",
      desc: "Pengiriman udara yang cepat dan aman ke berbagai tujuan.",
    },
    {
      title: "Warehouse",
      image: "/images/gudang.jpg",
      desc: "Penyimpanan dan pengelolaan barang dengan fasilitas gudang.",
    },
    {
      title: "Special Service",
      image: "/images/special-service.jpg",
      desc: "Penanganan pengiriman khusus sesuai kebutuhan pelanggan.",
    },
    {
      title: "Custom Clearance",
      image: "/images/custom-clearance.jpg",
      desc: "Layanan pengurusan dokumen dan proses kepabeanan.",
    },
    {
      title: "Logistic Service",
      image: "/images/logistic-service.jpg",
      desc: "Solusi transportasi dan distribusi barang terintegrasi.",
    },
  ];

  return (
    <>
      {/* BAGIAN PROJECT LAMA */}
      <section className="section projects-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <span className="section-subtitle">PORTOFOLIO</span>
              <h2>Contoh Proyek Logistik</h2>
            </div>

            <Link href="/projects" className="projects">
              Lihat Semua →
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <img
                  src="/images/hero-photo(4).jpg"
                  alt={project.title}
                />

                <div className="project-content">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BAGIAN LAYANAN BARU */}
      <section className="project-services">
        <div className="container">
          <span className="section-subtitle">LAYANAN KAMI</span>

          <h2>Solusi Logistik Nusantara Logistik</h2>

          <p className="services-description">
            Kami menghadirkan berbagai solusi pengiriman,
            pergudangan, dan distribusi untuk mendukung bisnis Anda.
          </p>

          <div className="project-services-grid">
            {services.map((service, index) => (
              <article className="project-service-card" key={service.title}>
                <img src={service.image} alt={service.title} />

                <div className="project-service-content">
                  <span>0{index + 1} / LAYANAN</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}