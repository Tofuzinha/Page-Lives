import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

import classNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const { slug } = useParams<{slug: string}>();

    const isLessonAvailable = isPast(props.availableAt);
    const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR,})

    const isActiveLesson = slug === props.slug;

    return (
       
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-600">
                {availableAtDateFormatted}
            </span>

            <div className={classNames('rounded border p-4 mt-2',{
                'bg-green-500': isActiveLesson,
            })}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames('flex items-center gap-2 text-sm  font-medium', {
                            'text-white': isActiveLesson,
                            'text-pink-500': !isActiveLesson,
                        })}
                        >
                        <CheckCircle size={20} />
                        Conteúdo Liberado
                        </span>
                    ): (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium bg-white">
                        <Lock size={20} />
                        Em Breve
                    </span>
                    )}

                    <span className={classNames('text-xs rounded py-[0.125rem] px-2 font-bold border ', {
                        'border-white text-white ': isActiveLesson,
                        'text-pink-500 border-pink-500 bg-white': !isActiveLesson,
                         })}
                         >
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={classNames(' mt-5 block', {
                    'text-white': isActiveLesson,
                    'text-gray-600': !isActiveLesson,
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
};
