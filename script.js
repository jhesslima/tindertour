// --- PASSO 1: DADOS DO QUIZ (ATUALIZADO com tags e galeria) ---
const roteiros = {
    aventura: {
        titulo: "Aventura: desafie seus limites em terras ou mares capixabas!",
        // Dentro da const roteiros, no objeto 'aventura'

    descricao: `Escale montanhas, desça cachoeiras de rapel ou domine ondas incríveis nos destinos que vão acelerar o seu coração.
                
                <h4>Onde posso ir?</h4>
                
                <p>🧗‍♂️ <strong>Alto Caparaó</strong>, numa aventura de trekking pelo <strong>Pico da Bandeira</strong>.</p>
                
                <p>🏞️ <strong>Alfredo Chaves</strong>, é a Capital do Turismo de Aventura, com cachoeiras para <strong>rapel, cascading e canyoning</strong>.</p>
                
                <p>🌊 <strong>Regência, em Linhares</strong>, é o paraíso dos surfistas, com ondas desafiadoras, um vilarejo rústico e uma forte cultura ambiental.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Pousada Vale do Caparaó (Caparaó), Pousada Vila Forte (Alfredo Chaves) e Pousada Bicho do Mar (Linhares).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Armazém do Caparaó (Caparaó), Restaurante do Zezinho (Alfredo Chaves) e Carebão (Linhares).</p>`,
        videoFundo: "video-aventura",
        tags: ["mountain"], // Tags para os ícones
        imagens: ["aventura1.jpg", "aventura2.jpg", "aventura3.jpg"] // Imagens da galeria
    },
    relax: {
        titulo: "Sol & Praia: o seu paraíso capixaba!",
        descricao: `De praias badaladas a refúgios rústicos e tranquilos, o sol do Espírito Santo brilha para todo mundo.
                
                <h4>Onde posso ir?</h4>
                
                <p>🌞 <strong>Guarapari</strong>, o balneário <strong>mais famoso</strong> do Estado, com areias medicinais, praias urbanas e cantinhos badalados.</p>
                
                <p>🏝️ <strong>Guriri, em São Mateus</strong>, é uma ilha com uma enorme faixa de areia e uma excelente infraestrutura de <strong>quiosques e restaurantes</strong>.</p>
                
                <p>🌅 <strong>Conceição da Barra</strong>, um refúgio de praias urbanas no centro da cidade até a <strong>famosa Vila de Itaúnas</strong>, com suas incríveis dunas e um mar forte.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Pousada Orquídea Café (Guarapari), Hotel Cricaré (Guriri) e Pousada Zimbauê (Conceição da Barra).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Gaeta (Guarapari), Mar e Sol (Guriri) e Pizzaria Oca (Conceição da Barra).</p>`,
        videoFundo: "video-relax",
        tags: ["relax"],
        imagens: ["relax1.jpg", "relax2.jpg", "relax3.jpg"]
    },
    cultura: {
        titulo: "Raízes Capixabas: uma viagem pela história e pela cultura",
        descricao: `Descubra as origens do Estado do Espírito Santo, desde à ancestralidade indígena e negra até aos ricos registros e legados da herança europeia.
                
                <h4>Onde posso ir?</h4>
                
                <p>🏛️ <strong>Vitória e Vila Velha</strong>, conhecendo o <strong>Sítio Histórico da Prainha e o Convento da Penha</strong>, na vila que é o berço do Estado, até a diversidade do <strong>centro histórico</strong> da capital.</p>
                
                <p>🖼️ <strong>Santa Maria de Jetibá</strong>, é um convite para conhecer a <strong>cultura pomerana</strong>, a cultura mais alemã do Brasil, com museus, arquitetura típica, grupos de danças característicos e uma forte presença culinária.</p>
                
                <p>📜 <strong>Anchieta</strong>, a cidade que leva o nome do <strong>Apóstolo do Brasil</strong>, carrega consigo uma das igrejas mais antigas do país, o Santuário Nacional de São José de Anchieta.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Hotel Senac Ilha do Boi ou Champagnat Praia Hotel (Vitória ou Vila Velha), Pommer Haus (Santa Maria de Jetibá) e Hotel Espadarte (Anchieta).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Casa de Bamba ou Caranguejo do Assis (Vitória ou Vila Velha), Restaurante Tia Lúcia (Santa Maria de Jetibá) e Restaurante Cantina da Mama (Anchieta).</p>`,
        videoFundo: "video-cultura",
        tags: ["culture"],
        imagens: ["cultura1.jpg", "cultura2.jpg", "cultura3.jpg"]
    },
    gastronomia: {
        titulo: "Sabores do ES: uma experiência inesquecível",
        descricao: `Prove a autêntica moqueca capixaba em nosso litoral ou experimente os queijos, embutidos e vinhos produzidos nas montanhas pelos descendentes de imigrantes.
                
                <h4>Onde posso ir?</h4>
                
                <p>🧑‍🍳 <strong>Venda Nova do Imigrante</strong>, é conhecida como a <strong>Capital Nacional do Agroturismo</strong>, proporcionando uma jornada pela culinária italiana com socol, queijos e cafés especiais.</p>
                
                <p>☕ <strong>Santa Teresa</strong>, é mais um convite pela culinária italiana com cantinas italianas, vinícolas, cervejas artesanais e a deliciosa <strong>culinária dos nonnos</strong> em um ambiente charmoso.</p>
                
                <p>🍲 <strong>Iriri e Ubu</strong>, o melhor lugar no litoral capixaba para provar do que há de melhor acerca dos frutos do mar, em restaurantes tradicionais <strong>à beira da praia</strong>.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Pousada e Cantina Carnielli (Venda Nova do Imigrante), Pousada e Vinícola Caravaggio (Santa Teresa) e Pousada da Mata (Iriri).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Don Lorenzoni (Venda Nova do Imigrante), Restaurante Zattar (Santa Teresa) e Recanto da Pedra (Iriri).</p>`,
        videoFundo: "video-gastronomia",
        tags: ["food"],
        imagens: ["comida1.jpg", "comida2.jpg", "comida3.jpg"]
    },
    festa: {
        titulo: "Uma noite no ES: a festa nunca termina",
        descricao: `Seja ao som do forró pé de serra, nos grandes shows do verão ou nas baladas e casas noturnas, aqui nós garantimos diversão.
                
                <h4>Onde posso ir?</h4>
                
                <p>🌌 <strong>Guarapari</strong>, durante o verão, se transforma no <strong>principal palco de shows do Sudeste</strong>, atraindo as atrações do momento.</p>
                
                <p>🍾 <strong>Itaúnas</strong> é a meca do forró pé de serra, com festas que varam a madrugada em <strong>casas de show rústicas</strong> ao longo do ano, principalmente em Julho.</p>
                
                <p>🎊 <strong>São Mateus</strong>, é o destino perfeito para quem busca se divertir em casas noturnas no norte do Estado, com grandes shows nacionais e um <strong>famoso carnaval</strong>.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Pousada Enseada Verde (Guarapari), Pousada Cambucá (Itaúnas) e Hotel Porto Sol (São Mateus).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Barlavento (Guarapari), Buraco do Tatu (Itaúnas) e La Rustic (São Mateus).</p>`,
        videoFundo: "video-festa",
        tags: ["party"],
        imagens: ["festa1.jpg", "festa2.jpg", "festa3.jpeg"]
    },
    romance: {
        titulo: "O amor está no ar no Espírito Santo",
        descricao: `Das montanhas frias com uma lareira e um bom vinho ao pôr do sol sobre o rio, encontre o seu refúgio capixaba perfeito.
                
                <h4>Onde posso ir?</h4>
                
                <p>❤️ <strong>Domingos Martins</strong> é um destino romântico por si só, com pousadas charmosas, clima europeu, restaurantes sofisticados e a <strong>deslumbrante Pedra Azul</strong>.</p>
                
                <p>💌 <strong>Santa Teresa</strong>, uma cidade charmosa e colorida, te convida a visitar as vinícolas para uma degustação a dois, repousar em pousadas aconchegantes e um ambiente gastronômico especial que <strong>te convida para boas conversas</strong>.</p>
                
                <p>🌹 <strong>Colatina</strong>, para um romance diferente e especial, te permite desfrutar de excelentes jantares com a vista do <strong>pôr do sol mais bonito do Estado</strong>.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Sítio dos Lagos (Domingos Martins), Pousada Sítio Canaã (Santa Teresa) e Plaza Hotel (Colatina).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Restaurante Sombra da Serra (Domingos Martins), Fabrinka (Santa Teresa) e Giga Byte (Colatina).</p>`,
        videoFundo: "video-romance",
        tags: ["love"],
        imagens: ["romance1.jpg", "romance2.png", "romance3.webp"]
    },
    economico: {
        titulo: "O melhor do ES sem pesar no bolso",
        descricao: `Descubra balneários de ambiente familiar, boa estrutura e preços justos, proporcionando diversão e experiências únicas sem gastar muito.
                
                <h4>Onde posso ir?</h4>
                
                <p>🌿 <strong>Piúma</strong>, conhecida como Cidade das Conchas, é um <strong>destino clássico de veraneio</strong>, com aluguéis acessíveis e uma orla cheia de quiosques.</p>
                
                <p>🪷 <strong>Marataízes</strong> possui um balneário com uma extensa faixa de areia, com uma gastronomia rica e uma <strong>excelente relação de custo-benefício</strong>.</p>
                
                <p>🌴 <strong>Aracruz</strong>, muito frequentado pelos próprios moradores, tem um litoral mais tranquilo e com <strong>preços mais em conta</strong> do que os balneários mais badalados.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Hotel Mirante (Piúma), Pousada Miramar (Marataízes) e Pousada dos Corais (Aracruz).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Ancoradouro (Piúma), Restaurante Gaivota's (Marataízes) e Restaurante da Zezé (Aracruz).</p>`,
        videoFundo: "video-economico",
        tags: ["economic"],
        imagens: ["economia1.jpg", "economia2.jpg", "economia3.jpg"]
    },
    luxo: {
        titulo: "Sofisticação e exclusividade no melhor destino",
        descricao: `Hospede-se em excelentes hotéis, desfrute da alta gastronomia e viva experiências únicas nos destinos mais exclusivos do Estado.
                
                <h4>Onde posso ir?</h4>
                
                <p>💎 <strong>Pedra Azul</strong>, em Domingos Martins, é o principal destino de luxo do Espírito Santo, com hotéis-boutique premiados internacionalmente e uma culinária de alta cozinha.</p>
                
                <p>✨ <strong>Vitória</strong>, um dos melhores lugais para se viver do país, te proporciona hotéis de luxo, clubes de iatismo e restaurantes sofisticados com vista para a baía.</p>
                
                <p>⚜️ <strong>Guarapari</strong>, um refúgio litorâneo de alto padrão, com beach clubs exclusivos e acesso às praias mais bonitas e badaladas da região.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Pousada Rabo do Lagarto (Pedra Azul), Golden Tulip Porto Vitória (Vitória) e Pousada Elxadai (Guarapari).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Dom Due (Pedra Azul), Soeta (Vitória) e Muv Gastrobar (Guarapari).</p>`,
        videoFundo: "video-luxo",
        tags: ["luxury"],
        imagens: ["luxo1.jpeg", "luxo2.jpg", "luxo3.webp"]
    },
    familia: {
        titulo: "Diversão em Família é aqui no ES",
        descricao: `De fazendinhas interativas, lagos de pesca, fábrica de chocolate e praias tranquilas, você encontra aqui o roteiro ideal para todas as idades.
                
                <h4>Onde posso ir?</h4>
                
                <p>🪩 <strong>Linhares</strong>, no norte do Estado, é um convite para explorar as dezenas de lagoas, <strong>como a Juparanã</strong>, visitar fazendas de cacau, passar o dia na Praia de Pontal e conhecer o agroturismo local.</p>
                
                <p>🎈 <strong>Venda Nova do Imigrante</strong> é por si só <strong>um parque de diversões focado no agroturismo</strong>, com fazendinhas para ver os animais, lugares para colher frutas, como o morango, e comer delícias direto da fonte.</p>
                
                <p>🪅 <strong>Vila Velha</strong> oferece um <strong>roteiro completo</strong>, com o bem-estar do Convento da Penha, as curiosidades da Fábrica da Garoto e os mares calmos das Praias da Costa e de Itapuã.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Hotel BHS (Linhares), Hotel Esmig (Venda Nova do Imigrante) e Quality Suites Vila Velha (Vila Velha).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Hiléia Restaurante (Linhares), Cervejaria Altezza (Venda Nova do Imigrante) e Ilha do Caranguejo (Vila Velha).</p>`,
        videoFundo: "video-familia",
        tags: ["family"],
        imagens: ["familia1.webp", "familia2.png", "familia3.jpg"]
    },
    ecoturismo: {
        titulo: "Conexão profunda com a biodiversidade capixaba",
        descricao: `Aproveite parques nacionais, reservas biológicas e santuários ecológicos, descobrindo a riqueza da fauna e da flora da Mata Atlântica.
                
                <h4>Onde posso ir?</h4>
                
                <p>🌳 <strong>Linhares</strong> tem um dos <strong>maiores fragmentos protegidos da Mata Atlântica</strong> do Brasil, sendo um lugares especial para a observação de aves e da vida selvagem.</p>
                
                <p>🥾 <strong>Santa Teresa</strong> é conhecida como o <strong>berço da conservação do estado</strong>, possuindo o Museu de Biologia Professor Mello Leitão e sendo a terra dos collibris, com inúmeras trilhas para observação dos milhares de beija-flores.</p>
                
                <p>🌻 <strong>Guarapari</strong> tem um ecossistema único e uma biodiversidade rica, com trilhas que levam à <strong>praias secretas e paradisíacas</strong>, o Parque Estadual Paulo César Vinha com a famosa <strong>Lagoa da Coca-Cola</strong> e sendo considerada a <strong>capital nacional da biodiversidade marinha</strong>.</p>
                
                <h4>As melhores opções de hospedagem:</h4>
                
                <p>Days Inn by Wyndham Linhares (Linhares), Pousada Recanto da Mata (Santa Teresa) e Pousada Doce Vida Guarapari (Guarapari).</p>
                
                <h4>As melhores opções de restaurantes:</h4>
                
                <p>Restaurante Cravo e Canela (Linhares), Toca do Lagarto (Santa Teresa) e Restaurante e Quiosque do Alemão (Guarapari).</p>`,
        videoFundo: "video-ecoturismo",
        tags: ["nature"],
        imagens: ["ecoturismo1.jpg", "ecoturismo2.jpg", "ecoturismo3.jpg"]
    }
};

const perguntas = [ { pergunta: "Qual tipo de turismo você mais se interessa?", imagemFundo: "imagens/imagem-pergunta-1.jpg", opcoes: [ { texto: "Turismo de experiência", valor: "festa" }, { texto: "Turismo histórico e cultural", valor: "cultura" }, { texto: "Ecoturismo e natureza", valor: "ecoturismo" }, { texto: "Turismo gastronômico", valor: "gastronomia" }, { texto: "Turismo de Sol e Praia", valor: "relax" } ] }, { pergunta: "Seu local ideal para um café da tarde seria...", imagemFundo: "imagens/imagem-pergunta-2.jpg", opcoes: [ { texto: "Em uma cafeteria charmosa nas montanhas", valor: "romance" }, { texto: "Em um quiosque de frente para o mar", valor: "relax" }, { texto: "Em uma fazenda de agroturismo", valor: "ecoturismo" }, { texto: "Em um hotel de luxo com vista", valor: "luxo" }, { texto: "Comprando um salgado na rua, para economizar", valor: "economico" } ] }, { pergunta: "Qual o seu principal objetivo na viagem?", imagemFundo: "imagens/imagem-pergunta-3.jpg", opcoes: [ { texto: "Aventura e superar meus limites", valor: "aventura" }, { texto: "Descansar e não pensar em nada", valor: "relax" }, { texto: "Aprender sobre a história e cultura local", valor: "cultura" }, { texto: "Curtir com as crianças", valor: "familia" }, { texto: "Conhecer gente nova e aproveitar a noite", valor: "festa" } ] }, { pergunta: "A paisagem capixaba que mais te atrai é...", imagemFundo: "imagens/imagem-pergunta-4.jpeg", opcoes: [ { texto: "O imponente azul da Pedra Azul", valor: "aventura" }, { texto: "As praias douradas de Guarapari", valor: "relax" }, { texto: "As dunas e o pôr do sol de Itaúnas", valor: "festa" }, { texto: "O verde da Mata Atlântica em Santa Teresa", valor: "ecoturismo" }, { texto: "As ladeiras históricas do centro de Vitória", valor: "cultura" } ] }, { pergunta: "Seu orçamento para esta viagem é...", imagemFundo: "imagens/imagem-pergunta-5.jpg", opcoes: [ { texto: "O céu é o limite, quero o melhor!", valor: "luxo" }, { texto: "Controlado, busco o melhor custo-benefício", valor: "economico" }, { texto: "Prefiro gastar com uma boa comida", valor: "gastronomia" }, { texto: "Investimento em experiências únicas", valor: "aventura" }, { texto: "Precisa caber toda a turma!", valor: "familia" } ] }, { pergunta: "Para a hospedagem, você busca...", imagemFundo: "imagens/imagem-pergunta-6.webp", opcoes: [ { texto: "Uma pousada", valor: "romance" }, { texto: "Um hotel de luxo", valor: "luxo" }, { texto: "Um AirBnB", valor: "familia" }, { texto: "Um hotel fazenda", valor: "ecoturismo" }, { texto: "Uma casa ou apartamento de temporada", valor: "economico" } ] }, { pergunta: "O que não pode faltar na sua mala de viagem para o ES?", imagemFundo: "imagens/imagem-pergunta-7.jpg", opcoes: [ { texto: "Tênis de trilha e um agasalho", valor: "aventura" }, { texto: "Um bom vinho para tomar a dois", valor: "romance" }, { texto: "Câmera para registrar os pontos turísticos", valor: "cultura" }, { texto: "ENO para comer bastante", valor: "gastronomia" }, { texto: "Cadeira de praia e protetor solar", valor: "relax" } ] } ];

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
        if (roteiroDescricao) roteiroDescricao.innerHTML = roteiroFinal.descricao;

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