import Image from "next/image";
import ProjectsCarousel from "./ProjectsCarousel";
import IndustryCard from "./IndustryCard";
import WorldMap from "./WorldMap";
import MobileNav from "./MobileNav";

/* ─── Shared Button Component ─── */
function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.463 12.55V5.878L3.596 12.744L2.269 11.417L9.162 4.525H2.462L4.073 2.915L12.073 2.928V10.941L10.463 12.55Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Button({
  children,
  variant = "accent",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "accent" | "dark" | "ghost";
  className?: string;
}) {
  const bodyStyles = {
    accent:
      "bg-brand-accent text-black group-hover:bg-brand-primary group-hover:text-brand-accent-muted",
    dark:
      "bg-brand-primary text-brand-accent-muted group-hover:bg-brand-accent-muted group-hover:text-black",
    ghost:
      "bg-white/10 backdrop-blur-sm text-white group-hover:bg-white/20",
  };
  const circleStyles = {
    accent:
      "bg-brand-accent text-black group-hover:bg-brand-primary group-hover:text-brand-accent-muted",
    dark:
      "bg-brand-primary text-brand-accent-muted group-hover:bg-brand-accent-muted group-hover:text-black",
    ghost:
      "bg-white/10 backdrop-blur-sm text-white group-hover:bg-white/20",
  };
  return (
    <div className={`group inline-flex items-center cursor-pointer ${className}`}>
      <span
        className={`${bodyStyles[variant]} h-10 flex items-center justify-center px-4 rounded-full text-base whitespace-nowrap transition-all duration-300 ease-in-out`}
      >
        {children}
      </span>
      <span
        className={`${circleStyles[variant]} h-[38px] w-[38px] flex items-center justify-center rounded-full transition-all duration-300 ease-in-out`}
      >
        <ArrowIcon className="w-4 h-4" />
      </span>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit bg-brand-accent text-black text-sm font-mono px-3 py-1.5 tracking-wide">
      {children}
    </span>
  );
}

/* ─── Navigation ─── */
function Navigation() {
  return (
    <nav className="flex items-center justify-between w-full">
      {/* Mobile: handled by MobileNav client component */}
      <MobileNav />
      {/* Desktop: logo + nav links */}
      <div className="hidden md:flex items-center gap-8 bg-neutral-100 rounded-sm h-[60px] px-4">
        <Image src="/images/logo.svg" alt="Hydra" width={69} height={21} />
        <div className="flex items-center gap-6 text-sm font-mono uppercase tracking-wide">
          <a href="#" className="hover:opacity-70 transition">Projects</a>
          <a href="#" className="flex items-center gap-1 hover:opacity-70 transition">
            Company
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" className="mt-0.5">
              <path d="M1 1L5.5 5L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#" className="hover:opacity-70 transition">Solutions</a>
          <a href="#" className="hover:opacity-70 transition">News</a>
        </div>
      </div>
      <div className="hidden md:block">
        <Button variant="dark">Contact Us</Button>
      </div>
    </nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section data-cursor="light" className="relative h-screen flex flex-col p-4">
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.jpg" alt="Wind turbines in green field" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/[0.4]" />
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-[40px] md:text-[72px] text-white tracking-[-2px] md:tracking-[-4px] leading-[48px] md:leading-[84px] max-w-4xl">
            Sustainable Solutions<br />for a Better Future
          </h1>
          <p className="text-lg text-[#f5f5f5] max-w-xl leading-6">
            Empowering businesses and communities to thrive in a low-<br />carbon world through tailored clean energy solutions.
          </p>
          <Button variant="accent">Start a Project</Button>
        </div>
        <div className="flex items-center justify-center pb-4">
          <span className="text-white text-sm font-mono uppercase tracking-wide">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Introduction Section ─── */
function IntroductionSection() {
  return (
    <section className="px-4 2xl:px-[60px] py-40">
      <div className="max-w-[1578px] flex flex-col gap-8 pb-12">
        <Badge>INTRODUCTION</Badge>
        <h2 className="text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-1px] md:tracking-[-2px]">
          Hydra is a pioneering clean energy company that delivers innovative infrastructure solutions to power intensive industries, driving a more sustainable future for generations to come.
        </h2>
        <Button variant="dark">Learn More</Button>
      </div>
    </section>
  );
}

/* ─── Focus Areas Section ─── */
const industries = [
  { name: "Data Centers", icon: "/images/icon-datacenter.svg" },
  { name: "Cloud Infrastructure", icon: "/images/icon-cloud.svg" },
  { name: "Energy", icon: "/images/icon-energy.svg" },
  { name: "Renewables", icon: "/images/icon-renewables.svg" },
];

function FocusAreasSection() {
  return (
    <section className="px-4 2xl:px-[60px] pt-24 pb-3">
      <div className="flex flex-col gap-12">
        <h2 className="text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-2px]">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} name={industry.name} icon={industry.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Team Section ─── */
function TeamSection() {
  return (
    <section data-cursor="light" className="relative flex items-center justify-center h-[640px] p-4">
      <div className="absolute inset-0">
        <Image src="/images/team-bg.jpg" alt="Team collaborating" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-[760px] text-center">
        <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[58px] tracking-[-2px] text-white">
          Discover the Leaders Who Are Transforming the Clean Energy Landscape
        </h2>
        <Button variant="accent">Start a Project</Button>
      </div>
    </section>
  );
}

/* ─── Stats Section ─── */
function StatsSection() {
  return (
    <section className="flex flex-col md:flex-row gap-2 pt-2">
      <div className="relative bg-brand-accent overflow-hidden h-[374px] md:h-[708px] md:flex-1 flex items-center justify-center">
        <div className="absolute inset-0">
          <svg viewBox="0 0 716 708" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ellipse key={i} cx="0" cy="708" rx={80 + i * 87} ry={80 + i * 86} stroke="#122023" strokeWidth="1" strokeOpacity="0.15" fill="none" />
            ))}
          </svg>
        </div>
        <div className="relative flex items-center gap-4 md:gap-9">
          <h2 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[58px] tracking-[-2px] text-brand-primary">Our Numbers</h2>
          <span className="text-brand-primary text-3xl hidden md:inline">&#8594;</span>
          <span className="text-brand-primary text-2xl md:hidden">&#8595;</span>
        </div>
      </div>
      <div data-cursor="light" className="bg-brand-primary h-[818px] md:h-[708px] md:flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[50px] md:gap-x-[120px] md:gap-y-[70px] text-brand-accent">
          {[
            { value: "42%", label: "Carbon Reduction" },
            { value: "184+", label: "Global Projects" },
            { value: "461M", label: "Saved In Revenue" },
            { value: "23%", label: "Average Roi" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-5">
              <span className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-2px] font-medium">{stat.value}</span>
              <span className="text-base">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Recent Projects Section (client component) ─── */

/* ─── Impact Section ─── */
function ImpactSection() {
  return (
    <section className="px-4 2xl:px-[60px] pt-16 md:pt-24 pb-16 md:pb-20">
      <div className="flex flex-col items-center gap-16 md:gap-24">
        <div className="w-full max-w-[1200px] flex flex-col gap-8 self-start">
          <Badge>OUR IMPACT</Badge>
          <h2 className="text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] tracking-[-1px] md:tracking-[-2px]">
            Hydra&apos;s clean energy solutions have made a lasting impact on communities and industries across the Americas, Asia, Europe, and beyond.
          </h2>
          <Button variant="dark">Learn More</Button>
        </div>
        <WorldMap />
      </div>
    </section>
  );
}

/* ─── Contact CTA Section ─── */
function ContactCTASection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-accent">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23122023' stroke-width='1'%3E%3Cpath d='M30 20v20M20 30h20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <span className="inline-block bg-brand-primary text-brand-accent-muted text-sm font-mono px-3 py-1.5 tracking-wide">
          CONTACT
        </span>
        <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[58px] tracking-[-2px] max-w-2xl px-4 md:px-0">
          Let&apos;s Shape the Future of Clean Energy Together
        </h2>
        <Button variant="dark">Get in Touch</Button>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer data-cursor="light" className="bg-brand-primary text-brand-accent">
      <div className="px-4 md:px-6 2xl:px-[60px] pt-20 pb-2 flex flex-col gap-[110px]">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          {/* CTA Block */}
          <div className="flex flex-col gap-4">
            <p className="text-brand-accent text-[20px] md:text-[24px] leading-[28px] md:leading-[30px] tracking-[-1px]">
              Start your project today! Contact us to
              <br className="hidden md:block" />
              {" "}learn more and let&apos;s work together to
              <br className="hidden md:block" />
              {" "}achieve your goals.
            </p>
            <Button variant="accent">Start a Project</Button>
          </div>
          {/* Nav Blocks */}
          <div className="flex gap-10 md:gap-14">
            {/* Pages Block */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-[54px] items-start">
              <span className="text-sm font-mono text-brand-accent whitespace-nowrap">&#8627; Pages</span>
              <ul className="flex flex-col gap-1">
                {["Home", "Projects", "About Us", "Solutions", "Careers", "News", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link text-brand-accent text-base md:text-lg leading-6 transition-all duration-300 ease-in-out">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Block */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-[61px] items-start">
              <span className="text-sm font-mono text-brand-accent whitespace-nowrap">&#8627; Social</span>
              <ul className="flex flex-col gap-1">
                {["Instagram", "X", "Linkedin"].map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link text-brand-accent text-base md:text-lg leading-6 transition-all duration-300 ease-in-out">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
          <Image src="/images/footer-logo.svg" alt="Hydra" width={382} height={115} className="w-[250px] md:w-[382px] h-auto" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-xs md:text-sm font-mono text-brand-accent pb-1">
            <span>San Francisco: 17:28:21</span>
            <span>&copy;2025 Hydra All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main className="w-full bg-[#f5f5f5] overflow-hidden">
      <HeroSection />
      <IntroductionSection />
      <FocusAreasSection />
      <TeamSection />
      <StatsSection />
      <ProjectsCarousel />
      <ImpactSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
}
