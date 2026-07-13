export type PracticeStatus = "available" | "planned";

export interface PracticeCatalogItem {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  status: PracticeStatus;
  hasSimulator: boolean;
  simulatorSummary: string;
  materialStatus: string;
  sourceStatus: string;
  availableMaterials: string[];
  plannedMaterials: string[];
  pdfDownloadPath?: string;
}
