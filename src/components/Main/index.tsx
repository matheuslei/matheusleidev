export function Main() {
  return (
    <div className="flex justify-between items-center py-52 relative bg-[url('/imgs/background.jpg')] ustify-center bg-no-repeat bg-cover bg-center rounded-lg">
      <div className=" w-1/2 mx-2">
        <img
          className="rounded-full"
          src="https://github.com/matheuslei.png"
          alt="Avatar"
        />
      </div>
      <div className="w-1/2 ml-8">
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
