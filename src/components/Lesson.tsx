import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson (props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR,})

    return (
       
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-600">
                {availableAtDateFormatted}
            </span>

            <div className="rounded border border-pink-500 p-4 mt-2 group-hover:border-pink-700 group-hover:bg-pink-100">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="flex items-center gap-2 text-sm text-pink-500 font-medium">
                        <CheckCircle size={20} />
                        Conteúdo Liberado
                        </span>
                    ): (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium bg-white">
                        <Lock size={20} />
                        Em Breve
                    </span>
                    )}

                    <span className="text-xs rounded py-[0.125rem] px-2 text-pink-500 border border-pink-500 font-bold bg-white">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className="text-gray-600 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
};
