const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "chefcontrol"
}); 

app.post("/create", (req, res) => {
    const Consumidor = req.body.Consumidor;
    const Pago = req.body.Pago;
    const Fecha = req.body.Fecha;
    const Producto = req.body.Producto;
    const Cantidad = req.body.Cantidad;
    const Subtotal = req.body.Subtotal;
    const Total = req.body.vSumTotal;
    const Estado = req.body.Estado;
    const Bodega = req.body.Bodega;
const data = req.body;
console.log(data)
    db.query("INSERT INTO tbl_ventas(Fecha, Id_Cliente, Id_Bodega, Neto, IVA, Forma_Pago) VALUES (?, ?, ?, ?, ?, ?)",
        [Fecha, Consumidor, Bodega, Total, Subtotal, Pago],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al registrar la factura.");
            } else {
                // Obtener el número de factura generado en la primera consulta
                const Nro_Factura = result.insertId;

                // Segunda consulta SQL
                db.query('INSERT INTO tbl_detalleventas(Nro_Factura, Cod_Producto, Cantidad, Precio_Venta, Estado) VALUES (?, ?, ?, ?, ?)',
                    [Nro_Factura, Producto, Cantidad, Total, Estado === "1" ? 1 : 0],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            res.status(500).send("Error al registrar la factura.");
                        } else {
                            res.status(200).send("Factura registrada con éxito!!");
                        }
                    });
            }
        });
});
app.listen (3001,()=>{
    console.log("corriendo en el puerto 3001")
})