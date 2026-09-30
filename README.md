# Overseas MVP Pipeline (出海极速新词截流与变现闭环)

对标独立开发者（如蒋云何）验证跑通的“词根法挖新词 → 极速上线单页 MVP → ChatGPT/GEO 自然截流 → Stripe 变现”完整工程化方案。

## 目录结构
- `radar/`: 蒋云何/哥飞“词根法”挖掘手册 + 自动化长尾词生成与机会打分工具 (`radar_scanner.py`)
- `template-mvp/`: 开箱即用的 Next.js 14 + Tailwind CSS 出海极速单页模版，自带 Google/ChatGPT GEO 结构化标记 (JSON-LD)、三阶段开关机制 (`STAGE=1/2/3`) 和 Stripe Checkout 变现能力。

## 快速上手
1. **挖掘新词**:
   ```bash
   python3 radar/radar_scanner.py -e "新模型或新兴概念"
   ```
2. **极速上线**:
   ```bash
   cd template-mvp
   npm run dev
   ```
