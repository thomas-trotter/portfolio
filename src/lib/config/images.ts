export const IMAGE_QUALITY = 90;

export const IMAGE_SIZES = {
  blogMdx: "(max-width: 600px) 100vw, 600px",
  projectMdx: "(max-width: 768px) 100vw, calc(100vw - 15rem)",
  projectHero: "(max-width: 768px) 100vw, calc(100vw - 15rem)",
  blogCover: "(max-width: 600px) 100vw, 600px",
  cardThumbnail: "(max-width: 768px) 100vw, 33vw",
  avatar: "48px",
} as const;
