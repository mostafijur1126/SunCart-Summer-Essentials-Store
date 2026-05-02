"use client";
import { Check } from "@gravity-ui/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GiIceCreamCone, GiSunglasses, GiWatermelon } from "react-icons/gi";
import { FaGoogle, FaSun, FaUser } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { name, email, password, image } = userData;
    // console.log(name, email, password, image);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });
    // console.log(data, error);
    if (data) {
      setAuthError(null);
      toast.success("Registion successfull!", {
        position: "top-center",
      });
      router.push("/");
    }
    if (error) {
      setAuthError(error.message);
      toast.error(`${error.message}`, {
        position: "top-center",
      });
    }
  };
  const handelGoogleSingIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF9F0] via-[#E8F3EF] to-[#FFF0D3] flex items-center justify-center px-4 py-12 md:py-16">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-6xl md:text-7xl opacity-100 text-[#FFB7A4]"
        >
          <GiWatermelon />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 text-6xl md:text-7xl opacity-100 text-[#FFB7A4]"
        >
          <GiIceCreamCone />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 text-6xl md:text-7xl opacity-100 text-[#FFB7A4]"
        >
          <GiIceCreamCone />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-20 text-5xl opacity-100 text-[#FFB7A4]"
        >
          <FaSun />
        </motion.div>
        <div className="absolute top-0 -right-20 w-72 h-72 bg-[#FFB7A4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -left-20 w-95 h-95 bg-[#E8F3EF] rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse filter"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="bg-[#FFF9F0]/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#E2DCD1] p-6 md:p8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFB7A4]/20 rounded-full mb-4">
              <GiSunglasses className="text-3xl text-[#FFB7A4]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3E] mb-2">
              Create Account
            </h1>
            <p className="text-[#2C3E3E]/60">
              {" "}
              Join us for exclusive summer deals!
            </p>
          </div>
          <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label className="text-[#2C3E3E] font-medium">Full Name</Label>
              <Input
                placeholder="John Doe"
                className="border-[#E2DCD1] focus:border-[#FFB7A4]"
              />
              <FieldError className="text-[#FF9B82]" />
            </TextField>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="text-[#2C3E3E] font-medium">
                Email Address
              </Label>
              <Input
                placeholder="summer@example.com"
                className="border-[#E2DCD1] focus:border-[#FFB7A4]"
              />
              <Description className="text-red-500">
                {authError && authError}
              </Description>
              <FieldError className="text-[#FF9B82]" />
            </TextField>
            <TextField
              isRequired
              name="image"
              validate={(value) => {
                if (
                  value &&
                  !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(value)
                ) {
                  return "Please enter a valid image URL (jpg, png, gif, webp)";
                }
                return null;
              }}
            >
              <Label className="text-[#2C3E3E] font-medium">
                Profile Photo URL
              </Label>
              <Input
                placeholder="https://example.com/photo.jpg"
                className="border-[#E2DCD1] focus:border-[#FFB7A4]"
              />
              <Description className="text-[#2C3E3E]/50 text-xs">
                Upload a photo or use a Gravatar URL
              </Description>
              <FieldError className="text-[#FF9B82]" />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="text-[#2C3E3E] font-medium">Password</Label>
              <Input
                placeholder="Enter your password"
                className="border-[#E2DCD1] focus:border-[#FFB7A4]"
              />
              <Description className="text-[#2C3E3E]/50 text-xs">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-[#FF9B82]" />
            </TextField>
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#FFB7A4] to-[#FF9B82] text-[#2C3E3E] font-semibold rounded-full hover:shadow-lg transition-all duration-300 py-3"
              >
                <Check />
                Create Account
              </Button>
              <Button
                type="reset"
                variant="bordered"
                className="border-[#FFB7A4] text-[#FFB7A4] rounded-full hover:bg-[#FFB7A4]/10 transition-all duration-300"
              >
                Reset
              </Button>
            </div>
          </Form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E2DCD1]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-[#FFF9F0] text-[#2C3E3E]/50">
                Or sign up with
              </span>
            </div>
          </div>
          <motion.button
            onClick={handelGoogleSingIn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 bg-white border border-[#E2DCD1] rounded-full px-4 py-3 text-[#2C3E3E] font-medium hover:shadow-md hover:border-[#FFB7A4] transition-all duration-300"
          >
            <FaGoogle className="text-[#FFB7A4] text-lg"></FaGoogle>
          </motion.button>
          <div className="text-center mt-6 pt-4 border-t border-[#E2DCD1]">
            <p className="text-sm text-[#2C3E3E]/60">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#FFB7A4] font-semibold hover:text-[#FF9B82] hover:underline transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
