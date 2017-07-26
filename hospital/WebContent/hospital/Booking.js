/**
 * 예약
*/

function Booking(bookingNo, bookingDate, doctorNumber, patientNumber){
this.bookingNo = bookingNo; //예약 번호
this.bookingDate = bookingDate;//예약 날짜
Doctor.call(this, doctorNumber);//의사번호
Petient.call(this, patientNumber);//환자번호

}


//Getter & Setter
//======================================================

Booking.prototype = new Doctor();
Booking.prototype = new Petient();



Booking.prototype.getBookingNo = function(){
	return this.bookingNo;
}
Booking.prototype.setBookingNo = function(bookingNo){
	this.bookingNo = bookingNo;
}
//------------------------------------------------------
Booking.prototype.getBookingDate = function(){
	return this.bookingDate;
}
Booking.prototype.setBookingDate = function(bookingDate){
	this.bookingDate = bookingDate;
}
//------------------------------------------------------
Booking.prototype.toString = function(){
	return 'bookingNo : ' + this.bookingNo +
	'bookingDate : ' + this.bookingDate + 
	'doctorNumber : ' + this.doctorNumber +
	'patientNumber : ' + this.patientNumber ;
}

//쿼리문
//======================================================
//--예약 접수
//---
petient.prototype.acptBooking = function(){
	console.log('예약이 접수되었습니다.');
}
//---
//---
//---
//---

//------------------------------------------------------
//--예약 취소
//---
petient.prototype.rescBooking = function(){
	console.log('예약이 취소되었습니다.');

}
//---
//---
//---
//---



