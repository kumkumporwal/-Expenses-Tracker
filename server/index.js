import express from "express";
import bodyParser from "body-parser";
import mongoose  from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./model/KPI.js";
import Product from "./model/Product.js";
import Transaction from "./model/Transaction.js";
import { kpis,products,transactions } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes Setup

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);



// Mongoose setup

const PORT = process.env.PORT || 9000;

mongoose
    .connect(process.env.MONGO_URL, {})
    .then(async()=>{
        app.listen(PORT,()=>console.log(`Server Port: ${PORT}`));
        
        /*//add data one time only or as needed

        //drop current database before seeding data so that there are no duplicates

        await mongoose.connection.db.dropDatabase(); 

        Transaction.insertMany(transactions); //input info*/
    })
    .catch((error)=> console.log(`${error} did not connect`));