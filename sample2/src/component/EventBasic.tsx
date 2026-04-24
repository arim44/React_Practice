
type Porps = {
    type : 'date | time | all'
}

const current = (type : Props['type']){
    // Date() 생성
    const d = new Date();
    // 스위치로 type 받아서 상태처리
    switch(type){
        case 'date':
            console.log(d.toLocaleDateString());
            break;
        case 'time':
            console.log(d.toLocaleDateString())
            break;
        default:
            console.log(d.toString()
    }
};

export default function EventBasic({type}:Porps){
    return(
        <div>

        </div>
    )
}