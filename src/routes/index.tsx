import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Mail } from "lucide-react";

import logo from "@/assets/perks-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entrar | Perks Cannabis" },
      {
        name: "description",
        content:
          "Acesse o painel da Perks Cannabis para acompanhar as conversas entre o agente de IA e os clientes.",
      },
      { property: "og:title", content: "Entrar | Perks Cannabis" },
      {
        property: "og:description",
        content: "Painel de monitoramento de atendimentos conduzidos por IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

/** Tela de login: layout dividido entre marca (verde escuro) e formulário claro. */
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Apenas navegação visual — nenhuma autenticação real neste momento.
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate({ to: "/conversas" });
  };

  return (
    <main className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      {/* Painel de marca */}
      <section className="relative hidden flex-col justify-between bg-brand-green p-12 lg:flex">
        <img src={logo} alt="Perks Cannabis" width={48} height={48} className="h-12 w-12" />
        <div className="max-w-md">
          <h2 className="font-display text-4xl leading-tight font-semibold text-white">
            Acompanhe cada conversa do seu agente de IA.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Visualize atendimentos em tempo real, entenda o comportamento dos leads e mantenha
            total controle sobre a jornada do cliente.
          </p>
        </div>
        <p className="text-xs tracking-[0.2em] text-white/40 uppercase">Perks Cannabis · Painel</p>
        {/* Detalhe visual em roxo */}
        <span className="pointer-events-none absolute top-1/2 -right-24 h-64 w-64 rounded-full bg-brand-purple/30 blur-3xl" />
      </section>

      {/* Formulário */}
      <section className="flex items-center justify-center bg-background px-6 py-16">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Logotipo Perks Cannabis"
              width={64}
              height={64}
              className="h-16 w-16"
            />
            <h1 className="mt-6 font-display text-2xl font-semibold text-foreground">
              Bem-vindo de volta
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Entre com suas credenciais para acessar o painel.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@perkscannabis.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 pl-9"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 pl-9"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border accent-brand-purple"
                />
                Manter conectado
              </label>
              <a href="#" className="font-medium text-brand-purple hover:underline">
                Esqueci a senha
              </a>
            </div>

            <Button
              type="submit"
              className="h-11 w-full bg-brand-purple text-base font-semibold text-white hover:bg-brand-purple/90"
            >
              Entrar
            </Button>
          </form>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Acesso restrito à equipe Perks Cannabis.
          </p>
        </div>
      </section>
    </main>
  );
}
