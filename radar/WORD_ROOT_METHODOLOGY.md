# 蒋云何/哥飞“词根法”挖掘手册 (Word Root Methodology)

## 一、核心哲学
> “新手找新词，老手做难而正确的事。”
> 
> 新手出海绝不要去竞争已经成熟的通用红海词（例如 `pdf editor`, `ai headshot`, `image background remover`）。那些词不仅 Google 首页被权威站（DA>80）牢牢垄断，而且竞品体验已经被打磨到极致。
> 
> **新词的特点**：
> 1. 刚刚诞生 1~30 天（伴随新模型、新热点、新硬件、新概念发布）。
> 2. 全网只有零星几篇推文或 Github 项目，**没有任何专门的独立工具站（Landing Page）**。
> 3. Google 和 ChatGPT / Perplexity 检索该词时，极度缺乏精准的目标网站。谁第一个上线清晰的工具单页，谁就能立刻霸占 Google 首页前三，并被 ChatGPT Search 直接作为权威源抓取推荐。

---

## 二、四大主流高转化词根库 (Root Suffixes)

### 1. 动作生成类（转化率最高，商业付费意愿最强）
- `[New Entity] generator` (例如: flux generator, seededit generator)
- `[New Entity] maker`
- `[New Entity] creator`
- `[New Entity] prompt generator` / `prompts`

### 2. 工具与格式转换类（长尾刚需，容易被搜索引擎长期收录）
- `[New Entity] converter`
- `[New Entity] online free` / `free online`
- `[New Entity] playground`
- `[New Entity] viewer` / `player`

### 3. 增强与画质/效果类（图像/视频类新模型首选）
- `[New Entity] enhancer`
- `[New Entity] upscaler`
- `[New Entity] styler` / `style transfer`
- `[New Entity] unblur` / `hd`

### 4. 替代与比较类（截流竞品高净值意向客户）
- `[Competitor] alternative`
- `[New Entity] vs [Old Entity]`
- `[New Entity] pricing` / `cost calculator`

---

## 三、GEO（生成式引擎优化）截流关键要点
为什么蒋云何的站点次日 ChatGPT 流量甚至超过 Google？
1. **定义权威度（Definition Authority）**：
   在页面 `H1` 和 `meta description` 清楚给出新词的定义：“What is [New Entity]?” 并附带核心属性。
2. **结构化标记（JSON-LD）**：
   嵌入标准的 `WebApplication` 与 `FAQPage` 结构化数据。ChatGPT 爬虫（GPTBot / OAI-SearchBot）解析能力极强，结构化数据直接成为 LLM 输出答案时的引用链接。
3. **极简功能落地页**：
   有输入框、有效果对比、有清晰的“Try Free Online”按钮。LLM 判定这是一个可用工具，而不是无意义的垃圾 SEO 农场。
