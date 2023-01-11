# Wetube Reloaded

## 주소: https://wetube-hyeongjun.herokuapp.com/

## 사용 라이브러리

- js 런타임 - node.js
- 웹 프레임워크 - express.js
- js ES6 문법 컴파일 - Babel

- 데이터베이스 - MongoDB
- 미디어 저장소 - AWS S3 Bucket
- HTML 템프릿 엔진 - pug

---

### api 설계

/ -> Home <br>
/join -> Join <br>
/login -> Login <br>
/search -> Search <br>
<br> <br>
/users/:id -> See user <br>
/users/logout -> Log Out <br>
/users/edit -> Edit MY Profile<br>
/users/delete -> Delete MY user <br>
<br><br>
/videos/:id -> Watch Video<br>
/videos/:id/edit -> Edit Video<br>
/videos/:id/delete -> Delete Video<br>
/videos/upload -> Upload Video<br>
