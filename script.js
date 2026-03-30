/* ==========================================================
   1. MENU MOBILE (ABRIR E FECHAR)
   ========================================================== */
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link (melhora a experiência no celular)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
}

/* ==========================================================
   2. CARROSSEL DE IMAGENS (TOPO)
   ========================================================== */
let indexCima = 1;
const slidesCima = document.getElementsByClassName("my-slide");

function mostrarSlidesCima(n) {
    if (slidesCima.length === 0) return; // Segurança caso não existam slides
    
    if (n > slidesCima.length) { indexCima = 1; }    
    if (n < 1) { indexCima = slidesCima.length; }
    
    // Esconde todos
    for (let i = 0; i < slidesCima.length; i++) {
        slidesCima[i].style.display = "none";  
    }
    
    // Mostra o atual
    slidesCima[indexCima - 1].style.display = "block";  
}

function plusSlides(n) {
    mostrarSlidesCima(indexCima += n);
}

// Inicia o carrossel e define o tempo de troca (5 segundos)
if (slidesCima.length > 0) {
    mostrarSlidesCima(indexCima);
    setInterval(() => plusSlides(1), 5000);
}

/* ==========================================================
   3. CARROSSEL DE TEXTOS (SLIDE-TEXTO)
   ========================================================== */
let slideIndexTexto = 0;
const slidesTexto = document.querySelectorAll(".slide-texto");

function mostrarProximoTexto() {
    if (slidesTexto.length === 0) return;

    slidesTexto[slideIndexTexto].classList.remove("active");
    slideIndexTexto = (slideIndexTexto + 1) % slidesTexto.length;
    slidesTexto[slideIndexTexto].classList.add("active");
}

// Inicia a troca de texto a cada 4 segundos
if (slidesTexto.length > 0) {
    slidesTexto[0].classList.add("active"); // Garante que o primeiro comece visível
    setInterval(mostrarProximoTexto, 4000);
}

/* ==========================================================
   4. BOTÃO VOLTAR AO TOPO E SCROLL
   ========================================================== */
const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", function () {
    // 1. Mostrar/Esconder botão de topo
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }

    // 2. Efeito suave no rodapé (opcional, já que o footer costuma ser estático)
    const footer = document.querySelector('.footer-contato');
    if (footer) {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bodyHeight = document.body.offsetHeight;
        
        // Se chegar perto do fim da página, garante opacidade total
        footer.style.opacity = (scrollPosition >= bodyHeight - 100) ? '1' : '0.9';
    }
});

// Ação de clique para subir ao topo
if (botaoTopo) {
    botaoTopo.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}