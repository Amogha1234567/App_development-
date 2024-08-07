import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Popconfirm } from 'antd';
//import './CourseManagement.css';
import '../../Assets/CSS/Course.css';

const initialCourses = [
  { key: 1, name: 'AI', description: 'Ongoing', instructor: 'Alex', syllabusLink: 'https://kct.ac.in/wp-content/uploads/2021/07/2021-B.TechAI-DS-Curriculum.pdf' },
  { key: 2, name: 'ML', description: 'Ongoing', instructor: 'Ram', syllabusLink: 'https://example.com/ml_syllabus.pdf' },
  { key: 3, name: 'IOT', description: 'Ongoing', instructor: 'Sibi', syllabusLink: 'https://example.com/iot_syllabus.pdf' },
];

const Course = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const [form] = Form.useForm();

  const handleAddCourse = () => {
    form.validateFields().then(values => {
      if (isEditing) {
        setCourses(courses.map(course => (course.key === editingCourse.key ? { ...editingCourse, ...values } : course)));
        setIsEditing(false);
        setEditingCourse(null);
      } else {
        setCourses([...courses, { key: Date.now(), ...values }]);
      }
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleEditCourse = course => {
    setIsEditing(true);
    setEditingCourse(course);
    form.setFieldsValue(course);
    setIsModalVisible(true);
  };

  const handleDeleteCourse = key => {
    setCourses(courses.filter(course => course.key !== key));
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Instructor', dataIndex: 'instructor', key: 'instructor' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => handleEditCourse(record)} style={{ marginRight: 8 }}>Edit</Button>
          <Popconfirm title="Are you sure?" onConfirm={() => handleDeleteCourse(record.key)}>
            <Button type="primary" danger>Delete</Button>
          </Popconfirm>
          <Button onClick={() => window.open(record.syllabusLink, '_blank')} style={{ marginLeft: 8 }}>View Syllabus</Button>
        </>
      ),
    },
  ];

  return (
    <div className="course-management">
      <Button type="primary" onClick={() => setIsModalVisible(true)}>Add Course</Button>
      <Table columns={columns} dataSource={courses} style={{ marginTop: 20 }} />
      <Modal
        title={isEditing ? 'Edit Course' : 'Add Course'}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleAddCourse}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="instructor" label="Instructor" rules={[{ required: true, message: 'Please input the instructor!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Course;
