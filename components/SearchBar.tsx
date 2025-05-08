// SearchBar.tsx
import React from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 w-full border rounded-md"
    />
  )
}

export default SearchBar;