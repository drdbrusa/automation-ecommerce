#language: pt
#encoding: utf-8

Funcionalidade: Finalizar compra e efetuar pagamento com cartão

  Esquema do Cenário: Finalizar compra
    Quando inserido os dados de pagamento "<nome_cartao>" "<numero>" "<codigo>" "<mes>" "<ano>"
    Então finalizo a compra com sucesso
    Exemplos:
      | nome_cartao        | numero           | codigo | mes | ano  |
      | Eduardo Brusamolin | 5118432675907813 |  896   | 12  | 2024 |