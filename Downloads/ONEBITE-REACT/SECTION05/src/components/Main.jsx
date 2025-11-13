import "./Main.css";


const Main = () => {
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 조건문같은거 못쓴다.
// 2. 숫자, 문자열, 배열 값만 랜더링한다. 불리언 x, 객체도 그냥 적으면 안된다.
// 3. 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.



  const user = {
    name: "목",
    isLogin: true
  };


  if(user.isLogin){
    return <div className="logout" >로그아웃</div>
  }else{
    return <div>로그인</div>
  }





  // return (
  // <>
  // {user.isLogin ? (
  //   <div>로그아웃</div>
  // ) : (
  //   <div>로그인</div>
  // )}
  // </>
  // )
}

export default Main;