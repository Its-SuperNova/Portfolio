"use client";

import type React from "react";

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function ResponsiveWrapper({
  children,
  className = "",
}: ResponsiveWrapperProps) {
  return <div className={`w-full ${className}`}>{children}</div>;
}
