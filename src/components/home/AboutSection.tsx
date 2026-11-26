import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src="/images/hero-photo(1).jpg"
            alt="Ilustrasi aktivitas pergudangan"
          />
        </div>

        <div className="about-content">
          <span className="section-subtitle">
            TENTANG KAMI
          </span>

          <h2>
            Solusi Logistik Untuk Berbagai
            Kebutuhan Pengiriman Bisnis Anda 
          </h2>

          <p>
            mulai dari pengiriman cargo antarmuka, layanan express,
            trucking dan kontainer, hingga kebutuhan kepabeanan,penyimpanan
            serta pengiriman kendaraan.
          </p>

          <p>
            Informasi perusahaan, layanan, dan proyek
            dapat disesuaikan berdasarkan data resmi
            yang tersedia.
          </p>

          <Link
            href="/about_us"
            className="AboutSection"
          >
            Selengkapnya →
          </Link>
        </div>
      </div>
    </section>
  );
};