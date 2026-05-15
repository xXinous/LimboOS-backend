import{j as e}from"./index-Rpcb4imb.js";import{b as p}from"./vendor-BfVu51kf.js";import{A as b}from"./intel-DmsktxMk.js";import{m as u}from"./createLucideIcon-BO5c-UVE.js";function x(t){return/[\u0300-\u036f\u0489]/.test(t)}function f({text:t}){const i=p.useRef(null),[r,d]=p.useState(0),[o,n]=p.useState(1);p.useEffect(()=>{const s=setInterval(()=>{d(Math.random()>.7?Math.random()*4-2:0),n(Math.random()>.85?.3+Math.random()*.4:1)},100);return()=>clearInterval(s)},[]);const c=t.split(`
`);return e.jsxs("div",{ref:i,className:"relative py-4 overflow-hidden",style:{opacity:o,transition:"opacity 0.05s"},children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"absolute left-0 right-0 h-8 pointer-events-none z-10",style:{background:"linear-gradient(transparent, rgba(255, 0, 0, 0.08), rgba(0, 255, 255, 0.04), transparent)",animation:"corrupted-scan 4s linear infinite"}}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),e.jsx("div",{className:"font-mono text-xs leading-loose tracking-wider whitespace-pre-wrap break-all relative z-5",style:{transform:`translateX(${r}px)`},children:c.map((s,l)=>e.jsx("div",{className:"corrupted-line corrupted-glow",style:{"--jitter-delay":`${l*.15}s`,color:l%3===0?"#ff3333":l%3===1?"#ff6633":"#cc0000",opacity:.7+Math.random()*.3},children:e.jsx("span",{className:"corrupted-chromatic","data-text":s,children:s})},l))}),e.jsxs("div",{className:"mt-4 flex items-center gap-2 text-red-500/60 text-[9px] font-mono uppercase tracking-[0.3em] animate-pulse",children:[e.jsx("span",{children:"⚠"}),e.jsx("span",{children:"ERRO CRC — CHECKSUM INVÁLIDO — SETORES DANIFICADOS"}),e.jsx("span",{children:"⚠"})]})]})}function N({evidence:t,onClose:i}){const r=t.type==="VISUAL",d=t.type==="TEXT",o=t.type==="AUDIO",n=t.type==="META",c=b[t.level],s=r&&t.mediaUrl&&/\.(mp4|webm|ogg|mov)$/i.test(t.mediaUrl),l=d&&x(t.textContent||t.description||""),a=r?{bg:"bg-[#0a0a0f]",text:"text-cyan-400",border:"border-cyan-400",selBg:"selection:bg-cyan-400",selText:"selection:text-[#0a0a0f]",scrollThumb:"#22d3ee"}:n?{bg:"bg-[#0f0a15]",text:"text-purple-400",border:"border-purple-400",selBg:"selection:bg-purple-400",selText:"selection:text-[#0f0a15]",scrollThumb:"#a855f7"}:o?{bg:"bg-[#0d0a00]",text:"text-amber-400",border:"border-amber-400",selBg:"selection:bg-amber-400",selText:"selection:text-[#0d0a00]",scrollThumb:"#f59e0b"}:l?{bg:"bg-[#0a0000]",text:"text-red-500",border:"border-red-500",selBg:"selection:bg-red-500",selText:"selection:text-black",scrollThumb:"#ef4444"}:{bg:"bg-[#0a0a0a]",text:"text-[#00ff00]",border:"border-[#00ff00]",selBg:"selection:bg-[#00ff00]",selText:"selection:text-[#0a0a0a]",scrollThumb:"#00ff00"},m={AUDIO:"📼",VISUAL:"📷",TEXT:"💾",META:"🏆"};return e.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:`absolute inset-0 z-50 flex flex-col ${a.bg} ${a.text} font-mono p-4 sm:p-6 sm:rounded-[32px] overflow-hidden`,children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none z-10",style:{background:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02))",backgroundSize:"100% 2px, 3px 100%"}}),e.jsx("div",{className:"absolute inset-0 pointer-events-none z-20",style:{background:"radial-gradient(circle, transparent 70%, rgba(0,0,0,0.3) 100%)"}}),e.jsxs("div",{className:`flex items-center justify-between border-b ${a.border}/30 pb-4 mb-4 shrink-0`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:m[t.type]||"📄"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-sm font-bold uppercase tracking-widest",children:t.title}),e.jsx("p",{className:"text-[10px] opacity-70 italic",children:r?`Categoria: ${t.metadata?.visualCategory||"Intel"}`:o?`Artista: ${t.metadata?.artist||"Desconhecido"}`:n?`Conquista: ${t.metadata?.unlockCondition||"Sistema"}`:`Recuperado por: ${t.metadata?.artist||"Desconhecido"}`})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:`text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 border rounded ${t.level>=3?`${a.border}/50 ${a.text} ${a.bg.replace("bg-","bg-")}/10`:"border-current/30 opacity-50"}`,children:c}),e.jsx("button",{onClick:i,className:`px-3 py-1 border ${a.border} hover:${a.bg} text-[10px] transition-colors uppercase font-bold`,children:"[ FECHAR_ ]"})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto pr-2 custom-scrollbar",children:[e.jsx("style",{children:`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: ${a.scrollThumb}; border-radius: 2px; }
        `}),r&&(t.mediaUrl||t.metadata?.imageUrl)?e.jsxs("div",{className:"flex flex-col items-center py-4 gap-4",children:[s?e.jsx("video",{src:t.mediaUrl,controls:!0,className:"w-full max-h-[50vh] rounded-lg border border-cyan-500/30 bg-black",playsInline:!0}):e.jsx("img",{src:t.mediaUrl||t.metadata?.imageUrl,alt:t.title,className:"w-full max-h-[50vh] object-contain rounded-lg border border-cyan-500/30"}),t.description&&e.jsx("div",{className:`w-full text-sm leading-relaxed whitespace-pre-wrap ${a.selBg} ${a.selText} text-cyan-300/90`,children:t.description})]}):o&&t.mediaUrl?e.jsxs("div",{className:"flex flex-col items-center py-8 gap-6",children:[e.jsx("div",{className:"w-24 h-24 rounded-2xl bg-amber-400/10 border-2 border-amber-400/30 flex items-center justify-center text-5xl animate-pulse",children:"📼"}),e.jsx("div",{className:"w-full max-w-sm",children:e.jsx("audio",{src:t.mediaUrl,controls:!0,className:"w-full",preload:"metadata"})}),t.metadata?.duration&&e.jsxs("p",{className:"text-[10px] opacity-50 uppercase",children:["Duração: ",Math.floor(t.metadata.duration/60),":",String(t.metadata.duration%60).padStart(2,"0")]}),t.description&&e.jsx("div",{className:`w-full text-sm leading-relaxed whitespace-pre-wrap ${a.selBg} ${a.selText} opacity-80`,children:t.description})]}):n?e.jsxs("div",{className:"flex flex-col items-center py-8 gap-4 text-center",children:[e.jsx("div",{className:"text-6xl",children:t.metadata?.icon||"🏆"}),e.jsx("h3",{className:"text-lg font-bold uppercase tracking-widest",children:t.title}),e.jsx("p",{className:`text-sm leading-relaxed max-w-xs opacity-80 ${a.selBg} ${a.selText}`,children:t.description}),t.metadata?.hint&&e.jsxs("div",{className:"mt-4 p-3 border border-purple-400/30 rounded-lg text-[11px] opacity-60",children:[e.jsx("span",{className:"font-bold uppercase",children:"Dica: "}),t.metadata.hint]})]}):x(t.textContent||t.description||"")?e.jsx(f,{text:t.textContent||t.description||""}):e.jsx("div",{className:`text-sm leading-relaxed whitespace-pre-wrap py-4 ${a.selBg} ${a.selText}`,children:t.textContent||t.description})]}),e.jsxs("div",{className:`mt-4 pt-4 border-t ${a.border}/30 text-[9px] opacity-50 flex justify-between uppercase`,children:[e.jsxs("span",{children:["Setor: ",t.metadata?.chapter||"Desconhecido"]}),e.jsxs("span",{children:["Nível: ",c]}),e.jsx("span",{children:t.metadata?.npc?`NPC: ${t.metadata.npc}`:"Checksum: OK"})]})]})}export{N as default};
