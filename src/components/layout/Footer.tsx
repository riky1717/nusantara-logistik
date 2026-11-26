export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-container">

        <div className="footer-brand">
          <h2><span>↗</span> NUSANTARA LOGISTIK</h2>
          <p>
            Menghubungkan barang, menggerakkan bisnis.
            Mitra logistik dari titik asal hingga tujuan berikutnya.
          </p>
          <h4>info@nusantaralogistik.com</h4>
          <p>
            Senin–Jumat, 08.00–17.00 WIB<br />
            Melayani kebutuhan logistik Anda.
          </p>
        </div>

        <div className="footer-column">
          <h4>Layanan</h4>
          <a href="/services">Kargo darat</a>
          <a href="/services">Kargo laut & udara</a>
          <a href="/services">Gudang & fulfillment</a>
          <a href="/services">Solusi bisnis</a>
        </div>

        <div className="footer-column">
          <h4>Informasi</h4>
          <a href="/about_us">Jangkauan</a>
          <a href="/news">Berita terbaru</a>
          <a href="/contacts">Pusat bantuan</a>
          <a href="/contacts">Minta penawaran</a>
        </div>

        <div className="footer-column">
          <h4>Pusat Operasional</h4>
          <p>Jakarta, Indonesia</p>
          <p>Mitra logistik untuk bisnis Anda.</p>
          <div className="footer-social">
            <a href="#">LinkedIn ↗</a>
            <a href="#">Instagram ↗</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Nusantara Logistik. Seluruh hak cipta dilindungi.
          <br />
          Solusi logistik, pergudangan, dan distribusi.
        </p>

        <div>
          <a href="#">Kebijakan privasi</a>
          <a href="#">Syarat & ketentuan</a>
        </div>
      </div>
    </footer>
  );
}