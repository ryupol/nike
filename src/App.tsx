import { Nav } from "./components";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1wide:padding-r padding-b">Hero</section>
      <section className="padding">PopularProducts</section>
      <section className="padding">SuperQuality</section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">SpecialOffer</section>
    </main>
  );
}

export default App;
