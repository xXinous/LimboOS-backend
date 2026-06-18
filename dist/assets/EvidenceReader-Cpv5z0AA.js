import{j as e}from"./index-DdMHe22y.js";import{b as c}from"./vendor-dw6Z5zUr.js";import{V as x,T as m,a as b,M as u}from"./Player-B5AiHBh1.js";import{m as f}from"./createLucideIcon-BxA1P-t7.js";import"./scanner-RBrZN1Ah.js";import"./Screw-C8ZrRsec.js";import"./profile-Cc5DgI3v.js";import"./firebase-SV3h4e5g.js";import"./animations-_--4-n34.js";import"./user-DxQFuOmL.js";import"./campaigns-CG_GaG_x.js";import"./IntelService-DQRm9UsJ.js";function h({text:r}){const p=c.useRef(null),[l,d]=c.useState(0),[n,i]=c.useState(1);c.useEffect(()=>{const t=setInterval(()=>{d(Math.random()>.7?Math.random()*4-2:0),i(Math.random()>.85?.3+Math.random()*.4:1)},100);return()=>clearInterval(t)},[]);const o=r.split(`
`);return e.jsxs("div",{ref:p,className:"relative py-4 overflow-hidden",style:{opacity:n,transition:"opacity 0.05s"},children:[e.jsx("style",{children:`
        @keyframes corrupted-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(calc(100% + 200px)); }
        }
        @keyframes corrupted-noise {
          0%, 100% { clip-path: inset(0 0 95% 0); }
          10% { clip-path: inset(40% 0 20% 0); }
          20% { clip-path: inset(10% 0 60% 0); }
          30% { clip-path: inset(80% 0 0% 0); }
          40% { clip-path: inset(5% 0 70% 0); }
          50% { clip-path: inset(50% 0 30% 0); }
          60% { clip-path: inset(20% 0 40% 0); }
          70% { clip-path: inset(70% 0 10% 0); }
          80% { clip-path: inset(30% 0 55% 0); }
          90% { clip-path: inset(60% 0 15% 0); }
        }
        @keyframes corrupted-jitter {
          0%, 100% { transform: translateX(0); }
          10% { transform: translateX(-2px); }
          20% { transform: translateX(1px); }
          30% { transform: translateX(-1px); }
          40% { transform: translateX(3px); }
          50% { transform: translateX(0); }
          60% { transform: translateX(-3px); }
          70% { transform: translateX(2px); }
          80% { transform: translateX(-1px); }
          90% { transform: translateX(1px); }
        }
        .corrupted-line {
          position: relative;
          animation: corrupted-jitter 3s step-end infinite;
          animation-delay: var(--jitter-delay);
        }
        .corrupted-glow {
          text-shadow:
            0 0 5px rgba(255, 0, 0, 0.4),
            0 0 10px rgba(255, 0, 0, 0.2),
            2px 0 2px rgba(0, 255, 255, 0.3),
            -2px 0 2px rgba(255, 0, 0, 0.3);
        }
        .corrupted-chromatic::before,
        .corrupted-chromatic::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .corrupted-chromatic::before {
          color: rgba(255, 0, 0, 0.5);
          animation: corrupted-noise 2s step-end infinite;
          left: 2px;
          z-index: -1;
        }
        .corrupted-chromatic::after {
          color: rgba(0, 255, 255, 0.5);
          animation: corrupted-noise 3s step-end infinite reverse;
          left: -2px;
          z-index: -1;
        }
      `}),e.jsx("div",{className:"absolute left-0 right-0 h-8 pointer-events-none z-10",style:{background:"linear-gradient(transparent, rgba(255, 0, 0, 0.08), rgba(0, 255, 255, 0.04), transparent)",animation:"corrupted-scan 4s linear infinite"}}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),e.jsx("div",{className:"font-mono text-xs leading-loose tracking-wider whitespace-pre-wrap break-all relative z-5",style:{transform:`translateX(${l}px)`},children:o.map((t,a)=>e.jsx("div",{className:"corrupted-line corrupted-glow",style:{"--jitter-delay":`${a*.15}s`,color:a%3===0?"#ff3333":a%3===1?"#ff6633":"#cc0000",opacity:.7+Math.random()*.3},children:e.jsx("span",{className:"corrupted-chromatic","data-text":t,children:t})},a))}),e.jsxs("div",{className:"mt-4 flex items-center gap-2 text-red-500/60 text-[9px] font-mono uppercase tracking-[0.3em] animate-pulse",children:[e.jsx("span",{children:"⚠"}),e.jsx("span",{children:"ERRO CRC — CHECKSUM INVÁLIDO — SETORES DANIFICADOS"}),e.jsx("span",{children:"⚠"})]})]})}function R({evidence:r,onClose:p}){const l=r instanceof x,d=r instanceof m,n=r instanceof b,i=r instanceof u,o=r.getFormattedLevel(),t=r.getDetails(),a=d&&r.isCorrupted(),s=l?{bg:"bg-[#0a0a0f]",text:"text-cyan-400",border:"border-cyan-400",selBg:"selection:bg-cyan-400",selText:"selection:text-[#0a0a0f]",scrollThumb:"#22d3ee"}:i?{bg:"bg-[#0f0a15]",text:"text-purple-400",border:"border-purple-400",selBg:"selection:bg-purple-400",selText:"selection:text-[#0f0a15]",scrollThumb:"#a855f7"}:n?{bg:"bg-[#0d0a00]",text:"text-amber-400",border:"border-amber-400",selBg:"selection:bg-amber-400",selText:"selection:text-[#0d0a00]",scrollThumb:"#f59e0b"}:a?{bg:"bg-[#0a0000]",text:"text-red-500",border:"border-red-500",selBg:"selection:bg-red-500",selText:"selection:text-black",scrollThumb:"#ef4444"}:{bg:"bg-[#0a0a0a]",text:"text-[#00ff00]",border:"border-[#00ff00]",selBg:"selection:bg-[#00ff00]",selText:"selection:text-[#0a0a0a]",scrollThumb:"#00ff00"};return e.jsxs(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:`absolute inset-0 z-50 flex flex-col ${s.bg} ${s.text} font-mono p-4 sm:p-6 sm:rounded-[32px] overflow-hidden`,children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none z-10",style:{background:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02))",backgroundSize:"100% 2px, 3px 100%"}}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-20",style:{background:"radial-gradient(circle, transparent 70%, rgba(0,0,0,0.3) 100%)"}}),e.jsxs("div",{className:`flex items-center justify-between border-b ${s.border}/30 pb-4 mb-4 shrink-0`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:r.getTypeIcon()}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-sm font-bold uppercase tracking-widest",children:r.title}),e.jsx("p",{className:"text-[10px] opacity-70 italic",children:l?`Categoria: ${t.category||"Intel"}`:n?`Artista: ${t.artist||"Desconhecido"}`:i?`Conquista: ${t.condition||"Sistema"}`:`Recuperado por: ${t.npc||"Desconhecido"}`})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 border rounded ${r.level>=3?`${s.border}/50 ${s.text} ${s.bg.replace("bg-","bg-")}/10`:"border-current/30 opacity-50"}`,children:o}),e.jsx("button",{onClick:p,className:`px-3 py-1 border ${s.border} hover:${s.bg} text-[10px] transition-colors uppercase font-bold`,children:"[ FECHAR_ ]"})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto pr-2 custom-scrollbar",children:[e.jsx("style",{children:`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: ${s.scrollThumb}; border-radius: 2px; }
        `}),l&&t.url?e.jsxs("div",{className:"flex flex-col items-center py-4 gap-4",children:[t.isVideo?e.jsx("video",{src:t.url,controls:!0,className:"w-full max-h-[50vh] rounded-lg border border-cyan-500/30 bg-black",playsInline:!0}):e.jsx("img",{src:t.url,alt:r.title,className:"w-full max-h-[50vh] object-contain rounded-lg border border-cyan-500/30"}),r.description&&e.jsx("div",{className:`w-full text-sm leading-relaxed whitespace-pre-wrap ${s.selBg} ${s.selText} text-cyan-300/90`,children:r.description})]}):n&&t.source?e.jsxs("div",{className:"flex flex-col items-center py-8 gap-6",children:[e.jsx("div",{className:"w-24 h-24 rounded-2xl bg-amber-400/10 border-2 border-amber-400/30 flex items-center justify-center text-5xl animate-pulse",children:"📼"}),e.jsx("div",{className:"w-full max-w-sm",children:e.jsx("audio",{src:t.source,controls:!0,className:"w-full",preload:"metadata"})}),t.duration&&e.jsxs("p",{className:"text-[10px] opacity-50 uppercase",children:["Duração: ",Math.floor(t.duration/60),":",String(t.duration%60).padStart(2,"0")]}),r.description&&e.jsx("div",{className:`w-full text-sm leading-relaxed whitespace-pre-wrap ${s.selBg} ${s.selText} opacity-80`,children:r.description})]}):i?e.jsxs("div",{className:"flex flex-col items-center py-8 gap-4 text-center",children:[e.jsx("div",{className:"text-6xl",children:t.icon||"🏆"}),e.jsx("h3",{className:"text-lg font-bold uppercase tracking-widest",children:r.title}),e.jsx("p",{className:`text-sm leading-relaxed max-w-xs opacity-80 ${s.selBg} ${s.selText}`,children:r.description}),t.hint&&e.jsxs("div",{className:"mt-4 p-3 border border-purple-400/30 rounded-lg text-[11px] opacity-60",children:[e.jsx("span",{className:"font-bold uppercase",children:"Dica: "}),t.hint]})]}):a?e.jsx(h,{text:t.body||""}):e.jsx("div",{className:`text-sm leading-relaxed whitespace-pre-wrap py-4 ${s.selBg} ${s.selText}`,children:t.body})]}),e.jsxs("div",{className:`mt-4 pt-4 border-t ${s.border}/30 text-[9px] opacity-50 flex justify-between uppercase`,children:[e.jsxs("span",{children:["Setor: ",r.metadata.chapter||"Desconhecido"]}),e.jsxs("span",{children:["Nível: ",o]}),e.jsx("span",{children:t.npc?`NPC: ${t.npc}`:"Checksum: OK"})]})]})}export{R as default};
