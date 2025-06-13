import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [new URL('https://tukzhejovsuybrreadju.supabase.co/storage/v1/object/public/**')],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
