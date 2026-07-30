from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI(title="Sistema de Catálogo")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def inicializar_banco():
    conexao = sqlite3.connect("banco.db")
    cursor = conexao.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS produtos (
        id TEXT PRIMARY KEY, nome TEXT NOT NULL, descricao TEXT, 
        foto TEXT, preco TEXT, precoPromocional TEXT, 
        promocaoQuantidade INTEGER DEFAULT 0, categoria TEXT DEFAULT 'todos'
    )
    """)
    cursor.execute("SELECT COUNT(*) FROM produtos")
    if cursor.fetchone()[0] == 0:
        cursor.execute("""
        INSERT INTO produtos (id, nome, descricao, foto, preco, precoPromocional, promocaoQuantidade, categoria)
        VALUES ('doce_01', 'Bombom Branco Praline', 'Chocolate branco artesanal e nozes.', './imagens/Bombom_Branco_Praline.jpg', '5,50', '4,50', 2, 'todos')
        """)
        conexao.commit()
    conexao.close()

inicializar_banco()

@app.get("/api/produtos")
def listar_produtos():
    conexao = sqlite3.connect("banco.db")
    cursor = conexao.cursor()
    cursor.execute("SELECT id, nome, descricao, foto, preco, precoPromocional, promocaoQuantidade, categoria FROM produtos")
    linhas = cursor.fetchall()
    conexao.close()
    # Versão simplificada em uma linha para o Visual Studio não quebrar a indentação:
    return [{"id": l[0], "nome": l[1], "descricao": l[2], "foto": l[3], "preco": l[4], "precoPromocional": l[5], "promocaoQuantidade": l[6], "categoria": l[7]} for l in linhas]
