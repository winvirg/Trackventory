-- CreateTable
CREATE TABLE "categoria" (
    "cod" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("cod")
);

-- CreateTable
CREATE TABLE "item" (
    "id" UUID NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valor_unitario" DECIMAL(10,2) NOT NULL,
    "produto_cod_barras" VARCHAR(255),
    "venda_cod_venda" UUID,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "cod_barras" VARCHAR(255) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "preco_custo" DECIMAL(10,2) NOT NULL,
    "preco_venda" DECIMAL(10,2) NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "data_cadastro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "categoria_cod" UUID,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("cod_barras")
);

-- CreateTable
CREATE TABLE "lote" (
    "id" UUID NOT NULL,
    "validade" TIMESTAMP(6) NOT NULL,
    "localizacao" VARCHAR(255) NOT NULL,
    "produto_cod_barras" VARCHAR(255) NOT NULL,

    CONSTRAINT "lote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "venda" (
    "cod_venda" UUID NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "entrega" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(255),
    "data_venda" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "vendedor_id" UUID,

    CONSTRAINT "venda_pkey" PRIMARY KEY ("cod_venda")
);

-- CreateTable
CREATE TABLE "vendedor" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "vendedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_produto_nome" ON "produto"("nome");

-- CreateIndex
CREATE INDEX "lote_produto_cod_barras_validade_idx" ON "lote"("produto_cod_barras", "validade");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_produto_cod_barras_fkey" FOREIGN KEY ("produto_cod_barras") REFERENCES "produto"("cod_barras") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_venda_cod_venda_fkey" FOREIGN KEY ("venda_cod_venda") REFERENCES "venda"("cod_venda") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_categoria_cod_fkey" FOREIGN KEY ("categoria_cod") REFERENCES "categoria"("cod") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lote" ADD CONSTRAINT "lote_produto_cod_barras_fkey" FOREIGN KEY ("produto_cod_barras") REFERENCES "produto"("cod_barras") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_vendedor_id_fkey" FOREIGN KEY ("vendedor_id") REFERENCES "vendedor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
