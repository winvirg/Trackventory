import React from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';

interface EditarProdutoProps {
    closeModalEditar: () => void;
}

export default function EditarProduto({ closeModalEditar }: EditarProdutoProps) {

    return (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-editar-titulo">
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2 id="modal-editar-titulo">Editar Produto</h2>
                    <button
                        className={styles.closeButton}
                        onClick={closeModalEditar}
                        aria-label="Fechar modal de edição"
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
                    <form>
                        <input
                            type="text"
                            placeholder="Nome do produto"
                            aria-label="Nome do produto"
                        />
                        <input
                            type="text"
                            placeholder="EAN / Código de barras"
                            aria-label="EAN ou Código de barras"
                        />
                        <input
                            type="text"
                            placeholder="Material"
                            aria-label="Material"
                        />
                        <input
                            type="text"
                            placeholder="Marca"
                            aria-label="Marca"
                        />
                        <input
                            type="text"
                            placeholder="Fornecedor"
                            aria-label="Fornecedor"
                        />
                        <div className={styles.select}>
                            <select
                                className={styles.box}
                                aria-label="Categoria"
                            >
                                <option value={"categoriaX"}>CategoriaX</option>
                                <option value={"categoriaY"}>CategoriaY</option>
                                <option value={"categoriaZ"}>CategoriaZ</option>
                            </select>
                        </div>
                        <textarea
                            placeholder="Descrição"
                            aria-label="Descrição"
                        ></textarea>
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
                            type="button"
                            className={styles.submit_modal}
                            aria-label="Salvar alterações"
                        >
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
