import { describe, expect, it } from "vitest";
import { availablePractices, enabledPracticeSlugs, plannedPractices, practiceCatalog, practiceCounts } from "../../src/lib/content/practice-catalog";

describe("practice catalog", () => {
  it("lists all practices planned for the semester", () => {
    expect(practiceCatalog).toHaveLength(9);
  });

  it("enables every completed practice", () => {
    expect(enabledPracticeSlugs).toEqual([
      "revisao",
      "carga-massa",
      "radiacao-termica",
      "stefan-boltzmann",
      "efeito-fotoeletrico",
      "espectroscopia",
    ]);
    expect(practiceCounts.available).toBe(6);
    expect(practiceCounts.planned).toBe(3);
  });

  it("keeps explicit catalog status data for discovery", () => {
    expect(availablePractices.map((practice) => practice.slug)).toEqual([
      "revisao",
      "carga-massa",
      "radiacao-termica",
      "stefan-boltzmann",
      "efeito-fotoeletrico",
      "espectroscopia",
    ]);
    expect(plannedPractices.every((practice) => practice.materialStatus.length > 0)).toBe(true);
    expect(practiceCatalog.every((practice) => practice.sourceStatus.length > 0)).toBe(true);
  });
});
