import React, {useState} from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';
import CadastrarProduto from './cadastrar_produto';

interface ProdutoAdicionadoProps {
    closeModalProdutoAdd: () => void;
}

export default function ProdutoAdicionado({ closeModalProdutoAdd }: ProdutoAdicionadoProps) {

    const [showModalProduto, setShowModalProduto] = useState(false);

    const closeModalProduto = () => {
        setShowModalProduto(false);
    };

    return (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-produto-adicionado-titulo">
            <div className={styles.modalContainerExcluir}>
                <button
                    className={styles.closeButtonExcluir}
                    onClick={closeModalProdutoAdd}
                    aria-label="Fechar modal de adição de produto"
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
                        <h4 id="modal-produto-adicionado-titulo">Produto adicionado</h4>
                        <button
                            type="submit"
                            className={styles.submit_modal}
                            aria-label="Produto adicionado"
                            onClick={closeModalProduto}
                        >
                            OK
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
