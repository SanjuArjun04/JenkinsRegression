package com.base;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingId extends Utility {
	public BookingId() {
	PageFactory.initElements(driver, this);
	}
	@FindBy(id="order_no")
	private WebElement orderId;
	
    @FindBy(id="order_id_text")
	private WebElement searchId;
	
	@FindBy(id="search_hotel_id")
	private WebElement goId;

	@FindBy(xpath="//input[@type='button']")
	private WebElement cancel;

	public WebElement getOrderId() {
		return orderId;
	}
	
	
	public WebElement getsearchId() {
		return searchId;
	}
	public WebElement getgoId() {
		return goId;
	}

	public WebElement getcancel() {
		return cancel;
	}

	
	public void bookId(String orderId) throws InterruptedException
	{
	   // getAttri(getOrderId());
		fill(getsearchId(),orderId);
		klik(getgoId());
		Thread.sleep(5000);
		klik(getcancel());
		Thread.sleep(5000);
		 Alert alert = driver.switchTo().alert();
		 alert.accept();
		
	}
	


	

}
