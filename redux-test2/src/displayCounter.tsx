import type { RootState } from "./store";
import { useSelector } from "react-redux";

export default function DisPlayCounter(){
    const count = useSelector((state:RootState) => state.counter.value);

    return(
        <div>
            <h1>{count} </h1>
        </div>
    )
}