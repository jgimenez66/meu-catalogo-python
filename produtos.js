// =========================================================================
// 1. CONEXÃO COM O FIREBASE E CARREGAMENTO EM TEMPO REAL
// =========================================================================
//import { initializeApp } from "www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
//import { getFirestore, collection, query, where, getDocs } from "www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";


// COPIE E COLE SUAS CREDENCIAIS REAIS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyABpuATjocu03EjhqNDxw4t_wKWQYUmuuM",
    authDomain: "catalogo-vendas-2007.firebaseapp.com",
    projectId: "catalogo-vendas-2007",
    storageBucket: "catalogo-vendas-2007.firebasestorage.app",
    messagingSenderId: "158396434963",
    appId: "1:158396434963:web:864d13b64641f2f1b20de6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lista global que abastece os filtros e a sacola do site
let produtos = [];

// Variáveis para controlar os filtros ativos simultaneamente
let categoriaAtiva = 'todos';
let buscaAtiva = '';

// Função auxiliar para capturar o ID da loja direto na URL (?loja=nome)
function obterIdLojaDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('loja');
}

// Busca na nuvem apenas os doces cadastrados para a loja atual
async function baixarProdutosDoFirebase() {
    const idLoja = obterIdLojaDaURL();
    const grid = document.getElementById('grid-produtos');

    if (!idLoja) {
        if (grid) {
            grid.innerHTML = `
        <div style="text-align:center; padding: 20px; grid-column: 1/-1; color: #d9534f;">
          <p>⚠️ <strong>Erro de Acesso:</strong> Nenhuma loja foi informada na URL.</p>
          <p>Use o formato: <em>https://github.io</em></p>
        </div>`;
        }
        return;
    }

    try {
        console.log("Conectando ao Firebase para a loja: " + idLoja);
        const q = query(collection(db, "produtos"), where("id_loja", "==", idLoja));
        const querySnapshot = await getDocs(q);

        produtos = []; // Reseta a lista local

        querySnapshot.forEach((doc) => {
            const dadosNuvem = doc.data();

            // Mapeia os dados salvos na nuvem para o formato esperado pelo seu catálogo
            produtos.push({
                id: doc.id,
                nome: dadosNuvem.nome || '',
                preco: dadosNuvem.preco ? dadosNuvem.preco.toString() : '0.00',
                descricao: dadosNuvem.descricao || '',
                categoria: dadosNuvem.categoria || 'todos',
                foto: dadosNuvem.foto || 'placeholder.jpg',
                precoPromocional: dadosNuvem.precoPromocional || '',
                promocaoInicio: dadosNuvem.promocaoInicio || '',
                promocaoFim: dadosNuvem.promocaoFim || '',
                promocaoQuantidade: dadosNuvem.promocaoQuantidade || 0
            });
        });

        // Renderiza os cards na tela
        renderizarProdutos();

    } catch (error) {
        console.error("Erro crítico ao ler o banco online do Firebase:", error);
        if (grid) grid.innerHTML = "<p style='grid-column:1/-1; text-align:center;'>Erro ao carregar catálogo da nuvem.</p>";
    }
}

// Dispara o carregamento assim que o HTML estiver pronto
window.addEventListener("DOMContentLoaded", baixarProdutosDoFirebase);


// =========================================================================
// 2. SUA LÓGICA ORIGINAL DE RENDERIZAÇÃO E FILTROS
// =========================================================================
function renderizarProdutos() {
    const grid = document.getElementById('grid-produtos');
    if (!grid) return;

    grid.innerHTML = '';
    const hoje = new Date().toISOString().split('T')[0];

    const produtosFiltrados = produtos.filter(produto => {
        const matchesCategoria = (categoriaAtiva === 'todos' || produto.categoria.trim() === categoriaAtiva.trim());
        const termoBusca = buscaAtiva.trim().toLowerCase();
        const matchesBusca = produto.nome.toLowerCase().includes(termoBusca) ||
            produto.descricao.toLowerCase().includes(termoBusca);

        return matchesCategoria && matchesBusca;
    });

    if (produtosFiltrados.length === 0) {
        grid.innerHTML = "<p style='grid-column:1/-1; text-align:center;'>Nenhum doce encontrado para esta busca.</p>";
        return;
    }

    produtosFiltrados.forEach((produto) => {
        let precoFinal = produto.preco;
        let emPromocao = false;

        if (produto.precoPromocional && produto.precoPromocional.trim() !== "") {
            if (produto.promocaoInicio && produto.promocaoFim) {
                if (hoje >= produto.promocaoInicio && hoje <= produto.promocaoFim) {
                    emPromocao = true;
                }
            }
            if (produto.promocaoQuantidade && produto.promocaoQuantidade > 0) {
                emPromocao = true;
            }
        }

        if (emPromocao) {
            precoFinal = produto.precoPromocional;
        }

        let blocoPreco = `<p class="price">R$ ${precoFinal}</p>`;
        let seloPromocao = '';

        if (emPromocao) {
            if (produto.promocaoQuantidade && produto.promocaoQuantidade > 0) {
                seloPromocao = `<span class="tag-promo" style="background: #d43f3a;">🔥 RESTAM ${produto.promocaoQuantidade} UNIDADES</span>`;
            } else {
                seloPromocao = `<span class="tag-promo">PROMOÇÃO</span>`;
            }

            blocoPreco = `
                <div class="price" style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: auto !important; margin-bottom: 10px !important;">
                    <span style="text-decoration: line-through; color: #999; font-size: 14px; font-weight: normal; line-height: 1;">R$ ${produto.preco}</span>
                    <span style="color: #d9534f; font-size: 20px; font-weight: bold; line-height: 1;">R$ ${produto.precoPromocional}</span>
                </div>`;
        }

        const card = document.createElement('div');
        card.className = `card ${produto.categoria}`;

        card.innerHTML = `
            <div class="card-foto" style="position: relative; width: 100%; display: block;">
                ${seloPromocao}
                <img src="${produto.foto}" alt="${produto.nome}" style="width: 100%; display: block;">
            </div>
            <div class="info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                ${blocoPreco}
                <button class="btn-categoria" style="width:100%; text-align:center; padding:8px 0; cursor:pointer;" onclick="adicionarASacola('${produto.nome}', '${precoFinal}')">🛒 Adicionar</button>
            </div>`;
        grid.appendChild(card);
    });
}


// =========================================================================
// 3. SEU SISTEMA DE CONTROLE DA SACOLA DE PEDIDOS
// =========================================================================
let sacola = [];

window.adicionarASacola = function (nomeDoce, precoDoce) {
    const precoNum = typeof precoDoce === 'string' ? parseFloat(precoDoce.replace(',', '.')) : precoDoce;
    const itemExistente = sacola.find(item => item.nome === nomeDoce);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        sacola.push({ nome: nomeDoce, preco: precoNum, quantidade: 1 });
    }
    atualizarVisualSacola();
}

window.removerDaSacola = function (nomeDoce) {
    sacola = sacola.filter(item => item.nome !== nomeDoce);
    atualizarVisualSacola();
}

window.digitarQuantidadeSacola = function (index, valorDigitado, estoqueMax) {
    let novaQuantidade = parseInt(valorDigitado, 10);

    if (isNaN(novaQuantidade) || novaQuantidade < 1) {
        novaQuantidade = 1;
    }

    if (novaQuantidade > estoqueMax) {
        alert("Desculpe! No momento temos apenas " + estoqueMax + " unidades deste produto com preço promocional.");
        novaQuantidade = estoqueMax;
    }

    if (sacola[index]) {
        sacola[index].quantidade = novaQuantidade;
        atualizarVisualSacola();
    }
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
        divItem.style.cssText = 'display: flex; align-items: center; justify-content: space-between; background: white; padding: 12px; border-radius: 8px; margin-bottom: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); box-sizing: border-box; width: 100%;';

        divItem.innerHTML = `
            <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 8px;">
                <h4 style="margin: 0; font-size: 14px; color: #6b4b2a; font-weight: bold; line-height: 1.3;">${item.nome}</h4>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <p style="margin: 0; font-size: 13px; font-weight: bold; color: #333;">R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
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
            <button class="btn-remover-item" onclick="removerDaSacola('${item.nome}')" style="background: transparent; color: #d9534f; border: none; font-size: 24px; cursor: pointer; font-weight: bold; padding: 0 5px; margin-left: 10px; display: flex; align-items: center;">×</button>
        `;
        container.appendChild(divItem);
    });

    badgeQtd.innerText = totalItens;
    txtTotal.innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}

// =========================================================================
// 4. ELEMENTOS DE INTERAÇÃO DO USUÁRIO E FILTROS DINÂMICOS
// =========================================================================
window.filtrarProdutos = function (categoria, botao) {
    categoriaAtiva = categoria;
    const campoBusca = document.getElementById('campobusca');
    if (campoBusca) {
        campoBusca.value = '';
    } buscaAtiva = '';

    document.querySelectorAll('.btn-categoria').forEach(btn =>btn.classList.remove('active'));
    if (botao) botao.classList.add('active');
    renderizarProdutos();
}
document.addEventListener("DOMContentLoaded", () => {
    const btnSacola = document.getElementById('btnSacola');
    const fecharSacola = document.getElementById('fecharSacola');
    const sacolaLateral = document.getElementById('sacolaLateral');
    if (btnSacola && sacolaLateral) {
        btnSacola.addEventListener('click', () => sacolaLateral.classList.toggle('active'));
    }
    if (fecharSacola && sacolaLateral) {
        fecharSacola.addEventListener('click', () => sacolaLateral.classList.remove('remove'));
    }
    const campoBusca = document.getElementById('campobusca');
    if (campoBusca) {
        campoBusca.addEventListener('input', (e) => {
            buscaAtiva = e.target.value;
            if (buscaAtiva.trim() !== '') {
                categoriaAtiva = 'todos'; document.querySelectorAll('.btn-categoria').forEach(btn => btn.classList.remove('active'));
                const botaoTodos = document.querySelector(".btn-categoria[onclick*='todos']");
                if (botaoTodos) botaoTodos.classList.add('active');
            } renderizarProdutos();
        });
    }
})