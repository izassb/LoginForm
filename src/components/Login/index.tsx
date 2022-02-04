import React from "react";
import { Background, Container, FormStyled, LoginBox } from "./style";
import { Form, Input, Button, Checkbox } from 'antd';
import {
  LoginIn,
  SideImg, 
  Logo
} from '../../Assets'

export const Login = () => {
  return (
    <Background>
      <img className="logo" src={Logo} alt="" />
      <LoginBox>
        <Container>
          <div className="login">
          <img src={LoginIn} alt="login" />  
          Faça seu login
          </div>
          <div className="info">
            Entre com suas informações de cadastro 
          </div>
          <FormStyled>
            <br></br>
            <Form.Item
              label="E-mail"
              rules={
                [{
                  required: true,
                  message: 'Campo obrigatório'
                }]
              }
            >
              <Input/>
            </Form.Item>
            <Form.Item  
              label="Senha"
              rules={
                [{
                  required: true,
                  message: 'Campo obrigatório'
                }]
              }
            >
            <Input></Input>
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>
                Lembre-me
              </Checkbox>
              <div className="senha">
              Esqueci minha senha
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                ENTRAR
              </Button>
            </Form.Item>
          </FormStyled>
          <div className="registro">
            Não tem uma conta? Registre-se
          </div>
        </Container>
      </LoginBox>
      <img className="SideImg" src={SideImg} alt="" />
    </Background>
  )
}