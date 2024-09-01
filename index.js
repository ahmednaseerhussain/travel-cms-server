const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();

app.use(cors({
  origin: 'https://travel-cms-blue.vercel.app',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(async ctx => {
  if (ctx.path === '/api/db/banner' && ctx.method === 'GET') {
    // Your route logic here
    ctx.body = { message: 'Banner data' };
  } else {
    ctx.status = 404;
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
