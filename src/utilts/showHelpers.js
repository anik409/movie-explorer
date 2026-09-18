export function stripHtml(html) {
  if (!html) return "No overview available.";
  return html.replace(/<[^>]+>/g, "");
}

export function getYear(show) {
  return show.premiered ? show.premiered.slice(0, 4) : "N/A";
}

export function getRating(show) {
  return show.rating && show.rating.average ? show.rating.average : "N/A";
}

export function getPosterUrl(show) {
  return show.image ? show.image.medium : null;
}