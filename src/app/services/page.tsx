import type { Metadata } from "next";

import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Layanan",
};

export default function LayananPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          subtitle="LAYANAN KAMI"
          title="Layanan Logistik"
          description="Berikut adalah layanan yang perusahaan kami sediakan."
        />

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
      {/* KORIDOR RUTE INTERNASIONAL */}
<section className="route-section">
  <div className="route-container">
    <span className="route-subtitle">JANGKAUAN RUTE INTERNASIONAL</span>
    <h2>Koridor Utama Ekspor & Impor</h2>

    <div className="route-grid">
      <article className="route-card">
        <h3>Asia Timur & ASEAN</h3>
        <p>Singapura, Shanghai, Shenzhen, Busan, Tokyo</p>
      </article>

      <article className="route-card">
        <h3>Eropa Barat</h3>
        <p>Rotterdam, Hamburg, Antwerp, Felixstowe</p>
      </article>

      <article className="route-card">
        <h3>Timur Tengah & India</h3>
        <p>Jebel Ali, Jeddah, Nhava Sheva, Mundra</p>
      </article>

      <article className="route-card">
        <h3>Amerika Utara</h3>
        <p>Los Angeles, Long Beach, Savannah, Vancouver</p>
      </article>
    </div>
  </div>
</section>
    </section>
  );
};