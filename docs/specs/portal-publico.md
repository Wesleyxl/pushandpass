# Portal público Push & Pass

## Status

Status: done
Owner: @wesley
Last updated: 2026-08-17

## Contexto

O Push & Pass é um hub de conteúdo sobre automobilismo. O visitante deve acompanhar notícias, calendários, resultados e demais seções sem criar conta.

## Objetivo

Disponibilizar o portal público com shell fiel aos mockups, conteúdo mock atrás de uma porta de conteúdo, e autenticação opcional apenas para extras (perfil, notificações e preferências).

## Escopo

- Layout raiz (header, categorias, subnav, footer)
- Rotas públicas de home, categoria, notícias, calendário, resultados, classificação, pilotos, equipes, circuitos, onde assistir e busca
- Dados mock via `ContentRepository`
- Login opcional que não bloqueia o core

## Fora do escopo

- CMS, API, banco de dados
- Painel editorial
- Provedor real de autenticação (OAuth, JWT, e-mail transacional)
- Dados ao vivo de campeonatos
- Deploy e CI/CD

## Comportamento esperado

- Todas as rotas das etapas 1–8 são públicas.
- O botão Entrar não impede a navegação.
- Com sessão, o header troca Entrar por avatar e notificações.
- Conteúdo público permanece idêntico para visitante e usuário logado.

## Contratos e interfaces

A UI consome `ContentRepository` em `src/content`. A implementação atual é mock. Sessão opcional fica em `localStorage` apenas para demonstração.

## Restrições

- CSS com tokens da marca, sem Tailwind
- Dependência de roteamento: `react-router`
- Sem exigir login no core

## Critérios de aceitação

- [x] Visitante navega o portal sem sessão
- [x] Chrome (logo, busca, Entrar, categorias, subnav, footer) aparece em desktop e mobile
- [x] Rotas estáticas (`/busca`, `/circuitos`, `/entrar`) não colidem com `/:categoria`
- [x] Busca consulta o mock
- [x] Login opcional não protege notícias, calendário, resultados nem demais seções públicas
