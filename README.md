# 🏥 Portal Saúde - Clínica Médica

Este é um portal institucional web para uma clínica médica, desenvolvido em **React** com **Vite** e **React Router Dom** para a navegação entre as páginas.

---

## 📁 Estrutura de Páginas e Componentes
O portal foi mapeado e desenvolvido com as seguintes seções obrigatórias:
* **Componentes de Layout:** `Header`, `Footer` e `Logo` (renderizados em todas as páginas).
* **Páginas Principais:**
  1. `Home` - Página inicial com os destaques da clínica.
  2. `Quem Somos` - História, missão e valores.
  3. `Serviços` - Lista de especialidades médicas e exames.
  4. `Corpo Clínico` - Apresentação dos profissionais médicos.
  5. `Blog / Novidades` - Artigos de saúde e comunicados.
  6. `Contato` - Canais de atendimento e mapa de localização.

---

## 🛠️ Guia de Execução Passo a Passo (Do Zero ao Navegador)

Siga exatamente o roteiro de comandos abaixo no terminal para rodar o projeto localmente em sua máquina.

### 📑 1. Clonar o Repositório do GitHub
Abra o terminal do seu sistema operacional (Prompt de Comando, PowerShell ou Git Bash) na pasta onde deseja salvar o projeto e digite:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

### 📁 2. Navegar para a Pasta Raiz do Projeto
Após clonar, você precisa entrar na pasta exata onde os arquivos de configuração do Node estão. Digite o comando de navegação:

```Bash
cd projeto-portal-saude/portal-saude
```
⚠️ Atenção: É obrigatório executar este comando para que o terminal fique posicionado na pasta portal-saude (onde estão as pastas src, public e o arquivo package.json).

### 📦 3. Instalar os Pacotes e Dependências
Com o terminal na pasta correta, instale todas as bibliotecas necessárias para o projeto (React, Vite, etc.) executando:

```Bash
npm install
```
(Aguarde o download terminar. Uma pasta chamada node_modules será gerada automaticamente).

###🛣️ 4. Instalar o Gerenciador de Rotas
Para garantir o perfeito funcionamento da navegação entre as 6 páginas, certifique-se de instalar o pacote de rotas com o comando:

```Bash
npm install react-router-dom
```

###🚀 5. Inicializar o Servidor de Desenvolvimento
Agora, inicie o servidor local do Vite digitando:

```Bash
npm run dev
```

###💻 6. Acessar o Portal no Navegador
Quando o servidor inicializar, o terminal exibirá o link local da aplicação.

Para abrir o site diretamente no seu navegador padrão, vá até a linha onde está o endereço, segure a tecla Ctrl e clique com o botão esquerdo do mouse em cima do link gerado:

```Plaintext
http://localhost:5173/
```
