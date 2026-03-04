import { homeView } from "./views/homeView.ts";
import { computerNetworksView } from "./views/computerNetworksView.ts";
import { aboutView } from "./views/aboutView.ts";
import { hardwareRepairView } from "./views/hardwareRepairView.ts";
import { partnersView } from "./views/partnersView.ts";
import { serversView } from "./views/serversView.ts";
import { videoView } from "./views/videoView.ts";
import contactView from "./views/contactView.ts";

const routes: Record<string, () => string> = {
  "/": homeView,
  "/about": aboutView,
  "/partners": partnersView,
  "/computer_networks": computerNetworksView,
  "/servers": serversView,
  "/video": videoView,
  "/hardware_repair": hardwareRepairView,
};

export function router() {
  const path = window.location.pathname;
  const appEl = document.getElementById("app");
  if (!appEl) {
    console.error("Element #app not found in the DOM!");
    return;
  }
  if (path === "/contact") {
    appEl.innerHTML = `<div class="only-contact">${contactView()}</div>`;
  }
  const view = routes[path] || homeView;

  document.getElementById("app")!.innerHTML = view();
}
