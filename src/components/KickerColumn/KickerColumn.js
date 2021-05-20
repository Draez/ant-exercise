import React, {useEffect, useState } from 'react';
import { Space, Skeleton, Image } from 'antd';
import { Blurhash } from "react-blurhash";

import Typography from '@namia/typography';



const StackedColumns = ({title, text}) => {
    const [small, setSmall] = useState('small');
    const [medium, setMedium] = useState('middle');
    const [large, setLarge] = useState('large');
    const [loading, setLoading] = useState(true);

    setInterval(() => {
        setLoading(false)
    }, 3000);
    return (
        <>
            <Space direction="vertical" size={large}>
                <Space direction="vertical" size={medium}>
                    {loading ?
                    <>
                      <Blurhash
                            hash="LXG8N}M|R%j[xgR%jYj[J8jqoJf6"
                            width={"100%"}
                            height={165}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                            />
                        <Skeleton />
                    </>
                    :
                    <>
                        <Image placeholder="true" preview={false} src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="hieno" />
                
                    
                        <Space direction="vertical" size={small}>
                        <Typography type="headline" elementType="h2" size="3">
                        {title}
                        </Typography>

                        <Typography type="regular" elementType="p" size="1">
                        {text}
                        </Typography>
                        </Space>
                        </>
                     }
                </Space>
            </Space>
        </>
    )
}

export default StackedColumns;