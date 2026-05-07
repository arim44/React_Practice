export type WeatherData = {
    name: string;
    weather: {
        description: string;
        icon: string;
    }[];
    main:{
        temp: number;
    };    
};


export type ApiResponse<T> = {
    documents: T[];
    meta: {
        is_end: boolean;
    }
}