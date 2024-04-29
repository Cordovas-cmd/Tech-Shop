"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

// ensure that there aren't any "hydration errors" avoid errors between client and server side rendering.

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    // until this lifecycle has run return null if I am still in server side rendering return null.
    if (!isMounted) {
        return null;
    }

    return (
        <>
        <StoreModal />
        </>
    )
}