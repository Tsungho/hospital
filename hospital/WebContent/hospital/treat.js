/**aaaaa
 * 
 */

function Treat(treatNumber, inscription, treatcontent, doctorNumber, patientNumber){  //진료
	this.treatNumber = treatNumber;	//진료번호
	this.inscription = inscription;	//처방내용
	this.treatcontent = treatcontent;	//진료내용
	Doctor.call(this, doctorNumber);//의사번호
	Petient.call(this, patientNumber);//환자번호
}

Treat.prototype.setTreatNumber = function(treatNumber){
	this.treatNumber = treatNumber;
};
Treat.prototype.getTreatNumber = function(){
	return this.treatNumber;
};

Treat.prototype.setInscription = function(inscription){
	this.inscription = inscription;
};
Treat.prototype.getInscription = function(){
	return this.inscription;
};

Treat.prototype.setTreatcontent = function(treatcontent){
	this.treatcontent = treatcontent;
};
Treat.prototype.getTreatcontent = function(){
	return this.treatcontent;
};


Treat.prototype.toString = function(){
	return 'treatNumber : ' + this.treatNumber
	+', inscription : ' + this.inscription + ', treatcontent : ' + this.treatcontent
	+', doctorNumber : ' + this.doctorNumber + ', patientNumber : ' + this.patientNumber;
};

