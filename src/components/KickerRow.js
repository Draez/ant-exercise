import { Col, Grid, Image, Row, Space } from "antd";
import Typography from "@namia/typography";


const KickerRow = props => {
  const { title, text } = props;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const { md } = screens;
  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 32, lg: 48 }]}>
      <Col xs={24} md={12} order={md ? 1 : 2}>
        <Space size="small" direction="vertical">
          <Typography elementType="h4" size="4" type="headline" weight="600">
            {title}
          </Typography>
          <Typography elementType="p" size="1" type="regular">
            {text}
          </Typography>
        </Space>
      </Col>
      <Col xs={24} md={12} order={md ? 2 : 1}>
        <Space size="small" direction="horizontal">
          <Image src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
        </Space>
      </Col>
    </Row>
  );
};

export default KickerRow;
