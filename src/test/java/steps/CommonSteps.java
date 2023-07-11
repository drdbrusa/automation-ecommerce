package steps;

import io.cucumber.java.pt.Dado;
import utils.TestRule;

public class CommonSteps {

    @Dado("que acesso o ecommerce")
    public void acessarEcommerce(){
        String ecommerceUrl = "https://automationexercise.com/";
        TestRule.abrirNavegador(ecommerceUrl);
    }

}