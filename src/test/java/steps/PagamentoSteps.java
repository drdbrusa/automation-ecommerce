package steps;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pages.PagamentoPage;

public class PagamentoSteps{

    PagamentoPage pagamentoPage = new PagamentoPage();

    @Quando("inserido os dados de pagamento \"(.*)\" \"(.*)\" \"(.*)\" \"(.*)\" \"(.*)\"")
    public void dadosPagamento(String nome, String numero, String codigo, String mes, String ano){
        pagamentoPage.dadosPagamento(nome, numero, codigo, mes, ano);
    }

    @Entao("finalizo a compra com sucesso")
    public void finalizarCompra(){ pagamentoPage.finalizarCompra(); }

}