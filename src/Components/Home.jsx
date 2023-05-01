import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative h-screen overflow-hidden bg-cover bg-no-repeat p-12 text-center"
      style={{ backgroundImage: "url('Rectangle 1.png')" }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="mt-4">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
