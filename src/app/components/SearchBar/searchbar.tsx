import { useState } from "react";

interface Option {
    label: string;
    url: string;
    category: string;
}

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const getThemeColor = (): string => {
        const theme = localStorage.getItem("theme");
        return theme ? theme : "light";
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setIsFocused(false);
        }, 100);
    };

    const handleOptionClick = (url: string) => {
        console.log("Navigating to:", url);
        window.location.href = url;
    };

    // Options to display
    const options: Option[] = [
        { label: "Docs", url: "/docs", category: "Links" },
        { label: "About", url: "/about", category: "Links" },
        { label: "Contact", url: "/contact", category: "Links" },
        { label: "Test", url: "/test", category: "Links" },
        {
            label: "Button",
            url: "/docs/components/button",
            category: "Components",
        },
        { label: "Link", url: "/docs/components/link", category: "Components" },
        { label: "Form", url: "/docs/components/form", category: "Components" },
    ];

    // Filter options based on search query
    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Group filtered options by category
    const groupedOptions: { [key: string]: Option[] } = {};
    filteredOptions.forEach((option) => {
        if (!groupedOptions[option.category]) {
            groupedOptions[option.category] = [];
        }
        groupedOptions[option.category].push(option);
    });

    return (
        <div className="relative">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Search..."
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none w-64"
            />
            {isFocused && (
                <div
                    className={`absolute top-full left-0 w-full shadow-lg border border-gray-200 rounded-md mt-1 p-2 max-h-[300px] overflow-y-auto ${
                        getThemeColor() === "light" ? "bg-white" : "bg-base-200"
                    }`}
                    id="search-options"
                >
                    {Object.entries(groupedOptions).map(
                        ([category, options]) => (
                            <div key={category}>
                                <p className="text-sm">{category}</p>
                                <ul
                                    className={`${
                                        getThemeColor() === "light"
                                            ? "text-black"
                                            : "text-white"
                                    }`}
                                >
                                    {options.map((option, index) => (
                                        <li
                                            key={index}
                                            className={`py-2 px-4 ${
                                                getThemeColor() === "light"
                                                    ? "hover:bg-gray-100"
                                                    : "hover:bg-gray-700"
                                            } cursor-pointer rounded-md flex flex-row`}
                                            onClick={() =>
                                                handleOptionClick(option.url)
                                            }
                                        >
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </div>
            )}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.5 17.5l4.5 4.5"
                />
            </svg>
        </div>
    );
};

export default SearchBar;
