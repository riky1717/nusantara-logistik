import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>404 - Halaman Tidak Ditemukan</h1>

        <p>
          Maaf, halaman yang kamu cari tidak tersedia.
        </p>

        <Link href="/" className="text-link">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
};