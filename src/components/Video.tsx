import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";

import '@vime/core/themes/default.css';
import { useGetlessonBySlugQuery } from "../graphql/generated";




interface VideoProps {
    lessonSlug: string;
}

export function Video (props: VideoProps) {

    const { data } = useGetlessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando....</p>
            </div>
        )
    }
    
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

                <div className="p-8 max-w-[1100px] mx-auto">
                    <div className="flex items-start gap-16">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                            <p className="mt-4 text-gray-100 leading-relaxed">
                                {data.lesson.description}
                            </p>

                            {data.lesson.teacher && (
                                <div className="flex items-center gap-4 mt-6">
                                <img 
                                className="h-16 w-16rounded-full border-2 border-pink-500"
                                src={data.lesson.teacher.avatarURL}
                                alt=""
                                />

                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-100 text-sm block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                            )}
                            
                        </div>

                        <div className="flex flex-col gap-4">
                            <a href="" className="p-4 text-sm bg-pink-100 text-pink-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-pink-700 hover:text-pink-100 transition-colors">
                                <DiscordLogo size={24}/>
                                Comunidade do Discord
                            </a>
                            <a href="" className="p-4 text-sm border border-gray-100 text-gray-100 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-gray-100 hover:text-pink-500 transition-colors">
                                <Lightning size={24}/>
                                Acesse a partida
                            </a>
                        </div>
                    </div>
                    <div className="gap-8 mt-20 grid grid-cols-2">
                        <a href="" className="bg-white rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-200 transition-colors">
                            <div className="bg-pink-700 h-full p-6 flex items-center">
                                <FileArrowDown size={40} />
                            </div>
                            <div className="py-6 leading-relaxed">
                                <strong className="text-2xl text-gray-600">Lista de builds</strong>
                                <p className="text-sm text-gray-300 mt-2">
                                    Acesso o material complementar para acelerar o seu desenvolvimento
                                </p>

                            </div>
                            <div className="h-full p-6 flex items-center">
                                <CaretRight size={24} />
                            </div>
                        </a>

                        <a href="" className="bg-white rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-200 transition-colors">
                            <div className="bg-pink-700 h-full p-6 flex items-center">
                                <FileArrowDown size={40} />
                            </div>
                            <div className="py-6 leading-relaxed">
                                <strong className="text-2xl text-gray-600">Wallpaper Exclusivos</strong>
                                <p className="text-sm text-gray-300 mt-2">
                                    Acesso o material complementar para acelerar o seu desenvolvimento
                                </p>

                            </div>
                            <div className="h-full p-6 flex items-center">
                                <CaretRight size={24} />
                            </div>
                        </a>

                    </div>
                </div> 
        </div>

    )
};

export default Video;