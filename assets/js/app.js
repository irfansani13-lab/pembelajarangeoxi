/* Geografi XI - App Controller (SPA) + hook AdMob untuk Android WebView */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var KEY = "geoXI_v1";
  var STEPS = ["Mindful", "Konsep", "Kuis", "Aksi"];
  // Ubah data di bawah ini sesuai identitas aplikasi/pengembang
  var APP_INFO = {
    nama: "Geografi XI - Deep Learning",
    versi: "1.0.0",
    kurikulum: "Kurikulum Merdeka, Fase F (Kelas XI SMA/MA)",
    pengembang: "Irfan Sani, S.Pd/Guru",
    sekolah: "SMAN 2 Sukatani",
    kontak: "irfansani13@gmail.com"
  };
  var S = { bab: null, step: 0, q: null, navCount: 0, store: { score: {}, note: {}, theme: null } };

  try { var raw = localStorage.getItem(KEY); if (raw) S.store = Object.assign(S.store, JSON.parse(raw)); } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S.store)); } catch (e) {} }

  /* ===== ADMOB HOOKS (JS -> Java/Kotlin lewat addJavascriptInterface "AndroidInterface") ===== */
  function showInterstitialAd(nextActionCallback) {
    if (window.AndroidInterface && typeof window.AndroidInterface.showInterstitial === "function") {
      window.AndroidInterface.showInterstitial();
    } else {
      console.log("[AdMob Simulation] Interstitial Ad Displayed");
    }
    if (typeof nextActionCallback === "function") nextActionCallback();
  }
  window.showInterstitialAd = showInterstitialAd;
  // Banner (opsional): native boleh mengabaikan bila tidak diimplementasi
  window.setBannerVisible = function (v) {
    if (window.AndroidInterface && typeof window.AndroidInterface.setBannerVisible === "function") window.AndroidInterface.setBannerVisible(!!v);
  };
  // Frekuensi dibatasi: interstitial hanya di jeda alami, tiap 2 transisi (kuis selesai / bab selesai)
  function maybeInterstitial(cb) {
    S.navCount++;
    if (S.navCount % 2 === 0) showInterstitialAd(cb); else cb();
  }

  /* ===== UTIL ===== */
  function babs() { return Object.keys(window.BAB_DATA || {}).map(function (k) { return window.BAB_DATA[k]; }).sort(function (a, b) { return a.no - b.no; }); }
  function img(src, alt, cls) {
    if (!src) return "";
    return '<img ' + (cls ? 'class="' + cls + '" ' : "") + 'src="' + src + '" alt="' + alt + '" loading="lazy" onerror="var d=document.createElement(\'div\');d.className=\'ph\';d.textContent=\'🖼️ \'+this.alt+\' (\'+this.getAttribute(\'src\')+\')\';this.replaceWith(d)">';
  }
  function setTitle(t, back) { $("#title").textContent = t; $("#back").hidden = !back; }
  function applyTheme() { if (S.store.theme) document.documentElement.setAttribute("data-theme", S.store.theme); }

  /* ===== VIEWS ===== */
  function home() {
    S.bab = null; S.view = "home"; setNav("home"); setTitle("Geografi XI", false); window.setBannerVisible(true);
    var h = '<div class="card hero"><h2>Deep Learning Geografi</h2><p>Mindful · Meaningful · Joyful — Kelas XI Fase F</p></div>' +
      '<div class="card"><h3 style="margin-top:0">Infografis Rangkuman Bab 1–4</h3>' + img("assets/images/infografis_rangkuman_geografi_bab1_4.png", "Infografis rangkuman Geografi Kelas XI Bab 1-4", "zm") + '<p class="cap">Ketuk gambar untuk memperbesar.</p></div><div class="grid">';
    babs().forEach(function (b) {
      var sc = S.store.score[b.id];
      h += '<button class="card bab" data-id="' + b.id + '"><span class="ic">' + b.icon + '</span><span><b>Bab ' + b.no + '</b><br><small>' + b.title + '</small></span><span class="badge">' + (sc != null ? "★ " + sc + "%" : "") + '</span></button>';
    });
    $("#app").innerHTML = h + "</div>";
    document.querySelectorAll(".bab").forEach(function (el) { el.onclick = function () { openBab(el.dataset.id); }; });
    window.scrollTo(0, 0);
  }

  function setNav(n) {
    document.querySelectorAll("#nav button").forEach(function (el) { el.classList.toggle("on", el.dataset.nav === n); });
  }

  function about() {
    S.bab = null; S.view = "about"; setNav("about"); setTitle("Tentang Aplikasi", false); window.setBannerVisible(true);
    var done = Object.keys(S.store.score).length, total = babs().length;
    var h = '<div class="card"><div class="about-logo">🌏</div><h2 class="about-t">' + APP_INFO.nama + '</h2><p class="about-v">Versi ' + APP_INFO.versi + '</p>' +
      '<p>Media pembelajaran interaktif Geografi yang dirancang dengan pendekatan <b>Deep Learning</b>: belajar yang sadar (<i>mindful</i>), bermakna (<i>meaningful</i>), dan menyenangkan (<i>joyful</i>). Dapat digunakan tanpa internet.</p></div>';
    h += '<div class="card"><h3>📖 Petunjuk Penggunaan</h3><ol class="guide">' +
      '<li><b>Pilih bab</b> di menu <b>Beranda</b> dengan mengetuk kartu bab.</li>' +
      '<li>Mulai dari tab <b>Mindful</b>: baca fenomena dan renungkan pertanyaan pemantik sebelum belajar.</li>' +
      '<li>Buka tab <b>Konsep</b> untuk membaca materi, gambar, dan animasi. Geser layar ke bawah untuk melihat seluruh isi.</li>' +
      '<li>Kerjakan <b>Kuis</b>: ketuk satu jawaban, hasil benar/salah dan penjelasannya langsung muncul. Ketuk <b>Soal berikutnya</b> hingga skor akhir tampil. Kuis bisa diulang kapan saja.</li>' +
      '<li>Selesaikan tab <b>Aksi</b>: kerjakan tugas analisis kasus, tulis jawaban di kolom catatan, lalu ketuk <b>Simpan Catatan</b>.</li>' +
      '<li>Ketuk <b>Selesai Bab</b> untuk kembali ke Beranda. Skor terbaikmu tampil sebagai ★ pada kartu bab.</li>' +
      '<li>Tombol <b>◐</b> di pojok kanan atas mengganti tampilan terang/gelap. Tombol <b>←</b> atau tombol kembali di ponsel membawamu ke Beranda.</li>' +
      '<li>Aplikasi dapat dipakai <b>tanpa internet</b>. Progres tersimpan di perangkat ini.</li></ol></div>';
    h += '<div class="card"><h3>Alur Belajar Tiap Bab</h3><ul><li><b>Mindful</b>: pertanyaan pemantik dan fenomena nyata</li><li><b>Konsep</b>: materi disertai gambar dan animasi</li><li><b>Kuis</b>: soal interaktif dengan skor instan</li><li><b>Aksi</b>: tugas analisis kasus di Indonesia</li></ul></div>';
    h += '<div class="card"><h3>Daftar Bab</h3><ul>' + babs().map(function (b) { return "<li>Bab " + b.no + ": " + b.title + "</li>"; }).join("") + "</ul></div>";
    h += '<div class="card"><h3>Informasi</h3>' +
      '<div class="row"><span>Kurikulum</span><span>' + APP_INFO.kurikulum + '</span></div>' +
      '<div class="row"><span>Pengembang</span><span>' + APP_INFO.pengembang + '</span></div>' +
      '<div class="row"><span>Sekolah</span><span>' + APP_INFO.sekolah + '</span></div>' +
      '<div class="row"><span>Kontak</span><span>' + APP_INFO.kontak + '</span></div>' +
      '<div class="row"><span>Progres kuis</span><span>' + done + " dari " + total + ' bab</span></div></div>';
    h += '<div class="card"><h3>Iklan</h3><p style="margin:.2em 0;font-size:.9rem">Aplikasi ini menampilkan iklan (Google AdMob) untuk mendukung pengembangan. Iklan layar penuh hanya muncul di jeda belajar, bukan saat mengerjakan soal.</p></div>';
    h += '<div class="card"><h3>Pengaturan Data</h3><p style="margin:.2em 0;font-size:.9rem">Skor dan catatan tersimpan di perangkat ini saja.</p><button class="btn danger" id="reset">Hapus Progres &amp; Catatan</button></div>';
    $("#app").innerHTML = h;
    var r = $("#reset"), armed = false;
    r.onclick = function () {
      if (!armed) { armed = true; r.textContent = "Yakin? Tekan sekali lagi"; setTimeout(function () { armed = false; r.innerHTML = "Hapus Progres &amp; Catatan"; }, 4000); return; }
      S.store.score = {}; S.store.note = {}; S.store.sheet = {}; S.store.siswa = {}; save(); about();
    };
    window.scrollTo(0, 0);
  }

  function openBab(id) { S.bab = window.BAB_DATA[id]; S.step = 0; S.q = null; renderBab(); }

  function renderBab() {
    var b = S.bab; setTitle("Bab " + b.no + ": " + b.short, true);
    var h = '<div class="tabs">' + STEPS.map(function (t, i) { return '<button class="' + (i === S.step ? "on" : "") + '" data-s="' + i + '">' + t + "</button>"; }).join("") + "</div>";
    h += [mindful, concept, quiz, action][S.step](b);
    $("#app").innerHTML = h;
    document.querySelectorAll(".tabs button").forEach(function (el) { el.onclick = function () { S.step = +el.dataset.s; renderBab(); }; });
    bind(); window.scrollTo(0, 0);
  }

  function mindful(b) {
    var m = b.mindful;
    return '<div class="card"><h2>🧘 Mindful Start</h2>' + (m.emoji ? '<div class="emo">' + m.emoji + "</div>" : "") + "<p>" + m.fenomena + "</p>" + img(m.img, m.alt || b.short) + "<h3>Renungkan sejenak</h3><ul>" + m.pertanyaan.map(function (p) { return "<li>" + p + "</li>"; }).join("") + '</ul><button class="btn" data-go="1">Mulai Belajar →</button></div>';
  }
  function esc(t) { return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function fig(k, cap) { var v = window.ILUS && window.ILUS[k]; return v ? '<figure class="fig">' + v + (cap ? "<figcaption>" + cap + "</figcaption>" : "") + "</figure>" : ""; }
  function li(a) { return a && a.length ? "<ul>" + a.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : ""; }
  function hsHTML(c) {
    var pos = function (it) { return "left:" + it.x + "%;top:" + it.y + "%;width:" + it.w + "%;height:" + it.h + "%"; };
    return '<div class="hs"><div class="hsimg">' + img(c.img, c.alt) + c.items.map(function (it, i) { return '<button class="hsa" data-hs="' + i + '" aria-label="' + it.n + '" style="' + pos(it) + '"></button>'; }).join("") + "</div>" +
      '<p class="cap">' + (c.cap || "Ketuk bagian gambar atau nama di bawah untuk melihat penjelasan.") + '</p><div class="hsc">' + c.items.map(function (it, i) { return '<button data-hs="' + i + '">' + it.n + "</button>"; }).join("") + "</div>" +
      c.items.map(function (it, i) { return '<div class="hsd" data-hsd="' + i + '" hidden><h3>' + it.t + "</h3>" + li(it.li) + "</div>"; }).join("") +
      '<button class="btn alt hsz" data-zoom="' + c.img + '">🔍 Perbesar gambar</button></div>';
  }
  function concept(b) {
    var h = "";
    if (b.overview) h += '<div class="card">' + img(b.overview.img, b.overview.alt) + (b.overview.cap ? '<p class="cap">' + b.overview.cap + "</p>" : "") + "</div>";
    b.concept.forEach(function (s, i) {
      h += '<details class="acc"' + (s.open || (i === 0 && !b.overview) ? " open" : "") + "><summary>" + s.h + (s.tag ? "<small>" + s.tag + "</small>" : "") + '</summary><div class="acc-b">';
      if (s.p) h += "<p>" + s.p + "</p>";
      if (s.hs) h += hsHTML(s.hs);
      if (s.grid) h += (s.gridT ? "<h3>" + s.gridT + "</h3>" : "") + '<div class="kv">' + s.grid.map(function (g) { return "<div><small>" + g[0] + "</small><b>" + g[1] + "</b></div>"; }).join("") + "</div>";
      (s.groups || []).forEach(function (g) {
        h += g.t ? "<h3>" + g.t + "</h3>" : "";
        if (g.chips) h += '<div class="chips">' + g.chips.map(function (c) { return "<span>" + c + "</span>"; }).join("") + "</div>";
        h += li(g.li) + (g.img ? img(g.img, g.alt || g.t, "zm") : "") + (g.cap ? '<p class="cap">' + g.cap + "</p>" : "") + (g.fig ? fig(g.fig, g.figCap) : "");
      });
      h += li(s.poin) + img(s.img, s.h, "zm") + img(s.gif, "Animasi: " + s.h, "zm");
      if (s.table) h += (s.table.t ? "<h3>" + s.table.t + "</h3>" : "") + '<div class="tbw"><table class="tb"><thead><tr>' + s.table.head.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr></thead><tbody>" + s.table.rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return '<td data-l="' + s.table.head[i] + '">' + c + "</td>"; }).join("") + "</tr>"; }).join("") + '</tbody></table></div>';
      h += "</div></details>";
    });
    return h + '<button class="btn" data-go="2">Uji Pemahaman →</button>';
  }

  function quiz(b) {
    if (!S.q) S.q = { i: 0, score: 0, picked: null };
    var q = S.q, qs = b.quiz;
    if (q.i >= qs.length) {
      var pct = Math.round(q.score / qs.length * 100);
      return '<div class="card"><h2>🎉 Hasil Kuis</h2><div class="score">' + pct + '%</div><p style="text-align:center">' + q.score + " dari " + qs.length + " benar. " + (pct >= 75 ? "Hebat, kamu paham konsepnya!" : "Ayo ulangi dan baca konsepnya lagi.") + '</p><div style="text-align:center"><button class="btn alt" data-retry="1">Ulangi</button> <button class="btn" data-finish="1">Lanjut ke Aksi →</button></div></div>';
    }
    var it = qs[q.i];
    var h = '<div class="bar"><i style="width:' + (q.i / qs.length * 100) + '%"></i></div><div class="card"><div class="q">' + (q.i + 1) + "/" + qs.length + " · " + it.q + "</div>";
    it.o.forEach(function (o, i) {
      var c = "";
      if (q.picked !== null) c = i === it.a ? " ok" : (i === q.picked ? " bad" : "");
      h += '<button class="opt' + c + '" data-opt="' + i + '"' + (q.picked !== null ? " disabled" : "") + ">" + o + "</button>";
    });
    if (q.picked !== null) h += '<div class="fb">' + (q.picked === it.a ? "✅ Benar! " : "❌ Belum tepat. ") + it.e + '</div><button class="btn" data-next="1">' + (q.i + 1 < qs.length ? "Soal berikutnya" : "Lihat skor") + "</button>";
    return h + "</div>";
  }

  var BIND = { nm: 1, kl: 1, kel: 1, tgl: 1 };
  function srcOf(sh) { var m = window.SHEET_IMG && window.SHEET_IMG[sh.key]; return m ? m.d : sh.img; }
  function sheetsHTML(b) {
    var a = b.action; if (!a.sheets) return "";
    var sv = S.store.siswa || {}, ans = (S.store.sheet || {})[b.id] || {};
    var h = '<div class="card"><h2>📝 Lembar Kerja</h2><p style="font-size:.9rem;margin:.2em 0">Ketuk kolom pada gambar untuk menulis jawaban. Gunakan tombol <b>🔍 Perbesar</b> agar tulisan lebih jelas. Setelah selesai, unduh kedua lembar sebagai satu file PDF.</p></div>';
    a.sheets.forEach(function (sh, i) {
      var A = ans[i] || {}, hasF = sh.fields && sh.fields.length;
      h += '<div class="card"><div class="shh"><h3>' + sh.t + '</h3>' + (hasF ? '<button class="btn alt zbtn">🔍 Perbesar</button>' : "") + '</div><div class="sheetwrap"><div class="sheet">' + img(srcOf(sh), sh.t);
      if (hasF) sh.fields.forEach(function (f, j) {
        var pos = 'style="left:' + f[0] + "%;top:" + f[1] + "%;width:" + f[2] + "%;height:" + f[3] + '%"', k = f[4], at = 'data-sh="' + i + '" data-f="' + j + '"';
        if (k === "chk") h += '<button class="fld chk' + (A[j] ? " on" : "") + '" ' + at + " " + pos + ">" + (A[j] ? "✓" : "") + "</button>";
        else h += '<textarea class="fld" ' + at + (BIND[k] ? ' data-k="' + k + '"' : "") + " " + pos + ">" + esc(BIND[k] ? sv[k] : A[j]) + "</textarea>";
      });
      h += "</div></div>";
      if (!hasF) h += '<textarea class="free" data-sh="' + i + '" data-f="0" placeholder="Tulis jawaban lembar kerja ini...">' + esc(A[0]) + "</textarea>";
      h += "</div>";
    });
    return h + '<div class="card"><button class="btn" data-pdf="1">⬇️ Unduh Lembar Kerja (PDF)</button><p id="pdfmsg" style="font-size:.85rem;color:var(--mut)"></p></div>';
  }

  function action(b) {
    var a = b.action, note = S.store.note[b.id] || "";
    return '<div class="card"><h2>🎯 Aksi & Refleksi</h2><h3>Kasus: ' + a.judul + "</h3><p>" + a.kasus + "</p><h3>Tugas analisis</h3><ul>" + a.tugas.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></div>" +
      sheetsHTML(b) +
      '<div class="card"><h3>Catatan refleksi</h3><textarea id="note" placeholder="Tulis jawaban/refleksimu di sini...">' + esc(note) + '</textarea><div><button class="btn alt" data-save="1">Simpan Catatan</button> <button class="btn" data-done="1">Selesai Bab ✓</button></div></div>';
  }

  /* ===== LEMBAR KERJA -> PDF: gambar lembar kerja sebagai latar + jawaban siswa sebagai teks di atasnya ===== */
  /* Tanpa canvas dan tanpa library, sehingga aman di file:// maupun WebView. */
  var HWD = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584];
  function tw(s, fs) { var w = 0; for (var i = 0; i < s.length; i++) { var c = s.charCodeAt(i); w += (c >= 32 && c <= 126) ? HWD[c - 32] : 556; } return w * fs / 1000; }
  function pe(s) { return String(s).replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/[^\x20-\x7E\xA0-\xFF]/g, "?").replace(/([\\()])/g, "\\$1"); }
  function wrapT(text, maxW, fs) {
    var out = [];
    String(text).split("\n").forEach(function (p) {
      var line = "";
      p.split(" ").forEach(function (wd) { var t = line ? line + " " + wd : wd; if (tw(t, fs) > maxW && line) { out.push(line); line = wd; } else line = t; });
      out.push(line);
    });
    return out;
  }
  function fieldOps(txt, fx, fy, fw, fh, max) { // fy = tepi atas kolom (koordinat PDF, asal di kiri-bawah)
    var fs = max, ls;
    for (; fs > 6; fs -= 0.5) { ls = wrapT(txt, fw - 4, fs); if (ls.length * fs * 1.1 <= fh - 2) break; }
    ls = wrapT(txt, fw - 4, fs);
    var o = "BT /F1 " + fs.toFixed(1) + " Tf 0.04 0.24 0.57 rg ";
    ls.forEach(function (l, k) { o += "1 0 0 1 " + (fx + 2).toFixed(2) + " " + (fy - 1 - fs * 0.88 - k * fs * 1.1).toFixed(2) + " Tm (" + pe(l) + ") Tj "; });
    return o + "ET\n";
  }
  function checkOps(fx, fy, fw, fh) {
    var P = function (a, b) { return (fx + fw * a).toFixed(2) + " " + (fy - fh * b).toFixed(2); };
    return "q 0.04 0.24 0.57 RG " + (fh * 0.16).toFixed(2) + " w 1 J 1 j " + P(0.18, 0.52) + " m " + P(0.42, 0.8) + " l " + P(0.84, 0.2) + " l S Q\n";
  }
  function fval(f, j, ans, siswa) { var k = f[4]; return k && BIND[k] ? (siswa[k] || "") : (ans[j] || ""); }
  function buildPage(sh, ans, siswa) {
    var im = window.SHEET_IMG && window.SHEET_IMG[sh.key], hasF = sh.fields && sh.fields.length;
    var band = hasF ? (sh.band ? 36 : 0) : 140;
    return {
      jpg: im ? atob(im.d.split(",")[1]) : null, w: im ? im.w : 1024, h: im ? im.h : 1536, band: band,
      draw: function (PW, ph) {
        var H = ph + band, o = "";
        if (band) o += "BT /F2 12 Tf 0 g 1 0 0 1 24 " + (H - 16) + " Tm (" + pe("Lembar Kerja - " + sh.t) + ") Tj /F1 10 Tf 1 0 0 1 24 " + (H - 30) + " Tm (" + pe("Nama: " + (siswa.nm || "..................") + "     Kelas: " + (siswa.kl || "........")) + ") Tj ET\n";
        if (hasF) sh.fields.forEach(function (f, j) {
          var v = fval(f, j, ans, siswa); if (!v) return;
          var fx = f[0] / 100 * PW, fy = ph - f[1] / 100 * ph, fw = f[2] / 100 * PW, fh = f[3] / 100 * ph;
          o += f[4] === "chk" ? checkOps(fx, fy, fw, fh) : fieldOps(v, fx, fy, fw, fh, PW * 0.019);
        });
        else if (ans[0]) o += fieldOps(ans[0], 24, H - 40, PW - 48, 96, 11);
        return o;
      }
    };
  }
  function makePdf(pages) {
    var PW = 595, objs = {}, n = 4, kids = [];
    objs[3] = "<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>";
    objs[4] = "<</Type/Font/Subtype/Type1/BaseFont/Helvetica-Bold/Encoding/WinAnsiEncoding>>";
    pages.forEach(function (p) {
      var ph = PW * p.h / p.w, H = ph + p.band, pid = ++n, cid = ++n, iid = p.jpg ? ++n : 0;
      kids.push(pid + " 0 R");
      objs[pid] = "<</Type/Page/Parent 2 0 R/MediaBox [0 0 " + PW + " " + H.toFixed(2) + "]/Resources<</Font<</F1 3 0 R/F2 4 0 R>>" + (iid ? "/XObject<</Im0 " + iid + " 0 R>>" : "") + ">>/Contents " + cid + " 0 R>>";
      var cs = (iid ? "q " + PW + " 0 0 " + ph.toFixed(2) + " 0 0 cm /Im0 Do Q\n" : "") + p.draw(PW, ph);
      objs[cid] = "<</Length " + cs.length + ">>\nstream\n" + cs + "endstream";
      if (iid) objs[iid] = "<</Type/XObject/Subtype/Image/Width " + p.w + "/Height " + p.h + "/ColorSpace/DeviceRGB/BitsPerComponent 8/Filter/DCTDecode/Length " + p.jpg.length + ">>\nstream\n" + p.jpg + "\nendstream";
    });
    objs[1] = "<</Type/Catalog/Pages 2 0 R>>";
    objs[2] = "<</Type/Pages/Kids [" + kids.join(" ") + "]/Count " + pages.length + ">>";
    var out = "%PDF-1.4\n", off = [], i;
    for (i = 1; i <= n; i++) { off[i] = out.length; out += i + " 0 obj\n" + objs[i] + "\nendobj\n"; }
    var xr = out.length; out += "xref\n0 " + (n + 1) + "\n0000000000 65535 f \n";
    for (i = 1; i <= n; i++) out += ("0000000000" + off[i]).slice(-10) + " 00000 n \n";
    return out + "trailer\n<</Size " + (n + 1) + "/Root 1 0 R>>\nstartxref\n" + xr + "\n%%EOF";
  }
  // Android: implementasikan @JavascriptInterface savePdf(String base64, String fileName). Browser: unduh biasa.
  function saveFile(bin, name) {
    var b64 = btoa(bin);
    if (window.AndroidInterface && typeof window.AndroidInterface.savePdf === "function") { window.AndroidInterface.savePdf(b64, name); return; }
    var u8 = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    var url = URL.createObjectURL(new Blob([u8], { type: "application/pdf" })), a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }
  function exportPdf() {
    var b = S.bab, ans = (S.store.sheet || {})[b.id] || {}, siswa = S.store.siswa || {}, msg = $("#pdfmsg");
    try {
      var pages = b.action.sheets.map(function (sh, i) { return buildPage(sh, ans[i] || {}, siswa); });
      var name = "Lembar_Kerja_" + b.id + "_" + (siswa.nm || "siswa").replace(/[^A-Za-z0-9]+/g, "_") + ".pdf";
      saveFile(makePdf(pages), name); msg.textContent = "✅ PDF dibuat: " + name;
    } catch (e) { msg.textContent = "Gagal membuat PDF: " + e.message; }
  }
  function fitFields() {
    document.querySelectorAll(".sheet").forEach(function (sh) { var fs = Math.max(9, sh.clientWidth * 0.017); sh.querySelectorAll(".fld").forEach(function (t) { t.style.fontSize = fs + "px"; }); });
  }
  window.addEventListener("resize", fitFields);

  /* ===== EVENTS ===== */
  function bind() {
    var A = $("#app");
    A.querySelectorAll("[data-go]").forEach(function (el) { el.onclick = function () { S.step = +el.dataset.go; renderBab(); }; });
    A.querySelectorAll("[data-opt]").forEach(function (el) {
      el.onclick = function () {
        var it = S.bab.quiz[S.q.i]; S.q.picked = +el.dataset.opt;
        if (S.q.picked === it.a) S.q.score++;
        renderBab();
      };
    });
    A.querySelectorAll("[data-next]").forEach(function (el) { el.onclick = function () { S.q.i++; S.q.picked = null; renderBab(); }; });
    A.querySelectorAll("[data-retry]").forEach(function (el) { el.onclick = function () { S.q = null; renderBab(); }; });
    A.querySelectorAll("[data-finish]").forEach(function (el) {
      el.onclick = function () {
        var pct = Math.round(S.q.score / S.bab.quiz.length * 100);
        S.store.score[S.bab.id] = Math.max(pct, S.store.score[S.bab.id] || 0); save();
        maybeInterstitial(function () { S.step = 3; renderBab(); });
      };
    });
    function ans(el) { var st = S.store; st.sheet = st.sheet || {}; var s1 = st.sheet[S.bab.id] = st.sheet[S.bab.id] || {}; return (s1[el.dataset.sh] = s1[el.dataset.sh] || {}); }
    A.querySelectorAll("textarea.fld,.free").forEach(function (el) {
      el.oninput = function () {
        if (el.dataset.k) { S.store.siswa = S.store.siswa || {}; S.store.siswa[el.dataset.k] = el.value; }
        else ans(el)[el.dataset.f] = el.value;
        save();
      };
    });
    A.querySelectorAll(".chk").forEach(function (el) {
      el.onclick = function () { var o = ans(el); o[el.dataset.f] = o[el.dataset.f] ? "" : "1"; el.classList.toggle("on", !!o[el.dataset.f]); el.textContent = o[el.dataset.f] ? "✓" : ""; save(); };
    });
    A.querySelectorAll(".zbtn").forEach(function (el) {
      el.onclick = function () { var sh = el.closest(".card").querySelector(".sheet"); sh.classList.toggle("zoom"); el.textContent = sh.classList.contains("zoom") ? "🔍 Normal" : "🔍 Perbesar"; fitFields(); };
    });
    A.querySelectorAll("[data-pdf]").forEach(function (el) { el.onclick = exportPdf; });
    fitFields();
    A.querySelectorAll("[data-save]").forEach(function (el) { el.onclick = function () { S.store.note[S.bab.id] = $("#note").value; save(); el.textContent = "Tersimpan ✓"; }; });
    A.querySelectorAll("[data-done]").forEach(function (el) {
      el.onclick = function () { S.store.note[S.bab.id] = $("#note").value; save(); maybeInterstitial(home); };
    });
  }

  function openOverlay(src) {
    var ov = document.createElement("div"); ov.className = "ov"; ov.innerHTML = '<img src="' + src + '" alt="">';
    ov.onclick = function () { ov.remove(); }; document.body.appendChild(ov);
  }
  document.addEventListener("click", function (e) {
    var t = e.target, hb = t.closest ? t.closest("[data-hs]") : null;
    if (hb) {
      var box = hb.closest(".hs"), i = hb.dataset.hs, was = box.querySelector('.hsa[data-hs="' + i + '"]').classList.contains("on");
      box.querySelectorAll("[data-hs]").forEach(function (el) { el.classList.remove("on"); });
      box.querySelectorAll(".hsd").forEach(function (el) { el.hidden = true; });
      box.classList.toggle("sel", !was);
      if (!was) {
        box.querySelectorAll('[data-hs="' + i + '"]').forEach(function (el) { el.classList.add("on"); });
        var d = box.querySelector('[data-hsd="' + i + '"]'); d.hidden = false;
        if (d.scrollIntoView) d.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
      return;
    }
    if (t.dataset && t.dataset.zoom) openOverlay(t.dataset.zoom);
    else if (t.tagName === "IMG" && t.classList.contains("zm")) openOverlay(t.getAttribute("src"));
  });
  $("#back").onclick = function () { home(); };
  document.querySelectorAll("#nav button").forEach(function (el) {
    el.onclick = function () { if (el.dataset.nav === "about") about(); else home(); };
  });
  $("#theme").onclick = function () {
    var dark = document.documentElement.getAttribute("data-theme") === "dark" || (!S.store.theme && matchMedia("(prefers-color-scheme:dark)").matches);
    S.store.theme = dark ? "light" : "dark"; applyTheme(); save();
  };
  // Tombol back fisik: native memanggil window.handleBack(); true = sudah ditangani
  window.handleBack = function () { if (S.bab || S.view === "about") { home(); return true; } return false; };

  applyTheme(); home();
})();
