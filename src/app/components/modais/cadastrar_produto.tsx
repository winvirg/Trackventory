// components/ModalProduto.js
import React from 'react';
import styles from '../../page.module.css';
// import Link from "next/link";

export default function CadastrarProduto() {

    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2>Cadastrar Produto</h2>
                    <button className={styles.closeButton}>×</button>
                </div>
                <div className={styles.modalBody}>
                    <form>
                        <input type="text" placeholder="Nome do produto" />
                        <input type="text" placeholder="EAN / Código de barras" />
                        <input type="text" placeholder="Material" />
                        <input type="text" placeholder="Marca" />
                        <input type="text" placeholder="Fornecedor" />
                        <input type="text" placeholder="Categoria" />
                        <textarea placeholder="Descrição"></textarea>
                        <button type="button" className={styles.submit_modal}>
                            + Adicionar Produto
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

