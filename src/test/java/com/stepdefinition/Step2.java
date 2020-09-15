package com.stepdefinition;

import java.util.List;
import java.util.Map;

import com.base.Booking;
import com.base.BookingId;
import com.base.HotelSearch;
import com.base.LoginPage;
import com.base.SelectHotel;
import com.base.Utility;
import com.manager.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step2 extends Utility {
	PageObjectManager manager;
	LoginPage loginPage;
	HotelSearch hotelSearch;
	Booking booking;
	BookingId bookingId;
	SelectHotel selectHotel;

	@Given("user is on the Adactin Hotel page")
	public void user_is_on_the_Adactin_Hotel_page() {
		 launch();
		   loadUrl("http://adactinhotelapp.com/");
	    
	}

	@When("user should enter {string} and {string}")
	public void user_should_enter_and(String username, String password) {
		manager=manager.getInstance();
		LoginPage loginPage=manager.getLoginPage();
		  
		   fill(loginPage.getTxtUserName(), username);
		  fill(loginPage.getTxtPassword(), password);
	    
	}

	@When("user should click the login button")
	public void user_should_click_the_login_button() {
		manager=manager.getInstance();
   		LoginPage loginPage=manager.getLoginPage();
      klik(loginPage.getLoginbtn());

	   
	}

	@When("user should select the {string},{string},{string} ,{string},{string},{string},{string},{string},{string}")
	public void user_should_select_the(String location, String hotelname, String firstName, String lastName, String Address, String ccNUm, String expiryDateMonth, String expiryDateYear, String cvvNum, io.cucumber.datatable.DataTable dataTable) {
		manager=manager.getInstance();
		HotelSearch hotelSearch=manager.getHotelSearch();
		
		dropdown(hotelSearch.getDdloc(),location);
	    dropdown(hotelSearch.getDdhotel(),hotelname);
		
		List<Map<String,String>> emp=dataTable.asMaps();
		Map<String,String> e1= emp.get(1);
		String s1 = e1.get("room Type");
		fill(hotelSearch.getDdroom(),s1);
		
		
		Map<String,String> e2= emp.get(1);
		String s2 = e2.get("room No");
		fill(hotelSearch.getDdroomno(),s2);
		
		
		Map<String,String> e3= emp.get(1);
		String s3 = e3.get("Adult per room");
		fill(hotelSearch.getDdadultroom(),s3);
		
		Map<String,String> e4= emp.get(1);
		String s4 = e3.get("Adult per room");
		fill(hotelSearch.getDdchildroom(),s4);
		
		klik(hotelSearch.getSubmitbtn());

		manager=manager.getInstance();
		SelectHotel	selectHotel=new SelectHotel();
   		selectHotel=manager.getSelectHotel();
		klik(selectHotel.getRadbtn());
		klik(selectHotel.getConbtn());
		
		manager=manager.getInstance();
   		Booking booking=manager.getBooking();

   		fill(booking.getFiname(),firstName);
   	
   		fill(booking.getLiname(),lastName);
 
   		fill(booking.getAddr(),Address);
  
   		fill(booking.getCcnum(),ccNUm);
   		
   		
   		Map<String,String> e5= emp.get(1);
		String s5 = e5.get("Adult per room");
		fill(booking.getCctype(),s5);
		dropdown(booking.getCcexpmon(),expiryDateMonth);
		   
   		dropdown(booking.getCcexpyear(),expiryDateYear);
   		
   		fill(booking.getCcCvv(),cvvNum);
  
		
		
	}
	
	
	
	
	
}