package elements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import pages.CommonPage;

public class PagamentoElements extends CommonPage {

    @FindBy(name = "name_on_card")
    protected WebElement txtNomeCartao;

    @FindBy(name = "card_number")
    protected WebElement txtNumeroCartao;

    @FindBy(name = "cvc")
    protected WebElement txtCodigoCartao;

    @FindBy(name = "expiry_month")
    protected WebElement txtMesVencimentoCartao;

    @FindBy(name = "expiry_year")
    protected WebElement txtAnoVencimentoCartao;

    @FindBy(id = "submit")
    protected WebElement btnFinalizarPagamento;

    @FindBy(xpath = "//*[@id=\"form\"]/div/div/div/div/a")
    protected WebElement btnContinuarHome;


}