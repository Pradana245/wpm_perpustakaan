//configurasi express
const express = require("express");
let app = express();
let path = require("path");
const port = 8000;

//static file
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/modules", express.static(__dirname + "node_modules/"));

//view Engine
app.set("views", "./views");
app.set("view engine", "ejs");

//Routing
app.get("/", (req, res) => {
  const events = [
    {
      name: "Kawah Ratu",
      penjelasan:
        "Kawah Ratu merupakan bekas letusan Gunung Salak, yang terakhir terjadi pada 1938. Dari letusan gunung ini terbentuk area kawah yang dinamai Kawah Ratu dengan luas sekitar 2 hektar. Sampai saat ini, kawah masih mengeluarkan air dan uap panas serta gas belerang.",
      sc_gambar: "images/ratu1.jpg",
    },
    {
      name: "Kawah Upas",
      penjelasan:
        "Kawah Upas adalah Kawah ini memiliki ukuran yang cukup besar dengan diameter mencapai sekitar 600 meter dan kedalaman mencapai 50 meter. Kawah Upas dikelilingi oleh hutan yang hijau dan memiliki beberapa kolam air jernih yang indah di dalamnya.",
      sc_gambar: "images/upas.jpg",
    },
    {
      name: "Kawah Domas",
      penjelasan:
        "Kawah Domas adalah Kawah ini memiliki sumber air panas yang unik karena berasal dari magma yang ada di dalam bumi dan naik ke permukaan melalui celah-celah di kawah. Namun, Kawah Domas adalah kawah aktif dan memiliki potensi bahaya seperti gas beracun dan letusan.",
      sc_gambar: "images/domas.jpg",
    },
  ];
  res.render("index", {
    events: events,
  });
});

//server
app.listen(port, () => {
  console.log("8000 is magic port");
});
