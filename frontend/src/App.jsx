import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [movies, setMovies] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch("https://r10d10.onrender.com/movies", {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    if (response.status == 201) {
      loadMovies();
    }
  };

  useEffect(() => {
    fetch("https://r10d10.onrender.com/movies").then((response) => {
      response.json().then((json) => setMovies(json));
    });
  }, []);

  const deleteMovie = async (id) => {
    const response = await fetch(`https://r10d10.onrender.com/movies/${id}`, {
      method: "DELETE",
    });

    if (response.status == 200) loadMovies();
  };

  const loadMovies = () => {
    fetch("https://r10d10.onrender.com/movies").then((response) => {
      response.json().then((json) => setMovies(json));
    });
  };

  const showMenu = () => {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const showFormDia = () => {
    var x = document.getElementById("formDia");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const showFormNoite = () => {
    var x = document.getElementById("formNoite");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  return (
    <>
      <div className="bg-dodger-blue flex items-center p-2 md:hidden">
        <button onClick={() => showMenu()}>
          <Icon icon="material-symbols:menu" width="40" height="40" />
        </button>
      </div>
      <div id="menu" className="bg-dodger-blue p-2 w-full h-full hidden">
        <div className="flex justify-center">
          <Icon
            className="bg-white rounded-full p-2"
            icon="mdi:user"
            width="80"
            height="80"
          />
        </div>
        <div className="p-2 flex justify-center uppercase font-bold">
          <h1>Nome genérico</h1>
        </div>
        <div className="text-sm text-center p-2 flex justify-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="p-2 flex justify-center">
          <ul className="space-y-2 cursor-pointer">
            <li>
              <a href="#"></a>Link 1
            </li>
            <li>
              <a href="#"></a>Link 2
            </li>
            <li>
              <a href="#"></a>Link 3
            </li>
            <li>
              <a href="#"></a>Link 4
            </li>
          </ul>
        </div>
      </div>
      <div className="md:flex md:flex-row md:w-screen md:h-screen">
        <div className="bg-dodger-blue p-2 w-full h-full hidden md:block md:h-screen md:w-1/3">
          <div className="flex justify-center">
            <Icon
              className="bg-white rounded-full p-2"
              icon="mdi:user"
              width="80"
              height="80"
            />
          </div>
          <div className="p-2 flex justify-center uppercase font-bold">
            <h1>Nome Genérico</h1>
          </div>
          <div className="text-sm text-center p-2 flex justify-center">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="p-2 flex justify-center">
            <ul className="space-y-2 cursor-pointer">
              <li>
                <a href="#"></a>Link 1
              </li>
              <li>
                <a href="#"></a>Link 2
              </li>
              <li>
                <a href="#"></a>Link 3
              </li>
              <li>
                <a href="#"></a>Link 4
              </li>
            </ul>
          </div>
        </div>
        <div className="md:h-screen md:w-2/3  ">
          <div className="p-5 text-2xl font-bold flex justify-center items-center">
            <h1>Lista de Tarefas</h1>
          </div>
          <div className="p-2 w-full md:flex md:flex-row md:justify-center md:space-x-4">
            <div className="md:flex md:flex-col">
              <table className="w-full h-full">
                <thead className="text-white bg-dodger-blue">
                  <tr>
                    <th className="px-2 py-2">DIA</th>
                    <th className="px-2 py-2">AÇÕES</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {movies.map((movie) => (
                    <>
                      <tr>
                        <td className="px-2 py-2 text-sm">{movie.name}</td>
                        <td className="px-2 py-2 flex justify-center items-center">
                          <button onClick={() => deleteMovie()}>
                            <Icon
                              icon="material-symbols:delete"
                              width="20"
                              height="20"
                            />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center p-2">
                <button
                  onClick={() => showFormDia()}
                  className="bg-dodger-blue text-sm text-white font-bold py-2 px-4 rounded"
                >
                  ADICIONAR ROTINA
                </button>
              </div>
              <div className="hidden" id="formDia">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-row pb-2">
                    <input
                      type="text"
                      id="rotinaDia"
                      placeholder="Rotina"
                      className="text-sm w-full px-1 py-1 rounded"
                      {...register("rotinaDia", {
                        required: "Rotina é obrigatória",
                      })}
                    />
                    <button type="submit">
                      <Icon
                        icon="material-symbols:send"
                        width="30"
                        height="30"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:flex md:flex-col">
              <table className="w-full h-full">
                <thead className="text-white bg-dodger-blue">
                  <tr>
                    <th className="px-2 py-2">NOITE</th>
                    <th className="px-2 py-2">AÇÕES</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {movies.map((movie) => (
                    <>
                      <tr>
                        <td className="px-2 py-2 text-sm">{movie.name}</td>
                        <td className="px-2 py-2 flex justify-center items-center">
                          <button onClick={() => deleteMovie()}>
                            <Icon
                              icon="material-symbols:delete"
                              width="20"
                              height="20"
                            />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center p-2">
                <button
                  onClick={() => showFormNoite()}
                  className="bg-dodger-blue text-sm text-white font-bold py-2 px-4 rounded"
                >
                  ADICIONAR ROTINA
                </button>
              </div>
              <div className="hidden" id="formNoite">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      id="rotinaNoite"
                      placeholder="Rotina"
                      className="text-sm w-full px-1 py-1 rounded"
                      {...register("rotinaNoite", {
                        required: "Rotina é obrigatória",
                      })}
                    />
                    <button type="submit">
                      <Icon
                        icon="material-symbols:send"
                        width="30"
                        height="30"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
