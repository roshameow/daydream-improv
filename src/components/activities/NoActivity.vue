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
        <DocumentationIcon />
      </template>
      <template #heading>今日无活动</template>
      <!-- <ul> -->
        <p>
          <li>
            "Improv is like jazz comedy. It's better when it's not too perfect." - Drew
            Carey （即兴喜剧就像爵士音乐，不要太完美才更好。）
          </li>
        </p>
        <p>
          <li>
            "Improv is all about finding the truth in the moment." - Tina Fey
            （即兴喜剧就是在当下找到真实的表达。）
          </li>
        </p>
        <p>
          <li>
            "Life is improv; there is no script." - Anon
            （生活就是即兴表演，没有剧本可循。）
          </li>
        </p>
        <p>
          <li>
            "Improvisation is almost like the retarded cousin in the comedy world." -
            Scott Adsit （即兴表演在喜剧世界中几乎像是个与众不同的表演方式。）
          </li>
        </p>
        <p>
          <li>
            "In improv, be in the moment. Listen, react off of your scene partner." -
            Keegan-Michael Key （即兴喜剧中要活在当下。倾听，根据你的搭档做出反应。）
          </li>
        </p>
      <!-- </ul> -->
    </ActivityItem>
  </main>
</template>
