import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-center ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center  ">
        <div className="font-headline text-3xl font-black mb-6">
          MIND INSTALLERS HACKATHON{" "}<span className="text-primary">4.0</span>
        </div>
        <div className="border rounded-xl z-10 text-center flex flex-col justify-center items-center p-5 gap-2">
          <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-sm bg-black">
            &copy; {new Date().getFullYear()} MIND INSTALLERS HACKATHON.  Design and Developed by Ujjwal Katiyar
          </p>
          <div className="flex gap-3">
            <Link href={'https://github.com/devxrithm'}>
              <FaGithub className="text-3xl" />
            </Link>
            <Link href={'https://x.com/devxrithm'}>
            <FaXTwitter className="text-3xl" />
            </Link>
            <Link href={'https://www.linkedin.com/in/itsukcode'}>
            <FaLinkedin className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
