export type Route = "home" | "about" | "partners" | "contact";

export function getCurrentRoute(): Route{
    const hash = window.location.hash.replace("#", "");

    if(hash === "home" ||
        hash === "about" ||
        hash === "partners" ||
        hash === "contact"
    ) {
        return hash as Route;
    }
    return "home";
}