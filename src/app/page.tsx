"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [isCarouselActive, setIsCarouselActive] = useState<boolean>(false); // Novo estado
  const totalSlides = 7; // número total de slides

  // Função para mostrar o slide atual
  const showSlides = (n: number) => {
    if (!isCarouselActive) return; // Se o carrossel não estiver ativo, não faz nada

    const slides = document.getElementsByClassName(styles.sessao);
    const dots = document.getElementsByClassName(styles.dot);

    let index = n;

    if (n > totalSlides) {
      index = totalSlides; // Impede que avance além do último slide
    } else if (n < 1) {
      index = 1; // Permite acessar o primeiro slide
    }

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }

    // Remove a classe "active" de todos os pontos
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(` ${styles.active}`, "");
    }

    // Mostra o slide atual e adiciona a classe "active" ao ponto atual
    if (index - 1 >= 0 && index - 1 < slides.length) {
      (slides[index - 1] as HTMLElement).style.display = "block";
      dots[index - 1].className += ` ${styles.active}`;
      setSlideIndex(index);
    }
  };

  const currentSlide = (n: number) => {
    showSlides(n);
  };

  // Avançar o slide
  const nextSlide = () => {
    if (isCarouselActive && slideIndex < totalSlides) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (isCarouselActive && slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
    }
  };

  // Verifica o tamanho da janela para ativar ou desativar o carrossel
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768 && width <= 1024) {
        setIsCarouselActive(true); // Ativa o carrossel
      } else {
        setIsCarouselActive(false); // Desativa o carrossel
      }
    };

    // Executa a verificação no carregamento da página e ao redimensionar a janela
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Atualiza os slides quando o índice mudar
  useEffect(() => {
    if (isCarouselActive) {
      showSlides(slideIndex);
    }
  }, [slideIndex, isCarouselActive]);

  // Rotação automática dos slides a cada 5 segundos, mas para no último slide
  useEffect(() => {
    if (isCarouselActive && slideIndex < totalSlides) {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) =>
          prevIndex < totalSlides ? prevIndex + 1 : totalSlides
        );
      }, 5000);

      return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    }
  }, [slideIndex, isCarouselActive]);
    const Logo = () => (
        <div className={styles.nav_mobile}>
            <Image src="/images/logo_branca.png" className={styles.imagem_logoM} alt="TrackVentory logo" width={160} height={80} priority />
        </div>
    );

  return (
    <main className={styles.landing_page}>
      <div className={`${styles.sessao} ${styles.main_lp} ${styles.active}`}>
            <header>
                <Logo/>
                <div className={styles.nav_superior}>
                    <Image src="/images/logo_preta.png" className={styles.imagem_logo} alt="TrackVentory logo" width={105} height={50} priority/>
                    <nav>
                        <ul>
                            <li><Link href="#sobre_nos">SOBRE NÓS</Link></li>
                            <li><Link href="#parceiros">PARCEIROS</Link></li>
                            <li><Link href="#contato">CONTATO</Link></li>
                            <li className={styles.btn_login}><Link href="/login" className={styles.link}><span>LOGIN</span><Image src="/images/logar.png" className={styles.icon_login} alt="ícone de logar" width={30} height={30} priority/></Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={styles.bannerContainer}>
                <h1>Otimize a gestão da sua empresa com poucos cliques!</h1>
            </div>
        </div>
        <div className={`${styles.sessao} ${styles.sessaoDestaque}`} id="sobre_nos">
            <h1>Controle de vendas e estoque simplificado acesse onde e quando quiser!</h1>
            <div className={styles.devices}>
                <Image src="/images/devices.png" className={styles.imagem_devices} alt="Dispositivos Móveis" width={600} height={500} priority/>
            </div>
            <div className={styles.devicesM}>
                <Image src="/images/Mockups com Shadow.png" className={styles.imagem_devices} alt="Dispositivos Móveis" width={600} height={450} priority/>
            </div>
        </div>
        <div className={`${styles.sessao} ${styles.containerBeneficios}`}>
            <div className={styles.beneficiosGrid} id="beneficios"> 
                <span>Principais Benefícios</span>
                <h3>Principais</h3> <h1>Benefícios</h1>
                <div className={`${styles.beneficio1} ${styles.beneficio}`}>Beneficio1</div>
                <div className={`${styles.beneficio2} ${styles.beneficio}`}>Beneficio2</div>
                <div className={`${styles.beneficio3} ${styles.beneficio}`}>Beneficio3</div>
                <div className={`${styles.beneficio4} ${styles.beneficio}`}>Beneficio4</div>
            </div>
        </div>
        <div className={`${styles.sessao} ${styles.recursosContainer}`} id="recursos">
            <div className={styles.recursos}>
                <span>Principais Recursos</span>
                <h3>Principais</h3> <h1>Recursos</h1>
                <div className={`${styles.recurso1} ${styles.recurso}`}>Recurso1</div>
                <div className={`${styles.recurso2} ${styles.recurso}`}>Recurso2</div>
                <div className={`${styles.recurso3} ${styles.recurso}`}>Recurso3</div>
                <div className={`${styles.recurso4} ${styles.recurso}`}>Recurso4</div>
            </div>   
        </div>
        <div className={`${styles.sessao} ${styles.captura}`} id="captura"> 
            <span>JUNTE-SE A NÓS E VIVA UMA EXPERIÊNCIA DE TRANSFORMAÇÃO NA GESTÃO COMERCIAL DO SEU NEGÓCIO</span>
            <button>Experimente grátis por 30 dias</button>
        </div>
        <div className={`${styles.sessao} ${styles.parceirosContainer}`} id="parceiros">
            <div className={styles.parceiros}>   
            <span>Parceiros</span>
            <div className={`${styles.parceiro1} ${styles.parceiro}`}>Parceiro1</div>
            <div className={`${styles.parceiro2} ${styles.parceiro}`}>Parceiro2</div>
            <div className={`${styles.parceiro3} ${styles.parceiro}`}>Parceiro3</div>
            <div className={`${styles.parceiro4} ${styles.parceiro}`}>Parceiro4</div>   
            </div>
        </div>
        <div className={`${styles.sessao} ${styles.contato}`} id="contato">  
            <span>Entre em contato</span>
            <div className={`${styles.sessaoContato} ${styles.formulario}`}>
                <p>SOLUTIONSTENO@GMAIL.COM <br/> MORADA NOVA - CE <br/>62940-000</p>
                <form className={styles.campos}>
                    <input type="text" placeholder="Nome Completo" className={styles.campo}/>
                    <input type="email" placeholder="Email" className={styles.campo}/>
                    <input type="text" placeholder="Telefone" className={styles.campo}/>
                    <input type="text" placeholder="Assunto" className={styles.campo}/> 
                    <textarea placeholder="Descrição" className={styles.descricao}></textarea> 
                    <button type="submit">Entre em Contato</button>                    
                </form>
            </div>
        </div>
        
      <div className={styles.carouselIndicators}>
        <span className={`${styles.dot} ${styles.active}`} onClick={() => currentSlide(1)}></span>
        <span className={styles.dot} onClick={() => currentSlide(2)}></span>
        <span className={styles.dot} onClick={() => currentSlide(3)}></span>
        <span className={styles.dot} onClick={() => currentSlide(4)}></span>
        <span className={styles.dot} onClick={() => currentSlide(5)}></span>
        <span className={styles.dot} onClick={() => currentSlide(6)}></span>
        <span className={styles.dot} onClick={() => currentSlide(7)}></span>
      </div>
      {isCarouselActive && (
        <div className={styles.setas}>
          <Image
            src="/images/arrow_left.png"
            className={styles.arrow_left}
            onClick={prevSlide}
            alt="Seta para a Esquerda"
            width={70}
            height={70}
            priority
          />
          <Image
            src="/images/arrow_right.png"
            className={styles.arrow_right}
            onClick={nextSlide}
            alt="Seta para a Direita"
            width={70}
            height={70}
            priority
          />
        </div>
      )}
    </main>
  );
}
