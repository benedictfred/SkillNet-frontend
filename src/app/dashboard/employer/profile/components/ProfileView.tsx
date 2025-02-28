"use client";

import Image from "next/image";
import ProfileCover from "../../../../../public/img/profile-cover.png";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileOverview from "./ProfileOverview";
import JobOpenings from "./JobOpenings";
import Modal from "./Modal";
import { useState } from "react";

export default function ProfileView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("");
  const isUser = true;

  const openModal = (section: string) => {
    setActiveSection(section);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveSection(null);
  };

  return (
    <div>
      <div className="h-32 relative w-full">
        <Image
          src={ProfileCover}
          alt="Profile Cover"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-5 md:px-10">
        <ProfileHeader isUser={isUser} />
        <ProfileAbout isUser={isUser} />

        <div className="mt-10 py-4 space-y-5 bg-[#161716] border border-[#1D1D1C] rounded-md p-5">
          <ProfileOverview onOpenModal={openModal} isUser={isUser} />
          <JobOpenings onOpenModal={openModal} isUser={isUser} />
        </div>
      </div>
      {isModalOpen && (
        <Modal activeSection={activeSection} onCloseModal={closeModal} />
      )}
    </div>
  );
}
