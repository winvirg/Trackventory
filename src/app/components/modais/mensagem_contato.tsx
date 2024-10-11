import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";

interface ExibirMensagem {
    closeModalMensagem: () => void;
}

export default function ModalContato({ closeModalMensagem }: ExibirMensagem) {


    return (
        <main className={styles.modalMensagem}>
            <div className={styles.modalContainerMensagem}>
                <div className={styles.modalHeaderMensagem}>
                    <h2 id="modal-cadastrar-titulo">AGRADECEMOS POR ENTRAR EM CONTATO COM A TRACKVENTORY</h2>
                    <button
                        className={styles.closeBtnMensagem}
                        onClick={closeModalMensagem}
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
                <div className={styles.modalBodyMensagem}>
                    <span>
                    Em breve, retornaremos para fornecer o suporte necessário para você! <br/><br/>
                    Nosso compromisso é garantir que você tenha a melhor experiência com nossa plataforma de gestão de estoque.<br/><br/>
                    Atenciosamente,<br/>Equipe Trackventory<br/>Gestão de Estoques Simplificada
                    </span>
                    <Image
                        src={"/images/foguete.png"}
                        alt={"Imagem de um foguete"}
                        height={190}
                        width={190}
                    />
                </div>
            </div>
        </main>
    );
}