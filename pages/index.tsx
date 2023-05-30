import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex mx-auto flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Design Snap</title>
      </Head>

      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1
          className="mx-auto max-w-4xl font-display text-4xl sm:text-6xl font-bold font-dallas leading-[1]"
        >
          REDESIGN ROOMS<br/> IN SECONDS
        </h1>
        <h2 className="mx-auto mt-4 sm:max-w-4xl max-w-xl sm:text-lg text-[#4C3D30] leading-1">
          Take a picture of a room & instantly re-design it.<br/>
          Design Snap the perfect inspiration for your next room
        </h2>
        <Link
          className="bg-[#AE6A2B] rounded-full text-[#F5F0EA] px-8 py-3 sm:mt-10 mt-8 font-arimo font-bold"
          href="/dream"
        >
          REDESIGN YOUR ROOM
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-4">
            <div className="flex sm:space-x-8 sm:flex-row flex-col tracking-[0.3em]">
              <div>
                <h3 className="mb-2 font-medium text-lg font-articulat">Original Room</h3>
                <img
                  alt="Original photo of a room"
                  src="/original_room.webp"
                  className="w-full object-fill h-96 rounded-2xl"
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-2 font-medium text-lg font-articulat">Generated Room</h3>
                <img
                  alt="Generated photo of a room with roomGPT.io"
                  src="/generated_room.webp"
                  className="w-full object-fill h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <section className="py-10 max-w-7xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7 flex flex-col items-center justify-center text-center">
          <div className="mx-auto">
            <h1 className="mx-auto max-w-4xl font-dallas font-display text-4xl font-bold tracking-normal text-[#4C3D30] sm:text-6xl leading-[1]">
              BESPOKE DESIGNS<br/> MADE FROM A.I
            </h1>
          </div>
          <div
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-8 lg:gap-20 lg:mt-16 sm:max-w-none lg:grid-cols-4"
          >
            <div
              className="hover:scale-105 transition duration-300 ease-in-out "
            >
              <Image
                src="/happy_customers.png"
                width={192}
                height={192}
                alt="1 icon"
              />
            </div>
            <div
              className="hover:scale-105 transition duration-300 ease-in-out "
            >
              <Image
                src="/redesign_time.png"
                width={192}
                height={192}
                alt="1 icon"
              />
            </div>
            <div
              className="hover:scale-105 transition duration-300 ease-in-out "
            >
              <Image
                src="/renovator.png"
                width={192}
                height={192}
                alt="1 icon"
              />
            </div>
            <div
              className="hover:scale-105 transition duration-300 ease-in-out "
            >
              <Image
                src="/6_styles.png"
                width={192}
                height={192}
                alt="1 icon"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 max-w-7xl">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8 md:px-7 flex flex-col items-center justify-center text-center">
          <div className="mx-auto">
            <h1 className="mx-auto max-w-4xl font-extrabold font-display text-xl tracking-normal text-[#545E56] sm:text-2xl mb-2">
              3 EASY STEPS TO
            </h1>
            <h1
              className="mx-auto sm:max-w-4xl max-w-[240px] font-display text-4xl font-bold tracking-normal text-[#99552A] sm:text-6xl"
              style={{ WebkitTextStroke: '2px #99552A', color: "transparent" }}
            >
              REDESIGN YOUR SPACE
            </h1>
          </div>
        </div>
        <div className="mx-auto flex justify-center overflow-hidden relative sm:mt-12 mt-4 ">
          <img
            src="/phone.png"
            className="h-auto w-full"
            alt="1 icon"
          />
          <div className="absolute bottom-0 bg-[#AE6A2B] rounded-[32px] text-[#F5F0EA] sm:px-10 px-8 py-4 sm:mt-10 mt-4 font-[Arimo] font-bold text-sm sm:text-xl">
            <Link
              href="/dream"
            >
              DESIGN YOURS NOW
            </Link>
          </div>
        </div>
      </section>
      <section className="py-4 sm:py-12 max-w-7xl">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8 md:px-7 flex flex-col items-center justify-center text-center">
          <div className="mx-auto">
            <h1
              className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-[#99552A] sm:text-6xl"
              style={{ WebkitTextStroke: '2px #99552A', color: "transparent" }}
            >
              #DESIGN SNAP
            </h1>
          </div>
        </div>
        <div
          role="list"
          className="mx-auto mt-8 grid w-full grid-cols-2 lg:mt-16 sm:max-w-none lg:grid-cols-4"
        >
          <img
            src="/1.png"
            className="h-full w-auto"
            alt="1 icon"
          />
          <img
            src="/2.png"
            className="h-full w-auto"
            alt="1 icon"
          />
          <img
            src="/3.png"
            className="h-full w-auto"
            alt="1 icon"
          />
          <img
            src="/4.png"
            className="h-full w-auto"
            alt="1 icon"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
