import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header className="h-30 bg-lime-200"></header>
      <main className="mr-auto ml-auto">
        <Outlet />
      </main>
      <footer className="h-10 p-2 bg-gray-700"></footer>
    </>
  );
};

export default Layout;
