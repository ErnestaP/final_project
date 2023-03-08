import Link from "next/link";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import React from "react";
import { Layout, theme } from "antd";
import { Col, Row } from "antd";
import { useRouter } from "next/router";

const { Header, Content } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row>
            <Col span={2} offset={2} xs={2}><Link href="/">Home</Link></Col>
            <Col span={2} offset={2} xs={2}><Link href="/all">All</Link></Col>
            <Col span={2} offset={2} xs={2}><Link href="/add">Add</Link></Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100%",
            width: "100%",
            background: colorBgContainer,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}
