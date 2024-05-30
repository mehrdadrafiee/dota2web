type SideNavProps = {
  setShowSideNav: (showSideNav: boolean) => void
}

const menuItems = [
  { name: "matches", label: "Matches", link: "/" },
  { name: "heroes", label: "Heroes", link: "/" },
  { name: "teams", label: "Teams", link: "/" },
  { name: "explorer", label: "Explorer", link: "/" },
  { name: "combos", label: "Combos", link: "/" },
  { name: "distributions", label: "Distributions", link: "/" },
  { name: "records", label: "Records", link: "/" },
  { name: "scenarios", label: "Scenarios", link: "/" },
  { name: "api", label: "API", link: "/" },
  { name: "subscribe", label: "Subscribe", link: "/" }
]

export default function SideNav({ setShowSideNav }: SideNavProps) {
  return (
    <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-gray-800" aria-labelledby="drawer-navigation-label">
      <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-400 uppercase">{"<OPENDOTA/>"}</h5>
      <button onClick={() => setShowSideNav(false)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {menuItems.map(({ name, label, link }) => {
            return (
              <li key={name}>
                <a href={link} className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-100 hover:text-black group">
                  <span className="ms-3">{label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}