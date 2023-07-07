import { useSession } from "next-auth/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingTable from "../components/PricingTable";
import Head from "next/head";
import useSWR from "swr";
import Image from "next/image";

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
}

declare const window: WindowWithDataLayer;

export default function Pricing() {
  const { data: session } = useSession();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/remaining", fetcher);

  return (
    <div className="flex mx-auto overflow-visible flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Buy Credits</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mb-0 mb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto sm:max-w-[680px] max-w-[320px] text-center">
            <p className="mt-2 text-4xl font-dallas font-bold tracking-tight sm:text-5xl">
              BUY DESIGN SNAP CREDITS
            </p>
          </div>
        </div>
        <p className="mx-auto mt-6 sm:max-w-[640px] max-w-[300px] font-articulat tracking-widest text-center sm:text-lg text-sm leading-6 sm:mb-10 mb-4">
          You have{" "}
          <span className="font-semibold uppercase">
            {data?.remainingGenerations}{" "}
            {data?.remainingGenerations > 1 ? "credits" : "credit"}
          </span>
          {" "} remaining.<br className="sm:hidden block"/> Join thousands of happy customers. Buy credits to start designing!
        </p>
      </main>
      <div className="w-full">
        {session?.user?.email && (
          // @ts-ignore
          <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-12 lg:space-y-0 space-y-8 lg:mt-8 mt-2 mb-8">
            <PricingTable price="10" credit="10" tag={false} />
            <PricingTable price="20" credit="40" tag={true} />
            <PricingTable price="49" credit="120" tag={false} />
          </div>
        )}
      </div>
      <div className="mt-10 text-center">
        <h4 className="flex-none leading-6 mt-2 text-3xl font-arimo font-bold tracking-widest sm:text-5xl">
          WHAT'S INCLUDED?
        </h4>
      </div>
      <ul
        role="list"
        className="mt-8 grid grid-cols-1 gap-4 leading-6 sm:grid-cols-2 sm:gap-6 mb-10 font-articulat font-bold tracking-widest"
      >
        <li className="flex gap-x-3">
          <Image
            width={24}
            height={24}
            src="/check.png"
            alt='check icon'
          />
          Premium support by email
        </li>

        <li className="flex gap-x-3">
          <Image
            width={24}
            height={24}
            src="/check.png"
            alt='check icon'
          />
          Early access to new features
        </li>
        <li className="flex gap-x-3 items-center">
          <Image
            width={24}
            height={24}
            src="/check.png"
            alt='check icon'
          />
          Commercial usage of photos
        </li>
        <li className="flex gap-x-3">
          <Image
            width={24}
            height={24}
            src="/check.png"
            alt='check icon'
          />
          Extra design support & details
        </li>
      </ul>
      <p className="mb-5 text-center font-articulat font-bold tracking-widest">
        Interested in team or bulk pricing?<br/> Email me at hannah@thedesignsnap.com
      </p>
      <Footer />
    </div>
  );
}
