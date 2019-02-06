# teste-frontend
Repositório usado para o teste de front-end do Núcleo de Tecnologia Multimídia.

## O que?
Relatório que, utilizando dados de uma api, mostre a taxa (média) de ex-alunos do SENAI que continuam estudando por estado e também a taxa nacional.


Abaixo existe um link com um mockup que você pode usar de base, fique a vontade para mudá-lo, podendo usar grafico ao inves de tabelas ou como quiser, iremos levar isso consideração na hora de avaliar.

Para baixar o mockup, [clique aqui](https://github.com/SENAI-NTM/teste-frontend/blob/master/mockup.png).

## Como?
1. Consulta a API/JSON.
2. Pegar resultado e exibir para o usuário de forma usual.

## Público alvo do relatório
Gestores e coordenadores de Educação do SENAI.

## Dados de entrada
1. Consulta a api do teste anterior ou arquivo JSON a seguir, ambos na mesma estrutura abaixo:
```json
{
  "regionals": [
    {"description": "AC", "average": 23.30},
    {"description": "AL", "average": 61.00},
    {"description": "AP", "average": 30.10},
    {"description": "AM", "average": 56.30},
    ...
  ],
  "national": 47.50
}
```
Faça download clicando [aqui](https://github.com/SENAI-NTM/teste-backend/blob/master/data.json).

## Instruções?
1. Você está livre para escolher (ou não) qualquer framework/lib front-end.
2. Adicione a esse README, instruções de como executar a sua solução.
3. Você pode subir o seu código front-end através de um fork desse repositório github ou enviar por tudo email. Lembrando que temos preferência pelo o uso do github e iremos levar isso consideração na hora de avaliar.
4. Você tem uma semana (7 dias) para a finalização do teste, a partir da data de envio do e-mail.
5. Se não conseguir finalizar os testes, não se preocupe, envie a sua solução no estágio de desenvolvimento que estiver.

##Descrição
Relatório de Exibição da taxa(média) de ex-alunos do SENAI que continuam estudando por estado e também a taxa nacional.

##Instruções de Uso!
1. Abra o arquivo Index.html no seu Navegador Web;
   Opcional: Abrir em servidor apache ou qualquer outro que suporte a extensão .html
2. O usuário verá uma básica representação do site oficial do SENAI
3. Ao rolar a página, o usuário encontrará um botão que ao ser clicado, mostra a média de ex-alunos do SENAI que continuam estudando por estado e também a média Nacional.