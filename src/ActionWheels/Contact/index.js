import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};

const Contact = (props) => {
  const [ form ] = Form.useForm();

  const onFinish = values => {
    // const body = JSON.stringify(values);
    // fetch('http://localhost:5000/send', {
    //   method: "POST",
    //   body,
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    // }).then(
    //   (response) => (response.json())
    // ).then((response)=> {
    //   if (response.status === 'success') {
    //     alert("Message Sent.");
    //     form.resetFields()
    //   } else if(response.status === 'fail') {
    //     alert("Message failed to send.")
    //   }
    // })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      id="contact-form"
      method="POST"
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="First & Last Name"
        name="name"
        rules={[{ required: true, message: 'Name is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="email"
        rules={[{ required: true, message: 'Email Address is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'A message is required' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Contact;