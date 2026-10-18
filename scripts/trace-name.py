"""Trace the cursive ashwin wordmark into one even-odd SVG path."""
from PIL import Image, ImageChops, ImageDraw

SRC = r"C:\Users\sachi\OneDrive\Desktop\50\portfolio\Portfolio\public\images\logos\ashwin-script.png"
OUT_PREVIEW = r"C:\Users\sachi\OneDrive\Desktop\50\portfolio\Portfolio\scripts\signature-preview.png"
OUT_TS = r"C:\Users\sachi\OneDrive\Desktop\50\portfolio\Portfolio\src\components\Landing\signature.ts"

img = Image.open(SRC).convert("RGBA")
w, h = img.size
pixels = img.load()

mask_w, mask_h = w + 2, h + 2
mask = bytearray(mask_w * mask_h)
reds = []
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a > 40 and r > 80 and r > g + 30 and r > b + 30:
            mask[(y + 1) * mask_w + (x + 1)] = 1
            reds.append((r, g, b))

def smooth(src):
    out = bytearray(src)
    for y in range(1, mask_h - 1):
        for x in range(1, mask_w - 1):
            s = 0
            row = (y - 1) * mask_w + (x - 1)
            for dy in range(3):
                base = row + dy * mask_w
                s += src[base] + src[base + 1] + src[base + 2]
            i = y * mask_w + x
            if s >= 5:
                out[i] = 1
            elif s <= 2:
                out[i] = 0
    return out

for _ in range(2):
    mask = smooth(mask)

def on(x, y):
    if x < 0 or y < 0 or x >= mask_w or y >= mask_h:
        return 0
    return mask[y * mask_w + x]

segments = []
for y in range(mask_h - 1):
    for x in range(mask_w - 1):
        a = on(x, y)
        b = on(x + 1, y)
        c = on(x, y + 1)
        d = on(x + 1, y + 1)
        idx = (a << 3) | (b << 2) | (c << 1) | d
        if idx == 0 or idx == 15:
            continue
        T = (x + 0.5, float(y))
        R = (float(x + 1), y + 0.5)
        B = (x + 0.5, float(y + 1))
        L = (float(x), y + 0.5)
        table = {
            1: [(R, B)],
            2: [(B, L)],
            3: [(L, R)],
            4: [(T, R)],
            5: [(T, B)],
            6: [(T, R), (B, L)],
            7: [(T, L)],
            8: [(T, L)],
            9: [(T, L), (R, B)],
            10: [(T, B)],
            11: [(T, R)],
            12: [(L, R)],
            13: [(L, B)],
            14: [(R, B)],
        }
        segments.extend(table[idx])

from collections import defaultdict

neighbors = defaultdict(list)
for start, end in segments:
    neighbors[start].append(end)
    neighbors[end].append(start)

deg = defaultdict(int)
for nbs in neighbors.values():
    deg[len(nbs)] += 1
print("degrees", dict(sorted(deg.items())))

used = set()
loops = []

def edge_key(a, b):
    return (a, b) if a < b else (b, a)

for start in list(neighbors):
    for first in neighbors[start]:
        key = edge_key(start, first)
        if key in used:
            continue
        loop = [start]
        prev = start
        cur = first
        used.add(key)
        guard = 0
        while cur != start and guard < 200000:
            loop.append(cur)
            nbs = neighbors[cur]
            if len(nbs) < 2:
                cur = None
                break
            nxt = nbs[0] if nbs[1] == prev else nbs[1]
            k2 = edge_key(cur, nxt)
            if k2 in used and nxt != start:
                cur = None
                break
            used.add(k2)
            prev, cur = cur, nxt
            guard += 1
        if cur == start and len(loop) > 8:
            loops.append(loop)

def dist_point_line(p, a, b):
    ax, ay = a
    bx, by = b
    px, py = p
    dx, dy = bx - ax, by - ay
    denom = dx * dx + dy * dy
    if denom == 0:
        return ((px - ax) ** 2 + (py - ay) ** 2) ** 0.5
    t = ((px - ax) * dx + (py - ay) * dy) / denom
    t = 0 if t < 0 else 1 if t > 1 else t
    qx, qy = ax + t * dx, ay + t * dy
    return ((px - qx) ** 2 + (py - qy) ** 2) ** 0.5

def rdp(points, epsilon):
    if len(points) < 3:
        return points
    start, end = points[0], points[-1]
    max_d = -1
    index = 0
    for i in range(1, len(points) - 1):
        d = dist_point_line(points[i], start, end)
        if d > max_d:
            max_d = d
            index = i
    if max_d > epsilon:
        left = rdp(points[: index + 1], epsilon)
        right = rdp(points[index:], epsilon)
        return left[:-1] + right
    return [start, end]

def simplify_closed(points, epsilon):
    pivot = min(range(len(points)), key=lambda i: (points[i][0], points[i][1]))
    rotated = points[pivot:] + points[:pivot]
    simplified = rdp(rotated + [rotated[0]], epsilon)
    if len(simplified) > 1 and simplified[0] == simplified[-1]:
        simplified = simplified[:-1]
    cleaned = []
    for p in simplified:
        if not cleaned or abs(cleaned[-1][0] - p[0]) > 0.2 or abs(cleaned[-1][1] - p[1]) > 0.2:
            cleaned.append(p)
    return cleaned

def to_cmds(points):
    n = len(points)
    p = lambda i: points[i % n]
    parts = [f"M{p(0)[0]:.1f} {p(0)[1]:.1f}"]
    for i in range(n):
        p0, p1, p2, p3 = p(i - 1), p(i), p(i + 1), p(i + 2)
        c1x = p1[0] + (p2[0] - p0[0]) / 6
        c1y = p1[1] + (p2[1] - p0[1]) / 6
        c2x = p2[0] - (p3[0] - p1[0]) / 6
        c2y = p2[1] - (p3[1] - p1[1]) / 6
        parts.append(
            f"C{c1x:.1f} {c1y:.1f} {c2x:.1f} {c2y:.1f} {p2[0]:.1f} {p2[1]:.1f}"
        )
    parts.append("Z")
    return "".join(parts)

shapes = []
for loop in loops:
    # unpad
    pts = [(x - 1, y - 1) for x, y in loop]
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    bw, bh = max(xs) - min(xs), max(ys) - min(ys)
    if max(bw, bh) < 7:
        continue
    simple = simplify_closed(pts, 1.35)
    if len(simple) < 4:
        continue
    shapes.append(simple)

shapes.sort(key=lambda pts: min(p[0] for p in pts))
d = "".join(to_cmds(pts) for pts in shapes)

avg = tuple(sum(c[i] for c in reds) // len(reds) for i in range(3))
color = "#{:02x}{:02x}{:02x}".format(*avg)

ts = f'''export const signature = {{
  viewBox: "0 0 {w} {h}",
  color: "{color}",
  d: "{d}",
}};
'''
with open(OUT_TS, "w", encoding="utf-8") as f:
    f.write(ts)

preview = Image.new("RGB", (w, h), (253, 250, 216))
acc = Image.new("L", (w, h), 0)
for pts in shapes:
    layer = Image.new("L", (w, h), 0)
    ImageDraw.Draw(layer).polygon(pts, fill=255)
    acc = ImageChops.logical_xor(acc, layer)
solid = Image.new("RGB", (w, h), (171, 0, 0))
preview.paste(solid, mask=acc)
preview.save(OUT_PREVIEW)
print("ink", sum(mask), "segments", len(segments), "loops", len(loops), "shapes", len(shapes), "color", color)
if loops:
    print("loop lens", sorted((len(l) for l in loops), reverse=True)[:12])
