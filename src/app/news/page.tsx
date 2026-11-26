import type { Metadata } from "next";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Berita",
};

export default function BeritaPage() {
  const marketData = [
    {
      title: "Biaya Angkut Darat",
      value: "114.2",
      change: "+0.8%",
    },
    {
      title: "Kontainer 40ft Jakarta",
      value: "8.45M",
      change: "Tetap",
    },
    {
      title: "Bunker Fuel (SBY)",
      value: "$582",
      change: "-1.2%",
    },
  ];

  const topics = [
    {
      category: "REGULASI DARAT",
      title: "Kemenhub Rilis Aturan Baru ODOL",
      source: "Biro Hukum Perhubungan",
      views: "32.4k dibaca",
    },
    {
      category: "KARGO UDARA",
      title: "Garuda Cargo Buka Rute Penerbangan Khusus Ekspor",
      source: "Denpasar Hub",
      views: "18.1k dibaca",
    },
    {
      category: "GUDANG & TEKNOLOGI",
      title: "Otomasi Pergudangan Berbasis AI",
      source: "Riset Supply Chain",
      views: "14.9k dibaca",
    },
  ];

  const latestNews = [
    {
      category: "LOGISTIK DAERAH",
      time: "1 jam lalu",
      title: "Pembangunan Tol Laut Maluku Utara Tambah 3 Titik Singgah",
      description: "Pemerintah menjamin pasokan komoditas dan kelancaran distribusi.",
      image: "/images/news-kapal.jpg",
    },
    {
      category: "RANTAI PASOK",
      time: "2 jam lalu",
      title: "Investasi Pusat Distribusi Pendingin (Cold Storage)",
      description: "Permintaan ruang simpan beku produk terus meningkat.",
      image: "/images/news-warehouse.jpg",
    },
  ];

  return (
    <main className="news-page">

      {/* BERITA LAMA */}
      <section className="section">
        <div className="container">
          <span className="section-subtitle">INFORMASI</span>

          <h1>Berita dan Artikel</h1>

          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.id}>
                <img
                  src="/images/hero-photo(6).jpg"
                  alt={item.title}
                />

                <div className="news-content">
                  <time dateTime={item.date}>{item.date}</time>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDEKS PASAR */}
      <section className="news-extra">
        <div className="container">
          <div className="news-heading">
            <h2>Indeks Pasar & Tarif Cepat</h2>
            <span>REALTIME ↗</span>
          </div>

          <div className="market-grid">
            {marketData.map((item) => (
              <div className="market-card" key={item.title}>
                <p>{item.title}</p>
                <h3>{item.value}</h3>
                <span>{item.change}</span>
              </div>
            ))}
          </div>

          <div className="market-tags">
            <span>Terbaru</span>
            <span>Pelabuhan & Kapal</span>
            <span>Kargo Udara</span>
            <span>Regulasi Ekspor</span>
          </div>
        </div>
      </section>

      {/* TOPIK HANGAT */}
      <section className="news-extra">
        <div className="container">
          <div className="news-heading">
            <h2>Topik Hangat Hari Ini</h2>
            <span>Update 1 Jam Lalu</span>
          </div>

          <div className="topic-list">
            {topics.map((topic, index) => (
              <article className="topic-card" key={topic.title}>
                <strong className="topic-number">
                  0{index + 1}
                </strong>

                <div>
                  <span>{topic.category}</span>
                  <h3>{topic.title}</h3>
                  <p>
                    {topic.source} &nbsp; • &nbsp; {topic.views}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KABAR TERKINI */}
      <section className="news-extra latest-section">
        <div className="container">
          <div className="news-heading">
            <h2>Kabar Terkini</h2>
          </div>

          <div className="latest-list">
            {latestNews.map((item) => (
              <article className="latest-card" key={item.title}>
                <div className="latest-content">
                  <span>
                    {item.category} • {item.time}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <img src={item.image} alt={item.title} />
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}