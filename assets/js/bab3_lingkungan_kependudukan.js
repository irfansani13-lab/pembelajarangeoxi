window.BAB_DATA = window.BAB_DATA || {};
window.BAB_DATA.bab3 = {
  id: "bab3", no: 3, icon: "🌍", short: "Lingkungan & Kependudukan",
  title: "Lingkungan dan Kependudukan",
  mindful: {
    emoji: "🌍👥",
    fenomena: "Sungai Citarum mengalir dari Bandung hingga Bekasi dan menjadi sorotan dunia karena tercemar berat. Jumlah penduduk Indonesia pun terus bertambah dan kini mencapai sekitar 270 juta jiwa.",
    pertanyaan: ["Apa hubungan jumlah penduduk dengan kualitas lingkungan?", "Bagaimana penduduk besar bisa menjadi kekuatan, bukan beban?"]
  },
  concept: [
    { h: "1. Lingkungan sebagai Habitat Hidup Berkelanjutan", tag: "Komponen · IKLH · isu global", open: true,
      groups: [
        { t: "Komponen lingkungan hidup", li: [
          "<b>Biotik</b>: makhluk hidup; produsen (tumbuhan), konsumen (hewan dan manusia), dekomposer (jamur dan bakteri)",
          "<b>Abiotik</b>: benda mati (tanah, air, udara, sinar matahari)",
          "<b>Sosial budaya</b>: sistem nilai, adat istiadat, dan struktur kemasyarakatan"], fig: "ekosistem", figCap: "Aliran zat dan energi dalam ekosistem." },
        { t: "Indeks Kualitas Lingkungan Hidup (IKLH)", li: ["Diukur dari <b>IKA</b> (Indeks Kualitas Air), <b>IKU</b> (udara), dan <b>IKTL</b> (tutupan lahan)"] },
        { t: "Isu lingkungan global", li: ["Pemanasan global (<i>global warming</i>)", "Pencemaran udara, air (contoh Sungai Citarum), dan pantai/laut", "Alih fungsi lahan"] }
      ] },
    { h: "2. Penduduk sebagai Sumber Daya Manusia", tag: "Dinamika · rumus · data",
      groups: [
        { t: "Dinamika kependudukan", li: ["Perubahan jumlah, komposisi, dan distribusi penduduk akibat proses demografi:", "<b>Natalitas</b> (kelahiran): faktor alami penambah penduduk", "<b>Mortalitas</b> (kematian): faktor alami pengurang penduduk", "<b>Migrasi</b> (perpindahan): faktor non-alami; imigrasi, emigrasi, transmigrasi, urbanisasi"] },
        { t: "Rumus pertumbuhan penduduk alami", chips: ["P = L − M"], li: ["P = pertumbuhan alami, L = jumlah kelahiran, M = jumlah kematian", "Contoh Kota Malang: 1.521 − 1.333 = <b>188 jiwa</b>"] },
        { t: "Sumber data kependudukan", li: [
          "<b>Sensus penduduk</b>: pencatatan serentak seluruh penduduk (metode <i>de facto</i> dan <i>de jure</i>), 10 tahun sekali",
          "<b>Survei penduduk</b>: pengambilan data sampel yang representatif",
          "<b>Registrasi penduduk</b>: pencatatan harian peristiwa vital (kelahiran, kematian, pernikahan, kepindahan) oleh pemerintah lokal"] }
      ] },
    { h: "3. Kuantitas dan Kualitas Penduduk", tag: "Bonus demografi · piramida",
      groups: [
        { t: "Bonus demografi", li: ["Proporsi penduduk usia produktif (<b>15–64 tahun</b>) lebih dari <b>70%</b> total populasi; pada Sensus Penduduk 2020 mencapai <b>70,72%</b>"] },
        { t: "Piramida penduduk", li: [
          "<b>Ekspansif (muda)</b>: kelahiran tinggi, didominasi usia muda; bentuk kerucut/candi",
          "<b>Stasioner</b>: kelahiran dan kematian seimbang; bentuk granat/kotak",
          "<b>Konstruktif (tua)</b>: kelahiran sangat rendah, didominasi usia tua; bentuk nisan/pasu"], fig: "piramida", figCap: "Tiga tipe piramida penduduk." }
      ] },
    { h: "4. Masalah Kependudukan dan Upayanya", tag: "KB · transmigrasi",
      groups: [
        { t: "Masalah", li: ["Jumlah penduduk sangat besar (&gt;270,2 juta jiwa)", "Persebaran tidak merata: <b>&gt;55% terkonsentrasi di Pulau Jawa</b>", "Kualitas pendidikan dan kesehatan belum merata"] },
        { t: "Upaya penanggulangan", li: ["<b>Program Keluarga Berencana (KB)</b> untuk mengendalikan natalitas", "<b>Transmigrasi</b> dan pemerataan ekonomi di luar Pulau Jawa", "Peningkatan mutu pendidikan dan pelatihan keterampilan kerja"] }
      ] }
  ],
  quiz: [
    { q: "Komponen lingkungan hidup yang terdiri dari unsur-unsur benda mati seperti tanah, air, udara, dan sinar matahari disebut lingkungan...", o: ["Biotik", "Abiotik", "Sosial", "Budaya", "Organik"], a: 1, e: "Lingkungan abiotik terdiri dari komponen-komponen tidak hidup (benda mati) seperti tanah, air, udara, dan batu." },
    { q: "Komposisi makhluk hidup dalam ekosistem yang berperan menguraikan bahan organik sisa organisme mati menjadi hara tanah adalah...", o: ["Produsen", "Konsumen Primer", "Konsumen Sekunder", "Dekomposer / Pengurai", "Predator puncak"], a: 3, e: "Dekomposer (pengurai) seperti jamur dan bakteri menguraikan sisa organisme mati menjadi zat hara penyubur tanah." },
    { q: "Pada sensus penduduk tahun 2020, Kota Malang mencatatkan jumlah kelahiran sebesar 1.521 jiwa dan jumlah kematian sebesar 1.333 jiwa. Berapakah pertumbuhan penduduk alami Kota Malang tersebut?", o: ["188 jiwa", "2.854 jiwa", "152 jiwa", "200 jiwa", "188.000 jiwa"], a: 0, e: "Rumus P = L - M = 1.521 - 1.333 = 188 jiwa." },
    { q: "Pencatatan harian secara terus-menerus mengenai peristiwa penting vital kependudukan seperti kelahiran, kematian, dan pernikahan oleh instansi pemerintah lokal dinamakan...", o: ["Sensus Penduduk", "Survei Penduduk", "Registrasi Penduduk", "Sampling Demografi", "Pemilu Kependudukan"], a: 2, e: "Registrasi penduduk adalah pencatatan peristiwa vital harian (kelahiran, kematian, migrasi)." },
    { q: "Indonesia diproyeksikan mengalami puncak Bonus Demografi. Kondisi Bonus Demografi ditandai oleh...", o: ["Jumlah penduduk lansia lebih besar dari anak-anak", "Proporsi penduduk usia produktif (15–64 tahun) jauh lebih tinggi dibanding usia non-produktif", "Tingkat kematian bayi sangat tinggi", "Terjadinya penurunan jumlah angkatan kerja", "Angka migrasi keluar negeri meningkat pesat"], a: 1, e: "Bonus demografi tercapai saat proporsi penduduk usia produktif (15–64 tahun) mendominasi struktur populasi (>70%)." },
    { q: "Bentuk piramida penduduk yang ditandai oleh angka kelahiran yang sangat tinggi dengan proporsi penduduk usia muda melimpah dinamakan piramida...", o: ["Stasioner", "Konstruktif (Tua)", "Ekspansif (Muda)", "Granat", "Perpusat"], a: 2, e: "Piramida ekspansif (muda) menunjukkan tingkat kelahiran tinggi dengan bagian alas piramida yang lebar." },
    { q: "Masalah utama kependudukan di Indonesia terkait aspek persebaran spasial adalah...", o: ["Jumlah penduduk terlalu sedikit di pulau Jawa", "Persebaran penduduk tidak merata dengan pemusatan melampaui 55% di Pulau Jawa", "Seluruh pulau memiliki kepadatan yang sama", "Angka kelahiran di luar Jawa lebih rendah daripada di Jawa", "Tingginya arus migrasi dari Jawa ke Papua"], a: 1, e: "Masalah spasial kependudukan utama Indonesia adalah ketimpangan kepadatan, di mana >55% penduduk terkonsentrasi di Pulau Jawa." },
    { q: "Salah satu upaya pemerintah untuk mengatasi masalah ketimpangan kepadatan penduduk antarwilayah di Indonesia adalah melalui program...", o: ["Keluarga Berencana (KB)", "Transmigrasi", "Urbanisasi", "Industrialisasi Jawa", "Pemukiman kumuh"], a: 1, e: "Transmigrasi adalah program pemindahan penduduk dari daerah padat (Jawa) ke daerah yang masih jarang penduduknya." },
    { q: "Indeks yang digunakan untuk menilai kualitas lingkungan hidup nasional berdasarkan gabungan kualitas air, udara, dan tutupan lahan disebut...", o: ["HDI (Human Development Index)", "IKLH (Indeks Kualitas Lingkungan Hidup)", "PDRB", "AMDAL", "IPCC"], a: 1, e: "Indeks Kualitas Lingkungan Hidup (IKLH) mengukur kualitas tutupan lahan, air, dan udara nasional." },
    { q: "Fenomena peningkatan suhu rata-rata atmosfer dan lautan bumi yang dipicu oleh akumulasi gas rumah kaca dinamakan...", o: ["Eutrofikasi", "Hujan Asam", "Global Warming (Pemanasan Global)", "Inversi Suhu", "Efek La Nina"], a: 2, e: "Pemanasan global (global warming) adalah fenomena kenaikan suhu rata-rata bumi akibat emisi gas rumah kaca." }
  ],
  action: {
    judul: "Citarum dan Penduduk di Sekitarnya",
    kasus: "Sungai Citarum mengaliri banyak kabupaten dan kota di Jawa Barat dan menjadi sumber air bagi pertanian serta permukiman. Limbah rumah tangga dan industri membuat kualitas airnya menurun.",
    tugas: ["Identifikasi 3 sumber pencemar sungai di lingkunganmu dan unsur lingkungan (biotik/abiotik/sosial) yang terdampak.", "Hubungkan dengan pertumbuhan penduduk: bagaimana peningkatan jumlah penduduk memperberat beban sungai?", "Usulkan satu aksi sekolah atau warga untuk memperbaiki kualitas air dan satu indikator keberhasilannya."]
  }
};
