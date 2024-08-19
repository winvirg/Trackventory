import express from "express";
import bodyParser from "body-parser";
import usuarioRoutes from './routes/usuario'
import vendedorRoutes from './routes/vendedor'
import categoriaRoutes from './routes/categoria'
import produtoRoutes from './routes/produto'
import loteRoutes from './routes/lote'
import itemRoutes from './routes/item'
import vendaRoutes from './routes/venda'

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', usuarioRoutes, vendedorRoutes, categoriaRoutes, produtoRoutes, loteRoutes, itemRoutes, vendaRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});