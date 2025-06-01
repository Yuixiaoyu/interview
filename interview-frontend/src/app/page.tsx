"use server";
import "./index.css";
import Title from "antd/es/typography/Title";
import {Divider, Flex, message} from "antd";
import Link from "next/link";
import {listQuestionBankVoByPageUsingPost} from "@/api/questionBankController";
import {listQuestionVoByPageUsingPost} from "@/api/questionController";
import QuestionBankList from "@/components/QuestionBankList";
import QuestionList from "@/components/QuestionList";

/**
 * 主页
 * @returns  Home Page
 */
export default async function HomePage() {

    let questionBankList = [];
    let questionList = [];

    try{
        const res = await listQuestionBankVoByPageUsingPost({
            pageSize: 16,
            sortField: "createTime",
            sortOrder: "descend"
        })
        questionBankList = res.data.records ?? [];
    }catch (e:any) {
        message.error("获取题库列表失败:"+e.message)
    }

    try{
        const res = await listQuestionVoByPageUsingPost({
            pageSize: 10,
            sortField: "createTime",
            sortOrder: "descend"
        })
        questionList = res.data.records ?? [];
    }catch (e:any)  {
        message.error("获取题目列表失败:"+e.message)
    }

    return (
    <div id="homePage" className="max-width-content">
      <Flex justify={"space-between"} align={"center"}>
        <Title level={3}>最新题库</Title>
        <Link href={"/banks"}>查看更多</Link>
      </Flex>
      <QuestionBankList questionBankList={questionBankList} />
      <Divider />
        <Flex justify={"space-between"} align={"center"}>
            <Title level={3}>最新题目</Title>
            <Link href={"/questions"}>查看更多</Link>
        </Flex>
      <QuestionList questionList={questionList} />
    </div>
  );
}
