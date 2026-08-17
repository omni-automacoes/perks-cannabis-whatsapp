/**
 * Dados de exemplo (mock) das conversas entre o Agente de IA e os clientes.
 * Estrutura pronta para ser substituida por dados reais de uma API/banco.
 */

export type MessageAuthor = "cliente" | "ia";

export interface Message {
  id: string;
  author: MessageAuthor;
  text: string;
  time: string;
}

export interface Conversation {
  id: string;
  name: string;
  /** Iniciais exibidas no avatar */
  initials: string;
  lastMessage: string;
  time: string;
  unread: number;
  /** Status do atendimento, exibido no cabecalho do chat e na lista */
  status: "Atendido por IA" | "Aguardando cliente" | "Finalizado";
  messages: Message[];
}

export const currentUser = {
  name: "Operador Perks",
  role: "Monitoramento de atendimentos",
  initials: "OP",
};

export const conversations: Conversation[] = [
  {
    id: "1",
    name: "Mariana Alves",
    initials: "MA",
    lastMessage: "Perfeito, vou separar os documentos hoje mesmo.",
    time: "19:12",
    unread: 0,
    status: "Atendido por IA",
    messages: [
      { id: "m1", author: "cliente", text: "Boa noite! Vi o anúncio de vocês sobre o cannabis medicinal.", time: "18:54" },
      { id: "m2", author: "ia", text: "Boa noite, Mariana! Aqui é a assistente da Perks Cannabis. Posso te explicar como funciona o processo de prescrição e importação. Você já possui laudo médico?", time: "18:55" },
      { id: "m3", author: "cliente", text: "Ainda não, só tenho o relatório do neurologista.", time: "18:58" },
      { id: "m4", author: "ia", text: "Sem problemas. Com o relatório em mãos conseguimos agendar uma consulta com um médico parceiro para emitir a prescrição. A consulta é online e dura cerca de 30 minutos.", time: "18:59" },
      { id: "m5", author: "cliente", text: "Quais documentos eu preciso enviar?", time: "19:05" },
      { id: "m6", author: "ia", text: "Você precisará de: documento de identidade, comprovante de residência e o relatório médico. Pode enviar tudo por aqui mesmo.", time: "19:06" },
      { id: "m7", author: "cliente", text: "Perfeito, vou separar os documentos hoje mesmo.", time: "19:12" },
    ],
  },
  {
    id: "2",
    name: "Rafael Monteiro",
    initials: "RM",
    lastMessage: "Consigo pagar em quantas vezes?",
    time: "18:40",
    unread: 2,
    status: "Aguardando cliente",
    messages: [
      { id: "m1", author: "cliente", text: "Oi, queria saber o valor do óleo full spectrum.", time: "18:20" },
      { id: "m2", author: "ia", text: "Olá, Rafael! O frasco de 30ml sai a partir de R$ 389,00, já com todo o suporte da nossa equipe durante o tratamento.", time: "18:21" },
      { id: "m3", author: "cliente", text: "Consigo pagar em quantas vezes?", time: "18:40" },
    ],
  },
  {
    id: "3",
    name: "Camila Duarte",
    initials: "CD",
    lastMessage: "Obrigada pelo atendimento, ficou tudo claro!",
    time: "17:02",
    unread: 0,
    status: "Finalizado",
    messages: [
      { id: "m1", author: "cliente", text: "Meu pedido já foi liberado na Anvisa?", time: "16:48" },
      { id: "m2", author: "ia", text: "Sim! A autorização foi emitida hoje às 14h. O prazo estimado de entrega é de 7 a 12 dias úteis.", time: "16:50" },
      { id: "m3", author: "cliente", text: "Obrigada pelo atendimento, ficou tudo claro!", time: "17:02" },
    ],
  },
  {
    id: "4",
    name: "Lucas Ferreira",
    initials: "LF",
    lastMessage: "Pode me mandar o link da consulta?",
    time: "15:31",
    unread: 1,
    status: "Atendido por IA",
    messages: [
      { id: "m1", author: "cliente", text: "Bom dia, gostaria de marcar a consulta.", time: "15:20" },
      { id: "m2", author: "ia", text: "Bom dia, Lucas! Tenho horários disponíveis amanhã às 10h e às 16h. Qual prefere?", time: "15:22" },
      { id: "m3", author: "cliente", text: "Pode me mandar o link da consulta?", time: "15:31" },
    ],
  },
  {
    id: "5",
    name: "Beatriz Souza",
    initials: "BS",
    lastMessage: "Vou conversar com meu marido e retorno.",
    time: "13:12",
    unread: 0,
    status: "Aguardando cliente",
    messages: [
      { id: "m1", author: "cliente", text: "O tratamento serve para ansiedade?", time: "12:58" },
      { id: "m2", author: "ia", text: "Sim, existem protocolos indicados para quadros de ansiedade. A definição da dose é sempre feita pelo médico prescritor.", time: "13:00" },
      { id: "m3", author: "cliente", text: "Vou conversar com meu marido e retorno.", time: "13:12" },
    ],
  },
  {
    id: "6",
    name: "Diego Almeida",
    initials: "DA",
    lastMessage: "Recebi o produto, muito obrigado!",
    time: "Ontem",
    unread: 0,
    status: "Finalizado",
    messages: [
      { id: "m1", author: "cliente", text: "Recebi o produto, muito obrigado!", time: "Ontem" },
      { id: "m2", author: "ia", text: "Que ótimo, Diego! Qualquer dúvida sobre a posologia, estou por aqui.", time: "Ontem" },
    ],
  },
];
