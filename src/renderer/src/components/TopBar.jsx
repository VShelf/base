import React from 'react'

export default function TopBar() {

    const minimize = () => window.electron.ipcRenderer.send('window:minimize')
    const maximize = () => window.electron.ipcRenderer.send('window:maximize')
    const close = () => window.electron.ipcRenderer.send('window:close')

    const openConfig = () => (window.location.href = '/config')
    const goToHome = () => (window.location.href = '/')

    return (
        <div className="titlebar titlebar-bg">
            <div className="title">VShelf - 1.2.13</div>
            <div className="window-controls">
                <button id="close" onClick={close} title="Fechar">
                    {/* &#x2715; */}
                </button>
                <button id="minimize" onClick={minimize} title="Minimizar">
                    {/* &#128469; */}
                </button>
                <button id="maximize" onClick={maximize} title="Maximizar">
                    {/* &#128470; */}
                </button>
            </div>
            <div className="side-buttons">
                <span className="side-button_home" onClick={goToHome} title="Ir para página inicial">
                    {/* <img src="./src/assets/img/home.webp" alt="" /> */}
                </span>
                <span className="side-button_config" onClick={openConfig} title="Ir para configurações">
                    {/* <img src="./src/assets/img/tool.webp" alt="" /> */}
                </span>
            </div>
        </div>
    )
}
