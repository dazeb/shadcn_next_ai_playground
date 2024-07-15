import React from "react";
import LeftSidebar from '@/components/LeftSidebar';
import CenterConsole from '@/components/CenterConsole';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import {
  BellIcon,
  ClipboardIcon,
  DatabaseIcon,
  LayoutGridIcon,
  MoveHorizontalIcon,
  PenToolIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

// src/app/dashboard/page.tsx



const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <LeftSidebar />
      <main className="flex-1 flex flex-col">
        <CenterConsole />
      </main>
    </div>
  );
};

export default Dashboard;
