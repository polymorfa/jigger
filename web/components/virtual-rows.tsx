"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ROW_LIST } from "@/lib/metrics";

// A fixed-row-height virtualized scroll body. Only rows in (or near) the
// viewport are mounted, so a 500- or 2,700-row list stays responsive. The
// caller supplies its own sticky header above this element.
//
// Vertical only. Every table that uses this wraps it in its own horizontal
// scroller for the column set, and `overflow-y: auto` alone promotes the other
// axis to `auto` too — which put a second horizontal bar directly under the
// first on every wide table.
export function VirtualRows<T>({
  items,
  rowHeight = ROW_LIST,
  overscan = 14,
  renderRow,
  getKey,
  className = "",
}: {
  items: T[];
  rowHeight?: number;
  overscan?: number;
  renderRow: (item: T, index: number) => React.ReactNode;
  getKey: (item: T, index: number) => string | number;
  className?: string;
}) {
  const parentRef = useRef<HTMLDivElement>(null);
  const virt = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan,
  });

  return (
    <div ref={parentRef} className={"h-full overflow-y-auto overflow-x-hidden " + className}>
      <div style={{ height: virt.getTotalSize(), position: "relative" }}>
        {virt.getVirtualItems().map((vi) => {
          const item = items[vi.index]!;
          return (
            <div
              key={getKey(item, vi.index)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: vi.size,
                transform: `translateY(${vi.start}px)`,
              }}
            >
              {renderRow(item, vi.index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
