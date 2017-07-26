/**
 * 예약
*/

function Booking(bookingNo, bookingDate, doctorNumber, patientNumber){
bookingNo = bookingNo; //예약 번호
bookingDate = bookingDate;//예약 날짜
Doctor.call(this, doctorNumber);//의사번호
Petient.call(this, patientNumber);//환자번호

}

//세터겟터
//------------------------------------------------------
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