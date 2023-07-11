package steps;

import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pages.LoginPage;

public class LoginSteps {

    LoginPage loginPage = new LoginPage();

    @Quando("aciono opção para me autenticar")
    public void realizarLogin(){
        loginPage.realizarLogin();
    }

    @E("insiro os dados de \"(.*)\" e \"(.*)\"")
    public void entrarLogin(String email, String senha){
        loginPage.entrarLogin(email, senha);
    }

    @Entao("autenticacao sera realizada com sucesso")
    public void finalizarLogin(){
        loginPage.finalizarLogin();
    }

}