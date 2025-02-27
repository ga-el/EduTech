const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

// Configuración de Multer para almacenar los archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "thumbnail") {
      cb(null, "uploads/thumbnails/"); // Carpeta para imágenes
    } else if (file.fieldname === "video") {
      cb(null, "uploads/videos/"); // Carpeta para videos
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre único
  },
});

const upload = multer({ storage: storage });

// Middleware para manejar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para subir el video
app.post("/upload", upload.fields([{ name: "thumbnail" }, { name: "video" }]), (req, res) => {
  const { title, topic } = req.body;
  const thumbnail = req.files["thumbnail"][0].path; // Ruta de la imagen
  const video = req.files["video"][0].path; // Ruta del video

  // Aquí puedes guardar los datos en la base de datos
  console.log("Título:", title);
  console.log("Tema:", topic);
  console.log("Portada:", thumbnail);
  console.log("Video:", video);

  res.send("¡Video subido correctamente!");
});

// Servidor
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));