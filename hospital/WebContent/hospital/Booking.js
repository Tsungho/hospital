/**
 * 예약
*/

function Booking(bookingNo, bookingDate, doctorNo, petientNo){
bookingNo = bookingNo; //예약 번호
bookingDate = bookingDate;//예약 날짜
doctorNo = doctorNo;//의사번호
petientNo=petientNo;//환자번호

}


Booking.prototype.getBookingNo = function(){return this.bookingNo;}
Booking.prototype.setBookingNo = function(bookingNo){this.bookingNo = bookingNo;}
//------------------------------------------------------
Booking.prototype.getBookingDate = function(){return this.bookingDate;}
Booking.prototype.setBookingDate = function(bookingDate){this.bookingDate = bookingDate;}
//------------------------------------------------------
Booking.prototype.getDoctorNo = function(){return this.doctorNo;}
Booking.prototype.setDoctorNo = function(doctorNo){this.doctorNo = doctorNo;}
//------------------------------------------------------
Booking.prototype.getPetientNo = function(){return this.petientNo;}
Booking.prototype.setPetientNo = function(petientNo){this.petientNo = petientNo;}
//------------------------------------------------------
Booking.prototype.toString = function(){return 'bookingNo : ' + this.bookingNo +
											   'bookingDate : ' + this.bookingDate + 
											   'doctorNo : ' + this.doctorNo +
											   'petientNo : ' + this.petientNo ;
}