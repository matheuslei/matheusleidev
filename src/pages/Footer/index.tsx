export function Footer() {
  return (
    <div>
      <h1 className="flex items-center justify-center sm:text-9xl text-7xl pb-10">
        Contatos
      </h1>
      <div className="flex items-center justify-center bg-slate-500 h-20 rounded">
        <ul className="flex space-x-16 ">
          <a href="https://github.com/matheuslei" target="_blank">
            <li>
              <img className="w-10 " src="imgs/github.svg" alt="github" />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/matheusleidev" target="_blank">
            <li>
              <img className="w-10 " src="imgs/linkedin.svg" alt="Linkedin" />
            </li>
          </a>
          <a href="https://www.instagram.com/matheuslei.dev/" target="_blank">
            <li>
              <img className="w-10 " src="imgs/instagram.svg" alt="Instagram" />
            </li>
          </a>
          <a href="mailto:matheus.lei@hotmail.com" target="_blank">
            <li>
              <img className="w-10 " src="imgs/email.svg" alt="Email" />
            </li>
          </a>
        </ul>
      </div>
      <div className="flex items-center justify-center pb-4 pt-2 italic text-xs">
        <p>
          Todos os direitos reservados 2022 | Desenvolvido por Matheus Leite
        </p>
      </div>
    </div>
  );
}
