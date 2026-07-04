"use client";

import { Component, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div
          className="flex min-h-[400px] items-center justify-center"
          role="alert"
        >
          <div className="mx-auto max-w-md px-6 text-center">
            <div className="border-border bg-surface-secondary mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border">
              <AlertTriangle className="text-warning h-6 w-6" />
            </div>
            <h2 className="font-display text-fg mt-5 text-xl font-semibold tracking-[-0.022em]">
              Something went wrong
            </h2>
            <p className="text-fg-tertiary mt-2 text-sm">
              An unexpected error occurred. Please try again.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-6 gap-2"
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
            >
              <RefreshCw className="h-4 w-4" />
              Reload page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
