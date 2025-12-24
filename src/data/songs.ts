export interface Song {
    id: number;
    title: string;
    streams: string;
    revenue: string;
    date: string;
    status: string;
    trendColor: string;
    links: {
        spotify: string;
        apple: string;
        youtube: string;
        jiosaavn: string;
    };
}

export const SONGS: Song[] = [
    {
        id: 1, title: "E Tumi Kemon Tumi", streams: "150M", revenue: "₹55L", date: "2014", status: "National Award", trendColor: "text-amber-500",
        links: {
            spotify: "https://open.spotify.com/search/E%20Tumi%20Kemon%20Tumi%20Rupankar",
            apple: "https://music.apple.com/in/search?term=E%20Tumi%20Kemon%20Tumi%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=E+Tumi+Kemon+Tumi+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/E%20Tumi%20Kemon%20Tumi"
        }
    },
    {
        id: 2, title: "Gobhire Jao", streams: "98M", revenue: "₹32L", date: "2011", status: "Mirchi Hit", trendColor: "text-blue-500",
        links: {
            spotify: "https://open.spotify.com/search/Gobhire%20Jao%20Rupankar",
            apple: "https://music.apple.com/in/search?term=Gobhire%20Jao%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=Gobhire+Jao+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/Gobhire%20Jao"
        }
    },
    {
        id: 3, title: "Chupi Chupi Raat", streams: "65M", revenue: "₹18L", date: "2012", status: "Classic", trendColor: "text-pink-500",
        links: {
            spotify: "https://open.spotify.com/search/Chupi%20Chupi%20Raat%20Rupankar",
            apple: "https://music.apple.com/in/search?term=Chupi%20Chupi%20Raat%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=Chupi+Chupi+Raat+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/Chupi%20Chupi%20Raat"
        }
    },
    {
        id: 4, title: "Amar Mawte", streams: "52M", revenue: "₹14L", date: "2012", status: "Popular", trendColor: "text-emerald-500",
        links: {
            spotify: "https://open.spotify.com/search/Amar%20Mawte%20Rupankar",
            apple: "https://music.apple.com/in/search?term=Amar%20Mawte%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=Amar+Mawte+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/Amar%20Mawte"
        }
    },
    {
        id: 5, title: "Govhir Joler Maach", streams: "45M", revenue: "₹12L", date: "2023", status: "Trending", trendColor: "text-indigo-500",
        links: {
            spotify: "https://open.spotify.com/search/Gobhir%20Joler%20Maach%20Rupankar",
            apple: "https://music.apple.com/in/search?term=Gobhir%20Joler%20Maach%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=Gobhir+Joler+Maach+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/Gobhir%20Joler%20Maach"
        }
    },
    {
        id: 6, title: "O Chand", streams: "40M", revenue: "₹10L", date: "2010", status: "Evergreen", trendColor: "text-purple-500",
        links: {
            spotify: "https://open.spotify.com/search/O%20Chand%20Rupankar",
            apple: "https://music.apple.com/in/search?term=O%20Chand%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=O+Chand+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/O%20Chand"
        }
    },
    {
        id: 7, title: "Jajabar", streams: "35M", revenue: "₹8L", date: "2015", status: "Soulful", trendColor: "text-rose-500",
        links: {
            spotify: "https://open.spotify.com/search/Jajabar%20Rupankar",
            apple: "https://music.apple.com/in/search?term=Jajabar%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=Jajabar+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/Jajabar"
        }
    },
    {
        id: 8, title: "Jaago Uma", streams: "30M", revenue: "₹7.5L", date: "2018", status: "Festive Hit", trendColor: "text-orange-500",
        links: {
            spotify: "https://open.spotify.com/search/Jaago%20Uma%20Rupankar",
            apple: "https://music.apple.com/in/search?term=Jaago%20Uma%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=Jaago+Uma+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/Jaago%20Uma"
        }
    },
    {
        id: 9, title: "Tui Amar Hobi Na", streams: "12M", revenue: "₹3L", date: "2024", status: "New Release", trendColor: "text-cyan-500",
        links: {
            spotify: "https://open.spotify.com/search/Tui%20Amar%20Hobi%20Na%20Rupankar",
            apple: "https://music.apple.com/in/search?term=Tui%20Amar%20Hobi%20Na%20Rupankar",
            youtube: "https://www.youtube.com/results?search_query=Tui+Amar+Hobi+Na+Rupankar",
            jiosaavn: "https://www.jiosaavn.com/search/Tui%20Amar%20Hobi%20Na"
        }
    }
];