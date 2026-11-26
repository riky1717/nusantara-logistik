import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
};

export default function KontakPage() {
  return (
    <main className="contact-page">

      {/* JUDUL HALAMAN */}
      <div className="contact-banner">
        CONTACT US
      </div>

      {/* FORMULIR DAN INFORMASI KANTOR */}
      <section className="contact-main">
        <div className="contact-container">

          {/* FORMULIR LAMA */}
          <div className="contact-form-box">
            <span className="section-subtitle">HUBUNGI KAMI</span>

            <h1>Kontak Perusahaan</h1>

            <p>
              Silakan hubungi kami untuk mendapatkan informasi
              mengenai layanan logistik Nusantara Logistik.
            </p>

            <form className="contact-form">
              <div>
                <label htmlFor="name">Nama lengkap</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukkan email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tuliskan pesan Anda"
                  required
                />
              </div>

              <button type="button" className="button button-primary">
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* INFORMASI KANTOR */}
          <div className="contact-office">

            <div className="office-card">
              <span>01 / KANTOR PUSAT</span>
              <h2>INDONESIA</h2>

              <h3>Nusantara Logistik</h3>

              <h4>Jam Operasional</h4>
              <p>Senin - Sabtu : 08.00 - 17.00 WIB</p>

              <h4>Alamat Kantor</h4>
              <p>
                Jl. Raya Lenteng Agung Kav. 22 no. 20
                 Jakarta Selatan 12610
                 Indonesia
              </p>

              <h4>Nomor Telepon</h4>
              <p>+62822-8057-4543</p>

              <h4>Email</h4>
              <p>info@nusantaralogistik.com</p>
            </div>

            <div className="office-card">
              <span>02 / JARINGAN INTERNASIONAL</span>
              <h2>INTERNATIONAL</h2>

              <h3>International Logistics Network</h3>

              <p>
                Nusantara Logistik berkomitmen mendukung
                kebutuhan pengiriman dan distribusi
                melalui jaringan logistik internasional.
              </p>

              <h4>Layanan</h4>
              <p>
                Sea Freight, Air Freight, Export,
                Import, dan International Shipping, import Door to Door, jasa transfer rmb/yuan
                jasa custome handling, layanan Door to Port, pengadaan jasa barang china.
              </p>

              <h4>Informasi Kerja Sama</h4>
              <p>
                Hubungi tim kami untuk informasi
                kerja sama dan pengiriman internasional.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}