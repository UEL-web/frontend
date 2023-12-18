import BANNER from "../constants/banners";

function HomePage() {
  return (
    <div className="container m-auto">
      <section className="h-auto outline">
          <img src={BANNER.HOME}/>
      </section>
    </div>
  );
}

export default HomePage;