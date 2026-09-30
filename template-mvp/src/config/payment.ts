/**
 * 全球统一支付网关路由配置 (Payment Gateway Configuration)
 * 已成功绑定用户的专属 Creem 收款网关通道！
 */
export const PAYMENT_CONFIG = {
  // 1. $9.90 Creator Pack 单次购买链接 (真实海外信用卡扣款通道)
  CREATOR_PACK_URL: "https://www.creem.io/payment/prod_2K4Q7NZh1S0TX8ZzzF2FIx",

  // 2. $29.90 Pro Monthly 月度订阅链接
  PRO_MONTHLY_URL: "",

  // 默认支持的货币与显示价格
  CURRENCY: "USD",
  CREATOR_PACK_PRICE: 9.90,
  PRO_MONTHLY_PRICE: 29.90,
};
