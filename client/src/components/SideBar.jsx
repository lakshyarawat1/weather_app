const SideBar = () => {
  return (
    <>
      <div className="w-1/4 bg-slate-100 h-[100vh] hidden md:flex md:flex-col">
        <div className="m-4 flex gap-10 items-center bg-white p-6 rounded-2xl shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 bg-[#2f69fe] rounded-lg text-white p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
          <div className="text-[#2f69fe] font-bold text-xl">SkyCast</div>
        </div>
        <div className="mx-5 mt-10 bg-white rounded-lg shadow-md hover:bg-slate-200">
          <div className="p-6 text-[#2f69fe] font-semibold text-lg">
            <a href="#dashboard">Dashboard</a>
          </div>
        </div>{" "}
        <div className="mx-5 mt-2 bg-white rounded-lg shadow-md hover:bg-slate-200">
          <div className="p-6 text-[#2f69fe] font-semibold text-lg">
            <a href="/dashboard">Maps</a>
          </div>
        </div>
        <div className="mx-5 mt-2 bg-white rounded-lg shadow-md hover:bg-slate-200">
          <div className="p-6 text-[#2f69fe] font-semibold text-lg">
            <a href="/settings">Settings</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
