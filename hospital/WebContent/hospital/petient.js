/**=
 * 환자
*/

function Petient(patientNumber, petientName, disName, ssNumber, phoneNumber, address){
	patientNumber = patientNumber;//환자번호
	petientName = petientName;//환자이름
	disName = disName;//병명
	ssNumber = ssNumber;//주민번호
	phoneNumber = phoneNumber;//전화번호
	address = address;//주소

}

//Getter & Setter
//======================================================
Petient.prototype.getPatientNumber = function(){
	return this.patientNumber;
}
Petient.prototype.setPatientNumber = function(patientNumber){
	this.patientNumber = patientNumber;
}
//------------------------------------------------------
Petient.prototype.getPetientName = function(){
	return this.petientName;
}
Petient.prototype.setPetientName = function(petientName){
	this.petientName = petientName;
}
//------------------------------------------------------
Petient.prototype.getDisName = function(){
	return this.disName;
}
Petient.prototype.setDisName = function(disName){
	this.disName = disName;
}
//------------------------------------------------------
Petient.prototype.getSsNumber = function(){
	return this.ssNumber;
}
Petient.prototype.setSsNumber = function(ssNumber){
	this.ssNumber = ssNumber;
}
//------------------------------------------------------
Petient.prototype.getPhoneNumber = function(){
	return this.phoneNumber;
}
Petient.prototype.setPhoneNumber = function(phoneNumber){
	this.phoneNumber = phoneNumber;
}
//------------------------------------------------------
Petient.prototype.getAddress = function(){
	return this.address;
}
Petient.prototype.setAddress = function(address){
	this.address = address;
}
//------------------------------------------------------
Petient.prototype.toString = function(){
	return 'patientNumber : ' + this.patientNumber +
	'petientName : ' + this.petientName + 
	'disName : ' + this.disName +
	'ssNumber : ' + this.ssNumber +
	'phoneNumber : ' + this.phoneNumber +
	'address : ' + this.address ;
}

//쿼리문
//======================================================
//--치료 진행
//---
petient.prototype.acptBooking = function(){
	console.log('예약이 접수되었습니다.');
}
//---
//---
//---
//---







