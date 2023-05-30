import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function Header({
  photo,
  email,
}: {
  photo?: string;
  email?: string;
}) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/remaining", fetcher);

  return (
    <header
      className="flex justify-between h-[72px] items-center w-full sm:px-12 px-4 sm:bg-[#4C3D30] bg-transparent"
    >
      <Link href="/dream" className="flex space-x-2">
        <Image
          alt="header text"
          src="/logo.png"
          // className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1
          className="flex items-center font-articulat text-lg ml-2 sm:text-[#CDC0B2] text-[#4C3D30] leading-[1] tracking-widest"
        >
          DESIGN<br/>SNAP
        </h1>
      </Link>
      {email ? (
        <div className="flex items-center space-x-4">
          <Link
            href="/buy-credits"
            className="border-r-[2px] border-[#CDC0B2] sm:text-[#CDC0B2] text-[#4C3D30] pr-4 flex space-x-2 hover:text-white transition"
          >
            <div className="font-[Arimo] font-bold">
              {data?.remainingGenerations}{" "}
              {data?.remainingGenerations > 1 ? "CREDITS" : "CREDIT"}
            </div>
          </Link>
          {photo ? (
            <Image
              alt="Profile picture"
              src={photo}
              className="w-10 rounded-full"
              width={32}
              height={28}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white" />
          )}
        </div>
      ) : (
        <Link
          className="flex items-center justify-center space-x-2 rounded-3xl text-white px-5 py-2 text-sm shadow-md font-medium transition"
          style={{ background: '#CDC0B2', color: '#4C3D30' }}
          href="/dream"
        >
          <p className="font-arimo font-bold tracking-widest">LOGIN</p>
        </Link>
      )}
    </header>
  );
}
