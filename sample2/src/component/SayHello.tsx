interface SayHelloPorps{
    myName: string;
    to: string;
}

// export default function SayHello(props:SayHelloPorps){
//     return(
//         <>
//         <p>안녕하세요. {props.myName}</p>
//         <p>Hello {props.to}</p>
//         </>
//     )
// }

export default function SayHello2({myName, to}:SayHelloPorps){
    return(
        <>
        <p>안녕하세요. {myName}</p>
         <p>Hello {to}</p>
        </>
    )
}