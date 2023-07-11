package steps;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pages.ProdutosPage;

public class ProdutosSteps {

    ProdutosPage produtosPage = new ProdutosPage();

    @Quando("pesquiso o produto \"(.*)\"")
    public void pesquisarProduto(String produto){
        produtosPage.pesquisarProduto(produto);
    }

    @E("aciono a opção para ir ao carrinho finalizando a compra")
    public void visualizarCarrinho(){
        produtosPage.visualizarCarrinho();
    }

    @Entao("coloco o produto no carrinho com a quantidade desejada \"(.*)\"")
    public void adicionarProduto(String quantidade){
        produtosPage.adicionarProduto(quantidade);
    }

}