import { clients } from "@/data/clients";

export default function ClientsSection() {
  const capabilities = [
    {
      number: "01",
      title: "Kargo darat",
      image: "/images/kargo-darat.jpg",
      desc: "Pengiriman terjadwal untuk paket besar, palet, hingga muatan satu truk penuh.",
    },
    {
      number: "02",
      title: "Kargo laut & udara",
      image: "/images/kargo-laut.jpg",
      desc: "Pilihan moda pengiriman dengan kapasitas dan biaya yang efisien.",
    },
    {
      number: "03",
      title: "Gudang & fulfillment",
      image: "/images/gudang.jpg",
      desc: "Penyimpanan, pengelolaan inventori, picking, dan packing.",
    },
  ];

  return (
    <>
      {/* KLIEN DAN MITRA */}
      <section className="section clients-section">
        <div className="container">
          <div className="section-title">
            <span className="section-subtitle">MITRA BISNIS</span>
            <h2>Klien dan Mitra</h2>
          </div>

          <div className="clients-grid">
            {clients.map((client) => (
              <div className="client-card" key={client.id}>
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
                 {/* MITRA EKSPOR DAN IMPOR */}
<section className="trusted-partners">
  <div className="container">
    <h2>Dipercaya Perusahaan Ekspor &amp; Impor Terkemuka</h2>
    <p className="trusted-description">
      Lebih dari 180 eksportir komoditas unggulan dan importir bahan baku
      industri mempercayakan kelancaran pengiriman lintas negara kepada
      Nusantara Logistik.
    </p>

   <div className="trusted-grid">
  {[
    {
      name: "INDO SAWIT",
      subtitle: "EKSPOR CPO",
      type: "EKSPOR",
      route: "IDTPP → NLRTM",
      description:
        "Pengiriman 420+ TEU/bulan komoditas turunan sawit ke Eropa.",
      logo: "/images/partners/indo-sawit.png",
    },
    {
      name: "KRAKATAU",
      subtitle: "BAJA GLOBAL",
      type: "IMPOR",
      route: "KRPUS → IDTPP",
      description:
        "Impor gulungan baja dan mesin berat industri dari Korea Selatan.",
      logo: "/images/partners/krakatau.png",
    },
    {
      name: "GAYO ROAST",
      subtitle: "KOPI NUSANTARA",
      type: "EKSPOR",
      route: "IDBLW → DEHAM",
      description:
        "Ekspor kontainer terkontrol suhu untuk biji kopi arabika spesialti.",
      logo: "/images/partners/gayo-roast.png",
    },
    {
      name: "SINAR TEKSTIL",
      subtitle: "GARMEN MANDIRI",
      type: "EKSPOR",
      route: "IDSRG → USLAX",
      description:
        "Konsolidasi LCL & FCL produk garmen ke pelabuhan Pantai Barat AS.",
      logo: "/images/partners/sinar-tekstil.png",
    },
    {
      name: "PRIMA TECH",
      subtitle: "ELEKTRONIK ASIA",
      type: "IMPOR",
      route: "CNSZX → IDCGK",
      description:
        "Kargo udara ekspres untuk komponen semikonduktor dan modul PCB.",
      logo: "/images/partners/prima-tech.png",
    },
    {
      name: "SAMUDRA TUNA",
      subtitle: "HASIL LAUT BEKU",
      type: "EKSPOR",
      route: "IDSUB → JPTYO",
      description:
        "Rantai dingin Reefer -20°C untuk ekspor tuna segar dan beku ke Jepang.",
      logo: "/images/partners/samudra-tuna.png",
    },
    {
      name: "AGRO REMPAH",
      subtitle: "KOMODITAS TIMUR",
      type: "EKSPOR",
      route: "IDMAK → AEJEA",
      description:
        "Pengiriman rempah pala, cengkeh, dan lada ke hub Timur Tengah.",
      logo: "/images/partners/agro-rempah.png",
    },
    {
      name: "KIMA MEDIKA",
      subtitle: "FARMASI IMPOR",
      type: "IMPOR",
      route: "CHBSL → IDTPP",
      description:
        "Pengurusan izin BPOM dan kepabeanan bahan baku farmasi dari Swiss.",
      logo: "/images/partners/kima-medika.png",
    },
  ].map((partner) => (
    <article className="trusted-card" key={partner.name}>
      <div className="trusted-card-heading">
        <img
          className="trusted-logo"
          src={partner.logo}
          alt={`Logo ${partner.name}`}
        />

        <div>
          <h3>{partner.name}</h3>
          <span>{partner.subtitle}</span>
        </div>
      </div>

      <div className="trusted-card-info">
        <span>{partner.type}</span>
        <strong>{partner.route}</strong>
      </div>

      <p>{partner.description}</p>
    </article>
  ))}
</div>
</div>
</section>
      {/* KAPABILITAS KAMI */}
      <section className="capability-section">
        <div className="capability-container">
          <p className="capability-label">— 03 / KAPABILITAS KAMI</p>

          <div className="capability-heading">
            <h2>Satu mitra. Seluruh alur logistik.</h2>
            <p>
              Dari satu paket hingga satu armada, kami menyusun
              layanan mengikuti kebutuhan Anda.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <div className="capability-card" key={item.number}>
                <img src={item.image} alt={item.title} />

                <h3>
                  <span>{item.number}</span> {item.title}
                </h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}