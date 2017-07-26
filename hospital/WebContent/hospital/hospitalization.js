/**
 * aaaaa
 */


function Hospitalization(hospitalizationNumber, hospitalizationDate, dischargeDate, patientNumber, treatNumber){ //입원
	this.hospitalizationNumber = hospitalizationNumber;	//입원번호
	this.hospitalizationDate = hospitalizationDate;	//입원일
	this.dischargeDate = dischargeDate;	//퇴원일
	Petient.call(this, patientNumber);	//환자번호
	Treat.call(this, treatNumber);	//진료번호
}

Hospitalization.prototype = new Petient();
Hospitalization.prototype = new Treat();


Hospitalization.prototype.setHospitalizationNumber = function(hospitalizationNumber){
	this.hospitalizationNumber = hospitalizationNumber;
};
Hospitalization.prototype.getHospitalizationNumber = function(){
	return this.hospitalizationNumber;
};

Hospitalization.prototype.setHospitalizationDate = function(hospitalizationDate){
	this.inscription = hospitalizationDate;
};
Hospitalization.prototype.getHospitalizationDate = function(){
	return this.hospitalizationDate;
};

Hospitalization.prototype.setDischargeDate = function(dischargeDate){
	this.dischargeDate = dischargeDate;
};
Hospitalization.prototype.getDischargeDate = function(){
	return this.dischargeDate;
};



Hospitalization.prototype.toString = function(){
	return 'hospitalizationNumber : ' + this.hospitalizationNumber
	+', hospitalizationDate : ' + this.hospitalizationDate + ', dischargeDate : ' + this.dischargeDate
	+', patientNumber : ' + this.patientNumber + ', treatNumber : ' + this.treatNumber;
};
