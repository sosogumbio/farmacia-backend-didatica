export default interface ProdutoDTO {
    idProduto: number,
    descricao: string,
    validade: Date,
    preco: number,
    qtd_estoque: number,
    qtd_min_estoque: number
}