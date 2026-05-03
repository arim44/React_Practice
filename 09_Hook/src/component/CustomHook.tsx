import { useState } from "react";

export function useToggle(inital:boolean = false) {
    const [value, setValue] = useState<boolean>(inital);

    const toggle = () => {
        setValue((prev) => !prev);
    }
    return { value, toggle};
}