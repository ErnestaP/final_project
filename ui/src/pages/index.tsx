import { useEffect, useState } from "react";
import { Button, Row, Space, Col } from "antd";

const Home: any = ({ data }) => {
  const [retroMaster, setRetroMaster] = useState(undefined);

  const chooseRandomRestroMaster = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  };

  useEffect(() => {}, [retroMaster]);

  if (data) {
    return (
      <Space>
        <Row>
        </Row>
        <Row>
          <Col span={12} offset={6} xs={6}>
            <Button
              onClick={() => {
                const retroMaster_ = chooseRandomRestroMaster(data).name;
                setRetroMaster(retroMaster_);
              }}
            >
              START
            </Button>
          </Col>
          <Col span={12} offset={6} xs={6}>
            <p style={{color: "black"}}>
            {retroMaster
              ? `Retro master is ${retroMaster}`
              : "No retro master for now"}
              </p>
          </Col>
        </Row>
      </Space>
    );
  }
};

export const getServerSideProps = async () => {
  const res = await fetch(`http://project_backend:8000/all`);
  const results = await res.json();
  return { props: { data: results } };
};

export default Home;
