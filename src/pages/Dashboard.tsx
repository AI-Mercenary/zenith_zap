
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, BatteryFull, Heart, BatteryMedium } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Footer from '@/components/layout/Footer';

const mockUser = {
  name: "Alex Thompson",
  email: "alex@example.com",
  role: "player" as const,
  sport: "Basketball",
  age: 24,
  intensity: "High",
  diet: "Balanced",
  hydrationLevel: 75,
  recentOrders: [
    { id: "#1234", date: "2025-05-02", status: "Delivered", total: 29.97 },
    { id: "#1201", date: "2025-04-15", status: "Delivered", total: 49.94 },
  ],
  stats: {
    workoutsThisWeek: 4,
    avgHydrationLevel: 72,
    favoriteDrink: "Proton Berry Blast"
  }
};

const mockCoach = {
  name: "Coach Sarah Miller",
  email: "sarah@example.com",
  role: "coach" as const,
  sport: "Basketball",
  team: "Phoenix Risers",
  players: 12,
  recentOrders: [
    { id: "#1298", date: "2025-05-03", status: "Processing", total: 129.85 },
    { id: "#1185", date: "2025-04-10", status: "Delivered", total: 149.70 },
  ],
  teamStats: {
    averageHydration: 68,
    topPerformer: "Michael K.",
    needsAttention: ["Jason T.", "Emma R."]
  }
};

const Dashboard = () => {
  // In a real app, we'd determine this from authentication
  const [userType, setUserType] = useState<'player' | 'coach'>('player');
  
  const user = userType === 'player' ? mockUser : mockCoach;
  
  // For demo purposes only, let's add a way to toggle between player/coach views
  const toggleUserType = () => {
    setUserType(userType === 'player' ? 'coach' : 'player');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader user={user} />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* This button is just for demo purposes */}
          <div className="mb-6 flex justify-end">
            <button 
              onClick={toggleUserType} 
              className="text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full"
            >
              Switch to {userType === 'player' ? 'Coach' : 'Player'} View (Demo)
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6">
              Welcome back, {user.name.split(' ')[0]}
            </h1>
            
            {userType === 'player' ? <PlayerDashboard user={mockUser} /> : <CoachDashboard coach={mockCoach} />}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const PlayerDashboard = ({ user }: { user: typeof mockUser }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Current Hydration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BatteryMedium className="h-8 w-8 mr-2 text-zenith-blue" />
              <div>
                <span className="text-2xl font-bold">{user.hydrationLevel}%</span>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                  <div 
                    className="h-2 bg-zenith-blue rounded-full" 
                    style={{ width: `${user.hydrationLevel}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Workouts This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Heart className="h-8 w-8 mr-2 text-zenith-orange animate-heartbeat" />
              <span className="text-2xl font-bold">{user.stats.workoutsThisWeek} / 6</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg. Hydration Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BatteryFull className="h-8 w-8 mr-2 text-zenith-yellow" />
              <span className="text-2xl font-bold">{user.stats.avgHydrationLevel}%</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Favorite Product</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-xl font-semibold text-zenith-blue">{user.stats.favoriteDrink}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Hydration Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="today">
                <TabsList className="mb-4">
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="week">This Week</TabsTrigger>
                  <TabsTrigger value="month">This Month</TabsTrigger>
                </TabsList>
                
                <TabsContent value="today">
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2 text-zenith-blue">Morning Workout</h3>
                      <p className="text-gray-600 mb-2">Basketball training - High intensity</p>
                      <div className="flex items-center gap-2">
                        <div className="bg-zenith-blue/20 py-1 px-2 rounded-full text-sm text-zenith-blue font-medium">
                          500ml Proton Citrus Surge
                        </div>
                        <div className="bg-zenith-blue/20 py-1 px-2 rounded-full text-sm text-zenith-blue font-medium">
                          15 min pre-workout
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2 text-zenith-orange">During Practice</h3>
                      <p className="text-gray-600 mb-2">2 hour team practice</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="bg-zenith-orange/20 py-1 px-2 rounded-full text-sm text-zenith-orange font-medium">
                          750ml Neutron Endurance
                        </div>
                        <div className="bg-zenith-orange/20 py-1 px-2 rounded-full text-sm text-zenith-orange font-medium">
                          Sip every 15-20 min
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2 text-zenith-yellow">Post-Workout</h3>
                      <p className="text-gray-600 mb-2">Recovery period</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="bg-zenith-yellow/20 py-1 px-2 rounded-full text-sm text-zenith-yellow font-medium">
                          500ml Electron Recover
                        </div>
                        <div className="bg-zenith-yellow/20 py-1 px-2 rounded-full text-sm text-zenith-yellow font-medium">
                          Within 30 min
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="week">
                  <div className="flex justify-center items-center h-64 text-gray-500">
                    Weekly hydration plan chart will display here
                  </div>
                </TabsContent>
                
                <TabsContent value="month">
                  <div className="flex justify-center items-center h-64 text-gray-500">
                    Monthly hydration plan chart will display here
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recommended Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-zenith-blue/10 rounded-lg flex items-center justify-center">
                    <img src="/proton-berry.png" alt="Proton Berry Blast" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold">Proton Berry Blast</h4>
                    <p className="text-sm text-gray-600">Perfect for your morning workouts</p>
                    <p className="text-zenith-blue font-medium">$4.99</p>
                  </div>
                </div>
                
                <div className="bg-white border rounded-lg p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-zenith-orange/10 rounded-lg flex items-center justify-center">
                    <img src="/neutron-endurance.png" alt="Neutron Endurance" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold">Neutron Endurance</h4>
                    <p className="text-sm text-gray-600">Based on your training intensity</p>
                    <p className="text-zenith-blue font-medium">$4.49</p>
                  </div>
                </div>
                
                <div className="bg-white border rounded-lg p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-zenith-yellow/10 rounded-lg flex items-center justify-center">
                    <img src="/electron-recover.png" alt="Electron Recover" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold">Electron Recover</h4>
                    <p className="text-sm text-gray-600">Optimal for post-basketball recovery</p>
                    <p className="text-zenith-blue font-medium">$5.49</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.recentOrders.map((order) => (
                  <div key={order.id} className="bg-white border rounded-lg p-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold">{order.id}</span>
                      <span className={order.status === "Delivered" ? "text-green-600" : "text-amber-600"}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{order.date}</span>
                      <span className="font-medium">${order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

const CoachDashboard = ({ coach }: { coach: typeof mockCoach }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-2xl font-bold">{coach.team}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Players</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-2xl font-bold">{coach.players}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg. Team Hydration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BatteryMedium className="h-8 w-8 mr-2 text-zenith-blue" />
              <div>
                <span className="text-2xl font-bold">{coach.teamStats.averageHydration}%</span>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                  <div 
                    className="h-2 bg-zenith-blue rounded-full" 
                    style={{ width: `${coach.teamStats.averageHydration}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Top Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-xl font-semibold text-zenith-blue">{coach.teamStats.topPerformer}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Team Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="hydration">
                <TabsList className="mb-4">
                  <TabsTrigger value="hydration">Hydration Levels</TabsTrigger>
                  <TabsTrigger value="consumption">Consumption Data</TabsTrigger>
                  <TabsTrigger value="performance">Performance Impact</TabsTrigger>
                </TabsList>
                
                <TabsContent value="hydration">
                  <div className="h-64 flex justify-center items-center border border-dashed rounded-lg">
                    [Hydration Levels Chart]
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <h3 className="font-bold mb-2">Players Needing Attention</h3>
                      <ul className="space-y-2">
                        {coach.teamStats.needsAttention.map((player, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Battery className="text-red-500 h-5 w-5" />
                            <span>{player} - Consistently under 50% hydration</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="consumption">
                  <div className="h-64 flex justify-center items-center border border-dashed rounded-lg">
                    [Consumption Data Chart]
                  </div>
                </TabsContent>
                
                <TabsContent value="performance">
                  <div className="h-64 flex justify-center items-center border border-dashed rounded-lg">
                    [Performance Impact Chart]
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Team Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                  <h3 className="font-bold mb-1">Pre-Game Protocol</h3>
                  <p className="text-gray-700">
                    Based on recent performance data, implementing a standardized pre-game hydration protocol 
                    (2 hours before game time) has shown to improve team performance by 12%.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
                  <h3 className="font-bold mb-1">Practice Hydration Stations</h3>
                  <p className="text-gray-700">
                    Adding additional hydration stations during practices and implementing structured 
                    hydration breaks every 20 minutes is recommended.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Bulk Order Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-bold">Team Pack: Proton Series</h4>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-zenith-blue/10 rounded-lg flex items-center justify-center mr-3">
                        <img src="/proton-citrus.png" alt="Proton Pack" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">24 bottles</p>
                        <p className="text-zenith-blue font-medium">$99.99</p>
                      </div>
                    </div>
                    <button className="bg-zenith-blue text-white px-3 py-1 rounded-md text-sm">Add</button>
                  </div>
                </div>
                
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-bold">Team Pack: Neutron Series</h4>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-zenith-orange/10 rounded-lg flex items-center justify-center mr-3">
                        <img src="/neutron-steady.png" alt="Neutron Pack" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">24 bottles</p>
                        <p className="text-zenith-blue font-medium">$94.99</p>
                      </div>
                    </div>
                    <button className="bg-zenith-blue text-white px-3 py-1 rounded-md text-sm">Add</button>
                  </div>
                </div>
                
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-bold">Team Pack: Electron Series</h4>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-zenith-yellow/10 rounded-lg flex items-center justify-center mr-3">
                        <img src="/electron-recover.png" alt="Electron Pack" className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">24 bottles</p>
                        <p className="text-zenith-blue font-medium">$109.99</p>
                      </div>
                    </div>
                    <button className="bg-zenith-blue text-white px-3 py-1 rounded-md text-sm">Add</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Team Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {coach.recentOrders.map((order) => (
                  <div key={order.id} className="bg-white border rounded-lg p-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold">{order.id}</span>
                      <span className={order.status === "Delivered" ? "text-green-600" : "text-amber-600"}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{order.date}</span>
                      <span className="font-medium">${order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
