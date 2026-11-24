# Meu Espaço

Marketplace demonstrativo para descobrir e comparar espaços para eventos. Este MVP inicial apresenta um espaço cadastrado manualmente: **Churras Grego Restô Bar**, no Nordeste de Amaralina, Salvador/BA.

## Como visualizar
1. Extraia a pasta `meu-espaco` para `C:\Users\Brenda\Desktop\meu-espaco`.
2. Abra `index.html` no navegador.
3. Para desenvolvimento local, também é possível executar `python -m http.server 8000` dentro da pasta e acessar `http://localhost:8000`.

Não há dependências, instalação ou backend neste protótipo.

## O que está implementado
- Página inicial responsiva com busca e filtros demonstrativos.
- Cartão do espaço com foto enviada para esta demonstração.
- Modal com informações do estabelecimento.
- Links para o Instagram informado.
- Botão de contato demonstrativo: ainda não há WhatsApp cadastrado.
- Dados separados em `src/espacos.js` para facilitar novos cadastros.

## Dados confirmados do espaço
- Nome: Churras Grego Restô Bar
- Bairro: Nordeste de Amaralina, Salvador/BA
- Comodidades informadas: ambiente climatizado e karaokê
- Atividade informada: sinuca
- Instagram: https://www.instagram.com/churras_grego_resto_bar/

Capacidade, endereço completo, preço, horários, telefone/WhatsApp e regras de locação ainda precisam ser confirmados com a proprietária. A imagem foi fornecida para esta demonstração; confirme autorização de uso antes de publicar o anúncio.

## Estrutura
- `index.html`: página do site.
- `styles.css`: identidade visual e responsividade.
- `app.js`: busca, filtros e modal.
- `src/espacos.js`: cadastro demonstrativo.
- `assets/`: imagens.
- `docs/`: documentação de produto e implementação.

## Próximos passos antes de publicar
1. Confirmar com a proprietária os dados pendentes e autorização das fotos.
2. Cadastrar telefone/WhatsApp e mensagem de contato.
3. Validar capacidade, tipos de evento aceitos, valores e condições.
4. Substituir o cadastro demonstrativo por uma fonte de dados persistente.
5. Implementar autenticação e painel administrativo antes de permitir gestão real.
6. Publicar com domínio, política de privacidade e canal para correção/remoção de anúncios.
