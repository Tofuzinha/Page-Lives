import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber ($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
`

export function Subscriber() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION);

    function handleSubscribe(event: FormEvent) {
        event?.preventDefault();

        createSubscriber({
            variables: {
                name,
                email,
            }
        });

    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center px-6">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto" >
                <div className="max-w-[640px]">
                    <img src='/src/assets/logo-poring-light.png' className='w-auto h-[7rem]'/>
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
                        className="mt-5 bg-pink-700 uppercase py-5 rounded font-bold text-sm hover:bg-pink-800">
                            reserva
                        </button>
                    </form>

                </div>

            </div>
            <img src="/src/assets/bg-inscription.png" className="mt-10" alt="" />
        </div>
    );
}