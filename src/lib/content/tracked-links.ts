export type TrackedLinkKind = "pdf" | "simulador";

export interface TrackedLinkItem {
  kind: TrackedLinkKind;
  practiceSlug: string;
  resourceSlug: string;
  destination: string;
  label: string;
  openInNewTab: boolean;
}

export const trackedLinks: TrackedLinkItem[] = [
  {
    kind: "pdf",
    practiceSlug: "revisao",
    resourceSlug: "principal",
    destination: "/downloads/praticas/revisao.pdf",
    label: "PDF da prática de revisão",
    openInNewTab: false,
  },
  {
    kind: "pdf",
    practiceSlug: "carga-massa",
    resourceSlug: "principal",
    destination: "/downloads/praticas/carga-massa.pdf",
    label: "PDF da prática de carga-massa",
    openInNewTab: false,
  },
  {
    kind: "simulador",
    practiceSlug: "revisao",
    resourceSlug: "tinkercad",
    destination: "https://www.tinkercad.com/circuits",
    label: "Simulador Tinkercad da prática de revisão",
    openInNewTab: true,
  },
  {
    kind: "simulador",
    practiceSlug: "carga-massa",
    resourceSlug: "ufc",
    destination: "https://www.laboratoriovirtual.fisica.ufc.br/razao-carga-massa-do-eletron",
    label: "Simulador UFC da prática de carga-massa",
    openInNewTab: true,
  },
];

export function getTrackedLink(kind: TrackedLinkKind, practiceSlug: string, resourceSlug: string) {
  return trackedLinks.find(
    (item) => item.kind === kind && item.practiceSlug === practiceSlug && item.resourceSlug === resourceSlug,
  );
}

export function getTrackedLinkPath(kind: TrackedLinkKind, practiceSlug: string, resourceSlug: string) {
  return `/acessos/${kind}/${practiceSlug}/${resourceSlug}/`;
}
