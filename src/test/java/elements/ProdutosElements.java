package elements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import pages.CommonPage;

public class ProdutosElements extends CommonPage {

    @FindBy(xpath = "//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[2]/a")
    protected WebElement btnTodosProdutos;

    @FindBy(id = "search_product")
    protected WebElement txtPesquisarProduto;

    @FindBy(id = "submit_search")
    protected WebElement btnPesquisarProduto;

    @FindBy(xpath = "/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[2]/ul/li/a")
    protected WebElement txtViewProduct;

    @FindBy(id = "quantity")
    protected WebElement inputQtd;

    @FindBy(xpath = "/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/button")
    protected WebElement btnAddCart;

    @FindBy(xpath = "//*[@id=\"cartModal\"]/div/div/div[3]/button")
    protected WebElement btnContinue;

    @FindBy(xpath = "//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[3]/a")
    protected WebElement txtViewCart;

    @FindBy(xpath = "//*[@id=\"do_action\"]/div[1]/div/div/a")
    protected WebElement btnFinalizarCompra;

    @FindBy(xpath = "//*[@id=\"cart_items\"]/div/div[7]/a")
    protected WebElement btnPlaceOrder;

}