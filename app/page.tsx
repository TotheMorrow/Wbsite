import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        October the 20th of 2024.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A significant date shared by two who grant it its spirituality.
        </p>
        <p>
          There can be no limit on the joviality of this day. Rejoice! You may be touched!
          What more could man wish for? Alcohol? A driving license? That cannot be. Upon you
          we wish health and prosperity. Of course, we are{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
           Never Gonna Give You Up
          </a>
          .
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://about.me/dylanyang" target="_blank">
            Dylan Yang
          </a>
          .
        </p>
      </div>
    </section>
  );
}
