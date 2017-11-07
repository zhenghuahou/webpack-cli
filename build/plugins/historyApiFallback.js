import history from "connect-history-api-fallback";
import url from "url";

export default function(options) {
    const h = history(options);
    return async function middleware(ctx, next) {
        const { exclude } = options;
        const { req } = ctx;
        const { pathname } = url.parse(ctx.req.url);
        if (exclude && exclude.test(pathname)) {
            console.warn(
                `Not rewriting ${req.method} ${req.url} bescause  match the exclude rule:${exclude}`
            );
            return next();
        }
        await h(ctx.req, ctx.res, next);
    };
}
