"use client";

import { useEffect, useRef } from "react";

const CAL_EMBED_ID = "my-cal-inline-request-for-appointment";
const CAL_NAMESPACE = "request-for-appointment";

/**
 * Injects and runs the Cal.com inline embed script.
 * Renders the container div and initializes Cal when mounted.
 */
export function CalComInlineEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const scriptContent = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "${CAL_NAMESPACE}", {origin:"https://app.cal.com"});
Cal.ns["${CAL_NAMESPACE}"]("inline", {
  elementOrSelector:"#${CAL_EMBED_ID}",
  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
  calLink: "aiza-bitoon-yacdkz/request-for-appointment",
});
Cal.ns["${CAL_NAMESPACE}"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
`;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = scriptContent;
    script.id = "cal-com-inline-embed";
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={CAL_EMBED_ID}
      className="w-full min-h-[600px] overflow-auto rounded-lg border border-accent/20 bg-background-muted/50"
      style={{ width: "100%", minHeight: "600px", overflow: "auto" }}
    />
  );
}
