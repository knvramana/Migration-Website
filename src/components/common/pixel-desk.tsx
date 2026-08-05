/**
 * A small pixel-art workstation: a CRT with a blinking cursor, a mug that
 * steams, and a plant.
 *
 * Deliberately not a 3D model. The obvious reference here renders a .glb
 * through Three.js, which is 600KB+ of JavaScript before anything appears —
 * this is ~2KB of inline SVG animated with CSS, so it costs nothing and
 * cannot regress LCP. Decorative, so it is hidden from assistive tech, and
 * every animation stops under prefers-reduced-motion.
 */
export function PixelDesk({ className }: { className?: string }) {
  const px = (x: number, y: number, w = 1, h = 1, fill = "currentColor") => (
    <rect
      key={`${x}-${y}-${w}-${h}`}
      x={x}
      y={y}
      width={w}
      height={h}
      fill={fill}
    />
  );

  return (
    <svg
      viewBox="0 0 40 30"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g className="pd-bob">
        {/* monitor shell */}
        <g className="text-foreground/85">
          {px(6, 4, 20, 1)}
          {px(6, 5, 1, 12)}
          {px(25, 5, 1, 12)}
          {px(6, 17, 20, 1)}
          {/* stand */}
          {px(14, 18, 4, 2)}
          {px(11, 20, 10, 1)}
        </g>

        {/* screen */}
        <rect x={7} y={5} width={18} height={12} className="fill-brand/12" />

        {/* code lines */}
        <g className="fill-brand">
          <rect
            x={9}
            y={7}
            width={7}
            height={1}
            className="pd-line pd-line-1"
          />
          <rect
            x={9}
            y={9}
            width={11}
            height={1}
            className="pd-line pd-line-2"
          />
          <rect
            x={11}
            y={11}
            width={8}
            height={1}
            className="pd-line pd-line-3"
          />
          <rect
            x={9}
            y={13}
            width={5}
            height={1}
            className="pd-line pd-line-4"
          />
          {/* cursor */}
          <rect x={15} y={13} width={2} height={1} className="pd-caret" />
        </g>

        {/* mug + steam */}
        <g className="text-foreground/70">
          {px(30, 14, 5, 1)}
          {px(30, 15, 1, 4)}
          {px(34, 15, 1, 4)}
          {px(35, 16, 1, 2)}
          {px(30, 19, 5, 1)}
        </g>
        <g className="fill-foreground/35">
          <rect
            x={31}
            y={11}
            width={1}
            height={2}
            className="pd-steam pd-steam-1"
          />
          <rect
            x={33}
            y={10}
            width={1}
            height={2}
            className="pd-steam pd-steam-2"
          />
        </g>

        {/* plant */}
        <g className="text-foreground/60">
          {px(2, 20, 4, 1)}
          {px(2, 21, 1, 3)}
          {px(5, 21, 1, 3)}
          {px(2, 24, 4, 1)}
        </g>
        <g className="fill-foreground/45 pd-leaf">
          <rect x={3} y={17} width={1} height={3} />
          <rect x={2} y={16} width={1} height={2} />
          <rect x={4} y={15} width={1} height={3} />
        </g>

        {/* desk */}
        <g className="text-foreground/85">{px(0, 25, 40, 1)}</g>
      </g>
    </svg>
  );
}
