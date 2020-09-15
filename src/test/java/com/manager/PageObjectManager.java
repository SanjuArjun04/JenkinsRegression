package com.manager;

import org.openqa.selenium.WebDriver;

import com.base.Booking;
import com.base.BookingId;
import com.base.Confirm;
import com.base.HotelSearch;
import com.base.LoginPage;
import com.base.SelectHotel;
import com.base.Utility;

public class PageObjectManager extends Utility{
	PageObjectManager()
	{
		
	}
	 public static PageObjectManager getInstance() {
		 
		 return(pageObjectManager == null) ? pageObjectManager = new PageObjectManager() : pageObjectManager;
		 
	 }

	
    private static PageObjectManager pageObjectManager;
	private LoginPage loginPage;
	private SelectHotel selectHotel;
	private HotelSearch hotelSearch;
	
	private Booking booking;
	private BookingId bookingId;
	

 public  LoginPage getLoginPage() {

	if(loginPage==null) {
		loginPage=new LoginPage();
	}
	
	System.out.println(loginPage);
	return loginPage;
 }
 public  HotelSearch getHotelSearch() {
	 
	 return(hotelSearch == null) ? hotelSearch = new HotelSearch() : hotelSearch;
	 
}
 public  SelectHotel getSelectHotel() {
	 
	 return(selectHotel == null) ? selectHotel = new SelectHotel() : selectHotel;
	 
}
 public  Booking getBooking() {
	 
	 return(booking == null) ? booking = new Booking() : booking;
	 
}
 public  BookingId getBookingId() {
	 
	 return(bookingId == null) ? bookingId = new BookingId() : bookingId;
	 
}
 



}