import { logo } from '../assets';

const hero = () => {
    return (
        <>
        <header className='w-full flex justify-center items-center flex-col '>
            <nav className='flex justify-between items-center w-full mb-10 pt-3 '>
                <img src={logo} alt="logo" className='w-28 object-contain' />

                <button
                    type='button'
                    onClick={() => window.open('https://github.com/manishindiyaar')}
                    className='black-btn px-5 py-2 bg-slate-700 text-white rounded-xl'
                >Github</button>
            </nav>
            <h1 className='text-5xl text-slate-700 font-black head_txt flex flex-col'>
                Summarize Articles with <br />
                <span className='font-black text-white text-7xl bg-gradient-to-r from-indigo-900 rounded-xl mb-2 '>OpenAI GPT 4</span>
            </h1>
            <h1 className="desc">
                simplify your Reading with Beautiful summary
            </h1>
        </header>
        
        </>
    )
}

export default hero;