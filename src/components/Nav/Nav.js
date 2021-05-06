import React, {useState} from 'react'
import { Divider, Col, Space, Tooltip, Modal } from "antd";
import Typography from "@namia/typography";
import Logo from "./../../images/demo.svg";
import colors from './../../colors';
import Button from "./../AntComponents/Button/Button"
import Input from "./../AntComponents/Input/Input"

const Nav = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <>
            <Space direction="horizontal" size='large'>

                <Col xs={24} md={8}>
                    <Space direction="horizontal" size='large'>
                        <Tooltip placement="bottom" title="Alueuutiset">
                            <Button type="default" size="medium">Alueet</Button>
                        </Tooltip>
                        <Tooltip placement="bottom" title="På svenska">
                            <Button type="default" size="medium">Arbetarbladet</Button>
                        </Tooltip>
                    </Space>
                </Col>

                <Col xs={24} md={8}>
                    <img src={Logo} />
                </Col>

                <Col xs={24} md={8}>
                    <Space direction="horizontal" size='large'>
                        <Tooltip placement="bottom" title="Tilaajat">
                            <Button type="default" size="medium">Kirjaudu</Button>
                        </Tooltip>
                        <Button type="primary" size='medium' onClick={showModal}>
                            Tilaa lehti
                        </Button>
                        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <Typography elementType="h3" size="4" type="headline">
                                Kirjaudu
                            </Typography>
                            <Divider type="horizontal" style={{ backgroundColor: colors.gray04 }} />
                            <Space direction="vertical" size='small'>
                                <Typography elementType="p" size="1" type="regular">
                                    Kirjaudu
                                </Typography>
                                <Input placeholder="Basic usage" size="large" />
                            </Space>
                            
                        </Modal>
                      
                    </Space>
    
                </Col>
                   
            </Space>
        </>
    )
}

export default Nav;
