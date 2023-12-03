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
      参加上来剧社的体验活动，迈斯纳(<a
        href="https://en.wikipedia.org/wiki/Sanford_Meisner"
        target="_blank"
        rel="noopener"
        >Sanford Meisner</a
      >)表演法: <br />&nbsp&nbsp 迈斯纳是美国戏剧领域的一位杰出教育家，他是<a
        href="https://theactorsstudio.org"
        target="_blank"
        rel="noopener"
        >Actors Studio</a
      >
      的创始成员之一，发展了他自己基于对俄国教师<a
        href="https://en.wikipedia.org/wiki/Konstantin_Stanislavski"
        target="_blank"
        rel="noopener"
        >Konstantin Stanislavski</a
      >
      的理解而建立的特殊课程。曾在
      <a href="https://www.neighborhoodplayhouse.org/" target="_blank" rel="noopener"
        >The Neighborhood Playhouse</a
      >
      担任演艺部主任长达40年。他也是
      <a
        href="https://en.wikipedia.org/wiki/Group_Theatre_(New_York_City)"
        target="_blank"
        rel="noopener"
        >Group Theatre</a
      >
      的创始成员之一，同时在该剧团的多个舞台剧中担任演员。 <br />&nbsp&nbsp
      迈斯纳表演方法（Meisner
      Technique）是一种表演技巧和教学体系。这一方法强调通过与其他演员的真实互动来创造角色和情境，使表演更加自然、情感真实和令人信服。
      迈斯纳表演方法的核心理念包括：
      <ul>
        <li>
          活在当下（Living Truthfully Under Imaginary Circumstances）：
          演员被鼓励在虚构的情境中表现得像是在真实生活中一样。通过将自己放入角色所处的虚构情境中，演员能够更自然地展现情感和行为。
        </li>
        <li>
          重复练习（Repetition）：
          这是迈斯纳表演方法中的一项重要练习，演员通过反复的对话和行为来深入感受和理解场景中的情感变化。通过反复的互动，演员能够更深刻地理解角色的内在动机和情感状态。
        </li>
        <li>
          观察和回应（Observation and Response）：
          演员被鼓励敏锐地观察其他演员的动作和情感，并根据观察到的信息做出真实的回应。这有助于建立真实而有机的互动，而非预先计划的表演。
        </li>
        <li>
          情感准备（Emotional Preparation）：
          演员需要学会在表演前对角色的情感状态进行准备，以便更容易地进入角色并在表演中体现出真实的情感。
        </li>
      </ul>
    </ActivityItem>
    <ActivityItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>参考书籍</template>
      《
      <a
        href="https://www.amazon.com/Sanford-Meisner-Acting/dp/0394750594"
        target="_blank"
        rel="noopener"
        >Sanford Meisner on Acting</a
      >
      》 通过记录一个由八名男性和八名女性组成的演员班级在纽约Neighborhood
      Playhouse上为期15个月的课程，展示了迈斯纳的教学过程。书中包含了迈斯纳对学生练习基础的直接记录。书中的内容涵盖了从最基本的练习到对当代美国戏剧的详细场景工作。
      <br />《
      <a
        href="https://book.douban.com/subject/30461518/"
        target="_blank"
        rel="noopener"
        >迈斯纳方法训练教程（套装上下册）</a
      >
      》 记录上海戏剧学院2016年进行的为期10天的迈斯纳方法工作坊，以课堂实录的形式还原讲座内容。

    </ActivityItem>
    <ActivityItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>活动流程</template>

      <ul>
        <li>
          重复练习： <br />
          练习进行为3轮：<br />
          <ul>
            <li>
              第一轮：两位参与者之间选择一个简短的语句描述或评价对方。一方说出这个语句，而另一方完全重复对方说的话。旨在让演员开始建立起对对方的敏感性，学会精准地重复对方的表达方式。
            </li>
            <li>
              第二轮：仍然选择一个简短的语句，但这次演员要改变句子的主语。这有助于培养演员在表演中更灵活地应对变化。
            </li>
            <li>第三轮：演员继续重复对方的话，但这次是按照内心的冲动说出想说的话。</li>
          </ul>
          通过这三轮的逐渐深化，参与者们能够逐渐摆脱对方话语的机械重复，进入更深层次的情感表达。这一过程有助于演员建立起真实而有力的情感联系，为更复杂的表演情境做好准备。
          <ul></ul>
        </li>
        <li>
          情感准备

          <ul>
            <li>角色扮演(If...): 表演者按照给出的身份活动。</li>
            <li>
              因为，所以：参与者轮流接龙，其中每个参与者都需要根据前一个人的陈述来进行回应，每个参与者都在构建新的逻辑链。
              <ul>
                <li>
                  第一轮：补充结果。
                  <ul>
                    <li>参与者1： 因为天气晴朗（A），所以我决定去公园散步（B）。</li>
                    <li>
                      参与者2： 因为去了公园散步（B），所以我发现了一本遗失的书（C）。
                    </li>
                  </ul>
                </li>
                <li>
                  第二轮：补充原因。
                  <ul>
                    <li>参与者1： 我上班迟到了（A），因为我错过了早上的公交车（B）。</li>
                    <li>
                      参与者2： 我错过了早上的公交车（B），因为昨晚我熬夜看电影（C）。
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </ActivityItem>
  </main>
</template>

<style src="./activity_template.css"></style>
