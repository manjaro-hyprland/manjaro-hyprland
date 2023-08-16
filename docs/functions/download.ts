import { countUp, Env } from "../utils";

const hostname = "mirror.manjaro-hyprland.download";

export const onRequest: PagesFunction<Env> = async (context) => {
    const url = new URL(context.request.url);
    url.hostname = hostname;
    url.pathname = `manjaro-hyprland/${url.searchParams.get('file')}`
    url.searchParams.forEach((_value, name) => url.searchParams.delete(name));

    if (url.pathname.endsWith('.iso') && context.request.method === "GET") {
        await countUp(context)
    }

    return Response.redirect(url.toString(), 301);
}
