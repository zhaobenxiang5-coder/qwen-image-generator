/**
 * 全球统一支付网关路由配置 (Payment Gateway Configuration)
 * 当你在 LemonSqueezy / Creem / Stripe / Paddle 创建好专属收款链接后，
 * 只需将下方对应的 URL 填入，整站所有购买按钮将立即自动无缝切换到真实扣款通道！
 */
export const PAYMENT_CONFIG = {
  // 1. $9.90 Creator Pack 单次购买链接 (留空时自动弹出邮箱收集与意向锁定弹窗)
  CREATOR_PACK_URL: process.env.NEXT_PUBLIC_CREATOR_PACK_URL || "",

  // 2. $29.90 Pro Monthly 月度订阅链接
  PRO_MONTHLY_URL: process.env.NEXT_PUBLIC_PRO_MONTHLY_URL || "",

  // 默认支持的货币与显示价格
  CURRENCY: "USD",
  CREATOR_PACK_PRICE: 9.90,
  PRO_MONTHLY_PRICE: 29.90,
};
