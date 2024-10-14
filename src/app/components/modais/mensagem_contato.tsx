import React from "react";
import Image from "next/image";
import styles from "../../page.module.css";

interface ExibirMensagem {
    closeModalMensagem: () => void;
}

export default function ModalContato({ closeModalMensagem }: ExibirMensagem) {
    return (
        <main
            className={styles.modalMensagem}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-mensagem-de-contato-titulo"
        >
            <div className={styles.modalContainerMensagem}>
                <div className={styles.modalHeaderMensagem}>
                    <h2 id="modal-mensagem-de-contato-titulo">
                        AGRADECEMOS POR ENTRAR EM CONTATO COM A TRACKVENTORY
                    </h2>
                    <button
                        className={styles.closeBtnMensagem}
                        onClick={closeModalMensagem}
                        aria-label="Fechar modal de agradecimento"
                    >
                        <Image
                            src={"/images/closed.png"}
                            alt="Ícone para fechar o modal"
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
                        alt="Ilustração de um foguete"
                        height={190}
                        width={190}
                    />
                </div>
            </div>
        </main>
    );
}
