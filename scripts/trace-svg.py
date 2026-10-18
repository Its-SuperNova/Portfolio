import vtracer

src = r"C:\Users\sachi\OneDrive\Desktop\50\portfolio\Portfolio\public\images\logos\ashwin-script.png"
out = r"C:\Users\sachi\OneDrive\Desktop\50\portfolio\Portfolio\public\images\logos\ashwin-script.svg"
print("start")
vtracer.convert_image_to_svg_py(
    src,
    out,
    colormode="color",
    hierarchical="stacked",
    mode="spline",
    filter_speckle=8,
    color_precision=4,
    layer_difference=32,
    corner_threshold=70,
    length_threshold=4.0,
    max_iterations=8,
    splice_threshold=45,
    path_precision=2,
)
print("done")
