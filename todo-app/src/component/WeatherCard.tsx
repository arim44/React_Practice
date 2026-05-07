import { useEffect, useState } from "react";
import './WeatherCard.css'

// 웨더 데이타 모델링
type WeatherData1 = {
    name: string;
    weather: {
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
    };
};

export default function WeatherCard() {
    // 웨더 데이타가 있을수도 있고 널일수도 있음
    const [weather, setWeather] = useState<WeatherData1 | null>(null);

    // 경도,위도좌표로
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                // .env 노출안되는 곳에 넣어놓은 키 가져오기
                const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${apiKey}&units=metric&lang=kr&lat=${lat}}&lon=${lon}`
                    );

                const data = await response.json();
                setWeather(data);
            },
            // 두번째 매개변수
            (error) => {
                console.log(error);
            }
        )
    }, [])
    if (!weather) {
        return <div>날씨를 불러오는 중...</div>
    }

    // 도시이름으로 가져오기
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(
    //             `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lang=kr&q=seoul`);
    //         const data = await response.json();
    //         await response.json();
    //         setWeather(data);
    //     };
    //     fetchData();
    // }, []);
    // if (!weather) {
    //     return <div>날씨를 불러오는 중...</div>
    // }

    const icon = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    const description = weather.weather[0].description;
    // 소수점 한자리
    const temp = weather.main.temp.toFixed(1);

    return (
        <div className="weather-container">
            {/* <p>{weather.name}날씨</p> */}
            <img src={iconUrl} alt="weather icon" />
            <p>{description} | {temp} ℃</p>
        </div>
    )
}