import styled, { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap');
`;



export default function NavBar(){
    return(
        <>
        <FontStyles/>
        <Logo>
            <img src="https://s3-alpha-sig.figma.com/img/a320/d762/672523591ef2f811a382ae5c89e262c0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D4BmiOmDeME3nTLIAJEXXxfIPVhLX91iWlbeqnIdW905en8BS0EyIPvUti5xccFeQe4CnKyy9GehwDUmcHhXabFlD3-sJKDfVRYIExgGwfo7wo1TG-CD6dFVrPEdRoB~VBR7KQalBOZcbcAPGo5~cCQanCSbutN-FtWN5Uzr5L4TZYYxnffHSlXeB6jlMfh5qyTOHqgRrD-Z4RVUyPtd7wMvkGQl78W3dqpDZuGv6wfB0VfnznXPydOrfSZt4eDbkEfJv0hL96u7BWUXKAQYNykRXLyJNYRilqHaqggr~6169UO~9VUGVsSezasBDbNdnICLfVlRB0njOuWo-y97Rg__"/>
            CineFlex
        </Logo>
        </>
    )
}

const Logo=styled.div`
width: 100%;
height: 67px;
margin-left:0px;
display:flex;
font-family: 'Raleway', sans-serif;
align-items:center;
justify-content: center;
background: #EE897F;
position: fixed;
top: 0;
color: #FADBC5;
font-size: 34px;
img{
width: 40px;
margin-right: 10px;
margin-left: 0px;
height: 40px;
top: 11px;
left: 96px;

}
`
