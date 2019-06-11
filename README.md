# Sistema de Gerenciamento de Planos de Aula e de Ensino

## Desenvolvido por:

- **Ariel Vitor Molina - R.A. 160034**
- **Thiago G. S. Fiorelli - R.A. 160018**
- **Vitor G. de O. Pelegrinetti - R.A. 160015**

## 1. Objetivo:

Este documento tem como finalidade instruir o Usuário em como utilizar o Sistema de Gerenciamento de Planos de Aulas e Ensino, desenvolvido para a disciplina de **Desenvolvimento de Aplicações para WEB – LAB**.

A finalidade da Aplicação é auxiliar na criação e gestão de Planos de Aulas e Planos de Ensino, que atualmente são entregues como documentos. A Aplicação pretende facilitar neste ponto, fazendo com que a criação, publicação e possível replicação destes documentos sejam feitas de forma centralizada.

## 2. Desenvolvimento

O Sistema foi desenvolvido durante o período de aulas e também fora da faculdade, no decorrer do período desde o Início das aulas até a data final de entrega, 11/06/2019, com uma etrega parcial no dia 09 de Abril de 2019, tendo como etapas: a definição dos Atributos do Banco de Dados, pesquisa sobre as tecnologias que melhor atenderiam às necessidades do Projeto, e enfim o desenvolvimento das funcionalidades.

As tecnologias utilizadas foram ReactJS e Firebase. Elas foram escolhidas pelo interesse do grupo em seus aprendizados, pois são tecnologias novas, difundidas atualmente em ambientes de desenvolvimento, além de serem mais didáticas e possuírem uma maior facilidade para seu entendimento.

## 3. Desenvolvimento

Para poder utilizar o Sistema, cada usuário deve possuir um cadastro próprio, sendo que cada usuário tem um nível de permissões pré-determinado que permite-o acessar ou não diferentes recursos. Estes papéis são:

- **Administrador**: Responsável pela criação de novos usuários e inserção de Cursos na Base de Dados;
- **Coordenador**: Responsável pelo cadastro de Disciplinas e Turmas, além de avaliar os documentos enviados pelos professores;
- **Professor**: Responsável por cadastrar e editar os Planos de Aulas e Ensino, além de submetê-los à aprovação do Coordenador do Curso.

Determinados estes papéis, cada usuário poderá utilizar uma série de ferramentas que melhor atendam às suas necessidades.

Seguem abaixo as explicações sobre o funcionamento individual das funcionalidades do Sistema:

### Login

![Tela de Login](https://i.imgur.com/Yrqpt0h.png)

Ao inicializar a aplicação, esta é a primeira tela apresentada. O usuário deve efetuar seu Login para acessar o sistema, e caso não haja cadastros, deverá ser realizado o cadastro de um novo usuário.

A Barra de Ferramentas contém as opções **Cadastrar** e **Entrar**, e estas opções aparecem apenas quando o usuário não está logado no Sistema.

### Cadastro de Usuários

![Tela de Cadastro de Usuários](https://i.imgur.com/nagoWUD.png)

É nesta tela que ocorrem os cadastros de qualquer usuário que terá acesso ao sistema.

Devem-se fornecer: E-mail (com o campo similar ao do HTML5, havendo verificação de, por exemplo, a existência de um ‘@’ no endereço digitado), Senha, Nome, Sobrenome e CPF.

Em seguida, deve-se selecionar o papel deste usuário no Sistema, podendo-se, por exemplo, selecionar mais de uma opção onde aplicável (um Professor que também seja Coordenador de um Curso, por exemplo).

### Tela Principal

![Home](https://i.imgur.com/N6Bfxbr.png)

Esta é a Home para Usuários que estejam logados no Sistema. A Barra de Ferramentas agora conta com novas funcionalidades:

- Cadastrar Plano de Ensino;
- Cadastrar Matéria;
- Cadastrar Curso;
- Sair do Sistema (simbolizado pelo botão de desligar).

Também nesta Barra de Ferramentas encontram-se as iniciais de quem está atualmente logado.

As opções mostradas nesta tela são:

- Turmas;
- Matérias;
- Cursos;
- Planos de Ensino cadastrados.

E ao lado destas opções, há uma área de Notificações, onde um Professor, por exemplo, poderá receber a informação de que seu Plano de Ensino foi aceito ou recusado por um Coordenador.

### Detalhes

![Detalhes](https://i.imgur.com/2uBZaHI.png)

Ao se clicar em alguma das opções da Home Page, o Usuário pode ver os detalhes da mesma. No exemplo mostrado acima, estão os detalhes da Turma CLO01.

### Cadastrar Curso (Administrador)

![Cadastro de Cursos](https://i.imgur.com/btyJCHL.png)

Aqui um Administrador pode cadastrar Cursos e delegar seu Coordenador. Deve-se adicionar um Nome e Descrição para o novo Curso.

### Cadastrar Matéria (Administrador / Coordenador)

![Cadastro de Matérias](https://i.imgur.com/40tLAuJ.png)

Assim como no cadastro de Curso, deve ser informado um Nome à Matéria cadastrada. Também deve ser informado a que semestre ela pertencerá, para futuro reaproveitamento de Planos de Aula, seu Peso (especialmente para Matérias com componentes Teóricas e Práticas), e adicionar Cursos à esta Disciplina, além de qual o Semestre que a mesma será ministrada.

### Cadastrar Turma

![Cadastro de Turmas](https://i.imgur.com/kHRYrBl.png)

O cadastro de Turma contém mais informações, necessitando de um Código e um Professor que será responsável por ela, além do período da mesma e a qual Matéria pertence.

### Cadastrar Planos de Ensino

![Cadastro de Plano de Ensino](https://i.imgur.com/hTJbg4W.png)

O Professor pode escolher a qual Matéria o Plano de Ensino em questão pertencerá (assim, caso hajam diferentes Turmas para a mesma Disciplina, ambas terão o mesmo Plano de Ensino).
