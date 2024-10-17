"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ExibirMensagem from "@/app/components/modais/mensagem_contato";
import NavSuperior from "@/app/components/nav_superior";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [isCarouselActive, setIsCarouselActive] = useState<boolean>(false); // Novo estado
  const totalSlides = 7; // número total de slides
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [descricao, setDescricao] = useState<string>(""); // Estado para o campo de descrição
  const maxDescricaoLength = 300; // Limite de caracteres para a descrição
  const [showModalMensagem, setShowModalMensagem] = useState(false);

   // Função para abrir o modal de mensagem
   const openModalMensagem = () => setShowModalMensagem(true);
   const closeModalMensagem = () => setShowModalMensagem(false);
 
   // Função para lidar com a mudança de texto na descrição
   const handleDescricaoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
     setDescricao(event.target.value);
   };
 
   // Função para lidar com o envio do formulário
   const handleSubmit = (event: React.FormEvent) => {
     event.preventDefault();
     // Aqui você pode adicionar a lógica de validação ou envio dos dados
     openModalMensagem(); // Abre o modal ao submeter o formulário
   };

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

  // Lógica para detectar arrasto
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || startX === null) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 50) {
      nextSlide(); // Se arrastar para a esquerda, vai para o próximo slide
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide(); // Se arrastar para a direita, vai para o slide anterior
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setStartX(null);
  };

  // Lógica para arrasto no desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || startX === null) return;

    const currentX = e.clientX;
    const diff = startX - currentX;

    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartX(null);
  };

  const Logo = () => (
    <div className={styles.nav_mobile}>
      <Image src="/images/logo_branca.png" className={styles.imagem_logoM} alt="TrackVentory logo" width={160} height={80} priority />
    </div>
  );

  const [currentSection, setCurrentSection] = useState("");

  // Dentro do seu useEffect ou em outra lógica, atualize o estado conforme a seção
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div.sessao");
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          setCurrentSection(section.id); // Define a seção atual pelo ID
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={styles.landing_page} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} role="main">
      <header><NavSuperior/></header>
      <main>
        <div className={`${styles.sessao} ${styles.main_lp} ${styles.active}`}>
          <div className={styles.headerLp}>
            <Logo />
          </div>
          <div className={styles.bannerContainer}>
            <h1>Otimize a gestão da sua empresa com poucos cliques!</h1>
          </div>
        </div>

        <div className={`${styles.sessao} ${styles.sessaoDestaque}`} id="sobre_nos">
          <Logo />
          <h1>Controle de vendas e estoque simplificado acesse onde e quando quiser!</h1>
          <div className={styles.devices} role="img" aria-label="Imagem de dispositivos móveis com sistema TrackVentory">
            <Image src="/images/devices.png" className={styles.imagem_devices} alt="Dispositivos Móveis" width={600} height={500} priority />
          </div>
          <div className={styles.devicesM} role="img" aria-label="Imagem de dispositivos móveis com sistema TrackVentory">
            <Image src="/images/Mockups com Shadow.png" className={styles.imagem_devices} alt="Dispositivos Móveis" width={600} height={400} priority/>
          </div>
        </div>

        <div className={`${styles.sessao} ${styles.containerBeneficios}`}>
          <Logo />
          <div className={styles.beneficiosGrid} id="beneficios" aria-labelledby="beneficios-title">
            <span id="beneficios-title">Principais Benefícios</span>
            <h3 id="beneficios-title1">Principais</h3> <h1 id="beneficios-title2">Benefícios</h1>
            <div className={`${styles.beneficio1} ${styles.beneficio}`} tabIndex={0} role="button" aria-pressed="false">Benefício 1</div>
            <div className={`${styles.beneficio2} ${styles.beneficio}`} tabIndex={0} role="button" aria-pressed="false">Benefício 2</div>
            <div className={`${styles.beneficio3} ${styles.beneficio}`} tabIndex={0} role="button" aria-pressed="false">Benefício 3</div>
            <div className={`${styles.beneficio4} ${styles.beneficio}`} tabIndex={0} role="button" aria-pressed="false">Benefício 4</div>
          </div>
        </div>

        <div className={`${styles.sessao} ${styles.recursosContainer}`} id="recursos">
          <Logo />
          <div className={styles.recursos}>
            <span id="recursos-title">Principais Recursos</span>
            <h3 id="recursos-title1">Principais</h3> <h1 id="recursos-title2">Recursos</h1>
            <div className={`${styles.recurso1} ${styles.recurso}`} tabIndex={0} role="button" aria-pressed="false">Recurso 1</div>
            <div className={`${styles.recurso2} ${styles.recurso}`} tabIndex={0} role="button" aria-pressed="false">Recurso 2</div>
            <div className={`${styles.recurso3} ${styles.recurso}`} tabIndex={0} role="button" aria-pressed="false">Recurso 3</div>
            <div className={`${styles.recurso4} ${styles.recurso}`} tabIndex={0} role="button" aria-pressed="false">Recurso 4</div>
          </div>
        </div>

        <div className={`${styles.sessao} ${styles.captura}`} id="captura" role="region" aria-labelledby="captura-title">
          <Logo />
          <span id="captura-title">JUNTE-SE A NÓS E VIVA UMA EXPERIÊNCIA DE TRANSFORMAÇÃO NA GESTÃO COMERCIAL DO SEU NEGÓCIO</span>
          <button aria-label="Experimente grátis por 30 dias">Experimente grátis por 30 dias</button>
        </div>

        <div className={`${styles.sessao} ${styles.parceirosContainer}`} id="parceiros">
          <Logo />
          <div className={styles.parceiros} aria-labelledby="parceiros-title">
            <span id="parceiros-title">Parceiros</span>
            <div className={`${styles.parceiro1} ${styles.parceiro}`} tabIndex={0} role="button" aria-pressed="false">Parceiro 1</div>
            <div className={`${styles.parceiro2} ${styles.parceiro}`} tabIndex={0} role="button" aria-pressed="false">Parceiro 2</div>
            <div className={`${styles.parceiro3} ${styles.parceiro}`} tabIndex={0} role="button" aria-pressed="false">Parceiro 3</div>
            <div className={`${styles.parceiro4} ${styles.parceiro}`} tabIndex={0} role="button" aria-pressed="false">Parceiro 4</div>
          </div>
        </div>

        <div className={`${styles.sessao} ${styles.contato}`} id="contato" role="region" aria-labelledby="contato-title">
          <Logo />
          <span id="contato-title">Entre em contato</span>
          <div className={`${styles.sessaoContato} ${styles.formulario}`}>
            <p aria-label="Informações de contato: email solutionsteno@gmail.com, Morada Nova, CE, 62940-000">
              SOLUTIONSTENO@GMAIL.COM <br /> MORADA NOVA - CE <br />62940-000
            </p>
            <form className={styles.campos} aria-labelledby="form-contato" onSubmit={handleSubmit}>
              <input type="text" placeholder="Nome Completo" className={styles.campo} maxLength={200} aria-label="Nome Completo" />
              <input type="email" placeholder="Email" className={styles.campo} aria-label="Email" />
              <input type="text" placeholder="Telefone" className={styles.campo} aria-label="Telefone" />
              <input type="text" placeholder="Assunto" className={styles.campo} maxLength={50} aria-label="Assunto" />
              <textarea placeholder="Descrição" className={styles.descricao} maxLength={300} value={descricao} onChange={handleDescricaoChange} aria-label="Descrição"></textarea>
              <p className={styles.caracteres} aria-live="polite">{descricao.length} / {maxDescricaoLength} caracteres</p>
              <button type="submit" aria-label="Enviar Formulário de Contato">Entre em Contato</button>
            </form>
          </div>
        </div>

        <div className={styles.carouselIndicators}>
          <span className={`${styles.dot} ${styles.active}`} onClick={() => currentSlide(1)} role="button" tabIndex={0} aria-label="Ir para o slide 1"></span>
          <span className={styles.dot} onClick={() => currentSlide(2)} role="button" tabIndex={0} aria-label="Ir para o slide 2"></span>
          <span className={styles.dot} onClick={() => currentSlide(3)} role="button" tabIndex={0} aria-label="Ir para o slide 3"></span>
          <span className={styles.dot} onClick={() => currentSlide(4)} role="button" tabIndex={0} aria-label="Ir para o slide 4"></span>
          <span className={styles.dot} onClick={() => currentSlide(5)} role="button" tabIndex={0} aria-label="Ir para o slide 5"></span>
          <span className={styles.dot} onClick={() => currentSlide(6)} role="button" tabIndex={0} aria-label="Ir para o slide 6"></span>
          <span className={styles.dot} onClick={() => currentSlide(7)} role="button" tabIndex={0} aria-label="Ir para o slide 7"></span>
        </div>

      <div className={styles.setas}>
        <Image
          src="/images/arrow_left.png"
          className={`${styles.arrow_left} ${slideIndex === 1 ? styles.hidden : ""}`}
          onClick={prevSlide}
          alt="Aqui está a continuação do código com as setas ajustadas e o comportamento de navegação:"
          width={70}
          height={70}
          priority
          role="button"
          aria-label="Ir para o slide anterior"
        />
        {currentSection === "contato" ? (
          <Link href="/login" aria-label="Ir para página de login">
            <Image
              src="/images/arrow_right.png"
              className={styles.arrow_right}
              alt="Seta para a Direita"
              width={70}
              height={70}
              priority
            />
          </Link>
        ) : (
          <Image
            src="/images/arrow_left.png"
            className={`${styles.arrow_left} ${slideIndex === 1 ? styles.hidden : ""}`}
            onClick={prevSlide}
            alt="Aqui está a continuação do código com as setas ajustadas e o comportamento de navegação:"
            width={70}
            height={70}
            priority
            role="button"
            aria-label="Ir para o slide anterior"
          />
          )}
        </div>
      </main>
      {showModalMensagem && <ExibirMensagem closeModalMensagem={closeModalMensagem} />}

    </div>

  );
}
