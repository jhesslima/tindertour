// --- PASSO 1: DADOS DO QUIZ (ATUALIZADO com tags e galeria) ---
const roteiros = {
    aventura: {
        titulo: "Aventura em Domingos Martins",
        descricao: "Suba a Pedra Azul, faça rafting no Rio Jucu e explore as trilhas da região.",
        videoFundo: "video-aventura",
        tags: ["mountain"], // Tags para os ícones
        imagens: ["aventura1.jpg", "aventura2.jpg", "aventura3.jpg"] // Imagens da galeria
    },
    relax: {
        titulo: "Sol e Mar em Guarapari",
        descricao: "Relaxe nas areias monazíticas, curta o agito da Praia do Morro e o pôr do sol em Meaípe.",
        videoFundo: "video-relax",
        tags: ["relax"],
        imagens: ["relax1.jpg", "relax2.jpg", "relax3.jpg"]
    },
    cultura: {
        titulo: "História: De Vitória a Vila Velha",
        descricao: "Visite o Convento da Penha, o Sítio Histórico da Prainha e o Centro de Vitória.",
        videoFundo: "video-cultura",
        tags: ["culture"],
        imagens: ["cultura1.jpg", "cultura2.jpg", "cultura3.jpg"]
    },
    gastronomia: {
        titulo: "A Rota da Moqueca Capixaba",
        descricao: "Sua missão: provar a autêntica Moqueca nas paneleiras de Goiabeiras e na Ilha das Caieiras.",
        videoFundo: "video-gastronomia",
        tags: ["food"],
        imagens: ["comida1.jpg", "comida2.jpg", "comida3.jpg"]
    },
    festa: {
        titulo: "Forró e Dunas em Itaúnas",
        descricao: "Descubra a vila do forró pé-de-serra. Durante o dia, dunas e praias. À noite, arrasta-pé.",
        videoFundo: "video-festa",
        tags: ["party"],
        imagens: ["festa1.jpg", "festa2.jpg", "festa3.jpeg"]
    },
    romance: {
        titulo: "Fuga Romântica para a Rota do Lagarto",
        descricao: "Desfrute do clima europeu de Pedra Azul, com pousadas charmosas e jantares à luz de velas.",
        videoFundo: "video-romance",
        tags: ["love"],
        imagens: ["romance1.jpg", "romance2.png", "romance3.webp"]
    },
    economico: {
        titulo: "Belezas do Sul: Anchieta e Iriri",
        descricao: "Explore as praias tranquilas e charmosas de Iriri e Castelhanos sem pesar no bolso.",
        videoFundo: "video-economico",
        tags: ["economic"],
        imagens: ["economia1.jpg", "economia2.jpg", "economia3.jpg"]
    },
    luxo: {
        titulo: "Sofisticação em Pedra Azul",
        descricao: "Hospede-se em pousadas e hotéis de alto padrão com vistas espetaculares e alta gastronomia.",
        videoFundo: "video-luxo",
        tags: ["luxury"],
        imagens: ["luxo1.jpeg", "luxo2.jpg", "luxo3.webp"]
    },
    familia: {
        titulo: "Diversão em Família na Costa Capixaba",
        descricao: "Curta as águas calmas da Praia da Costa e visite a fábrica de chocolates da Garoto.",
        videoFundo: "video-familia",
        tags: ["family"],
        imagens: ["familia1.webp", "familia2.png", "familia3.jpg"]
    },
    ecoturismo: {
        titulo: "Ecoturismo em Santa Teresa",
        descricao: "Explore a biodiversidade da Mata Atlântica na terra dos colibris e da imigração italiana.",
        videoFundo: "video-ecoturismo",
        tags: ["nature"],
        imagens: ["ecoturismo1.jpg", "ecoturismo2.jpg", "ecoturismo3.jpg"]
    }
};

const perguntas = [ { pergunta: "Para suas férias ideais no Espírito Santo, você prefere...", imagemFundo: "imagens/imagem-pergunta-1.jpg", opcoes: [ { texto: "Subir uma montanha imponente", valor: "aventura" }, { texto: "Pegar um bronze na praia", valor: "relax" }, { texto: "Visitar um convento com 450 anos de história", valor: "cultura" }, { texto: "Comer a melhor moqueca do mundo", valor: "gastronomia" }, { texto: "Dançar forró até o sol raiar", valor: "festa" } ] }, { pergunta: "Seu local ideal para um café da tarde seria...", imagemFundo: "imagens/imagem-pergunta-2.jpg", opcoes: [ { texto: "Em uma cafeteria charmosa nas montanhas", valor: "romance" }, { texto: "Em um quiosque de frente para o mar", valor: "relax" }, { texto: "Em uma fazenda de agroturismo", valor: "ecoturismo" }, { texto: "Em um hotel de luxo com vista", valor: "luxo" }, { texto: "Comprando um salgado na rua, para economizar", valor: "economico" } ] }, { pergunta: "Qual o seu principal objetivo na viagem?", imagemFundo: "imagens/imagem-pergunta-3.jpg", opcoes: [ { texto: "Aventura e superar meus limites", valor: "aventura" }, { texto: "Descansar e não pensar em nada", valor: "relax" }, { texto: "Aprender sobre a história e cultura local", valor: "cultura" }, { texto: "Curtir com as crianças", valor: "familia" }, { texto: "Conhecer gente nova e aproveitar a noite", valor: "festa" } ] }, { pergunta: "A paisagem capixaba que mais te atrai é...", imagemFundo: "imagens/imagem-pergunta-4.jpeg", opcoes: [ { texto: "O imponente azul da Pedra Azul", valor: "aventura" }, { texto: "As praias douradas de Guarapari", valor: "relax" }, { texto: "As dunas e o pôr do sol de Itaúnas", valor: "festa" }, { texto: "O verde da Mata Atlântica em Santa Teresa", valor: "ecoturismo" }, { texto: "As ladeiras históricas do centro de Vitória", valor: "cultura" } ] }, { pergunta: "Seu orçamento para esta viagem é...", imagemFundo: "imagens/imagem-pergunta-5.jpg", opcoes: [ { texto: "O céu é o limite, quero o melhor!", valor: "luxo" }, { texto: "Controlado, busco o melhor custo-benefício", valor: "economico" }, { texto: "Prefiro gastar com uma boa comida", valor: "gastronomia" }, { texto: "Investimento em experiências únicas", valor: "aventura" }, { texto: "Precisa caber toda a turma!", valor: "familia" } ] }, { pergunta: "Para a hospedagem, você busca...", imagemFundo: "imagens/imagem-pergunta-6.webp", opcoes: [ { texto: "Uma pousada romântica e isolada", valor: "romance" }, { texto: "Um hotel de luxo com spa e piscina", valor: "luxo" }, { texto: "Um hotel confortável para toda a família", valor: "familia" }, { texto: "Uma pousada simples perto do forró", valor: "economico" }, { texto: "Um lugar com foco em contato com a natureza", valor: "ecoturismo" } ] }, { pergunta: "O que não pode faltar na sua mala de viagem para o ES?", imagemFundo: "imagens/imagem-pergunta-7.jpg", opcoes: [ { texto: "Tênis de trilha e um agasalho", valor: "aventura" }, { texto: "Um bom vinho para tomar a dois", valor: "romance" }, { texto: "Câmera para registrar os pontos turísticos", valor: "cultura" }, { texto: "Espaço extra para as compras de panela de barro", valor: "gastronomia" }, { texto: "Cadeira de praia e protetor solar", valor: "relax" } ] } ];

// Envolvemos todo o nosso código em um evento que garante que o HTML foi carregado
document.addEventListener('DOMContentLoaded', () => {

    // Pegando referências para todos os elementos
    const telaCarregamento = document.getElementById('tela-carregamento');
    const conteudoPrincipal = document.getElementById('conteudo-principal');
    const telaResultado = document.getElementById('tela-resultado');
    const perguntaTexto = document.getElementById('pergunta-texto');
    const opcoesContainer = document.getElementById('opcoes-container');
    const progressoTexto = document.getElementById('progresso-texto');
    const roteiroTitulo = document.getElementById('roteiro-titulo');
    const roteiroDescricao = document.getElementById('roteiro-descricao');
    const botaoReiniciar = document.getElementById('botao-reiniciar');
    const fundoContainer = document.getElementById('fundo-container');
    const videoPrincipal = document.getElementById('video-principal');
    const todosVideosResultado = document.querySelectorAll('.video-fundo:not(#video-principal)');
    const quizContainer = document.getElementById('quiz-container');
    const progressBar = document.getElementById('progress-bar');
    const resultadoContainer = document.getElementById('resultado-container');
    const iconesContainer = document.getElementById('icones-container');
    const galeriaContainer = document.getElementById('galeria-container');
    const boasVindasContainer = document.getElementById('boas-vindas-container');

    let perguntaAtualIndex = 0;
    let scores = { aventura: 0, relax: 0, cultura: 0, gastronomia: 0, festa: 0, romance: 0, economico: 0, luxo: 0, familia: 0, ecoturismo: 0 };

    function resetarFundos() {
        if (fundoContainer) fundoContainer.style.backgroundImage = 'none';
        if (videoPrincipal) videoPrincipal.style.display = 'none';
        if (todosVideosResultado) todosVideosResultado.forEach(video => video.style.display = 'none');
    }

    function iniciarQuiz() {
        perguntaAtualIndex = 0;
        for (let tipo in scores) { scores[tipo] = 0; }
        
        resetarFundos();
        if (videoPrincipal) {
            videoPrincipal.style.display = 'block';
            videoPrincipal.play();
        }

        if (conteudoPrincipal) conteudoPrincipal.style.display = 'block';
        if (telaResultado) telaResultado.style.display = 'none';
        mostrarPergunta();
    }

    function mostrarPergunta() {
        resetarFundos();
        let perguntaAtual = perguntas[perguntaAtualIndex];
        
        if (fundoContainer) {
            fundoContainer.style.backgroundImage = `url('${perguntaAtual.imagemFundo}')`;
        }

        if (quizContainer) {
            quizContainer.classList.remove('fade-in-active');
            void quizContainer.offsetWidth;
            quizContainer.classList.add('fade-in-active');
        }

        if (progressBar) {
            const progressoPercentual = ((perguntaAtualIndex) / perguntas.length) * 100;
            progressBar.style.width = `${progressoPercentual}%`;
        }
        
        if (perguntaTexto) perguntaTexto.innerText = perguntaAtual.pergunta;
        if (opcoesContainer) {
            opcoesContainer.innerHTML = '';
            perguntaAtual.opcoes.forEach(opcao => {
                const button = document.createElement('button');
                button.innerText = opcao.texto;
                button.className = 'opcao';
                button.dataset.valor = opcao.valor;
                button.addEventListener('click', selecionarOpcao);
                opcoesContainer.appendChild(button);
            });
        }
        
        if (progressoTexto) progressoTexto.innerText = `Pergunta ${perguntaAtualIndex + 1} de ${perguntas.length}`;
    }

    function selecionarOpcao(event) {
        const valorSelecionado = event.target.dataset.valor;
        if (scores.hasOwnProperty(valorSelecionado)) { scores[valorSelecionado]++; }
        perguntaAtualIndex++;

        if (perguntaAtualIndex < perguntas.length) {
            mostrarPergunta();
        } else {
            if (progressBar) progressBar.style.width = `100%`;
            setTimeout(mostrarResultado, 600);
        }
    }

    function mostrarResultado() {
        document.getElementById('boas-vindas-container').style.display = 'none';
        let tipoVencedor = '';
        let maxScore = -1;
        for (let tipo in scores) { if (scores[tipo] > maxScore) { maxScore = scores[tipo]; tipoVencedor = tipo; } }
        
        const roteiroFinal = roteiros[tipoVencedor];
        if (roteiroTitulo) roteiroTitulo.innerText = roteiroFinal.titulo;
        if (roteiroDescricao) roteiroDescricao.innerText = roteiroFinal.descricao;

        // Limpa e preenche os ícones e a galeria
        if (iconesContainer) {
            iconesContainer.innerHTML = ''; // Limpa ícones antigos
            roteiroFinal.tags.forEach(tag => {
                const iconeDiv = document.createElement('div');
                iconeDiv.className = 'icone-destaque';
                iconeDiv.innerHTML = `<img src="imagens/icones/${tag}.png" alt="${tag}">`;
                iconesContainer.appendChild(iconeDiv);
            });
        }

        if (galeriaContainer) {
            galeriaContainer.innerHTML = ''; // Limpa galeria antiga
            roteiroFinal.imagens.forEach(imgNome => {
                const imgElement = document.createElement('img');
                imgElement.className = 'galeria-img';
                imgElement.src = `imagens/galeria/${imgNome}`;
                galeriaContainer.appendChild(imgElement);
            });
        }

        resetarFundos();
        const videoResultado = document.getElementById(roteiroFinal.videoFundo);
        if(videoResultado) {
            videoResultado.style.display = 'block';
            videoResultado.currentTime = 0;
            videoResultado.play();
        }
        
        if (conteudoPrincipal) conteudoPrincipal.style.display = 'none';
        if (telaResultado) telaResultado.style.display = 'block';

        if (resultadoContainer) {
            resultadoContainer.classList.remove('fade-in-active');
            void resultadoContainer.offsetWidth;
            resultadoContainer.classList.add('fade-in-active');
        }
    }

    if (botaoReiniciar) {
        botaoReiniciar.addEventListener('click', iniciarQuiz);
    }

    // Inicia o processo após o tempo de carregamento
    if (telaCarregamento) {
        setTimeout(() => {
            telaCarregamento.style.display = 'none';
            iniciarQuiz();
        }, 2000);
    }
});