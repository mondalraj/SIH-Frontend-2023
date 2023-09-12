"use client";
import { CardsProps } from "@/types/interfaces";
import { useState } from "react";
import Cards from "./(components)/Cards";
import { Experts } from "./Experts";

const LegalExperts = () => {
    const [Free, setFree] = useState("");
    return (
        <div className="overflow-y-scroll h-[95vh] p-4 flex flex-col gap-y-4 remove-scroll">
            <div className="flex w-full md:w-1/3 mb-6">
                <input
                    className="flex h-10 w-full rounded-lg border-none outline-none bg-[#262626] px-3 py-2 text-sm placeholder:text-[#ffffff77]"
                    type="text"
                    placeholder="For which case you are looking for lawyer ?"
                ></input>
            </div>
            <span
                className="inline-flex min-w-24 max-w-max cursor-pointer items-center rounded-md bg-green-50 px-2 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                onClick={() => {
                    if (Free === "Free") {
                        setFree("");
                    } else {
                        setFree("Free");
                    }
                }}
            >
                Free Consultation
            </span>
            <h3 className="text-2xl font-bold text-white">
                Top Criminal Defense Lawyers Available
            </h3>
            {Free === "Free"
                ? Experts.map((item: CardsProps, idx: number) => {
                    if (item.free === true) {
                        return (
                            <Cards
                                key={idx + 1}
                                available={item.available}
                                consultation={item.consultation}
                                free={item.free}
                                languages={item.languages}
                                name={item.name}
                                reviews={item.reviews}
                            />
                        );
                    }
                })
                : Experts.map((item: CardsProps, idx: number) => (
                    <Cards
                        key={idx + 1}
                        available={item.available}
                        consultation={item.consultation}
                        free={item.free}
                        languages={item.languages}
                        name={item.name}
                        reviews={item.reviews}
                    />
                ))}
        </div>
    );
};

export default LegalExperts;
