import { LANGUAGE } from "./constants";

export function getLangFromPath(path) {
  return path.startsWith("/en/") ? LANGUAGE.EN : LANGUAGE.VI;
}
