/**
 * 
 */


//의사 생성

var doctor = [];
doctor.push(new Doctor('01', '안성호', '123456-1234567', 'so7247@naver.com', '서울시 종로구 평창동', '정신과'));
doctor.push(new Doctor('02', '이요한', '123456-1234567', 'safxza@naver.com', '서울시 강남구 ', '성형외과'));
doctor.push(new Doctor('03', '이문규', '123456-1234567', 'sqweq@naver.com', '서울시 구로구 고척동', '외과'));
              



console.log('--------------------------------------------------------------');
doctor.forEach(function(num){
	   console.log('<의사 정보> \n'+ num);
	   console.log('--------------------------------------------------------------');
	});


//환자 생성
var petient = [];
petient.push(new Petient('p01', '정봉준', '과로', '123456-1234567', '010-1234-4567', '서울시'));
petient.push(new Petient('p02', '김한울', '식도염', '123456-1234567', '010-1234-4567', '서울시'));
petient.push(new Petient('p03', '원상진', '화상', '123456-1234567', '010-1234-4567', '서울시'));
               
console.log('--------------------------------------------------------------');
petient.forEach(function(num){
	console.log('<환자 정보> \n'+ num);
	console.log('--------------------------------------------------------------');
});

////진료 생성
//var treat = [];
//treat.push(new Treat('t01', '비타민, 피로회복제', '과로로 쓰러져 실려옴', '안성호', '정봉준'));
//treat.push(new Treat('t02', '진통제, 알러지약, 빨간약', '목이 아픔', '이문규', '김한울'));
//treat.push(new Treat('t03', '진통제, 성형수술, 잘생김', '얼굴화상', '이요한', '원상진'));
//
//console.log('--------------------------------------------------------------');
//treat.forEach(function(num){
//	console.log('<진료 정보> \n'+ num);
//	console.log('--------------------------------------------------------------');
//});

console.log(petient[0].inHospital());
console.log(doctor[0].treat(petient[0]));




















