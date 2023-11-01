<script setup>
import ActivityItem from "./activity_template.vue";
import DocumentationIcon from "../icons/IconDocumentation.vue";
import ToolingIcon from "../icons/IconTooling.vue";
import EcosystemIcon from "../icons/IconEcosystem.vue";
import CommunityIcon from "../icons/IconCommunity.vue";
import SupportIcon from "../icons/IconSupport.vue";
</script>

<template>
  <ActivityItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Welcome</template>

    A Warm Welcome from Daydream Imporv
    <a href="https://b23.tv/ix5EZmp" target="_blank" rel="noopener">视频</a>.
  </ActivityItem>
</template>
