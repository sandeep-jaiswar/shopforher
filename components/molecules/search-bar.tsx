"use client"

import {
  Command,
  CommandInput,
} from "@/components/ui/command"

export function SearchBar() {
  return (
    <Command className="rounded-lg border shadow-md max-w-xs">
      <CommandInput placeholder="search..." />
    </Command>
  )
}
