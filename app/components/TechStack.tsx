"use client";

import { useEffect, useState } from "react";
import { IconType } from "react-icons";

import { paginate } from "../utils";

interface Stack {
    category: string,
    color: string,
    items: string[],
    icon: IconType
}


function TechStack({ techItems }: { techItems: Stack[] }) {
    const MOBILE_WIDTH = 768;
    const MOBILE_PAGE_SIZE = 2;
    const DESKTOP_PAGE_SIZE = 6;
    const CURRENT_PAGE = 1;

    const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
    const [pageSize, setPageSize] = useState(
        typeof window !== "undefined" && window.innerWidth < MOBILE_WIDTH
            ? MOBILE_PAGE_SIZE
            : DESKTOP_PAGE_SIZE
    );

    useEffect(() => {
        const updatePageSize = () => {
            setPageSize(window.innerWidth < MOBILE_WIDTH ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE);
        };

        window.addEventListener("resize", updatePageSize);
        return () => window.removeEventListener("resize", updatePageSize);
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const items = paginate(techItems, currentPage, pageSize);

    return (
        <div className="container mx-auto px-6 py-12">
            <h3 className="text-center text-gray-900 text-4xl font-bold mb-6">
                The technologies I work with to bring ideas to life
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((tech, index) => {
                    const { category, items, icon: Icon, color } = tech;
                    return (
                        <div
                            key={index}
                            className="shadow-lg rounded-lg text-center p-6 bg-white border border-gray-200"
                            style={{
                                background: `linear-gradient(145deg, ${color} 30%, #fff)`,
                            }}
                        >
                            <div
                                className="mx-auto flex items-center justify-center text-white rounded-full"
                                style={{
                                    backgroundColor: color,
                                    width: "80px",
                                    height: "80px",
                                    fontSize: "3rem",
                                    padding: "1rem",
                                }}
                            >
                                <Icon />
                            </div>
                            <h4 className="text-lg font-semibold mt-4">{category}</h4>
                            <p className="text-gray-600">{items}</p>
                        </div>
                    );
                })}
            </div>

            {/* Pagination */}
        </div>
    );
}


export default TechStack;
