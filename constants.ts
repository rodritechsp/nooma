import { Track } from "./types";

// NOTE: For a real app, 'audioUrl' should be replaced with valid audio file links. 
// Since we don't have the user's Google Drive audio files yet, we are using a sample audio for functionality.
const SAMPLE_AUDIO = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 

export const FREQUENCIES = {
    sleep: [
        { 
            id: 1, 
            title: "Ondas Delta", 
            subtitle: "Restaurador • 3Hz", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWNyZwjqNzyCHBRa3miPFmocaK9TOb_iLYrBoE33ohv-rmhY8IW3EvaGSFh36jmxX11IAUjDUKx_G6XB4IGb-KfEymvBloS5dIWFnD5MsELLMYqHgu60mgUDvGd3k5ZQ1a9WM-t33GLEglT6ZYcQZemdHvtwDJbYtwv3p-HWouLWTbx2OA14Ah4gUxP01SewjPELnwX1YMJoR9YmlhZ69fHOIqDJPQprNIuu8vkfhCQzLZgWsVjcOwD4tZfMqDwe8ZBrB3ZIWnmAE", 
            duration: "45m",
            category: "Sono",
            hz: "3Hz",
            audioUrl: SAMPLE_AUDIO 
        },
        { 
            id: 2, 
            title: "Sonho Lúcido", 
            subtitle: "Consciência • Theta", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9RhdptR59ynwvN8ttVgR-h4Gy3P4Kvp73O2XZO05L_hW2RYrIyELPrd_HFeYYg0z7vOFOFvjRLp6fNmk0RbtfiyA_rCrAzwxVVlY491i8XajkNempNFUgap_WKPhZL1fhZlD-z0LQbWWue-SqLzti5DFLN9r6PrDsFWu9vJUloVopHMY-4kTr2Y9ozq3pNfTPChj6D7ZSNdytx0y11NZO-odM5aLVRvT0LQRtXdUydHrrwE7cNOsZ-3nUS1S1R7xn72MlyjVdrtc", 
            duration: "30m",
            category: "Sono",
            hz: "Theta",
            audioUrl: SAMPLE_AUDIO 
        },
        { 
            id: 3, 
            title: "Anoitecer", 
            subtitle: "Adormecer • 432Hz", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEQ640527xfeQX5oDlZZII1Br1sE_SRgN4jUjX0ym46w2gf-Idk0oj78cM26fHLTvDU5z4FOeJtoUttsMbi_XCdJl0tCxmbcWr9AEJw9vJwkaho9mKb3Z40ug2ZwlPbELmUsbVjA0YhkNDdCWAT0ksoK1LaCDMkhNETRHXWVXCRXRNrKg3oTIAuJxRq56DFLOrMnOMhO2GNqN4zS55i-C5q0xaZooNbCjrmqiE1FCrXzZ29AguYTrogIDcfU3GpoVjtxXLar0EExk", 
            duration: "60m",
            category: "Sono",
            hz: "432Hz",
            audioUrl: SAMPLE_AUDIO 
        }
    ],
    focus: [
        { 
            id: 4, 
            title: "Pico Gama", 
            subtitle: "Alerta Alto • 40Hz", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9QIVPYm6PXmvqCmOxKKh8BTKUS1SCx6qXSwRJybSE9OXpf87q0dZ83QvpbI_dxPoKv1ogbffBU9rmMRexKV4lgKDydDqOm8QGYCcfuey5qiZgyVDUobjBjD79Z66KRLZzbWU5eBKIhXrs1KrUSPd3YA_EyD4dLnjie8LSrR_LFEQMd4jJowAsC--nMIfTpTxXROJZvA-YIAGEWwG5CFo8NDDawplP-0X_ZZWFwmyTrmOZQ70HRSwAx77RiPPVWd9L9M1daeFK7eg", 
            duration: "20m",
            category: "Foco",
            hz: "40Hz",
            audioUrl: SAMPLE_AUDIO 
        },
        { 
            id: 5, 
            title: "Fluxo de Trabalho", 
            subtitle: "Sustentação • Alpha", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXZseZVcjzU-6yolRY8INHHyw82ZvbB54Ewu3izv45_wlzH7WVzjJM3TWtPHNM5yhd_lznQILHwSlamiVwDox48o0vIJ_ubIE4_NJr3jetMxrTqhPfuhR7D3HnnGAAWrpQXwIbWnV0PMhe_DJAWFcf09xxzytglCCPf5q2rNe4NCZ3GpK9Jpi__r1L4iGaSjSQ0PgyRF9LZg51bXnxHHXb0PPV3FmzQXFQ4P_WyC9uUSkDBOgvp9gFSkdBRuPMb5zIpCBvfhQt5PE", 
            duration: "90m",
            category: "Foco",
            hz: "Alpha",
            audioUrl: SAMPLE_AUDIO 
        },
        { 
            id: 6, 
            title: "Estudo Alpha", 
            subtitle: "Retenção • 10Hz", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6VLAwquEFn0dGC6RyW1NJy5OqQUY64-VUTz9jTHqQO6WDOai2ETRGFH5ZZWv9WkGD1raAFX6L9gJ0EfYCRPvSmdlU2i9xdvcRHPjkTxTzTDftsZkwEPMv0bvemLrDc82_OkB7vsnYZuTZVmC4TONpjVsU6xIn5oazkFvoWKsFfPPg5-riuqO4GOHdGZPZbmYY1pp4DXbWo4-Ge-Xlk_7T_xH_lkdrB_bTZmes-mn3nXVTYtgU_yIsvKUYbXd8kuQpXRq38xKjv5c", 
            duration: "45m",
            category: "Foco",
            hz: "10Hz",
            audioUrl: SAMPLE_AUDIO 
        }
    ],
    abundance: [
        { 
            id: 7, 
            title: "Campo Quântico", 
            subtitle: "Manifestar • 888Hz", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc_LznCMymqQrFCEYaZaCHTEeV4cYmpBPCR-c0vJIzwQPip2EwRAyoI5MrRsTPFrzpaceiPpuuMmDiJI8kjtmQPhDkD5yeRLAxblRkIVO6LxJoq27ob8PZn3UZprA4aetFAqS6l4BNxI2xSHD20qknU_KTxmF58Sga9Ty9Hzi3u8UGrYYBPhGQRdU7q0d3GjDSifShyT3_bAW1vLgAZ0ui9maD0lhjbNNhvKEHGA134fLXHJpMn_70KaupSSVUsXfn8A6GTU4-f6E", 
            duration: "33m",
            category: "Abundância",
            hz: "888Hz",
            audioUrl: SAMPLE_AUDIO 
        },
        { 
            id: 8, 
            title: "Hora Dourada", 
            subtitle: "Gratidão • 639Hz", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHQGHiN7ZCGcohDg6d0QfNk_QVcLZUgkgSdmYkptDLhA1Q2oiuQlNcieCa_lKvoEyxiFOgklDdF8J6ke9u0Wwp8fk-CL2Y0UIB-RwSlN-sNNSj6jcU9LlA1EGTZxdGU7Exj2eCOk9LUM0_a1y23ZBEvxJyfWsw19v8Gym-SYNXRDCqc9BK5MzijPQaSiIuqCblKrV_MY4PKLnhsMuMYYM62zqUu54qdfqiMaBThsm5DSWYyOHtXr_9uCSPfJbkx8ZGyOwOpY2R4Lk", 
            duration: "22m",
            category: "Abundância",
            hz: "639Hz",
            audioUrl: SAMPLE_AUDIO 
        }
    ],
    anxiety: [
        { 
            id: 9, 
            title: "Paz Interior", 
            subtitle: "Calma • 396Hz", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOHL2cOKvn2J62WHafZ1d9G4QIAJXurgV1MDjOZZXRrEKToahJh7yA0W-4_iOq3e_6JL5zWIr8AtXCsAdd4y8D6aYVv3UMk7_A_lUWj6IzRUGF1odRAPtkBWmd8_Z4zaCdqonnFOxxCsDjheh6vt1U8KKZjxSfkvt9eOR7OIrE6iS4jelA_IJ39Ka-_dDZahpNWNha0SmecWagonnrIV1AE4sqiFpzhFQTWoAScyc5T2NSg2JUZRt3NlMfxWE8n7T6jZUH-3waSn8", 
            duration: "15m",
            category: "Ansiedade",
            hz: "396Hz",
            audioUrl: SAMPLE_AUDIO 
        },
        { 
            id: 10, 
            title: "Respiração Profunda", 
            subtitle: "Alívio • 174Hz", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWNyZwjqNzyCHBRa3miPFmocaK9TOb_iLYrBoE33ohv-rmhY8IW3EvaGSFh36jmxX11IAUjDUKx_G6XB4IGb-KfEymvBloS5dIWFnD5MsELLMYqHgu60mgUDvGd3k5ZQ1a9WM-t33GLEglT6ZYcQZemdHvtwDJbYtwv3p-HWouLWTbx2OA14Ah4gUxP01SewjPELnwX1YMJoR9YmlhZ69fHOIqDJPQprNIuu8vkfhCQzLZgWsVjcOwD4tZfMqDwe8ZBrB3ZIWnmAE", 
            duration: "10m",
            category: "Ansiedade",
            hz: "174Hz",
            audioUrl: SAMPLE_AUDIO 
        }
    ]
};

export const FEATURED_TRACK: Track = {
    id: 99,
    title: "Ativação do Plexo Solar",
    subtitle: "Alinhamento • 15 min • 528 Hz",
    category: "Frequência do Dia",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOnqL1W89xIlBQ9jmxIc3KkWFu51VW0agvhT2OZf-5FrtLCrPHuarRFaJXgk5uxreR6WYIFzQi4fyyglJ1_8x59eus6Q31R01geYCAb3yYX1HppfMeoZ2AXZy4gGNHntGxfDZU_LW6m6Yv7ptYYBQd61qQ_nZHIuU99wrb3-tW8NQlIU0HPqffklumcQeDC0qjsMcX6qGtG9C_QDdZ00cvPQh-U1--Ye7SSjYKmOZF95wfJ4D7UhORGgzbOHCc0X-MTGDL0jNxvi4",
    duration: "15m",
    hz: "528Hz",
    audioUrl: SAMPLE_AUDIO
};