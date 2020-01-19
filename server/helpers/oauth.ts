import { Context } from 'koa';

export const oauthHandler = (ctx: Context) => {
  ctx.body = `<script>
  window.opener.postMessage(
    '${ctx.request.query.code}',
    '*'
  );</script>`;
};
