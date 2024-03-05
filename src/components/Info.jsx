import react, { useEffect,useState } from 'react'


const Info = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getUserData();
    }, [])
    const getUserData = async () => {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        setData(data);
    }
    return (
        <div>
           {
                data.map((item) => {
                     return (
                        <li key={item.id_usuario} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{item.nombre + " "+item.ap + " "+ item.am}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Equipo1@example.com</p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-900">Miembro de Equipo 1</p>
                          <button className="inline-flex items-center px-4 py-2 bg-gray-300 transition ease-in-out delay-75 hover:bg-gray-400 text-white text-sm font-medium rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                            Ver trabajo
                        </button>

                        </div>
                      </li>
                     )
                })
           }
        </div>
    )
    }
export default Info;