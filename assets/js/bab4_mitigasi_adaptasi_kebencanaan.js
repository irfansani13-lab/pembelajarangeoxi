window.BAB_DATA = window.BAB_DATA || {};
window.BAB_DATA.bab4 = {
  id: "bab4", no: 4, icon: "🌋", short: "Mitigasi & Adaptasi",
  title: "Mitigasi dan Adaptasi Kebencanaan",
  mindful: {
    emoji: "🌋🌊⛰️",
    fenomena: "Saat gempa Lombok 2018, desa adat yang punya sistem mitigasi sendiri mengalami kerugian lebih sedikit dibanding wilayah lain. Bencana tidak bisa dicegah, tetapi dampaknya bisa dikurangi.",
    pertanyaan: ["Apa yang membuat peristiwa alam berubah menjadi bencana?", "Jika bencana terjadi hari ini, apa yang akan kamu lakukan?"]
  },
  concept: [
    { h: "1. Konsep Kebencanaan dan Jenis Bencana", tag: "UU No. 24/2007", open: true,
      groups: [
        { t: "Pengertian bencana", li: ["Peristiwa atau rangkaian peristiwa yang mengancam dan mengganggu kehidupan masyarakat, disebabkan faktor <b>alam, nonalam, maupun sosial</b>, sehingga mengakibatkan korban jiwa, kerusakan lingkungan, dan kerugian harta benda (UU No. 24/2007)"] },
        { t: "Unsur kebencanaan", li: ["<b>Risiko = (Bahaya × Kerentanan) ÷ Kapasitas</b>"], fig: "risiko", figCap: "Hubungan bahaya, kerentanan, dan kapasitas." },
        { t: "Jenis-jenis bencana", li: [
          "<b>Bencana alam geologis</b>: gempa bumi, letusan gunung api, tanah longsor, tsunami",
          "<b>Bencana alam hidrometeorologis/klimatologis</b>: banjir, kekeringan, angin puting beliung, kebakaran hutan dan lahan (karhutla)",
          "<b>Bencana nonalam</b>: pandemi/epidemi penyakit (COVID-19), gagal teknologi, kecelakaan industri",
          "<b>Bencana sosial</b>: kerusuhan, konflik antarkelompok, aksi terorisme"] }
      ] },
    { h: "2. Langkah Mitigasi Bencana", tag: "Struktural · non-struktural",
      groups: [
        { t: "Pengertian", li: ["Serangkaian upaya mengurangi risiko dan dampak bencana <b>sebelum</b> bencana terjadi"] },
        { t: "Kategori mitigasi", li: [
          "<b>Struktural</b>: pembangunan fisik tahan bencana, misalnya rumah tahan gempa, tanggul laut (<i>seawall</i>), pemecah gelombang (<i>breakwater</i>), terasering",
          "<b>Non-struktural</b>: peta kawasan rawan bencana (KRB), sosialisasi/edukasi, simulasi evakuasi, penyusunan tata ruang, hukum penataan bangunan"], fig: "mitigasi", figCap: "Dua kategori mitigasi bencana." },
        { t: "Kearifan lokal", li: ["<b>Nyabuk Gunung</b>: terasering melingkar lereng (Jawa/Bali)", "<b>Rumah panggung</b> suku Sasak dan Ciptagelar yang elastis terhadap gempa"] }
      ] },
    { h: "3. Adaptasi Kebencanaan", tag: "Aktif · pasif · sosial-ekonomi",
      groups: [
        { t: "Pengertian", li: ["Upaya manusia menyesuaikan diri dengan lingkungan rawan bencana agar tetap dapat bertahan hidup (<i>survive</i>)"] },
        { t: "Bentuk adaptasi", li: [
          "<b>Aktif</b>: meninggikan pondasi rumah (banjir/rob), menjadi ojek perahu, menanam <i>living food bank</i>",
          "<b>Pasif</b>: memahami pola musim hujan/kemarau untuk jadwal tanam (<i>safety first</i>)",
          "<b>Sosial dan ekonomi</b>: gotong royong membuat posko pengungsian, dapur umum, serta asuransi bencana"], fig: "adaptasi", figCap: "Tiga bentuk adaptasi kebencanaan." }
      ] }
  ],
  quiz: [
    { q: "Menurut UU No. 24 Tahun 2007, serangkaian upaya yang dilakukan untuk mengurangi risiko bencana baik melalui pembangunan fisik maupun penyadaran masyarakat dinamakan...", o: ["Adaptasi Bencana", "Mitigasi Bencana", "Tanggap Darurat", "Rehabilitasi Bencana", "Rekonstruksi Bencana"], a: 1, e: "Mitigasi bencana (UU No. 24/2007) adalah serangkaian upaya pengurangan risiko bencana." },
    { q: "Kelompok bencana alam yang dipicu oleh aktivitas tektonisme dan vulkanisme bumi dikategorikan sebagai bencana...", o: ["Hidrometeorologis", "Geologis", "Klimatologis", "Non-Alam", "Sosial"], a: 1, e: "Bencana geologis dipicu oleh dinamika dalam bumi seperti gempa bumi, letusan gunung api, dan longsor." },
    { q: "Gelombang laut raksasa yang dipicu oleh gempa bumi dangkal bermagnitudo besar di dasar laut atau letusan gunung api bawah laut dinamakan...", o: ["Banjir Rob", "Tsunami", "Badai Topan", "Abrasi Pantai", "El Nino"], a: 1, e: "Tsunami adalah gelombang laut raksasa yang dipicu oleh gempa bumi dangkal di dasar laut atau erupsi vulkanik bawah laut." },
    { q: "Contoh bentuk upaya mitigasi bencana secara struktural adalah...", o: ["Penyuluhan dan simulasi evakuasi mandiri di sekolah", "Pembangunan dinding pemecah gelombang (breakwater) dan konstruksi rumah tahan gempa", "Pembuatan peta rawan bencana", "Pembentukan kelompok masyarakat siaga bencana", "Penyusunan peraturan undang-undang penataan ruang"], a: 1, e: "Mitigasi struktural melibatkan fisik bangunan infrastruktur seperti breakwater, tanggul, dan konstruksi tahan gempa." },
    { q: "Kearifan lokal masyarakat di daerah lereng pegunungan dalam melakukan penataan lahan pertanian berundak melingkari lereng untuk mencegah erosi dan tanah longsor dikenal dengan istilah...", o: ["Nyabuk Gunung (Terasering)", "Subak", "Sasi", "Kasepuhan", "Tebang Pilih"], a: 0, e: "Nyabuk Gunung adalah kearifan lokal sistem terasering melingkar lereng untuk mencegah erosi dan tanah longsor." },
    { q: "Konstruksi rumah panggung tradisional Suku Sasak di Lombok dan Suku Ciptagelar di Jawa Barat merupakan bentuk adaptasi fisik terhadap ancaman bencana...", o: ["Banjir Rob", "Gempa Bumi", "Kebakaran Hutan", "Angin Puting Beliung", "Kekeringan"], a: 1, e: "Rumah panggung berbahan kayu/bambu fleksibel merupakan bentuk adaptasi tradisional terhadap gempa bumi." },
    { q: "Tindakan yang tepat dilakukan oleh seseorang saat berada di dalam ruangan gedung bertingkat ketika terjadi gempa bumi adalah...", o: ["Segera berlari menuju lift untuk turun cepat", "Berlindung di bawah meja yang kokoh dan melindungi kepala", "Melompat keluar melalui jendela lantai tinggi", "Berdiri tepat di samping kaca jendela", "Mematikan semua lampu dan berdiam diri"], a: 1, e: "Saat gempa terjadi di dalam gedung, langkah terbaik adalah Drop, Cover, Hold On (berlindung di bawah meja kokoh)." },
    { q: "Strategi adaptasi masyarakat pesisir pantai dalam menghadapi ancaman banjir rob bulanan dengan cara meninggikan pondasi lantai rumah merupakan contoh bentuk adaptasi...", o: ["Pasif", "Aktif", "Non-Struktural", "Vegetatif", "Ekologis"], a: 1, e: "Meninggikan lantai rumah secara sengaja merupakan strategi adaptasi aktif merespon banjir rob." },
    { q: "Bencana non-alam yang melanda dunia dan Indonesia sejak awal tahun 2020 yang mengakibatkan krisis kesehatan masif adalah...", o: ["Kerusuhan Sosial", "Pandemi COVID-19", "Kecelakaan Nuklir", "Kebakaran Hutan", "Kekeringan Meteorologis"], a: 1, e: "Pandemi COVID-19 merupakan contoh bencana non-alam skala global." },
    { q: "Bangunan pelindung pantai berupa dinding beton yang dipasang sejajar garis pantai untuk menahan empasan gelombang ganas laut dan cegah erosi pantai dinamakan...", o: ["Embung", "Breakwater / Seawall", "Drainase", "Polder", "Sekat Kanal"], a: 1, e: "Breakwater / Seawall (tanggul laut) berfungsi menahan hantaman gelombang pasang laut dan mencegah abrasi pantai." }
  ],
  action: {
    judul: "Belajar dari Gempa Lombok 2018",
    kasus: "Desa adat di Lombok memiliki rumah tahan gempa dan sistem mitigasi tradisional, sehingga kerugian lebih kecil saat gempa 2018. Di wilayah lain, banyak bangunan yang tidak memenuhi standar tahan gempa.",
    tugas: ["Identifikasi 2 ancaman bencana yang paling mungkin di sekitar sekolah/rumahmu.", "Gambar sketsa jalur evakuasi dan titik kumpul sekolah.", "Sebutkan satu mitigasi struktural dan satu nonstruktural yang realistis, serta peran masyarakat di dalamnya."]
  }
};
