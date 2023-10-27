import Link from 'next/link'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <div className="m-0 overflow-hidden min-h-screen">
        <div className="relative h-full bg-[url('/images/sleeker.jpg')] bg-cover bg-no-repeat bg-center md:bg-left-top">
          <nav className="bg-transparent p-4">
            <div className="container mx-auto flex items-center justify-between">
              <a href="#" className="text-2xl font-semibold text-white">
                My Portfolio
              </a>

              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-blue-200 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={` items-center z-50 top-0 right-0 justify-center absolute w-full origin-top animate-open-menu grid gap-y-6 bg-black text-2xl h-4/5 md:hidden ${
                  isMenuOpen ? 'block' : 'hidden'
                }`}
              >
                <div className="mx-auto md:mx-0 space-y-16 md:space-y-0 ">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={toggleMenu}
                      className="text-white hover:text-blue-200 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-16 w-16"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <NavItem href="/" currentPath={router.pathname}>
                    Home
                  </NavItem>
                  <NavItem href="/about" currentPath={router.pathname}>
                    About
                  </NavItem>
                  <NavItem href="/contact" currentPath={router.pathname}>
                    Contact
                  </NavItem>
                </div>
              </div>
              <ul className=" space-x-4 hidden md:flex">
                <NavItem href="/" currentPath={router.pathname}>
                  Home
                </NavItem>
                <NavItem href="/about" currentPath={router.pathname}>
                  About
                </NavItem>
                <NavItem href="/contact" currentPath={router.pathname}>
                  Contact
                </NavItem>
              </ul>
            </div>
          </nav>
          <div className="h-screen"></div>
          <div className="container absolute left-20 top-1/2 mx-auto">
            <div className="font-sans text-3xl">
              <h1 className="font-bold text-white">Hi there,</h1>
              <span className="text-2xl font-semibold italic text-gray-200">
                I am Prithviraj
              </span>
            </div>
          </div>
        </div>
        <div className="z-50 blur-xl bg-fuchsia-400 inset-0 backdrop-blur-md h-0.5 w-screen"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[url('/images/sleekest.png')] gap-4 p-8">
          <Link
            href={
              'https://instagram-lite-mobile-india-public-version.vercel.app/t'
            }
          >
            <div className="max-w-sm overflow-hidden rounded-xl border-8 border-transparent shadow-lg group hover:scale-105 transition-transform">
              <img
                className="w-full"
                src={
                  'https://pbs.twimg.com/media/F6hsUnVWsAAt_Ct?format=jpg&name=small'
                }
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 group-hover:scale-105 transition-transform">
                <div className="mb-2 text-xl font-bold text-white">
                  Instagram Clone Next.js (UI only)
                </div>
                <p className="text-base text-gray-300">
                  A clone of the Insta's UI built using Next.js. Demonstrates
                  the login feature of Insta. Used tailwindcss for styling.
                </p>
              </div>
            </div>
          </Link>

          <Link href={'https://next-upgrade-135prithvi.vercel.app/'}>
            <div className="max-w-sm overflow-hidden rounded-xl border-8 border-transparent shadow-lg group hover:scale-105 transition-transform">
              <img
                className="w-full"
                src="/images/blog.png"
                alt="Blog with Next.js and Sanity CMS"
              />
              <div className="px-6 py-4 group-hover:scale-105 transition-transform">
                <div className="mb-2 text-xl font-bold text-white">
                  Blog made with Next.js & Sanity CMS
                </div>
                <p className="text-base text-gray-300">
                  A blog website built using Next.js and Sanity CMS for content
                  management. SEO friendly.
                </p>
              </div>
            </div>
          </Link>

          <Link href={'https://my-ai-supabase-hf.vercel.app/chat'}>
            <div className="max-w-sm overflow-hidden rounded-xl border-8 border-transparent shadow-lg group hover:scale-105 transition-transform">
              <img
                className="w-full"
                src="/images/chatbot.png"
                alt="Chat Bot with VectorDB and Palm 2 Model API"
              />
              <div className="px-6 py-4 group-hover:scale-105 transition-transform">
                <div className="mb-2 text-xl font-bold text-white">
                  ChatBot with Palm 2 Model API
                </div>
                <p className="text-base text-gray-300">
                  A chatbot project using VectorDB and the Palm 2 Model API for
                  AI-powered conversations.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <footer className="bg-gradient-to-tl from-[#9a58ea] via-[#8e5895] to-[#580ea7]  text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Top Dev. All rights reserved.</p>
          <p>Contact: dickinsontiwari@gmail.com</p>
        
        </div>
      </footer>
    </>
  )
}

function NavItem({ href, currentPath, children }) {
  const activeLinkClass = 'underline text-gray-200'
  const isActive = href === currentPath
  const linkClassName = isActive ? activeLinkClass : 'text-white'

  return (
    <li>
      <Link href={href} passHref>
        <span
          className={`${linkClassName} text-white hover:text-gray-300 transition-colors duration-300 ease-in-out cursor-pointer`}
        >
          {children}
        </span>
      </Link>
    </li>
  )
}
