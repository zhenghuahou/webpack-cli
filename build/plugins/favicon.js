import { extname,resolve } from "path";
import { readFileSync } from "fs";

export default function(options = {}) {
    let icon;
    const maxAge = options.maxAge || 31536000; //默认1年
    const cacheControl = `public, max-age=${maxAge | 0}`;
    const url = options.path;
    // console.log(`\n`,resolve(url));
    return function middleware(ctx, next) {
        const ext = extname(ctx.path);
        if (!url || ext !== ".ico" ) {
            return next();
        }
        // lazily read the icon
        if (!icon) {
            icon = readFileSync(url);
        }
        ctx.set("Cache-Control", cacheControl);
        ctx.type = "image/x-icon";
        ctx.body = icon;
    };
}
