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
                    className='black-btn p-1 bg-slate-700 text-white rounded-sm'
                >Github</button>
            </nav>
            <h1 className='text-5xl font-black head_txt flex flex-col'>
                Summarize Articles with <br />
                <span className='font-black text-7xl bg-gradient-to-r from-indigo-500 '>OpenAI GPT 4</span>
            </h1>
            <h1 className="desc">
                simplify your Reading with Beautiful summary
            </h1>
        </header>
        
        </>
    )
}

export default hero;