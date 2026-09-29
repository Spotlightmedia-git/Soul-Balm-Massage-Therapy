/**
 * 📸 SOUL BALM PHOTO MAP — the ONLY file to edit to change photos.
 *
 * Each slot: { src, alt, pos? }
 *   src → file in client/public/images/ (pre-compressed .webp, SEO-friendly names)
 *   alt → description for screen readers + Google Images (describe what's in the photo)
 *   pos → optional crop nudge (CSS object-position). Lower % = show more of the top.
 * Delete a slot (or set src to "") to show the gold placeholder instead.
 */

type Photo = { src: string; alt: string; pos?: string };

export const PHOTOS: Record<string, Photo> = {
  // 🏠 HOME PAGE
  "home-hero": { src: "/images/teresa-nerem-massage-therapist-kansas-city.webp", pos: "75% 40%",
    alt: "Teresa Nerem, licensed massage therapist, standing by the river at sunset" },
  "home-intro": { src: "/images/soul-balm-massage-studio-kansas-city.webp",
    alt: "Teresa giving an assisted arm stretch in the Soul Balm treatment room in Kansas City" },
  "home-values": { src: "/images/neck-and-shoulder-massage-soul-balm.webp", pos: "center 35%",
    alt: "Teresa massaging a client's neck and shoulders during a session at Soul Balm" },

  // 💪 DEEP TISSUE PAGE
  "deep-tissue-massage-hero": { src: "/images/deep-tissue-massage-leg-stretch-kansas-city.webp", pos: "center 30%",
    alt: "Teresa performing a deep tissue leg stretch on a client in Kansas City" },
  "deep-tissue-massage-room": { src: "/images/deep-tissue-neck-massage-kansas-city.webp", pos: "center 45%",
    alt: "Close-up of focused deep tissue work on a client's neck" },
  "deep-tissue-massage-detail": { src: "/images/assisted-leg-stretch-massage-soul-balm.webp", pos: "center 30%",
    alt: "Assisted hamstring stretch during a deep tissue massage at Soul Balm" },

  // 🌿 SWEDISH PAGE
  "swedish-massage-hero": { src: "/images/soul-balm-massage-studio-kansas-city.webp", pos: "center 45%",
    alt: "Relaxing Swedish massage session in the Soul Balm treatment room" },
  "swedish-massage-room": { src: "/images/neck-and-shoulder-massage-soul-balm.webp", pos: "center 35%",
    alt: "Gentle neck and shoulder massage during a Swedish session" },
  "swedish-massage-detail": { src: "/images/foot-massage-soul-balm-kansas-city.webp", pos: "center 45%",
    alt: "Close-up of a soothing foot massage at Soul Balm Massage Therapy" },

  // 🦶 ASHIATSU PAGE
  "ashiatsu-massage-hero": { src: "/images/ashiatsu-barefoot-massage-kansas-city.webp", pos: "center 25%",
    alt: "Teresa using overhead bars to give a barefoot Ashiatsu massage in Kansas City" },
  "ashiatsu-massage-room": { src: "/images/ashiatsu-massage-bars-soul-balm-studio.webp", pos: "center 70%",
    alt: "Teresa holding the Ashiatsu support bars beside the Soul Balm sign" },
  "ashiatsu-massage-detail": { src: "/images/soul-balm-massage-therapy-studio-sign.webp",
    alt: "Soul Balm Massage Therapy sign on the studio wall" },

  // 💧 LYMPHATIC PAGE
  "lymphatic-massage-hero": { src: "/images/deep-tissue-neck-massage-kansas-city.webp", pos: "center 45%",
    alt: "Gentle hands-on work at the neck during a lymphatic drainage session" },
  "lymphatic-massage-room": { src: "/images/foot-massage-soul-balm-kansas-city.webp", pos: "center 45%",
    alt: "Light, rhythmic massage on a client's foot" },
  "lymphatic-massage-detail": { src: "/images/teresa-nerem-soul-balm-massage-therapist.webp", pos: "center 25%",
    alt: "Teresa Nerem of Soul Balm Massage Therapy standing under a willow tree" },

  // 🤰 PRENATAL PAGE
  "prenatal-massage-hero": { src: "/images/teresa-nerem-lmt-kansas-city.webp", pos: "center 45%",
    alt: "Teresa Nerem, licensed massage therapist, seated in a grassy meadow at golden hour" },
  "prenatal-massage-room": { src: "/images/teresa-nerem-lmt-soul-balm-riverside.webp", pos: "65% 40%",
    alt: "Teresa Nerem by the river at golden hour" },
  "prenatal-massage-detail": { src: "/images/teresa-nerem-soul-balm-owner.webp", pos: "center 30%",
    alt: "Smiling portrait of Teresa Nerem, owner of Soul Balm Massage Therapy" },
};

export const photoFor = (slot: string): string | undefined => PHOTOS[slot]?.src || undefined;
export const positionFor = (slot: string): string | undefined => PHOTOS[slot]?.pos;
export const altFor = (slot: string): string | undefined => PHOTOS[slot]?.alt;
