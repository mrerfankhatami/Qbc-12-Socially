import Header from "./components/Header";
import AllPosts from "./components/home/AllPosts";

import MobileSidebar from "./components/MobileSidebar";

export default function App() {
  return (
    <>
      <Header>
        <MobileSidebar />
      </Header>

      <AllPosts></AllPosts>
    </>
  );
}
