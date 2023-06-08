import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-white p-2 w-full h-full">
        <div className="flex justify-center">
          <Icon
            className="bg-gray-300 rounded-full p-2"
            icon="mdi:user"
            width="80"
            height="80"
          />
        </div>
        <div className="p-2 flex justify-center">
          <h1>Nome genérico</h1>
        </div>
        <div className="text-sm text-center p-2 flex justify-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
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
      <div className="bg-gray-300 p-2">
        <div className="pb-5 text-2xl font-bold flex justify-center items-center">
          <h1>Lista de Tarefas</h1>
        </div>
        <table className="w-full h-full">
          <thead className="bg-white text-lg">
            <tr>
              <th className="px-6 pb-6">Dia</th>
              <th className="px-6 pb-6">Noite</th>
            </tr>
          </thead>
          <tbody className="bg-white text-sm">
            <tr>
              <td className="px-2 py-2">teste</td>
              <td className="px-2 py-2">teste</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
