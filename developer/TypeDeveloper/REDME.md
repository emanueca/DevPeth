# Guia de TypeScript - DevPeth (em desenvolvimento...)

Este documento define como usamos o TypeScript no projeto DevPeth e quais são as regras para manter a qualidade e a consistência do código.


---

## 📜 Regras de Manutenção (Para Contribuidores)

Ao contribuir para este projeto (via fork ou branch), siga estas regras para manter nosso código limpo.

### 1. Tipagem Estrita é Obrigatória

O objetivo do TS é evitar o tipo `any`. **Nunca use `any`** a menos que seja o último recurso absoluto e você deixe um comentário explicando o porquê.

```tsx
// ❌ RUIM
function handleClick(event: any) {
  // ...
}

// ✅ BOM
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  // ...
}
