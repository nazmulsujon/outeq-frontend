import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  user_type: string;
  email_verified_at: string;
  profile_image: string | null;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userToken: string, userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedToken = Cookies.get("accessToken");
    const storedUser = Cookies.get("userData");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userToken: string, userData: User) => {
    setToken(userToken);
    setUser(userData);

    Cookies.set("accessToken", userToken, {
      expires: 7, // Keep the cookie for 7 days
      secure: true, // Only send over HTTPS
      sameSite: "Strict", // Prevent CSRF attacks
      path: "/", // Make the cookie accessible throughout the app
    });

    Cookies.set("userData", JSON.stringify(userData), {
      expires: 7,
      secure: true,
      sameSite: "Strict",
      path: "/",
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);

    Cookies.remove("accessToken", { path: "/" });
    Cookies.remove("userData", { path: "/" });
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
