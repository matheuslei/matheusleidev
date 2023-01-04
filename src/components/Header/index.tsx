export function Header() {
  return (
    <div className="bg-neutral-800 pb-3 sticky top-0 z-50">
      <header className="flex items-center justify-center">
        <div>
          <a href="/">
            <h1 className="mt-4 text-2xl font-bold">
              Matheuslei
              <strong className="text-green-500 hover:text-red-500 duration-200">
                dev
              </strong>
            </h1>
          </a>
        </div>
        {/* <div>
          <ul className="flex flex-row space-x-6 ml-8 ">
            <li>
              <a className="hover:text-green-500 duration-200" href="/home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-green-500 duration-200" href="/home">
                Sobre mim
              </a>
            </li>
            <a className="hover:text-green-500 duration-200" href="/home">
              {" "}
              Projetos
            </a>
            <li>
              <a className="hover:text-green-500 transition-100" href="/home">
                Contato
              </a>
            </li>
          </ul>
        </div> */}
      </header>
    </div>
  );
}
