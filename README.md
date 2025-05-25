# LuliTour Búzios - Guia de Edição e Hospedagem

Este documento contém instruções para editar e hospedar o site LuliTour Búzios.

## Estrutura do Projeto

O site é composto por três arquivos principais:

1. `index.html` - Estrutura e conteúdo da página
2. `css/style.css` - Estilos e aparência visual
3. `js/script.js` - Funcionalidades interativas

## Como Editar o Conteúdo

### Editar Textos e Informações

Para editar textos, preços, descrições e outras informações, abra o arquivo `index.html` em qualquer editor de texto (como Bloco de Notas, Visual Studio Code, Sublime Text, etc.) e localize a seção que deseja modificar:

- **Título da página**: Altere a tag `<title>` na seção `<head>`
- **Logo**: Modifique o texto dentro da tag `<h1>` na div com classe `logo`
- **Seções de conteúdo**: Cada seção está claramente identificada com comentários como `<!-- Hero Section -->`, `<!-- Serviços -->`, etc.
- **Preços**: Localize as divs com classe `preco` e altere os valores
- **Características dos serviços**: Modifique as listas com classe `features`
- **Depoimentos**: Edite os textos dentro da seção `<!-- Depoimentos -->`
- **FAQ**: Altere as perguntas e respostas na seção `<!-- FAQ -->`
- **Informações de contato**: Atualize os dados na seção `<!-- Localização e Contato -->`

### Editar o Número de WhatsApp

Para alterar o número de WhatsApp para contato:

1. Abra o arquivo `js/script.js`
2. Localize a linha `const whatsappNumber = '5521999999999';`
3. Substitua pelo número real no formato internacional (55 + DDD + número, sem espaços ou caracteres especiais)

### Editar Imagens

As imagens estão definidas no arquivo CSS. Para alterá-las:

1. Abra o arquivo `css/style.css`
2. Procure por seções como `.hero`, `.escuna-img`, `.buggy-tour-img`, etc.
3. Substitua os URLs nas propriedades `background-image` pelas URLs das suas imagens

Alternativa: Você pode baixar as imagens e colocá-las na pasta `images/`, e então atualizar os caminhos no CSS para apontar para essas imagens locais, por exemplo:
```css
.hero {
    background-image: url('../images/hero-background.jpg');
}
```

## Como Hospedar o Site

### Opção 1: Hospedagem Gratuita (GitHub Pages)

1. Crie uma conta no [GitHub](https://github.com/)
2. Crie um novo repositório chamado `username.github.io` (substitua "username" pelo seu nome de usuário do GitHub)
3. Faça upload de todos os arquivos do projeto para este repositório
4. Seu site estará disponível em `https://username.github.io`

### Opção 2: Hospedagem Paga (recomendado para uso profissional)

Existem várias opções de hospedagem paga com preços acessíveis:

1. **Hostinger, Hostgator, Locaweb, etc.**:
   - Contrate um plano de hospedagem básico
   - Use o painel de controle para fazer upload dos arquivos via FTP ou pelo gerenciador de arquivos
   - Seu site estará disponível no domínio que você registrar

2. **Netlify ou Vercel**:
   - Crie uma conta gratuita
   - Arraste e solte a pasta do projeto ou conecte ao GitHub
   - Seu site terá um subdomínio gratuito (exemplo: lulitour.netlify.app)
   - Você pode adicionar um domínio personalizado posteriormente

### Registrar um Domínio (Opcional)

Para ter um endereço profissional como www.lulitour.com.br:

1. Registre um domínio em serviços como Registro.br, GoDaddy, Namecheap, etc.
2. Siga as instruções do seu serviço de hospedagem para conectar seu domínio ao site

## Dicas para Manutenção

1. **Sempre faça backup** dos arquivos antes de editar
2. **Teste as alterações** em seu computador antes de publicar
3. **Mantenha as imagens otimizadas** para carregamento rápido (use serviços como TinyPNG)
4. **Atualize regularmente** os preços e informações para manter o site relevante

## Suporte

Se precisar de ajuda adicional para personalizar o site além das edições básicas, considere contratar um desenvolvedor web para implementar funcionalidades mais complexas.
