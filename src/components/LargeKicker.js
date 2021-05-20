import React, { useState } from 'react';
import { Space, Skeleton, Result, Button } from 'antd';
import Typography from '@namia/typography';
import { Blurhash } from "react-blurhash";

const LargeKicker = ({showWarning}) => {
    const [small, setSmall] = useState('small');
    const [medium, setMedium] = useState('middle');
    const [large, setLarge] = useState('large');
    const [loading, setLoading] = useState(true);

    setInterval(() => {
        setLoading(false)
    }, 3000);



    const reloadPage = () => {
      window.location.reload()
    }

    return (
        <>
        { showWarning === 1 ? 
            <Result
              status="warning"
              title="Missing article"
              subTitle="Something went wrong and we couldn’t fetch the article"
              extra={
                <Button type="primary" key="console" onClick={reloadPage}>
                 Try to reload
                </Button>
              }
            />
              : 
            <Space direction="vertical" size={medium}>
              {loading ? 
            <>
                      <Blurhash
                            hash="LXG8N}M|R%j[xgR%jYj[J8jqoJf6"
                            width={"100%"}
                            height={321}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                            />
                        <Skeleton active>
                        
                        </Skeleton>
                    </>
              :
              <>
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
                </>
              }
            </Space>
          }
        </>
    )
}

export default LargeKicker;
