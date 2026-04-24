interface PreProps{
    name:string;
    age:number;
}

export default function Pre2(props:PreProps){
    return(
        <>
        <h1>안녕 {props.name}! 내 나이는 {props.age}야</h1>
        </>
    )
}