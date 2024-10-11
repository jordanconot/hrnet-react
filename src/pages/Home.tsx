import CreateEmployee from "../components/CreateEmployee";
import Nav from "../components/Nav";
import TitleH1 from "../components/TitleH1";
import TitleH2 from "../components/TitleH2";

export default function Home() {
  return (
    <>
      <TitleH1 text="HRnet" />
      <main className="container">
        <TitleH2 />
        <Nav />
        <CreateEmployee />
      </main>
    </>
  )
}
