export function Sobre() {
  return (
    <div className="p-4 pb-20 ">
      <h1 className="text-center text-6xl pb-6 ">Skills</h1>
      <div className="sm:flex sm:justify-between">
        <ul className="flex items-center justify-center mx-auto">
          <div className="pr-2">
            <li className="bg-slate-500 mb-2 hover:bg-slate-400 duration-200 rounded-md">
              <img
                className=" h-40 flex justify-between p-8"
                src="imgs/html.png"
                alt="html"
              />
              <p className="flex items-center justify-center">HTML</p>
            </li>
            <li className="bg-slate-500 mb-2 hover:bg-slate-400 duration-200 rounded-md">
              <img
                className=" h-40 flex items-center justify-between p-8"
                src="imgs/css.png"
                alt="css"
              />
              <p className="flex items-center justify-center">CSS</p>
            </li>
            <li className="bg-slate-500 hover:bg-slate-400 duration-200 rounded-md">
              <img
                className=" h-40 flex items-center justify-between p-8"
                src="imgs/javascript.png"
                alt="javascript"
              />
              <p className="flex items-center justify-center">Javascript</p>
            </li>
          </div>
          <div className="">
            <li className="bg-slate-500 mb-2 hover:bg-slate-400 duration-200 rounded-md">
              <img
                className=" h-40 flex items-center justify-between p-8"
                src="imgs/react.png"
                alt="react"
              />
              <p className="flex items-center justify-center">React</p>
            </li>
            <li className="bg-slate-500 mb-2 hover:bg-slate-400 duration-200 rounded-md">
              <img
                className=" h-40 flex items-center justify-between p-8"
                src="imgs/tailwind-css.png"
                alt="tailwind-CSS"
              />
              <p className="flex items-center justify-center">Tailwind</p>
            </li>
            <li className="bg-slate-500 hover:bg-slate-400 duration-200 rounded-md">
              <img
                className=" h-40 flex items-center justify-between p-8"
                src="imgs/github.svg"
                alt="github"
              />
              <p className="flex items-center justify-center">Github</p>
            </li>
          </div>
        </ul>
        <div className="sm:w-1/2 sm:flex sm:items-center sm:justify-center sm:text-c sm:px-8 py-40  mx-auto ">
          <p className="text-center text-2xl">
            Bem vindo ao meu portfólio! <br /> Atuo na área de TI desde 2014
            como service desk. Em 2020 realizei o curso{" "}
            <span className="animate-pulse text-green-500">
              FullStack Bootcamp da IGTI{" "}
            </span>
            e atualmente realizo outros cursos com o objetido de aprimorar
            minhas habilidades.
                        <button className="flex mx-auto bg-neutral-800 rounded-[10px] border-2 pl-4 pr-2 py-1 my-4 hover:border-green-500  text-xl hover:text-2xl duration-200 hover:bg-gray-600 ">
              <a
                href="https://www.linkedin.com/in/matheusleidev/details/certifications/"
                target="_blank"
                className="pr-1"
              >
                Certificados
              </a>
              <span className="flex h-1 w-3 ">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
