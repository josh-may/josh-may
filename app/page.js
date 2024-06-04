import Image from "next/image";
import Head from "next/head";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Josh May",
    url: "https://www.joshmay.xyz",
    image: "https://www.joshmay.xyz/profile.jpg",
    sameAs: [
      "https://x.com/josh_m_may",
      "https://www.linkedin.com/in/joshuammay/",
      "https://www.sub.joshmay.xyz/s/pics",
      "https://github.com/josh-may",
    ],
    jobTitle: "Builder",
    worksFor: {
      "@type": "Organization",
      name: "BigCommerce",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#FFF8EE] text-black  ">
      <Head>
        <title>Josh May</title>
        <meta name="description" content="Josh May's personal website." />
        <meta name="author" content="Josh May" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center rounded-md mb-32  md:w-[500px]">
        <div className="mt-16 space-y-2 pb-1 md:space-y-5">
          <div className="mb-0 flex items-center ">
            <Image
              src="/profile.jpg"
              alt="avatar"
              width={320}
              height={320}
              className="h-40 w-40 rounded-full border border-black"
            />
          </div>
        </div>

        <h1 className="line m-0 mt-[18px] mb-[20px]	text-center text-4xl font-bold leading-6">
          Josh May
        </h1>

        <div className="mt-2 mb-3 flex space-x-4">
          <a
            href="https://x.com/josh_m_may"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-2xl text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/joshuammay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-[#0077B5]" />
          </a>
          <a
            href="https://www.sub.joshmay.xyz/s/pics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-[#E1306C]" />
          </a>
        </div>
        <p className="w-[85%] text-lg leading-7  md:w-[90%]">
          I'm an SEO at BigCommerce in Austin, TX. In my free time I like to
          work on fun projects, see live music, and drink beer.
        </p>
        <div className="mb-32 mt-3.5 flex w-[90%] flex-col items-center justify-center ">
          <a
            href="https://www.sub.joshmay.xyz/p/projects"
            className="m-[0.5rem] w-[98%] rounded-md border border-[#404040] bg-[#FFF8EE] p-[.8rem] text-center no-underline transition-shadow hover:bg-[#FFE8D4] "
          >
            <h2 className="text-xl text-black">🔨 Projects</h2>
          </a>
          <a
            href="https://www.sub.joshmay.xyz/s/blog"
            className="m-[0.5rem] w-[98%] rounded-md border border-[#404040] bg-[#FFF8EE] p-[.8rem] text-center no-underline transition-shadow hover:bg-[#FFE8D4]"
          >
            <h2 className="text-xl text-black">📚 Blogs</h2>
          </a>
          <a
            href="https://www.sub.joshmay.xyz/s/notes"
            className="m-[0.5rem] w-[98%] rounded-md border border-[#404040] bg-[#FFF8EE] p-[.8rem] text-center no-underline transition-shadow   hover:bg-[#FFE8D4] "
          >
            <h2 className="text-xl text-black">📓 Notes</h2>
          </a>
          <a
            href="https://github.com/josh-may"
            className="m-[0.5rem] w-[98%] rounded-md border  border-[#404040] bg-[#FFF8EE] p-[.8rem] text-center no-underline transition-shadow   hover:bg-[#FFE8D4] "
          >
            <h2 className="text-xl text-black">👾 GitHub</h2>
          </a>{" "}
          <a
            href="mailto:me@joshmay.xyz"
            className="m-[0.5rem] w-[98%] rounded-md border  border-[#404040] bg-[#FFF8EE] p-[.8rem] text-center no-underline transition-shadow   hover:bg-[#FFE8D4] "
          >
            <h2 className="text-xl text-black">📬 Contact</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
