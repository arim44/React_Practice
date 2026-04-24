
interface Child2Props{
    value: string;
}

export default function Child({value}: Child2Props){
    return(
        <div>
            <p>입력된 값 : {value}</p>
        </div>
    );
}