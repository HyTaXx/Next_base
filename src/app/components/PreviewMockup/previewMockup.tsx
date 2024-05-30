import React, { useState } from "react";

const PreviewMockup: React.FC = () => {
    // State hooks for the input range and checkbox
    const [rangeValue, setRangeValue] = useState<number>(40); // Initial value for the range input
    const [isChecked, setIsChecked] = useState<boolean>(true); // Initial value for the checkbox

    // Handler for the range input change
    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setRangeValue(newValue);
    };

    // Handler for the checkbox change
    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="mockup-code w-max z-[-10]">
            <div className="flex flex-col gap-8 justify-center px-4 py-16 bg-base-200">
                {/* Updated range input with onChange handler */}
                <input
                    type="range"
                    min={0}
                    max="100"
                    value={rangeValue} // Use state for value
                    onChange={handleRangeChange} // Add onChange handler
                    className="range"
                />
                {/* Updated text input remains unchanged */}
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
                {/* Updated checkbox with onChange handler */}
                <input
                    type="checkbox"
                    className="toggle"
                    checked={isChecked} // Use state for checked property
                    onChange={handleCheckboxChange} // Add onChange handler
                />
                <ul className="steps">
                    <li className="step step-primary">Purchase</li>
                    <li className="step step-primary">Read Doc</li>
                    <li className="step mx-3">Build Project</li>
                    <li className="step">Finish Project</li>
                </ul>
            </div>
        </div>
    );
};

export default PreviewMockup;
