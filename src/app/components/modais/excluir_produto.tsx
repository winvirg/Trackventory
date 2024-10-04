import React from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

interface ExcluirProdutoProps {
    closeModalExcluir: () => void;
}

export default function ExcluirProduto({ closeModalExcluir }: ExcluirProdutoProps) {

    return (
        <div className={styles.modal}>
            <div className={styles.modalContainerExcluir}>
                <button className={styles.closeButtonExcluir} onClick={closeModalExcluir}>
                    <Image src={"/images/closed.png"} alt={'close'} height={30} width={30} />
                </button>
                <div className={styles.modalBody}>
                    <form>
                        <h4>Tem certeza que deseja excluir esse produto?</h4>
                        <button type="button" className={styles.submit_modal}>
                            <Image className={styles.icone} src={"/images/icone_trash.png"} alt={"add"} width={70} height={80} priority />
                            Excluir Produto
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
}
