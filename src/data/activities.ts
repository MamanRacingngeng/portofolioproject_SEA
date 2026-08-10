export const activityImages = {
  "pkm-re-fermentation-process": "/images/activities/pkm-re-fermentation-process.png",
  "pkm-re-lab-testing": "/images/activities/pkm-re-lab-testing.png",
  "pkm-re-member-gnothi": "/images/activities/pkm-re-member-gnothi.png",
  "public-speaking-uad": "/images/activities/public-speaking-uad.png",
  "uad-library-team": "/images/activities/uad-library-team.png",
  "university-auditorium-event": "/images/activities/university-auditorium-event.png",
  "nec-bronze-medal-2024": "/images/activities/nec-bronze-medal-2024.png",
  "icofta-2023-stage": "/images/activities/icofta-2023-stage.png",
  "icofta-2023-committee": "/images/activities/icofta-2023-committee.png",
  "formal-event-speaker": "/images/activities/formal-event-speaker.png",
} as const;

export type ActivityImageKey = keyof typeof activityImages;

export function getActivityImage(key: ActivityImageKey): string {
  return activityImages[key];
}

const activityMeta = [
  {
    id: "act-8",
    imageKey: "pkm-re-fermentation-process" as ActivityImageKey,
    featured: true,
    span: "large" as const,
    layout: "poster" as const,
  },
  {
    id: "act-9",
    imageKey: "pkm-re-lab-testing" as ActivityImageKey,
    featured: true,
    span: "medium" as const,
    layout: "poster" as const,
  },
  {
    id: "act-10",
    imageKey: "pkm-re-member-gnothi" as ActivityImageKey,
    featured: true,
    span: "medium" as const,
    layout: "poster" as const,
  },
  {
    id: "act-1",
    imageKey: "nec-bronze-medal-2024" as ActivityImageKey,
    featured: true,
    span: "large" as const,
    layout: "photo" as const,
  },
  {
    id: "act-2",
    imageKey: "icofta-2023-stage" as ActivityImageKey,
    featured: true,
    span: "medium" as const,
    layout: "photo" as const,
  },
  {
    id: "act-3",
    imageKey: "formal-event-speaker" as ActivityImageKey,
    featured: false,
    span: "medium" as const,
    layout: "photo" as const,
  },
  {
    id: "act-4",
    imageKey: "public-speaking-uad" as ActivityImageKey,
    featured: false,
    span: "small" as const,
    layout: "photo" as const,
  },
  {
    id: "act-5",
    imageKey: "uad-library-team" as ActivityImageKey,
    featured: false,
    span: "small" as const,
    layout: "photo" as const,
  },
  {
    id: "act-6",
    imageKey: "university-auditorium-event" as ActivityImageKey,
    featured: false,
    span: "small" as const,
    layout: "photo" as const,
  },
  {
    id: "act-7",
    imageKey: "icofta-2023-committee" as ActivityImageKey,
    featured: false,
    span: "small" as const,
    layout: "photo" as const,
  },
];

export function getActivities(t: {
  activities: Array<{
    id: string;
    title: string;
    caption: string;
    category: string;
  }>;
}) {
  return activityMeta.map((meta) => {
    const content = t.activities.find((a) => a.id === meta.id)!;
    return {
      ...meta,
      ...content,
      image: getActivityImage(meta.imageKey),
    };
  });
}

export function getPkmReActivities(t: {
  activities: Array<{
    id: string;
    title: string;
    caption: string;
    category: string;
  }>;
}) {
  return getActivities(t).filter((item) =>
    ["act-8", "act-9", "act-10"].includes(item.id)
  );
}
