interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number
};

function infosLivro (livro: Livro) : string {
    return 'Informações do livo: Nome: ${nome} | Ano de Publicação: ${anoPublicacao}'
}

const exemploLivro : Livro = {
    titulo: 'Cristianismo Puro e Simples',
    autor: 'CS.Lewis',
    anoPublicacao: 1952
};

console.log(infosLivro(exemploLivro));