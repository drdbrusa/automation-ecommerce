package pages;

import elements.LoginElements;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends LoginElements {

    public LoginPage(){ PageFactory.initElements(driver, this); }

    public void realizarLogin(){
        btnLogin.click();
    }

    public void entrarLogin(String email, String senha){
        txtClickEmail.click();
        txtClickEmail.sendKeys(email);
        txtClickPassword.click();
        txtClickPassword.sendKeys(senha);
    }

    public void finalizarLogin(){
        txtClickLogin.click();
    }

}