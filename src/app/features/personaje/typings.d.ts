interface IPersonaje{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    },
    location: {
      name: string;
      url: string;
    },
    image: string;
    episode: [],
    
    url:string;
    created: Date;
}

interface IEpisode{
    id: number;
    name: string;
    air_date: Date;
    episode: string;
    characters: [],
    url: string;
    created: Date;
}