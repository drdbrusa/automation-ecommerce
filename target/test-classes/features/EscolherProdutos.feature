#language: pt
#encoding: utf-8

Funcionalidade: Escolher produtos

  Esquema do Cenário: Inserir Stylish Dress no carrinho
    Quando pesquiso o produto "<nome_produto>"
    Entao coloco o produto no carrinho com a quantidade desejada "<quantidade>"
    Exemplos:
      | nome_produto  | quantidade |
      | Stylish Dress | 3          |

  Esquema do Cenário: Inserir Beautiful Peacock Blue Cotton Linen Saree no carrinho
    Quando pesquiso o produto "<nome_produto>"
    Entao coloco o produto no carrinho com a quantidade desejada "<quantidade>"
    Exemplos:
      | nome_produto                              | quantidade |
      | Beautiful Peacock Blue Cotton Linen Saree | 2          |

  Esquema do Cenário: Inserir Men Tshirt no carrinho
    Quando pesquiso o produto "<nome_produto>"
    Então coloco o produto no carrinho com a quantidade desejada "<quantidade>"
    E aciono a opção para ir ao carrinho finalizando a compra
    Exemplos:
      | nome_produto  | quantidade |
      | Men Tshirt    | 1          |