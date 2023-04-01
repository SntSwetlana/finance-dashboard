import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
//import Product from "./models/Product.js";
//import KPI from "./models/KPI.js";
//import Transaction from "./models/Transaction.js";
//import { kpis, products, transactions } from "./data/data.js";

console.log(1);
dotenv.config();
console.log(2);
const app = express();
console.log(3);
app.use(express.json());
console.log(4);
app.use(helmet());
console.log(5);
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
console.log(6);
app.use(morgan("common"));
console.log(7);
app.use(bodyParser.json());
console.log(8);
app.use(bodyParser.urlencoded({ extended: false}));
console.log(9);
app.use(cors());
console.log(10);

app.use("/kpi", kpiRoutes);
console.log(11);
app.use("/product", productRoutes);
console.log(12);
app.use("/transaction",transactionRoutes);
console.log(13);

console.log(process.env.MONGO_URL);
console.log("port",process.env.PORT);
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    console.log(1);
    app.listen(process.env.PORT, () => console.log(`Server PORT: ${process.env.PORT}`));

    /* !!!Add once*/
//    await mongoose.connection.db.dropDatabase();
//     KPI.insertMany(kpis);
//     Product.insertMany(products);
//     Transaction.insertMany(transactions);
})
.catch((error) => console.log(`${error} did not connect`));
