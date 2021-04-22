
import React, { useState } from 'react';
import { Divider, Space } from 'antd';

import Typography from '@namia/typography';
import { GRAY_04 } from './../constants';

 
const List = () => {
    const [small, setSmall] = useState('small');
  
    return (
        <>
            <Space direction="horizontal" size={small}>
                <div className="wrap-line">
                    <Typography type="regular" elementType="h3" size="2">
                        Kicker column 01a
                    </Typography>
                    <Typography type="regular" elementType="p" size="1">
                    01 - xl / Regular / 12px | 20px
                    </Typography>
                </div>
                
               <img src="https://png.pngitem.com/pimgs/s/47-470465_deco-sun-png-picture-transparent-happy-sun-png.png" alt="aurinko" width="47px" height="47px" />
            </Space>
            <Divider type="horizontal" style={{ backgroundColor: GRAY_04 }} />
        </>
    )
}

export default List;