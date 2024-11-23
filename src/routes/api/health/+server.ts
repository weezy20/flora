import { checkDbStatus } from "$lib";
// import { error } from "@sveltejs/kit";

export const GET = async () => {
    let { connected, error } = await checkDbStatus();
    if (connected === false) {
        return new Response(`Internal Server Error: Database failed to connect`, {
            headers: {
            "Content-Type": "text/plain; charset=utf-8"
            },
            status: 500
        });
    } else {
        return new Response("Server Running OK ✅", {
            headers: {
            "Content-Type": "text/plain; charset=utf-8"
            },
            status: 200
        });
    }
};
