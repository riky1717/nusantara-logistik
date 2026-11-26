import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
};

export default function TentangKamiPage() {
  return (
    <>
      {/* PROFIL PERUSAHAAN */}
      <section className="section">
        <div className="container">
          <span className="section-subtitle">TENTANG KAMI</span>

          <h1>Profil Perusahaan</h1>
           
          <p>
             PT NUSANTARA LOGISTIK adalah perusahaan fregiht forwarding yg 
             berdiri sejak 2010 dengan berfokus membantu importir komoditas dalam 
             pengurusan kepabeanan (ppjk) dengan mengelola pengiriman lintas negara secara terukur.
          </p>

          <p>
            Halaman ini berisi profil, visi, misi,
            dan informasi perusahaan logistik.
          </p>

          <p>
            Kami menyediakan solusi logistik, pergudangan,
            dan distribusi yang aman, cepat, serta terpercaya.
          </p>

          <p>
            Didirikan sebagai inisiatif pergerakan kargo
            maritim dan darat nasional, Nusantara Logistik
            kini bertransformasi menjadi orkestrator rantai
            pasok terpadu.
          </p>

          <p>
            Kami mengintegrasikan armada darat, jalur kargo
            terkoneksi, dan sistem udara express berbasis
            otomatisasi digital.
          </p>
        </div>
      </section>

      {/* MENGAPA NUSANTARA LOGISTIK */}
      <section className="about-values bg-[#102b3b] px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold tracking-widest text-orange-400">
            — 02 / MENGAPA NUSANTARA LOGISTIK
          </p>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <h2 className="text-3xl font-bold md:text-4xl">
              Kepastian dalam setiap pengiriman.
            </h2>

            <p className="text-sm leading-7 text-gray-300">
              Kami menghadirkan layanan logistik yang aman,
              transparan, dan didukung tim profesional.
            </p>
          </div>

          <div className="grid gap-8 border-t border-gray-600 pt-8 md:grid-cols-3">
            {[
              ["01", "Terpantau Setiap Saat", "Informasi pengiriman jelas dari awal hingga barang diterima."],
              ["02", "Standar Pelayanan", "Setiap proses dilakukan dengan prosedur yang aman."],
              ["03", "Tim Profesional", "Didukung tenaga berpengalaman di bidang logistik."],
            ].map(([number, title, desc]) => (
              <div key={number}>
                <p className="mb-5 text-orange-400">{number} /</p>
                <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISI DAN MISI */}
      <section className="about-why bg-[#102b3b] px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-bold tracking-widest text-orange-400">
            — 03 / ARAH DAN NILAI
          </p>

          <div className="grid gap-12 border-b border-gray-600 pb-14 md:grid-cols-2">
            <div>
              <p className="mb-5 text-xs text-orange-400">VISI KAMI</p>

              <h2 className="text-3xl font-bold leading-tight">
                Menjadi mitra logistik terpercaya bagi bisnis Indonesia.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-300">
                Membangun layanan logistik yang mudah dijangkau,
                efisien, dan dapat diandalkan.
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs text-orange-400">MISI KAMI</p>

              {[
                "Memberikan layanan pengiriman yang aman dan tepat waktu.",
                "Mengembangkan jaringan distribusi yang luas.",
                "Mengutamakan kepuasan pelanggan.",
                "Menggunakan teknologi untuk meningkatkan pelayanan.",
              ].map((item, index) => (
                <div key={index} className="flex gap-5 border-b border-gray-600 py-4">
                  <span className="text-orange-400">0{index + 1}</span>
                  <p className="text-sm leading-6 text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="mb-10 mt-12 text-2xl font-bold">
            Nilai kami dalam setiap pelayanan.
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              ["01", "Tepat Janji", "Menjaga komitmen dan ketepatan waktu."],
              ["02", "Terbuka", "Memberikan informasi secara jelas."],
              ["03", "Peduli", "Memperhatikan kebutuhan pelanggan."],
              ["04", "Terus Berkembang", "Meningkatkan kualitas layanan."],
            ].map(([number, title, desc]) => (
              <div key={number}>
                <p className="mb-4 text-xs text-orange-400">{number} /</p>
                <h3 className="mb-3 font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}