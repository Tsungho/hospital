/**=
 * 환자
*/

function Petient(patientNumber, petientName, disName, ssNumber, phoneNumber, address){
	this.patientNumber = patientNumber;//환자번호
	this.petientName = petientName;//환자이름
	this.disName = disName;//병명
	this.ssNumber = ssNumber;//주민번호
	this.phoneNumber = phoneNumber;//전화번호
	this.address = address;//주소

}

//겟터 섹터 ==================================================
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
//행동메소드
Petient.prototype.inHospital = function(){
	return this.petientName + '님이 병원에 들어오셨습니다.';
}









Petient.prototype.toString = function(){
	return '환자번호 : ' + this.patientNumber +
	'\n이름 : ' + this.petientName + 
	'\n병명 : ' + this.disName +
	'\n주민번호 : ' + this.ssNumber +
	'\n전화번호 : ' + this.phoneNumber +
	'\n주소 : ' + this.address ;
}