package tests;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.ClassRule;
import org.junit.runner.RunWith;
import utils.TestRule;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        features = {"src/test/resources/features"},
        monochrome = true,
        dryRun = false, strict = true,
        glue = {"steps"})

public class RunTest {
    @ClassRule
    public static TestRule testRule = new TestRule();

}
