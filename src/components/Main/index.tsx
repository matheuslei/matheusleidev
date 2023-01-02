export function Main() {
  return (
    <div className="container lg:flex lg:justify-between items-center py-60 bg-[url('/imgs/background.jpg')]  rounded bg-no-repeat bg-cover">
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
      </div>
    </div>
  );
}
