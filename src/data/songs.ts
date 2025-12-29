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
        ytMusic: string;
        jiosaavn: string;
        amazon: string;
        gaana: string;
    };
}

export const SONGS: Song[] = [
    {
        id: 1, title: "Ke Jeno Dake", streams: "12.4M", revenue: "₹2.1L", date: "2023", status: "Trending", trendColor: "text-emerald-500",
        links: {
            spotify: "https://open.spotify.com/search/Ke%20Jeno%20Dake",
            apple: "https://music.apple.com/in/search?term=Ke%20Jeno%20Dake",
            ytMusic: "https://music.youtube.com/search?q=Ke+Jeno+Dake",
            jiosaavn: "https://www.jiosaavn.com/search/Ke%20Jeno%20Dake",
            amazon: "https://music.amazon.in/search/Ke%20Jeno%20Dake",
            gaana: "https://gaana.com/search/Ke%20Jeno%20Dake"
        }
    },
    {
        id: 2, title: "Tramline Er Sheshe", streams: "8.2M", revenue: "₹1.4L", date: "2022", status: "Stable", trendColor: "text-blue-500",
        links: {
            spotify: "https://open.spotify.com/search/Tramline%20Er%20Sheshe",
            apple: "https://music.apple.com/in/search?term=Tramline%20Er%20Sheshe",
            ytMusic: "https://music.youtube.com/search?q=Tramline+Er+Sheshe",
            jiosaavn: "https://www.jiosaavn.com/search/Tramline%20Er%20Sheshe",
            amazon: "https://music.amazon.in/search/Tramline%20Er%20Sheshe",
            gaana: "https://gaana.com/search/Tramline%20Er%20Sheshe"
        }
    },
    {
        id: 3, title: "Tor Sathe Chole Jai", streams: "15.1M", revenue: "₹2.8L", date: "2023", status: "Trending", trendColor: "text-amber-500",
        links: {
            spotify: "https://open.spotify.com/search/Tor%20Sathe%20Chole%20Jai",
            apple: "https://music.apple.com/in/search?term=Tor%20Sathe%20Chole%20Jai",
            ytMusic: "https://music.youtube.com/search?q=Tor+Sathe+Chole+Jai",
            jiosaavn: "https://www.jiosaavn.com/search/Tor%20Sathe%20Chole%20Jai",
            amazon: "https://music.amazon.in/search/Tor%20Sathe%20Chole%20Jai",
            gaana: "https://gaana.com/search/Tor%20Sathe%20Chole%20Jai"
        }
    },
    {
        id: 4, title: "Ekta Ganner Jonmodin", streams: "5.4M", revenue: "₹0.9L", date: "2021", status: "Rising", trendColor: "text-indigo-500",
        links: {
            spotify: "https://open.spotify.com/search/Ekta%20Ganner%20Jonmodin",
            apple: "https://music.apple.com/in/search?term=Ekta%20Ganner%20Jonmodin",
            ytMusic: "https://music.youtube.com/search?q=Ekta+Ganner+Jonmodin",
            jiosaavn: "https://www.jiosaavn.com/search/Ekta%20Ganner%20Jonmodin",
            amazon: "https://music.amazon.in/search/Ekta%20Ganner%20Jonmodin",
            gaana: "https://gaana.com/search/Ekta%20Ganner%20Jonmodin"
        }
    },
    {
        id: 5, title: "Amar Meghla Akashe", streams: "9.8M", revenue: "₹1.6L", date: "2022", status: "Stable", trendColor: "text-cyan-500",
        links: {
            spotify: "https://open.spotify.com/search/Amar%20Meghla%20Akashe",
            apple: "https://music.apple.com/in/search?term=Amar%20Meghla%20Akashe",
            ytMusic: "https://music.youtube.com/search?q=Amar+Meghla+Akashe",
            jiosaavn: "https://www.jiosaavn.com/search/Amar%20Meghla%20Akashe",
            amazon: "https://music.amazon.in/search/Amar%20Meghla%20Akashe",
            gaana: "https://gaana.com/search/Amar%20Meghla%20Akashe"
        }
    },
    {
        id: 6, title: "Thakbo Kotodin Aar", streams: "4.2M", revenue: "₹0.7L", date: "2024", status: "Rising", trendColor: "text-purple-500",
        links: {
            spotify: "https://open.spotify.com/search/Thakbo%20Kotodin%20Aar",
            apple: "https://music.apple.com/in/search?term=Thakbo%20Kotodin%20Aar",
            ytMusic: "https://music.youtube.com/search?q=Thakbo+Kotodin+Aar",
            jiosaavn: "https://www.jiosaavn.com/search/Thakbo%20Kotodin%20Aar",
            amazon: "https://music.amazon.in/search/Thakbo%20Kotodin%20Aar",
            gaana: "https://gaana.com/search/Thakbo%20Kotodin%20Aar"
        }
    },
    {
        id: 7, title: "Mayer Bhashar Joy", streams: "11.2M", revenue: "₹1.9L", date: "2023", status: "Trending", trendColor: "text-rose-500",
        links: {
            spotify: "https://open.spotify.com/search/Mayer%20Bhashar%20Joy",
            apple: "https://music.apple.com/in/search?term=Mayer%20Bhashar%20Joy",
            ytMusic: "https://music.youtube.com/search?q=Mayer+Bhashar+Joy",
            jiosaavn: "https://www.jiosaavn.com/search/Mayer%20Bhashar%20Joy",
            amazon: "https://music.amazon.in/search/Mayer%20Bhashar%20Joy",
            gaana: "https://gaana.com/search/Mayer%20Bhashar%20Joy"
        }
    },
    {
        id: 8, title: "Dustu Haowa", streams: "7.6M", revenue: "₹1.2L", date: "2022", status: "Stable", trendColor: "text-pink-500",
        links: {
            spotify: "https://open.spotify.com/search/Dustu%20Haowa",
            apple: "https://music.apple.com/in/search?term=Dustu%20Haowa",
            ytMusic: "https://music.youtube.com/search?q=Dustu+Haowa",
            jiosaavn: "https://www.jiosaavn.com/search/Dustu%20Haowa",
            amazon: "https://music.amazon.in/search/Dustu%20Haowa",
            gaana: "https://gaana.com/search/Dustu%20Haowa"
        }
    },
    {
        id: 9, title: "Ei Na Hole Bondhu", streams: "6.3M", revenue: "₹1.1L", date: "2024", status: "Rising", trendColor: "text-orange-500",
        links: {
            spotify: "https://open.spotify.com/search/Ei%20Na%20Hole%20Bondhu",
            apple: "https://music.apple.com/in/search?term=Ei%20Na%20Hole%20Bondhu",
            ytMusic: "https://music.youtube.com/search?q=Ei+Na+Hole+Bondhu",
            jiosaavn: "https://www.jiosaavn.com/search/Ei%20Na%20Hole%20Bondhu",
            amazon: "https://music.amazon.in/search/Ei%20Na%20Hole%20Bondhu",
            gaana: "https://gaana.com/search/Ei%20Na%20Hole%20Bondhu"
        }
    },
    {
        id: 10, title: "Hey Namaji", streams: "13.5M", revenue: "₹2.3L", date: "2023", status: "Trending", trendColor: "text-emerald-400",
        links: {
            spotify: "https://open.spotify.com/search/Hey%20Namaji",
            apple: "https://music.apple.com/in/search?term=Hey%20Namaji",
            ytMusic: "https://music.youtube.com/search?q=Hey+Namaji",
            jiosaavn: "https://www.jiosaavn.com/search/Hey%20Namaji",
            amazon: "https://music.amazon.in/search/Hey%20Namaji",
            gaana: "https://gaana.com/search/Hey%20Namaji"
        }
    }
];