
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Battery, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

interface DashboardHeaderProps {
  user: {
    name: string;
    email: string;
    role: 'player' | 'coach';
    avatar?: string;
  };
}

const DashboardHeader = ({ user }: DashboardHeaderProps) => {
  const [notificationCount, setNotificationCount] = useState<number>(3);

  const handleNotificationClick = () => {
    setNotificationCount(0);
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="mr-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full energy-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="font-montserrat font-bold text-xl">
                  ZENITH<span className="text-zenith-orange">ZAP</span>
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold">
                Welcome, <span className="text-zenith-blue">{user.name}</span>
              </h1>
              <p className="text-gray-600 text-sm">
                {user.role === 'player' ? 'Athlete Dashboard' : 'Coach Dashboard'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
              <Battery className={`h-5 w-5 text-green-500`} />
              <span className="font-medium text-sm">Hydration: 75%</span>
            </div>

            <motion.div className="relative" whileTap={{ scale: 0.97 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={handleNotificationClick}
              >
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {notificationCount}
                  </span>
                )}
              </Button>
            </motion.div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-zenith-blue text-white">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="/dashboard/profile" className="w-full flex items-center">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/dashboard/settings" className="w-full flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <Link to="/logout" className="w-full">Log out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
