window.BAB_DATA = window.BAB_DATA || {};
window.BAB_DATA.bab1 = {
  id: "bab1", no: 1, icon: "🧭", short: "Posisi Strategis & SDA",
  title: "Posisi Strategis Indonesia dan Potensi Sumber Daya Alam",
  mindful: {
    fenomena: "Setiap hari puluhan kapal kontainer melintasi Selat Malaka dan Selat Sunda. Barang yang kamu pakai, dari ponsel hingga bahan pangan, mungkin pernah lewat perairan Indonesia. Di darat, hutan, tambang, dan laut kita menyimpan kekayaan yang besar, tetapi juga terancam.",
    img: "assets/images/peta_jalur_pelayaran_dunia.png", alt: "Peta jalur pelayaran dunia",
    pertanyaan: ["Mengapa kapal dunia memilih lewat Indonesia, bukan jalur lain?", "Bagaimana agar kekayaan alam tetap ada untuk generasi berikutnya?"]
  },
  overview: { img: "assets/images/bab1_letak_indonesia.png", alt: "Letak strategis Indonesia: tiga dimensi utama", cap: "Ketuk judul di bawah untuk membuka tiap materi." },
  concept: [
    { h: "1. Letak Astronomis (Absolut)", tag: "6° LU – 11° LS · 95° BT – 141° BT", open: true,
      gridT: "Batas wilayah absolut",
      grid: [["Utara · 6°08' LU", "Pulau Weh (Aceh)"], ["Selatan · 11°15' LS", "Pulau Rote (NTT)"], ["Barat · 95°45' BT", "Pulau Benggala (Aceh)"], ["Timur · 141°05' BT", "Sungai Fly, Merauke (Papua)"]],
      groups: [
        { t: "Dampak iklim tropis", li: [
          "Dilalui <b>garis khatulistiwa (0°)</b> sehingga beriklim <b>tropis</b>: suhu rata-rata dan kelembapan udara tinggi sepanjang tahun",
          "Memiliki <b>hutan hujan tropis yang luas</b> sebagai habitat flora-fauna dan penyeimbang siklus karbon, oksigen, dan air"] },
        { t: "Pembagian zona waktu", chips: ["WIB · GMT+7", "WITA · GMT+8", "WIT · GMT+9"], li: ["Bumi berotasi 360° dalam 24 jam, sehingga tiap <b>15° bujur = 1 jam</b> perbedaan waktu"], fig: "zona", figCap: "Tiga zona waktu Indonesia." }
      ] },
    { h: "2. Letak Geografis (Relatif)", tag: "Posisi silang dunia",
      groups: [
        { t: "Posisi silang", li: ["Di antara <b>dua benua</b> (Asia dan Australia) dan <b>dua samudra</b> (Pasifik dan Hindia)"] },
        { t: "Pengaruh angin monsun", li: [
          "<b>Monsun Barat Laut</b>: membawa uap air dari Asia → <b>musim hujan</b>",
          "<b>Monsun Tenggara</b>: bersifat kering dari Australia → <b>musim kemarau</b>"], fig: "muson", figCap: "Pergantian muson menentukan musim di Indonesia." },
        { t: "Keuntungan ekonomi dan maritim", li: [
          "<b>Jalur pelayaran internasional utama</b> melalui Selat Malaka, Selat Sunda, Selat Lombok, dan Selat Makassar",
          "Landasan kebijakan <b>Poros Maritim Dunia</b>",
          "Terjadinya <b>akulturasi budaya</b> yang kaya"] }
      ] },
    { h: "3. Letak Geologis dan Kebencanaan", tag: "3 lempeng · 2 sirkum · 127 gunung api",
      groups: [
        { t: "Pertemuan 3 lempeng tektonik utama", li: ["Lempeng <b>Eurasia</b>, lempeng <b>Indo-Australia</b>, dan lempeng <b>Pasifik</b>"], img: "assets/images/bab1_lempeng_tektonik.gif", alt: "Dinamika lempeng tektonik dan vulkanisme Indonesia" },
        { t: "Jalur pegunungan dan gunung api", li: [
          "Dilalui dua sirkum pegunungan muda dunia: <b>Sirkum Mediterania</b> dan <b>Sirkum Pasifik</b>",
          "<b>127 gunung api aktif</b> pada jalur <b>busur dalam (inner arc)</b>",
          "<b>Busur luar (outer arc)</b> bersifat non-vulkanik, berupa pulau lepas pantai: Nias, Mentawai, Enggano, Sawu, Rote, Timor"] },
        { t: "Dampak kebencanaan", li: [
          "Frekuensi <b>gempa tektonik tinggi</b>, rata-rata <b>6.512 kali/tahun</b>",
          "Potensi <b>tsunami</b> akibat penunjaman lempeng di sepanjang Selat Sunda/Pantai Barat Sumatra hingga selatan Jawa dan Nusa Tenggara"] }
      ] },
    { h: "4. Pengertian dan Klasifikasi SDA", tag: "Sifat · jenis · pemanfaatan",
      groups: [
        { t: "Pengertian", li: ["Seluruh unsur lingkungan hidup (hayati maupun nonhayati) yang membentuk kesatuan ekosistem dan dimanfaatkan untuk memenuhi kebutuhan serta kesejahteraan manusia (UU RI No. 32/2009)"] },
        { t: "Menurut sifat kelestarian", li: [
          "<b>Dapat diperbarui (renewable)</b>: air, tanah, sinar matahari, angin, hutan, hewan",
          "<b>Tidak dapat diperbarui (unrenewable)</b>: batu bara, minyak bumi, gas alam, nikel, emas, timah"] },
        { t: "Menurut jenis unsur", li: ["<b>Abiotik</b> (nonhayati): batuan, tanah, air, udara, mineral tambang", "<b>Biotik</b> (hayati): hasil pertanian, perkebunan, peternakan, perikanan, hutan"] },
        { t: "Menurut pemanfaatan", li: ["<b>SDA materi</b>: dimanfaatkan bentuk fisiknya (kayu, emas, bijih besi)", "<b>SDA energi</b>: dimanfaatkan energinya (sinar matahari, gas bumi, geotermal)", "<b>SDA ruang</b>: tempat beraktivitas (lahan dataran, pesisir)"], fig: "klasifikasi", figCap: "Klasifikasi sumber daya alam." }
      ] },
    { h: "5. Potensi dan Sebaran SDA Indonesia", tag: "Hutan · laut · tambang",
      groups: [
        { t: "Kehutanan", li: [
          "Tutupan hutan <b>101,22 juta hektare</b> (hutan tropis terluas ke-3 dunia)",
          "Fungsi hutan (UU No. 41/1999): <b>produksi</b> (meranti, jati, rotan), <b>lindung</b> (tata air, cegah erosi), <b>konservasi</b> (cagar alam, suaka margasatwa, taman nasional)"] },
        { t: "Kelautan dan kemaritiman", li: [
          "Perairan <b>5,9 juta km²</b>, garis pantai <b>95.161 km</b>",
          "<b>Mangrove</b> 3,49 juta ha (terluas di Papua, Kalimantan, Sumatra, Sulawesi): cegah abrasi dan tempat pemijahan ikan (<i>spawning ground</i>)",
          "<b>Terumbu karang</b>: 14% terumbu karang dunia di kawasan Coral Triangle (590+ jenis karang)",
          "<b>Perikanan</b>: potensi tangkap dan budi daya <b>17,1 juta ton/tahun</b>"] },
        { t: "Pertambangan (UU No. 11/1967)", li: [
          "<b>Golongan A (strategis)</b>: batu bara (Kalimantan, Sumatra), nikel (Morowali, Halmahera, Raja Ampat), minyak dan gas (Natuna, Dumai, Kaltim, Papua), timah (Bangka Belitung)",
          "<b>Golongan B (vital)</b>: emas (Grasberg Papua, Sumbawa, Jatim), tembaga, bijih besi (Cilacap, Lampung, Sebuku)",
          "<b>Golongan C (industri/konstruksi)</b>: bauksit (Kalbar, Bintan), pasir kuarsa, batu kapur, marmer"] }
      ] },
    { h: "6. Pengelolaan SDA Berkelanjutan", tag: "Prinsip · AMDAL · 3R",
      groups: [
        { t: "Prinsip pembangunan berkelanjutan", li: ["<b>Intergenerational equity</b> (keadilan antargenerasi) dan <b>intragenerational equity</b> (keadilan dalam satu generasi)"] },
        { t: "Instrumen lingkungan", li: [
          "<b>AMDAL</b> (Analisis Mengenai Dampak Lingkungan): wajib pada tahap perencanaan pemanfaatan SDA besar",
          "<b>Ekoefisiensi dan 3R</b> (Reduce, Reuse, Recycle): efisiensi energi/bahan dan pengendalian polusi",
          "<b>Sertifikasi ekolabel</b>: penanda produk ramah lingkungan"] }
      ] }
  ],
  quiz: [
    { q: "Indonesia berada di antara koordinat 6° LU – 11° LS dan 95° BT – 141° BT. Batas wilayah Indonesia paling timur yang terletak pada bujur 141° 05' BT ditandai oleh fenomena geografis berupa...", o: ["Pulau Weh", "Pulau Rote", "Sungai Fly di Merauke", "Pulau Benggala", "Selat Malaka"], a: 2, e: "Batas paling timur Indonesia di bujur 141° 05' BT adalah Sungai Fly yang terletak di Merauke, Provinsi Papua." },
    { q: "Garis lintang 0° (khatulistiwa) melintasi beberapa pulau besar dan kota di Indonesia. Salah satu kota di Kalimantan Barat yang tepat dilintasi garis khatulistiwa adalah...", o: ["Banjarmasin", "Samarinda", "Pontianak", "Palangkaraya", "Balikpapan"], a: 2, e: "Kota Pontianak di Kalimantan Barat tepat dilintasi oleh garis khatulistiwa (0°), ditandai dengan berdirinya Tugu Khatulistiwa." },
    { q: "Indonesia dibagi menjadi 3 zona waktu (WIB, WITA, WIT) berdasarkan rotasi bumi. Jika di Jakarta (WIB) menunjukkan pukul 08.00 WIB, maka pada saat yang sama di Jayapura (WIT) menunjukkan pukul...", o: ["06.00 WIT", "07.00 WIT", "09.00 WIT", "10.00 WIT", "11.00 WIT"], a: 3, e: "Selisih waktu WIB (GMT+7) dan WIT (GMT+9) adalah 2 jam. Jika Jakarta pukul 08.00 WIB, maka Jayapura pukul 10.00 WIT." },
    { q: "Pergerakan Angin Monsun Barat Laut yang bertiup dari Benua Asia menuju Benua Australia melewati samudra luas berdampak pada Indonesia berupa timbulnya...", o: ["Musim kemarau yang panjang", "Musim hujan dengan curah tinggi", "Gempa bumi tektonik", "Gelombang pasang di pantai selatan", "Angin fohn yang kering"], a: 1, e: "Angin Monsun Barat Laut bertiup saat matahari berada di belahan bumi selatan, membawa uap air melimpah dari Samudra Pasifik/Asia sehingga memicu musim hujan di Indonesia." },
    { q: "Secara geologis, Indonesia merupakan titik temu antara tiga lempeng tektonik utama dunia, yaitu...", o: ["Lempeng Pasifik, Lempeng Nazca, dan Lempeng Afrika", "Lempeng Eurasia, Lempeng Indo-Australia, dan Lempeng Pasifik", "Lempeng Filipina, Lempeng Amerika Utara, dan Lempeng Eurasia", "Lempeng Antartika, Lempeng Pasifik, dan Lempeng Indo-Australia", "Lempeng Cocos, Lempeng Eurasia, dan Lempeng Pasifik"], a: 1, e: "Indonesia terletak pada zona konvergensi 3 lempeng utama: Lempeng Eurasia (utara/barat), Lempeng Indo-Australia (selatan/barat), dan Lempeng Pasifik (timur)." },
    { q: "Jalur pegunungan vulkanis aktif yang membentang dari Sumatra, Jawa, Bali, Nusa Tenggara hingga Maluku dinamakan...", o: ["Busur luar (outer arc)", "Busur dalam (inner arc)", "Dangkalan Sunda", "Dangkalan Sahul", "Patahan Semangko"], a: 1, e: "Busur dalam (inner arc) bersifat vulkanik (aktif) membentang dari Sumatra hingga Maluku, sedangkan busur luar (outer arc) bersifat non-vulkanik." },
    { q: "Sumber daya alam yang dimanfaatkan dalam bentuk fisiknya seperti emas, kayu, dan bijih besi dikelompokkan ke dalam...", o: ["SDA Energi", "SDA Ruang", "SDA Materi", "SDA Hayati", "SDA Terbarukan"], a: 2, e: "SDA materi dimanfaatkan wujud fisiknya seperti emas, kayu, dan bijih besi." },
    { q: "Berdasarkan UU No. 11 Tahun 1967, bahan galian tambang strategis yang berfungsi untuk pertahanan dan keamanan negara dikelompokkan dalam Golongan A, contohnya adalah...", o: ["Marmer dan pasir kuarsa", "Bauksit dan batu kapur", "Emas dan tembaga", "Minyak bumi, gas alam, dan nikel", "Tanah liat dan kaolin"], a: 3, e: "Berdasarkan UU No. 11/1967, Golongan A (Strategis) mencakup minyak bumi, gas alam, batu bara, nikel, dan timah." },
    { q: "Indonesia memiliki kawasan hutan bakau (mangrove) seluas 3,49 juta hektare. Fungsi biologis utama dari hutan mangrove adalah...", o: ["Menahan gelombang abrasi pantai", "Tempat pemijahan dan berkembang biak biota laut (spawning ground)", "Sumber kayu bahan baku kertas", "Menyerap karbon dioksida di perkotaan", "Tempat penambangan garam laut"], a: 1, e: "Secara biologis, hutan mangrove menjadi tempat pemijahan, bertelur, dan berkembang biak (spawning ground) berbagai biota laut." },
    { q: "Kegiatan analisis yang wajib dibuat pada tahap perencanaan usaha atau kegiatan pemanfaatan SDA skala besar guna mengendalikan dampak lingkungan hidup dinamakan...", o: ["AMDAL", "Ekolabel", "Ekoefisiensi", "Reboisasi", "Restorasi"], a: 0, e: "AMDAL (Analisis Mengenai Dampak Lingkungan) merupakan studi kelayakan lingkungan yang wajib disusun sebelum pembangunan proyek besar." }
  ],
  action: {
    judul: "Hilirisasi Nikel dan Lingkungan",
    kasus: "Indonesia memiliki cadangan nikel besar dan mendorong hilirisasi, misalnya untuk baterai kendaraan listrik. Di sisi lain, penambangan dan smelter berdampak pada hutan, pesisir, dan masyarakat sekitar.",
    tugas: ["Tuliskan 2 manfaat ekonomi dan 2 risiko lingkungan hilirisasi nikel.", "Usulkan satu langkah pengelolaan berkelanjutan (reklamasi, pengawasan, atau pelibatan warga).", "Mengapa SDA tak terbarukan butuh perencanaan jangka panjang?"],
    // Lembar kerja bergambar. fields = kolom jawaban: [kiri%, atas%, lebar%, tinggi%, kunci?]
    // kunci: "nm","kl","kel","tgl" = data identitas siswa (terisi otomatis di semua lembar); "chk" = kotak centang.
    sheets: [
      { t: "Pemanfaatan SDA 1 (Aktivitas 1)", key: "pemanfaatan_sda_1", img: "assets/images/pemanfaatan_sda_1.png", band: false, fields: [
          [14.94, 12.11, 32.23, 1.69, "nm"],
          [14.94, 14.32, 16.6, 1.69, "kl"],
          [64.45, 12.11, 15.62, 1.69, "kel"],
          [64.45, 14.32, 26.17, 1.69, "tgl"],
          [6.54, 71.88, 13.38, 2.99],
          [20.21, 71.88, 14.84, 2.99],
          [35.35, 71.88, 11.82, 2.99],
          [6.54, 75.13, 13.38, 2.99],
          [20.21, 75.13, 14.84, 2.99],
          [35.35, 75.13, 11.82, 2.99],
          [6.54, 78.32, 13.38, 2.99],
          [20.21, 78.32, 14.84, 2.99],
          [35.35, 78.32, 11.82, 2.99],
          [6.54, 81.58, 13.38, 2.99],
          [20.21, 81.58, 14.84, 2.99],
          [35.35, 81.58, 11.82, 2.99],
          [53.52, 69.99, 42.19, 2.34],
          [53.52, 74.02, 42.19, 2.08],
          [53.52, 79.43, 42.19, 1.56],
          [53.52, 83.59, 42.19, 4.04],
          [12.4, 93.42, 77.15, 4.69]
        ] },
      { t: "Pemanfaatan SDA 2 (Aktivitas 2)", key: "pemanfaatan_sda_2", img: "assets/images/pemanfaatan_sda_2.png", band: true, fields: [
          [5.57, 59.7, 40.04, 2.08],
          [5.57, 64.26, 40.04, 2.08],
          [18.16, 69.79, 27.54, 2.21],
          [18.16, 72.46, 27.54, 2.21],
          [18.16, 75.13, 27.54, 2.34],
          [54.1, 63.09, 16.8, 3.39],
          [71.19, 63.09, 12.4, 3.39],
          [83.89, 63.09, 12.89, 3.39],
          [54.1, 66.73, 16.8, 4.3],
          [71.19, 66.73, 12.4, 4.3],
          [83.89, 66.73, 12.89, 4.3],
          [54.1, 71.29, 16.8, 4.23],
          [71.19, 71.29, 12.4, 4.23],
          [83.89, 71.29, 12.89, 4.23],
          [12.79, 85.81, 33.79, 4.04],
          [12.79, 91.41, 33.79, 3.91],
          [51.66, 82.23, 2.25, 1.43, "chk"],
          [51.66, 84.11, 2.25, 1.43, "chk"],
          [51.66, 86.0, 2.25, 1.43, "chk"],
          [50.49, 91.28, 36.13, 4.3]
        ] }
    ]
  }
};
