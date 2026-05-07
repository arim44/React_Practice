// import { useEffect, useState } from "react"
// import type { ApiResponse, WeatherData } from "../Types/Weather";
// import useFetch from "./useFetch";


// function Weather(){
//     const [query, setQuery] = useState<string>('seoul');

//     const url = 'https://api.openweathermap.org/data/2.5/weather';
//     const apiKey = '44ef36f3796c92a24a5b9a754ff1b875';
//     const {documents, isEnd} = useFetch<WeatherData>(query, url, apiKey);

//      // 서치바에 내려줄 함수
//     const onChangeQuery = (q: string) => {
//         setQuery(q);
//     }

//     return(
//         <div className="weather-area">
//         <p>날씨</p>
//         <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="placeholder" />
//         {}
//         </div>
//     )

// }

// export default Weather;

// // function Weather(){
// //     const [query, setQuery] = useState<string>('');

// //     const [contents, setContent] = useState<string>('');
// //     const [isEnd, setIsEnd] = useState<boolean>(false);
// //     useEffect(() => {
// //         if(!query) return;

// //         const fetchWeather = async() => {
// //             try{
// //                 const encodedQuery = encodeURIComponent(query);
// //                 const endPoint = 'api.openweathermap.org/data/2.5/forecast?q={seoul}&appid={API key}'

// //                 const response = await fetch(endPoint, {
// //                     params:{
// //                         appid: '44ef36f3796c92a24a5b9a754ff1b875'
// //                     },
// //                 });
// //                 if(!response.ok){
// //                     throw new Error(`HTTP error! status:${response.status}`);
// //                 }
// //                 const data: ApiResponse<WeatherData> = await response.json();

// //                 // data  셋
// //                 setContent(data.documents);
// //                 setIsEnd(data.meta.is_end);
                
// //             } catch(err) {
// //                 console.error('검색 중 오류', err);
// //             }
// //         };
// //         fetchWeather();
// //     }, [query]);

// //     return(
// //         <div>
          
// //         </div>
// //     )
// // }