import {homeView} from "./views/homeView.ts";
import {computerNetworksView} from "./views/computerNetworksView.ts";
import {aboutView} from "./views/aboutView.ts";
import {hardwareRepairView} from "./views/computerNetworksView.ts";
import {partnersView} from "./views/partnersView.ts";
import {serversView} from "./views/serversView.ts";
import {videoView} from "./views/videoView.ts";

const routes: Record<string, ()=> string> = {
    "/": homeView,
    "/about": aboutView,
    "/partners": partnersView,
    "/computer_networks": computerNetworksView,
    "/servers": serversView,
    "/video": videoView,
    "/hardware_repair": hardwareRepairView
};

export function router(){
    const path = window.location.pathname;
    const view = routes[path] || homeView;

    document.getElementById("app")!.innerHTML = view();
}