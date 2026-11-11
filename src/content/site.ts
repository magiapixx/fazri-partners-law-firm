import columns from "@/assets/practice-columns.jpg";
import stairs from "@/assets/practice-stairs.jpg";
import glass from "@/assets/practice-glass.jpg";
import boardroom from "@/assets/boardroom.jpg";
import handshake from "@/assets/handshake.jpg";
import skyline from "@/assets/jakarta-skyline.jpg";
import fazri from "@/assets/team-fazri.jpg";
import anindya from "@/assets/team-anindya.jpg";
import raka from "@/assets/team-raka.jpg";
import sekar from "@/assets/team-sekar.jpg";

export const firm = {
  name: "Fazri & Partners",
  tagline: "Nasihat Hukum dengan Keyakinan",
  email: "counsel@fazripartners.com",
  phone: "+62 21 5080 1188",
  address: "Sequis Tower, 28th Floor, Jl. Jend. Sudirman Kav. 71, Jakarta 12190",
};

export const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/about", label: "Tentang Kami" },
  { to: "/what-we-do", label: "Layanan" },
  { to: "/case-studies", label: "Studi Kasus" },
  { to: "/insight", label: "Wawasan" },
] as const;

export type Practice = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  services: string[];
};

export const practices: Practice[] = [
  {
    slug: "corporate",
    title: "Korporasi & M&A",
    image: columns,
    summary:
      "Menyusun, menegosiasikan, dan menuntaskan transaksi yang membentuk ulang bisnis — mulai dari penanaman modal asing hingga akuisisi lintas negara.",
    services: [
      "Merger & akuisisi",
      "Penanaman modal asing (PMA)",
      "Usaha patungan",
      "Restrukturisasi perusahaan",
      "Perjanjian pemegang saham",
    ],
  },
  {
    slug: "disputes",
    title: "Litigasi & Sengketa",
    image: stairs,
    summary:
      "Pendampingan terukur di hadapan pengadilan Indonesia, BANI, dan lembaga arbitrase internasional, berlandaskan persiapan matang dan strategi penyelesaian.",
    services: [
      "Litigasi komersial",
      "Arbitrase nasional & internasional",
      "Kepailitan & PKPU",
      "Pembelaan perkara tindak pidana korporasi",
      "Pelaksanaan putusan arbitrase",
    ],
  },
  {
    slug: "finance",
    title: "Perbankan & Keuangan",
    image: glass,
    summary:
      "Memberikan nasihat kepada pemberi pinjaman, sponsor, dan debitur mengenai pembiayaan, penawaran pasar modal, serta kewajiban regulasi OJK dan Bank Indonesia.",
    services: [
      "Pembiayaan sindikasi & proyek",
      "Pasar modal & IPO",
      "Keuangan syariah",
      "Regulasi tekfin",
      "Restrukturisasi utang",
    ],
  },
  {
    slug: "real-estate",
    title: "Properti & Infrastruktur",
    image: handshake,
    summary:
      "Pendampingan pengadaan tanah, pengembangan, dan infrastruktur di seluruh Indonesia, mulai dari uji tuntas hak atas tanah hingga kemitraan pemerintah dan swasta.",
    services: [
      "Hak atas tanah & uji tuntas",
      "Pengembangan properti",
      "KPBU & infrastruktur",
      "Kontrak konstruksi",
      "Energi & sumber daya alam",
    ],
  },
];

export const expertise = [
  {
    group: "Bisnis",
    items: [
      "Tata Kelola Perusahaan",
      "Persaingan Usaha & Antimonopoli",
      "Ketenagakerjaan",
      "Konsultasi Pajak",
      "Kekayaan Intelektual",
    ],
  },
  {
    group: "Regulasi",
    items: [
      "Perizinan",
      "Pelindungan Data Pribadi (UU PDP)",
      "Antikorupsi",
      "Kepabeanan & Perdagangan",
      "Lingkungan",
    ],
  },
  {
    group: "Klien Privat",
    items: [
      "Kekayaan Keluarga",
      "Perencanaan Suksesi",
      "Perwalian & Warisan",
      "Sengketa Bisnis Keluarga",
      "Filantropi",
    ],
  },
];

export const stats = [
  { label: "Nilai transaksi yang ditangani", value: "Rp 48T+" },
  { label: "Tahun pengalaman", value: "22" },
  { label: "Advokat & spesialis", value: "60+" },
  { label: "Perkara yang diselesaikan", value: "1.200+" },
];

export type Person = { name: string; role: string; image: string; focus: string };

export const team: Person[] = [
  {
    name: "Fazri Ramadhan",
    role: "Pendiri & Rekan Pengelola",
    image: fazri,
    focus: "Korporasi & M&A",
  },
  { name: "Anindya Kusuma", role: "Rekan Senior", image: anindya, focus: "Litigasi & Arbitrase" },
  { name: "Sekar Wulandari", role: "Rekan", image: sekar, focus: "Perbankan & Keuangan Syariah" },
  { name: "Raka Pratama", role: "Rekan", image: raka, focus: "Properti & Infrastruktur" },
];

export type CaseStudy = {
  slug: string;
  practice: string;
  title: string;
  client: string;
  outcome: string;
  summary: string;
  image: string;
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-telecom-acquisition",
    practice: "Korporasi & M&A",
    title: "Mendampingi akuisisi operator telekomunikasi regional senilai US$420 juta",
    client: "Dana infrastruktur Asia Tenggara",
    outcome: "Rampung dalam 7 bulan dengan seluruh persetujuan regulator",
    summary:
      "Kami memimpin uji tuntas, pengajuan notifikasi merger kepada KPPU, dan negosiasi di tiga yurisdiksi hingga memperoleh persetujuan tanpa syarat.",
    image: glass,
    year: "2025",
  },
  {
    slug: "bani-construction-award",
    practice: "Litigasi & Sengketa",
    title: "Memenangkan seluruh klaim dalam arbitrase konstruksi senilai Rp1,3 triliun",
    client: "Kontraktor EPC nasional",
    outcome: "Seluruh nilai klaim dikabulkan beserta biaya perkara",
    summary:
      "Mewakili kontraktor di BANI dalam sengketa keterlambatan dan perubahan pekerjaan proyek jalan tol, dilanjutkan dengan keberhasilan pelaksanaan putusan.",
    image: stairs,
    year: "2024",
  },
  {
    slug: "sukuk-programme",
    practice: "Perbankan & Keuangan",
    title: "Menyusun program sukuk hijau perdana",
    client: "Perusahaan energi terbarukan tercatat di bursa",
    outcome: "Penawaran mengalami kelebihan permintaan 2,4 kali",
    summary:
      "Menyusun dokumen program, berkoordinasi dengan DSN-MUI dan OJK, serta menyelaraskan struktur dengan standar taksonomi hijau.",
    image: columns,
    year: "2024",
  },
  {
    slug: "industrial-estate-land",
    practice: "Properti & Infrastruktur",
    title: "Konsolidasi 1.100 hektare lahan untuk kawasan industri",
    client: "Usaha patungan Jepang–Indonesia",
    outcome: "Kepastian hak atas 2.300 bidang tanah",
    summary:
      "Program pengadaan tanah multi-tahun di Jawa Tengah, menyelesaikan tumpang tindih klaim dan memperoleh persetujuan tata ruang.",
    image: skyline,
    year: "2023",
  },
  {
    slug: "family-business-succession",
    practice: "Korporasi & M&A",
    title: "Menyelesaikan suksesi bisnis keluarga lintas tiga generasi",
    client: "Grup barang konsumsi milik keluarga",
    outcome: "Diselesaikan secara kekeluargaan tanpa proses pengadilan",
    summary:
      "Memediasi ketegangan antar pemegang saham dan menata ulang kepemilikan dalam kerangka tata kelola yang disepakati seluruh cabang keluarga.",
    image: boardroom,
    year: "2023",
  },
  {
    slug: "pkpu-restructuring",
    practice: "Litigasi & Sengketa",
    title: "Mendampingi produsen dalam proses PKPU",
    client: "Produsen tekstil dengan 4.000 karyawan",
    outcome: "Rencana perdamaian disahkan dan usaha tetap beroperasi",
    summary:
      "Bernegosiasi dengan 140 kreditur untuk memperoleh rencana restrukturisasi yang disahkan pengadilan, sehingga usaha dan tenaga kerjanya tetap terjaga.",
    image: handshake,
    year: "2022",
  },
];

export type Insight = {
  slug: string;
  category: "Analisis" | "Kabar Firma" | "Pembaruan Regulasi";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
};

export const insights: Insight[] = [
  {
    slug: "omnibus-investment-2026",
    category: "Analisis",
    title: "Arti Daftar Prioritas Investasi 2026 bagi investor asing",
    excerpt:
      "Sejumlah sektor baru terbuka untuk kepemilikan asing penuh. Kami mengulas peluang dan hal-hal terkait perizinan yang perlu dicermati.",
    date: "4 Nov 2026",
    readTime: "8 menit baca",
    image: skyline,
    author: "Fazri Ramadhan",
  },
  {
    slug: "pdp-law-enforcement",
    category: "Pembaruan Regulasi",
    title: "Dua tahun UU PDP: prioritas kepatuhan bagi direksi",
    excerpt:
      "Dengan aktifnya lembaga pelindungan data, kepatuhan kini menjadi agenda direksi. Berikut langkah awal yang dapat dilakukan.",
    date: "21 Okt 2026",
    readTime: "6 menit baca",
    image: glass,
    author: "Sekar Wulandari",
  },
  {
    slug: "anindya-senior-partner",
    category: "Kabar Firma",
    title: "Anindya Kusuma diangkat sebagai Rekan Senior",
    excerpt:
      "Anindya akan memimpin praktik sengketa firma yang terus berkembang setelah setahun dengan jumlah penugasan arbitrase tertinggi.",
    date: "2 Okt 2026",
    readTime: "3 menit baca",
    image: boardroom,
    author: "Fazri & Partners",
  },
  {
    slug: "arbitration-seat-jakarta",
    category: "Analisis",
    title: "Memilih Jakarta sebagai tempat kedudukan arbitrase: mitos dan fakta",
    excerpt:
      "Sejumlah putusan Mahkamah Agung menunjukkan pengadilan Indonesia kian mendukung arbitrase. Data mengungkap perkembangannya.",
    date: "15 Sep 2026",
    readTime: "10 menit baca",
    image: columns,
    author: "Anindya Kusuma",
  },
  {
    slug: "green-sukuk-guide",
    category: "Pembaruan Regulasi",
    title: "Panduan praktis kerangka sukuk hijau OJK",
    excerpt:
      "Persyaratan, pelaporan penggunaan dana, dan peran penelaah eksternal — daftar periksa bagi penerbit perdana.",
    date: "28 Agu 2026",
    readTime: "7 menit baca",
    image: handshake,
    author: "Sekar Wulandari",
  },
  {
    slug: "land-bank-reform",
    category: "Analisis",
    title: "Reformasi Bank Tanah dan masa depan pengadaan lahan skala besar",
    excerpt:
      "Bagaimana Badan Bank Tanah mengubah cara pengembang memperoleh lahan — dan hal-hal yang perlu diperhatikan investor.",
    date: "9 Agu 2026",
    readTime: "9 menit baca",
    image: stairs,
    author: "Raka Pratama",
  },
];

export const testimonials = [
  {
    quote:
      "Fazri & Partners memahami bisnis kami sebelum memberikan nasihat. Pertimbangan mereka dalam situasi penuh tekanan menjadi penentu keberhasilan transaksi.",
    name: "Direktur Utama",
    company: "Dana infrastruktur regional",
  },
  {
    quote:
      "Tenang, cermat, dan selalu selangkah lebih maju. Mereka mengubah sengketa yang kami khawatirkan menjadi hasil yang membanggakan.",
    name: "Kepala Divisi Hukum",
    company: "Kontraktor EPC nasional",
  },
];
