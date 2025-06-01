"use server";
import "./index.css";
import Title from "antd/es/typography/Title";
import {Flex, Menu, message,} from "antd";
import Link from "next/link";
import {getQuestionBankVoByIdUsingGet,} from "@/api/questionBankController";
import {getQuestionVoByIdUsingGet,} from "@/api/questionController";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import QuestionDetail from "@/components/QuestionDetail";

/**
 * 题目详情页
 * @returns  QuestionPage
 */
export default async function QuestionPage({ params }) {
  const { questionId } = params;

  // 获取题目详情
  let question = undefined;
  try {
    const res = await getQuestionVoByIdUsingGet({
      id: questionId,
    });
    question = res.data ?? [];
  } catch (e: any) {
    message.error("获取题目详情失败:" + e.message);
  }
  if (!question) {
    return <div>获取题目详情失败，请刷新重试</div>;
  }

  return (
    <div id="questionPage">
      <QuestionDetail question={question} />
    </div>
  );
}
