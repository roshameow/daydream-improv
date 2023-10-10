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
      Viola Spolin的戏剧游戏：<br />&nbsp&nbsp Viola Spolin(November 7, 1906 – November 22, 1994)被誉为现代即兴剧场的开创者和推广者，
      对著名即兴剧院团体
      <a href="https://www.secondcity.com/" target="_blank" rel="noopener">Second City</a>
      产生了深远影响，她的教学方法和理论记录在《
      <a href="https://www.amazon.com/Improvisation-Theater-Directing-Techniques-Performance/dp/081014008X/" target="_blank" rel="noopener">为剧场进行即兴</a>
      》（1963年）和《
      <a href="https://www.amazon.com/Theater-Games-Actor-Viola-Spolin/dp/0810140101/" target="_blank" rel="noopener"
        >独角戏演员的剧场游戏</a
      >》（1975年）等书中。
    </ActivityItem>

    <ActivityItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>活动流程</template>
      <p>   
      Warmup: <br />
      <ul >
        <li>Sound and Movement: 
          <ul >
            <li>参与者围成一圈，开始传一组声音+动作(尽量快速、清晰和明显)，尽量快速的传递</li>
            <li>一旦传到最初发出者，下一个人改变成一组新的声音+动作,继续向后传递。</li>
          </ul>
          </li>
        <li>Name Six: 
          <ul >
            <li>大家围成一圈，其中一人站在圈中，这个人会作为“中间人”，并且闭上眼睛</li>
            <li>外围的大家按顺时针或逆时针传递一个物品，直到中间人喊“停”。</li>
            <li>当中间人喊“停”时，传递物品的人需要立即给出一个范围，比如国家。</li>
            <li>中间的人现在必须在给定的范围内，例如“美国”，尽快说出6样属于这个范围的物品，比如“纽约、旧金山、自由女神像、好莱坞、自然公园、自行车”。</li>
            <li>如果中间的人在传完一圈之前成功说出6样物品，他/她可以选择与传递物品的人交换位置；</li>
            <li>如果没有成功，中间的人继续保持原位，游戏重新开始。</li>
          </ul>
        </li>
          <li>Random Walk: 类似于音乐伴奏的舞蹈或表演游戏
            <ul >
            <li>参与者在场地内根据音乐行走，主持人随机指定场景，动作，身份（如做饭，做木工，菜场吆喝）</li> 
            <li>随着音乐的进行，主持人可以随时切换指定的场景、动作和身份，参与者需要即时调整自己的表演内容。</li> 
          </ul>
            </li>
          <li>3 changes：
          <ul >
            <li>参与者成对，在一定时间内，每组参与者互相观察对方的外貌特征</li> 
            <li>观察时间结束后，参与者背对对方，每位参与者改变自己身上的三个特定外貌特征。</li> 
            <li>改变时间结束后转回，说出对方的改变。</li> 
          </ul>
          </li>
        <li>THREE WAY MIRROR(三面镜)：
          <ul >
            <li>确定四名参与者，其中一人是“模特”，其他三人是“镜子”，镜子组的三名参与者分别站在模特的不同方向。</li> 
            <li>模特开始进行各种动作，而镜子则需要即时模仿模特的新动作，保持与模特一致。</li> 
          </ul>
        </li>
        </ul>
      Games: <br />
      <ul >
        <li>Contrapuntal Argument(对位争论)：给出辩题，参与的两人分为正，反方，在一分钟内同时的输出观点 <br />
        对话进行3轮：<br />
        <ul >
          <li> 第一轮：两人只需要输出自己的观点</li>
          <li> 第二轮：两人试图说服对方</li>
          <li> 第三轮：两人试图引用，或者反驳对方观点</li>
        </ul>
          </li>
        <li>Gibberish - Past Incident(火星语聊往事)：给出一个主题，交替用火星语和中文对话，过程中主持人会随时翻牌切换语言。
        <br /></li>
      </ul>

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
