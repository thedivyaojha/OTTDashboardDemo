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
        id: 1, title: "Ke Jeno Dake", streams: "12.4M", revenue: "₹2.1L", date: "2023", status: "Trending", trendColor: "text-emerald-500",
        links: {
            spotify: "https://open.spotify.com/search/Ke%20Jeno%20Dake",
            apple: "https://music.apple.com/in/search?term=Ke%20Jeno%20Dake",
            youtube: "https://www.youtube.com/results?search_query=Ke+Jeno+Dake",
            jiosaavn: "https://www.jiosaavn.com/search/Ke%20Jeno%20Dake"
        }
    },
    {
        id: 2, title: "Tramline Er Sheshe", streams: "8.2M", revenue: "₹1.4L", date: "2022", status: "Stable", trendColor: "text-blue-500",
        links: {
            spotify: "https://open.spotify.com/search/Tramline%20Er%20Sheshe",
            apple: "https://music.apple.com/in/search?term=Tramline%20Er%20Sheshe",
            youtube: "https://www.youtube.com/results?search_query=Tramline+Er+Sheshe",
            jiosaavn: "https://www.jiosaavn.com/search/Tramline%20Er%20Sheshe"
        }
    },
    {
        id: 3, title: "Tor Sathe Chole Jai", streams: "15.1M", revenue: "₹2.8L", date: "2023", status: "Trending", trendColor: "text-amber-500",
        links: {
            spotify: "https://open.spotify.com/search/Tor%20Sathe%20Chole%20Jai",
            apple: "https://music.apple.com/in/search?term=Tor%20Sathe%20Chole%20Jai",
            youtube: "https://www.youtube.com/results?search_query=Tor+Sathe+Chole+Jai",
            jiosaavn: "https://www.jiosaavn.com/search/Tor%20Sathe%20Chole%20Jai"
        }
    },
    {
        id: 4, title: "Ekta Ganner Jonmodin", streams: "5.4M", revenue: "₹0.9L", date: "2021", status: "Rising", trendColor: "text-indigo-500",
        links: {
            spotify: "https://open.spotify.com/search/Ekta%20Ganner%20Jonmodin",
            apple: "https://music.apple.com/in/search?term=Ekta%20Ganner%20Jonmodin",
            youtube: "https://www.youtube.com/results?search_query=Ekta+Ganner+Jonmodin",
            jiosaavn: "https://www.jiosaavn.com/search/Ekta%20Ganner%20Jonmodin"
        }
    },
    {
        id: 5, title: "Amar Meghla Akashe", streams: "9.8M", revenue: "₹1.6L", date: "2022", status: "Stable", trendColor: "text-cyan-500",
        links: {
            spotify: "https://open.spotify.com/search/Amar%20Meghla%20Akashe",
            apple: "https://music.apple.com/in/search?term=Amar%20Meghla%20Akashe",
            youtube: "https://www.youtube.com/results?search_query=Amar+Meghla+Akashe",
            jiosaavn: "https://www.jiosaavn.com/search/Amar%20Meghla%20Akashe"
        }
    },
    {
        id: 6, title: "Thakbo Kotodin Aar", streams: "4.2M", revenue: "₹0.7L", date: "2024", status: "Rising", trendColor: "text-purple-500",
        links: {
            spotify: "https://open.spotify.com/search/Thakbo%20Kotodin%20Aar",
            apple: "https://music.apple.com/in/search?term=Thakbo%20Kotodin%20Aar",
            youtube: "https://www.youtube.com/results?search_query=Thakbo+Kotodin+Aar",
            jiosaavn: "https://www.jiosaavn.com/search/Thakbo%20Kotodin%20Aar"
        }
    },
    {
        id: 7, title: "Mayer Bhashar Joy", streams: "11.2M", revenue: "₹1.9L", date: "2023", status: "Trending", trendColor: "text-rose-500",
        links: {
            spotify: "https://open.spotify.com/search/Mayer%20Bhashar%20Joy",
            apple: "https://music.apple.com/in/search?term=Mayer%20Bhashar%20Joy",
            youtube: "https://www.youtube.com/results?search_query=Mayer+Bhashar+Joy",
            jiosaavn: "https://www.jiosaavn.com/search/Mayer%20Bhashar%20Joy"
        }
    },
    {
        id: 8, title: "Dustu Haowa", streams: "7.6M", revenue: "₹1.2L", date: "2022", status: "Stable", trendColor: "text-pink-500",
        links: {
            spotify: "https://open.spotify.com/search/Dustu%20Haowa",
            apple: "https://music.apple.com/in/search?term=Dustu%20Haowa",
            youtube: "https://www.youtube.com/results?search_query=Dustu+Haowa",
            jiosaavn: "https://www.jiosaavn.com/search/Dustu%20Haowa"
        }
    },
    {
        id: 9, title: "Ei Na Hole Bondhu", streams: "6.3M", revenue: "₹1.1L", date: "2024", status: "Rising", trendColor: "text-orange-500",
        links: {
            spotify: "https://open.spotify.com/search/Ei%20Na%20Hole%20Bondhu",
            apple: "https://music.apple.com/in/search?term=Ei%20Na%20Hole%20Bondhu",
            youtube: "https://www.youtube.com/results?search_query=Ei+Na+Hole+Bondhu",
            jiosaavn: "https://www.jiosaavn.com/search/Ei%20Na%20Hole%20Bondhu"
        }
    },
    {
        id: 10, title: "Hey Namaji", streams: "13.5M", revenue: "₹2.3L", date: "2023", status: "Trending", trendColor: "text-emerald-400",
        links: {
            spotify: "https://open.spotify.com/search/Hey%20Namaji",
            apple: "https://music.apple.com/in/search?term=Hey%20Namaji",
            youtube: "https://www.youtube.com/results?search_query=Hey+Namaji",
            jiosaavn: "https://www.jiosaavn.com/search/Hey%20Namaji"
        }
    }
];