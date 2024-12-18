const Main = () => {
    const user = {
        name: '바키',
        isLogin: false,
    }
    if (user.isLogin) {
        return <div style={{backgroundColor: "red"}}>로그아웃</div>
    } else {
        return <div>로그인</div>
    }


}

export default Main