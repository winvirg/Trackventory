import React from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

interface ExcluirProdutoProps {
    closeModalExcluir: () => void;
}

export default function ExcluirProduto({ closeModalExcluir }: ExcluirProdutoProps) {

    return (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-excluir-titulo">
            <div className={styles.modalContainerExcluir}>
                <button
                    className={styles.closeButtonExcluir}
                    onClick={closeModalExcluir}
                    aria-label="Fechar modal de exclusão"
                >
                    <Image
                        src={"/images/closed.png"}
                        alt={'Fechar'}
                        height={30}
                        width={30}
                    />
                </button>
                <div className={styles.modalBody}>
                    <form>
                        <h4 id="modal-excluir-titulo">Tem certeza que deseja excluir esse produto?</h4>
                        <button
                            type="submit"
                            className={styles.submit_modal}
                            aria-label="Excluir produto"
                        >
                            <Image
                                className={styles.icone}
                                src={"/images/icone_trash.png"}
                                alt={"Excluir"}
                                width={70}
                                height={80}
                                priority
                            />
                            Excluir Produto
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
