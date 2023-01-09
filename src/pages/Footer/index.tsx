export function Footer() {
  return (
    <div>
      <h1 className="flex items-center justify-center text-6xl py-10">
        Contatos
      </h1>
      <div className="flex items-center justify-center bg-slate-500 h-20 rounded">
        <div className="flex space-x-14 mx-2 ">
          <a href="https://github.com/matheuslei" target="_blank">
            <div>
              <img className="w-10 " src="imgs/github.svg" alt="github" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/matheusleidev" target="_blank">
            <div>
              <img className="w-10 " src="imgs/linkedin.svg" alt="divnkedin" />
            </div>
          </a>
          <a href="https://www.instagram.com/matheuslei.dev/" target="_blank">
            <div>
              <img className="w-10 " src="imgs/instagram.svg" alt="Instagram" />
            </div>
          </a>
          <a href="mailto:matheus.lei@hotmail.com" target="_blank">
            <div>
              <img className="w-10 " src="imgs/email.svg" alt="Email" />
            </div>
          </a>
        </div>
      </div>
      <div className="text-center pb-4 pt-2 itadivc text-xs">
        <p>
          Todos os direitos reservados 2022 | Desenvolvido por Matheus Leite
        </p>
      </div>
    </div>
  );
}
