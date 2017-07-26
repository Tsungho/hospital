/**= 성호
 * 의사
 */


function Doctor(doctorNumber, doctorName, ssNumber, eMail, address, deptNo){
	this.doctorNumber = doctorNumber;
	this.doctorName = doctorName;
	this.ssNumber = ssNumber;
	this.eMail = eMail;
	this.address = address;
	DeptMedicine.call(this, deptNo);
}

Doctor.prototype = new DeptMedicine();


Doctor.prototype.setDoctorNumber = function(doctorNumber){
	this.doctorNumber = doctorNumber;
}
Doctor.prototype.getDoctorNumber = function(){
	return this.doctorNumber;
}

Doctor.prototype.setDeptName = function(deptName){
	this.deptName = deptName;
}
Doctor.prototype.getDeptName = function(){
	return this.deptName;
}

Doctor.prototype.setSsNumber = function(ssNumber){
	this.ssNumber = ssNumber;
}
Doctor.prototype.getSsNumber = function(){
	return this.ssNumber;
}

Doctor.prototype.setEMail = function(eMail){
	this.eMail = eMail;
}
Doctor.prototype.getEMail = function(){
	return this.eMail;
}

Doctor.prototype.setAddress = function(address){
	this.address = address;
}
Doctor.prototype.getAddress = function(){
	return this.address;
}

Doctor.prototype.toString = function(){
	return '의사번호 : ' + this.doctorNumber
	+'\n이름 : ' + this.doctorName + '\n주민번호 : ' + this.ssNumber
	+'\neMail : ' + this.eMail + '\n주소 : ' + this.address + '\n진료과 : ' + this.deptNo;
};
