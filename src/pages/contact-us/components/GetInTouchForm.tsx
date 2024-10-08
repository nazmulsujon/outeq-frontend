import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface GetInTouchFormProps {
  // Define props here
}

const GetInTouchForm: React.FC<GetInTouchFormProps> = ({}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  console.log("formData", formData);

  return (
    <form className="space-y-4">
      <div className="flex space-x-4 w-full">
        <div className="w-full">
          <Label htmlFor="name">Name *</Label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="w-full">
          <Label htmlFor="email">Email *</Label>
          <Input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
            type="email"
            id="email"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="phone_number">Phone Number *</Label>
        <Input
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
          placeholder="Number"
          type="tel"
          id="phone_number"
          required
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Type your message"
          id="message"
          className="h-32"
        />
      </div>

      <div className="w-full">
        <Button size="sm" type="submit" className="w-full bg-gradient-primary">
          Send
        </Button>
      </div>
    </form>
  );
};

export default GetInTouchForm;
