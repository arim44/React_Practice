import type React from "react";

interface ChildProps{
    onInputChange : (value: string) => void;
}

export default function Child1({onInputChange}: ChildProps){
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(event.target.value);
    };
    return(
        <div>
            <input type="text" onChange={handleChange} placeholder="입력하시오" />
        </div>
    );
}