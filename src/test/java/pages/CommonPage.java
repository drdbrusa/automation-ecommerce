package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.TestRule;

public class CommonPage {

    protected WebDriver driver = TestRule.getDriver();

    public CommonPage(){}

    protected void waitVisibilityOf(WebElement element){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    protected void closedBanner(){
        driver.get("https://automationexercise.com/products");
    }

    protected void scroll(){
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,550)");
    }

    protected void scrollCompra(){
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,800)");
    }

    protected void limparCampo(WebElement inputQtd, String quantidade){
        inputQtd.sendKeys(Keys.HOME, Keys.chord(Keys.SHIFT, Keys.END), Keys.BACK_SPACE);
        inputQtd.sendKeys(Keys.chord(Keys.CONTROL, "a"), Keys.BACK_SPACE);
        inputQtd.clear();
        inputQtd.sendKeys(quantidade);
    }

}