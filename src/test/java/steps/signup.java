package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class signup {
	
	WebDriver driver;
	  
	@Before()
	public void setup() {  
		System.setProperty("webdriver.chrome.driver",
				"F:\\SignUp\\signup\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

	}
	
	@After()
	public void end() {
	driver.manage().deleteAllCookies();
	driver.quit();
	}

	@Given("^User navigates to community platform signup page$")
	public void user_navigates_to_community_platform_signup_page() throws Throwable {
		 driver.get("http://20.52.44.20/auth/signup");;
	}

	@When("^User enters an \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_an_and(String email, String password) throws Throwable {
		driver.findElement(By.id("InputEmail")).sendKeys(email);
		driver.findElement(By.id("InputPassword1")).sendKeys(password);
	}

	@When("^User \"([^\"]*)\"$")
	public void user(String c_password) throws Throwable {
		driver.findElement(By.id("InputPassword2")).sendKeys(c_password);
	}

	@Then("^user selects user type$")
	public void user_selects_user_type() throws Throwable {
	    WebElement radio = driver.findElement(By.id("individual"));
	    radio.click();
	}

	@Then("^User clicks on the signup button$")
	public void user_clicks_on_the_signup_button() throws Throwable {
		driver.findElement(By.id("signup_button")).click();
	}

	@Then("^user should be noticed with a success or failure \"([^\"]*)\" depending on the credentials used$")
	public void user_should_be_noticed_with_a_success_or_failure_depending_on_the_credentials_used(String message) throws Throwable {
		Thread.sleep(8000);
	  	String url =driver.findElement(By.xpath("//*[@id=\"myModal\"]/div/div/p")).getText();                                         
	  	Assert.assertEquals(url,message);      
	}

	
	
}


	

