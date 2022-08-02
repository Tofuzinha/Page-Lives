import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { BannerInit } from "../components/BannerInit";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscriber() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent) {
        event?.preventDefault();

         await createSubscriber({
            variables: {
                name,
                email,
            }
        });
        navigate('/event');
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center px-6  ">
            <div className="flex items-center justify-between flex-col mt-20 mx-auto md:flex-row" >
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] text-gray-500 leading-tight">
                        Divirta-se e acompanhe 
                        <span className="text-pink-500 font-semibold"> games de League of Legends </span>
                        com a 
                        <span className="text-pink-500 font-semibold"> Midori</span>
                    </h1>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                    Muitas risadas, partidas com vitórias e derrotas, mas diversão é garantida. Ainda gameplay em ranked em summoners rift e sessão de aram em howling abyss.
                    </p>
                </div>

                <div className="p-8 bg-pink-500 border rounded">
                    <strong className="text-2xl mb-6 block text-gray-100">Inscreva-se</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                        className="bg-gray-100 rounded px-5 h-12 text-gray-500 focus:outline-none focus:border-pink-200 focus:ring-1 focus:ring-pink-200 placeholder:text-gray-400"
                        type="text" 
                        placeholder="Seu nome completo" 
                        onChange={event => setName(event.target.value)}
                        />

                        <input 
                        className="bg-gray-100 rounded px-5 h-12 text-gray-500 focus:outline-none focus:border-pink-200 focus:ring-1 focus:ring-pink-200 placeholder:text-gray-400"
                        type="text" 
                        placeholder="Digite seu e-mail" 
                        onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                        type="submit"
                        disabled={loading}
                        target='_blank'
                        className="mt-5 bg-pink-700 uppercase py-5 rounded font-bold text-sm hover:bg-pink-800 disabled:opacity-50">
                            reserva
                        </button>
                    </form>

                </div>

            </div>
            <BannerInit />
        </div>
    );
}