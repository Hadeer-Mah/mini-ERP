import React from 'react'

export default function MainButton({ btnTitle, secondaryBtn = false}) {
  return (
    <button className={`px-4 py-2 rounded-[50px] cursor-pointer ${secondaryBtn ? "border border-[var(--light-color)] text-[var(--light-color)]" : "bg-[var(--primary-color)] text-white"}`}>{btnTitle}</button>
  )
}
