import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="space-y-2">
      <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
        {/* be me (professional / current) */}
        <div>
          <p className="font-semibold mb-1">be me:</p>
          <div className="space-y-0.5">
            <div className="flex items-start gap-2">
              <span>&gt;</span>
              <span>
                studying cs & finance at{" "}
                <Image
                  src="/companies/waterloo.png"
                  alt="UWaterloo"
                  width={14}
                  height={14}
                  className="inline rounded-full mx-1 object-contain"
                  style={{ objectFit: "contain" }}
                />
                <span className="font-semibold">university of waterloo</span>
              </span>
            </div>

            <div className="flex items-start gap-2">
              <span>&gt;</span>
              <span>
                incoming software engineering intern at{" "}
                <Image
                  src="/companies/hubspot.png"
                  alt="HubSpot"
                  width={14}
                  height={14}
                  className="inline rounded-full mx-1 object-contain"
                  style={{ objectFit: "contain" }}
                />
                <span className="font-semibold">hubspot</span> this winter 2026
              </span>
            </div>

            <div className="flex items-start gap-2">
              <span>&gt;</span>
              <span>
                interested in infrastructure, distributed systems, and building
                products
              </span>
            </div>
          </div>
        </div>

        {/* personal stuff - its own section */}
        <div>
          <p className="font-semibold mb-1">personal stuff:</p>
          <div className="space-y-0.5">
            <p>
              &gt; i used to want to be a civil engineer, then an optometrist,
              now i&apos;m here
            </p>
            <p>
              &gt; i love playing volleyball and badminton with my friends even
              though i suck
            </p>
            <p>
              &gt; my favourite movie is definitely parasite - you should 100%
              watch it
            </p>
            <p>
              &gt; my favourite anime is naruto but the new boruto stuff sucks
            </p>
          </div>
        </div>

        <p>
          find me interesting somehow?{" "}
          <a
            href="https://calendar.app.google/QCosZGTnWDNeiCuz6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
          >
            book a chat
          </a>
          .
        </p>

        <div>
          <p className="font-semibold mb-1">been there:</p>
          <div className="space-y-0.5">
            <div className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&gt;</span>
              <span>
                worked on monitoring agent at{" "}
                <Image
                  src="/companies/kaimz.png"
                  alt="Kaimz Inc."
                  width={14}
                  height={14}
                  className="inline rounded-full mx-1 object-contain"
                  style={{ objectFit: "contain" }}
                />
                <span className="font-semibold">kaimz inc</span>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&gt;</span>
              <span>
                shipped features for sales workspace at{" "}
                <Image
                  src="/companies/hubspot.png"
                  alt="HubSpot"
                  width={14}
                  height={14}
                  className="inline rounded-full mx-1 object-contain"
                  style={{ objectFit: "contain" }}
                />
                <span className="font-semibold">hubspot</span>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&gt;</span>
              <span>
                built inhouse client onboarding portal at{" "}
                <Image
                  src="/companies/bridgewell.png"
                  alt="Bridgewell Financial"
                  width={14}
                  height={14}
                  className="inline rounded-full mx-1 object-contain"
                  style={{ objectFit: "contain" }}
                />
                <span className="font-semibold">bridgewell financial</span>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&gt;</span>
              <span>
                developed client tooling at{" "}
                <Image
                  src="/companies/weehooey.png"
                  alt="Weehooey Inc."
                  width={14}
                  height={14}
                  className="inline rounded-full mx-1 object-contain"
                  style={{ objectFit: "contain" }}
                />
                <span className="font-semibold">weehooey inc</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
