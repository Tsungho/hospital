﻿/**=
 * 환자
*/

function Petient(petientNo, petientName, disName, ssNumber, phoneNumber, address){
petientNo = petientNo;//환자번호
petientName = petientName;//환자이름
disName = disName;//병명
ssNumber = ssNumber;//주민번호
phoneNumber = phoneNumber;//전화번호
address = address;//주소

}

Petient.prototype.getPetientNo = function(){return this.petientNo;}
Petient.prototype.setPetientNo = function(petientNo){this.petientNo = petientNo;}
//------------------------------------------------------
Petient.prototype.getPetientName = function(){return this.petientName;}
Petient.prototype.setPetientName = function(petientName){this.petientName = petientName;}
//------------------------------------------------------
Petient.prototype.getDisName = function(){return this.disName;}
Petient.prototype.setDisName = function(disName){this.disName = disName;}
//------------------------------------------------------
Petient.prototype.getSsNumber = function(){return this.ssNumber;}
Petient.prototype.setSsNumber = function(ssNumber){this.ssNumber = ssNumber;}
//------------------------------------------------------
Petient.prototype.getPhoneNumber = function(){return this.phoneNumber;}
Petient.prototype.setPhoneNumber = function(phoneNumber){this.phoneNumber = phoneNumber;}
//------------------------------------------------------
Petient.prototype.getAddress = function(){return this.address;}
Petient.prototype.setAddress = function(address){this.address = address;}
//------------------------------------------------------
Petient.prototype.toString = function(){return 'petientNo : ' + this.petientNo +
											   'petientName : ' + this.petientName + 
											   'disName : ' + this.disName +
											   'ssNumber : ' + this.ssNumber +
											   'phoneNumber : ' + this.phoneNumber +
											   'address : ' + this.address ;
}