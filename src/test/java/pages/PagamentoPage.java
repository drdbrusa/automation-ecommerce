package pages;

import elements.PagamentoElements;
import org.openqa.selenium.support.PageFactory;

public class PagamentoPage extends PagamentoElements {

    public PagamentoPage(){
        PageFactory.initElements(driver, this);
        System.out.println(driver.getCurrentUrl());
    }

    public void dadosPagamento(String nome, String numero, String codigo, String mes, String ano){
        txtNomeCartao.click();
        txtNomeCartao.sendKeys(nome);
        txtNumeroCartao.click();
        txtNumeroCartao.sendKeys(numero);
        txtCodigoCartao.click();
        txtCodigoCartao.sendKeys(codigo);
        txtMesVencimentoCartao.click();
        txtMesVencimentoCartao.sendKeys(mes);
        txtAnoVencimentoCartao.click();
        txtAnoVencimentoCartao.sendKeys(ano);
    }

    public void finalizarCompra(){
        btnFinalizarPagamento.click();
        btnContinuarHome.click();
    }

}