import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const notify = () => toast("Wow so easy!");

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_zjq1crg",
        "template_8r9orfu",
        templateParams,
        "0GDKIiYyiHmFyphQb"
      )
      .then(
        (response) => {
          toast.success("Mensagem enviada com sucesso 🖐");
          console.log("Email enviado!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  }

  return (
    <div>
      <div className="">
        <h1 className="flex items-center justify-center text-6xl py-10 ">
          Contato
        </h1>

        <form
          className="flex items-center justify-center flex-col"
          onSubmit={sendEmail}
        >
          <input
            className="bg-neutral-700 rounded sm:w-96 m-1 pl-4 sm:px-4"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="bg-neutral-700 rounded sm:w-96 m-1 pl-4 sm:px-4"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="bg-neutral-700 rounded sm:w-96 m-1  pl-4 px-5 sm:px-4"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input
            className="bg-neutral-800 rounded-[10px] border-2 px-4 py-1 my-4 hover:border-green-500 hover:text-xl duration-200 hover:bg-gray-600"
            type="submit"
            value="Enviar"
          />
        </form>
        <ToastContainer />
      </div>

      <div className="flex items-center justify-center bg-slate-500 h-20 rounded">
        <ul className="flex space-x-14 mx-2 ">
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
      <div className="text-center pb-4 pt-2 italic text-xs">
        <p>
          Todos os direitos reservados 2022 | Desenvolvido por Matheus Leite
        </p>
      </div>
    </div>
  );
}
