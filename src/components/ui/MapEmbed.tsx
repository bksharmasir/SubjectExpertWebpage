type MapEmbedProps = {
  query: string;
  label: string;
  className?: string;
};

export function MapEmbed({ query, label, className }: MapEmbedProps) {
  const encoded = encodeURIComponent(query);

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl border border-rule">
        <iframe
          title={`Map — ${label}`}
          src={`https://www.google.com/maps?q=${encoded}&output=embed`}
          width="100%"
          height="360"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${encoded}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-sm font-medium text-brass hover:text-ink transition-colors"
      >
        Get directions →
      </a>
    </div>
  );
}
