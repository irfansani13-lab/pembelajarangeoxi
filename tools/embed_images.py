# Membuat assets/js/sheet_img.js dari gambar lembar kerja (jalankan ulang bila gambar diganti)
# Pemakaian: python3 tools/embed_images.py
import base64, io, json
from PIL import Image
names = ["pemanfaatan_sda_1", "pemanfaatan_sda_2"]
out = {}
for n in names:
    im = Image.open(f"assets/images/{n}.png").convert("RGB")
    buf = io.BytesIO(); im.save(buf, "JPEG", quality=88, progressive=False)
    out[n] = {"d": "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode(), "w": im.width, "h": im.height}
open("assets/js/sheet_img.js", "w").write("window.SHEET_IMG=" + json.dumps(out) + ";\n")
print({k: (v["w"], v["h"], len(v["d"]) // 1024, "KB") for k, v in out.items()})
