import React, { useState }  from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

import LoteAdicionado from "@/app/components/modais/lote_adicionado";

interface CadastrarLoteProps {
    closeModalLote: () => void;
}

export default function CadastrarLote({ closeModalLote }: CadastrarLoteProps) {

    const [showModalLoteAdd, setShowModalLoteAdd] = useState(false);

    const openModalLoteAdd = () => setShowModalLoteAdd(true);
    const closeModalLoteAdd = () => setShowModalLoteAdd(false);

       // Função para lidar com o envio do formulário
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de validação ou envio dos dados
        openModalLoteAdd(); // Abre o modal ao submeter o formulário
    };

    return (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-cadastrar-lote-titulo">
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2 id="modal-cadastrar-lote-titulo">Cadastrar Lote</h2>
                    <button
                        className={styles.closeButton}
                        onClick={closeModalLote}
                        aria-label="Fechar modal de cadastro de lote"
                    >
                        <Image
                            src={"/images/closed.png"}
                            alt={'Fechar'}
                            height={30}
                            width={30}
                        />
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <form onSubmit={handleSubmit} method='POST'>
                        <input
                            type="text"
                            placeholder="Nome do Produto"
                            aria-label="Nome do Produto"
                        />
                        <input
                            type="text"
                            placeholder="EAN / Código de barras"
                            aria-label="EAN ou Código de barras"
                        />
                        <input
                            type="text"
                            placeholder="Número do Lote"
                            aria-label="Número do Lote"
                        />
                        <input
                            type="text"
                            placeholder="Validade"
                            aria-label="Validade"
                        />
                        <input
                            type="text"
                            placeholder="Quantidade"
                            aria-label="Quantidade"
                        />
                        <input
                            type="text"
                            placeholder="Preço de Custo (Unidade)"
                            aria-label="Preço de Custo (Unidade)"
                        />
                        <input
                            type="text"
                            placeholder="Preço de Venda (Unidade)"
                            aria-label="Preço de Venda (Unidade)"
                        />
                        <button
                            type="submit"
                            className={`${styles.submit_modal} ${styles.submit_modal_lote}`}
                            aria-label="Adicionar lote"
                        >
                            <Image
                                className={styles.icone}
                                src={"/images/icone_plus.png"}
                                alt={"Adicionar lote"}
                                width={50}
                                height={50}
                                priority
                            />
                            Adicionar Lote
                        </button>
                    </form>
                </div>
            </div>
            {showModalLoteAdd && <LoteAdicionado closeModalLoteAdd={closeModalLoteAdd} />}
        </div>
    );
}
