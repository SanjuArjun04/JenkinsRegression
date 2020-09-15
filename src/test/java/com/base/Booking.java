package com.base;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Booking extends Utility {
	
	public Booking() {
		PageFactory.initElements(driver, this);
		
}
	@FindBy(xpath="//input[@name='first_name']")
	private WebElement finame;
	@FindBy(xpath="//input[@name='last_name']")
	private WebElement liname;
	@FindBy(id="address")
	private WebElement addr;
	@FindBy(id="cc_num")
	private WebElement ccnum;
	@FindBy(xpath="//select[@class='select_combobox']")
	private WebElement cctype;
	@FindBy(id="cc_exp_month")
	private WebElement ccexpmon;
	@FindBy(id="cc_exp_year")
	private WebElement ccexpyear;
	@FindBy(id="cc_cvv")
	private WebElement ccCvv;
	@FindBy(id="book_now")
	private WebElement booknowbtn;
	public WebElement getFiname() {
		return finame;
	}
	public WebElement getLiname() {
		return liname;
	}
	public WebElement getAddr() {
		return addr;
	}
	public WebElement getCcnum() {
		return ccnum;
	}
	public WebElement getCctype() {
		return cctype;
	}
		
	public WebElement getCcexpmon() {
		return ccexpmon;
	}
	public WebElement getCcexpyear() {
		return ccexpyear;
	}
	public WebElement getCcCvv() {
		return ccCvv;
	}
	public WebElement getBooknowbtn() {
		return booknowbtn;
	}
	public void book(String firstName, String lastName, String Address, String ccNUm, String expiryDateMonth, String expiryDateYear, String cvvNum)
	{

		fill(getFiname(),firstName);
	    fill(getLiname(),lastName);
		fill(getAddr(),Address);
		fill(getCcnum(),ccNUm);

		dropdown(getCcexpmon(),expiryDateMonth);
		dropdown(getCcexpyear(),expiryDateYear);
		fill(getCcCvv(),cvvNum);
		klik(getBooknowbtn());
	
		
	}
		
		
		
		
	
	
}

