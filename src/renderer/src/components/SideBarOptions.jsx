import React from 'react'

export default function SideBarOptions() {
    return (
        <>
            <a
                href="/"
                className="block cursor-pointer p-2 rounded-md w-full text-center font-bold duration-300 hover:duration-300 text-white bg-[#121212] hover:bg-[#191924] border border-[#222] shadow-md"
            >
                Início
            </a>
            <a
                href="/adicionar-titulo"
                className="block cursor-pointer p-2 rounded-md w-full text-center font-bold duration-300 hover:duration-300 text-white bg-[#121212] hover:bg-[#191924] border border-[#222] shadow-md"
            >
                Adicionar Título
            </a>
            <a
                href="/meus-titulos"
                className="block cursor-pointer p-2 rounded-md w-full text-center font-bold duration-300 hover:duration-300 text-white bg-[#121212] hover:bg-[#191924] border border-[#222] shadow-md"
            >
                Títulos
            </a>
            <a
                href="/meus-livros"
                className="block cursor-pointer p-2 rounded-md w-full text-center font-bold duration-300 hover:duration-300 text-white bg-[#121212] hover:bg-[#191924] border border-[#222] shadow-md"
            >
                Livros
            </a>
            <a
                href="/amigos"
                className="block cursor-pointer p-2 rounded-md w-full text-center font-bold duration-300 hover:duration-300 text-white bg-[#121212] hover:bg-[#191924] border border-[#222] shadow-md"
            >
                Amigos
            </a>
            <a
                href="/amigos"
                className="block cursor-pointer p-2 rounded-md w-full text-center font-bold duration-300 hover:duration-300 text-white bg-[#121212] hover:bg-[#191924] border border-[#222] shadow-md"
            >
                Configurações
            </a>
        </>
    )
}
