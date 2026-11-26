import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="hero-label">
          SOLUSI LOGISTIK TERINTEGRASI
        </span>

        <h1>
          Menghubungkan Bisnis
          <br />
          Melalui Solusi Logistik
        </h1>

        <p>
          Mendukung kebutuhan pergudangan, distribusi,
          dan pengelolaan logistik melalui layanan
          yang terencana dan profesional.
        </p>

        <div className="hero-actions">
          <Button
            text="Lihat Layanan"
            href="/services"
          />

          <Button
            text="Hubungi Kami"
            href="/contacts"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};