import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CircleUser,
  KeyRound,
  LogOut,
  MapPinHouse,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { ReactNode, useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import MyOrders from "./components/MyOrders";
import MyPoints from "./components/MyPoints";
import MyAddress from "./components/MyAddress";
import ChangePassword from "./components/ChangePassword";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthProvider";

interface UserAccountPageProps {
  // Define props here
}

const sidebarMenuItems: {
  label: string;
  value: string;
  icon: ReactNode;
}[] = [
  {
    label: "My Orders",
    value: "orders",
    icon: <ShoppingCart className="size-4 mr-2" />,
  },
  {
    label: "My Points",
    value: "points",
    icon: <Sparkles className="size-4 mr-2" />,
  },
  {
    label: "Address",
    value: "address",
    icon: <MapPinHouse className="size-4 mr-2" />,
  },
  {
    label: "Change Password",
    value: "change-password",
    icon: <KeyRound className="size-4 mr-2" />,
  },
];

const UserAccountPage: React.FC<UserAccountPageProps> = ({}) => {
  const [selectedMenu, setSelectedMenu] = useState("personal-info");
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <section>
      <MaxWidthWrapper>
        <Tabs
          value={selectedMenu}
          onValueChange={(value) => setSelectedMenu(value)}
          className="w-full h-full md:flex md:space-x-8 md:-mb-10"
        >
          <TabsList className="h-full md:w-[350px] md:min-h-[80vh] flex md:flex-col justify-start flex-wrap gap-y-4 py-4 md:rounded-none bg-[#EDEDED]">
            <div className="text-sm flex flex-col w-full border-b pb-4">
              <Button
                size="sm"
                variant="ghost"
                className={`${
                  selectedMenu === "personal-info" && "text-black"
                } text-sm justify-start hover:bg-[#EDEDED]`}
                onClick={() => setSelectedMenu("personal-info")}
              >
                <CircleUser className="size-5 mr-2" />
                {user?.name}
              </Button>
              <div className="ml-10 flex flex-col">
                <span className="text-xs">Member Type : General</span>
                <span className="text-xs">
                  Points <span className="text-[#37a9fd]">200</span>
                </span>
              </div>
            </div>
            {sidebarMenuItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="justify-start md:w-full data-[state=active]:text-[#37a9fd] hover:text-[#37a9fd] data-[state=active]:shadow-sm py-2"
              >
                {item.icon}
                {item.label}
              </TabsTrigger>
            ))}
            <Button
              size="sm"
              variant="ghost"
              className="md:justify-start md:w-full text-sm hover:bg-[#EDEDED]"
              onClick={handleLogOut}
            >
              <LogOut className="size-4 mr-2" />
              Logout
            </Button>
          </TabsList>
          <TabsContent value="personal-info" className="w-full">
            <PersonalInfo />
          </TabsContent>
          <TabsContent value="orders" className="w-full">
            <MyOrders />
          </TabsContent>
          <TabsContent value="points" className="w-full">
            <MyPoints />
          </TabsContent>
          <TabsContent value="address" className="w-full">
            <MyAddress />
          </TabsContent>
          <TabsContent value="change-password" className="w-full">
            <ChangePassword />
          </TabsContent>
        </Tabs>
      </MaxWidthWrapper>
    </section>
  );
};

export default UserAccountPage;
