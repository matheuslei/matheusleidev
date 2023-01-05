export function Main() {
  return (
     <div className="container lg:flex lg:justify-between items-center sm:py-60 sm:bg-[url('/imgs/background.jpg')] rounded bg-no-repeat bg-cover">
      <div className="mx-auto mb-10">
        <img
          className="sm:rounded-full rounded-full  w-48 md:w-80 lg:w-96 mx-auto m "
          src="https://github.com/matheuslei.png"
          alt="Avatar"
        />
      </div>
      <div className="mx-auto text-center px-10 ">
        <h1 className="text-2xl">
          Olá, meu nome é <br />
          <span className="text-4xl text-green-500 hover:text-red-500 duration-200">
            Matheus Leite de Castro
          </span>
          <br /> sou Desenvolvedor Front-end
        </h1>
        <button className="bg-neutral-800 rounded-[10px] border-2 px-4 py-1 my-4 hover:border-green-500 hover:text-xl duration-200 hover:bg-gray-600 ">
          <a className="flex" href="/matheusleidev-CV.pdf" target="_blank">
            Download CV
            <img
              className="pl-4 animate-bounce "
              src="./imgs/download.svg"
              alt="download-CV"
            />
          </a>
        </button>
      </div>
    </div>
  );
}
