import history from "connect-history-api-fallback";

export default  function(options) {
    const h = history(options);
    return async function middleware(ctx, next) {
        await h(ctx.req, ctx.res, next);
    };
}
