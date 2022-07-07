import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    // font-mono | font-sans | font-serif
    <div className="container my-4 mx-4 font-mono">
      <main>
        <h1 className="text-3xl">
          Let&apos;s build a new Portfolio from scratch
        </h1>
        <p>Kevin MASLOWSKI</p>
      </main>
    </div>
  );
};

export default Home;
