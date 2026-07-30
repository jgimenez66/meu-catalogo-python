// Central de Configurações da Sandra Doces Finos
window.DadosSite = {
	nome: "Sandra Doces Finos",
    slogan: "Elegância, sabor e sofisticação em cada detalhe", //Slogan cabecalho
    textomenu: "Menu",
	sloganrodape: "Adoçando seus momentos especiais", //Slogan rodapé
    fone: "Telefone: (19) 99912-3323", 
    whats: "5519999123323",
    whatsappVendas: "5519999123323", // Usado para Sacola de Compras
	insta: "@sandra_docesfinos",
	copyright: "2026 Sandra Doces Finos. Todos os direitos reservados.",
	campobusca: "Buscar produtos...",
    titulomenu: "Categorias",
    menu01: "Todos os Produtos", 
    menu02: "Bombons",
    menu03: "Brigadeiros",
    menu04: "Tortinhas",
    menu05: "Gourmet",
    menu06: "Pão de Mel",
    menu07: "Bolos",

    // Configuração de Cores da tela
    bodyCor: "#d6a36d", // Corpo
    headerCor: "#301900", // Cabeçalho
    footerCor: "#301900", // Rodapé

	// Configuração de Cores das letras
	sloganLetra: "#d6a36d", // Controla a cor do slogan
    textomenuLetra: "#d6a36d", // Controla a cor do texto do menu
	barrinhasLetra: "#d6a36d", // Barrinhas do Menu
	sloganrodapeLetra: "#d6a36d", // Controla a cor do slogan do rodape
	foneLetra: "#d6a36d", // Controla a cor do letra Telefone
	instaLetra: "#d6a36d", // Controla a cor do slogan
	copyrightLetra: "#d6a36d", // Controla a cor do slogan
    
};

// Lógica de distribuição robusta atualizada com suporte às barrinhas
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(window.DadosSite).forEach(chave => {
        
        // 1. REGRA PARA LETRAS E ELEMENTOS VISUAIS
        if (chave.endsWith('Letra')) {
            const idReal = chave.replace('Letra', '');
            
            // Caso especial: se for a cor das barrinhas do menu
            if (idReal === 'barrinhas') {
                // Seleciona todas as 3 linhas span de dentro do botão menuToggle
                const linhasMenu = document.querySelectorAll('#menuToggle span');
                linhasMenu.forEach(linha => {
                    linha.style.setProperty('background-color', window.DadosSite[chave], 'important');
                });
                return;
            }

            // Regra comum para textos normais (slogan, textomenu, etc)
            const elemento = document.getElementById(idReal);
            if (elemento) {
                elemento.style.setProperty('color', window.DadosSite[chave], 'important');
            }
            return; 
        }

        // Para todas as outras propriedades normais por ID
        const elemento = document.getElementById(chave);
        if (!elemento) return; 


        if (chave.endsWith('Cor')) {
            elemento.style.setProperty('background', window.DadosSite[chave], 'important');
        }
        else if (chave === 'campobusca') {
            elemento.placeholder = window.DadosSite[chave];
        } 
        else if (elemento.tagName === 'IMG') {
            elemento.src = window.DadosSite[chave];
        } 
        else {
            elemento.innerText = window.DadosSite[chave];
        }
    });
});
