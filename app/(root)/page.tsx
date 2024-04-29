// import Image from "next/image";
"use client"
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";


const SetupPage = () => {
  return (

  <div className="p-4">
    <UserButton />
    <Modal title="Test" description="Test Description" isOpen onClose={() => {}}>
        Children
    </Modal>
  </div>
 
  );
}



export default SetupPage;