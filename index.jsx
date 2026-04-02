export default function ShopifyConversionOfferPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600">
              24-hour turnaround • Built for small Shopify stores
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Your store is getting visitors.
              <span className="block">They’re just not buying.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              I help Shopify stores fix weak product pages with simple, high-impact conversion improvements.
              No fluff. No long retainers. Just fast changes that make it easier for customers to buy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                See pricing
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Get your page reviewed
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Fast turnaround",
                "No tech jargon",
                "Built for sales",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">What I fix</p>
              <div className="mt-4 space-y-3">
                {[
                  "Weak product page structure",
                  "No urgency or buying momentum",
                  "Confusing copy that slows decisions",
                  "Low-trust layouts on mobile",
                  "Missed conversion opportunities above the fold",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-900 px-4 py-4 text-white">
                <p className="text-sm font-semibold">Best fit for:</p>
                <p className="mt-1 text-sm text-slate-200">
                  Small Shopify brands already getting traffic but struggling to convert more visitors into buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Step 1",
                text: "I review your product page and find the biggest leaks hurting conversions.",
              },
              {
                title: "Step 2",
                text: "You get a simple action plan or I fix the page for you directly.",
              },
              {
                title: "Step 3",
                text: "Your store becomes easier to trust, easier to understand, and easier to buy from.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{item.title}</p>
                <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16" id="pricing">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Simple offers</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Start small. Upgrade only if it makes sense.</h2>
          <p className="mt-4 text-lg text-slate-600">
            The goal is quick wins, not locking you into a big project.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 p-7 shadow-sm">
            <p className="text-lg font-semibold">Product Page Audit</p>
            <p className="mt-2 text-4xl font-bold">$49</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              A clear review of your page with the biggest conversion issues and what to change first.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• Fast review</li>
              <li>• Clear written feedback</li>
              <li>• Best for stores needing direction</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50">
              Book an audit
            </a>
          </div>

          <div className="rounded-[2rem] border-2 border-slate-900 bg-slate-900 p-7 text-white shadow-sm">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
              Most popular
            </div>
            <p className="mt-4 text-lg font-semibold">Audit + Fix</p>
            <p className="mt-2 text-4xl font-bold">$149</p>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              I review your product page and make the highest-impact changes for you.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-100">
              <li>• Includes audit</li>
              <li>• Copy + conversion improvements</li>
              <li>• 24-hour turnaround target</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:opacity-90">
              Get the full fix
            </a>
          </div>

          <div className="rounded-[2rem] border border-slate-200 p-7 shadow-sm">
            <p className="text-lg font-semibold">Add-On: 3 Short Videos</p>
            <p className="mt-2 text-4xl font-bold">$79</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Three simple short-form video concepts designed to help your product get clicks and attention.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• Hooks included</li>
              <li>• Fast-turnaround content ideas</li>
              <li>• Great add-on for paid traffic stores</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50">
              Add videos
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Why this works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Most stores do not need more traffic first.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                They need a product page that creates trust, clarity, and momentum. That is where quick conversion wins usually come from.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Clearer messaging",
                "Stronger buying cues",
                "Better mobile experience",
                "Faster path to checkout",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] bg-white px-5 py-4 shadow-sm ring-1 ring-slate-100">
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16" id="contact">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Get started</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Send your product page link.
                <span className="block">I’ll tell you the best next step.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                No long call needed. Just send your Shopify product page and I’ll let you know whether you need an audit, a fix, or both.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-900 shadow-sm">
              <p className="text-lg font-semibold">Message template</p>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                Hey — here’s my product page: [link]. I’d like help improving conversions. What would you recommend?
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:you@example.com?subject=Shopify%20Product%20Page%20Help"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
                >
                  Email me
                </a>
                <a
                  href="https://instagram.com/yourhandle"
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  DM on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
