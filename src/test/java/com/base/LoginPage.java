package com.base;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
	
	public LoginPage() {
		PageFactory.initElements(driver, this);
		
	}
	@FindBy(id="username")
	private WebElement txtUserName;
	@FindBy(id="password")
	private WebElement txtPassword;
	@FindBy(className="login_button")
	private WebElement loginbtn;
	public WebElement getTxtUserName() {
		return txtUserName;
	}
	public WebElement getTxtPassword() {
		return txtPassword;
	}
	public WebElement getLoginbtn() {
		return loginbtn;
	}
	public void login(String username,String password) {
		fill(getTxtUserName(),username);
		fill(getTxtPassword(),password);
		klik(getLoginbtn());
	

	}

	
}
