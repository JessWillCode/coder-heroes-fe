import React from 'react';
import { Row, Col, Typography, Layout } from 'antd';
import '../../../styles/index.less';

const { Content } = Layout;
const { Title, Text } = Typography;

const HowItWorks = () => {
  return (
    <Layout className="instuctor-landing-mid">
      <Content className="instructor-landing-mid-content">
        <Row gutter={6}>
          <Col span={24}>
            <Title style={{ color: 'white', fontSize: '3.4rem' }}>
              HOW CODERHEROES WORKS
            </Title>
          </Col>
        </Row>
        <Row gutter={6}>
          <Col span={8}>
            <div className="instructor-landing-mid-info">
              <div className="info-circle-icon3">1</div>
              <Title level={4} style={{ fontSize: '1.1rem', color: 'white' }}>
                WHAT KIND OF HELP DO YOU NEED?
              </Title>
              <div className="info-circle-icon2">
                {/* <StudentIcon style={{ color: 'white', fontSize: 100 }} /> */}
              </div>

              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                We believe all students deserve to have access to quality
                instructors that teach code and lifelong skills. We put students
                at the forefront of our mission.
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="instructor-landing-mid-info">
              <div className="info-circle-icon3">2</div>
              <Title level={4} style={{ color: 'white' }}>
                FIND AN INSTRUCTOR
              </Title>
              <div className="info-circle-icon2">
                {/* <TeacherIcon style={{ color: 'white', fontSize: 100 }} /> */}
              </div>

              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Our super tutors offer quality instruction at a wide variety of
                skill sets, age ranges, and formats. We make coding fun!
              </Text>
            </div>
          </Col>
          <Col span={8}>
            <div className="instructor-landing-mid-info">
              <div className="info-circle-icon3">3</div>
              <Title level={4} style={{ color: 'white' }}>
                LEARN AT A LESSON
              </Title>
              <div className="info-circle-icon2">
                {/* <CalendarIcon style={{ color: 'white', fontSize: 100 }} /> */}
              </div>

              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Online tutors are available to help your student receive
                guidance to fit your schedule and preferences.
              </Text>
            </div>
          </Col>
        </Row>
        <Row gutter={6}>
          <Col span={8}>
            <button className="custom-btn2">BROWSE INSTRUCTORS</button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HowItWorks;
