import { Button } from "@mui/material";

export default function MUISample(){
    const handleClick = () => {alert('버튼 클릭됨')};
    return(
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained" onClick={handleClick}>Contained</Button>
            <Button variant="outlined">Outlined</Button>
            
        </div>
    );
}