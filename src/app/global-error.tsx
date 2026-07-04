"use client";

import { useEffect } from "react";

/**
 * Root-level error boundary. Must render its own <html> + <body> because it
 * replaces the entire document when the root layout itself fails.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[PropFlow] Global error:", error);
  }, [error]);

  return (
    <html lang="en-IN">
      <body
        style={{
          fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          background: "#0a0a0f",
          color: "#f0f0f5",
          minHeight: "100dvh",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "32rem", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              height: "5rem",
              width: "5rem",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              background: "rgba(245,158,11,0.15)",
              marginBottom: "2rem",
            }}
          >
            <span style={{ fontSize: "2rem" }}>⚠️</span>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>
            Something went very wrong.
          </h1>
          <p
            style={{
              color: "#9696ab",
              marginTop: "1rem",
              lineHeight: 1.6,
            }}
          >
            The application failed to load. Please refresh the page — if the problem
            persists, email{" "}
            <a
              href="mailto:hello@propflow.in"
              style={{ color: "#3b82f6", textDecoration: "underline" }}
            >
              hello@propflow.in
            </a>
            .
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
