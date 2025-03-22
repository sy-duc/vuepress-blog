import { LANGUAGE } from "./constants";

export function getLangFromPath(path) {
  return path.startsWith("/vi/") ? LANGUAGE.VI : LANGUAGE.EN;
}
