import React from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

interface VendaRegistradaProps {
    closeModalVendaRegistrada: () => void;
}

export default function VendaRegistrada({ closeModalVendaRegistrada }: VendaRegistradaProps) {

    return (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-venda-registrada-titulo">
            <div className={styles.modalContainerExcluir}>
                <button
                    className={styles.closeButtonExcluir}
                    onClick={closeModalVendaRegistrada}
                    aria-label="Fechar modal de registro de venda"
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
                        <h4 id="modal-venda-registrada-titulo">Venda Registrada</h4>
                        <button
                            type="submit"
                            className={styles.submit_modal}
                            aria-label="Venda registrada"
                            onClick={closeModalVendaRegistrada}
                        >
                            OK
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
