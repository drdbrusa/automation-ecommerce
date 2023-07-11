#language: pt
#encoding: utf-8

Funcionalidade: Realizar login

  Contexto:
    Dado que acesso o ecommerce

  Esquema do Cenário: Realizar login
    Quando aciono opção para me autenticar
    E insiro os dados de "<email>" e "<senha>"
    Entao autenticacao sera realizada com sucesso
    Exemplos:
      | email                 | senha      |
      | drd.brusa93@gmail.com | sxB7ix2722 |