'use client'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { cn } from '@/lib/utils'

import { ChatHistory } from './chat-history'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'

import { auth } from '@/auth'
import { Session } from '@/lib/types'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  {
    name: 'WM Agent',
    to: '/chat',
    current: true
  },
  {
    name: 'Dashboard',
    to: '/agent/dashboard',
    current: true
  },
  {
    name: 'Control Tower',
    to: '/agent/events',
    current: true
  },
   {
    name: 'Simulation',
    to: '/agent/netsim',
    current: true
  },
  {
    name: 'Inventory',
    to: '/agent/inventory',
    current: true
  },

  {
    name: 'Track & Trace',
    to: '/agent/track/order',
    current: true
  },
  {
    name: 'Analytics',
    to: '/agent/warehouse',
    current: true
  }
];

export function NavigationRisk() {
  const pathname = usePathname()
  return (
      <nav >
        <div className="w-full">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4">
                {navigation?.map(item => (
                  <Link
                    href={item.to}
                    key={item.name}
                    className={classNames(
                      'rounded-md px-2 py-2 text-xs font-semibold',
                      pathname === item.to
                        ? 'bg-sky-500 text-white border border-sky-500'
                        : 'text-primary hover:bg-sky-500 hover:text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}