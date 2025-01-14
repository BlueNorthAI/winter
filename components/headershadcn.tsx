'use client';
import Image from 'next/image';
import * as React from 'react';
import {
  UserButton} from '@clerk/nextjs';

import { NavigationRisk } from './navigationrisk';

export function Header() {
  return (
   
    <header className="sticky top-0 z-50 flex items-center justify-between max-w-full h-16 px-4 shrink-0 bg-white">
        <div className="flex items-center justify-end space-x-2">
        <div className="flex items-center text-sky-500 text-lg ">
          <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
            <UserButton />
          </React.Suspense>
        </div>
        {/* <ThemeToggle /> */}
      </div>
  

      <NavigationRisk />
      <div className="">
         <Image
                className="mr-2"
                src="/assets/SN.png"
                alt="logo"
                width={50}
                height={50}
              />
        {/* <button className="text-sky-500 font-semibold  p-1 flex items-center space-x-2 ">
          <div className="relative flex  size-13 items-center  justify-center rounded-full">
            <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
             
            </div>
          </div>
        </button> */}
      </div>
    </header>
  );
}