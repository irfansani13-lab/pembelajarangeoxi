/* Ilustrasi SVG orisinal (offline, mengikuti mode terang/gelap). Dipanggil lewat kunci dari data bab. */
window.ILUS = {};
var AH = '<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0f766e"/></marker></defs>';

ILUS.zona = `<svg viewBox="0 0 320 130" role="img" aria-label="Tiga zona waktu Indonesia"><g text-anchor="middle">
<rect class="c3" x="6" y="14" width="102" height="66" rx="10"/><rect class="c6" x="109" y="14" width="102" height="66"/><rect class="c2" x="212" y="14" width="102" height="66" rx="10"/>
<text class="tw" x="57" y="38" font-size="15" font-weight="800">WIB</text><text class="tw" x="57" y="51" font-size="9">GMT +7</text><text class="tw" x="57" y="65" font-size="8">Sumatra · Jawa</text><text class="tw" x="57" y="75" font-size="8">Kalbar · Kalteng</text>
<text class="tw" x="160" y="38" font-size="15" font-weight="800">WITA</text><text class="tw" x="160" y="51" font-size="9">GMT +8</text><text class="tw" x="160" y="65" font-size="8">Bali · NTB · NTT</text><text class="tw" x="160" y="75" font-size="8">Sulawesi · Kaltim</text>
<text class="tw" x="263" y="38" font-size="15" font-weight="800">WIT</text><text class="tw" x="263" y="51" font-size="9">GMT +9</text><text class="tw" x="263" y="65" font-size="8">Maluku</text><text class="tw" x="263" y="75" font-size="8">Papua</text>
<line class="l" x1="6" y1="98" x2="314" y2="98"/><text class="s" x="6" y="114" text-anchor="start">95° BT</text><text class="s" x="160" y="114">selisih tiap zona 1 jam</text><text class="s" x="314" y="114" text-anchor="end">141° BT</text></g></svg>`;

ILUS.muson = `<svg viewBox="0 0 320 150" role="img" aria-label="Angin muson">${AH}<g text-anchor="middle">
<rect class="c4" x="8" y="6" width="144" height="20" rx="6"/><text class="tw" x="80" y="20" font-size="10" font-weight="700">ASIA</text>
<rect class="c2" x="8" y="124" width="144" height="20" rx="6"/><text class="tw" x="80" y="138" font-size="10" font-weight="700">AUSTRALIA</text>
<line x1="34" y1="30" x2="34" y2="118" stroke="#0f766e" stroke-width="3" marker-end="url(#ah)"/>
<text class="t" x="94" y="58" font-size="9">Muson Barat Laut</text><text class="s" x="94" y="72">basah, banyak uap air</text><text class="s" x="94" y="84">musim hujan (Okt–Mar)</text>
<g transform="translate(160 0)"><rect class="c4" x="8" y="6" width="144" height="20" rx="6"/><text class="tw" x="80" y="20" font-size="10" font-weight="700">ASIA</text>
<rect class="c2" x="8" y="124" width="144" height="20" rx="6"/><text class="tw" x="80" y="138" font-size="10" font-weight="700">AUSTRALIA</text>
<line x1="126" y1="118" x2="126" y2="30" stroke="#b45309" stroke-width="3" marker-end="url(#ah)"/>
<text class="t" x="66" y="58" font-size="9">Muson Tenggara</text><text class="s" x="66" y="72">kering, sedikit uap air</text><text class="s" x="66" y="84">musim kemarau (Apr–Sep)</text></g>
<line stroke="var(--mut)" stroke-dasharray="3 3" x1="8" y1="75" x2="312" y2="75" opacity=".35"/></g></svg>`;

ILUS.klasifikasi = `<svg viewBox="0 0 320 160" role="img" aria-label="Klasifikasi sumber daya alam"><g text-anchor="middle">
<rect class="c1" x="100" y="4" width="120" height="22" rx="8"/><text class="tw" x="160" y="19" font-size="11" font-weight="800">Sumber Daya Alam</text>
<path class="l" d="M160 26V35M56 35H264M56 35V44M160 35V44M264 35V44"/>
<rect class="bx" x="6" y="44" width="100" height="112" rx="10"/><rect class="bx" x="110" y="44" width="100" height="112" rx="10"/><rect class="bx" x="214" y="44" width="100" height="112" rx="10"/>
<text class="t pr" x="56" y="62" font-size="10">Menurut jenis</text><text class="s" x="56" y="82">Hayati (biotik)</text><text class="s" x="56" y="94">hewan, tumbuhan</text><text class="s" x="56" y="116">Nonhayati (abiotik)</text><text class="s" x="56" y="128">tanah, air, udara,</text><text class="s" x="56" y="139">mineral</text>
<text class="t pr" x="160" y="62" font-size="10">Menurut sifat</text><text class="s" x="160" y="82">Terbarukan</text><text class="s" x="160" y="94">air, angin, hutan,</text><text class="s" x="160" y="105">matahari, ikan</text><text class="s" x="160" y="124">Tak terbarukan</text><text class="s" x="160" y="136">minyak, batu bara,</text><text class="s" x="160" y="147">logam, uranium</text>
<text class="t pr" x="264" y="62" font-size="10">Menurut pemanfaatan</text><text class="s" x="264" y="86">Materi</text><text class="s" x="264" y="98">kayu, emas, bijih besi</text><text class="s" x="264" y="116">Energi</text><text class="s" x="264" y="128">matahari, gas bumi</text><text class="s" x="264" y="146">Ruang</text><text class="s" x="264" y="157">lahan, pesisir</text></g></svg>`;

ILUS.wallace = `<svg viewBox="0 0 320 162" role="img" aria-label="Zona fauna Indonesia: garis Wallace dan Weber"><g text-anchor="middle">
<rect x="0" y="18" width="146" height="122" fill="#3b82f6" opacity=".14"/><rect x="146" y="18" width="94" height="122" fill="#22c55e" opacity=".16"/><rect x="240" y="18" width="80" height="122" fill="#f59e0b" opacity=".18"/>
<text class="t" x="73" y="12" font-size="8">ASIATIS</text><text class="t" x="193" y="12" font-size="8">PERALIHAN</text><text class="t" x="280" y="12" font-size="8">AUSTRALIS</text>
<text class="s" x="73" y="29" font-size="7">gajah · badak · orangutan</text><text class="s" x="193" y="29" font-size="7">anoa · komodo · maleo</text><text class="s" x="280" y="26" font-size="7">cendrawasih</text><text class="s" x="280" y="35" font-size="7">kanguru pohon</text>
<g class="isl"><ellipse cx="36" cy="66" rx="26" ry="9" transform="rotate(35 36 66)"/><ellipse cx="100" cy="58" rx="26" ry="20"/><ellipse cx="80" cy="112" rx="26" ry="5"/><ellipse cx="128" cy="114" rx="6" ry="4"/><ellipse cx="156" cy="114" rx="6" ry="4"/><ellipse cx="195" cy="116" rx="22" ry="4"/><ellipse cx="176" cy="64" rx="14" ry="20"/><ellipse cx="216" cy="56" rx="7" ry="10"/><ellipse cx="222" cy="90" rx="8" ry="5"/><ellipse cx="282" cy="76" rx="32" ry="18"/></g>
<text class="s" x="34" y="90">Sumatra</text><text class="s" x="100" y="90">Kalimantan</text><text class="s" x="80" y="128">Jawa</text><text class="s" x="176" y="97">Sulawesi</text><text class="s" x="282" y="104">Papua</text><text class="s" x="200" y="130">Nusa Tenggara</text>
<line x1="146" y1="18" x2="146" y2="140" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5 3"/><line x1="240" y1="18" x2="240" y2="140" stroke="#0f766e" stroke-width="2" stroke-dasharray="5 3"/>
<text class="t" x="146" y="154" font-size="8">Garis Wallace</text><text class="t" x="240" y="154" font-size="8">Garis Weber</text></g></svg>`;

ILUS.fauna = `<svg viewBox="0 0 320 150" role="img" aria-label="Skema wilayah fauna dunia"><g text-anchor="middle">
<rect class="c3" x="8" y="10" width="92" height="52" rx="8"/><text class="tw" x="54" y="40" font-size="9" font-weight="700">NEARTIK</text>
<rect class="c6" x="52" y="66" width="62" height="76" rx="8"/><text class="tw" x="83" y="106" font-size="9" font-weight="700">NEOTROPIK</text>
<rect class="c4" x="106" y="10" width="126" height="40" rx="8"/><text class="tw" x="169" y="34" font-size="9" font-weight="700">PALEARTIK</text>
<rect class="c2" x="118" y="54" width="66" height="86" rx="8"/><text class="tw" x="151" y="100" font-size="9" font-weight="700">ETHIOPIAN</text>
<rect class="c5" x="188" y="54" width="62" height="46" rx="8"/><text class="tw" x="219" y="80" font-size="9" font-weight="700">ORIENTAL</text>
<rect class="c1" x="222" y="104" width="78" height="38" rx="8"/><text class="tw" x="261" y="127" font-size="9" font-weight="700">AUSTRALIS</text></g></svg>`;

ILUS.ekosistem = `<svg viewBox="0 0 320 150" role="img" aria-label="Komponen ekosistem">${AH}<g text-anchor="middle">
<rect class="c6" x="115" y="6" width="90" height="30" rx="10"/><text class="tw" x="160" y="25" font-size="11" font-weight="700">Produsen</text>
<rect class="c2" x="10" y="102" width="90" height="30" rx="10"/><text class="tw" x="55" y="121" font-size="11" font-weight="700">Konsumen</text>
<rect class="c4" x="220" y="102" width="90" height="30" rx="10"/><text class="tw" x="265" y="121" font-size="11" font-weight="700">Pengurai</text>
<path d="M132 38L72 98" stroke="#0f766e" stroke-width="2.5" fill="none" marker-end="url(#ah)"/><path d="M102 117H216" stroke="#0f766e" stroke-width="2.5" fill="none" marker-end="url(#ah)"/><path d="M248 98L188 38" stroke="#0f766e" stroke-width="2.5" fill="none" marker-end="url(#ah)"/>
<text class="t" x="160" y="68" font-size="9">Unsur abiotik</text><text class="s" x="160" y="80">cahaya · air · udara · tanah</text><text class="s" x="160" y="142">zat hara kembali ke tanah</text></g></svg>`;

(function () {
  var cfg = [["Ekspansif", [44, 36, 28, 19, 10], "#14b8a6", "kelahiran tinggi"], ["Stasioner", [26, 28, 28, 22, 14], "#3b82f6", "lahir-mati rendah"], ["Konstruktif", [18, 23, 28, 28, 20], "#f59e0b", "kelahiran rendah"]];
  var s = '<svg viewBox="0 0 320 150" role="img" aria-label="Tiga tipe piramida penduduk"><g text-anchor="middle">';
  cfg.forEach(function (c, i) {
    var cx = 55 + 105 * i;
    s += '<line stroke="var(--mut)" opacity=".4" x1="' + cx + '" y1="8" x2="' + cx + '" y2="112"/>';
    c[1].forEach(function (w, k) { s += '<rect x="' + (cx - w) + '" y="' + (112 - (k + 1) * 20) + '" width="' + (w * 2) + '" height="18" rx="3" fill="' + c[2] + '"/>'; });
    s += '<text class="t" x="' + cx + '" y="128" font-size="10">' + c[0] + '</text><text class="s" x="' + cx + '" y="141">' + c[3] + '</text>';
  });
  ILUS.piramida = s + '<text class="s" x="8" y="14" text-anchor="start">tua</text><text class="s" x="8" y="108" text-anchor="start">muda</text></g></svg>';
})();

ILUS.risiko = `<svg viewBox="0 0 320 120" role="img" aria-label="Rumus risiko bencana"><g text-anchor="middle">
<text class="t" x="160" y="16" font-size="11">RISIKO BENCANA =</text>
<rect class="c5" x="6" y="28" width="86" height="46" rx="10"/><text class="tw" x="49" y="48" font-size="11" font-weight="800">Bahaya</text><text class="tw" x="49" y="62" font-size="8">peristiwa berbahaya</text>
<text class="t" x="102" y="58" font-size="20">×</text>
<rect class="c2" x="112" y="28" width="86" height="46" rx="10"/><text class="tw" x="155" y="48" font-size="11" font-weight="800">Kerentanan</text><text class="tw" x="155" y="62" font-size="8">mudah terdampak</text>
<text class="t" x="208" y="58" font-size="20">÷</text>
<rect class="c6" x="218" y="28" width="86" height="46" rx="10"/><text class="tw" x="261" y="48" font-size="11" font-weight="800">Kapasitas</text><text class="tw" x="261" y="62" font-size="8">kemampuan siap</text>
<text class="s" x="160" y="96">Risiko turun jika kapasitas naik atau kerentanan turun</text><text class="s" x="160" y="109">(Bahaya alam tak bisa dihilangkan, risikonya bisa dikurangi)</text></g></svg>`;


ILUS.mitigasi = `<svg viewBox="0 0 320 150" role="img" aria-label="Mitigasi struktural dan non-struktural"><g text-anchor="middle">
<rect class="bx" x="6" y="6" width="150" height="138" rx="10"/><rect class="c3" x="6" y="6" width="150" height="26" rx="10"/><text class="tw" x="81" y="24" font-size="11" font-weight="800">STRUKTURAL</text>
<text class="s" x="81" y="52">Rumah tahan gempa</text><text class="s" x="81" y="70">Tanggul laut (seawall)</text><text class="s" x="81" y="88">Pemecah gelombang</text><text class="s" x="81" y="99">(breakwater)</text><text class="s" x="81" y="119">Terasering</text>
<rect class="bx" x="164" y="6" width="150" height="138" rx="10"/><rect class="c1" x="164" y="6" width="150" height="26" rx="10"/><text class="tw" x="239" y="24" font-size="11" font-weight="800">NON-STRUKTURAL</text>
<text class="s" x="239" y="52">Peta kawasan rawan (KRB)</text><text class="s" x="239" y="70">Sosialisasi dan edukasi</text><text class="s" x="239" y="88">Simulasi evakuasi</text><text class="s" x="239" y="106">Tata ruang</text><text class="s" x="239" y="124">Hukum penataan bangunan</text></g></svg>`;

ILUS.adaptasi = `<svg viewBox="0 0 320 130" role="img" aria-label="Bentuk adaptasi kebencanaan"><g text-anchor="middle">
<rect class="bx" x="6" y="6" width="100" height="118" rx="10"/><rect class="c2" x="6" y="6" width="100" height="26" rx="10"/><text class="tw" x="56" y="24" font-size="11" font-weight="800">AKTIF</text>
<text class="s" x="56" y="52">Tinggikan pondasi</text><text class="s" x="56" y="64">rumah (banjir/rob)</text><text class="s" x="56" y="84">Ojek perahu</text><text class="s" x="56" y="104">Tanam living food bank</text>
<rect class="bx" x="110" y="6" width="100" height="118" rx="10"/><rect class="c3" x="110" y="6" width="100" height="26" rx="10"/><text class="tw" x="160" y="24" font-size="11" font-weight="800">PASIF</text>
<text class="s" x="160" y="52">Pahami pola musim</text><text class="s" x="160" y="64">hujan dan kemarau</text><text class="s" x="160" y="84">Atur jadwal tanam</text><text class="s" x="160" y="96">(safety first)</text>
<rect class="bx" x="214" y="6" width="100" height="118" rx="10"/><rect class="c6" x="214" y="6" width="100" height="26" rx="10"/><text class="tw" x="264" y="24" font-size="9.5" font-weight="800">SOSIAL-EKONOMI</text>
<text class="s" x="264" y="52">Gotong royong</text><text class="s" x="264" y="64">posko pengungsian</text><text class="s" x="264" y="84">Dapur umum</text><text class="s" x="264" y="104">Asuransi bencana</text></g></svg>`;
