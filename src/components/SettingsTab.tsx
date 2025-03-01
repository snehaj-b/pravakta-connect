
import React, { useState } from "react";
import { Bell, Moon, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const SettingsTab = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sessions: true,
    messages: true,
    community: false,
  });
  
  const [darkMode, setDarkMode] = useState(false);
  
  const handleNotificationChange = (key: string) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key as keyof typeof notifications],
    });
  };
  
  return (
    <div className="fade-in mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Bell className="w-5 h-5 mr-2" />
            <h3 className="text-xl font-semibold">Notification Settings</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive emails about your account</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.email}
                  onChange={() => handleNotificationChange("email")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#336dce]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Receive notifications on this device</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.push}
                  onChange={() => handleNotificationChange("push")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#336dce]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Session Reminders</p>
                <p className="text-sm text-muted-foreground">Get reminded about upcoming sessions</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.sessions}
                  onChange={() => handleNotificationChange("sessions")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#336dce]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Message Notifications</p>
                <p className="text-sm text-muted-foreground">Get notified when you receive messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.messages}
                  onChange={() => handleNotificationChange("messages")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#336dce]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Community Updates</p>
                <p className="text-sm text-muted-foreground">Get updates from your communities</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.community}
                  onChange={() => handleNotificationChange("community")}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#336dce]"></div>
              </label>
            </div>
          </div>
          
          <Button className="mt-6 bg-[#336dce]">Save Preferences</Button>
        </div>
        
        <div className="space-y-8">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Moon className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-semibold">Appearance</h3>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#336dce]"></div>
              </label>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Shield className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-semibold">Privacy & Security</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Profile Visibility</p>
                <select className="mt-2 w-full p-2 border border-input rounded-md bg-background">
                  <option>Public - Anyone can view your profile</option>
                  <option>Private - Only your mentors can view your profile</option>
                  <option>Community - Only community members can view your profile</option>
                </select>
              </div>
              
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <Button variant="outline" className="mt-2">Enable 2FA</Button>
              </div>
              
              <div>
                <p className="font-medium">Password</p>
                <Button variant="outline" className="mt-2">Change Password</Button>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center mb-6">
              <CreditCard className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-semibold">Subscription</h3>
            </div>
            
            <div>
              <p className="font-medium">Current Plan</p>
              <div className="mt-2 p-3 bg-[#336dce]/10 rounded-lg">
                <p className="text-[#336dce] font-medium">Free Tier</p>
                <p className="text-sm text-muted-foreground">
                  Basic features with limited sessions
                </p>
              </div>
              
              <Button className="mt-4 w-full bg-[#336dce]">Upgrade to Pro</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
