import type { RootState } from "./store";
import { useSelector } from "react-redux";

export default function DisPlayName(){
    const name = useSelector((state:RootState)=> state.user.name);

    return(
        <div>
            <h1>{name} </h1>
        </div>
    )
}