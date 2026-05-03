"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiIceCreamCone, GiSunglasses, GiWatermelon } from "react-icons/gi";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { ProfileEditModal } from "@/components/myProfile/ProfileEditModal";

const MyProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const userData = data?.user;
  const router = useRouter();
  const handelLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF9F0] via-[#E8F3EF] to-[#FFF0D3] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-6xl md:text-7xl opacity-20 text-[#FFB7A4]"
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
          className="absolute bottom-20 right-10 text-6xl md:text-7xl opacity-20 text-[#FFB7A4]"
        >
          <GiIceCreamCone />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-20 text-5xl opacity-10 text-[#FFB7A4]"
        >
          <GiSunglasses />
        </motion.div>

        <div className="absolute top-0 -right-20 w-72 h-72 bg-[#FFB7A4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#E8F3EF] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {isPending ? (
        <div className="flex items-center justify-center text-4xl">
          Loading...
        </div>
      ) : (
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E3E]">
              My Profile
            </h1>
            <p className="text-[#2C3E3E]/60 mt-1">
              Manage your account information
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF9F0]/90 backdrop-blur-sm rounded-2xl border border-[#E2DCD1] shadow-xl overflow-hidden"
          >
            <div className="h-32 bg-gradient-to-r from-[#FFB7A4]/30 to-[#FF9B82]/30"></div>

            <div className="relative px-6 pb-6">
              <div className="flex justify-center -mt-16 mb-4">
                <div className="relative">
                  <Avatar className="w-28 h-28 mx-auto border-4 border-white shadow-xl">
                    <Avatar.Image alt={userData?.name} src={userData?.image} />
                    <Avatar.Fallback>
                      <FaUser className="text-3xl text-[#FFB7A4]" />
                    </Avatar.Fallback>
                  </Avatar>
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#2C3E3E]">
                  {userData?.name}
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2 text-[#2C3E3E]/60">
                  <FaEnvelope className="text-sm" />
                  <span className="text-sm">{userData?.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-1 text-[#2C3E3E]/50 text-xs">
                  <FaCalendarAlt className="text-xs" />
                  <span>
                    Member since
                    {new Date(userData?.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <ProfileEditModal></ProfileEditModal>

                <button
                  onClick={handelLogout}
                  className="w-full border border-red-300 text-red-500 font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 transition-all duration-300"
                >
                  <FaSignOutAlt className="text-sm" />
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MyProfilePage;
