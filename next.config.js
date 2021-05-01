module.exports = {
  future: {
    webpack5: false,
  },
  async rewrites() {
    return [
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/',
        destination: '/:host',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/posts/:id',
        destination: '/:host/posts/:id',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/slugs/:slug*',
        destination: '/:host/slugs/:slug*',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/:path(.+)',
        destination: '/:host/catchall/:path',
      },
    ];
  },
};
