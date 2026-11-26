import Link from "next/link";
import { news } from "@/data/news";

export default function NewsSection() {
  return (
    <section className="section news-section">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <span className="section-subtitle">
              INFORMASI
            </span>

            <h2>Artikel dan Berita</h2>
          </div>

          <Link href="/news" className="news">
            Semua Berita →
          </Link>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <article
              className="news-card"
              key={item.id}
            >
              <img
                src="/images/hero-photo(3).jpg"
                alt={item.title}
              />

              <div className="news-content">
                <time dateTime={item.date}>
                  {item.date}
                </time>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};