import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  devIndicators: false,
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/home/solutions',
        destination: '/solutions/',
        permanent: true,
      },
      {
        source: '/home/insights',
        destination: '/insights/',
        permanent: true,
      },
      {
        source: '/the-e-commerce-effect',
        destination: '/insights/the-e-commerce-effect/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/insights/',
        permanent: true,
      },
      {
        source: '/category/:path*/feed',
        destination: '/insights/',
        permanent: true,
      },
    ];
  },
});
