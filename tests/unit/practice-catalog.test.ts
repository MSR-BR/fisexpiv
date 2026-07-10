import { describe, expect, it } from "vitest";
import { availablePractices, enabledPracticeSlugs, plannedPractices, practiceCatalog, practiceCounts } from "../../src/lib/content/practice-catalog";

describe("practice catalog", () => {
  it("lists all practices planned for the semester", () => {
    expect(practiceCatalog).toHaveLength(9);
  });

  it("enables only the first two practices at this stage", () => {
    expect(enabledPracticeSlugs).toEqual(["revisao", "carga-massa"]);
    expect(practiceCounts.available).toBe(2);
    expect(practiceCounts.planned).toBe(7);
  });

  it("keeps explicit catalog status data for MVP discovery", () => {
    expect(availablePractices.map((practice) => practice.slug)).toEqual(["revisao", "carga-massa"]);
    expect(plannedPractices.every((practice) => practice.materialStatus.length > 0)).toBe(true);
    expect(practiceCatalog.every((practice) => practice.sourceStatus.length > 0)).toBe(true);
  });
});
