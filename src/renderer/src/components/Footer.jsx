import React from 'react'

export default function Footer() {
    const titles = '0'
    const books = '0'
    const friends = '0'

    return (
        <footer className="custom-footer h-[25px] w-full flex text-gray-500 items-center uppercase italic border-t border-[#222] justify-between">
            <div>
                <span className="text-shadow-amber-200 ml-5">
                    <b className="underline font-normal italic">{titles}</b> Títulos
                </span>
                <span className="ml-5 text-sm text-gray-400">|</span>
                <span className="text-shadow-amber-200 ml-5">
                    <b className="underline font-normal italic">{books}</b> Livros
                </span>
                <span className="ml-5 text-sm text-gray-400">|</span>
                <span className="text-shadow-amber-200 ml-5">
                    <b className="underline font-normal italic">{friends}</b> Amigos
                </span>
            </div>
            <div>
                <span className="mr-5">
                    Todos os direitos reservados © 2025 -{' '}
                    <b className="underline text-gray-500">ylorde.com.br</b>
                </span>
            </div>
        </footer>
    )
}
