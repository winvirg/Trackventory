import React, {useState} from 'react';
import styles from '../../page.module.css';
import Image from 'next/image';
import ProdutoAdicionado from './produto_adicionado';

interface CadastrarProdutoProps {
    closeModalProduto: () => void;
}

export default function CadastrarProduto({ closeModalProduto }: CadastrarProdutoProps) {

    const [showModalProdutoAdd, setShowModalProdutoAdd] = useState(false);

    const openModalProdutoAdd = () => setShowModalProdutoAdd(true);
    const closeModalProdutoAdd = () => setShowModalProdutoAdd(false);

       // Função para lidar com o envio do formulário
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de validação ou envio dos dados
        openModalProdutoAdd(); // Abre o modal ao submeter o formulário
    };

    return (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-cadastrar-titulo">
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2 id="modal-cadastrar-titulo">Cadastrar Produto</h2>
                    <button
                        className={styles.closeButton}
                        onClick={closeModalProduto}
                        aria-label="Fechar modal de cadastro"
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
                        <button
                            type="submit"
                            className={styles.submit_modal}
                            aria-label="Adicionar produto"
                        >
                            <Image
                                className={styles.icone}
                                src={"/images/icone_plus.png"}
                                alt={"Adicionar produto"}
                                width={50}
                                height={50}
                                priority
                            />
                            Adicionar Produto
                        </button>
                    </form>
                </div>
            </div>
            {showModalProdutoAdd && <ProdutoAdicionado closeModalProdutoAdd={closeModalProdutoAdd} />}
        </div>
    );
}
