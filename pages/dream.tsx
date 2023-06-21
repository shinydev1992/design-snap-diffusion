import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResizablePanel from "../components/ResizablePanel";
import appendNewToName from "../utils/appendNewToName";
import downloadPhoto from "../utils/downloadPhoto";
import DropDown from "../components/DropDown";
import { roomType, rooms } from "../utils/dropdownTypes";
import { GenerateResponseData } from "./api/generate";
import { useSession, signIn } from "next-auth/react";
import useSWR from "swr";
import { Rings } from "react-loader-spinner";
import Link from "next/link";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";

// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});

const Home: NextPage = () => {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [theme, setTheme] = useState<string>("Modern");
  const [room, setRoom] = useState<roomType>("Living Room");

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR("/api/remaining", fetcher);
  const { data: session, status } = useSession();

  const options = {
    maxFileCount: 1,
    mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
    editor: { images: { crop: false } },
    tags: [data?.remainingGenerations > 3 ? "paid" : "free"],
    styles: {
      colors: {
        primary: "#99552A", // Primary buttons & links
        error: "#d23f4d", // Error messages
        shade100: "#4C3D30", // Standard text
        shade200: "#4C3D30", // Secondary button text
        shade300: "#4C3D30", // Secondary button text (hover)
        shade400: "#4C3D30", // Welcome text
        shade500: "#fff9", // Modal close button
        shade600: "#C2B59B", // Border
        shade700: "#fff2", // Progress indicator background
        shade800: "#fff1", // File item background
        shade900: "#4C3D30", // Various (draggable crop buttons, etc.)
      },
    },
    showRemoveButton: true,
    onValidate: async (file: File): Promise<undefined | string> => {
      return data.remainingGenerations === 0
        ? `No more credits left. Buy more above.`
        : undefined;
    },
  };

  const themeList = [
    {
      name: 'MODERN',
      type: 'Modern',
      image: '/theme-modern.png',
    },
    {
      name: 'MINIMALIST',
      type: 'Minimalist',
      image: '/theme-minimalist.png',
    },
    {
      name: 'PROFESSIONAL',
      type: 'Professional',
      image: '/theme-professional.png',
    },
    {
      name: 'VINTAGE',
      type: 'Vintage',
      image: '/theme-vintage.png',
    },
    {
      name: 'INDUSTRIAL',
      type: 'Industrial',
      image: '/theme-industrial.png',
    },
    {
      name: 'CLASSIC',
      type: 'Neoclassic',
      image: '/theme-classic.png',
    },
  ];

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      minWidth="400px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl, theme, room }),
    });

    let response = (await res.json()) as GenerateResponseData;
    if (res.status !== 200) {
      setError(response as any);
    } else {
      mutate();
      const rooms =
        (JSON.parse(localStorage.getItem("rooms") || "[]") as string[]) || [];
      rooms.push(response.id);
      localStorage.setItem("rooms", JSON.stringify(rooms));
      setRestoredImage(response.generated);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }

  const router = useRouter();

  useEffect(() => {
    if (router.query.success === "true") {
      toast.success("Payment successful!");
    }
  }, [router.query.success]);

  return (
    <div
      className="flex mx-auto flex-col items-center justify-center min-h-screen"
    >
      <Head>
        <title>Design Snap</title>
      </Head>
      <Header
        photo={session?.user?.image || undefined}
        email={session?.user?.email || undefined}
      />
      <main className="flex flex-1 w-full flex-col justify-center text-center sm:px-12 px-4 sm:mb-0">
        {status === "authenticated" ? (
          <div className="grid grid-cols-3 gap-8 md:flex-row flex-col">
            <div className="col-span-3 lg:col-span-1 flex flex-col items-center tracking-widest">
              {data?.remainingGenerations < 1 ? (
                <div className="flex flex-col">
                  <div className="border-[2px] border-[#4C3D30] rounded-full py-2 px-16 text-[#897465] sm:text-lg text-sm font-arimo font-semibold mt-16">
                    YOU ARE OUT OF CREDITS<br/>
                    <Link
                      href="/buy-credits"
                    >
                      <span className="text-[#4C3D30] underline">BUY MORE HERE</span><br/>
                    </Link>
                    TO DESIGN YOUR ROOM.
                  </div>
                </div>
              ) : null}
              <div className={data?.remainingGenerations < 1 ? "mt-8" : "mt-16"}>
                <div className="uppercase font-semibold">
                  <div className="w-full mb-4">
                    <div className="items-center">
                      <p className="font-arimo sm:text-md text-sm">
                        STEP #1: UPLOAD A PHOTO OF YOUR ROOM
                      </p>
                    </div>
                  </div>
                  {originalPhoto
                    ? (
                      <div className="flex flex-col w-full max-w-sm mt-8 bg-[#CDC0B2] rounded-xl px-3 py-3">
                        <div className="flex justify-between mb-2 ml-1 mr-1">
                          <div className="font-arimo">ORIGINAL ROOM</div>
                          <div onClick={() => setOriginalPhoto(null)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="text-[#4C3D30] hover:text-[#F5F0EA] transition"
                            >
                              <path d="M3 6L5 6 21 6"></path>
                              <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                            </svg>
                          </div>
                        </div>
                        <img
                          src={originalPhoto}
                          className="w-full h-full rounded-lg object-fill"
                        />
                      </div>
                    )
                  : (
                    <div className="w-full relative min-w-[280px] max-w-[670px] h-[250px]">
                      <UploadDropZone />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full max-w-sm mt-6">
                <div className="items-center mb-4">
                  <p className="font-arimo font-semibold sm:text-md text-sm">
                    STEP #2: SELECT ROOM TYPE
                  </p>
                </div>
                <DropDown
                  theme={room}
                  // @ts-ignore
                  setTheme={(newRoom) => setRoom(newRoom)}
                  themes={rooms}
                />
              </div>
              <div className="w-full max-w-sm mt-6">
                <div className="items-center mb-4">
                  <p className="font-semibold font-arimo sm:text-md text-sm">
                    STEP #3: SELECT ROOM THEME (UP TO 4)
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {themeList.map((item) => (
                    <div
                      className="w-full h-full relative"
                      onClick={() => setTheme(item.type)}
                    >
                      {theme === item.type ? (
                        <div className="bg-[#99552A] rounded-md absolute top-1 right-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            className="text-white">
                            <path d="M20 6L9 17 4 12"></path>
                          </svg>
                        </div>
                      ) : null}
                      <img src={item.image} className={theme === item.type ? "border-2 border-[#99552A]" : ""} />
                      <span className="text-xs font-arimo font-semibold">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full max-w-sm mt-8 ">
                <button
                  className={`w-full rounded-full ${data?.remainingGenerations > 0 ? "border-[#99552A] bg-[#99552A]" : "border-[#FFA59F] bg-[#FFA59F]"} text-white text-md font-semibold px-8 py-3`}
                  onClick={() => {
                    if (data.remainingGenerations > 0) {
                      if (originalPhoto) {
                        generatePhoto(originalPhoto.replace("raw", "thumbnail"));
                      }
                    } else {
                      router.push('/buy-credits');
                    }
                  }}
                >
                  <p className="text-center font-arimo tracking-normal leading-[1] mt-1">
                    RENDER DESIGN<br/>
                    <span className="text-xs font-medium">
                      {data?.remainingGenerations > 0 ? (
                        <p>
                          COST 1 CREDIT |{" "}
                          {data?.remainingGenerations}{" "}
                          {data?.remainingGenerations > 1 ? "CREDITS LEFT" : "CREDIT LEFT"}
                        </p>
                      ) : (
                        <div>
                          YOUR OUT OF CREDITS, <span className="underline">BUY MORE HERE</span>
                        </div>
                      )}
                      
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-2 flex flex-col items-center">
              <h1
                className="sm:block hidden mx-auto w-full sm:max-w-[980px] max-w-[360px] font-display text-5xl font-bold font-dallas py-2 sm:mt-10 mt-4"
              >
                REDESIGN YOUR ROOM NOW
              </h1>
              <p className="sm:block hidden font-arimo font-semibold sm:text-[16px] text-xs uppercase sm:max-w-[600px] max-w-[320px] leading-[1] mt-4 tracking-widest">
                START by uploading your photo, selecting room type, Room style, and Hitting submit
              </p>
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8 max-w-[575px]"
                  role="alert"
                >
                  <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 uppercase">
                    Please try again later.
                  </div>
                  <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    {error}
                  </div>
                </div>
              )}
              {loading ? (
                <div className="max-w-[670px] h-[250px] flex justify-center items-center">
                  <div className="text-center">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#99552A]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              ) : (
                restoredImage && originalPhoto && (
                  <div className="flex flex-col">
                    <div className="sm:p-8 p-0 sm:mt-0 mt-8 place-items-center w-full grid grid-cols-1 gap-10 lg:grid-cols-1 lg:grid-rows-1">
                      <a href={restoredImage} target="_blank" rel="noreferrer">
                        <Image
                          alt="restored photo"
                          src={restoredImage}
                          className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in object-fill"
                          width={500}
                          height={400}
                          onLoadingComplete={() => setRestoredLoaded(true)}
                        />
                      </a>
                    </div>
                    <div className="grid grid-cols-2 w-full gap-4 font-arimo font-semibold mt-4">
                      <button
                        className={`rounded-full w-full ${data?.remainingGenerations > 0 ? "bg-[#99552A]" : "bg-[#897465]"} text-[#F5F5F5] lg:text-lg md:text-md text-xs sm:px-8 px-2 py-4 sm:tracking-widest tracking-normal`}
                        disabled={data?.remainingGenerations > 0 ? false : true}
                        onClick={() => {
                          if (originalPhoto) {
                            generatePhoto(originalPhoto.replace("raw", "thumbnail"));
                          }
                        }}
                      >
                        REDESIGN NEW ROOM
                      </button>
                      <button
                        className="rounded-full w-full bg-[#C2B59B] text-[#F5F5F5] lg:text-lg md:text-md text-xs sm:px-8 px-2 py-4 sm:tracking-widest tracking-normal"
                        onClick={() => {
                          downloadPhoto(
                            restoredImage!,
                            appendNewToName(photoName!)
                          );
                        }}
                      >
                        DOWNLOAD PHOTO
                      </button>
                    </div>
                  </div>
                )
              )}
              {!restoredImage && !loading && (
                <div className="flex flex-col sm:w-[402px] w-full">
                  <div className="flex sm:p-8 p-0 mt-8 justify-center items-center h-[312px] rounded-2xl bg-[#CDC0B2]">
                    <Image
                      src="/logo.png"
                      width={32}
                      height={32}
                      alt="logo image"
                    />
                  </div>
                  <p>{`${theme.charAt(0).toUpperCase() + theme.slice(1)} ${room.toLowerCase()}`}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <ResizablePanel status={status}>
            <AnimatePresence mode="wait">
              <motion.div className="flex justify-between items-center w-full flex-col mt-4">
                <div className="flex flex-col items-center space-y-6 max-w-[670px] -mt-8">
                  <h1
                    className="mx-auto sm:max-w-[400px] max-w-[360px] font-display text-center text-5xl sm:text-6xl font-bold font-dallas py-2 mt-8"
                  >
                    REDESIGN YOUR ROOM IN A SNAP
                  </h1>
                  <div className="text-sm sm:text-md">
                    <div className="sm:max-w-[520px] max-w-[400px] font-bold font-arimo sm:text-lg text-xs tracking-widest">
                      <p className="leading-[1]">
                        SIGN IN BELOW TO CREATE A FREE ACCOUNT &
                        REDESIGN YOUR ROOM TODAY
                      </p>
                      <p className="mt-3">
                        YOU WILL GET 3 DESIGNS FOR FREE
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    {/*<button
                      onClick={() => signIn("google")}
                      className="bg-[#CDC0B2] font-semibold py-3 px-6 rounded-xl flex items-center space-x-2"
                    >
                      <Image
                        src="/facebook.png"
                        width={20}
                        height={20}
                        alt="facebook's logo"
                      />
                      <span>Sign in with Facebook</span>
                    </button> */}
                    <button
                      onClick={() => signIn("google")}
                      className="bg-[#CDC0B2] font-semibold py-3 px-6 rounded-xl flex items-center space-x-2"
                    >
                      <Image
                        src="/google.png"
                        width={20}
                        height={20}
                        alt="google's logo"
                      />
                      <span>Sign in with Google</span>
                    </button>
                    {/* <button
                      onClick={() => signIn("google")}
                      className="bg-[#CDC0B2] font-semibold py-3 px-6 rounded-xl flex items-center space-x-2"
                    >
                      <Image
                        src="/apple.png"
                        width={24}
                        height={24}
                        alt="apple's logo"
                      />
                      <span>Sign in with Apple</span>
                    </button> */}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </ResizablePanel>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
