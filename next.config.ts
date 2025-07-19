import withBundleAnalyzer from '@next/bundle-analyzer';

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  api: {
    bodyParser: {
      sizeLimit: '300mb', // 💥 300MB limit
    },
  },
};

export default withAnalyzer(nextConfig);
