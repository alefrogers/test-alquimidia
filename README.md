
#  <a href="https://alquimidia.com.br/" target="_blank"> <img src="https://alquimidia.com.br/assets/images/logo-alquimidia.svg" alt="alquimidia" width="200" height="50"/> </a> Processo Seletivo Alquimidia Tecnologia

### Justificativa
Optei por remodelar a estrutura já que o sentido do teste era confirmar conhecimento tecnico, fiz uma arquitetura um pouco mais organizada optando pelo react como ferramenta principal e usando o electron para auxiliar. Escolhi o react por ser uma ferramenta que vocês utilizam, usei functions components assim como é recomendado pelo proprio react afinal os class components devem morrer nos proximos anos.

SPA com react: 
- Utilizei o bootstrap como base para o layout já que não havia um requisito definido.
- Os comandos foram alterados para que com o ```npm run dev``` possa subir a aplicação já compilada.
- !Optei por não me apegar a detalhes como filtros pois iria onerar bastante tempo, como acredito que teste tecnico deve ser rapído, optei por focar em estrutura e código.!
- Também para não onerar muito tempo optei por não criar nenhuma imagem com o docker já que esse não foi também um dos requisitos.
- Para salvar os dados resolvi usar o local storage, então todos os dados devem ser mantidos.
- Também dei uma atenção para a responsividade

### ✈️ Como executar o Electron:

Abra terminal e inicie com

```
npm install
```
e depois 

```
npm run dev
```

### 📝 Cadastro de Cientes:

Projeto de teste para processo seletivo. Simples cadastro de clientes sem banco de dados com busca automática de CEP.

### ⚙️ Requisitos:

* Utilizar a linguagem Javascrip;
* Criar uma tela de cadastro de clientes, com os seguintes campos: Nome, Identidade, CPF, Telefone, Email, Endereço, Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, Pais;
* Ao informar um Cep o sistema deve realizar a busca dos dados relacionados ao mesmo no seguinte endereço: https://viacep.com.br/;
* A forma de consumo da API do via Cep, deverá ser utiliza JSON;
* Os registros devem ficar salvo em memória, não será necessário criar um banco de dados para o armazenamento dos dados;
* Disponibilizar projeto no github;
