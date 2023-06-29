const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotevn = require("dotenv").config();

const PORT = process.env.PORT || 4000;

const conn = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

conn();

app.use(cors(), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router xử lý yêu cầu người dùng
const userRouter = express.Router();
// Một API endpoint để lấy thông tin người dùng dựa trên ID
userRouter.get("/:id", (req, res) => {
  const userId = req.params.id;
  // Giả sử rằng chúng ta có một hàm để lấy thông tin người dùng từ cơ sở dữ liệu
  const user = getUserById(userId);

  if (!user) {
    // Nếu không tìm thấy người dùng, gọi middleware notFound
    notFound(req, res);
    return;
  }

  res.json(user);
});

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

// Hàm giả lập để lấy thông tin người dùng từ cơ sở dữ liệu
function getUserById(userId) {
  // Giả sử rằng chúng ta không tìm thấy người dùng với ID được cung cấp
  return userId;
}

app.listen(PORT, () => {
  console.log(`sever is running at PORT http://localhost:${PORT}`);
});
