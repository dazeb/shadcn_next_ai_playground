import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { LayoutGrid, Database, FileText, Users, Sliders, HardDrive, BarChart, Key, MessageCircle } from 'lucide-react';

const menuItems = [
  { icon: LayoutGrid, label: 'Playground', href: '/playground' },
  { icon: MessageCircle, label: 'Chat', href: '/chat' },
  { icon: Users, label: 'Assistants', href: '/assistants' },
  { icon: FileText, label: 'Completions', href: '/completions' },
  { icon: Database, label: 'Threads', href: '/threads' },
  { icon: Sliders, label: 'Fine-tuning', href: '/fine-tuning' },
  { icon: HardDrive, label: 'Storage', href: '/storage' },
  { icon: BarChart, label: 'Usage', href: '/usage' },
  { icon: Key, label: 'API keys', href: '/api-keys' },
];

const LeftSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">AI Platform</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <Button variant="outline" className="w-full">
          <Users className="mr-2 h-4 w-4" />
          Personal
        </Button>
      </div>
    </aside>
  );
};

export default LeftSidebar;