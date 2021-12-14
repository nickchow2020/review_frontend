import { Form, Input, Button } from 'antd';
import {useNavigate} from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, {useContext} from "react";
import UserContext from "../context/userContext";
import "./LoginForm.css";

const NormalLoginForm = () => {
  const {login} = useContext(UserContext);

  const history = useNavigate();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const isAuth  = await login(values);
    if(isAuth){
      history("/");
    };
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm