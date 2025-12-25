/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { handleApiError } from "@/utils/handleApiError";
import { Eye, EyeOff } from "lucide-react";

const TEST_USERS = {
  admin: {
    email: "admin@example.com",
    password: "123456",
  },
  agent: {
    email: "agent@example.com",
    password: "@Agent1234",
  },
  user: {
    email: "user@example.com",
    password: "@User1234",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // ✅ Auto-fill test credentials
  const fillTestUser = (type: keyof typeof TEST_USERS) => {
    setForm(TEST_USERS[type]);
 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginUser(form).unwrap();

      if (result.token) sessionStorage.setItem("authToken", result.token);

      if (
        result?.data?.user?.is_active === "BLOCKED" ||
        result?.data?.user?.is_active === "SUSPEND"
      ) {
        toast.error(`User is ${result?.data?.user?.is_active}`);
        navigate("/login");
      } else {
        toast.success("Logged in successfully!");
        navigate("/");
      }
    } catch (err: any) {
      handleApiError(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <Card className="w-full max-w-md bg-card border border-input rounded-2xl shadow-xl p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
            Login
          </CardTitle>
          <p className="text-muted-foreground text-sm md:text-base">
            Welcome back! Login to access your account.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* ✅ Test Credentials Buttons */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground text-center">
              Quick Login (Test Credentials)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => fillTestUser("admin")}
              >
                Admin
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => fillTestUser("agent")}
              >
                Agent
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => fillTestUser("user")}
              >
                User
              </Button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="pr-12"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-primary"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-lg"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary font-semibold underline">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
