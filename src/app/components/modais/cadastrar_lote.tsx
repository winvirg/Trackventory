import React from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

interface CadastrarLoteProps {
    closeModalLote: () => void;
}

export default function CadastrarLote({ closeModalLote }: CadastrarLoteProps) {

    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2>Cadastrar Lote</h2>
                    <button className={styles.closeButton} onClick={closeModalLote}>
                        <Image src={"/images/closed.png"} alt={'close'} height={30} width={30} />
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <form>
                        <input type="text" placeholder="Nome do Produto" />
                        <input type="text" placeholder="EAN / Código de barras" />
                        <input type="text" placeholder="Número do Lote" />
                        <input type="text" placeholder="Validade" />
                        <input type="text" placeholder="Quantidade" />
                        <input type="text" placeholder="Preço de Custo (Unidade)" />
                        <input type="text" placeholder="Preço de Venda (Unidade)" />
                        <button type="button" className={`${styles.submit_modal} ${styles.submit_modal_lote}`}>
                            <Image className={styles.icone} src={"/images/icone_plus.png"} alt={"add"} width={50} height={50} priority />
                            Adicionar Lote
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
}
