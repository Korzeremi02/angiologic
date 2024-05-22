// import profilePic from "./assets/pic.jpg"
const svgBrush = "/svg/brush.svg"
const svgExport = "/svg/export.svg"
const svgFolder = "/svg/folder.svg"
const svgHelp = "/svg/help.svg"
const svgHome = "/svg/home.svg"
const svgInfo = "/svg/info.svg"
const svgProfile = "/svg/profile.svg"
const svgSettings = "/svg/settings.svg"

export default function Home() {
  return <>
  <div className="flex flex-col h-screen w-screen bg-black">
    {/* <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
      <span class="sr-only">Afficher menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>
    </button> */}

    <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto  bg-gray-800">
          <ul class="space-y-2 font-medium">
            <p class="w-full h-fit text-xl text-white font-semibold ml-3">AngioWorks</p>
            <li>
                <a href="/" class="flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group">
                  <img src={svgHome} class="w-5 h-5" aria-hidden="true"></img>
                  <span class="ms-3">Accueil</span>
                </a>
            </li>
            <li>
                <a href="/file" class="flex items-center p-2 rounded-lg text-white bg-gray-600 hover:bg-gray-700 group">
                  <img src={svgFolder} class="w-5 h-5" aria-hidden="true"></img>
                  <span class="flex-1 ms-3 whitespace-nowrap">Fichier</span>
                </a>
            </li>
            <li>
                <a href="/draw" class="flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group">
                  <img src={svgBrush} class="w-5 h-5" aria-hidden="true"></img>
                  <span class="flex-1 ms-3 whitespace-nowrap">Croquis</span>
                </a>
            </li>
            <li>
                <a href="/infos" class="flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group">
                  <img src={svgInfo} class="w-5 h-5" aria-hidden="true"></img>
                  <span class="flex-1 ms-3 whitespace-nowrap">Infos </span>
                </a>
            </li>
            <li>
                <a href="/export" class="flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group">
                  <img src={svgExport} class="w-5 h-5" aria-hidden="true"></img>
                  <span class="flex-1 ms-3 whitespace-nowrap">Exporter</span>
                </a>
            </li>
          </ul>
          <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">
            <li>
                <a href="#" class="flex items-center p-2 transition duration-75 rounded-lg  hover:bg-gray-700 text-white group">
                  <img src={svgProfile} class="w-5 h-5" aria-hidden="true"></img>
                  <span class="ms-3">Mon profil</span>
                  <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300">Soon</span>
                </a>
            </li>
            <li>
                <a href="/settings" class="flex items-center p-2 transition duration-75 rounded-lg  hover:bg-gray-700 text-white group">
                  <img src={svgSettings} class="w-5 h-5" aria-hidden="true"></img>
                  <span class="ms-3">Paramètres</span>
                  <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300">Soon</span>
                </a>
            </li>
            <li>
                <a href="/help" class="flex items-center p-2 transition duration-75 rounded-lg  hover:bg-gray-700 text-white group">
                  <img src={svgHelp} class="w-5 h-5" aria-hidden="true"></img>
                  <span class="ms-3">Aide</span>
                </a>
            </li>
          </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-64 h-full w-min-fit">
      <div class="p-4 border-2 border-dashed rounded-lg h-full border-gray-700">
          
      </div>
    </div>
  </div>
  </>
}

Home()