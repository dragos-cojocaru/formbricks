import "server-only";

import { env } from "./env";

export const IS_FORMBRICKS_CLOUD = env.IS_FORMBRICKS_CLOUD === "1";
export const REVALIDATION_INTERVAL = 0; //TODO: find a good way to cache and revalidate data when it changes
export const SERVICES_REVALIDATION_INTERVAL = 60 * 30; // 30 minutes
export const MAU_LIMIT = IS_FORMBRICKS_CLOUD ? 9000 : 1000000;

// URLs
export const WEBAPP_URL =
  env.WEBAPP_URL || (env.VERCEL_URL ? `https://${env.VERCEL_URL}` : false) || "http://localhost:3000";

export const SHORT_URL_BASE = env.SHORT_URL_BASE ? env.SHORT_URL_BASE : WEBAPP_URL;

// encryption keys
export const FORMBRICKS_ENCRYPTION_KEY = env.FORMBRICKS_ENCRYPTION_KEY || undefined;
export const ENCRYPTION_KEY = env.ENCRYPTION_KEY;

// Other
export const INTERNAL_SECRET = process.env.INTERNAL_SECRET || "";
export const CRON_SECRET = env.CRON_SECRET;
export const DEFAULT_BRAND_COLOR = "#64748b";

export const PRIVACY_URL = env.PRIVACY_URL;
export const TERMS_URL = env.TERMS_URL;
export const IMPRINT_URL = env.IMPRINT_URL;

export const PASSWORD_RESET_DISABLED = env.PASSWORD_RESET_DISABLED === "1";
export const EMAIL_VERIFICATION_DISABLED = env.EMAIL_VERIFICATION_DISABLED === "1";

export const GOOGLE_OAUTH_ENABLED = env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET ? true : false;
export const GITHUB_OAUTH_ENABLED = env.GITHUB_ID && env.GITHUB_SECRET ? true : false;
export const AZURE_OAUTH_ENABLED =
  env.AZUREAD_CLIENT_ID && env.AZUREAD_CLIENT_SECRET && env.AZUREAD_TENANT_ID ? true : false;
export const OIDC_OAUTH_ENABLED =
  env.OIDC_CLIENT_ID && env.OIDC_CLIENT_SECRET && env.OIDC_ISSUER ? true : false;

export const GITHUB_ID = env.GITHUB_ID;
export const GITHUB_SECRET = env.GITHUB_SECRET;
export const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;

export const AZUREAD_CLIENT_ID = env.AZUREAD_CLIENT_ID;
export const AZUREAD_CLIENT_SECRET = env.AZUREAD_CLIENT_SECRET;
export const AZUREAD_TENANT_ID = env.AZUREAD_TENANT_ID;

export const OIDC_CLIENT_ID = env.OIDC_CLIENT_ID;
export const OIDC_CLIENT_SECRET = env.OIDC_CLIENT_SECRET;
export const OIDC_ISSUER = env.OIDC_ISSUER;
export const OIDC_DISPLAY_NAME = env.OIDC_DISPLAY_NAME;
export const OIDC_SIGNING_ALGORITHM = env.OIDC_SIGNING_ALGORITHM;

export const SIGNUP_ENABLED = env.SIGNUP_DISABLED !== "1";
export const EMAIL_AUTH_ENABLED = env.EMAIL_AUTH_DISABLED !== "1";
export const INVITE_DISABLED = env.INVITE_DISABLED === "1";

export const GOOGLE_SHEETS_CLIENT_ID = env.GOOGLE_SHEETS_CLIENT_ID;
export const GOOGLE_SHEETS_CLIENT_SECRET = env.GOOGLE_SHEETS_CLIENT_SECRET;
export const GOOGLE_SHEETS_REDIRECT_URL = env.GOOGLE_SHEETS_REDIRECT_URL;

export const NOTION_OAUTH_CLIENT_ID = env.NOTION_OAUTH_CLIENT_ID;
export const NOTION_OAUTH_CLIENT_SECRET = env.NOTION_OAUTH_CLIENT_SECRET;
export const NOTION_REDIRECT_URI = `${WEBAPP_URL}/api/v1/integrations/notion/callback`;
export const NOTION_AUTH_URL = `https://api.notion.com/v1/oauth/authorize?client_id=${env.NOTION_OAUTH_CLIENT_ID}&response_type=code&owner=user&redirect_uri=${NOTION_REDIRECT_URI}`;

export const AIRTABLE_CLIENT_ID = env.AIRTABLE_CLIENT_ID;

export const SMTP_HOST = env.SMTP_HOST;
export const SMTP_PORT = env.SMTP_PORT;
export const SMTP_SECURE_ENABLED = env.SMTP_SECURE_ENABLED === "1";
export const SMTP_USER = env.SMTP_USER;
export const SMTP_PASSWORD = env.SMTP_PASSWORD;
export const MAIL_FROM = env.MAIL_FROM;

export const NEXTAUTH_SECRET = env.NEXTAUTH_SECRET;
export const ITEMS_PER_PAGE = 50;
export const RESPONSES_PER_PAGE = 10;
export const TEXT_RESPONSES_PER_PAGE = 5;

export const DEFAULT_TEAM_ID = env.DEFAULT_TEAM_ID;
export const DEFAULT_TEAM_ROLE = env.DEFAULT_TEAM_ROLE;
export const ONBOARDING_DISABLED = env.ONBOARDING_DISABLED;

// Storage constants
export const AWS_ACCESS_KEY_ID = env.AWS_ACCESS_KEY_ID;
export const AWS_SECRET_ACCESS_KEY = env.AWS_SECRET_ACCESS_KEY;
export const AWS_REGION = env.AWS_REGION;
export const S3_ACCESS_KEY = env.S3_ACCESS_KEY;
export const S3_SECRET_KEY = env.S3_SECRET_KEY;
export const S3_REGION = env.S3_REGION;
export const S3_ENDPOINT_URL = env.S3_ENDPOINT_URL;
export const S3_BUCKET_NAME = env.S3_BUCKET_NAME;
export const UPLOADS_DIR = env.UPLOADS_DIR || "./uploads";
export const MAX_SIZES = {
  public: 1024 * 1024 * 10, // 10MB
  free: 1024 * 1024 * 10, // 10MB
  pro: 1024 * 1024 * 1024, // 1GB
} as const;

export const isS3Configured = () => {
  // for aws sdk, it can pick up the creds for access key, secret key and the region from the environment variables
  if (AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY && AWS_REGION) {
    // so we only need to check if the bucket name is set
    return !!S3_BUCKET_NAME;
  }

  // for other s3 compatible services, we need to provide the access key and secret key
  return S3_ACCESS_KEY && S3_SECRET_KEY && (S3_ENDPOINT_URL ? S3_REGION : true) && S3_BUCKET_NAME
    ? true
    : false;
};

// Pricing
export const PRICING_USERTARGETING_FREE_MTU = 2500;
export const PRICING_APPSURVEYS_FREE_RESPONSES = 250;

// Colors for Survey Bg
export const colours = [
  "#FFF2D8",
  "#EAD7BB",
  "#BCA37F",
  "#113946",
  "#04364A",
  "#176B87",
  "#64CCC5",
  "#DAFFFB",
  "#132043",
  "#1F4172",
  "#F1B4BB",
  "#FDF0F0",
  "#001524",
  "#445D48",
  "#D6CC99",
  "#FDE5D4",
  "#BEADFA",
  "#D0BFFF",
  "#DFCCFB",
  "#FFF8C9",
  "#FF8080",
  "#FFCF96",
  "#F6FDC3",
  "#CDFAD5",
];

// Rate Limiting
export const SIGNUP_RATE_LIMIT = {
  interval: 60 * 60 * 1000, // 60 minutes
  allowedPerInterval: 30,
};
export const LOGIN_RATE_LIMIT = {
  interval: 15 * 60 * 1000, // 15 minutes
  allowedPerInterval: 30,
};
export const CLIENT_SIDE_API_RATE_LIMIT = {
  interval: 5 * 60 * 1000, // 5 minutes
  allowedPerInterval: 200,
};
export const SHARE_RATE_LIMIT = {
  interval: 60 * 60 * 1000, // 60 minutes
  allowedPerInterval: 30,
};

export const SYNC_USER_IDENTIFICATION_RATE_LIMIT = {
  interval: 60 * 1000, // 1 minute
  allowedPerInterval: 5,
};

export const DEBUG = env.DEBUG === "1";

// Enterprise License constant
export const ENTERPRISE_LICENSE_KEY = env.ENTERPRISE_LICENSE_KEY;

export const RATE_LIMITING_DISABLED = env.RATE_LIMITING_DISABLED === "1";

export const CUSTOMER_IO_SITE_ID = env.CUSTOMER_IO_SITE_ID;
export const CUSTOMER_IO_API_KEY = env.CUSTOMER_IO_API_KEY;
