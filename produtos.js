const produtos = [
{
  nome: "Bombom Branco Praline",
  foto: "imagens/Bombom_Branco_Praline.jpg",
  descricao: "Chocolate branco e nozes",
  preco: "5,50",
  categoria: "grupo01",
  // Promoção
  precoPromocional: "4,50",
  promocaoInicio: "2026-07-15", // Ano-Mês-Dia (Começou dia 15)
  promocaoFim: "2026-07-27",    // Ano-Mês-Dia (Vai até dia 25)
  promocaoQuantidade: 2         // 0 significa que não depende de quantidad
},				  
{
  nome: "Barra Maciça ao Leite",
  foto: "imagens/Barra_ao_Leite_Macica.jpg",
  descricao: "Chocolate ao leite",
  preco: "0,00",
  categoria: "grupo01"
},				  
{
  nome: "Beijinho de Coco Tradicional",
  foto: "imagens/Beijinho_Trad.jpg",
  descricao: "Brigadeiro branco e coco",
  preco: "0,00",
  categoria: "grupo02"
},				  
{
  nome: "Brigadeiro de Morango no Copinho",
  foto: "imagens/Brigadeiro_Morango_Copinho.jpg",
  descricao: "Chocolate branco e brigadeiro de morango",
  preco: "6,50",
  categoria: "grupo02"
},
{
  nome: "Tartelete de Pistache",
  foto: "imagens/Tartelete_Pistache.jpg",
  descricao: "Massa assada, brigadeiro de pistache e pistache moída",
  preco: "5,90",
  categoria: "grupo03"
},				  
{
  nome: "Brigadeiro ao Leite",
  foto: "imagens/Brigadeiro_ao_Leite.jpg",
  descricao: "Leite condensado e chocolate ao leite",
  preco: "4,90",
  categoria: "grupo02"
},				  
{
  nome: "Brigadeiro de Ninho e Nutella",
  foto: "imagens/Brigadeiro_Ninho_e_Nutella.jpg",
  descricao: "Leite condensado, leite ninho e avelã",
  preco: "4,90",
  categoria: "grupo02"
},				  
{
  nome: "Tartelete de Limão",
  foto: "imagens/Tartelete_Limao.jpg",
  descricao: "Massa assada, mousse de limão e merengue",
  preco: "4,90",
  categoria: "grupo03"
},				  
{
  nome: "Damasco com Pistache",
  foto: "imagens/Damasco_e_Pistache.jpg",
  descricao: "Brigadeiro de pistache, damasco e pistache moida",
  preco: "6,50",
  categoria: "grupo04"
},				  
{
  nome: "Brigadeiro de Morango",
  foto: "imagens/Brigadeiro_Morango.jpg",
  descricao: "Brigadeiro de morango e chocolate branco",
  preco: "4,90",
  categoria: "grupo02"
},
{
  nome: "Brigadeiro de Amêndoas",
  foto: "imagens/Brigadeiro_Amendoas.jpg",
  descricao: "Brigadeiro branco e amêndoas lâminadas",
  preco: "6,50",
  categoria: "grupo02"
},
{
  nome: "Barra de Ouro",
  foto: "imagens/Barra_Ouro.jpg",
  descricao: "Chocolate ao leite e Nutella",
  preco: "5,90",
  categoria: "grupo01"
},
{
  nome: "Brigadeiro ao Leite no Copinho",
  foto: "imagens/Brigadeiro_ao_leite_copinho.jpg",
  descricao: "Brigadeiro ao leite e chocolate ao leite",
  preco: "6,50",
  categoria: "grupo02"
},
{
  nome: "Brigadeiro de Creme Brulée",
  foto: "imagens/Brigadeiro_Creme_Brulee.jpg",
  descricao: "Creme de baunilha com casquinha de açúcar queimado",
  preco: "4,90",
  categoria: "grupo02"
},
{
  nome: "Trouxinha de Abacaxi e Coco",
  foto: "imagens/Trouxinha_Abacaxi_Coco.jpg",
  descricao: "Massa filo, brigadeiro de coco e recheio de abacaxi",
  preco: "4,90",
  categoria: "grupo04"
},
{
  nome: "Mini Pão de Mel",
  foto: "imagens/Pao_Mel_Mini.jpg",
  descricao: "Chocolate ao leite, massa e doce de leite Obs: Decoração à parte",
  preco: "4,50",
  categoria: "grupo05"
},
{
  nome: "Beijinho de Coco",
  foto: "imagens/Beijinho.jpg",
  descricao: "Brigadeiro com chocolate branco e coco",
  preco: "4,90",
  categoria: "grupo02"
},
{
  nome: "Physalis no Copinho",
  foto: "imagens/Physalis_Copinho.jpg",
  descricao: "Chocolate ao leite, brigadeiro de baunilha e physalis",
  preco: "6,50",
  categoria: "grupo04"
},
{
  nome: "Tartelete de Mirtilo",
  foto: "imagens/Tartelete_Mirtilo.jpg",
  descricao: "Massa assada, ganache de mirtilo e mirtilo",
  preco: "6,50",
  categoria: "grupo03"
},
{
  nome: "Tartelete de Frutas Vermelhas",
  foto: "imagens/Tartelete_Frutas_Vermelhas.jpg",
  descricao: "Massa assada, brigadeiro de baunilha, morango, mirtilo e amora",
  preco: "6,50",
  categoria: "grupo03"
},
{
  nome: "Orbe de Morango",
  foto: "imagens/Orbe_Morango.jpg",
  descricao: "Chocolate branco, ganache e geleia de morango",
  preco: "6,90",
  categoria: "grupo04"
},
{
  nome: "Bombom ao Leite Praline",
  foto: "imagens/Bombom_ao_Leite_Praline.jpg",
  descricao: "Chocolate ao leite e nozes",
  preco: "5,50",
  categoria: "grupo01"
},
{
  nome: "Bombom Requinte",
  foto: "imagens/Bombom_Requinte.jpg",
  descricao: "Chocolate ao leite e brigadeiro de baunilha",
  preco: "6,50",
  categoria: "grupo01"
},
{
  nome: "Camafeu",
  foto: "imagens/Camafeu.jpg",
  descricao: "Brigadeiro de nozes, cobertura de fondant e nozes",
  preco: "4,90",
  categoria: "grupo02"
},
{
  nome: "Pavlova",
  foto: "imagens/Pavlova.jpg",
  descricao: "Massa assada, merengue, physalis e mirtilo",
  preco: "7,50",
  categoria: "grupo04"
}
];

// Variáveis para controlar os filtros ativos simultaneamente
let categoriaAtiva = 'todos';
let buscaAtiva = '';

// Função para renderizar os produtos na tela baseado nos filtros
function renderizarProdutos() {
    const grid = document.getElementById('grid-produtos');
    if (!grid) return;
    
    grid.innerHTML = ''; 
    
    // Pega a data de hoje no formato exato: "2026-07-18"
    const hoje = new Date().toISOString().split('T')[0];
    
    const produtosFiltrados = produtos.filter(produto => {
        const matchesCategoria = (categoriaAtiva === 'todos' || produto.categoria.trim() === categoriaAtiva.trim());
        const termoBusca = buscaAtiva.trim().toLowerCase();
        const matchesBusca = produto.nome.toLowerCase().includes(termoBusca) || 
                             produto.descricao.toLowerCase().includes(termoBusca);
                             
        return matchesCategoria && matchesBusca;
    });
    
    produtosFiltrados.forEach((produto) => {
        let precoFinal = produto.preco;
        let emPromocao = false;
        
        // CHECAGEM INTELIGENTE DA PROMOÇÃO
        if (produto.precoPromocional && produto.precoPromocional.trim() !== "") {
            
            // 1. Validação por Data (se houver datas preenchidas)
            if (produto.promocaoInicio && produto.promocaoFim) {
                if (hoje >= produto.promocaoInicio && hoje <= produto.promocaoFim) {
                    emPromocao = true;
                }
            }
            
            // 2. Validação por Quantidade (se houver quantidade maior que zero)
            if (produto.promocaoQuantidade && produto.promocaoQuantidade > 0) {
                emPromocao = true; 
            }
        }
        
        // Se passou nas regras, o preço final vira o promocional
        if (emPromocao) {
            precoFinal = produto.precoPromocional;
        }
        
        // MONTAGEM DO BLOCO DE PREÇO VISUAL
        let blocoPreco = `<p class="price">R$ ${precoFinal}</p>`;
        let seloPromocao = '';
        
        if (emPromocao) {
            // Se tiver controle de quantidade, o selo avisa o estoque. Caso contrário, mostra apenas 'PROMOÇÃO'
            if (produto.promocaoQuantidade && produto.promocaoQuantidade > 0) {
                seloPromocao = `<span class="tag-promo" style="background: #d43f3a;">🔥 RESTAM ${produto.promocaoQuantidade} UNIDADES</span>`;
            } else {
                seloPromocao = `<span class="tag-promo">PROMOÇÃO</span>`;
            }

            // O bloco de preço agora fica limpo e padronizado, sem textos embaixo para empurrar o botão
            blocoPreco = `
                <div class="price" style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: auto !important; margin-bottom: 10px !important;">
                    <span style="text-decoration: line-through; color: #999; font-size: 14px; font-weight: normal; line-height: 1;">R$ ${produto.preco}</span>
                    <span style="color: #d9534f; font-size: 20px; font-weight: bold; line-height: 1;">R$ ${produto.precoPromocional}</span>
                </div>
            `;
        }

        const card = document.createElement('div');
        card.className = `card ${produto.categoria}`;
        
        // CORRIGIDO: Colocamos o selo e a imagem juntos dentro da div "card-foto"
        card.innerHTML = `
            <div class="card-foto" style="position: relative; width: 100%; display: block;">
                ${seloPromocao}
                <img src="${produto.foto}" alt="${produto.nome}" style="width: 100%; display: block;">
            </div>
            <div class="info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                ${blocoPreco}
                <button class="btn-categoria" style="width:100%; text-align:center; padding:8px 0;" onclick="adicionarASacola('${produto.nome}', '${precoFinal}')">🛒 Adicionar</button>
            </div>
        `;
        grid.appendChild(card);
    });
}


// ==========================================
// NOVO: SISTEMA DE CONTROLE DA SACOLA DE PEDIDOS
// ==========================================
let sacola = [];

function adicionarASacola(nomeDoce, precoDoce) {
    // Converte o preço em texto com vírgula para número decimal real
    const precoNum = parseFloat(precoDoce.replace(',', '.'));
    
    // Verifica se o doce já está na sacola
    const itemExistente = sacola.find(item => item.nome === nomeDoce);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        sacola.push({ nome: nomeDoce, preco: precoNum, quantidade: 1 });
    }
    
    atualizarVisualSacola();
}

function removerDaSacola(nomeDoce) {
    sacola = sacola.filter(item => item.nome !== nomeDoce);
    atualizarVisualSacola();
}

function atualizarVisualSacola() {
    const container = document.getElementById('containerItensSacola');
    const badgeQtd = document.getElementById('quantidadeSacola');
    const txtTotal = document.getElementById('valorTotalSacola');
    
    if (!container || !badgeQtd || !txtTotal) return;
    
    container.innerHTML = '';
    let totalGeral = 0;
    let totalItens = 0;
    
    sacola.forEach((item, index) => {
        totalItens += item.quantidade;
        const subtotal = item.preco * item.quantidade;
        totalGeral += subtotal;
        
        // Busca se o produto original tem limite de estoque promocional
        const prodOriginal = produtos.find(p => p.nome === item.nome);
        const estoqueMax = (prodOriginal && prodOriginal.promocaoQuantidade > 0) ? prodOriginal.promocaoQuantidade : 99999;
        
        const divItem = document.createElement('div');
        divItem.className = 'item-sacola';
        // Ajustado para organizar tudo em uma estrutura de coluna interna bem distribuída
        divItem.style.cssText = 'display: flex; align-items: center; justify-content: space-between; background: white; padding: 12px; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); box-sizing: border-box; width: 100%;';
        
        // RESTRUTURADO: Nome completo no topo, valor e caixinha na linha de baixo
        divItem.innerHTML = `
            <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
                <!-- 1º Andar: Nome com espaço total (nunca mais vai cortar ou sumir) -->
                <h4 style="margin: 0; font-size: 14px; color: #6b4b2a; font-weight: bold; line-height: 1.3;">
                    ${item.nome}
                </h4>
                
                <!-- 2º Andar: Linha inferior alinhando o valor e a caixinha lado a lado -->
                <div style="display: flex; align-items: center; gap: 15px;">
                    <p style="margin: 0; font-size: 13px; font-weight: bold; color: #333;">
                        R$ ${subtotal.toFixed(2).replace('.', ',')}
                    </p>
                    
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <span style="font-size: 11px; color: #777;">Qtd:</span>
                        <input type="number" 
                               value="${item.quantidade}" 
                               min="1" 
                               max="${estoqueMax}"
                               onchange="digitarQuantidadeSacola(${index}, this.value, ${estoqueMax})"
                               onkeypress="if(event.key === 'Enter') this.blur();"
                               style="width: 60px; text-align: center; font-weight: bold; padding: 3px; border: 1px solid #6b4b2a; border-radius: 4px; color: #6b4b2a; background: #FFF; font-size: 13px; box-sizing: border-box;"
                        >
                    </div>
                </div>
            </div>
            
            <!-- Botão de Remover fixado de forma limpa na extremidade direita -->
            <button class="btn-remover-item" onclick="removerDaSacola('${item.nome}')" style="background: transparent; color: #d9534f; border: none; font-size: 24px; cursor: pointer; font-weight: bold; padding: 0 5px; margin-left: 10px; display: flex; align-items: center;">×</button>
        `;
        container.appendChild(divItem);
    });
    
    badgeQtd.innerText = totalItens;
    txtTotal.innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}

// NOVO: Função que processa o número que o cliente digitou na caixinha
function digitarQuantidadeSacola(index, valorDigitado, estoqueMax) {
    let novaQuantidade = parseInt(valorDigitado, 10);
    
    // Se o cliente apagar tudo ou digitar algo inválido/menor que 1, força a ser 1
    if (isNaN(novaQuantidade) || novaQuantidade < 1) {
        novaQuantidade = 1;
    }
    
    // Se o produto for uma promoção com quantidade máxima e o cliente tentar passar dela
    if (novaQuantidade > estoqueMax) {
        alert("Desculpe! No momento temos apenas " + estoqueMax + " unidades deste produto com preço promocional.");
        novaQuantidade = estoqueMax;
    }
    
    // Atualiza a memória e redesenha a sacola somando os novos valores
    if (sacola[index]) {
        sacola[index].quantidade = novaQuantidade;
        atualizarVisualSacola();
    }
}

// Abre e fecha a gaveta da sacola lateral
document.addEventListener("DOMContentLoaded", () => {
    const btnSacola = document.getElementById('btnSacola');
    const fecharSacola = document.getElementById('fecharSacola');
    const sacolaLateral = document.getElementById('sacolaLateral');
    
    if(btnSacola && sacolaLateral) {
        btnSacola.addEventListener('click', () => sacolaLateral.classList.toggle('ativa'));
    }
    if(fecharSacola && sacolaLateral) {
        fecharSacola.addEventListener('click', () => sacolaLateral.classList.remove('ativa'));
    }
});

// Função chamada pelos botões do Menu Lateral
function filtrarProdutos(categoria, botao) {
    categoriaAtiva = categoria;
    
    // Atualiza a classe ativa visual nos botões do menu
    const campoBusca = document.getElementById('campobusca');
    if (campoBusca) {
        campoBusca.value = '';
    }
    buscaAtiva = '';
    
    document.querySelectorAll('.btn-categoria').forEach(btn => btn.classList.remove('active'));
    botao.classList.add('active');
    renderizarProdutos();
}

// Configurações iniciais assim que a página carrega
document.addEventListener("DOMContentLoaded", () => {
    // Renderiza todos os doces logo de início
    renderizarProdutos();
    
    // Configura o campo de busca para filtrar enquanto digita
    const campoBusca = document.getElementById('campobusca');
    if (campoBusca) {
        campoBusca.addEventListener('input', (e) => {
            buscaAtiva = e.target.value;
            if (buscaAtiva.trim() !== '') {
                categoriaAtiva = 'todos';
                document.querySelectorAll('.btn-categoria').forEach(btn => btn.classList.remove('active'));
                const botaoTodos = document.querySelector(".btn-categoria[onclick*='todos']");
                if (botaoTodos) botaoTodos.classList.add('active');
            }

            renderizarProdutos();
        });
    }
});

// =================================================================
// CONEXÃO COM O BANCO DE DADOS EM NUVEM (GITHUB PAGES)
// =================================================================

function carregarProdutosDoBancoNuvem() {
    console.log("Buscando dados no banco de dados na nuvem...");

    // Chamada usando o seu link oficial exato e direto da pasta
    fetch("https://jgimenez66.github.io/meu-catalogo-python/")
        .then(resposta => resposta.json())
        .then(dadosProdutos => {

            produtos = dadosProdutos;
            console.log("Produtos importados com sucesso da nuvem:", produtos);

            // Correção automática para ler a pasta Imagens com o "I" maiúsculo do seu GitHub
            produtos.forEach(doce => {
                if (doce.foto && doce.foto.includes("./imagens/")) {
                    doce.foto = doce.foto.replace("./imagens/", "./Imagens/");
                }
            });

            if (typeof renderizarProdutos === "function") {
                renderizarProdutos();
            }
        })
        .catch(erro => {
            console.error("Erro crítico ao ler o banco de dados online:", erro);
        });
}

window.addEventListener("DOMContentLoaded", carregarProdutosDoBancoNuvem);
