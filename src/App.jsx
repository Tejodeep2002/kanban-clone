import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TodoSection from "./components/TodoSection";

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex h-screen">
        <SideBar />
        <TodoSection />
      </div>
    </>
  );
}

export default App;
