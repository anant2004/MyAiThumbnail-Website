"use client";
import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons"; // Ensure this component exists and is correctly implemented

export function TailwindcssButtons() {
    return (
        <div className="pb-12 px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto gap-10">
                {/* Directly add the button component here */}
                <ButtonsCard key="1">
                    <button className="px-12 py-4 rounded-full bg-[#2CFBCD] font-bold text-[#0A0A0A] tracking-widest uppercase transform hover:scale-105 hover:bg-[#04c89d] transition-colors duration-200">
                        Explore
                    </button>
                </ButtonsCard>
            </div>
        </div>
    );
}
