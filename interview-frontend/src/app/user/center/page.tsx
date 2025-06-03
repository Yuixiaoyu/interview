"use client";
import "./index.css";
import Title from "antd/es/typography/Title";
import { Avatar, Card, Col, message, Row } from "antd";
import { listQuestionVoByPageUsingPost } from "@/api/questionController";
import QuestionTable from "@/components/QuestionTable";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import Paragraph from "antd/es/typography/Paragraph";
import { useState } from "react";
import CalendarChart from "@/app/user/center/components/CalendarChart";

/**
 * 用户中心页
 * @returns
 */
export default function UserCenterPage({ searchParams }) {
  /**
   * 获取登陆用户信息
   */
  const loginUser = useSelector((state: RootState) => state.loginUser);

  const user = loginUser;

  // 控制菜单栏的tab高亮
  const [activeTabKey, setActiveTabKey] = useState<string>("record");

  return (
    <div id="userCenterPage" className="max-width-content">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Card style={{ textAlign: "center" }}>
            <Avatar src={user.userAvatar} size={72} />
            <div style={{ marginBottom: "16px" }} />
            <Card.Meta
              title={
                <Title level={4} style={{ marginBottom: 0 }}>
                  {user.userName}
                </Title>
              }
              description={
                <Paragraph type="secondary">{user.userProfile}</Paragraph>
              }
            />
          </Card>
        </Col>
        <Col xs={24} md={18}>
          <Card
            tabList={[
              {
                key: "record",
                label: "刷题记录",
              },
              {
                key: "others",
                label: "其他",
              },
            ]}
            activeTabKey={activeTabKey}
            onTabChange={(key) => setActiveTabKey(key)}
          >
              {activeTabKey === "record" && (
                  <>
                    <CalendarChart />
                  </>
              )}
              {activeTabKey === "others" && <>bbb</>}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
