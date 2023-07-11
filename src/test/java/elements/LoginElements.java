package elements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import pages.CommonPage;

public class LoginElements extends CommonPage {

    @FindBy(name = "email")
    protected WebElement txtClickEmail;

    @FindBy(name = "password")
    protected WebElement txtClickPassword;

    @FindBy(xpath = "//*[@id=\"form\"]/div/div/div[1]/div/form/button")
    protected WebElement txtClickLogin;

    @FindBy(xpath = "//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[4]/a")
    protected WebElement btnLogin;

}