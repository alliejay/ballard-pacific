import React from 'react';
import { STATES } from '../../constants/forms';
import { Form, Input, Button, DatePicker, Select } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};

const Warranty = () => {
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
        label="Street Address"
        name="address"
        rules={[{ required: true, message: 'Address is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: 'City is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="State"
        name="state"
        rules={[{ required: true, message: 'State is required' }]}
      >
        <Select options={STATES} placeholder="Select State" />
      </Form.Item>

      <Form.Item
        label="Zip Code"
        name="zipCode"
        rules={[{ required: true, message: 'Zip code is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Order Number"
        name="orderNumber"
        rules={[{ required: true, message: 'Order Number is required' }]}
      >
        <Input placeholder="Online Order Number or In-Store TC Number (can be found on receipt)" />
      </Form.Item>

      <Form.Item
        label="Date of Purchase"
        name="date"
        rules={[{ required: true, message: 'Date of Purchase is required' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Serial Number"
        name="serialNumber"
        rules={[{ required: true, message: 'Serial Number is required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Warranty;