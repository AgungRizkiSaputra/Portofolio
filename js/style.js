/**
 * ============================================================================
 * AGUNG RIZKI SAPUTRA — CLEAN WHITE INTERACTIVE PORTFOLIO
 * High-performance, error-free interactive logic with Scroll Expansion
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const languageCopy = {
    "Agung Rizki Saputra | Creative Developer & UI/UX Designer": "Agung Rizki Saputra | Developer Kreatif & Desainer UI/UX",
    "Portfolio of Agung Rizki Saputra — Creative Developer and UI/UX Designer. Fresh graduate in Informatics Engineering crafting clean, secure, and user-centric web applications.": "Portofolio Agung Rizki Saputra — Developer Kreatif dan Desainer UI/UX. Lulusan Teknik Informatika yang membangun aplikasi web yang rapi, aman, dan berpusat pada pengguna.",
    "All Projects | Agung Rizki Saputra": "Semua Proyek | Agung Rizki Saputra",
    "Explore web and mobile projects by Agung Rizki Saputra, including learning platforms, mobile apps, and responsive websites.": "Jelajahi proyek web dan aplikasi mobile Agung Rizki Saputra, termasuk platform pembelajaran, aplikasi mobile, dan situs web responsif.",
    "Main Navigation": "Navigasi Utama",
    "Home": "Beranda",
    "About": "Tentang",
    "About Me": "Tentang Saya",
    "Skills": "Keahlian",
    "Skills & Tech": "Keahlian & Teknologi",
    "Projects": "Proyek",
    "Selected Work": "Karya Pilihan",
    "Experience": "Pengalaman",
    "Contact": "Kontak",
    "Let's Talk": "Mari Berbicara",
    "Toggle Navigation Menu": "Buka/Tutup Menu Navigasi",
    "Mobile Navigation": "Navigasi Mobile",
    "Close Mobile Menu": "Tutup Menu Mobile",
    "All Projects Archive (9)": "Arsip Semua Proyek (9)",
    "Available for Full-Time & Freelance • 2026": "Terbuka untuk Kerja Penuh Waktu & Freelance • 2026",
    "Specializing in": "Berfokus pada",
    "Fresh graduate in Informatics Engineering with strong focus on": "Lulusan baru Teknik Informatika dengan fokus kuat pada",
    "Web Development": "Pengembangan Web",
    "UI/UX Design": "Desain UI/UX",
    "Secure Coding principles": "Prinsip Secure Coding",
    ". Building functional, responsive web experiences with deliberate visual poise.": ". Membangun pengalaman web yang fungsional, responsif, dan dirancang dengan cermat.",
    "View Featured Work": "Lihat Karya Pilihan",
    "Download CV": "Unduh CV",
    "Get in Touch": "Hubungi Saya",
    "Projects Built": "Proyek Dibuat",
    "B.Sc. Graduate": "Lulusan S.Kom.",
    "Work Experiences": "Pengalaman Kerja",
    "Creative Dev • 2026": "Developer Kreatif • 2026",
    "Scroll to About section": "Gulir ke bagian Tentang",
    "Scroll to explore": "Gulir untuk menjelajah",
    "// 01 • Profile & Philosophy": "// 01 • Profil & Filosofi",
    "Crafting digital products where aesthetic poise meets secure, functional engineering.": "Menciptakan produk digital yang memadukan estetika, keamanan, dan rekayasa yang fungsional.",
    "Agung Rizki Saputra Profile": "Profil Agung Rizki Saputra",
    "Informatics Eng. '26": "Teknik Informatika '26",
    "I am a recent Bachelor’s degree graduate in": "Saya baru saja lulus sebagai Sarjana",
    "Informatics Engineering": "Teknik Informatika",
    "with a deep passion for Web Development, UI/UX Design, and Cybersecurity. My work centers on creating web applications that are not merely interactive and aesthetically refined, but also performant, responsive, and grounded in secure coding principles.": "dengan minat besar pada Pengembangan Web, Desain UI/UX, dan Keamanan Siber. Saya berfokus menciptakan aplikasi web yang interaktif dan menarik, sekaligus berkinerja baik, responsif, serta menerapkan prinsip secure coding.",
    "Having conducted vulnerability testing and web penetration testing during my security internship, I approach every frontend architecture with heightened awareness of user data integrity, robust validation, and clean information hierarchy.": "Pengalaman menguji kerentanan dan melakukan penetration testing web selama magang keamanan membuat saya lebih memperhatikan integritas data pengguna, validasi yang kuat, dan hierarki informasi yang jelas dalam setiap arsitektur frontend.",
    "I am experienced in turning complex workflows into intuitive wireframes and interactive prototypes with": "Saya berpengalaman mengubah alur kerja yang kompleks menjadi wireframe intuitif dan prototipe interaktif menggunakan",
    ", and translating them into responsive code using": ", lalu menerjemahkannya menjadi kode responsif menggunakan",
    "Deliberate UI/UX": "UI/UX yang Terencana",
    "User-first wireframes, interactive prototypes, and design systems built in Figma.": "Wireframe yang mengutamakan pengguna, prototipe interaktif, dan sistem desain yang dibuat di Figma.",
    "Modern Web Craft": "Kreasi Web Modern",
    "Responsive layouts, clean semantic code, and lightweight DOM interactions.": "Tata letak responsif, kode semantik yang rapi, dan interaksi DOM yang ringan.",
    "Security Mindset": "Pola Pikir Keamanan",
    "Practical penetration testing foundations and defensive coding standards.": "Dasar penetration testing praktis dan standar defensive coding.",
    "// 02 • Technical Capabilities": "// 02 • Kemampuan Teknis",
    "Tools, technologies &": "Perangkat, teknologi &",
    "engineering stack.": "stack rekayasa perangkat lunak.",
    "Proficiencies categorized by development lifecycle, from visual research and user flow prototyping to frontend execution and security testing.": "Keahlian dikelompokkan berdasarkan siklus pengembangan, mulai dari riset visual dan prototipe alur pengguna hingga implementasi frontend dan pengujian keamanan.",
    "01 • Proficiency": "01 • Kemahiran",
    "02 • Proficiency": "02 • Kemahiran",
    "03 • Proficiency": "03 • Kemahiran",
    "04 • Proficiency": "04 • Kemahiran",
    "Advanced": "Mahir",
    "Intermediate": "Menengah",
    "01 • Frontend": "01 • Frontend",
    "Frontend Development": "Pengembangan Frontend",
    "03 • Mobile": "03 • Mobile",
    "Mobile Development": "Pengembangan Mobile",
    "Cross-Platform": "Lintas Platform",
    "Mobile UX": "UX Mobile",
    "02 • Systems": "02 • Sistem",
    "Backend & Database": "Backend & Basis Data",
    "RESTful APIs": "API RESTful",
    "Web Servers": "Server Web",
    "Local Persistence & Sync": "Penyimpanan Lokal & Sinkronisasi",
    "04 • Design & Security": "04 • Desain & Keamanan",
    "Design & Security": "Desain & Keamanan",
    "Wireframing": "Pembuatan Wireframe",
    "Pentesting": "Penetration Testing",
    "Secure Coding": "Secure Coding",
    "// 03 • Selected Work": "// 03 • Karya Pilihan",
    "Featured": "Pilihan",
    "Projects.": "Proyek.",
    "LMS Pintar dashboards for admin, teacher, and student": "Dashboard LMS Pintar untuk admin, guru, dan siswa",
    "LMS Pintar teacher dashboard": "Dashboard guru LMS Pintar",
    "LMS Pintar student dashboard": "Dashboard siswa LMS Pintar",
    "LMS Pintar administrator dashboard": "Dashboard administrator LMS Pintar",
    "01 / Featured Web": "01 / Web Pilihan",
    "LMS Pintar": "LMS Pintar",
    "An integrated academic portal with dedicated dashboards for administrators, teachers, and students to manage courses, classes, assignments, exams, and learning progress.": "Portal akademik terpadu dengan dashboard khusus bagi administrator, guru, dan siswa untuk mengelola mata pelajaran, kelas, tugas, ujian, dan perkembangan belajar.",
    "View LMS Pintar project details": "Lihat detail proyek LMS Pintar",
    "View Project Details": "Lihat Detail Proyek",
    "QurbanQu mobile app screens": "Layar aplikasi mobile QurbanQu",
    "QurbanQu livestock browsing screen": "Layar penelusuran hewan ternak QurbanQu",
    "QurbanQu payment details screen": "Layar detail pembayaran QurbanQu",
    "QurbanQu welcome screen": "Layar sambutan QurbanQu",
    "02 / Mobile": "02 / Aplikasi Mobile",
    "QurbanQu Livestock": "QurbanQu Livestock",
    "A livestock marketplace concept with verified weights, quality filters, transparent pricing, and a clear booking flow.": "Konsep marketplace hewan kurban dengan bobot terverifikasi, filter kualitas, harga transparan, dan alur pemesanan yang jelas.",
    "View QurbanQu Livestock project details": "Lihat detail proyek QurbanQu Livestock",
    "View Details": "Lihat Detail",
    "Headline Hub news app screens": "Layar aplikasi berita Headline Hub",
    "03 / Mobile": "03 / Aplikasi Mobile",
    "Headline Hub": "Headline Hub",
    "A Flutter news app concept with clear typography, category browsing, and a smooth reading experience.": "Konsep aplikasi berita Flutter dengan tipografi yang jelas, penelusuran kategori, dan pengalaman membaca yang nyaman.",
    "View Headline Hub project details": "Lihat detail proyek Headline Hub",
    "Explore more selected projects.": "Jelajahi karya pilihan lainnya.",
    "Browse all 9 web and mobile projects, with filters to explore each category.": "Jelajahi 9 proyek web dan mobile, gunakan filter untuk melihat setiap kategori.",
    "Explore All 9 Projects": "Jelajahi Semua 9 Proyek",
    "// 04 • Milestones & Background": "// 04 • Perjalanan & Latar Belakang",
    "Career path &": "Perjalanan karier &",
    "academic journey.": "akademik.",
    "Experiences": "Pengalaman",
    "Study Levels": "Jenjang Pendidikan",
    "Work History": "Riwayat Kerja",
    "Professional Experience": "Pengalaman Profesional",
    "Feb 2026 — Jun 2026 • Fulltime Internship": "Feb 2026 — Jun 2026 • Magang Penuh Waktu",
    "Security Intern": "Intern Keamanan Siber",
    "Cybersecurity": "Keamanan Siber",
    "Conducted penetration testing and vulnerability analysis on web applications and systems. Identified potential attack vectors and authored actionable risk reports with remediation recommendations.": "Melakukan penetration testing dan analisis kerentanan pada aplikasi web dan sistem. Mengidentifikasi potensi jalur serangan serta menyusun laporan risiko dan rekomendasi perbaikan yang dapat ditindaklanjuti.",
    "Penetration Testing": "Penetration Testing",
    "Vulnerability Analysis": "Analisis Kerentanan",
    "Web Security": "Keamanan Web",
    "Risk Reporting": "Pelaporan Risiko",
    "Sep 2025 — Nov 2025 • Mentorship": "Sep 2025 — Nov 2025 • Mentoring",
    "UI/UX Design Mentor": "Mentor Desain UI/UX",
    "Formulated curriculum and guided Grade 10 vocational students in foundational UI/UX methodologies using Figma. Mentored through wireframing, component structuring, and interactive prototype delivery.": "Menyusun kurikulum dan membimbing siswa SMK kelas 10 dalam dasar metodologi UI/UX menggunakan Figma, mulai dari wireframing, penyusunan komponen, hingga pembuatan prototipe interaktif.",
    "Figma Mentoring": "Mentoring Figma",
    "Design Systems": "Sistem Desain",
    "Curriculum Design": "Perancangan Kurikulum",
    "May 2022 — Jul 2022 • Industrial Internship": "Mei 2022 — Jul 2022 • Magang Industri",
    "Production Intern": "Intern Produksi",
    "Manufacturing": "Manufaktur",
    "Actively participated in manufacturing operations from raw timber selection to quality finishing and coating, collaborating with floor teams to maintain target output and production standards.": "Berpartisipasi dalam operasional manufaktur, mulai dari pemilihan kayu hingga finishing dan pelapisan, serta berkolaborasi menjaga target produksi dan standar kualitas.",
    "Operations": "Operasional",
    "Quality Control": "Kontrol Kualitas",
    "Team Coordination": "Koordinasi Tim",
    "Academic Background": "Latar Belakang Akademik",
    "Education History": "Riwayat Pendidikan",
    "Bachelor of Informatics Engineering": "Sarjana Teknik Informatika",
    "S.Kom. • University Level": "S.Kom. • Tingkat Universitas",
    "Highest Degree": "Pendidikan Tertinggi",
    "Focus": "Fokus",
    "Web Dev": "Pengembangan Web",
    "Mobile Dev": "Pengembangan Mobile",
    "Vocational High (SMK)": "Sekolah Menengah Kejuruan (SMK)",
    "Programming languages, web authoring, algorithmic problem solving, dan interface design foundations.": "Dasar bahasa pemrograman, pembuatan web, pemecahan masalah algoritmik, dan desain antarmuka.",
    "Web Authoring": "Pembuatan Web",
    "Algorithms": "Algoritma",
    "Junior High (SMP)": "Sekolah Menengah Pertama (SMP)",
    "Digital Media": "Media Digital",
    "Elementary School (SD)": "Sekolah Dasar (SD)",
    "Get in Touch • Open for Collaboration": "Hubungi Saya • Terbuka untuk Kolaborasi",
    "Have a project or opportunity?": "Punya proyek atau peluang?",
    "Let's build something remarkable.": "Mari ciptakan sesuatu yang istimewa.",
    "Currently available for full-time frontend and web development positions, UI/UX design contracts, or interesting technical collaborations.": "Saat ini terbuka untuk posisi frontend dan pengembangan web penuh waktu, kontrak desain UI/UX, atau kolaborasi teknis yang menarik.",
    "Fast response • typically within 24 hours": "Respons cepat • biasanya dalam 24 jam",
    "Send a Direct Message": "Kirim Pesan Langsung",
    "Click to copy email address or open directly in your mail client:": "Klik untuk menyalin alamat email atau membukanya di aplikasi email:",
    "Email Address": "Alamat Email",
    "Copy": "Salin",
    "Send": "Kirim",
    "Location: Indonesia 🇮🇩": "Lokasi: Indonesia 🇮🇩",
    "Timezone: GMT+7": "Zona Waktu: GMT+7",
    "Repositories & code projects": "Repositori & proyek kode",
    "Professional network & profile": "Jaringan & profil profesional",
    "Creative visuals & updates": "Karya visual & pembaruan",
    "All rights reserved.": "Hak cipta dilindungi.",
    "Back to top ↑": "Kembali ke atas ↑",
    "Scroll back to top": "Gulir kembali ke atas",
    "Project Preview": "Pratinjau Proyek",
    "Close Project Modal": "Tutup Jendela Proyek",
    "Live Preview / Deployed": "Pratinjau Langsung / Terpasang",
    "View on GitHub": "Lihat di GitHub",
    "Agung Rizki Saputra • Portfolio 2026": "Agung Rizki Saputra • Portofolio 2026",
    "Close Preview": "Tutup Pratinjau",
    "Project Showcase": "Sorotan Proyek",
    "Featured Project": "Proyek Pilihan",
    "View Repository": "Lihat Repositori",
    "Open Figma Prototype": "Buka Prototipe Figma",
    "Live Deployed Web": "Situs Web Aktif",
    "Download APK Release": "Unduh Rilis APK",
    "Flutter Repository": "Repositori Flutter",
    "GitHub Repository": "Repositori GitHub",
    "GitHub Profile": "Profil GitHub",
    "View Project Screen": "Lihat Tampilan Proyek",
    "Web Development": "Pengembangan Web",
    "Mobile Development": "Pengembangan Mobile",
    "Learning Management System": "Sistem Manajemen Pembelajaran",
    "Livestock Marketplace": "Marketplace Hewan Ternak",
    "Cross-Platform": "Lintas Platform",
    "News App": "Aplikasi Berita",
    "Academic Management": "Manajemen Akademik",
    "Digital Voting": "Pemungutan Suara Digital",
    "Restaurant Ordering": "Pemesanan Restoran",
    "Fragrance Storefront": "Etalase Parfum",
    "Accommodation Finder": "Pencari Hunian",
    "Digital Invitation": "Undangan Digital",
    "Learning Platform": "Platform Pembelajaran",
    "Marketplace": "Marketplace",
    "Interface Design": "Desain Antarmuka",
    "A school learning management platform with dedicated dashboards for administrators, teachers, and students to manage classes, coursework, exams, and learning progress.": "Platform manajemen pembelajaran sekolah dengan dashboard khusus bagi administrator, guru, dan siswa untuk mengelola kelas, materi, ujian, dan perkembangan belajar.",
    "A school learning management platform with dedicated dashboards for administrators, teachers, and students. Administrators manage users, classes, subjects, schedules, exams, and announcements; teachers organize learning materials, assignments, and grades; students access lessons, coursework, exams, and learning progress in one portal.": "Platform manajemen pembelajaran sekolah dengan dashboard khusus bagi administrator, guru, dan siswa. Administrator mengelola pengguna, kelas, mata pelajaran, jadwal, ujian, dan pengumuman; guru mengatur materi, tugas, dan nilai; siswa mengakses pelajaran, tugas, ujian, serta perkembangan belajar dalam satu portal.",
    "A mobile livestock marketplace concept designed around a clear purchasing journey, with livestock discovery, transparent product details, and a focused booking experience.": "Konsep marketplace hewan ternak dengan alur pembelian yang jelas, pencarian ternak, detail produk transparan, dan pengalaman pemesanan yang terarah.",
    "A cross-platform news app concept developed with Flutter, designed around clear typography, category browsing, and an easy-to-follow reading experience.": "Konsep aplikasi berita lintas platform yang dibuat dengan Flutter, dengan tipografi jelas, penelusuran kategori, dan pengalaman membaca yang mudah diikuti.",
    "A digital voting app concept that helps voters explore candidates, review election information, and move through a clear ballot selection flow.": "Konsep aplikasi pemungutan suara digital yang membantu pemilih mengenal kandidat, meninjau informasi pemilu, dan memilih melalui alur yang jelas.",
    "A mobile interface for managing semester learning plans (RPS), including approval tracking, course plan lists, and an overview of program learning outcomes.": "Antarmuka mobile untuk mengelola Rencana Pembelajaran Semester (RPS), termasuk pelacakan persetujuan, daftar rencana mata kuliah, dan ringkasan capaian pembelajaran program.",
    "A restaurant ordering app concept with a welcoming entry screen, account access, and a streamlined dining experience.": "Konsep aplikasi pemesanan restoran dengan layar pembuka yang ramah, akses akun, dan pengalaman bersantap yang praktis.",
    "A fragrance storefront concept showcasing perfume products, brand storytelling, and a polished browsing experience.": "Konsep etalase parfum yang menampilkan produk, cerita merek, dan pengalaman penelusuran yang menarik.",
    "A boarding house recommendation website that helps people compare accommodation using practical criteria and the Weight Product method.": "Situs rekomendasi kos yang membantu pengguna membandingkan hunian berdasarkan kriteria praktis dan metode Weighted Product.",
    "A responsive digital wedding invitation featuring an elegant visual theme, couple profiles, and event information.": "Undangan pernikahan digital responsif dengan tema visual elegan, profil pasangan, dan informasi acara.",
    "LMS Pintar — Academic Management Portal": "LMS Pintar — Portal Manajemen Akademik",
    "QurbanQu mobile app screens": "Layar aplikasi mobile QurbanQu",
    "Headline Hub news app mockup": "Mockup aplikasi berita Headline Hub",
    "Global Vote mobile app screens": "Layar aplikasi mobile Global Vote",
    "Global Vote candidate selection screen": "Layar pemilihan kandidat Global Vote",
    "Global Vote voting screen": "Layar pemungutan suara Global Vote",
    "Global Vote home screen": "Layar beranda Global Vote",
    "RPS academic management app screens": "Layar aplikasi manajemen akademik RPS",
    "RPS course approval overview": "Ringkasan persetujuan mata kuliah RPS",
    "RPS course plan list": "Daftar rencana mata kuliah RPS",
    "RPS academic dashboard": "Dashboard akademik RPS",
    "RzResto mobile app screens": "Layar aplikasi mobile RzResto",
    "RzResto sign-in screen": "Layar masuk RzResto",
    "RzResto restaurant menu screen": "Layar menu restoran RzResto",
    "RzResto welcome screen": "Layar sambutan RzResto",
    "Fragrance Point website screens": "Layar situs web Fragrance Point",
    "Fragrance Point product page": "Halaman produk Fragrance Point",
    "Fragrance Point website content section": "Bagian konten situs Fragrance Point",
    "Fragrance Point home page": "Halaman utama Fragrance Point",
    "Rekos boarding recommendation website screens": "Layar situs rekomendasi kos Rekos",
    "Rekos accommodation recommendations": "Rekomendasi hunian Rekos",
    "Rekos accommodation information": "Informasi hunian Rekos",
    "Rekos home page": "Halaman utama Rekos",
    "Wedding invitation website screens": "Layar situs undangan pernikahan",
    "Wedding invitation details section": "Bagian detail undangan pernikahan",
    "Wedding invitation event information": "Informasi acara undangan pernikahan",
    "Wedding invitation opening screen": "Layar pembuka undangan pernikahan",
    "All Projects | Agung Rizki Saputra": "Semua Proyek | Agung Rizki Saputra",
    "Archive Navigation": "Navigasi Arsip",
    "Back to Portfolio": "Kembali ke Portofolio",
    "Back to Main Portfolio": "Kembali ke Halaman Utama",
    "Portfolio": "Portofolio",
    "Curated Works Archive • 2026": "Arsip Karya Pilihan • 2026",
    "// Curated Works Catalogue": "// Katalog Karya Pilihan",
    "All": "Semua",
    "All.": "Semua.",
    "[ Total: 09 Web, Mobile & UI/UX Projects ]": "[ Total: 09 Proyek Web, Mobile & UI/UX ]",
    "Explore web development, cross-platform mobile apps, and UI/UX design work with the technology foundation behind each project.": "Jelajahi karya pengembangan web, aplikasi mobile lintas platform, dan desain UI/UX beserta teknologi yang digunakan.",
    "Filter By:": "Filter:",
    "All Projects (9)": "Semua Proyek (9)",
    "Web Development (4)": "Pengembangan Web (4)",
    "Mobile Apps (3)": "Aplikasi Mobile (3)",
    "UI/UX Design (2)": "Desain UI/UX (2)",
    "React Server/Client": "React Server/Client",
    "Supabase & PostgreSQL": "Supabase & PostgreSQL",
    "Flutter": "Flutter",
    "Dart": "Dart",
    "Mobile UI": "UI Mobile",
    "News API": "API Berita",
    "Figma": "Figma",
    "Next.js App Router": "Next.js App Router",
    "Tailwind CSS": "Tailwind CSS",
    "TypeScript": "TypeScript",
    "Local Persistence & Sync": "Penyimpanan Lokal & Sinkronisasi",
    "HTML": "HTML",
    "CSS": "CSS",
    "JavaScript": "JavaScript",
    "MySQL": "MySQL",
    "Laravel": "Laravel",
    "PHP": "PHP",
    "Bootstrap": "Bootstrap",
    "Composer": "Composer",
    "Project interface previews": "Pratinjau antarmuka proyek",
    "Main Portfolio": "Portofolio Utama",
    "Choose language": "Pilih bahasa",
    "Archive Navigation": "Navigasi Arsip",
    "Open Figma": "Buka Figma",
    "Web Development • Learning Management System": "Pengembangan Web • Sistem Manajemen Pembelajaran",
    "Mobile Development • Livestock Marketplace": "Pengembangan Mobile • Marketplace Hewan Ternak",
    "Mobile Development • Cross-Platform": "Pengembangan Mobile • Lintas Platform",
    "Mobile Development • News App": "Pengembangan Mobile • Aplikasi Berita",
    "Mobile Development • Digital Voting": "Pengembangan Mobile • Pemungutan Suara Digital",
    "Mobile Development • Academic Planning": "Pengembangan Mobile • Perencanaan Akademik",
    "Mobile Development • Restaurant App": "Pengembangan Mobile • Aplikasi Restoran",
    "Web Development • Fragrance Storefront": "Pengembangan Web • Etalase Parfum",
    "Web Development • Accommodation Recommendation": "Pengembangan Web • Rekomendasi Hunian",
    "Web Development • Digital Invitation": "Pengembangan Web • Undangan Digital",
    "Academic Planning": "Perencanaan Akademik",
    "Restaurant App": "Aplikasi Restoran",
    "Fragrance Storefront": "Etalase Parfum",
    "Accommodation Recommendation": "Rekomendasi Hunian",
    "A mobile restaurant app concept that introduces the RzResto brand and provides a simple path from sign-in to browsing the restaurant experience.": "Konsep aplikasi restoran mobile yang memperkenalkan merek RzResto dan menyediakan alur sederhana dari masuk hingga menjelajahi pengalaman restoran.",
    "A responsive fragrance storefront concept that presents perfume products through editorial imagery, clear brand messaging, and intuitive website navigation.": "Konsep etalase parfum responsif yang menampilkan produk melalui visual editorial, pesan merek yang jelas, dan navigasi situs yang intuitif.",
    "A boarding house discovery and recommendation website that helps users compare accommodation options based on criteria such as price, comfort, location, and facilities, using the Weight Product method.": "Situs pencarian dan rekomendasi kos yang membantu pengguna membandingkan hunian berdasarkan harga, kenyamanan, lokasi, dan fasilitas menggunakan metode Weighted Product.",
    "A responsive digital wedding invitation website with a refined visual theme, couple profiles, and event details presented in a simple, guest-friendly layout.": "Situs undangan pernikahan digital responsif dengan tema visual elegan, profil pasangan, dan detail acara dalam tata letak sederhana yang ramah bagi tamu.",
    "Rekos — Boarding House Finder": "Rekos — Pencari Hunian Kos",
    "The Global Vote": "The Global Vote",
    "RPS Academic Management": "Manajemen Akademik RPS",
    "RzResto": "RzResto",
    "Fragrance Point": "Fragrance Point",
    "Wedding Invitation Website": "Situs Undangan Pernikahan",
    "A digital voting app concept that helps voters explore candidates, review election information, and move through a clear ballot selection flow.": "Konsep aplikasi pemungutan suara digital yang membantu pemilih menjelajahi kandidat, meninjau informasi pemilu, dan memilih melalui alur surat suara yang jelas.",
    "A cross-platform news app concept developed with Flutter, designed around clear typography, category browsing, and an easy-to-follow reading experience.": "Konsep aplikasi berita lintas platform yang dikembangkan dengan Flutter, dengan tipografi yang jelas, penelusuran kategori, dan pengalaman membaca yang mudah diikuti.",
    "A mobile livestock marketplace concept designed around a clear purchasing journey, with livestock discovery, transparent product details, and a focused booking experience.": "Konsep marketplace hewan ternak dengan alur pembelian yang jelas, pencarian ternak, detail produk transparan, dan pengalaman pemesanan yang terarah.",
    "Project screen previews": "Pratinjau layar proyek",
    "Academic Management": "Manajemen Akademik",
    "Digital Voting": "Pemungutan Suara Digital",
    "Restaurant Ordering": "Pemesanan Restoran",
    "Accommodation Finder": "Pencari Hunian",
    "Fragrance Storefront": "Etalase Parfum",
    "Digital Invitation": "Undangan Digital",
    "01 / Featured Web": "01 / Web Pilihan",
    "04 / UI/UX Design": "04 / Desain UI/UX",
    "05 / Featured Mobile": "05 / Mobile Pilihan",
    "06 / Featured Web": "06 / Web Pilihan",
    "07 / Featured Web": "07 / Web Pilihan",
    "08 / UI/UX Design": "08 / Desain UI/UX",
    "09 / Featured Web": "09 / Web Pilihan",
    "Total: 09 Web, Mobile & UI/UX Projects": "Total: 09 Proyek Web, Mobile & UI/UX",
    "All rights reserved.": "Hak cipta dilindungi.",
    "Repositories & code projects": "Repositori & proyek kode",
    "Professional network & profile": "Jaringan & profil profesional",
    "Creative visuals & updates": "Karya visual & pembaruan",
    "Copied!": "Tersalin!",
    "A cross-platform news app concept developed with Flutter. Designed around clear typography, category browsing, and a smooth reading experience.": "Konsep aplikasi berita lintas platform yang dikembangkan dengan Flutter. Dirancang dengan tipografi jelas, penelusuran kategori, dan pengalaman membaca yang nyaman.",
    "A mobile interface for managing semester learning plans (RPS), including approval tracking, course plan lists, and an overview of program learning outcomes.": "Antarmuka mobile untuk mengelola Rencana Pembelajaran Semester (RPS), termasuk pelacakan persetujuan, daftar rencana mata kuliah, dan ringkasan capaian pembelajaran program.",
    "A digital voting app concept that helps voters explore candidates, review election information, and move through a clear ballot selection flow.": "Konsep aplikasi pemungutan suara digital yang membantu pemilih menjelajahi kandidat, meninjau informasi pemilu, dan memilih melalui alur surat suara yang jelas.",
    "A mobile restaurant app concept that introduces the RzResto brand and provides a simple path from sign-in to browsing the restaurant experience.": "Konsep aplikasi restoran mobile yang memperkenalkan merek RzResto dan menyediakan alur sederhana dari masuk hingga menjelajahi pengalaman restoran.",
    "A responsive fragrance storefront concept that presents perfume products through editorial imagery, clear brand messaging, and intuitive website navigation.": "Konsep etalase parfum responsif yang menampilkan produk melalui visual editorial, pesan merek yang jelas, dan navigasi situs yang intuitif.",
    "A boarding house discovery and recommendation website that helps users compare accommodation options based on criteria such as price, comfort, location, and facilities, using the Weight Product method.": "Situs pencarian dan rekomendasi kos yang membantu pengguna membandingkan hunian berdasarkan harga, kenyamanan, lokasi, dan fasilitas menggunakan metode Weighted Product.",
    "A responsive digital wedding invitation website with a refined visual theme, couple profiles, and event details presented in a simple, guest-friendly layout.": "Situs undangan pernikahan digital responsif dengan tema visual elegan, profil pasangan, dan detail acara dalam tata letak sederhana yang ramah bagi tamu.",
    "Web Development • Learning Management System": "Pengembangan Web • Sistem Manajemen Pembelajaran",
    "Mobile Development • Livestock Marketplace": "Pengembangan Mobile • Marketplace Hewan Ternak",
    "Mobile Development • Cross-Platform": "Pengembangan Mobile • Lintas Platform",
    "Mobile Development • News App": "Pengembangan Mobile • Aplikasi Berita",
    "Mobile Development • Digital Voting": "Pengembangan Mobile • Pemungutan Suara Digital",
    "Mobile Development • Academic Planning": "Pengembangan Mobile • Perencanaan Akademik",
    "Mobile Development • Restaurant App": "Pengembangan Mobile • Aplikasi Restoran",
    "Web Development • Fragrance Storefront": "Pengembangan Web • Etalase Parfum",
    "Web Development • Accommodation Recommendation": "Pengembangan Web • Rekomendasi Hunian",
    "Web Development • Digital Invitation": "Pengembangan Web • Undangan Digital",
    "screen preview": "pratinjau layar",
    "Choose language": "Pilih bahasa"
  };
  const translations = {
    id: languageCopy,
    en: {
      ...Object.fromEntries(Object.entries(languageCopy).map(([english, indonesian]) => [indonesian, english])),
      "Programming languages, web authoring, algorithmic problem solving, dan interface design foundations.": "Programming languages, web authoring, algorithmic problem solving, and interface design foundations.",
      "Membangun antarmuka client yang semantic, responsif, dan aksesibel dengan teknologi web modern.": "Building semantic, responsive, and accessible client interfaces with modern web technologies.",
      "Mengembangkan aplikasi mobile cross-platform dengan Flutter dan Dart untuk Android & iOS.": "Developing cross-platform mobile apps with Flutter and Dart for Android & iOS.",
      "Mengelola logika aplikasi, database, API, serta alur penyimpanan lokal dan cloud.": "Managing application logic, databases, APIs, and local and cloud persistence workflows.",
      "Prototyping visual di Figma yang dipadukan dengan kesadaran uji penetrasi dan secure coding.": "Visual prototyping in Figma combined with penetration testing awareness and secure coding.",
      "Rasa ingin tahu awal di komputer, digital media, dan eksplorasi teknologi kreatif dimulai di sini.": "My early curiosity about computers, digital media, and creative technology exploration began here.",
      "Disiplin, analytical thinking, dan semangat belajar yang dibangun sejak dini — fondasi dari segala hal yang datang berikutnya.": "Discipline, analytical thinking, and a love of learning built early — a foundation for everything that followed."
    }
  };
  let currentLanguage = localStorage.getItem("portfolio-language") === "id" ? "id" : "en";
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();
  let activeProjectTrigger = null;

  const translateValue = (value, language) => {
    const normalized = value.trim().replace(/\s+/g, " ");
    const translated = translations[language][normalized];
    if (!translated) return value;
    const leadingSpace = value.match(/^\s*/)?.[0] || "";
    const trailingSpace = value.match(/\s*$/)?.[0] || "";
    return `${leadingSpace}${translated}${trailingSpace}`;
  };

  const applyLanguage = (language) => {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = translateValue(
      document.querySelector("title")?.textContent || document.title,
      language
    );

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      const original = description.dataset.originalContent || description.content;
      description.dataset.originalContent = original;
      description.content = translateValue(original, language);
    }

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();
    while (textNode) {
      const parentTag = textNode.parentElement?.tagName;
      if (parentTag !== "SCRIPT" && parentTag !== "STYLE" && parentTag !== "NOSCRIPT") {
        if (!originalTextNodes.has(textNode)) originalTextNodes.set(textNode, textNode.nodeValue || "");
        textNode.nodeValue = translateValue(originalTextNodes.get(textNode), language);
      }
      textNode = walker.nextNode();
    }

    document.querySelectorAll("[aria-label], img[alt], input[placeholder], button[title]").forEach((element) => {
      ["aria-label", "alt", "placeholder", "title"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        let originals = originalAttributes.get(element);
        if (!originals) {
          originals = {};
          originalAttributes.set(element, originals);
        }
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, translateValue(originals[attribute], language));
      });
    });

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.languageToggle === language));
    });

    const openModal = document.querySelector("#modal:not(.hidden)");
    if (activeProjectTrigger && openModal) {
      openProjectModal(activeProjectTrigger);
    }
  };

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.languageToggle;
      localStorage.setItem("portfolio-language", language);
      applyLanguage(language);
      document.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language } }));
    });
  });
  applyLanguage(currentLanguage);

  // --------------------------------------------------------------------------
  // 1. Navigation & Scrollspy
  // --------------------------------------------------------------------------
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id], header[id='home']");

  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  let scrollProgressFrame = 0;
  const updatePageScrollProgress = () => {
    if (scrollProgressFrame) return;
    scrollProgressFrame = requestAnimationFrame(() => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      document.documentElement.style.setProperty("--page-scroll-progress", `${(progress * 100).toFixed(2)}%`);
      scrollProgressFrame = 0;
    });
  };

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  window.addEventListener("scroll", updatePageScrollProgress, { passive: true });
  handleNavbarScroll();
  updatePageScrollProgress();

  // Scrollspy to highlight active nav link
  if (sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${id}`) {
              link.classList.add("is-active");
            } else {
              link.classList.remove("is-active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileBackdrop = document.getElementById("mobile-backdrop");

  const setMobileMenuOpen = (isOpen) => {
    if (!mobileMenu) return;
    if (isOpen) {
      mobileMenu.classList.add("mobile-menu-open");
      if (mobileBackdrop) mobileBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.remove("mobile-menu-open");
      if (mobileBackdrop) mobileBackdrop.classList.remove("open");
      document.body.style.overflow = "";
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu && mobileMenu.classList.contains("mobile-menu-open");
      setMobileMenuOpen(!isOpen);
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => setMobileMenuOpen(false));
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", () => setMobileMenuOpen(false));
  }

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setMobileMenuOpen(false);
      closeProjectModal();
    }
  });

  // --------------------------------------------------------------------------
  // 3. Dynamic Headline Ticker
  // --------------------------------------------------------------------------
  const dynamicText = document.getElementById("dynamic-text");
  if (dynamicText) {
    const roles = [
      "Web Developer",
      "UI/UX Designer",
      "Creative Frontend Engineer",
      "Informatics Graduate"
    ];
    const localizedRoles = {
      en: roles,
      id: ["Pengembang Web", "Desainer UI/UX", "Insinyur Frontend Kreatif", "Lulusan Teknik Informatika"]
    };
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 90;
    let typingTimer;

    const typeRole = () => {
      const currentRole = localizedRoles[currentLanguage][roleIndex];
      if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 85;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2200; // Pause when word is complete
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % localizedRoles[currentLanguage].length;
        typeSpeed = 400; // Pause before typing new word
      }

      typingTimer = setTimeout(typeRole, typeSpeed);
    };

    document.addEventListener("portfolio-language-change", () => {
      roleIndex = 0;
      charIndex = 0;
      isDeleting = false;
      clearTimeout(typingTimer);
      dynamicText.textContent = "";
      typeRole();
    });

    typeRole();
  }

  const heroEntranceSection = document.getElementById("home");
  if (heroEntranceSection && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const heroEntranceElements = [
      heroEntranceSection.querySelector(".editorial-badge"),
      heroEntranceSection.querySelector(".hero-editorial-title"),
      heroEntranceSection.querySelector("#dynamic-text")?.parentElement,
      heroEntranceSection.querySelector(".hero-editorial-title")?.parentElement?.querySelector("p"),
      heroEntranceSection.querySelector(".btn-primary")?.parentElement,
      heroEntranceSection.querySelector(".hero-editorial-title")?.parentElement?.querySelector(".grid.grid-cols-3"),
      heroEntranceSection.querySelector("#heroPhotoStage")
    ].filter(Boolean);

    heroEntranceElements.forEach((element, index) => {
      element.style.setProperty("--hero-entrance-delay", `${index * 110}ms`);
      element.classList.add("hero-entrance");
    });

    requestAnimationFrame(() => heroEntranceSection.classList.add("hero-is-ready"));
  }

  // --------------------------------------------------------------------------
  // 4. About Me Scroll Expansion Media Engine (Inspired by ScrollExpandMedia)
  // --------------------------------------------------------------------------
  const aboutSection = document.getElementById("about");
  const scrollExpandMedia = document.getElementById("scrollExpandMedia");
  const floatingBadgeTop = document.getElementById("blobBadgeTop");
  const floatingBadgeBottom = document.getElementById("blobBadgeBottom");

  if (aboutSection && scrollExpandMedia) {
    let ticking = false;

    const updateScrollExpansion = () => {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start calculating when the section approaches viewport center
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.15;

      const current = startTrigger - rect.top;
      const total = startTrigger - endTrigger;
      let progress = current / total;
      progress = Math.max(0, Math.min(1, progress));

      const isMobile = window.innerWidth < 768;
      // Controlled progressive scale: from 0.90 to 1.14 on desktop, 0.96 to 1.05 on mobile
      const minScale = isMobile ? 0.96 : 0.90;
      const maxScale = isMobile ? 1.05 : 1.14;
      const currentScale = minScale + (maxScale - minScale) * progress;

      // Apply transform smoothly
      scrollExpandMedia.style.transform = `scale(${currentScale.toFixed(3)}) translateZ(0)`;

      // Subtle parallax for floating badges
      if (floatingBadgeTop) {
        const moveX = isMobile ? progress * 6 : progress * 16;
        const moveY = isMobile ? -progress * 4 : -progress * 12;
        floatingBadgeTop.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }

      if (floatingBadgeBottom) {
        const moveX = isMobile ? -progress * 6 : -progress * 14;
        const moveY = isMobile ? progress * 5 : progress * 10;
        floatingBadgeBottom.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }

      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollExpansion);
        ticking = true;
      }
    }, { passive: true });

    updateScrollExpansion();
  }

  // --------------------------------------------------------------------------
  // 5. Project Modal Controller
  // --------------------------------------------------------------------------
  const modal = document.getElementById("modal");
  const modalDialog = modal && modal.querySelector(".modal-dialog");
  const modalPreview = document.getElementById("modalPreview");
  const modalMockupStage = modalPreview && modalPreview.querySelector(".modal-mockup-stage");
  const modalImage = document.getElementById("modalImage");
  const modalMockupImages = document.querySelectorAll(".modal-mockup-window img");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalCategory = document.getElementById("modalCategory");
  const modalTech = document.getElementById("modalTech");
  const modalGithubBtn = document.getElementById("modalGithubBtn");
  const modalGithubText = document.getElementById("modalGithubText");
  const modalLiveBtn = document.getElementById("modalLiveBtn");
  const modalLiveText = document.getElementById("modalLiveText");
  const closeModalBtn = document.getElementById("closeModal");


  const openProjectModal = (button) => {
    if (!modal) return;
    activeProjectTrigger = button;
    const title = translateValue(button.getAttribute("data-title") || "Project Showcase", currentLanguage);
    const desc = translateValue(button.getAttribute("data-description") || "", currentLanguage);
    const image = button.getAttribute("data-image") || "";
    const category = translateValue(button.getAttribute("data-category") || "Featured Project", currentLanguage);
    const tech = button.getAttribute("data-tech") || "";
    const mockupLeft = button.getAttribute("data-mockup-left");
    const mockupRight = button.getAttribute("data-mockup-right");
    const isMobileMockup = button.getAttribute("data-mockup-type") === "mobile";
    const github = button.getAttribute("data-github");
    const live = button.getAttribute("data-live");
    const githubLabel = translateValue(button.getAttribute("data-github-label") || "View Repository", currentLanguage);
    const originalCategory = button.getAttribute("data-category") || "Featured Project";
    const originalLiveLabel = button.getAttribute("data-live-label") ||
      (originalCategory.toLowerCase().includes("figma") ? "Open Figma Prototype" : "Live Preview / Deployed");
    const liveLabel = translateValue(originalLiveLabel, currentLanguage);

    if (modalTitle) modalTitle.textContent = title;
    if (modalDescription) modalDescription.textContent = desc;
    if (modalImage) {
      modalImage.src = image;
      modalImage.alt = title;
    }
    if (modalPreview) {
      const hasMockup = Boolean(mockupLeft && mockupRight);
      modalPreview.classList.toggle("has-mockup", hasMockup);
      modalPreview.classList.toggle("has-mobile-mockup", hasMockup && isMobileMockup);

      if (hasMockup) {
        const mockupScreens = [
          { image: mockupLeft, label: `${title} - ${translateValue("screen preview", currentLanguage)}` },
          { image: mockupRight, label: `${title} - ${translateValue("screen preview", currentLanguage)}` },
          { image, label: `${title} - ${translateValue("screen preview", currentLanguage)}` }
        ];

        if (modalMockupStage) {
          modalMockupStage.setAttribute("aria-label", translateValue("Project screen previews", currentLanguage));
        }
        modalMockupImages.forEach((screen, index) => {
          const mockupScreen = mockupScreens[index];
          if (!mockupScreen) return;
          screen.src = mockupScreen.image;
          screen.alt = mockupScreen.label;
        });
      } else {
        if (modalMockupStage) {
          modalMockupStage.setAttribute("aria-label", "Project interface previews");
        }
        modalMockupImages.forEach((screen) => {
          screen.removeAttribute("src");
          screen.alt = "";
        });
      }
    }
    if (modalCategory) modalCategory.textContent = category;
    if (modalTech) modalTech.textContent = tech;

    // Wire GitHub Source Link — determine icon dynamically
    if (modalGithubBtn) {
      if (github) {
        modalGithubBtn.href = github;
        modalGithubBtn.style.display = "inline-flex";
        if (modalGithubText) modalGithubText.textContent = githubLabel;
        // Update icon: use GitHub icon always for github links
        const ghIcon = modalGithubBtn.querySelector("i");
        if (ghIcon) ghIcon.className = "fab fa-github text-sm";
      } else {
        modalGithubBtn.style.display = "none";
      }
    }

    // Wire Live Deployed / Figma / APK Link — choose icon dynamically
    if (modalLiveBtn) {
      if (live) {
        modalLiveBtn.href = live;
        modalLiveBtn.style.display = "inline-flex";
        if (modalLiveText) modalLiveText.textContent = liveLabel;
        // Pick icon based on link type
        const liveIcon = modalLiveBtn.querySelector("i");
        if (liveIcon) {
          if (live.includes("figma.com")) {
            liveIcon.className = "fab fa-figma text-[11px]";
          } else if (originalLiveLabel.toLowerCase().includes("apk") || originalLiveLabel.toLowerCase().includes("release") || originalLiveLabel.toLowerCase().includes("download")) {
            liveIcon.className = "fas fa-download text-[11px]";
          } else {
            liveIcon.className = "fas fa-arrow-up-right-from-square text-[11px]";
          }
        }
      } else {
        modalLiveBtn.style.display = "none";
      }
    }

    if (modalDialog) modalDialog.scrollTop = 0;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".project-view-trigger, .eye-icon, .project-detail-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openProjectModal(btn);
    });
  });

  const featureCards = document.querySelectorAll(".project-feature-card");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!reducedMotion.matches) {
    const enableMockupTilt = (card) => {
      card.addEventListener("pointermove", (event) => {
        if (event.pointerType === "touch") return;

        const bounds = card.getBoundingClientRect();
        const horizontalPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
        const verticalPosition = (event.clientY - bounds.top) / bounds.height - 0.5;

        card.style.setProperty("--mockup-tilt-x", `${-verticalPosition * 5}deg`);
        card.style.setProperty("--mockup-tilt-y", `${horizontalPosition * 6}deg`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--mockup-tilt-x");
        card.style.removeProperty("--mockup-tilt-y");
      });
    };

    featureCards.forEach(enableMockupTilt);
    if (modalPreview) enableMockupTilt(modalPreview);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. Scroll to Top Floating Button
  // --------------------------------------------------------------------------
  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    const handleScrollTopVisibility = () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("active");
      } else {
        scrollTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScrollTopVisibility, { passive: true });
    handleScrollTopVisibility();

    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Section Reveal on Scroll
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll(
    "section[id], main.archive-page-main > .border-b, " +
    "main.archive-page-main > .archive-featured-layout, " +
    "main.archive-page-main > .archive-project-grid, " +
    ".skills-category-card, .timeline-item, .contact-card-main, " +
    ".social-action-card, .project-card, .reveal-on-scroll"
  );
  if (revealElements.length > 0 && (reducedMotion.matches || !("IntersectionObserver" in window))) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  } else if (revealElements.length > 0) {
    const revealDelays = new Map();
    revealElements.forEach((el) => {
      const parent = el.parentElement;
      const siblingIndex = revealDelays.get(parent) || 0;
      revealDelays.set(parent, siblingIndex + 1);
      el.style.setProperty("--reveal-delay", `${(siblingIndex % 4) * 75}ms`);
      el.classList.add("reveal-on-scroll");
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 8. All Projects Interactive Filter (Optimized for Pinterest Masonry)
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".masonry-item, .archive-card");
  const archiveFeaturedLayout = document.querySelector(".archive-featured-layout");
  const archiveProjectGrid = document.querySelector(".archive-project-grid");
  const filterHideTimers = new WeakMap();
  if (filterButtons.length > 0 && projectItems.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const targetCategory = btn.getAttribute("data-filter");
        if (archiveFeaturedLayout) {
          archiveFeaturedLayout.classList.toggle("is-filtered-web", targetCategory === "web");
          archiveFeaturedLayout.classList.toggle("is-filtered-mobile", targetCategory === "mobile");
          archiveFeaturedLayout.classList.toggle("is-filtered-design", targetCategory === "design");
        }
        if (archiveProjectGrid) {
          archiveProjectGrid.classList.toggle("is-filtered", targetCategory !== "all");
        }
        projectItems.forEach((item) => {
          const pendingHide = filterHideTimers.get(item);
          if (pendingHide) {
            clearTimeout(pendingHide);
            filterHideTimers.delete(item);
          }

          const itemCategory = item.getAttribute("data-category");
          if (targetCategory === "all" || itemCategory === targetCategory) {
            item.classList.remove("is-filtered-out");
            item.style.display = "";
            requestAnimationFrame(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0) scale(1)";
            });
          } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(12px) scale(0.97)";
            const hideTimer = setTimeout(() => {
              item.classList.add("is-filtered-out");
              item.style.display = "none";
              filterHideTimers.delete(item);
            }, 250);
            filterHideTimers.set(item, hideTimer);
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8b. Hero Arch Portal 3D Parallax Tilt Motion
  // --------------------------------------------------------------------------
  const heroPhotoStage = document.getElementById("heroPhotoStage");
  const heroPhotoWrapper = document.getElementById("heroBlobWrapper") ||
    document.getElementById("heroArchWrapper") ||
    document.getElementById("heroFacetedWrapper");
  if (heroPhotoStage && heroPhotoWrapper && !reducedMotion.matches) {
    heroPhotoStage.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      const rect = heroPhotoStage.getBoundingClientRect();
      const horizontalPosition = (event.clientX - rect.left) / rect.width - 0.5;
      const verticalPosition = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = -verticalPosition * 10;
      const rotateY = horizontalPosition * 10;
      heroPhotoWrapper.style.transform =
        `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px)`;
    });

    heroPhotoStage.addEventListener("pointerleave", () => {
      heroPhotoWrapper.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
    });
  }

  // --------------------------------------------------------------------------
  // 8c. Interactive Constellation ("Rasi Bintang") Engine (Supports Multi-Grid Sections)
  // --------------------------------------------------------------------------
  const setupConstellationEngine = (canvas, container) => {
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let stars = [];
    let shootingStars = [];
    let mouse = { x: null, y: null, radius: 170 };
    let isVisible = true;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    class CelestialStar {
      constructor() {
        this.reset(true);
      }
      reset(randomPos = false) {
        this.x = randomPos ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
        this.y = randomPos ? Math.random() * height : Math.random() * height;
        this.baseRadius = Math.random() * 1.6 + 1.1;
        this.radius = this.baseRadius;
        this.vx = (Math.random() - 0.5) * 0.38;
        this.vy = (Math.random() - 0.5) * 0.38;
        this.baseAlpha = Math.random() * 0.45 + 0.35;
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.025 + 0.012;
        this.twinklePhase = Math.random() * Math.PI * 2;
        const colors = [
          "52, 87, 213",   // Signature cobalt blue
          "124, 58, 237",  // Violet
          "56, 189, 248",  // Cyan
          "79, 70, 229"    // Indigo
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.twinklePhase += this.twinkleSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.twinklePhase) * 0.22;
        this.radius = this.baseRadius + Math.sin(this.twinklePhase * 1.4) * 0.35;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -15) this.x = width + 15;
        if (this.x > width + 15) this.x = -15;
        if (this.y < -15) this.y = height + 15;
        if (this.y > height + 15) this.y = -15;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius && dist > 1) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 1.25;
            this.y += (dy / dist) * force * 1.25;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.6, this.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${Math.max(0.12, this.alpha)})`;
        ctx.shadowColor = `rgba(${this.color}, 0.6)`;
        ctx.shadowBlur = this.radius * 3.5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * (width * 0.7);
        this.y = Math.random() * (height * 0.4);
        this.length = Math.random() * 85 + 75;
        this.speed = Math.random() * 8 + 8;
        this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.opacity = 1;
        this.fade = Math.random() * 0.02 + 0.015;
        this.active = true;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= this.fade;
        if (this.opacity <= 0 || this.x > width || this.y > height) {
          this.active = false;
        }
      }
      draw() {
        if (!this.active || this.opacity <= 0) return;
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, `rgba(52, 87, 213, 0)`);
        grad.addColorStop(0.7, `rgba(52, 87, 213, ${0.45 * this.opacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${0.95 * this.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.0;
        ctx.shadowColor = "rgba(52, 87, 213, 0.9)";
        ctx.shadowBlur = 9;
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      stars = [];
      const starDensity = window.innerWidth < 768 ? 24000 : 16000;
      const count = Math.min(85, Math.max(30, Math.floor((width * height) / starDensity)));
      for (let i = 0; i < count; i++) {
        stars.push(new CelestialStar());
      }
    };

    const drawWeb = () => {
      const maxDist = 118;
      const count = stars.length;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.32;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(52, 87, 213, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - stars[i].x;
          const dy = mouse.y - stars[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.58;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(stars[i].x, stars[i].y);
            ctx.strokeStyle = `rgba(52, 87, 213, ${alpha})`;
            ctx.lineWidth = 1.15;
            ctx.stroke();
          }
        }
      }
    };

    let nextMeteorTime = Date.now() + 2200;

    const animate = () => {
      if (!isVisible) {
        requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      drawWeb();

      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
      }

      if (Date.now() > nextMeteorTime) {
        shootingStars.push(new ShootingStar());
        nextMeteorTime = Date.now() + Math.random() * 4500 + 3500;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        shootingStars[i].update();
        shootingStars[i].draw();
        if (!shootingStars[i].active) {
          shootingStars.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);

    container.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    container.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    if ("IntersectionObserver" in window && container !== document.body) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      observer.observe(container);
    }

    init();
    requestAnimationFrame(animate);
  };

  // Initialize Constellation Engine on Home, Skills, and Contact (All Grid Sections)
  const heroCanvas = document.getElementById("constellationCanvas");
  const heroSection = document.getElementById("home") || document.body;
  if (heroCanvas) {
    setupConstellationEngine(heroCanvas, heroSection);
  }

  const skillsCanvas = document.getElementById("skillsConstellationCanvas");
  const skillsSection = document.getElementById("skills");
  if (skillsCanvas && skillsSection) {
    setupConstellationEngine(skillsCanvas, skillsSection);
  }

  const contactCanvas = document.getElementById("contactConstellationCanvas");
  const contactSection = document.getElementById("contact");
  if (contactCanvas && contactSection) {
    setupConstellationEngine(contactCanvas, contactSection);
  }

  const archiveCanvas = document.getElementById("archiveConstellationCanvas");
  const archiveSection = document.querySelector(".archive-page-main");
  if (archiveCanvas && archiveSection) {
    setupConstellationEngine(archiveCanvas, archiveSection);
  }

  // --------------------------------------------------------------------------
  // 9. Particle Canvas for Intro Page (index.html) — Tuned for Clean White
  // --------------------------------------------------------------------------
  const particleCanvas = document.getElementById("particleCanvas");
  if (particleCanvas) {
    const ctx = particleCanvas.getContext("2d");
    let particles = [];
    let mouse = { x: null, y: null, radius: 140 };

    const resizeCanvas = () => {
      particleCanvas.width = window.innerWidth;
      particleCanvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class MinimalDust {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height;
        this.size = Math.random() * 1.6 + 0.6;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.alpha = Math.random() * 0.35 + 0.1;
        // Tuned for clean white: subtle cobalt (#3457D5) and dark slate (#171717)
        this.color = Math.random() > 0.4 ? "52, 87, 213" : "100, 116, 139";
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > particleCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > particleCanvas.height) this.vy *= -1;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 1.8;
            this.y -= (dy / distance) * force * 1.8;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push(new MinimalDust());
      }
    };

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();
  }
});

// ----------------------------------------------------------------------------
// 10. Global Copy To Clipboard Utility
// ----------------------------------------------------------------------------
function copyToClipboard(text, btnElement) {
  if (!navigator.clipboard) {
    fallbackCopyText(text, btnElement);
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    showCopiedFeedback(btnElement);
  }).catch((err) => {
    console.error("Clipboard copy failed, using fallback:", err);
    fallbackCopyText(text, btnElement);
  });
}

function fallbackCopyText(text, btnElement) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showCopiedFeedback(btnElement);
  } catch (err) {
    console.error("Fallback execCommand failed:", err);
  }
  document.body.removeChild(textArea);
}

function showCopiedFeedback(btnElement) {
  if (!btnElement) return;
  const originalHTML = btnElement.innerHTML;
  const copiedLabel = document.documentElement.lang === "id" ? "Tersalin!" : "Copied!";
  btnElement.innerHTML = `<i class="fas fa-check text-emerald-600"></i> <span class="text-emerald-700 font-bold">${copiedLabel}</span>`;
  btnElement.style.borderColor = "#10b981";
  btnElement.style.backgroundColor = "#ecfdf5";

  setTimeout(() => {
    btnElement.innerHTML = originalHTML;
    btnElement.style.borderColor = "";
    btnElement.style.backgroundColor = "";
  }, 2200);
}