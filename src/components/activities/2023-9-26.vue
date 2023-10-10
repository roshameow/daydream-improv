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

      对话剧场: 通过一段故事为引导，在对话中对观众感兴趣的内容进行肢体表演。
    </ActivityItem>

    <ActivityItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>活动形式</template>
      <ul>
        <li>
          讲述和提问：一个人讲述一段故事，其余人对自己感兴趣的内容进行提问，讲述人口述更多细节，或邀请其他表演者表演这段场景。
        </li>
        <li>即兴插入：在对话过程中即兴表演一段对话中大家感兴趣的场景。</li>
        <li>
          三头怪：三个表演者每人只说短语，以接龙的形式完成一句人物对话，或内心独白。
        </li>
        <li>人体雕塑：两个表演者只通过肢体动作描述场景。</li>
        <li>question only: 两个人只用疑问句对话。</li>
        <li>儿童剧模式：表演者在表演过程中讲出人物的内心独白。</li>
      </ul>
    </ActivityItem>

    <ActivityItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>视频记录</template>

      <a href="https://b23.tv/ix5EZmp" target="_blank" rel="noopener">视频</a>.
    </ActivityItem>
  </main>
</template>

<style src="./activity_template.css"></style>

