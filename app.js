// requiring packages
// dotenv
require(`dotenv`).config();
// express
const express = require(`express`);
// mongoose
const mongoose = require(`mongoose`);
// cors(cross origin resource sharing)
const cors = require(`cors`);

// routes import
const productRoutes = require(`./routes/product`);

// express init
const app = express();

// mongodb connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log(`DB CONNECTED`))
  .catch((err) => console.error(err));

// middlewares
// cors
app.use(cors());
// express(request body)
app.use(express.json());

// routes middleware
app.use(`/api/v1`, productRoutes);

// routes
app.get(`/`, (req, res) =>
  res.status(200).json({
    success: true,
    message: `welcome to book store app...`,
  })
);

// port
const PORT = process.env.PORT || 4000;
// server startup
app.listen(PORT, () =>
  console.log(`server is up & running at http://127.0.0.1:${PORT} ...`)
);
