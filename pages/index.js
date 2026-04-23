import React, { useMemo, useState } from "react";

const siteLinks = {
tools: [
{ name: "Kustomer", url: "[https://tenengroup.kustomerapp.com/](https://tenengroup.kustomerapp.com/)" },
{ name: "OM", url: "[https://bo.tenengroup.com/](https://bo.tenengroup.com/)" },
{ name: "OCS", url: "[https://bo.tenengroup.com/](https://bo.tenengroup.com/)" },
{ name: "Notch", url: "[https://tenengroup.app.getnotch.com/](https://tenengroup.app.getnotch.com/)" },
{ name: "AfterShip", url: "[https://www.aftership.com/](https://www.aftership.com/)" },
{ name: "Matrix", url: "[http://matrix.tenengroup.com:100/Login.aspx](http://matrix.tenengroup.com:100/Login.aspx)" },
{ name: "17Track", url: "[https://www.17track.net/en](https://www.17track.net/en)" },
],
brands: [
{ code: "TGR US", name: "Theo Grace US", url: "[https://www.theograce.com/](https://www.theograce.com/)" },
{ code: "TGR UK", name: "Theo Grace UK", url: "[https://www.theograce.co.uk/](https://www.theograce.co.uk/)" },
{ code: "OAL", name: "Oak & Luna", url: "[https://www.oakandluna.com/](https://www.oakandluna.com/)" },
{ code: "OAL FR", name: "Oak & Luna FR", url: "[https://www.oakandluna.com/fr](https://www.oakandluna.com/fr)" },
{ code: "IB", name: "Israel Blessing", url: "[https://www.israelblessing.com/](https://www.israelblessing.com/)" },
{ code: "LL", name: "Lime & Lou", url: "[https://www.limeandlou.com/](https://www.limeandlou.com/)" },
{ code: "MNN US", name: "MyNameNecklace US", url: "[http://us.mynamenecklace.com/](http://us.mynamenecklace.com/)" },
{ code: "IL", name: "MyNameNecklace IL", url: "[https://www.mynamenecklace.co.il](https://www.mynamenecklace.co.il)" },
{ code: "SETT", name: "Sett & Co.", url: "[https://us.settandco.com/](https://us.settandco.com/)" },
{ code: "FEM", name: "Forever My", url: "[https://www.forevermy.com/](https://www.forevermy.com/)" },
{ code: "CH", name: "MYKA CH", url: "[https://www.myka.com/ch/](https://www.myka.com/ch/)" },
{ code: "DE", name: "MYKA DE", url: "[https://www.myka.com/de/](https://www.myka.com/de/)" },
{ code: "DK", name: "MYKA DK", url: "[https://www.myka.com/dk/](https://www.myka.com/dk/)" },
{ code: "ES", name: "MYKA ES", url: "[https://www.myka.com/es/](https://www.myka.com/es/)" },
{ code: "FI", name: "MYKA FI", url: "[https://www.myka.com/fi/](https://www.myka.com/fi/)" },
{ code: "FR", name: "MYKA FR", url: "[https://www.myka.com/fr/](https://www.myka.com/fr/)" },
{ code: "IE", name: "MYKA IE", url: "[https://www.myka.com/ie/](https://www.myka.com/ie/)" },
{ code: "IT", name: "MYKA IT", url: "[https://www.myka.com/it/](https://www.myka.com/it/)" },
{ code: "MX", name: "MYKA MX", url: "[https://www.myka.com/mx/](https://www.myka.com/mx/)" },
{ code: "NL", name: "MYKA NL", url: "[https://www.myka.com/nl/](https://www.myka.com/nl/)" },
{ code: "NO", name: "MYKA NO", url: "[https://www.myka.com/no/](https://www.myka.com/no/)" },
{ code: "SE", name: "MYKA SE", url: "[https://www.myka.com/se/](https://www.myka.com/se/)" },
],
};

const brandCards = [
{
title: "Theo Grace",
subtitle: "Premium personalized products",
content:
"Elegant, emotional and family-oriented. Nicky Hilton should remain part of the brand narrative whenever relevant.",
},
{
title: "Oak & Luna",
subtitle: "Modern fashion jewelry",
content:
"Refined, trend-led and polished personalized jewelry, primarily for customers looking for a fashionable and modern feel.",
},
{
title: "Israel Blessing",
subtitle: "Jewish identity-focused products",
content:
"Culturally sensitive personalized products centered on Jewish symbolism and identity, mainly for the US market.",
},
{
title: "Lime & Lou",
subtitle: "Personalized home & lifestyle",
content:
"Warm, aesthetic and modern personalized décor and lifestyle products with its own production-facility logic.",
},
{
title: "MYKA",
subtitle: "European brand family",
content:
"Close to Theo Grace in assortment style, but without any Nicky Hilton association. Keep the positioning elegant and internationally accessible.",
},
];

const policies = [
{
id: "wismo",
title: "Shipping & WISMO",
summary: "Track, explain and resolve on-time, late, lost, DNR and supplier-related shipping cases.",
points: [
"Late under 3 business days: apologize and provide updated ETA.",
"Late above 3 business days: compensation may apply.",
"Separate logic exists for Late Supplier, Lost, DNR and Return to Sender.",
"Always rely on OM and tracking, not on generic lead times.",
],
},
{
id: "damaged",
title: "Damaged",
summary: "Warranty-driven handling of damaged or defective items.",
points: [
"2-year warranty from ETA for eligible orders.",
"Ask for a picture first if needed.",
"Reorder is the first preferred solution.",
"Refund only under specific policy conditions.",
],
},
{
id: "ns",
title: "Not Satisfied",
summary: "Customer does not like the correctly produced item.",
points: [
"Offer exchange first.",
"Then offer store credit.",
"Personalized items are not refundable under NS policy.",
"First confirm it is not actually a damaged case.",
],
},
{
id: "resizing",
title: "Resizing",
summary: "Specific rules depending on ring, chain, bracelet, stock and brand.",
points: [
"Ring resizing is free within the standard window.",
"Chains and bracelets follow separate logic.",
"Resizing is not a Not Satisfied case.",
"Apply item-specific and brand-specific rules before deciding.",
],
},
{
id: "events",
title: "Event Policies",
summary: "Peak-period operating logic for Mother’s Day, Valentine’s Day and Christmas.",
points: [
"Green Event = last day to order on time.",
"Red Event = last day to ship on time.",
"Last Day of Delivery = shipped but still at risk.",
"ETA-1, On Hold, proactive communication and compensation are part of the event playbook.",
],
},
{
id: "crm",
title: "CRM & Operations",
summary: "How Kustomer, queues, categories, dispositions, tags and Notch fit together.",
points: [
"Kustomer is the main CRM.",
"Categories are auto-filled based on webform or source.",
"Dispositions are set manually by agents.",
"Z-tags are archived. Notch is the current automation layer.",
],
},
];

const qaData = [
{
q: "My order is late by 2 business days. What should I do?",
a: "Treat it as a slight delay. Apologize, provide the most accurate updated ETA based on OM and tracking, and do not offer compensation yet unless another specific flow applies.",
category: "WISMO",
},
{
q: "My order is more than 3 business days late. What can I offer?",
a: "Follow the late flow. Compensation may apply depending on the brand and scenario. First check whether the case is actually Late Supplier before applying standard late compensation.",
category: "WISMO",
},
{
q: "My product is damaged and was delivered less than 6 months ago. What should I do?",
a: "The order is within warranty. Ask for a picture if none was sent, confirm the issue, flag it correctly in OM and offer reorder first. Refund is not the first option.",
category: "Damaged",
},
{
q: "The customer is not satisfied with a personalized item. Can I refund?",
a: "No. Under the Not Satisfied policy, personalized items are not refundable. Offer exchange first, then store credit if exchange is refused.",
category: "Not Satisfied",
},
{
q: "The customer wants resizing. Is this a Not Satisfied case?",
a: "No. Resizing is handled under its own policy. Ring resizing is free within the standard window, while chains and bracelets follow different rules.",
category: "Resizing",
},
{
q: "Tracking shows delivered but the customer says it was not received. What do I do?",
a: "Treat it as DNR. If it has been less than 3 business days since the delivery scan, ask the customer to wait. After that, offer reorder or refund according to DNR policy.",
category: "WISMO",
},
{
q: "How do I answer a pre-sales shipping question?",
a: "Never rely on one generic lead time. Check the actual site shipping options for the exact product and destination. Delivery promise depends on product, production, factory, method and destination.",
category: "Pre-sales",
},
{
q: "What are the current event reference files?",
a: "Mother’s Day 2026, Valentine’s Day 2026 and Christmas 2025. These are the current event templates for future annual updates.",
category: "Events",
},
];

const sections = [
{ id: "home", label: "Home" },
{ id: "brands", label: "Brands" },
{ id: "policies", label: "Policies" },
{ id: "events", label: "Events" },
{ id: "crm", label: "CRM" },
{ id: "ask", label: "Q&A" },
];

function Card({ children, className = "" }) {
return <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

export default function TenengroupCustomerCareHub() {
const [active, setActive] = useState("home");
const [query, setQuery] = useState("");
const [openQa, setOpenQa] = useState(0);
const [selectedPolicy, setSelectedPolicy] = useState("wismo");

const filteredQA = useMemo(() => {
if (!query.trim()) return qaData;
const q = query.toLowerCase();
return qaData.filter(
(item) =>
item.q.toLowerCase().includes(q) ||
item.a.toLowerCase().includes(q) ||
item.category.toLowerCase().includes(q)
);
}, [query]);

const currentPolicy = policies.find((p) => p.id === selectedPolicy) || policies[0];

return ( <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900"> <div className="flex min-h-screen"> <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white/85 p-6 backdrop-blur lg:block"> <div className="mb-8"> <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Tenengroup</div> <div className="mt-2 text-2xl font-semibold tracking-tight">Customer Care Hub</div> <div className="mt-2 text-sm leading-6 text-slate-500">Simple internal website for policies, operations and everyday decision support.</div> </div>

```
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActive(section.id)}
            className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
              active === section.id ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-2xl bg-slate-50 p-4">
        <div className="text-sm font-semibold text-slate-900">Quick tools</div>
        <div className="mt-3 space-y-2">
          {siteLinks.tools.slice(0, 4).map((tool) => (
            <a key={tool.name} href={tool.url} target="_blank" rel="noreferrer" className="block text-sm text-slate-600 underline underline-offset-4">
              {tool.name}
            </a>
          ))}
        </div>
      </div>
    </aside>

    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center gap-3 lg:hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActive(section.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === section.id ? "bg-slate-900 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {active === "home" && (
          <div className="space-y-6">
            <Card className="overflow-hidden p-0">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-8 sm:p-10">
                  <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                    Internal website
                  </div>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Tenengroup Customer Care Hub</h1>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                    A friendly internal website for management and support teams. Use it to move between policies, event logic, brand information,
                    CRM notes and quick Q&A scenarios.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button onClick={() => setActive("policies")} className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">
                      Browse policies
                    </button>
                    <button onClick={() => setActive("ask")} className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700">
                      Open Q&A
                    </button>
                  </div>
                </div>
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white">
                  <div className="absolute h-56 w-56 rounded-full border border-white/15" />
                  <div className="absolute h-72 w-72 rounded-full border border-white/10" />
                  <div className="absolute h-40 w-40 rounded-full border border-white/10" />
                  <div className="z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white/10 text-center backdrop-blur">
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-300">Service + AI</div>
                    <div className="mt-2 text-xl font-semibold">Customer Care</div>
                    <div className="text-sm text-slate-300">In orbit</div>
                  </div>
                  {[
                    { name: "THEO", cls: "left-5 top-6" },
                    { name: "OAL", cls: "right-8 top-8" },
                    { name: "MYKA", cls: "left-8 bottom-12" },
                    { name: "LL", cls: "right-8 bottom-12" },
                    { name: "IB", cls: "left-1/2 top-1 -translate-x-1/2" },
                    { name: "MNN", cls: "left-1/2 bottom-1 -translate-x-1/2" },
                  ].map((item) => (
                    <div key={item.name} className={`absolute ${item.cls} rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white`}>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="p-6">
                <div className="text-lg font-semibold">What is inside</div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  <li>Brand directory and links</li>
                  <li>Policy-by-policy navigation</li>
                  <li>Event strategy reference</li>
                  <li>CRM and Notch notes</li>
                  <li>Quick operational answers</li>
                </ul>
              </Card>
              <Card className="p-6">
                <div className="text-lg font-semibold">Event reference set</div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Mother’s Day 2026, Valentine’s Day 2026 and Christmas 2025 are the current event template files and should be used as the basis for future updates.
                </p>
              </Card>
              <Card className="p-6">
                <div className="text-lg font-semibold">Core taxonomy</div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Pre-sales, Change Order, WISMO, Item Received, Account Issues and Other.
                </p>
              </Card>
            </div>
          </div>
        )}

        {active === "brands" && (
          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-3xl font-semibold tracking-tight">Brands & Sites</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Use this section as a quick directory of brands, positioning and links.</p>
            </Card>
            <div className="grid gap-6 xl:grid-cols-2">
              <Card className="p-6">
                <div className="text-xl font-semibold">Brand overview</div>
                <div className="mt-5 grid gap-4">
                  {brandCards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-slate-200 p-4">
                      <div className="text-base font-semibold">{card.title}</div>
                      <div className="mt-1 text-sm font-medium text-slate-500">{card.subtitle}</div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{card.content}</p>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-xl font-semibold">All operating sites</div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {siteLinks.brands.map((site) => (
                    <a key={site.code} href={site.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50">
                      <div className="text-sm font-semibold text-slate-900">{site.code}</div>
                      <div className="text-sm text-slate-600">{site.name}</div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {active === "policies" && (
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
            <Card className="p-4">
              <div className="mb-3 px-2 text-sm font-semibold text-slate-900">Policy menu</div>
              <div className="space-y-2">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() => setSelectedPolicy(policy.id)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                      selectedPolicy === policy.id ? "bg-slate-900 text-white" : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="font-semibold">{policy.title}</div>
                    <div className={`mt-1 text-xs ${selectedPolicy === policy.id ? "text-slate-300" : "text-slate-500"}`}>{policy.summary}</div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Policy</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">{currentPolicy.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{currentPolicy.summary}</p>
              <div className="mt-6 grid gap-3">
                {currentPolicy.points.map((point) => (
                  <div key={point} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {point}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {active === "events" && (
          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-3xl font-semibold tracking-tight">Event Policies</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Tenengroup event playbooks are built around Green Event, Red Event, Last Day of Delivery, ETA-1 logic, proactive messaging,
                On Hold workflows and event-specific compensation strategy.
              </p>
            </Card>
            <div className="grid gap-6 xl:grid-cols-3">
              {[
                ["Mother’s Day 2026", "Peak-playbook for jewelry and Lime & Lou, including proactive late communication, MBL logic and event stop/start flows."],
                ["Valentine’s Day 2026", "High-volume event strategy with shipping cutoffs, Last Chance logic, proactive messaging and Thought Guaranteed handling."],
                ["Christmas 2025", "Holiday event playbook including Last Minute Pack logic, proactive event handling and peak shipping monitoring."],
              ].map(([title, desc]) => (
                <Card key={title} className="p-6">
                  <div className="text-xl font-semibold">{title}</div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{desc}</p>
                </Card>
              ))}
            </div>
            <Card className="p-6">
              <div className="text-lg font-semibold">Core event concepts</div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  ["Green Event", "Last day to order on time based on product, factory, country and method."],
                  ["Red Event", "Last day to ship on time for a specific operational combination."],
                  ["Last Day of Delivery", "Monitoring of shipped orders still at risk of arriving late."],
                  ["ETA-1", "Proactive one-day-before-ETA monitoring, paused during final event days if needed."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 p-4">
                    <div className="font-semibold text-slate-900">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {active === "crm" && (
          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-3xl font-semibold tracking-tight">CRM & Operations</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Current shared understanding of Kustomer, categories, dispositions, queues, tags and Notch based on the data provided so far.
              </p>
            </Card>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {[
                ["Kustomer", "Main CRM for conversations, queues, tags, dispositions and categories."],
                ["Categories", "Auto-filled based on webform or source used by the customer."],
                ["Dispositions", "Manual classification by agents to define the business case more precisely."],
                ["Queues", "Used either by site or by team ownership."],
                ["Tags", "Operational layer. Z-tags are archived. Tags may be manual, automatic or event-specific."],
                ["Notch", "Existing automation / AI layer used in part of the support flow and partially paused in some event scenarios."],
              ].map(([title, text]) => (
                <Card key={title} className="p-6">
                  <div className="text-xl font-semibold">{title}</div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {active === "ask" && (
          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-3xl font-semibold tracking-tight">Policy Q&A</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This is a friendly internal access point for common support questions. It is not yet a live AI search engine, but it already behaves like a practical Q&A section.
              </p>
              <div className="mt-6">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try: late by 2 days, damaged within 6 months, DNR, resizing..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300"
                />
              </div>
            </Card>

            <div className="space-y-4">
              {filteredQA.map((item, index) => (
                <Card key={item.q} className="overflow-hidden">
                  <button
                    onClick={() => setOpenQa(openQa === index ? -1 : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div>
                      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.category}</div>
                      <div className="text-lg font-semibold text-slate-900">{item.q}</div>
                    </div>
                    <div className="text-slate-400">{openQa === index ? "−" : "+"}</div>
                  </button>
                  {openQa === index && <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-7 text-slate-600">{item.a}</div>}
                </Card>
              ))}

              {filteredQA.length === 0 && (
                <Card className="p-6 text-sm text-slate-600">
                  No matching question yet. This section can be enriched over time with your real support scenarios.
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  </div>
</div>
```

);
}
