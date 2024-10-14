import React, {useState} from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';
import CadastrarLote from './cadastrar_lote';

interface LoteAdicionadoProps {
    closeModalLoteAdd: () => void;
}

export default function LoteAdicionado({ closeModalLoteAdd }: LoteAdicionadoProps) {

    const [showModalLote, setShowModalLote] = useState(false);

    const closeModalLote = () => {
        setShowModalLote(false);
    };

    return (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-lote-adicionado-titulo">
            <div className={styles.modalContainerExcluir}>
                <button
                    className={styles.closeButtonExcluir}
                    onClick={closeModalLoteAdd}
                    aria-label="Fechar modal de adição de lote"
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
                        <h4 id="modal-lote-adicionado-titulo">Lote adicionado</h4>
                        <button
                            type="submit"
                            className={styles.submit_modal}
                            aria-label="Lote adicionado"
                            onClick={closeModalLote}
                        >
                            OK
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
