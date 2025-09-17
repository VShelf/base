import TopBar from './components/TopBar'
import Footer from './components/Footer'
import SideBarOptions from './components/SideBarOptions'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de título */}
      <div className="fixed top-0 w-full z-10">
        <TopBar />
      </div>

      {/* Layout principal (sidebar + conteúdo) */}
      <div className="flex flex-1 mt-[40px]">
        {/* Sidebar */}
        <aside className="w-60 bg-[#121214] border-r border-[#191924] p-4">
          <nav className="space-y-3">
            <SideBarOptions />
          </nav>
        </aside>

        {/* Conteúdo rolável */}
        <main
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#191924 #121214',
            scrollBehavior: 'smooth'
          }}
        >
          <div>

          </div>
        </main>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  )
}

export default App
