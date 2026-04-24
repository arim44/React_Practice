interface WelcomeProps{
    name: string;
}

// props : name 을 가지고 있는 객체
export default function Welcome(props:WelcomeProps) {
    return(
        <>
        <h1>안녕 {props.name}</h1>
        </>
    );
}
