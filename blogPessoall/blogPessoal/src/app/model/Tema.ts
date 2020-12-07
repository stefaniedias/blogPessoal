import { PostagemModel } from './Postagem'

export class TemaModel {

    public id_tema: number
    public quantidade: number
    public nome: string
    public descricao: string
    public postagem: PostagemModel[]
}