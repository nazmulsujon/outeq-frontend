import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/PasswordInput";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <div className="border p-4 rounded-lg my-4 md:my-6 md:w-3/4">
      <h2 className="text-xl md:text-2xl font-semibold mb-3">
        Change Password
      </h2>
      <div>
        <Label htmlFor="current_password">Current Password</Label>
        <PasswordInput
          id="current_password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <Label htmlFor="password">New Password</Label>
        <PasswordInput
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div>
        <Label htmlFor="password_confirmation">Confirm Password</Label>
        <PasswordInput
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className="flex justify-end mt-3">
        <Button size="sm" type="submit" className="bg-gradient-primary">
          Update Password
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
