import React, { useState } from 'react';
import { Space } from 'antd';

import Typography from '@namia/typography';

const StackedColumns = ({title,text }) => {
    const [small, setSmall] = useState('small');
    const [medium, setMedium] = useState('middle');
    const [large, setLarge] = useState('large');

    return (
        <>
            <Space direction="vertical" size={large}>
                <Space direction="vertical" size={medium}>
                    <div className="placeholder">
                    <img src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="hieno" />
                    </div>
                    
                    <Space direction="vertical" size={small}>
                    <Typography type="headline" elementType="h2" size="3">
                       {title}
                    </Typography>

                    <Typography type="regular" elementType="p" size="1">
                       {text}
                    </Typography>
                    </Space>
                </Space>
            </Space>
        </>
    )
}

export default StackedColumns;