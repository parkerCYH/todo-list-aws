'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useScrollRegistry } from '@/hooks/useScrollRegistry';

export const NavigationMenuDemo = () => {
    const { scrollTo } = useScrollRegistry();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            scrollTo(hash);
        }

    }, []);

    const handleClick = (id: string) => {
        scrollTo(id);
        setOpen(false);
    };

    return (
        <div className="flex">
            {/* Desktop Menu */}
            <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                    <NavigationMenuItem
                        className="cursor-pointer"
                        onClick={() => handleClick('projects')}
                    >
                        Projects
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Hamburger */}
            <div className="relative block md:hidden">
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-md border p-2"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

                {open && (
                    <div className="absolute right-0 z-50 mt-2 w-40 rounded-md bg-white p-4 shadow-md">
                        <div
                            className="cursor-pointer px-2 py-2"
                            onClick={() => handleClick('projects')}
                        >
                            Projects
                        </div>
                        {/* 更多項目也可以加 */}
                    </div>
                )}
            </div>
        </div>
    );
};
