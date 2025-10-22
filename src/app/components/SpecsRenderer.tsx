"use client";

type Props = {
  specs?: string | null;
};

// Heuristics:
// - Lines starting with '•' or '-' become bullet items
// - Lines ending with ':' become section headings
// - Blank lines split paragraphs/sections
export default function SpecsRenderer({ specs }: Props) {
  if (!specs) return null;

  const lines = specs.split(/\r?\n/);
  const blocks: Array<
    | { type: "heading"; text: string }
    | { type: "list"; items: string[] }
    | { type: "para"; text: string }
  > = [];

  let pendingList: string[] = [];

  const flushList = () => {
    if (pendingList.length) {
      blocks.push({ type: "list", items: pendingList.slice() });
      pendingList = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      continue;
    }
    // Heading heuristic
    if (/[:：]$/.test(line) && line.length < 80) {
      flushList();
      blocks.push({ type: "heading", text: line.replace(/[:：]$/, "") });
      continue;
    }
    // Bullet heuristic
    if (/^(•|\-|\*)\s+/.test(line)) {
      const item = line.replace(/^(•|\-|\*)\s+/, "").trim();
      if (item) pendingList.push(item);
      continue;
    }
    // Default paragraph
    flushList();
    blocks.push({ type: "para", text: line });
  }
  flushList();

  return (
    <div className="space-y-3">
      {blocks.map((b, i) => {
        if (b.type === "heading") {
          return (
            <h3 key={i} className="font-semibold text-gray-900 mt-4">
              {b.text}
            </h3>
          );
        }
        if (b.type === "list") {
          return (
            <ul
              key={i}
              className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {b.items.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-sm text-gray-700 whitespace-pre-wrap">
            {b.text}
          </p>
        );
      })}
    </div>
  );
}
