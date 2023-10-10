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

      对话剧场:
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
      <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
        >Vue Test Utils</a
      >, and
      <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
        >Vue Dev Tools</a
      >. If you need more resources, we suggest paying
      <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
        >Awesome Vue</a
      >
      a visit.
    </ActivityItem>

    <ActivityItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>活动流程</template>
      <p>
        Warmup: <br />
        &nbsp;SOUND AND MOVEMENT<br />
        &nbsp;Name Six RANDOM WALK <br />
        Games: <br />
        &nbsp; 3 changes
        <br />
        &nbsp; MIRROR - FOLLOW THE FOLLOWER
        <br />
        &nbsp; CONTRAPUNTAL ARGUMENT
        <br />
        &nbsp; THREE WAY MIRROR
        <br />
        &nbsp;GIBBERISH - CHINESE
        <br />
        &nbsp;BASIC BLIND
      </p>
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
