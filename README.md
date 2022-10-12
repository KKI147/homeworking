폴더구조

layout - 최대값, 최소값을 잡기위한 component // 그런데 style 박살남

Header - 머리
Form - input 구현하는곳 store에서 initialState 값 최초로 받아오는 곳
List - form에서 받은 정보값 prop 으로 받아서 map으로 배열 생성
Todo - list에 표시되는 세부 기능구현 dispatch로 action creator 받아서 기능 구현

Modules - initialState값 저장소, Todo에서 필요한 기능구현하기 위해 action creator함수 생성

pages - 라우터 페이지 파일
TotlaList - 메인 페이지
page - todo에서 params로 id 값 가져온다음 store에서 객체값 가져오고 todo의 내용 을 id에 맞게 표시해주
