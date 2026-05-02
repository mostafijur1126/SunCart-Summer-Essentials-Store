"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit, FaImage, FaUser } from "react-icons/fa";

export function ProfileEditModal() {
  //   const { data } = authClient.useSession();
  //   const userData = data?.user;
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name?.value;
    const image = form?.image?.value;
    const payload = {};

    if (name) payload.name = name;
    if (image) payload.image = image;

    const { data, error } = await authClient.updateUser(payload);
    if (data) {
      toast.success("Profile updated successfully!", {
        position: "top-center",
      });
    }
    if (error) {
      toast.error(error.message || "Update failed!", {
        position: "top-center",
      });
    }
  };
  return (
    <Modal>
      <Button
        variant="secondary"
        className="w-full bg-gradient-to-r from-[#FFB7A4] to-[#FF9B82] text-[#2C3E3E] font-semibold py-6 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
      >
        <FaEdit className="text-sm" />
        Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md border border-[#E2DCD1]">
            <Modal.CloseTrigger />
            <Modal.Header className="border-b border-[#E2DCD1] pb-4">
              <Modal.Icon className="bg-[#FFB7A4]/20 p-2 rounded-full">
                <FaEdit className="text-[#FF9B82] text-xl" />
              </Modal.Icon>
              <Modal.Heading className="text-2xl font-bold text-[#2C3E3E]">
                Edit your profile
              </Modal.Heading>
              <p className="text-sm text-[#2C3E3E]/50 mt-1">
                Update your personal information
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-transparent shadow-none">
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <TextField className="space-y-2">
                    <Label className="text-[#2C3E3E] font-semibold text-sm flex items-center gap-2">
                      <FaUser className="text-[#FFB7A4] text-xs" />
                      Name
                    </Label>
                    <Input
                      name="name"
                      placeholder="Enter your name"
                      className="w-full text-[#2C3E3E] placeholder:text-[#2C3E3E]/40 border-2 border-[#E2DCD1] bg-white rounded-xl hover:border-[#FFB7A4] focus-within:border-[#FFB7A4] focus-within:ring-2 focus-within:ring-[#FFB7A4]/20 transition-all duration-200"
                    />
                  </TextField>
                  <TextField className="space-y-2">
                    <Label className="text-[#2C3E3E] font-semibold text-sm flex items-center gap-2">
                      <FaImage className="text-[#FFB7A4] text-xs" />
                      Photo URL
                    </Label>
                    <Input
                      name="image"
                      placeholder="Enter your photo URL"
                      className="w-full text-[#2C3E3E] placeholder:text-[#2C3E3E]/40 border-2 border-[#E2DCD1] bg-white rounded-xl hover:border-[#FFB7A4] focus-within:border-[#FFB7A4] focus-within:ring-2 focus-within:ring-[#FFB7A4]/20 transition-all duration-200"
                    />
                  </TextField>
                  <Modal.Footer className="flex gap-3 pt-4 mt-2 border-t border-[#E2DCD1]">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="flex-1 border-2 border-[#FFB7A4] bg-transparent text-[#FFB7A4] font-semibold rounded-xl py-3 hover:bg-[#FFB7A4]/10 transition-all duration-300"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="flex-1 bg-gradient-to-r from-[#FFB7A4] to-[#FF9B82] text-[#2C3E3E] font-semibold rounded-xl py-3 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
