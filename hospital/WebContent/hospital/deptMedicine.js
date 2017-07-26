/**= 성호
 * 진료과
 */


function DeptMedicine(deptNo, deptName, callNumber){
	this.deptNo = deptNo;	//진료과 번호
	this.deptName = deptName;//진료과
	this.callNumber = callNumber;//전화번호
}

DeptMedicine.prototype.setDeptNo = function(deptNo){
	this.deptNo = deptNo;
}
DeptMedicine.prototype.getDeptNo = function(){
	return this.deptNo;
}

DeptMedicine.prototype.setDeptName = function(deptName){
	this.deptName = deptName;
}
DeptMedicine.prototype.getDeptName = function(){
	return this.deptName;
}

DeptMedicine.prototype.setCallNumber = function(callNumber){
	this.callNumber = callNumber;
}
DeptMedicine.prototype.getCallNumber = function(){
	return this.callNumber;
}

DeptMedicine.prototype.toString = function(){
	console.log('[ deptNo : ' + this.deptNo + ', deptName : ' + this.deptName
			+ ', callNumber : ' + this.callNumber + ' ]');
}