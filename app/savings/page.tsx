"use client"

import {useSidebarData} from '@/context/SidebarContext'
import React from 'react'

const SavingsPage = () => {
  const {collapsed} = useSidebarData()

  return (
    <main className={`bg-secondaryBG h-screen py-6 pr-6 transition-all ${collapsed ? 'pl-20' : 'pl-[299px]'}`}>
      SavingsPage
    </main>
  )
}

export default SavingsPage