import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthProvider";
import { useState } from "react";

const PersonalInfo = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState(() => {
    if (user) {
      const nameParts = user.name.split(" ");
      return {
        first_name: nameParts[0] || "",
        last_name: nameParts.slice(1).join(" ") || "",
        phone_number: user.phone || "",
        email: user.email || "",
      };
    }

    return {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
    };
  });

  return (
    <div className="grid gap-4 border p-4 rounded-lg my-4 md:my-6 md:w-3/4">
      <h2 className="text-xl font-bold">Personal Information</h2>
      <div className="flex space-x-4 w-full">
        <div className="w-full">
          <Label htmlFor="first_name">First Name</Label>
          <Input
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            type="text"
            id="first_name"
          />
        </div>
        <div className="w-full">
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            value={formData.last_name}
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
            type="tel"
            id="last_name"
          />
        </div>
      </div>

      <div className="">
        <Label htmlFor="phone_number">Phone Number</Label>
        <Input
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
          type="tel"
          id="phone_number"
          disabled
        />
      </div>

      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          id="email"
          disabled
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
