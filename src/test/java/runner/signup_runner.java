package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions (
		//features = {"F:\\SignUp\\signup\\src\\test\\java\\Community_Platform\\signup.feature"},
		features = {"F:\\SignUp\\signup\\src\\test\\java\\Community_Platform\\1_COMMUNITY-2.feature"},
		glue = {"steps"},
		monochrome = true,
		tags = {},
		plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
		)


public class signup_runner  extends AbstractTestNGCucumberTests{

}

