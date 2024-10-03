import React from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

interface ExcluirProdutoProps {
    closeModalExcluir: () => void;
}

export default function ExcluirProduto({ closeModalExcluir }: ExcluirProdutoProps) {

    return (
        <div className={styles.modal_excluir}>
            <div className={styles.modalContainer_excluir}>
                <button className={styles.closeButton_excluir} onClick={closeModalExcluir}>
                    <Image src={"/images/closed.png"} alt={'close'} height={30} width={30} />
                </button>
                <div className={`${styles.modalBody} ${styles.modalBody_excluir}}`}>
                    <form>
                        Tem certeza que deseja excluir esse produto?
                        <button type="button" className={styles.submit_modal_excluir}>
                            <Image className={styles.icone_excluir} src={"/images/icone_trash.png"} alt={"add"} width={70} height={80} priority />
                            Excluir Produto
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
}
