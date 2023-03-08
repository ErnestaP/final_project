import React, { useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { addEmployee } from "api/actions";

const Add: React.FC = () => {
  const [addedEmployee, setAddedEmployee] = useState({name: "", surname: ""});
  const onFinish = (values: any) => {
    addEmployee(values);
    setAddedEmployee(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Surname"
        name="surname"
        rules={[{ required: true, message: "Please input surname!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {addedEmployee &&
        <Row > <Col  style={{color: "green", padding: "12px"}}>The employee {addedEmployee.name} {addedEmployee.surname} was added!</Col></Row>}
      </Form.Item>
    </Form>
  );
};
export default Add;
