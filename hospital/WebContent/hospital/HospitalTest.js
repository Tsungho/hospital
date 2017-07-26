/**
 * 
 */


//의사 생성

var docter = [
              new Doctor('01', '안성호', '123456-1234567', 'so7247@naver.com', '서울시 종로구 평창동', '정신과')
              ,new Doctor('02', '이요한', '123456-1234567', 'safxza@naver.com', '서울시 강남구 ', '성형외과')
              ,new Doctor('03', '이문규', '123456-1234567', 'sqweq@naver.com', '서울시 구로구 고척동', '외과')
              ]
docter.forEach(function(num){
	   console.log('ab function : ' + num);
	});

var petient = [];
petient.push(new Petient('p01', '정봉준', '과로', '123456-1234567', '010-1234-4567', '서울시'));
petient.push(new Petient('p02', '김한울', '식도염', '123456-1234567', '010-1234-4567', '서울시'));
petient.push(new Petient('p03', '원상진', '교통사고', '123456-1234567', '010-1234-4567', '서울시'));
               
petient.forEach(function(num){
	console.log('ab function : ' + num);
});




























