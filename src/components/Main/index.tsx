export function Main() {
  return (
    <div className="container lg:flex lg:justify-between items-center py-60 bg-[url('/imgs/background.jpg')]  rounded bg-no-repeat bg-cover">
      <div className=" w-1/2 g:justify-between items-center">
        <img
          className="rounded-full mx-36 sm:pb-10 mb-10"
          src="https://github.com/matheuslei.png"
          alt="Avatar"
        />
      </div>
      <div className="w-1/2 ml-20 sm:px-10">
        <h1 className="text-2xl">
          Olá, meu nome é <br />
          <span className="text-4xl text-green-500 hover:text-red-500 duration-200">
            Matheus Leite de Castro
          </span>
          <br /> sou Desenvolvedor Front-end
        </h1>
      </div>
    </div>
  );
}