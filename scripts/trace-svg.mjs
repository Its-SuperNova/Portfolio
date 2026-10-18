import fs from "fs";
import { PNG } from "pngjs";
import ImageTracer from "imagetracerjs";

const src =
  "C:/Users/sachi/OneDrive/Desktop/50/portfolio/Portfolio/public/images/logos/ashwin-script.png";
const out =
  "C:/Users/sachi/OneDrive/Desktop/50/portfolio/Portfolio/public/images/logos/ashwin-script.svg";

const png = PNG.sync.read(fs.readFileSync(src));
const imageData = {
  width: png.width,
  height: png.height,
  data: png.data,
};

const svg = ImageTracer.imagedataToSVG(imageData, {
  ltres: 0.8,
  qtres: 0.8,
  pathomit: 12,
  colorsampling: 0,
  numberofcolors: 2,
  mincolorratio: 0,
  colorquantcycles: 1,
  strokewidth: 0,
  linefilter: true,
  scale: 1,
  roundcoords: 1,
  viewbox: true,
  desc: false,
});

fs.writeFileSync(out, svg);
console.log("bytes", svg.length);
console.log(svg.slice(0, 400));
