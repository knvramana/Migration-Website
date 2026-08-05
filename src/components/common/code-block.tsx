import { Fragment, type ReactNode } from "react";

import type { PayloadKind } from "@/content/trace";
import { cn } from "@/lib/utils";

/**
 * Minimal highlighter for the trace payloads.
 *
 * Shiki would be ~1MB of grammars and a build-time step to colour five short
 * snippets. These payloads are JSON-ish and HTTP-ish only, so a single pass
 * over quoted strings, numbers and literals covers everything shown.
 *
 * Accent colours use the categorical --rail-* hues, which are text-safe on
 * every surface in this palette.
 */
const JSON_TOKEN =
  /("(?:\\.|[^"\\])*")(\s*:)?|(\b-?\d+(?:\.\d+)?\b)|\b(true|false|null)\b/g;

function highlightJson(line: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of line.matchAll(JSON_TOKEN)) {
    const index = match.index ?? 0;
    if (index > cursor) nodes.push(line.slice(cursor, index));

    const [full, quoted, colon, number, literal] = match;

    if (quoted !== undefined) {
      // A quoted token followed by a colon is a property name.
      nodes.push(
        <span
          key={key++}
          className={colon ? "text-rail-indigo" : "text-rail-teal"}
        >
          {quoted}
        </span>,
      );
      if (colon) nodes.push(colon);
    } else if (number !== undefined) {
      nodes.push(
        <span key={key++} className="text-rail-amber">
          {number}
        </span>,
      );
    } else if (literal !== undefined) {
      nodes.push(
        <span key={key++} className="text-rail-indigo">
          {literal}
        </span>,
      );
    }

    cursor = index + full.length;
  }

  if (cursor < line.length) nodes.push(line.slice(cursor));
  return nodes;
}

const HTTP_LEAD = /^(GET|POST|PUT|PATCH|DELETE)\b/;
const HTTP_STATUS = /^(\d{3})\s+([A-Z]{2,})/;

function highlightHttp(line: string): ReactNode[] {
  const verb = line.match(HTTP_LEAD);
  if (verb) {
    return [
      <span key="v" className="text-rail-indigo font-semibold">
        {verb[1]}
      </span>,
      line.slice(verb[1].length),
    ];
  }

  const status = line.trimStart().match(HTTP_STATUS);
  if (status) {
    const indent = line.length - line.trimStart().length;
    return [
      line.slice(0, indent),
      <span key="s" className="text-rail-teal font-semibold">
        {status[0]}
      </span>,
      line.trimStart().slice(status[0].length),
    ];
  }

  return highlightJson(line);
}

/** Identifiers like REQ-4471 are the thing a reader can actually go open. */
const IDENTIFIER = /\b([A-Z]{2,}-\d+)\b/g;

function highlightAnswer(line: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of line.matchAll(IDENTIFIER)) {
    const index = match.index ?? 0;
    if (index > cursor) nodes.push(line.slice(cursor, index));
    nodes.push(
      <span key={key++} className="text-rail-teal font-semibold">
        {match[1]}
      </span>,
    );
    cursor = index + match[0].length;
  }

  if (cursor < line.length) nodes.push(line.slice(cursor));
  return nodes;
}

export function CodeBlock({
  code,
  kind,
  className,
}: {
  code: string;
  kind: PayloadKind;
  className?: string;
}) {
  const lines = code.split("\n");

  const render = (line: string): ReactNode[] => {
    if (kind === "json") return highlightJson(line);
    if (kind === "http") return highlightHttp(line);
    if (kind === "answer") return highlightAnswer(line);
    return [line];
  };

  return (
    // Wide payloads scroll inside their own box; the page never scrolls sideways.
    <pre
      className={cn(
        "text-muted-foreground overflow-x-auto font-mono text-[0.8rem] leading-[1.7] whitespace-pre",
        kind === "prose" && "text-foreground/85",
        className,
      )}
    >
      <code>
        {lines.map((line, index) => (
          <Fragment key={index}>
            {line.length === 0 ? "\u00A0" : render(line)}
            {index < lines.length - 1 ? "\n" : null}
          </Fragment>
        ))}
      </code>
    </pre>
  );
}
