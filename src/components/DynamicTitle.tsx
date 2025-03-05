import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function DynamicTitle() {
    const currentPath = useParams(); 

    let lastValue = Object.values(currentPath).pop() || "";

    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);

    useEffect(() => {
        if (lastValue === "") {
            document.title = "Winson's Resume | Home";
        } else {
            document.title = "Winson's Resume | " + lastValue;
        }
    }, [lastValue]); 

    return null; 
}
