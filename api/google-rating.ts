// Vercel serverless function: live Google rating + review count for Soul Balm.
// Requires Vercel env vars GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID.
// The API key stays on the server — it is never sent to the browser.

export default async function handler(_req: any, res: any) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    res.status(503).json({ error: "Google rating not configured" });
    return;
  }

  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri",
      },
    });
    if (!r.ok) {
      res.status(502).json({ error: `Google responded ${r.status}` });
      return;
    }
    const d: any = await r.json();
    // Cache at Vercel's edge for a day so Google is called ~once per day.
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=604800");
    res.status(200).json({ rating: d.rating, userRatingCount: d.userRatingCount, url: d.googleMapsUri });
  } catch {
    res.status(500).json({ error: "Could not reach Google" });
  }
}
