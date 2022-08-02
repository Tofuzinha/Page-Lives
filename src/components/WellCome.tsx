import luluGif from '../assets/lulu.gif';

export function WellCome () {
    return (
        <div className='flex-1 bg-gray-600'>
           <div className='flex justify-center flex-col items-center mt-10 mx-auto'>
                <h1 className='text-center mb-10 text-4xl'>Sejam bem Vindos!</h1>
                <p className='text-center'>Sinta-se avontade e escolha o seu video, embarque nessa jornada <span className='text-pink-500 font-bold'>n_n</span></p>
                <img src={luluGif} className='mt-10' />
           </div>

        </div>

    );
}