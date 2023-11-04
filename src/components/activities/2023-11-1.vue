<script setup>
import ActivityItem from "./activity_template.vue";
import DocumentationIcon from "../icons/IconDocumentation.vue";
import ToolingIcon from "../icons/IconTooling.vue";
import EcosystemIcon from "../icons/IconEcosystem.vue";
import CommunityIcon from "../icons/IconCommunity.vue";
import SupportIcon from "../icons/IconSupport.vue";
</script>

<template>
  <main>
    <ActivityItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>主题</template>
      Viola Spolin的戏剧游戏(二): <br />&nbsp&nbsp 围绕在《
      <a
        href="https://www.amazon.com/Improvisation-Theater-Directing-Techniques-Performance/dp/081014008X/"
        target="_blank"
        rel="noopener"
        >为剧场进行即兴</a
      >
      》（1963年）书中 IV. Where-First Where Session 中讲述的Focus on Where, Who and
      What的练习。
    </ActivityItem>

    <ActivityItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>活动流程</template>

      Warmup: <br />
      <ul>
        <li>
          相关联想，无关联想: 参与者围成一圈，按照顺时针的方向依次说一个词语
          <ul>
            <li>每个人说的词语必须与前一个人说的词语相关。(比如：汗脚，臭)</li>
            <li>
              每个人说的词语必须与前一个人说的词语无关，要尽量选择不相关的词汇。(比如：花朵，互联网)
            </li>
          </ul>
        </li>
      </ul>
      Games: <br />
      <ul>
        <li>
          Who Game： <br />
          公交站：<br />
          <ul>
            <li>主持人为每个参与者设定一个年龄</li>
            <li>
              每位参与者根据他们被分配的年龄，表演出在公交车站等车时可能会有的特征、行为、言行或举止。
            </li>
          </ul>
          我是谁：<font color="gray">出门在外，身份是自己给的</font><br />
          <ul>
            <li>
              选择一位参与者作为“被猜身份”的人，其他参与者将讨论并给这位参与者设定一个虚构的身份
            </li>
            <li>
              被猜身份的人被邀请回到房间，其他参与者开始与被猜身份的人互动，以提示他们所设定的身份
            </li>
            <li>被猜身份的人在与其他人的互动中努力猜测自己被设定的身份</li>
          </ul>
        </li>
        <li>
          Where Game:
          <ul>
            <li>
              在一个虚构或实际的场地中，确定一些物品，例如家具、装饰品、工具等。在纸上画出它们的图形和位置。
            </li>
            <li>为每位表演者分配一个虚构的身份</li>
            <li>
              表演者进入虚拟房间，扮演他们的角色，并开始互动。他们可以根据自己的身份来决定如何与房间中的物品互动。
            </li>
          </ul>
        </li>
      </ul>
    </ActivityItem>

    <ActivityItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>视频记录</template>

      <iframe
        src="//player.bilibili.com/player.html?aid=407996231&bvid=BV1RG411X7YS&cid=1320515818&p=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>

      <iframe
        src="//player.bilibili.com/player.html?aid=962891799&bvid=BV1YH4y1z7wZ&cid=1320519760&p=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>

      <iframe
        src="//player.bilibili.com/player.html?aid=747891539&bvid=BV1jC4y1H7iE&cid=1320524181&p=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
    </ActivityItem>
  </main>
</template>

<style src="./activity_template.css"></style>
