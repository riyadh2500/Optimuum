import Link from "next/link";

export const dynamic = "force-dynamic";

function SH({ id, e, t, s }: { id: string; e: string; t: string; s: string }) {
  return (
    <div id={id} className="scroll-mt-28 mb-8">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-2xl">{e}</span>
        <h2 className="text-2xl font-black text-gray-900">{t}</h2>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed ml-9">{s}</p>
      <div className="mt-3 ml-9 h-0.5 w-16 bg-indigo-400 rounded-full" />
    </div>
  );
}

function IC({ e, t, b, a = "border-indigo-200 bg-indigo-50" }: { e: string; t: string; b: string; a?: string }) {
  return (
    <div className={`border-2 rounded-xl p-4 ${a}`}>
      <p className="text-xl mb-1">{e}</p>
      <p className="font-bold text-gray-800 text-sm mb-1">{t}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{b}</p>
    </div>
  );
}

function ST({ n, t, b, c = "border-indigo-400" }: { n: number; t: string; b: string; c?: string }) {
  return (
    <div className={`flex gap-4 p-4 rounded-xl border-2 ${c} bg-white shadow-[0_.2rem_0_0_rgba(0,0,0,0.05)]`}>
      <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-sm ${c.replace("border-","bg-")}`}>{n}</div>
      <div>
        <p className="font-bold text-gray-800 text-sm leading-snug">{t}</p>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{b}</p>
      </div>
    </div>
  );
}

function VC({ title, sp, date, href, tags }: { title: string; sp: string[]; date: string; href: string; tags: string[] }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="block border-2 rounded-2xl p-5 bg-white hover:border-red-400 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </div>
        <span className="text-xs text-gray-400 font-medium shrink-0">{date}</span>
      </div>
      <h3 className="font-black text-gray-800 text-sm leading-snug mb-2 group-hover:text-red-600 transition-colors">{title}</h3>
      <p className="text-xs text-gray-500 mb-3">{sp.join(" · ")}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600">{tag}</span>)}
      </div>
    </a>
  );
}

export default function LearnPage() {
  return (
    <div className="space-y-20 pb-20">

      {/* HERO */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-white border-2 border-indigo-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Optimum" className="w-28 h-auto object-contain mx-auto mb-4 drop-shadow-xl" />
        <h1 className="text-4xl font-black text-indigo-700 mb-2">How Optimum Works</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed mb-6">
          From the broken networking layer of today&#39;s blockchains to RLNC, Flexnodes,
          latency economics, post-quantum security, and AI agents.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs font-bold">
          {[["#p1","The Problem"],["#p2","RLNC"],["#p3","vs Reed-Solomon"],["#p4","How It Works"],
            ["#p5","Flexnodes"],["#p6","Latency Economics"],["#p7","Validator Revenue"],
            ["#p8","Post-Quantum"],["#p9","AI Agents"],["#p10","Videos"]].map(([href,label])=>(
            <a key={href} href={href} className="px-3 py-1.5 rounded-full border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors">{label}</a>
          ))}
        </div>
      </div>

      {/* 1 - THE PROBLEM */}
      <section>
        <SH id="p1" e="⚠️" t="1 · The Problem with Blockchain Networking" s="Ethereum still uses Gossipsub — a pub-sub protocol that floods the network with duplicate packets." />
        <div className="grid sm:grid-cols-3 gap-4">
          <IC e="📡" a="border-red-200 bg-red-50" t="Redundant Transmissions" b="Each node forwards the same raw packet to multiple peers. The same data crosses the network dozens of times, burning bandwidth." />
          <IC e="⏱️" a="border-orange-200 bg-orange-50" t="~15–30 TPS Ceiling" b="Gossipsub's hop-by-hop forwarding adds latency at scale. Ethereum's effective throughput is capped by this bottleneck." />
          <IC e="🍴" a="border-red-200 bg-red-50" t="Fork Risk" b="When blocks propagate slowly, validators work on stale chain tips and produce competing blocks — wasting work and risking reorgs." />
        </div>
      </section>

      {/* 2 - RLNC */}
      <section>
        <SH id="p2" e="🔢" t="2 · What is RLNC?" s="Random Linear Network Coding — invented at MIT by Muriel Médard — turns passive relay nodes into active algebraists." />
        <div className="bg-gray-900 text-green-400 rounded-2xl p-6 font-mono text-sm leading-relaxed mb-6 overflow-x-auto">
          <p className="text-gray-500 mb-2">// Classic Gossipsub — raw duplicates</p>
          <p className="mb-4">Node A receives <span className="text-red-400">Packet P</span> → forwards <span className="text-red-400">Packet P</span> → <span className="text-red-400 font-bold">DUPLICATE ✗</span></p>
          <p className="text-gray-500 mb-2">// RLNC / Galois Gossip — coded combinations</p>
          <p className="mb-1">Node A: P1, P2 → sends <span className="text-green-400">0.7·P1 + 0.3·P2</span></p>
          <p className="mb-1">Node B: P2, P3 → sends <span className="text-green-400">0.5·P2 + 0.5·P3</span></p>
          <p>Collect k packets → <span className="text-yellow-400">Gaussian elimination</span> → <span className="text-green-300 font-bold">Original block ✓</span></p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <IC e="🔢" t="Finite Field Arithmetic" b="Coefficients are chosen from a Galois field GF(2⁸). Every coded packet is linearly independent — any k of n packets decode the full block." />
          <IC e="♾️" t="Rateless by Design" b="Any node generates new coded packets on-the-fly. You never retransmit specific lost packets — just generate another unique equation." />
          <IC e="🔁" t="Recoding Without Decoding" b="Intermediate nodes re-encode and forward coded packets without decoding the underlying data first. This is recoding — it slashes latency." />
          <IC e="📐" t="Innovative Packets" b="A packet is 'innovative' if it carries new linearly independent information. RLNC guarantees almost every packet is innovative — near-zero waste." />
        </div>
      </section>

      {/* 3 - VS REED-SOLOMON */}
      <section>
        <SH id="p3" e="⚔️" t="3 · RLNC vs Reed-Solomon" s="Reed-Solomon was designed in 1960 for DVDs. RLNC was designed for decentralized mesh networks." />
        <div className="rounded-2xl overflow-hidden border-2 mb-6">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b-2">
              <tr>
                <th className="py-3 px-4 text-sm font-bold text-gray-500">Metric</th>
                <th className="py-3 px-4 text-sm font-bold text-gray-500">No Coding</th>
                <th className="py-3 px-4 text-sm font-bold text-orange-500">Reed-Solomon</th>
                <th className="py-3 px-4 text-sm font-bold text-indigo-600">RLNC (Optimum)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              <tr><td className="py-3 px-4 text-sm font-semibold text-gray-700">Bandwidth</td><td className="py-3 px-4 text-sm text-red-500">~10,000 units</td><td className="py-3 px-4 text-sm text-orange-500">~7,000 units</td><td className="py-3 px-4 text-sm text-indigo-600 font-bold">Minimal (12x less)</td></tr>
              <tr><td className="py-3 px-4 text-sm font-semibold text-gray-700">Decode Time</td><td className="py-3 px-4 text-sm text-red-500">~7 seconds</td><td className="py-3 px-4 text-sm text-orange-500">~1.75 seconds</td><td className="py-3 px-4 text-sm text-indigo-600 font-bold">171 ms ⚡</td></tr>
              <tr><td className="py-3 px-4 text-sm font-semibold text-gray-700">Recoding</td><td className="py-3 px-4 text-sm text-red-500">No</td><td className="py-3 px-4 text-sm text-orange-500">No — decode first</td><td className="py-3 px-4 text-sm text-indigo-600 font-bold">Yes — on the fly</td></tr>
              <tr><td className="py-3 px-4 text-sm font-semibold text-gray-700">Loss compounding</td><td className="py-3 px-4 text-sm text-red-500">Severe</td><td className="py-3 px-4 text-sm text-orange-500">Compounds per hop</td><td className="py-3 px-4 text-sm text-indigo-600 font-bold">Bounded by weakest link</td></tr>
              <tr><td className="py-3 px-4 text-sm font-semibold text-gray-700">DAS security</td><td className="py-3 px-4 text-sm text-red-500">N/A</td><td className="py-3 px-4 text-sm text-orange-500">70–150 samples needed</td><td className="py-3 px-4 text-sm text-indigo-600 font-bold">Just 2 RLNC questions</td></tr>
            </tbody>
          </table>
        </div>
        <div className="p-5 rounded-xl border-2 border-amber-200 bg-amber-50">
          <p className="font-bold text-amber-800 mb-1">📖 The Exam Analogy (Muriel Médard)</p>
          <p className="text-sm text-amber-700 leading-relaxed">Fixed-rate codes are like an exam with a static question pool — a bad actor learns exactly what to withhold. RLNC creates dynamic questions no one can predict. Just 2 RLNC samples equal 70–150 fixed samples statistically.</p>
        </div>
      </section>

      {/* 4 - HOW IT WORKS */}
      <section>
        <SH id="p4" e="⚙️" t="4 · How OptimumP2P Works — Step by Step" s="OptimumP2P (Galois Gossip / mump2p) plugs into validators as a drop-in upgrade on top of libp2p GossipSub." />
        <div className="space-y-3">
          <ST n={1} t="Block producer chunks the block into k fragments" b="These fragments form a 'generation' — the unit that RLNC operates on." />
          <ST n={2} t="RLNC encoder creates coded packets" b="Each fragment is combined with random coefficients from GF(2⁸). Result: coded packets each carrying a unique linear combination." />
          <ST n={3} c="border-purple-400" t="Coded packets broadcast to peers" b="Instead of raw duplicates, each node forwards freshly-coded packets. Receiving a duplicate is virtually impossible." />
          <ST n={4} c="border-purple-400" t="Intermediate nodes recode on the fly" b="Any node re-encodes and forwards coded packets without decoding first. This slashes end-to-end latency." />
          <ST n={5} c="border-green-400" t="Receivers decode with Gaussian elimination" b="Once a node collects k linearly independent coded packets, Gaussian elimination reconstructs the full block." />
          <ST n={6} c="border-green-400" t="Block finalized faster, with 7x less variance" b="Consistent propagation times reduce fork risk. Head vote accuracy improves from 98.6% toward 99.4%." />
        </div>
      </section>

      {/* 5 - FLEXNODES */}
      <section>
        <SH id="p5" e="🔌" t="5 · Flexnodes — The Decentralized Bandwidth Marketplace" s="Permissionless participants who route coded equations and earn MOM tokens — no slashing, no minimum stake." />
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <IC e="💡" t="What is a Flexnode?" a="border-green-200 bg-green-50" b="Any participant — validator or pure bandwidth provider — that transmits encoded data equations earns MOM token rewards." />
            <IC e="🚫" t="No Slashing" a="border-green-200 bg-green-50" b="If a Flexnode goes offline, they stop earning. They are never penalized. The mesh self-heals because validators use multiple Flexnodes." />
            <IC e="⚡" t="Plug-and-Play" a="border-green-200 bg-green-50" b="New Flexnodes join at any time, instantly begin recoding and contributing. Variable resource allocation based on available bandwidth." />
          </div>
          <div className="border-2 rounded-2xl p-5 bg-gray-50 font-mono text-xs leading-relaxed">
            <p className="text-gray-400 mb-3 font-sans font-bold text-xs uppercase tracking-wider">Bandwidth Marketplace</p>
            <div className="text-center mb-2"><span className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold">Block Sender</span></div>
            <div className="text-center text-gray-400 mb-2">↓ Encoded Equations</div>
            <div className="flex justify-center gap-3 mb-2">
              {["Flexnode 1","Flexnode 2","Flexnode 3"].map(n=>(
                <span key={n} className="px-2 py-1 rounded-lg bg-green-100 border border-green-300 text-green-700 text-[10px] font-bold">{n}</span>
              ))}
            </div>
            <div className="text-center text-gray-400 mb-2">↓ Equations ↓</div>
            <div className="text-center mb-2"><span className="px-3 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold">Validator Receiver</span></div>
            <div className="text-center"><span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold">Pays MOM Tokens</span></div>
          </div>
        </div>
        <IC e="🖥️" t="The Computer Analogy" a="border-indigo-200 bg-indigo-50" b="In a traditional computer, RAM and the memory bus provide fast on-demand data access to the CPU. Optimum's Flexnode network plays the same role for blockchains — a decentralized, high-speed memory and routing layer any chain can plug into." />
      </section>

      {/* 6 - LATENCY ECONOMICS */}
      <section>
        <SH id="p6" e="💰" t="6 · Latency Economics — Speed is Money" s="Blockchain slots create hard cliff deadlines. One millisecond late = zero reward. RLNC reduces variance 7x." />
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="border-2 rounded-2xl p-5 bg-white space-y-3">
            <h3 className="font-black text-gray-800">The Cliff Problem</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Ethereum has fixed <strong>12-second slots</strong>. Arrive 1ms before → full reward. Arrive 1ms after → <strong className="text-red-500">zero</strong>. Blockchain latency is binary, not a gradient.</p>
            <div className="flex gap-3">
              <div className="flex-1 p-3 rounded-xl bg-green-50 border-2 border-green-200 text-center">
                <p className="text-xs font-bold text-green-700">Before Deadline</p>
                <p className="text-lg font-black text-green-600">Full Reward ✓</p>
              </div>
              <div className="flex-1 p-3 rounded-xl bg-red-50 border-2 border-red-200 text-center">
                <p className="text-xs font-bold text-red-700">After Deadline</p>
                <p className="text-lg font-black text-red-500">Zero ✗</p>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-2xl p-5 bg-white space-y-3">
            <h3 className="font-black text-gray-800">Why Variance Matters More Than Speed</h3>
            <p className="text-sm text-gray-600 leading-relaxed">RLNC delivers <strong>7x less variance</strong>. High variance forces validators to hedge — overpaying gas, shrinking blocks. Low variance lets everyone bid on true economic value.</p>
            <div className="p-3 rounded-xl bg-indigo-50 border-2 border-indigo-200">
              <p className="text-xs font-bold text-indigo-700 mb-1">The Turbo Fast Lane</p>
              <p className="text-xs text-indigo-600">RLNC overlays a premium fast lane on existing infrastructure — no migration needed, just additive speed.</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-4 gap-3">
          {[["4","Payload Models","Unsharded · Sharded · RS · RLNC"],["7×","Variance Reduction","Less variance with RLNC"],["EIP-4844","Blob Friction Solved","RLNC fast lane fixes blob exclusion"],["Priced Lanes","Spam Mitigation","Cost differential kills spam strategies"]].map(([v,l,d])=>(
            <div key={l} className="border-2 rounded-xl p-4 bg-white text-center">
              <p className="text-2xl font-black text-indigo-600">{v}</p>
              <p className="text-xs font-bold text-gray-700 mt-0.5">{l}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 - VALIDATOR REVENUE */}
      <section>
        <SH id="p7" e="Ξ" t="7 · Validator Revenue — The $400K Story" s="Optimum tracked 1/3 of all active Ethereum stake. Every 50ms saved is worth ~1% more APR." />
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="border-2 rounded-2xl p-5 bg-white"><p className="text-3xl font-black text-indigo-600 mb-1">1–2%</p><p className="font-bold text-gray-800 text-sm">APR boost</p><p className="text-xs text-gray-500 mt-1">Per 100–150ms saved via MP2P</p></div>
          <div className="border-2 rounded-2xl p-5 bg-white"><p className="text-3xl font-black text-amber-500 mb-1">$400K</p><p className="font-bold text-gray-800 text-sm">Uncaptured MEV</p><p className="text-xs text-gray-500 mt-1">Unlocked by holding bids 50ms longer</p></div>
          <div className="border-2 rounded-2xl p-5 bg-white"><p className="text-3xl font-black text-green-600 mb-1">2,000 ETH</p><p className="font-bold text-gray-800 text-sm">Annual waste</p><p className="text-xs text-gray-500 mt-1">Lost from missed head votes network-wide</p></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <IC e="🗳️" t="Head Vote Problem (98.6% → 99.4%)" b="Saving 100–150ms halves the gap to the 99.4% ceiling, saving 1,000–2,000 ETH annually network-wide." />
          <IC e="🏗️" t="Proposer's Dilemma (4-second deadline)" b="Faster propagation = more usable slot time = ability to wait for MEV bids up to 20× more valuable." />
        </div>
        <div className="p-4 rounded-xl border-2 border-teal-200 bg-teal-50">
          <p className="font-bold text-teal-800 mb-2">📊 Data Sources Used by Optimum</p>
          <div className="grid sm:grid-cols-3 gap-3 text-xs text-teal-700">
            <div><strong>Xatu</strong> — EthPandaOps: exact block arrival timestamps globally</div>
            <div><strong>Rated API</strong> — Historical staking rewards and APR across validators</div>
            <div><strong>Relay Bid Traces</strong> — Full week of PBS relay data for block value trends</div>
          </div>
        </div>
      </section>

      {/* 8 - POST-QUANTUM */}
      <section>
        <SH id="p8" e="🔐" t="8 · Post-Quantum Security with RLNC" s="The HUNK protocol uses RLNC's algebraic mixing to slash PQC overhead by up to 99% — without sacrificing security." />
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <IC e="⚛️" t="Quantum Error Correction (QEC)" a="border-purple-200 bg-purple-50" b="QEC maps one logical qubit across many physical qubits using error control codes (including RLNC) to protect against decoherence." />
            <IC e="🔑" t="The McEliece Problem (1978)" a="border-purple-200 bg-purple-50" b="McEliece is quantum-safe (NP-hard syndrome decoding). But public keys can exceed megabytes — a nightmare for low-latency routing." />
          </div>
          <div className="border-2 rounded-2xl p-5 bg-gray-900 text-green-400 font-mono text-xs leading-relaxed">
            <p className="text-gray-500 mb-2 font-sans text-[10px] uppercase tracking-widest">HUNK Protocol</p>
            <p className="mb-1">Raw Data: <span className="text-white">[X, Y, Z]</span></p>
            <p className="text-gray-500 mb-2">↓ RLNC encodes into 3 equations</p>
            <p className="mb-1">Eq 1: <span className="text-green-400">3x+2y+z</span> → <span className="text-blue-400">unencrypted (fast)</span></p>
            <p className="mb-1">Eq 2: <span className="text-green-400">7x+y+11z</span> → <span className="text-blue-400">unencrypted (fast)</span></p>
            <p className="mb-3">Eq 3: <span className="text-green-400">8x+5y+19z</span> → <span className="text-yellow-400">McEliece encrypted ✓</span></p>
            <p className="text-gray-500 mb-1">Attacker gets Eq 1 + Eq 2:</p>
            <p className="text-red-400">3 unknowns, 2 equations → infinite solutions</p>
            <p className="text-green-300 font-bold mt-1">Zero information leaked ✓</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[["66–99%","Overhead Reduction","Encrypt only 1 in 3–100 equations"],["NP-Hard","McEliece Security","Immune to Shor's algorithm"],["2-in-1","RLNC Role","Builds QEC AND defends against quantum"]].map(([v,l,d])=>(
            <div key={l} className="border-2 rounded-xl p-4 bg-white text-center">
              <p className="text-xl font-black text-purple-600">{v}</p>
              <p className="text-xs font-bold text-gray-800 mt-0.5">{l}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 - AI AGENTS */}
      <section>
        <SH id="p9" e="🤖" t="9 · AI Agents & Web3 Infrastructure" s="Autonomous agents are becoming the primary end-users of blockchains. High-performance infrastructure is the prerequisite." />
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <IC e="🏦" t="Why Traditional Finance Fails AI Agents" a="border-gray-200 bg-gray-50" b="APIs, credit cards, and KYC are designed for humans. Blockchains give agents identity, capital, and immediate settlement natively." />
            <IC e="🎯" t="Intent-Based Execution" a="border-indigo-200 bg-indigo-50" b="Agent expresses: 'Secure 5% yield with low risk.' Protocols handle gas, routing, and bridging automatically." />
          </div>
          <div className="border-2 rounded-2xl p-5 bg-white">
            <h3 className="font-black text-gray-800 mb-4 text-sm">Architecture Shift</h3>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 rounded-lg bg-gray-100 border">
                <p className="text-gray-500 font-sans text-[10px] uppercase mb-1">Traditional Web3</p>
                <p className="text-gray-700">Human → UI → Wallet → RPC → Chain</p>
              </div>
              <div className="flex justify-center text-gray-400 text-lg">↓</div>
              <div className="p-2 rounded-lg bg-indigo-50 border-2 border-indigo-200">
                <p className="text-indigo-500 font-sans text-[10px] uppercase mb-1">Agentic Web3</p>
                <p className="text-indigo-700">Objective → AI Solver → Intent Protocol → Settlement</p>
              </div>
            </div>
          </div>
        </div>
        <IC e="⚡" t="Why Optimum is Critical for Agentic Web3" a="border-amber-200 bg-amber-50" b="AI agents execute millions of autonomous transactions per second. Slow P2P propagation becomes the critical bottleneck. Flexnodes provide the dynamic, scalable bandwidth infrastructure agents need to operate at machine speed." />
      </section>

      {/* 10 - VIDEOS */}
      <section>
        <SH id="p10" e="🎬" t="10 · Optimum Video Library" s="Deep dives, research presentations, and product explainers from the Optimum team on YouTube." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <VC title="Speed is Money: Pricing Innovation Under Latency Constraints" sp={["Muriel Médard","Tarun Chitra","Moritz","Sajida"]} date="Jun 2, 2026" href="https://www.youtube.com/@getoptimum" tags={["Latency Economics","MEV","RLNC","Cliff Deadlines"]} />
          <VC title="Optimizing a Hundred Billion Dollar Market: ETH Staking Revenue" sp={["Moritz","Sajida (CPO)"]} date="2025" href="https://www.youtube.com/@getoptimum" tags={["Validator Revenue","MP2P","Head Votes","PBS"]} />
          <VC title="Protocol Simulation: RLNC vs Reed-Solomon vs Baseline" sp={["Muriel Médard"]} date="2025" href="https://www.youtube.com/@getoptimum" tags={["RLNC","Reed-Solomon","171ms","Simulation"]} />
          <VC title="Why RLNC Beats Reed-Solomon in Decentralized Networks" sp={["Muriel Médard","Moritz Grundner (TU Munich)"]} date="2025" href="https://www.youtube.com/@getoptimum" tags={["RLNC","Coding Theory","DAS","Recoding"]} />
          <VC title="AI Agents & Decentralized Infrastructure" sp={["Sajida Zouarhi (CPO)","Oisín Kyne (Obol CTO)"]} date="2025" href="https://www.youtube.com/@getoptimum" tags={["AI Agents","Flexnodes","Intent-Based","Obol"]} />
          <VC title="Exploring Network Topologies: Flexnodes & Slashing" sp={["Optimum Team"]} date="2025" href="https://www.youtube.com/@getoptimum" tags={["Flexnodes","No Slashing","Mesh","MOM Tokens"]} />
        </div>
      </section>

      {/* YOUTUBE CTA */}
      <section>
        <div className="flex flex-col sm:flex-row gap-6 items-stretch">
          <a href="https://www.youtube.com/@getoptimum" target="_blank" rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-4 border-2 border-red-200 rounded-2xl p-10 bg-gradient-to-br from-red-50 to-white hover:border-red-500 hover:shadow-xl transition-all group">
            <svg viewBox="0 0 90 63" className="w-24 h-16 group-hover:scale-110 transition-transform">
              <rect width="90" height="63" rx="13" fill="#FF0000"/>
              <polygon points="36,14 36,49 64,31.5" fill="white"/>
            </svg>
            <div className="text-center">
              <p className="text-2xl font-black text-gray-800">@getoptimum</p>
              <p className="text-sm text-gray-500 mt-1">Official Optimum YouTube Channel</p>
            </div>
            <span className="px-8 py-3 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition-colors">Watch Now →</span>
          </a>
          <div className="flex-1 border-2 rounded-2xl p-6 bg-white space-y-3">
            <h3 className="font-black text-gray-800 text-lg">What&#39;s on the channel</h3>
            {[["🎓","RLNC explained by MIT Professor Muriel Médard"],["⚙️","OptimumP2P technical deep-dives"],["📊","Live simulation: RLNC vs Reed-Solomon vs Baseline"],["💰","Validator revenue research — $400K uncaptured MEV story"],["🔐","Post-quantum security and the HUNK protocol whiteboard"],["🤖","AI agents + Ethereum infrastructure (ft. Obol)"],["🔌","Flexnode topology explainers and slashing elimination"]].map(([e,t])=>(
              <div key={t} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-xl leading-none">{e}</span>
                <span className="leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ CTA */}
      <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
        <h2 className="text-2xl font-black text-indigo-700 mb-2">Ready to test your knowledge?</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">13 quiz categories covering everything on this page — from RLNC basics to post-quantum security.</p>
        <Link href="/" className="inline-block px-10 py-3 bg-indigo-600 text-white font-bold text-lg rounded-xl hover:bg-indigo-700 transition-colors shadow-[0_.3rem_0_0_rgba(99,102,241,0.4)]">
          Take a Quiz →
        </Link>
      </div>

    </div>
  );
}
