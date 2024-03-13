import Vite from '@assets/Vite-Logo.svg';

function App() {
  return (
    <div className="h-screen bg-[#252525] flex justify-center items-center ">
      <div className="h-[630px] max-w-[1200px] p-10 flex items-start lg:items-center justify-center gap-4 flex-col-reverse lg:flex-row">
        <div>
          <span className="text-4xl font-bold bg-gradient-to-r from-[#8B6BFE] to-[#57A9CB] bg-clip-text text-transparent">
            Create-vite-tailwind
          </span>
          <h1 className="mt-4 text-6xl font-black text-balance text-slate-200">
            Public Template Repository
          </h1>
          <p className="mt-4 mb-4 text-2xl text-balance text-slate-200">
            Start pack di un progetto React con Vite. Include Tailwind, Headless
            UI, React-Icons, React-Router, Redux e una folder structure
            predefinita.
          </p>
          <span className="text-blue-600">
            by{' '}
            <a
              className="italic underline"
              href="https://github.com/Sferralove"
              target="_blank"
            >
              github.com/Sferralove
            </a>
          </span>
        </div>
        <div>
          <img src={Vite} className="scale-75 lg:scale-100" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
