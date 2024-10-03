import React from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

interface CadastrarProdutoProps {
    closeModalProduto: () => void;
}

export default function CadastrarProduto({ closeModalProduto }: CadastrarProdutoProps) {

    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2>Cadastrar Produto</h2>
                    <button className={styles.closeButton} onClick={closeModalProduto}>
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
                        <input type="text" placeholder="Categoria" />
                        <textarea placeholder="Descrição"></textarea>
                        <button type="button" className={styles.submit_modal}>
                            <Image className={styles.icone} src={"/images/icone_plus.png"} alt={"add"} width={50} height={50} priority />
                            Adicionar Produto
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
