// src/components/UserManagement.js

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Popconfirm } from 'antd';
import '../../Assets/CSS/User.css';

const initialUsers = [
  { key: 1, name: 'Alex', email: 'alex@example.com', role: 'Admin' },
  { key: 2, name: 'John', email: 'john@example.com', role: 'User' },
];

const User = () => {
  const [users, setUsers] = useState(initialUsers);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [form] = Form.useForm();

  const handleAddUser = () => {
    form.validateFields().then(values => {
      if (isEditing) {
        setUsers(users.map(user => (user.key === editingUser.key ? { ...editingUser, ...values } : user)));
        setIsEditing(false);
        setEditingUser(null);
      } else {
        setUsers([...users, { key: Date.now(), ...values }]);
      }
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleEditUser = user => {
    setIsEditing(true);
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsModalVisible(true);
  };

  const handleDeleteUser = key => {
    setUsers(users.filter(user => user.key !== key));
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => handleEditUser(record)} style={{ marginRight: 8 }}>Edit</Button>
          <Popconfirm title="Are you sure?" onConfirm={() => handleDeleteUser(record.key)}>
            <Button type="primary" danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>Add User</Button>
      <Table columns={columns} dataSource={users} style={{ marginTop: 20 }} />
      <Modal
        title={isEditing ? 'Edit User' : 'Add User'}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleAddUser}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input the email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true, message: 'Please input the role!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default User;
