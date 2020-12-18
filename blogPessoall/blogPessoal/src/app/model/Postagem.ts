import { TemaModel } from './Tema'


export class PostagemModel {

   public id: number
   public texto: string
   public ano: number
   public autor: string
   public descricao: string
   public date: Date
   public tema: TemaModel
}