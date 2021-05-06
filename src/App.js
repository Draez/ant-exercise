import React, { useState } from 'react';
import './App.css';
import { Row, Col, Divider, Space } from 'antd';

import { ROW_GUTTER, GRAY_04 } from './constants';
import colors from './colors';
import List from './components/List';
import LargeKicker from './components/LargeKicker';
import KickerColumn from './components/KickerColumn/KickerColumn';
import KickerRow from './components/KickerRow';
import Nav from './components/Nav/Nav';

function App() {

  return (
    <div className="ant-design-wrapper">

      <Row gutter={[ROW_GUTTER, ROW_GUTTER]} align="center">
        <Col md={22}>
          <Row gutter={[ROW_GUTTER, ROW_GUTTER]}>
            <Nav />
            <Divider type="horizontal" style={{ height: "100%", backgroundColor: colors.gray05 }} />
          </Row>
        </Col>
      

        <Col md={5} sm={22} xs={22}>
          <Space size="large" direction="vertical">
            <KickerColumn title="Kicker 01" text="Paragraph text" />
            <KickerColumn title="Kicker 02" text="Paragraph text" />
          </Space>
        
        </Col>
        
        <Col xs={24} md={1} style={{ textAlign:"center" }}>
          <Divider type="vertical" style={{ height: "100%", backgroundColor: GRAY_04 }} />
        </Col>
        
        <Col md={10} sm={22} xs={22}>
          <LargeKicker />
        </Col>

        <Col xs={24} md={1} style={{ textAlign:"center" }}>
          <Divider type="vertical" style={{ height: "100%", backgroundColor: GRAY_04 }} />
        </Col>

        <Col md={5} sm={22} xs={22}>
          <List />
          <List />
          <List />
        </Col>

        <Col xs={22} order={2}>
            <Divider />
            <Space size="large" direction="vertical">
              <Row gutter={[{ xs: 8, sm: 16, md: 32, lg: 48 }]}>
                <Col xs={12} md={6}>
                  <KickerColumn title="Kicker 02a" text="Paragraph text" />
                </Col>
                <Col xs={12} md={6}>
                  <KickerColumn title="Kicker 02b" text="Paragraph text" />
                </Col>
                <Col xs={12} md={6}>
                  <KickerColumn title="Kicker 02c" text="Paragraph text" />
                </Col>
                <Col xs={12} md={6}>
                  <KickerColumn title="Kicker 02d" text="Paragraph text" />
                  
                </Col>
              </Row>

              <Row gutter={[ROW_GUTTER, ROW_GUTTER]}>
                <Col xs={24} md={12}>
                  <KickerRow title="Kicker 03" text="Paragraph text" />
                </Col>
                <Col xs={24} md={6}>
                  <List />
                </Col>
                <Col xs={24} md={6}>
                  <List />
                </Col>
              </Row>
            </Space>
          </Col>
          <Col xs={22} order={2}>
            <Divider />
          </Col>
      </Row>
    </div>
  );
}

export default App;
