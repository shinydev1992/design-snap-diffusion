import Image from "next/image";
import Link from "next/link";

export default function Header({
  photo,
  email,
}: {
  photo?: string;
  email?: string;
}) {
  return (
    <header
      className="flex justify-between h-[72px] items-center w-full sm:px-4 px-2 border-gray-500"
      style={{ background: '#4C3D30' }}
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
          className="flex items-center text-xl ml-2"
          style={{ color: '#CDC0B2', fontFamily: 'inherit', lineHeight: '1.2rem' }}
        >
          DESIGN<br/>SNAP
        </h1>
      </Link>
      {email ? (
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
          >
            <div>Dashboard</div>
          </Link>
          <Link
            href="/buy-credits"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
          >
            <div>Buy Credits</div>
            <div className="text-blue-500 bg-blue-200 rounded-full px-2 text-xs flex justify-center items-center font-bold">
              New
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
          <p style={{ fontFamily: 'Arimo', fontWeight: 'bold' }}>LOGIN</p>
        </Link>
      )}
    </header>
  );
}
