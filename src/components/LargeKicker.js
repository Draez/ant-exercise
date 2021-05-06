import React, { useState } from 'react';
import { Space } from 'antd';
import Typography from '@namia/typography';

const LargeKicker = () => {
    const [small, setSmall] = useState('small');
    const [medium, setMedium] = useState('middle');
    const [large, setLarge] = useState('large');

    return (
        <>
            <Space direction="vertical" size={medium}>
                <div className="placeholder">
                  <img src="https://www.euractiv.com/wp-content/uploads/sites/2/2019/07/UVDL_presser_10July2019-800x450.jpg" alt="hieno"/>
                </div>
                
                <Space direction="vertical" size={small}>
                  <Typography type="headline" elementType="h2" size="6" weight="600">
                    Komission puheenjohtaja: ”EU käy läpi vaihtoehtoja, jotta voimme nopeasti vastata Intian avunpyyntöön”
                  </Typography>

                  <Typography type="regular" elementType="p" size="1">
                    ULKOMAAT 25.4.2021 17:02
                  </Typography>
                </Space>
            </Space>
        </>
    )
}

export default LargeKicker;
