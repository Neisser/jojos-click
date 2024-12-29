export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  host: process.env.HOST,
  domain: process.env.DOMAIN,
  database: {
    url: process.env.DATABASE_URL,
  },
});
