import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bot, LogOut, Search, Sparkles } from "lucide-react";

import logo from "@/assets/perks-logo.png";
import { Input } from "@/components/ui/input";
import { conversations, currentUser, type Conversation } from "@/lib/conversations-data";

export const Route = createFileRoute("/conversas")({
  head: () => ({
    meta: [
      { title: "Conversas | Perks Cannabis" },
      {
        name: "description",
        content:
          "Painel de visualização das conversas entre o agente de IA da Perks Cannabis e os clientes.",
      },
      { property: "og:title", content: "Conversas | Perks Cannabis" },
      {
        property: "og:description",
        content: "Monitore em tempo real os atendimentos conduzidos pelo agente de IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConversationsPage,
});

/** Cores do indicador de status por tipo de atendimento. */
const statusStyles: Record<Conversation["status"], string> = {
  "Atendido por IA": "bg-brand-purple-soft text-brand-purple",
  "Aguardando cliente": "bg-amber-100 text-amber-700",
  Finalizado: "bg-brand-green-soft text-brand-green",
};

/** Tela principal: layout de duas colunas em altura total, no estilo WhatsApp Web. */
function ConversationsPage() {
  const [selectedId, setSelectedId] = useState(conversations[0]!.id);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      conversations.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );

  const active = conversations.find((c) => c.id === selectedId)!;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* ---------- Barra lateral: lista de leads ---------- */}
      <aside className="flex w-full max-w-sm flex-col border-r border-border bg-background md:w-[380px]">
        {/* Cabeçalho com perfil do operador */}
        <header className="flex items-center gap-3 bg-brand-green px-4 py-3.5">
          <img src={logo} alt="Perks Cannabis" width={32} height={32} className="h-8 w-8" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">{currentUser.name}</p>
            <p className="truncate text-xs text-white/60">{currentUser.role}</p>
          </div>
          <Link
            to="/"
            aria-label="Sair"
            className="rounded-md p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
          </Link>
        </header>

        {/* Busca de conversas */}
        <div className="border-b border-border px-3 py-3">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar conversa ou lead"
              className="h-10 rounded-full bg-muted pl-9"
            />
          </div>
        </div>

        {/* Lista rolável */}
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              Nenhuma conversa encontrada.
            </p>
          )}

          {filtered.map((conversation) => {
            const isActive = conversation.id === selectedId;
            return (
              <button
                key={conversation.id}
                onClick={() => setSelectedId(conversation.id)}
                className={`flex w-full items-start gap-3 border-b border-border/60 px-4 py-3.5 text-left transition-colors ${
                  isActive ? "bg-brand-purple-soft" : "hover:bg-muted/60"
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-white">
                  {conversation.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="truncate text-sm font-semibold text-foreground">
                      {conversation.name}
                    </span>
                    <span className="shrink-0 text-[11px] text-muted-foreground">
                      {conversation.time}
                    </span>
                  </span>
                  <span className="mt-0.5 flex items-center justify-between gap-2">
                    <span className="truncate text-xs text-muted-foreground">
                      {conversation.lastMessage}
                    </span>
                    {conversation.unread > 0 && (
                      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple px-1.5 text-[11px] font-semibold text-white">
                        {conversation.unread}
                      </span>
                    )}
                  </span>
                  <span
                    className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyles[conversation.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {conversation.status}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* ---------- Janela de chat ---------- */}
      <main className="hidden flex-1 flex-col md:flex">
        {/* Cabeçalho do chat */}
        <header className="flex items-center gap-3 border-b border-border bg-background px-6 py-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-white">
            {active.initials}
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-sm font-semibold text-foreground">{active.name}</h1>
            <p className="flex items-center gap-1.5 text-xs text-brand-purple">
              <Bot className="h-3.5 w-3.5" />
              {active.status}
            </p>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full bg-brand-green-soft px-3 py-1 text-xs font-medium text-brand-green sm:inline-flex">
            <Sparkles className="h-3.5 w-3.5" />
            Agente ativo
          </span>
        </header>

        {/* Mensagens */}
        <div className="flex-1 space-y-3 overflow-y-auto bg-chat-surface px-6 py-6">
          {active.messages.map((message) => {
            const isAI = message.author === "ia";
            return (
              <div key={message.id} className={`flex ${isAI ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    isAI
                      ? "rounded-br-sm bg-brand-green text-white"
                      : "rounded-bl-sm border border-border bg-background text-foreground"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`mt-1 text-right text-[10px] ${
                      isAI ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé — modo somente visualização */}
        <footer className="border-t border-border bg-background px-6 py-4">
          <div className="flex items-center gap-3 rounded-full border border-dashed border-border bg-muted/50 px-5 py-3">
            <Bot className="h-4 w-4 shrink-0 text-brand-purple" />
            <p className="text-xs text-muted-foreground">
              Modo de visualização. As interações estão sendo gerenciadas pela IA.
            </p>
          </div>
        </footer>
      </main>

      {/* Estado vazio para telas pequenas (a lista ocupa a tela) */}
      <div className="hidden flex-1 items-center justify-center bg-chat-surface text-sm text-muted-foreground">
        Selecione uma conversa
      </div>
    </div>
  );
}
