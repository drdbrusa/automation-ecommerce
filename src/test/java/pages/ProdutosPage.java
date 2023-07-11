package pages;

import elements.ProdutosElements;
import org.openqa.selenium.support.PageFactory;

public class ProdutosPage extends ProdutosElements {

    public ProdutosPage(){
        PageFactory.initElements(driver, this);
    }

    public void pesquisarProduto(String produto){
        btnTodosProdutos.click();
        closedBanner();
        waitVisibilityOf(txtPesquisarProduto);
        txtPesquisarProduto.click();
        txtPesquisarProduto.sendKeys(produto);
        btnPesquisarProduto.click();
    }

    public void adicionarProduto(String quantidade){
        scroll();
        txtViewProduct.click();
        waitVisibilityOf(inputQtd);
        inputQtd.click();
        if ( Integer.parseInt(quantidade) > 1){
            limparCampo(inputQtd, quantidade);
        }
        btnAddCart.click();
        waitVisibilityOf(btnContinue);
        btnContinue.click();
    }

    public void visualizarCarrinho(){
        waitVisibilityOf(txtViewCart);
        txtViewCart.click();
        btnFinalizarCompra.click();
        scrollCompra();
        btnPlaceOrder.click();
    }

}