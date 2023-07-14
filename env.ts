/**
 * 验证环境变量, 进行类型检查, 保证安全使用
 * https://env.t3.gg/docs/nextjs
 */
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const CheckString = z
  .string()
  .min(1, { message: 'Must be 1 or more characters long' })

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: CheckString,
  },
  server: {
    // See https://next-auth.js.org/deployment.
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: CheckString,
    /** data-base */
    DATABASE_URL: z.string().min(1),
    /** github login */
    GITHUB_CLIENT_ID: CheckString,
    GITHUB_CLIENT_SECRET: CheckString,
    GITHUB_ACCESS_TOKEN: CheckString,
    /** google login */
    GOOGLE_ID: CheckString,
    GOOGLE_SECRET: CheckString,
    /** email login */
    SMTP_FROM: CheckString,
    POSTMARK_API_TOKEN: CheckString,
    POSTMARK_SIGN_IN_TEMPLATE: CheckString,
    POSTMARK_ACTIVATION_TEMPLATE: CheckString,
    /** 订阅 */
    //   STRIPE_API_KEY: CheckString,
    //   STRIPE_WEBHOOK_SECRET: CheckString,
    //   STRIPE_PRO_MONTHLY_PLAN_ID: CheckString,
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    /** data-base */
    DATABASE_URL: process.env.DATABASE_URL,
    /** github login */
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
    /** google login */
    GOOGLE_ID: process.env.GITHUB_CLIENT_ID,
    GOOGLE_SECRET: process.env.GITHUB_CLIENT_SECRET,
    /** email login */
    SMTP_FROM: process.env.SMTP_FROM,
    POSTMARK_API_TOKEN: process.env.POSTMARK_API_TOKEN,
    POSTMARK_SIGN_IN_TEMPLATE: process.env.POSTMARK_SIGN_IN_TEMPLATE,
    POSTMARK_ACTIVATION_TEMPLATE: process.env.POSTMARK_ACTIVATION_TEMPLATE,
    /** 订阅 */
    // STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    // STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    // STRIPE_PRO_MONTHLY_PLAN_ID: process.env.STRIPE_PRO_MONTHLY_PLAN_ID,
  },
})
