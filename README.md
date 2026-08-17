# Perks Chat View

Nome do Sistema: Perks Cannabis

Atue como um Desenvolvedor Front-end Sênior e UI/UX Designer. Sua missão é construir a interface de um sistema web projetado para a visualização e acompanhamento de conversas entre um Agente de IA e Clientes. 

O sistema deve conter duas telas principais, seguindo RIGOROSAMENTE a paleta de cores e o estilo visual abaixo:

### 1. PALETA DE CORES OBRIGATÓRIA

- Verde Escuro: #183A29

- Roxo: #7536E3

- Branco: #FFFFFF

- Preto: #000000

- Tons de cinza claro podem ser usados estritamente para divisórias, bordas sutis ou fundos de tela de descanso.

### 2. TELA DE LOGIN

- Um design minimalista, limpo e moderno.

- O fundo deve ser predominantemente claro ou utilizar um contraste elegante com o Verde Escuro (#183A29).

- O formulário central deve conter campos para E-mail e Senha.

- O botão principal de "Entrar" deve ter destaque, utilizando o Roxo (#7536E3) ou o Verde Escuro (#183A29) com o texto em Branco.

- Adicione um espaço para o logotipo da empresa no topo do formulário.

### 3. TELA DE VISUALIZAÇÃO DE CONVERSAS (Estilo WhatsApp Web)

Esta tela deve ser um clone estrutural perfeito do WhatsApp Web, adaptada para a nossa paleta de cores.

#### Estrutura da Página:

- O layout deve ocupar 100% da largura e altura da tela (sem rolagem na página inteira, apenas rolagem interna nas áreas de conteúdo).

- **Barra Lateral Esquerda (Lista de Contatos/Leads):**

  - Cabeçalho no topo com o perfil do usuário logado e um campo de busca/filtro de conversas.

  - Lista de conversas organizadas em blocos (Nome do cliente, última mensagem, horário e um indicador visual de status).

  - Quando um contato for selecionado, ele deve ganhar um fundo de destaque (ex: um tom muito claro do Roxo ou Verde Escuro).

- **Área Principal Direita (Janela de Chat):**

  - **Cabeçalho:** Mostrar o nome do Cliente selecionado e o status (ex: "Atendido por IA").

  - **Área de Mensagens (Scrollable):** O fundo do chat deve ser claro. As mensagens devem aparecer em formato de "balões" (bubbles).

    - **Mensagens do Cliente:** Alinhadas à esquerda, com fundo Branco ou cinza muito claro, texto em Preto.

    - **Mensagens da IA:** Alinhadas à direita, utilizando o Verde Escuro (#183A29) ou o Roxo (#7536E3) com o texto em Branco.

  - **Rodapé:** Como o foco inicial é apenas VISUALIZAÇÃO, crie um rodapé limpo indicando "Modo de visualização. As interações estão sendo gerenciadas pela IA", ou inclua um campo de input desabilitado esteticamente agradável.

### DIRETRIZES FINAIS

- O código deve ser modular, limpo e bem comentado.

- Utilize variáveis CSS para a paleta de cores, facilitando a manutenção futura.

- A interface deve ser agradável e não cansar a vista do operador que passará horas analisando o painel.

- Entregue a estrutura visual completa pronta para ser renderizada no navegador.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9e3d1ba4-aec5-4cae-b311-f2fe13d7c0cc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
