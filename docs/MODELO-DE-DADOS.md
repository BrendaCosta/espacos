# Modelo de dados inicial

Modelo conceitual preparado para futura persistência em PostgreSQL.

## Entidades

### Space (Espaço)
- `id`: UUID, chave primária
- `name`: texto, obrigatório
- `slug`: texto único
- `description`: texto
- `category_id`: UUID, opcional
- `neighborhood`, `city`, `state`: texto
- `address`: texto, opcional e sujeito à autorização de exibição
- `capacity_seated`, `capacity_standing`: inteiro, opcionais
- `price_type`: `FIXED`, `STARTING_AT`, `ON_REQUEST`, `NOT_INFORMED`
- `price_amount`: decimal, opcional
- `status`: `DRAFT`, `PUBLISHED`, `INACTIVE`
- `owner_id`: UUID
- `created_at`, `updated_at`: timestamp

### Amenity (Comodidade)
- `id`, `name`, `slug`
- Exemplos: ambiente climatizado, karaokê, sinuca, estacionamento, acessibilidade.

### SpaceAmenity
- `space_id`, `amenity_id` — relação N:N.

### SpacePhoto
- `id`, `space_id`, `image_url`, `alt_text`, `sort_order`, `is_cover`.

### EventType
- `id`, `name`, `slug`
- Exemplos: aniversário, confraternização, casamento intimista, evento corporativo.

### SpaceEventType
- `space_id`, `event_type_id` — relação N:N.

### Owner
- `id`, `name`, `email`, `phone`, `created_at`.

### SpaceContact
- `id`, `space_id`, `channel` (`WHATSAPP`, `INSTAGRAM`, `WEBSITE`), `value`, `is_public`.

## Cadastro de demonstração
O Churras Grego Restô Bar foi informado com bairro Nordeste de Amaralina, cidade Salvador/BA, ambiente climatizado, karaokê, sinuca e Instagram. Não foram fornecidos endereço completo, capacidade, preço ou telefone. Esses campos devem permanecer nulos/pendentes até confirmação.

## Regras
- Não publicar endereço residencial ou telefone sem autorização.
- Não tratar comodidade como garantia sem validação do anunciante.
- Preço sob consulta deve ser distinto de preço não informado.
- Registrar apenas eventos de clique agregados quando possível; evitar dados pessoais do visitante.
