import styled from "styled-components";
import { Form } from 'antd';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191816;
  height: 100vh;

  .SideImg {
    position: absolute;
    height: 100%;
    left: 1114px;
    top: 0px;
  }

  .logo {
    display: flex;
    position: absolute;
    gap: 10px;
    top: 30px;
    left: 40px;
    justify-self: flex-start;
  }

  @media (max-width: 1200px) {
    .SideImg {
      display: none;
    }
  } 
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24221F;
  width: 700px;
  height: 650px;
  position: absolute;
  left: 200px;
  border-radius: 4px;
`

export const Container = styled.div`
  position: absolute;
  width: 334px;
  height: 64px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .login {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
    color: #D4CCB6;
  }

  .info{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #AFB6C2;
  }

  .senha{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #FFC632;
  }

  .registro {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #FFC632;
  }
`;

export const FormStyled = styled(Form)`
   label{
    color: #AFB6C2;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    }
    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
    color: #AFB6C2;
    }

  .ant-form-item{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

input {
  width: 335px;
  height: 44px;
  background-color: transparent !important;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #868686;
  color: white;
}
Button {
  width: 100%;
  background-color: #FFC632;
  color: #473404;
  border: #FFC632;
  padding: 12px 24px;
  width: 334px;
  height: 51px;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

}

.ant-form-item-control-input-content {
  display: flex;
  justify-content: space-between;
  color: #FFC632;
}

svg {
  color: white;
}

.oeZgC input {
  color: #473404;
  height: 100px;
  width: 100px;
}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #473404;
  border-color: #473404;
}

.ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: #473404;
}

.ant-checkbox-checked::after {
  border: 1px solid #473404;
}

.ant-btn-primary:hover, .ant-btn-primary:focus {
  color: white;
  background-color: #473404;
}

.ant-input-affix-wrapper:not(.ant-input-aflix-wrapper-disabled):hover {
  border-color: #FFC632;
}

`



