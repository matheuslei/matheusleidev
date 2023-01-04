export function Main() {
  return (
     <div className="container lg:flex lg:justify-between items-center my-10 sm:py-60 sm:bg-[url('/imgs/background.jpg')] rounded bg-no-repeat bg-cover">
      <div className="mx-auto mb-10">
        <img
          className="rounded-full mx-auto "
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
        <button className="rounded-[12px] border-2 px-2 my-2 hover:border-green-500 hover:text-xl duration-200 hover:bg-gray-600 ">
          <a href="/matheusleidev-CV.pdf" target="_blank">
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}
