'use client';

import type { Route } from 'next';
import { useRouter } from 'next/navigation';

type NavEntry = {
    id: string;
    label: string;
    path?: Route;
    description?: string;
    children?: NavEntry[];
};

const navItems: NavEntry[] = [
    { id: 'home', label: '首頁', path: '/' },
    { id: 'about', label: '關於', path: '/about' },
    {
        id: 'projects',
        label: '作品',
        children: [
            {
                id: 'showcase',
                label: 'Showcase',
                path: '/projects/showcase',
                description: '展示各類作品與專案',
            },
            {
                id: 'deep-dive',
                label: 'Deep-Dive',
                path: '/projects/deep-dive',
                description: '深入技術專題與研究',
            },
            {
                id: 'playground',
                label: 'Playground',
                path: '/projects/playground',
                description: '互動實驗與小工具',
            },
        ],
    },
    { id: 'contact', label: '聯絡', path: '/contact' },
];

export default function Header() {
    const router = useRouter();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <button
                        onClick={() => router.push('/')}
                        className="text-lg font-semibold  cursor-pointer"
                    >
                        Hi Parker
                    </button>

                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        if (item.path) router.push(item.path);
                                    }}
                                    className="text-sm hover:text-gray-600 transition-colors cursor-pointer"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
