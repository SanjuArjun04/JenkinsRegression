package com.base;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Utility {
	 public static WebDriver driver;
	public static WebDriver launch()
	{
		if( driver==null) {
		System.setProperty("webdriver.chrome.driver","D:\\WebDrivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
	}
	return driver;
}
	public static void loadUrl(String url)
	{
	driver.get(url);
	}
	public static void fill(WebElement w, String s)
	{
	w.sendKeys(s);
	}

	public static void klik(WebElement w)
	{
	w.click();	
	}
	public static void dropdown(WebElement w,String string)
	{
		Select s=new Select(w);
		s.selectByVisibleText(string);
	}


	public static void getAttri(WebElement w)
	{
		String myOrderId=w.getAttribute("value");
		System.out.println("my order Id ; "+ myOrderId);
		}
	}
	


