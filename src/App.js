import React, { useState } from 'react';
import './App.css';
import { Grid, Row, Col, Divider, Space } from 'antd';

import { ROW_GUTTER, GRAY_04 } from './constants';
import List from './components/List';
import StackedColumns from './components/StackedColumns';
import LargeColumn from './components/LargeColumn';

const { useBreakpoint } = Grid;

function App() {
  const screens = useBreakpoint();
  console.log(screens);
  return (
    <div className="ant-design-wrapper">
      <Row gutter={[ROW_GUTTER, ROW_GUTTER]}>
        <Col xs={20} offset={2}>
          <Row>
            <Col md={6} sm={24} xs={24}>
              <StackedColumns />
            </Col>
           
            <Col xs={24} md={1} style={{ textAlign:"center" }}>
              <Divider type="vertical" style={{ height: "100%", backgroundColor: GRAY_04 }} />
            </Col>
           
            <Col md={10} sm={24} xs={24}>
              <LargeColumn />
            </Col>

            <Col xs={24} md={1} style={{ textAlign:"center" }}>
              <Divider type="vertical" style={{ height: "100%", backgroundColor: GRAY_04 }} />
            </Col>

            <Col md={6} sm={24} xs={24}>
              <List />
              <List />
              <List />
            </Col>

          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
