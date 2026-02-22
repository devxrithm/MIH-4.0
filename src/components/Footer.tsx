import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-center ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center  ">
        <div className="font-headline text-3xl font-black mb-6">
        MIND INSTALLERS HACKATHON{" "}<span className="text-primary">4.0</span>
        </div>
        <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-sm bg-black z-10 p-5 border rounded-xl">
          &copy; {new Date().getFullYear()} MIND INSTALLERS HACKATHON. <Link href={'https://github.com/devxrithm'}> Design and Developed by Ujjwal Katiyar</Link>
        </p>
        {/* <div className="mt-8 flex gap-8 text-white/20 text-xs font-black uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
        </div> */}
      </div>
    </footer>
  );
}
