import heroImg from "../assets/hero-img-2.svg";

export default function Hero() {
  return (
    <section className="container w-5/6 mx-auto mt-10 flex justify-between">
      <div className="w-1/2 self-center">
        <h2 className="text-4xl font-semibold leading-tight text-gray-900">
          Discover your next great read today!
        </h2>
        <p className="mt-4 text-lg text-gray-800 leading-loose text-justify w-5/6">
          Browse our selection of books, including NY Times bestsellers, shop
          for your favorite titles, or search for free ebooks on Project
          Gutenberg and the Internet Archive.
        </p>
        <button className="bg-indigo-600 text-white capitalize tracking-wide font-medium py-2 px-4 mt-3 rounded-lg hover:bg-indigo-500 transition">
          start exploring now!
        </button>
      </div>
      <div className="w-1/2 ">
        <img src={heroImg} alt="Hero image" />
      </div>
    </section>
  );
}
