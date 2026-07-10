import { getCollection } from "astro:content";
import { enabledPracticeSlugs } from "./practice-catalog";

export async function getPublishedPractices() {
  const practices = await getCollection("practices");
  return practices
    .filter((practice) => enabledPracticeSlugs.includes(practice.slug))
    .sort((left, right) => left.data.order - right.data.order);
}

export async function getPracticeBySlug(slug: string) {
  const practices = await getPublishedPractices();
  return practices.find((practice) => practice.slug === slug);
}
