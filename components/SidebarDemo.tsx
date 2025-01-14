
import {
  PowerIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ sidebarMenu }: { sidebarMenu: any[] }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className={`  ${open ? 'w-24' : 'w-16'} text-gray-100 duration-500 `}>
      <nav aria-label="Sidebar">
        <div className="static  w-full mt-3 flex-1 space-y-1 px-2 border-r h-screen">
          {sidebarMenu?.map((item, index) => (
            <Link
              href={item.to}
              key={item.id}
              className={classNames(
                pathname === item.to
                  ? 'bg-sky-100 text-sky-500 border border-sky-500'
                  : 'text-slate-700 hover:bg-sky-50 hover:text-sky-500 hover:border hover:border-sky-500',
                'group  flex flex-col items-center rounded-md p-4 '
              )}
            >
              <item.icon className="size-4" aria-hidden="true" />
              <h2 className="text-center text-xs font-medium ">{item?.name}</h2>
            </Link>
          ))}

          <div className="px-2">
          
              <button className="text-slate-700 hover:bg-sky-50 hover:text-sky-500 hover:border hover:border-sky-500 group flex w-full flex-col items-center rounded-md p-4 text-xs font-medium">
                <PowerIcon className="size-4" />
                <h2
                  className={`whitespace-pre duration-500 ${
                    !open && 'translate-x-28 overflow-hidden opacity-0'
                  }`}
                >
                  Sign Out
                </h2>
              </button>
        
          </div>
        </div>
      </nav>
    </div>
  );
}
