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
      className="py-2 px-4 w-full border-2 rounded-md border-white/60 text-white/80 focus:outline-none focus:ring transition duration-200 ease-in-out"
    />
  )
}

export default SearchBar;