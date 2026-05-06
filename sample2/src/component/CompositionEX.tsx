import { type ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

function Card({children}: CardProps) {
    const cardStyle:React.CSSProperties = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        backgroundColor: '#f9f9f9',
    };

    return <div style={cardStyle}>{children}</div>;
}

export default function CardList(){
    return(
        <div>
            <h1>합성예제</h1>
            <Card>
                <h2>Card1</h2>
                <p>This is the first card content</p>
                <input type="text" placeholder="텍스트 입력" />
            </Card>
            <Card>
                <h2>Card2</h2>
                <p>This is the secone card content</p>
                <button>Click me</button>
            </Card>
            <Card>
                <h2>Card3</h2>
                <img src="https://placehold.co/100" alt="placeholder" />
                <br></br>
                <img src="https://placehold.co/300" alt="placeholder" />
                
            </Card>
        </div>
    );
}