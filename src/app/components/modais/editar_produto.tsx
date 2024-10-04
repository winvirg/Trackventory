import React, { useState } from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

interface EditarProdutoProps {
    closeModalEditar: () => void;
}

export default function EditarProduto({ closeModalEditar }: EditarProdutoProps) {

    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2>Editar Produto</h2>
                    <button className={styles.closeButton} onClick={closeModalEditar}>
                        <Image src={"/images/closed.png"} alt={'close'} height={30} width={30} />
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <form>
                        <input type="text" placeholder="Nome do produto" />
                        <input type="text" placeholder="EAN / Código de barras" />
                        <input type="text" placeholder="Material" />
                        <input type="text" placeholder="Marca" />
                        <input type="text" placeholder="Fornecedor" />
                        <select className={styles.select}>
                            <option value={"categoriaX"}>CategoriaX</option>
                            <option value={"categoriaY"}>CategoriaY</option>
                            <option value={"categoriaZ"}>CategoriaZ</option>
                        </select>
                        <textarea placeholder="Descrição"></textarea>
                        <input type="text" placeholder="Número do Lote" />
                        <input type="text" placeholder="Validade" />
                        <input type="text" placeholder="Quantidade" />
                        <input type="text" placeholder="Preço de Custo (Unidade)" />
                        <input type="text" placeholder="Preço de Venda (Unidade)" />
                        <button type="button" className={styles.submit_modal}>
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
