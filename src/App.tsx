import './App.css'
import minyaktelon from './assets/minyaktelon.jpg'
import logosecond from './assets/logo-second.webp'
import petik from './assets/petik.svg'
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaTruck, FaShieldAlt, FaLeaf, FaGift, FaStar } from "react-icons/fa";
import { Star } from "lucide-react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Instagram,
  MessageCircle,
  MapPin,
  Clock,
  PhoneCall,
} from "lucide-react";
import { IoPaperPlaneOutline } from "react-icons/io5";

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.7 } });
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById(id || "");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [controls, id]);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      className="w-full relative z-0"
    >
      {children}
    </motion.section>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', minyak: '' });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, address, minyak } = formData;
    const phoneNumber = '6289654092662';
    const text = `Halo, Nama Saya ${name}. Mau menjual minyak sebesar ${minyak} dengan alamat pengambilan ${address}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  const menuItems = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#layanan" },
    { name: "Area", href: "#area" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ];

  const features = [
    {
      title: "Pengambilan Gratis",
      desc: "Tidak ada biaya sama sekali untuk layanan pengambilan minyak jelantah Anda",
      icon: <FaTruck className="text-blue-500" />,
      bg: "bg-blue-100",
    },
    {
      title: "Jadwal Fleksibel",
      desc: "Kami menyesuaikan waktu pengambilan dengan jadwal yang nyaman untuk Anda",
      icon: <FaClock className="text-green-500" />,
      bg: "bg-green-100",
    },
    {
      title: "Layanan Terpercaya",
      desc: "Tim profesional dengan pengalaman bertahun-tahun dalam pengelolaan limbah",
      icon: <FaShieldAlt className="text-purple-500" />,
      bg: "bg-purple-100",
    },
    {
      title: "Ramah Lingkungan",
      desc: "Membantu mengurangi pencemaran lingkungan melalui daur ulang yang tepat",
      icon: <FaLeaf className="text-green-400" />,
      bg: "bg-green-100",
    },
    {
      title: "Bonus Menarik",
      desc: "Dapatkan reward points untuk setiap pengumpulan minyak jelantah",
      icon: <FaGift className="text-yellow-500" />,
      bg: "bg-yellow-100",
    },
    {
      title: "Kualitas Terjamin",
      desc: "Proses pengolahan menggunakan teknologi modern dan standar internasional",
      icon: <FaStar className="text-orange-400" />,
      bg: "bg-orange-100",
    },
  ];

  const stats = [
    { value: "500+", label: "Pelanggan Puas" },
    { value: "10,000L", label: "Minyak Terdaur Ulang" },
    { value: "2 Tahun", label: "Pengalaman" },
  ];

  const testimonials = [
    {
      name: "Ibu Sari Wijaya",
      location: "Taman Adiyasa Blok A",
      image: "https://images.unsplash.com/photo-1595872018818-97555653a011",
      rating: 5,
      quote:
        "Pelayanan sangat memuaskan! Tim datang tepat waktu dan sangat profesional. Minyak jelantah saya diambil dengan bersih tanpa meninggalkan bau.",
    },
    {
      name: "Pak Budi Santoso",
      location: "Taman Adiyasa Blok C",
      image: "https://images.unsplash.com/photo-1595872018818-97555653a011",
      rating: 5,
      quote:
        "Sudah 6 bulan menggunakan layanan ini. Sangat membantu dan gratis! Recommended banget untuk tetangga-tetangga yang lain.",
    },
    {
      name: "Ibu Maya Putri",
      location: "Taman Adiyasa Blok F",
      image: "https://images.unsplash.com/photo-1595872018818-97555653a011",
      rating: 5,
      quote:
        "Awalnya ragu, tapi setelah coba ternyata benar-benar gratis dan berkualitas. Sekarang jadi rutin setiap bulan!",
    },
    {
      name: "Pak Agus Rahman",
      location: "Taman Adiyasa Blok H",
      image: "https://images.unsplash.com/photo-1595872018818-97555653a011",
      rating: 5,
      quote:
        "Layanan yang sangat membantu lingkungan. Tim sangat ramah dan proses pengambilan cepat. Terima kasih MinyakSecond!",
    },
  ];

  return (
    <div className="font-sans text-gray-800 relative">
      <header className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-xl">
        <div className="flex justify-between items-center px-6 md:px-70 py-4">
          <img src={logosecond} height={10} width={130} alt="" />

          <nav className="hidden md:flex space-x-8 font-medium">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-yellow-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen((p) => !p)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={`
    overflow-hidden transition-all duration-500 flex flex-col px-6 space-y-4 ease-in-out border-t
    ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}
  `}
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

      </header>

      {/* Hero */}
      <Section id="home">
        <div className="pt-40 pb-18 bg-gradient-to-br  from-lime-50 to-orange-50 text-center px-6">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            Terima <span className="text-yellow-600">Minyak Jelantah</span> / UCO
          </h2>
          <p className="text-gray-600 text-xl mb-6 md:w-1/2 mx-auto">
            Layanan pengambilan minyak bekas gratis untuk lingkungan yang lebih bersih dan berkelanjutan.
          </p>
          <div className="flex justify-center flex-col md:flex-row mb-8 gap-5 flex-wrap">
            <span className="px-6 py-3 rounded-full bg-white font-semibold text-md shadow-lg">♻️ 100% Daur Ulang</span>
            <span className="px-6 py-3 rounded-full bg-white font-semibold text-md shadow-lg">🌱 Ramah Lingkungan</span>
            <span className="px-6 py-3 rounded-full bg-white  font-semibold text-md shadow-lg">⭐ Layanan Terpercaya</span>
          </div>
          <div className="max-w-4xl mx-auto">
            <img
              src={minyaktelon}
              alt="Minyak Jelantah"
              className="rounded-xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section id="layanan">
        <div className="py-18 bg-gradient-to-br from-yellow-100 to-orange-100 text-center px-6">
          <h3 className="text-4xl font-bold mb-3">Ajukan Pengambilan Minyak Jelantah</h3>
          <p className="text-gray-600 mb-8 text-xl">Isi form di bawah ini dan tim kami akan menghubungi Anda</p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nama Lengkap"
              className="w-full border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="minyak"
              value={formData.minyak}
              onChange={handleChange}
              required

              placeholder="Jumlah Minyak (contoh: 5 liter, 2 jerigen)"
              className="w-full border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Alamat Lengkap untuk Pengambilan"
              className="w-full h-32 border border-slate-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r cursor-pointer items-center justify-center flex gap-3 from-yellow-400 to-orange-500 text-white font-semibold text-md py-2 hover:opacity-90 transition"
            >
              <span>
                <IoPaperPlaneOutline size={24} />
              </span>
              Kirim Permintaan Pengambilan
            </button>
          </form>
        </div>
      </Section>


      {/* Area Layanan */}
      <Section id="area">
        <div className="py-18 bg-gradient-to-br h-min  from-lime-50 to-orange-50 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">
              Area Layanan Kami
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              Kami melayani pengambilan minyak jelantah di sekitar area Tangerang, Banten
            </p>

            <div className="flex flex-col md:flex-row h-min md:h-125 gap-8 items-start md:px-50 ">
              <div className='relative h-full w-full py-8 md:pl-8'>
                <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      Informasi Layanan
                    </h3>

                    <div className="space-y-6 text-gray-700 text-sm md:text-base">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 text-yellow-500 text-xl mt-1">
                          <FaMapMarkerAlt size={23} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Lokasi Utama</p>
                          <p>
                            Gang Abah Kading, Jalan Raya Parung Panjang, Desa Malangnengah,
                            Kec Pagedangan, Kab Tangerang
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 text-yellow-500 text-xl mt-1">
                          <FaClock />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Jam Operasional</p>
                          <p>Senin - Sabtu: 08:00 - 17:00</p>
                          <p>Minggu: 09:00 - 15:00</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 text-yellow-500 text-xl mt-1">
                          <FaPhoneAlt />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Kontak Darurat</p>
                          <p>
                            WhatsApp:{" "}
                            <a
                              href="https://wa.me/6289654092662"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              089654092662
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 px-4 py-3 text-sm">
                    <strong>Catatan:</strong> Untuk area di luar Tangerang, silakan hubungi kami terlebih dahulu untuk konfirmasi layanan.
                  </div>
                </div>
              </div>


              <div className='relative h-full w-full py-8 md:pr-8'>
                <div className="relative h-full rounded-2xl p-[6px] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 shadow-xl overflow-hidden">
                  <div className="h-full w-full rounded-2xl overflow-hidden bg-white">
                    <iframe
                      title="Lokasi Layanan"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253795.6148400271!2d106.2742946!3d-6.321836300000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e3ee5cd8fef5%3A0x1fcc1d4db03adc76!2sTerima%20minyak%20jelantah%20(MINYAK%20SECOND)!5e0!3m2!1sid!2sid!4v1760185145414!5m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="border-0 w-full h-full rounded-2xl"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="absolute hidden md:flex bottom-4 right-4 bg-white rounded-full shadow-lg px-4 py-3 text-center text-sm font-semibold text-yellow-600">
                  <div className='m-2'>
                    <span className="text-lg font-bold">15km</span> <br /> <span className='text-black'>Radius Layanan</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </Section>


      {/* Mengapa Memilih Kami */}
      <Section id="keunggulan">
        <div className="py-18 bg-gradient-to-br from-blue-50 to-red-50 text-center px-6">
          <h3 className="text-4xl font-bold mb-3">Mengapa Memilih Kami?</h3>
          <p className="text-gray-600 mb-18 text-xl"> Kami berkomitmen memberikan layanan terbaik untuk lingkungan yang lebih bersih
            dan berkelanjutan</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-10">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className={`mx-auto w-14 h-14 flex items-center justify-center rounded-full ${f.bg} mb-4`}>
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-2">{f.title}</h4>
                <p className="text-gray-600 text-md">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className='md:px-70 h-min'>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl py-12 px-8 w-full text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Bergabunglah dengan Gerakan Lingkungan Bersih!
              </h3>
              <p className="text-white/90 mb-8 text-sm md:text-base">
                Setiap tetes minyak jelantah yang Anda serahkan berkontribusi untuk planet yang lebih hijau
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {stats.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-3xl font-extrabold">{item.value}</p>
                    <p className="text-white/90 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* Testimoni */}
      <Section id="testimoni">
        <div
          className="bg-gradient-to-br from-lime-50 to-sky-100 py-20 px-6 text-center scroll-smooth"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-gray-600 mb-12">
              Kepuasan pelanggan adalah prioritas utama kami. Lihat testimoni dari
              mereka yang telah merasakan layanan kami.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-xl hover:shadow-2xl rounded-2xl p-6 text-left transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full border-2 border-yellow-400"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: item.rating }).map((_, j) => (
                          <Star
                            key={j}
                            className="text-yellow-400 fill-yellow-400 w-4 h-4"
                          />
                        ))}
                      </div>
                    </div>
                    <span className="ml-auto text-yellow-400 text-2xl"><img src={petik} alt="" /></span>
                  </div>

                  <p className="italic text-gray-600 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white shadow-xl rounded-2xl w-full md:w-2xl py-6 px-8 mt-12 inline-block">
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400 w-5 h-5"
                  />
                ))}
              </div>
              <p className="font-bold text-gray-800 text-lg">
                Rating Rata-rata: 5.0/5
              </p>
              <p className="text-gray-500 text-sm">
                Berdasarkan 500+ ulasan pelanggan
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="kontak">
        <footer className="bg-[#141C26] text-white pt-16 pb-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img
                src={logosecond}
                alt="Minyak Second"
                className="w-36 mb-6"
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Solusi terpercaya untuk pengelolaan minyak jelantah yang ramah
                lingkungan. Bersama kita ciptakan lingkungan yang lebih bersih dan
                berkelanjutan.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/minyaksecond.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-pink-500 to-purple-500 p-3 rounded-full hover:opacity-90 transition"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/6289654092662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] p-3 rounded-full hover:opacity-90 transition"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-10 h-10 text-yellow-400 mt-0.5" />
                  <span>
                    <span className="font-semibold text-white">Alamat:</span>
                    <br />
                    Gang abah kading, Jalan raya Parung Panjang, Desa Malangnengah,
                    Kec Pagedangan, Kab Tangerang
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-green-400" />
                  <span>
                    <span className="font-semibold text-white">WhatsApp:</span><br />
                    089654092662
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-pink-400" />
                  <span>
                    <span className="font-semibold text-white">Instagram:</span><br />
                    @minyaksecond.id
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span>
                    <span className="font-semibold text-white">Jam Operasional:</span>
                    <br />
                    Senin – Sabtu: 08:00 – 17:00
                    <br />
                    Minggu: 09:00 – 15:00
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Pengambilan Minyak Jelantah Gratis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Konsultasi Pengelolaan Limbah
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Edukasi Lingkungan
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Program Reward Points
                </li>
              </ul>

              <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-left p-4 text-gray-900">
                <h4 className="font-bold text-white">Hubungi Kami Sekarang!</h4>
                <p className="text-sm text-white">
                  Dapatkan layanan pengambilan minyak jelantah gratis hari ini juga
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            © 2025 MinyakSecond.id. Semua hak dilindungi.{" "}
            <span className="text-yellow-400 font-semibold">Life is Better</span>{" "}
            dengan lingkungan yang bersih.
          </div>
        </footer>
      </Section>
    </div>
  );
}
