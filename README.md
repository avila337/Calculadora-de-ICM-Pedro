# 🏋️ Calculadora de IMC

Página web para calcular o **Índice de Massa Corporal (IMC)** e verificar se uma pessoa está no peso ideal, com base nos critérios da **Organização Mundial da Saúde (OMS)**.

---

## 📋 Sobre o Projeto

Esta calculadora solicita o **peso (kg)** e a **altura (metros)** do usuário e, com base na fórmula do IMC, retorna a classificação de saúde correspondente.

---

## 🧮 Fórmula do IMC

$$IMC = \frac{Peso}{Altura^2}$$

---

## 📊 Tabela de Classificação — OMS

| IMC               | Classificação       |
|-------------------|---------------------|
| Menor que 18,5    | 🔵 Abaixo do peso   |
| Entre 18,5 e 24,9 | ✅ Peso ideal        |
| Entre 25,0 e 29,9 | ⚠️ Sobrepeso        |
| 30,0 ou maior     | 🔴 Obesidade        |

> **Peso ideal:** IMC entre **18,5** e **24,9**, conforme a OMS.

---

## 🗂️ Estrutura do Projeto

```
📁 calculadora-imc/
├── index.html   → Estrutura e estilo da página
├── script.js    → Lógica de cálculo e interatividade
└── README.md    → Documentação do projeto
```

---

## 🚀 Como Usar

### Opção 1 — Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-imc.git
   ```
2. Abra o arquivo `index.html` no navegador.

### Opção 2 — GitHub Pages
1. Acesse o repositório no GitHub
2. Vá em **Settings → Pages**
3. Em **Branch**, selecione `main` e clique em **Save**
4. Seu site estará disponível em:
   ```
   https://seu-usuario.github.io/calculadora-imc
   ```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura da página
- **CSS3** — Estilização e animações
- **JavaScript** — Lógica de cálculo do IMC

---

## ✨ Funcionalidades

- [x] Entrada de peso em kg
- [x] Entrada de altura em metros
- [x] Cálculo automático do IMC
- [x] Classificação visual por cores
- [x] Barra de escala interativa
- [x] Validação de campos inválidos
- [x] Suporte ao tecla **Enter**
- [x] Design responsivo (mobile-friendly)

---

## 📸 Preview

> Interface escura moderna com escala visual colorida indicando a faixa do IMC calculado.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usar, modificar e distribuir.

---

Desenvolvido com 💚 para fins educacionais.
