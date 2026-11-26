import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ServicesSection() {
  return (
    <section className="section services-section">
      <div className="container">
        <SectionTitle
          subtitle="LAYANAN KAMI"
          title="Solusi untuk Kebutuhan Logistik"
          description="Jelajahi layanan perusahaan logistik kami."
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
    </section>
  );
};