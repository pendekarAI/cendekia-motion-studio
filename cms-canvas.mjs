// Cendekia Motion Studio — paket untuk Gemini Canvas. Dimuat oleh pemuat kecil di Canvas.
window.CMS_VERSION = "1.0.1"; console.info("Cendekia Motion Studio " + window.CMS_VERSION);
window.__CMS_CANVAS = window.__CMS_CANVAS ?? true;
{ const l = document.createElement("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Anton&family=Bebas+Neue&family=Poppins:wght@500;600;700;800&family=Montserrat:wght@600;700;800;900&family=Playfair+Display:wght@700;800&family=DM+Serif+Display&family=Space+Grotesk:wght@500;600;700&family=Caveat:wght@600;700&family=Righteous&family=JetBrains+Mono:wght@500;700&family=Oswald:wght@500;700&family=Archivo+Black&family=Fraunces:wght@600;800&family=Pacifico&family=Unbounded:wght@600;800&family=Cinzel:wght@600;800&family=Press+Start+2P&family=Permanent+Marker&family=Lora:wght@600;700&family=Sora:wght@500;600;700&display=swap"; document.head.appendChild(l);
  const st = document.createElement("style"); st.textContent = ":root{\n  --desk:#E6ECF1; --paper:#FFFFFF; --paper2:#F5F8FA; --ink:#0E2433; --ink2:#3B5368; --mute:#6B8296;\n  --line:#D3DDE5; --line2:#B9C8D4; --brand:#1E81B0; --deep:#105E82; --sky:#56B4E9; --signal:#F2A900;\n  --monitor:#0B1D29; --monitor2:#11283A; --danger:#C2412D; --ok:#1F9D6B; --focus:#1E81B0;\n  --r-panel:14px; --r-ctl:8px;\n  color-scheme:light;\n}\n:root[data-theme=\"dark\"]{\n  --desk:#0C171F; --paper:#122230; --paper2:#0F1D29; --ink:#E5EDF3; --ink2:#B4C5D3; --mute:#7F98AC;\n  --line:#21374A; --line2:#2E4A61; --brand:#3A9ED0; --deep:#56B4E9; --sky:#7CC6EE; --monitor:#050D13; --monitor2:#0B1A25;\n  color-scheme:dark;\n}\n*{box-sizing:border-box}\nhtml,body{margin:0;min-height:100%;background:var(--desk);color:var(--ink);font:14px/1.5 \"Plus Jakarta Sans\",system-ui,sans-serif;-webkit-font-smoothing:antialiased}\nbutton,input,select,textarea{font:inherit;color:inherit}\nbutton{cursor:pointer}\n[hidden]{display:none!important}\na{color:var(--brand)}\n:focus-visible{outline:2px solid var(--focus);outline-offset:2px}\n.mono{font-family:\"JetBrains Mono\",ui-monospace,monospace}\n.muted{color:var(--mute)}\n.small{font-size:12.5px}\n.grow{flex:1}\n.row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}\n.stack{display:grid;gap:8px}\n.g2{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\n.span{grid-column:1/-1}\n\n/* controls */\n.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--line2);background:var(--paper);color:var(--ink);border-radius:var(--r-ctl);padding:8px 14px;font-weight:650;font-size:13.5px;text-decoration:none;transition:background .12s,border-color .12s}\n.btn:hover{border-color:var(--brand)}\n.btn.main{background:var(--deep);border-color:var(--deep);color:#fff}\n.btn.main:hover{background:var(--brand);border-color:var(--brand)}\n.btn.ghost{background:transparent;border-color:transparent}\n.btn.ghost:hover{background:var(--paper2);border-color:var(--line)}\n.btn.sm{padding:5px 10px;font-size:12.5px}\n.btn.xs{padding:3px 8px;font-size:12px;border-radius:6px}\n.btn.wide{width:100%}\n.btn.warn{color:var(--danger)}\n.btn:disabled{opacity:.45;cursor:not-allowed}\nlabel.f{display:block;font-size:12.5px;font-weight:650;color:var(--ink2);margin:0 0 4px}\ninput[type=text],input[type=password],input[type=number],input[type=url],select,textarea{width:100%;background:var(--paper);border:1px solid var(--line2);border-radius:var(--r-ctl);padding:7px 10px;outline:none;font-size:13.5px}\ninput:focus,select:focus,textarea:focus{border-color:var(--brand);box-shadow:0 0 0 3px rgba(30,129,176,.15)}\ntextarea{resize:vertical;min-height:62px;line-height:1.45}\ninput[type=range]{width:100%;accent-color:var(--brand)}\ninput[type=color]{width:34px;height:30px;border:1px solid var(--line2);border-radius:6px;padding:1px;background:var(--paper)}\n.check{display:flex;gap:8px;align-items:flex-start;font-size:13px;color:var(--ink2);cursor:pointer}\n.check input{accent-color:var(--brand);width:16px;height:16px;margin-top:2px;flex:none}\n.hint{font-size:12px;color:var(--mute);margin:4px 0 0}\n.err{color:var(--danger)}\n.seg{display:inline-flex;border:1px solid var(--line2);border-radius:var(--r-ctl);overflow:hidden;background:var(--paper)}\n.seg button{border:0;background:none;padding:6px 11px;font-size:12.5px;font-weight:650;color:var(--ink2)}\n.seg button+button{border-left:1px solid var(--line)}\n.seg button.on{background:var(--ink);color:var(--paper)}\n\n/* top bar */\n.bar{height:54px;display:flex;align-items:center;gap:12px;padding:0 14px;background:var(--paper);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:30}\n.mark{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:-.01em;white-space:nowrap}\n.mark svg{width:38px;height:22px}\n.bar .proj{min-width:0;flex:1;display:flex;align-items:center;gap:8px}\n.bar .proj input{max-width:280px;border-color:transparent;background:transparent;font-weight:650}\n.bar .proj input:hover{border-color:var(--line)}\n.pill{display:inline-flex;align-items:center;gap:6px;border-radius:99px;padding:3px 10px;font-size:12px;font-weight:650;background:var(--paper2);border:1px solid var(--line);color:var(--ink2);white-space:nowrap}\n\n/* landing */\n#home{max-width:1180px;margin:0 auto;padding:36px 22px 56px;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:42px;align-items:start}\n.home-l h1{font-size:clamp(34px,4.4vw,54px);line-height:1.02;letter-spacing:-.035em;font-weight:800;margin:6px 0 14px;max-width:14ch}\n.home-l .lede{font-size:16.5px;color:var(--ink2);max-width:56ch;margin:0 0 26px}\n.setup{background:var(--paper);border:1px solid var(--line);border-radius:var(--r-panel)}\n.setup section{padding:18px 20px;border-top:1px solid var(--line)}\n.setup section:first-child{border-top:0}\n.setup h2{display:flex;align-items:baseline;gap:10px;font-size:15px;margin:0 0 12px;font-weight:750}\n.setup h2 .n{font:700 12px \"JetBrains Mono\",monospace;color:var(--paper);background:var(--ink);border-radius:6px;padding:1px 7px}\n.choose{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.choice{text-align:left;border:1.5px solid var(--line2);background:var(--paper);border-radius:12px;padding:12px 14px;display:grid;gap:2px}\n.choice b{font-size:14.5px}\n.choice span{font-size:12.5px;color:var(--mute)}\n.choice.on{border-color:var(--deep);box-shadow:inset 0 0 0 1px var(--deep);background:var(--paper2)}\n.drop{border:1.5px dashed var(--line2);border-radius:12px;padding:26px 16px;text-align:center;cursor:pointer;background:var(--paper2);transition:border-color .12s,background .12s}\n.drop:hover,.drop.over{border-color:var(--brand);background:var(--paper)}\n.drop b{display:block;font-size:16px;margin-bottom:2px}\n.thumbs{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}\n.thumbs .t{position:relative;width:64px;height:64px;border-radius:8px;overflow:hidden;border:1px solid var(--line);background:var(--paper2)}\n.thumbs .t img,.thumbs .t video{width:100%;height:100%;object-fit:cover;display:block}\n.thumbs .t button{position:absolute;top:2px;right:2px;width:20px;height:20px;border-radius:50%;border:0;background:rgba(14,36,51,.8);color:#fff;font-size:11px;line-height:1;padding:0}\n.home-r{position:sticky;top:76px;display:grid;gap:16px}\n.demo{background:var(--monitor);border-radius:var(--r-panel);padding:18px;display:grid;place-items:center}\n.demo canvas{width:min(100%,300px);aspect-ratio:9/16;border-radius:10px;display:block}\n.demo-cap{font-size:12.5px;color:var(--mute);margin:-6px 4px 0}\n.drafts{background:var(--paper);border:1px solid var(--line);border-radius:var(--r-panel);padding:14px 16px}\n.drafts h3{margin:0 0 8px;font-size:14px}\n.draft{display:flex;gap:10px;align-items:center;padding:8px 0;border-top:1px solid var(--line)}\n.draft:first-of-type{border-top:0}\n.draft img{width:36px;height:52px;object-fit:cover;border-radius:6px;background:var(--monitor)}\n.draft .meta{flex:1;min-width:0}\n.draft .meta b{display:block;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.keyline{display:flex;gap:8px;align-items:center;flex-wrap:wrap}\n.keyline input{flex:1;min-width:200px}\n.dot{width:8px;height:8px;border-radius:50%;background:var(--signal);flex:none}\n.dot.ok{background:var(--ok)}\n\n/* studio */\n#studio{display:grid;grid-template-columns:76px 352px minmax(0,1fr);height:calc(100vh - 54px)}\n.rail{background:var(--paper);border-right:1px solid var(--line);display:flex;flex-direction:column;padding:8px 6px;gap:2px}\n.rail button{border:0;background:none;border-radius:10px;padding:8px 2px;display:grid;justify-items:center;gap:3px;font-size:11px;font-weight:650;color:var(--mute)}\n.rail button svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\n.rail button:hover{background:var(--paper2);color:var(--ink)}\n.rail button.on{background:var(--ink);color:var(--paper)}\n.drawer{background:var(--paper);border-right:1px solid var(--line);overflow:auto;min-height:0}\n.drawer .hd{position:sticky;top:0;z-index:2;background:var(--paper);padding:14px 16px 10px;border-bottom:1px solid var(--line)}\n.drawer .hd h2{margin:0;font-size:16px;font-weight:800;letter-spacing:-.01em}\n.drawer .hd p{margin:2px 0 0;font-size:12.5px;color:var(--mute)}\n.drawer .bd{padding:14px 16px 28px}\n.blk{padding:12px 0;border-top:1px solid var(--line)}\n.blk:first-child{border-top:0;padding-top:0}\n.blk h3{font-size:13px;font-weight:750;margin:0 0 8px}\n.work{display:flex;flex-direction:column;min-width:0;min-height:0}\n.monitor{flex:1;min-height:0;background:var(--monitor);position:relative;display:grid;place-items:center;overflow:hidden}\n#pv{display:block;border-radius:4px;box-shadow:0 18px 50px rgba(0,0,0,.45);background:#000}\n.busy{position:absolute;left:14px;top:14px;display:flex;align-items:center;gap:8px;background:rgba(5,13,19,.82);color:#E5EDF3;border:1px solid #23394B;border-radius:99px;padding:5px 12px;font-size:12.5px}\n.spin{width:12px;height:12px;border-radius:50%;border:2px solid #2E4A61;border-top-color:var(--signal);animation:sp .8s linear infinite;flex:none}\n@keyframes sp{to{transform:rotate(360deg)}}\n.transport{display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--monitor2);color:#E5EDF3;border-top:1px solid #1C3346}\n.transport .play{width:36px;height:36px;border-radius:50%;border:0;background:#E5EDF3;color:var(--monitor);display:grid;place-items:center;font-weight:900}\n.transport .tc{font:500 13px \"JetBrains Mono\",monospace;color:#9DB4C6}\n.transport .tc b{color:#fff;font-weight:700}\n.transport .btn{background:transparent;color:#C9D8E4;border-color:#2B4459}\n.transport .btn:hover{border-color:var(--sky);color:#fff}\n.tlbox{height:206px;flex:none;background:var(--paper);border-top:1px solid var(--line);display:grid;grid-template-columns:96px minmax(0,1fr)}\n.lanes{border-right:1px solid var(--line);font-size:11.5px;font-weight:650;color:var(--mute);padding-top:22px}\n.lanes div{height:34px;display:flex;align-items:center;padding-left:12px;border-top:1px solid var(--line)}\n.tlscroll{overflow-x:auto;overflow-y:hidden;position:relative}\n#tl{display:block;height:206px;touch-action:none;cursor:default}\n\n/* element list & inspector */\n.addgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}\n.addgrid button{border:1px solid var(--line);background:var(--paper2);border-radius:8px;padding:7px 4px;font-size:11.5px;font-weight:650;color:var(--ink2);display:grid;gap:2px;justify-items:center}\n.addgrid button i{font-style:normal;font-size:16px}\n.addgrid button:hover{border-color:var(--brand);color:var(--ink)}\n.el{display:flex;gap:8px;align-items:center;padding:7px 8px;border-radius:8px;cursor:pointer;border:1px solid transparent}\n.el:hover{background:var(--paper2)}\n.el.on{border-color:var(--brand);background:var(--paper2)}\n.el .sw{width:6px;align-self:stretch;border-radius:3px;flex:none}\n.el .tx{flex:1;min-width:0}\n.el .tx b{display:block;font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.el .tx span{font-size:11.5px;color:var(--mute)}\n.insp{border:1px solid var(--brand);border-radius:12px;padding:12px;margin:0 0 12px;background:var(--paper)}\n.insp .hdr{display:flex;align-items:center;gap:8px;margin-bottom:10px}\n.insp .hdr b{flex:1}\n.insp .fld{margin-bottom:8px}\n.steps{display:grid;gap:4px;margin-top:10px}\n.step{display:flex;align-items:center;gap:9px;font-size:12.5px;color:var(--mute);padding:5px 2px}\n.step i{width:16px;height:16px;border-radius:50%;flex:none;border:2px solid var(--line2);font-style:normal;font-size:10px;font-weight:800;display:grid;place-items:center}\n.step.active{color:var(--ink)} .step.active i{border-color:var(--line2);border-top-color:var(--signal);animation:sp .8s linear infinite}\n.step.done{color:var(--ink2)} .step.done i{background:var(--ok);border-color:var(--ok);color:#fff}\n.step.skip i{background:var(--line);border-color:var(--line)}\n.step.err{color:var(--danger)} .step.err i{background:var(--danger);border-color:var(--danger);color:#fff}\n.step small{margin-left:auto;color:var(--mute)}\n.presets{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}\n.preset{border:1px solid var(--line);border-radius:10px;background:var(--paper);padding:0;overflow:hidden;text-align:left}\n.preset canvas{display:block;width:100%;aspect-ratio:16/10;background:var(--monitor)}\n.preset span{display:block;padding:6px 8px;font-size:12px;font-weight:650}\n.preset.on{border-color:var(--deep);box-shadow:inset 0 0 0 1.5px var(--deep)}\n.chips{display:flex;flex-wrap:wrap;gap:6px}\n.chip{border:1px solid var(--line2);background:var(--paper);border-radius:99px;padding:4px 11px;font-size:12.5px;font-weight:600;color:var(--ink2)}\n.chip.on{background:var(--ink);border-color:var(--ink);color:var(--paper)}\n.asset{display:flex;gap:10px;padding:8px 0;border-top:1px solid var(--line);align-items:flex-start}\n.asset:first-child{border-top:0}\n.asset .th{width:54px;height:54px;border-radius:8px;overflow:hidden;background:var(--paper2);flex:none;border:1px solid var(--line)}\n.asset .th img,.asset .th video{width:100%;height:100%;object-fit:cover;display:block}\n.asset .tx{flex:1;min-width:0;font-size:12.5px}\n.asset .tx b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.asset.sel{background:var(--paper2);border-radius:8px}\n.realbox{border:1px solid var(--line);background:var(--paper2);border-radius:12px;padding:12px 14px}\n.realbox.off .g2,.realbox.off .hint{opacity:.45}\n.kv{display:grid;grid-template-columns:118px 1fr;gap:8px 10px;align-items:center}\n.kv>label{font-size:12.5px;color:var(--ink2);font-weight:600}\n\n/* modal & toast */\n.modal{position:fixed;inset:0;background:rgba(8,18,26,.55);display:grid;place-items:center;z-index:60;padding:16px}\n.dlg{width:min(560px,100%);max-height:calc(100vh - 32px);overflow:auto;background:var(--paper);border-radius:16px;padding:22px;box-shadow:0 30px 80px rgba(0,0,0,.35)}\n.dlg h3{margin:0 0 12px;font-size:18px;font-weight:800}\n.dlg ol{margin:0;padding-left:20px;line-height:1.7;color:var(--ink2)}\n.dlg .acts{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;margin-top:16px}\n.meter{height:8px;border-radius:99px;background:var(--line);overflow:hidden}\n.meter i{display:block;height:100%;width:0;background:var(--signal);transition:width .2s}\n#toast{position:fixed;left:50%;bottom:20px;transform:translate(-50%,16px);opacity:0;background:var(--ink);color:var(--paper);padding:10px 16px;border-radius:10px;font-size:13.5px;max-width:calc(100vw - 32px);z-index:70;pointer-events:none;transition:opacity .2s,transform .2s}\n#toast.show{opacity:1;transform:translate(-50%,0)}\n@media (prefers-reduced-motion:reduce){*{transition:none!important;animation-duration:.01ms!important}}\n@media (max-width:1020px){\n  #home{grid-template-columns:1fr}\n  .home-r{position:static;order:-1}\n  .demo canvas{width:min(100%,220px)}\n  #studio{grid-template-columns:1fr;height:auto}\n  .rail{flex-direction:row;overflow-x:auto;border-right:0;border-bottom:1px solid var(--line);order:2}\n  .rail button{min-width:68px}\n  .work{order:1}\n  .monitor{height:58vh;flex:none}\n  .drawer{order:3;border-right:0;max-height:none}\n  .tlbox{grid-template-columns:70px minmax(0,1fr)}\n}\n@media (max-width:560px){\n  .choose,.g2{grid-template-columns:1fr}\n  .bar{gap:4px;padding:0 10px}\n  .bar .proj,.mark span,#bHelp{display:none}\n  .bar .btn.sm{padding:5px 8px}\n  .home-l h1{font-size:34px}\n  .transport{flex-wrap:wrap;gap:8px}\n  .transport label{display:none!important}\n  .lanes div{font-size:10.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-left:6px}\n  .kv{grid-template-columns:96px 1fr}\n}\nbody{overflow-x:hidden}\n:root[data-theme=\"dark\"] .btn.main{color:#06121C}\n:root[data-theme=\"dark\"] .btn.main:hover{color:#06121C}\n\n.cuttools{position:absolute;z-index:5;display:flex;align-items:center;gap:4px;background:var(--ink);color:var(--paper);border-radius:10px;padding:4px 4px 4px 10px;box-shadow:0 8px 24px rgba(0,0,0,.25);font-size:12px;font-weight:650;white-space:nowrap}\n.cuttools button{display:inline-flex;align-items:center;gap:5px;border:0;border-radius:7px;padding:5px 9px;background:rgba(255,255,255,.12);color:inherit;font-size:12px;font-weight:700}\n.cuttools button:hover{background:rgba(255,255,255,.22)}\n.cuttools button.cut{background:#C2412D;color:#fff}\n.cuttools button.cut:hover{background:#d4503b}\n.cuttools span{margin-right:4px;opacity:.85}\n.wchip{display:inline-flex;align-items:stretch;border:1px solid var(--line2);border-radius:99px;overflow:hidden;background:var(--paper)}\n.wchip button{border:0;background:none;padding:4px 4px 4px 10px;font-size:12.5px;font-weight:600;color:var(--ink2)}\n.wchip .sc{padding:4px 9px 4px 5px;color:#C2412D;display:inline-flex;align-items:center;border-left:1px solid var(--line)}\n.wchip .sc:hover{background:#C2412D;color:#fff}\n.wchip.on{background:var(--ink);border-color:var(--ink)}\n.wchip.on button{color:var(--paper)}\n#studio:not([hidden]) ~ #toast{bottom:auto;top:66px;left:calc(50% + 214px);transform:translate(-50%,-10px)}\n#studio:not([hidden]) ~ #toast.show{transform:translate(-50%,0)}\n@media (max-width:1020px){#studio:not([hidden]) ~ #toast{top:auto;bottom:20px;left:50%}}\n\n.transport .cutbtn{border-color:#C2412D;color:#FFB4A8;font-weight:750}\n.transport .cutbtn:hover{border-color:#ff7a66;color:#fff}\n.transport .cutbtn.armed{background:#C2412D;border-color:#C2412D;color:#fff}\n.lanes .lcut{gap:6px;color:var(--ink2)}\n.lanes .lcut svg{color:#C2412D;flex:none}\n/* galeri gaya visual */\n.stylepick{margin-top:14px}\n.sphead{display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:8px}\n.sphead .f{margin:0}\n.stylegrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(104px,1fr));gap:10px}\n.stylegrid[data-shape=square]{grid-template-columns:repeat(auto-fill,minmax(110px,1fr))}\n.stylegrid[data-shape=wide]{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}\n.stile{position:relative;display:flex;flex-direction:column;gap:6px;padding:5px 5px 7px;border:1px solid var(--line);border-radius:12px;background:var(--paper2);cursor:pointer;text-align:center;transition:transform .15s,border-color .15s,box-shadow .15s}\n.stile:hover{transform:translateY(-2px);border-color:var(--line2)}\n.stile:focus-visible{outline:2px solid var(--focus);outline-offset:2px}\n.stile.on{border-color:var(--brand);box-shadow:0 0 0 2px var(--brand)}\n.stile .frame{display:block;aspect-ratio:var(--ar,9/16);border-radius:8px;overflow:hidden;background:var(--monitor)}\n.stile canvas{display:block;width:100%;height:100%}\n.stile .nm{font-size:12px;font-weight:650;line-height:1.2;color:var(--ink)}\n.stile.on .nm{color:var(--brand)}\n.stile .badge{position:absolute;top:10px;left:10px;z-index:1;font-style:normal;font-size:9.5px;font-weight:800;letter-spacing:.04em;padding:2px 6px;border-radius:6px;color:#fff;background:var(--deep);box-shadow:0 1px 3px rgba(0,0,0,.3)}\n.stile .badge.fit{background:var(--ok)}\n.autoart{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;height:100%;color:#fff;text-align:center;padding:8px;background:radial-gradient(120% 80% at 20% 10%,#7c5cff 0,transparent 60%),radial-gradient(120% 90% at 90% 90%,#00b4d8 0,transparent 60%),linear-gradient(160deg,#d946ef,#3b82f6)}\n.autoart b{font-size:13px}.autoart small{font-size:10px;opacity:.85;line-height:1.2}\n.styleinfo{margin:10px 0 0;font-size:13px;line-height:1.5;color:var(--ink)}\n.styleinfo .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}\n.styleinfo .tags span{font-size:11.5px;padding:2px 8px;border-radius:999px;border:1px solid var(--line);background:var(--paper)}\n.styleinfo .tags .fit{border-color:var(--ok);color:var(--ok);font-weight:650}\n@media (max-width:560px){.stylegrid{grid-template-columns:repeat(3,1fr);gap:8px}.stylegrid[data-shape=wide]{grid-template-columns:repeat(2,1fr)}}\n.stile .badge.new{background:var(--signal);color:#1a1200}\n.dot.bad{background:var(--danger)}\n.okmsg{color:var(--ok);font-weight:650}\n.badmsg{color:var(--danger);font-weight:600}\n.badmsg a{color:inherit}\n"; document.head.appendChild(st);
  document.title = "Cendekia Motion Studio"; document.documentElement.lang = "id";
  document.body.insertAdjacentHTML("beforeend", "<header class=\"bar\">\n  <div class=\"mark\">\n    <svg viewBox=\"0 0 110 60\" aria-hidden=\"true\"><circle cx=\"22\" cy=\"38\" r=\"16\" fill=\"#105E82\"/><circle cx=\"62\" cy=\"24\" r=\"10\" fill=\"#1E81B0\"/><circle cx=\"92\" cy=\"12\" r=\"6\" fill=\"#56B4E9\"/></svg>\n    <span>Cendekia Motion Studio</span>\n  </div>\n  <div class=\"proj\" id=\"projBar\" hidden>\n    <input type=\"text\" id=\"projName\" aria-label=\"Nama proyek\" maxlength=\"80\">\n    <span class=\"pill\" id=\"modePill\"></span>\n  </div>\n  <span class=\"grow\" id=\"barGrow\"></span>\n  <button class=\"btn ghost sm\" id=\"bUndo\" type=\"button\" title=\"Urungkan (Ctrl+Z)\" hidden>\u21b6</button>\n  <button class=\"btn ghost sm\" id=\"bRedo\" type=\"button\" title=\"Ulangi (Ctrl+Shift+Z)\" hidden>\u21b7</button>\n  <button class=\"btn ghost sm\" id=\"bTheme\" type=\"button\" title=\"Tema terang/gelap\" aria-label=\"Ganti tema\"><svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 4a8 8 0 000 16z\" fill=\"currentColor\"/></svg></button>\n  <button class=\"btn ghost sm\" id=\"bHelp\" type=\"button\">Panduan</button>\n  <button class=\"btn sm\" id=\"bHome\" type=\"button\" hidden>Proyek baru</button>\n  <button class=\"btn main sm\" id=\"bRender\" type=\"button\" hidden>Render video</button>\n</header>\n\n<!-- ================= LANDING ================= -->\n<main id=\"home\">\n  <div class=\"home-l\">\n    <h1>Dari rekaman mentah ke video motion, di satu meja.</h1>\n    <p class=\"lede\">Unggah video Anda berbicara, atau foto produk saja. AI menyusun caption per kata, kartu penjelasan, angka, b-roll, transisi, musik, dan narator. Semua bisa disunting lalu dirender jadi MP4 di perangkat Anda.</p>\n\n    <div class=\"setup\">\n      <section>\n        <h2><span class=\"n\">1</span>Bahan videonya</h2>\n        <div class=\"choose\" role=\"radiogroup\" aria-label=\"Jenis video\">\n          <button type=\"button\" class=\"choice on\" data-mode=\"talk\" role=\"radio\" aria-checked=\"true\"><b>Video saya berbicara</b><span>Talking head, kelas, review, podcast, tutorial</span></button>\n          <button type=\"button\" class=\"choice\" data-mode=\"product\" role=\"radio\" aria-checked=\"false\"><b>Foto/video produk</b><span>Tanpa orang. AI menulis naskah dan membacakannya</span></button>\n        </div>\n\n        <div id=\"setProd\" hidden style=\"margin-top:14px\">\n          <div class=\"g2\">\n            <div><label class=\"f\" for=\"pBrand\">Merek</label><input type=\"text\" id=\"pBrand\" placeholder=\"mis. Kopi Lereng\"></div>\n            <div><label class=\"f\" for=\"pName\">Produk / judul</label><input type=\"text\" id=\"pName\" placeholder=\"mis. Cold brew literan\"></div>\n            <div class=\"span\"><label class=\"f\" for=\"pBenefits\">Keunggulan & info penting</label><textarea id=\"pBenefits\" placeholder=\"Satu poin per baris. mis.&#10;Tanpa gula tambahan&#10;Tahan 7 hari di kulkas&#10;Biji arabika Gayo\"></textarea></div>\n            <div><label class=\"f\" for=\"pPrice\">Harga / promo</label><input type=\"text\" id=\"pPrice\" placeholder=\"mis. Rp 85.000, beli 2 gratis 1\"></div>\n            <div><label class=\"f\" for=\"pCta\">Ajakan di akhir</label><input type=\"text\" id=\"pCta\" placeholder=\"mis. Pesan lewat WhatsApp\"></div>\n            <div><label class=\"f\" for=\"pLink\">Link / kontak</label><input type=\"text\" id=\"pLink\" placeholder=\"mis. kopilereng.id\"></div>\n            <div><label class=\"f\" for=\"pDur\">Durasi</label><select id=\"pDur\"><option value=\"15\">\u00b115 detik</option><option value=\"30\" selected>\u00b130 detik</option><option value=\"45\">\u00b145 detik</option><option value=\"60\">\u00b160 detik</option></select></div>\n            <div><label class=\"f\" for=\"pTone\">Gaya bicara</label><select id=\"pTone\"><option value=\"santai\">Santai & akrab</option><option value=\"semangat\">Semangat, jualan</option><option value=\"profesional\">Profesional</option><option value=\"hangat\">Hangat, bercerita</option></select></div>\n            <div><label class=\"f\" for=\"pVoice\">Suara narator</label><select id=\"pVoice\"></select></div>\n          </div>\n        </div>\n\n        <div style=\"margin-top:14px\">\n          <label class=\"f\" id=\"assetsLbl\">B-roll (opsional): foto/video pendukung</label>\n          <div class=\"drop\" id=\"assetsDrop\" tabindex=\"0\" role=\"button\"><b>Tambah foto atau video</b><span class=\"small muted\">klik atau tarik ke sini \u00b7 bisa lebih dari satu</span></div>\n          <div class=\"thumbs\" id=\"homeAssets\"></div>\n        </div>\n        <div id=\"briefWrap\" style=\"margin-top:12px\"><label class=\"f\" for=\"hBrief\">Arahan untuk AI (opsional)</label>\n          <textarea id=\"hBrief\" placeholder=\"Audiens, pesan utama, ajakan di akhir. mis. Untuk staf HR. Ajak daftar kelas di cendekiadigital.com\"></textarea></div>\n      </section>\n\n      <section>\n        <h2><span class=\"n\">2</span>Tampilan & suara</h2>\n        <div class=\"g2\">\n          <div><label class=\"f\" for=\"hAspect\">Format</label><select id=\"hAspect\"><option value=\"source\">Ikuti video asli</option><option value=\"9:16\" selected>9:16 Reels, Shorts, TikTok</option><option value=\"4:5\">4:5 Feed Instagram</option><option value=\"1:1\">1:1 Kotak</option><option value=\"16:9\">16:9 YouTube</option></select></div>\n          <div><label class=\"f\" for=\"hNiche\">Bidang konten</label><select id=\"hNiche\"></select></div>\n          <div><label class=\"f\" for=\"hMusic\">Musik latar</label><select id=\"hMusic\"></select></div>\n          <div><label class=\"f\" for=\"hCamera\">Gerak kamera</label><select id=\"hCamera\"><option value=\"smooth\">Zoom halus</option><option value=\"punch\">Zoom potong (jump-cut)</option><option value=\"angle\">Ganti angle otomatis</option><option value=\"off\">Diam</option></select></div>\n        </div>\n        <div class=\"stylepick\">\n          <div class=\"sphead\"><span class=\"f\" id=\"styleLbl\">Gaya visual</span><span class=\"small muted\">Arahkan kursor ke kartu untuk melihat animasinya</span></div>\n          <select id=\"hPreset\" hidden aria-hidden=\"true\" tabindex=\"-1\"></select>\n          <div class=\"stylegrid\" id=\"styleGrid\" role=\"radiogroup\" aria-labelledby=\"styleLbl\"></div>\n          <p class=\"styleinfo\" id=\"styleInfo\" aria-live=\"polite\"></p>\n        </div>\n        <div class=\"realbox\" style=\"margin-top:12px\">\n          <label class=\"check\"><input type=\"checkbox\" id=\"hReal\" checked> <span><b>Tambah visual realistis buatan AI</b><br>Gemini membuat foto atau klip video yang terlihat nyata untuk b-roll, di momen yang paling butuh gambar.</span></label>\n          <div class=\"g2\" id=\"hRealOpts\" style=\"margin-top:10px\">\n            <div><label class=\"f\" for=\"hRealKind\">Jenis visual</label><select id=\"hRealKind\"><option value=\"image\">Foto realistis (Imagen)</option><option value=\"video\">Klip video realistis (Veo)</option></select></div>\n            <div><label class=\"f\" for=\"hRealCount\">Jumlah maksimal</label><select id=\"hRealCount\"><option value=\"1\">1</option><option value=\"2\" selected>2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option></select></div>\n          </div>\n          <p class=\"hint\" id=\"hRealNote\"></p>\n        </div>\n      </section>\n\n      <section>\n        <h2><span class=\"n\">3</span>Mulai</h2>\n        <div class=\"keyline\">\n          <span class=\"dot\" id=\"hKeyDot\"></span>\n          <input type=\"password\" id=\"hKey\" placeholder=\"Gemini API key (AIza\u2026)\" autocomplete=\"off\" aria-label=\"Gemini API key\">\n          <button class=\"btn sm\" type=\"button\" id=\"hKeySave\">Simpan key</button>\n        </div>\n        <p class=\"hint\" id=\"hKeyTxt\">Buat key gratis di <a href=\"https://aistudio.google.com/apikey\" target=\"_blank\" rel=\"noopener\">aistudio.google.com/apikey</a>. Key hanya disimpan di browser ini; pemakaian AI tercatat di akun Google Anda.</p>\n        <label class=\"check\" style=\"margin:12px 0\"><input type=\"checkbox\" id=\"hNoAI\"> <span>Tanpa AI: saya susun elemen sendiri (caption bisa dari teks yang saya ketik)</span></label>\n        <div id=\"startTalk\">\n          <div class=\"drop\" id=\"videoDrop\" tabindex=\"0\" role=\"button\"><b>Pilih video Anda berbicara</b><span class=\"small muted\">MP4, MOV, atau WEBM \u00b7 ideal di bawah 3 menit</span></div>\n        </div>\n        <div id=\"startProd\" hidden>\n          <button class=\"btn main wide\" type=\"button\" id=\"hGoProd\">Buat video produk</button>\n          <p class=\"hint\">Minimal 1 foto produk disarankan. Tanpa foto, AI membuat gambar sesuai pengaturan di langkah 2.</p>\n        </div>\n      </section>\n    </div>\n  </div>\n\n  <aside class=\"home-r\">\n    <div class=\"demo\"><canvas id=\"demo\" width=\"360\" height=\"640\" aria-label=\"Contoh animasi hasil aplikasi\"></canvas></div>\n    <p class=\"demo-cap\">Contoh di atas digambar langsung oleh mesin aplikasi ini, sama seperti saat Anda merender.</p>\n    <div class=\"drafts\" id=\"draftBox\" hidden>\n      <h3>Lanjutkan draf</h3>\n      <div id=\"draftList\"></div>\n    </div>\n  </aside>\n</main>\n\n<!-- ================= STUDIO ================= -->\n<div id=\"studio\" hidden>\n  <nav class=\"rail\" id=\"rail\" aria-label=\"Panel\"></nav>\n  <section class=\"drawer\" id=\"drawer\">\n    <div class=\"hd\"><h2 id=\"dTitle\"></h2><p id=\"dSub\"></p></div>\n    <div class=\"bd\" id=\"dBody\"></div>\n  </section>\n  <section class=\"work\">\n    <div class=\"monitor\" id=\"monitor\">\n      <canvas id=\"pv\" width=\"360\" height=\"640\"></canvas>\n      <div class=\"busy\" id=\"busy\" hidden><div class=\"spin\"></div><span id=\"busyTxt\">AI bekerja\u2026</span></div>\n    </div>\n    <div class=\"transport\">\n      <button class=\"play\" id=\"bPlay\" type=\"button\" title=\"Putar/jeda (Spasi)\" aria-label=\"Putar\">\u25b6</button>\n      <span class=\"tc\" id=\"tc\"><b>00:00.0</b> / 00:00.0</span>\n      <span class=\"grow\"></span>\n      <button class=\"btn xs cutbtn\" id=\"bCut\" type=\"button\" title=\"Potong kata/suara (Delete)\"><svg viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12\"/></svg><span id=\"bCutTxt\">Potong</span></button>\n      <button class=\"btn xs\" id=\"bBack\" type=\"button\">Ke awal</button>\n      <button class=\"btn xs\" id=\"bAdd\" type=\"button\">Tambah elemen di sini</button>\n      <label class=\"small\" style=\"display:flex;align-items:center;gap:6px;color:#9DB4C6\">Perbesar timeline <input type=\"range\" id=\"tlZoom\" min=\"1\" max=\"8\" step=\"0.5\" value=\"1\" style=\"width:90px\"></label>\n    </div>\n    <div class=\"tlbox\">\n      <div class=\"lanes\"><div>Adegan</div><div>Teks & kartu</div><div>Kamera & efek</div><div class=\"lcut\" title=\"Klik kata di jalur ini, lalu Potong\">Kata <svg viewBox=\"0 0 24 24\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12\"/></svg></div><div class=\"lcut\" title=\"Seret di jalur ini untuk memilih suara, lalu Potong\">Suara <svg viewBox=\"0 0 24 24\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12\"/></svg></div></div>\n      <div class=\"tlscroll\" id=\"tlScroll\"><canvas id=\"tl\" height=\"206\"></canvas></div>\n    </div>\n  </section>\n</div>\n\n<!-- ================= MODALS ================= -->\n<div class=\"modal\" id=\"helpModal\" hidden role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"helpTitle\">\n  <div class=\"dlg\">\n    <h3 id=\"helpTitle\">Cara pakai</h3>\n    <ol>\n      <li>Pilih bahan: video Anda berbicara, atau foto/video produk (AI menulis naskah dan membacakannya).</li>\n      <li>Atur bidang konten, gaya, musik, dan format. Semuanya bisa diubah lagi di studio.</li>\n      <li>Tempel Gemini API key, lalu mulai. AI bekerja 30\u201390 detik.</li>\n      <li>Di studio: putar preview, geser atau perpanjang elemen langsung di timeline, sunting isinya di panel Elemen.</li>\n      <li>Minta revisi lewat panel Arahan AI, untuk seluruh video atau rentang detik tertentu, boleh dengan screenshot.</li>\n      <li>Klik <b>Render video</b>, tunggu, lalu unduh.</li>\n    </ol>\n    <p class=\"hint\">Pintasan: Spasi putar/jeda \u00b7 Ctrl+Z urungkan \u00b7 Ctrl+Shift+Z ulangi \u00b7 Delete hapus elemen terpilih. Render paling cepat di Chrome atau Edge di laptop.</p>\n    <div class=\"acts\"><button class=\"btn main\" type=\"button\" data-close>Mengerti</button></div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"renderModal\" hidden role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"renderTitle\">\n  <div class=\"dlg\">\n    <h3 id=\"renderTitle\">Render video</h3>\n    <div id=\"rOpts\">\n      <div class=\"g2\">\n        <div><label class=\"f\" for=\"rRes\">Resolusi</label><select id=\"rRes\"><option value=\"1080\">1080p, tajam</option><option value=\"720\">720p, lebih cepat</option></select></div>\n        <div><label class=\"f\" for=\"rFps\">Frame rate</label><select id=\"rFps\"><option value=\"30\">30 fps</option><option value=\"25\">25 fps</option><option value=\"60\">60 fps</option></select></div>\n      </div>\n      <p class=\"hint\" id=\"rNote\">Render berjalan di perangkat ini. Biarkan tab tetap terbuka sampai selesai.</p>\n      <div id=\"rMobile\" class=\"hint\" hidden>Di HP: jangan pindah aplikasi atau mengunci layar, colokkan charger, dan pilih 720p. Video di atas 60 detik lebih nyaman dirender di laptop.</div>\n    </div>\n    <div id=\"rProg\" hidden><div class=\"meter\"><i id=\"rBar\"></i></div><p class=\"hint\" id=\"rTxt\">Menyiapkan\u2026</p></div>\n    <div id=\"rDone\" hidden><video id=\"rVid\" controls playsinline style=\"width:100%;max-height:52vh;border-radius:10px;background:#000\"></video><p class=\"hint\" id=\"rInfo\"></p></div>\n    <div class=\"acts\">\n      <button class=\"btn\" type=\"button\" id=\"rClose\">Tutup</button>\n      <a class=\"btn main\" id=\"rDl\" hidden download>Unduh video</a>\n      <button class=\"btn main\" type=\"button\" id=\"rStart\">Mulai render</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"promptModal\" hidden role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"promptTitle\">\n  <div class=\"dlg\">\n    <h3 id=\"promptTitle\">Prompt editing per adegan</h3>\n    <p class=\"hint\" style=\"margin-top:0\">Untuk aplikasi pembuat video AI yang menerima prompt per klip (maks. 10 detik). Disusun dari rencana motion proyek ini.</p>\n    <textarea id=\"promptTxt\" rows=\"14\" readonly style=\"font-size:12.5px\"></textarea>\n    <div class=\"acts\"><button class=\"btn\" type=\"button\" data-close>Tutup</button><button class=\"btn main\" type=\"button\" id=\"promptCopy\">Salin semua</button></div>\n  </div>\n</div>\n\n<div id=\"toast\" role=\"status\" aria-live=\"polite\"></div>\n<video id=\"vid\" playsinline preload=\"auto\" hidden></video>\n<input type=\"file\" id=\"fVideo\" accept=\"video/*,.mov,.mp4,.webm,.m4v\" hidden>\n<input type=\"file\" id=\"fAssets\" accept=\"image/*,video/*\" multiple hidden>\n<input type=\"file\" id=\"fRef\" accept=\"image/*,video/*\" multiple hidden>\n<input type=\"file\" id=\"fShot\" accept=\"image/*\" multiple hidden>\n<input type=\"file\" id=\"fVO\" accept=\"audio/*,.mp3,.wav,.m4a\" hidden>\n<input type=\"file\" id=\"fJson\" accept=\".json,application/json\" hidden>\n"); }
/* Cendekia Motion Studio v2 — © 2026 Cendekia Digital Global.
   Ditulis independen. Pustaka pihak ketiga dimuat dari CDN saat diperlukan:
   Mediabunny (MPL-2.0) untuk baca/tulis video, MediaPipe Tasks Vision (Apache-2.0) untuk pemisah orang. */

// ---------- utilitas ----------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, k) => a + (b - a) * k;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const uid = () => Math.random().toString(36).slice(2, 9);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtT = s => { s = Math.max(0, s || 0); const m = Math.floor(s / 60); return `${String(m).padStart(2, '0')}:${(s - m * 60).toFixed(1).padStart(4, '0')}`; };
const parseT = str => { const m = /^\s*(?:(\d+):)?(\d+(?:[.,]\d+)?)\s*$/.exec(String(str || '')); return m ? (+(m[1] || 0)) * 60 + parseFloat(m[2].replace(',', '.')) : NaN; };
const hash = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const EZ = {
  smooth: t => 1 - Math.pow(1 - clamp(t, 0, 1), 3),
  expo: t => { t = clamp(t, 0, 1); return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t); },
  back: t => { t = clamp(t, 0, 1); const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  elastic: t => { t = clamp(t, 0, 1); if (t === 0 || t === 1) return t; return Math.pow(2, -10 * t) * Math.sin((t * 10 - .75) * (2 * Math.PI / 3)) + 1; },
  inout: t => { t = clamp(t, 0, 1); return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; },
  linear: t => clamp(t, 0, 1)
};
const ease = EZ.smooth;
function hexA(hex, a) { const h = String(hex || '#000').replace('#', ''); const n = parseInt(h.length === 3 ? h.split('').map(x => x + x).join('') : h.slice(0, 6), 16) || 0; return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${clamp(a, 0, 1)})`; }
function hexMix(a, b, k) { const p = x => { const h = x.replace('#', ''); const n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }; const A = p(a), B = p(b); return '#' + A.map((v, i) => Math.round(lerp(v, B[i], k)).toString(16).padStart(2, '0')).join(''); }
function lum(hex) { const h = hex.replace('#', ''); const n = parseInt(h, 16); const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; }
const onDark = hex => lum(hex) > .42 ? '#0B1620' : '#FFFFFF';
// ---------- mode Gemini Canvas ----------
// Di dalam Gemini Canvas, panggilan ke Gemini API tanpa key dijalankan memakai akun Gemini orang yang membuka aplikasi.
// Canvas hanya mengizinkan model tertentu, jadi daftar modelnya dibuat khusus.
const CANVAS = (() => {
  try {
    const q = new URLSearchParams(location.search); if (q.has('canvas')) return q.get('canvas') !== '0';
    if (window.__CMS_CANVAS) return true;
    const anc = location.ancestorOrigins ? [...location.ancestorOrigins] : [];
    return anc.some(o => /gemini\.google\.com/.test(o)) || /gemini\.google\.com/.test(document.referrer) || /\.usercontent\.goog$/.test(location.hostname);
  } catch { return false; }
})();
const CANVAS_MODELS = { text: ['gemini-2.5-flash-preview-09-2025', 'gemini-3-flash-preview', 'gemini-2.5-flash-09-2025', 'gemini-2.5-flash'], lite: [], pro: [], tts: ['gemini-2.5-flash-preview-tts'], image: ['gemini-2.5-flash-image-preview', 'gemini-2.5-flash-image'], imagen: ['imagen-4.0-generate-001', 'imagen-3.0-generate-002'], veo: [] };
const hasAI = () => CANVAS || !!(R.apiKey || '').trim();
const effKey = () => CANVAS ? '' : (R.apiKey || '').trim();
const store = {
  get(k, d) { try { const v = localStorage.getItem('cms2:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('cms2:' + k, JSON.stringify(v)); } catch {} }
};
let toastT;
function toast(msg, ms = 3400) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), ms); }
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (matchMedia('(pointer:coarse)').matches && innerWidth < 900);

// ---------- huruf ----------
const FONTS = ['Plus Jakarta Sans', 'Anton', 'Bebas Neue', 'Poppins', 'Montserrat', 'Playfair Display', 'DM Serif Display', 'Space Grotesk', 'Caveat', 'Righteous', 'JetBrains Mono', 'Oswald', 'Archivo Black', 'Fraunces', 'Pacifico', 'Unbounded', 'Cinzel', 'Press Start 2P', 'Permanent Marker', 'Lora', 'Sora'];
const FW = { 'Plus Jakarta Sans': 800, 'Anton': 400, 'Bebas Neue': 400, 'Poppins': 800, 'Montserrat': 900, 'Playfair Display': 800, 'DM Serif Display': 400, 'Space Grotesk': 700, 'Caveat': 700, 'Righteous': 400, 'JetBrains Mono': 700, 'Oswald': 700, 'Archivo Black': 400, 'Fraunces': 800, 'Pacifico': 400, 'Unbounded': 800, 'Cinzel': 800, 'Press Start 2P': 400, 'Permanent Marker': 400, 'Lora': 700, 'Sora': 700 };
const font = (fam, size, w) => `${w ?? FW[fam] ?? 700} ${Math.max(1, Math.round(size))}px "${fam}", "Plus Jakarta Sans", system-ui, sans-serif`;
const BODY_W = fam => (fam === 'Caveat' ? 700 : ['DM Serif Display', 'Anton', 'Bebas Neue', 'Righteous', 'Archivo Black', 'Pacifico', 'Press Start 2P', 'Permanent Marker'].includes(fam) ? 400 : 600);

// ---------- pilihan ----------
const OPT = {
  card: [['glass', 'Kaca gelap'], ['solid', 'Solid gelap'], ['light', 'Putih bersih'], ['outline', 'Garis aksen'], ['paper', 'Kertas'], ['sketch', 'Coretan tangan'], ['block', 'Blok tegas']],
  kw: [['color', 'Warna aksen'], ['marker', 'Stabilo'], ['underline', 'Garis bawah'], ['box', 'Kotak'], ['gradient', 'Gradasi']],
  textIn: [['rise', 'Naik dari bawah'], ['drop', 'Turun dari atas'], ['left', 'Masuk dari kiri'], ['right', 'Masuk dari kanan'], ['pop', 'Membesar'], ['fade', 'Muncul pelan'], ['blur', 'Dari buram'], ['mask', 'Terbuka dari garis'], ['type', 'Ketikan'], ['scramble', 'Acak huruf']],
  split: [['word', 'Per kata'], ['char', 'Per huruf'], ['line', 'Per baris'], ['none', 'Sekaligus']],
  ease: [['smooth', 'Halus'], ['back', 'Memantul'], ['elastic', 'Kenyal'], ['expo', 'Cepat lalu halus'], ['inout', 'Pelan-cepat-pelan']],
  emph: [['none', 'Diam'], ['pulse', 'Berdenyut'], ['glow', 'Menyala'], ['shake', 'Bergetar'], ['wave', 'Bergelombang'], ['float', 'Melayang']],
  sceneBg: [['mesh', 'Gumpalan warna'], ['grid', 'Grid perspektif'], ['dots', 'Titik bergelombang'], ['rays', 'Sinar berputar'], ['bokeh', 'Bokeh'], ['stars', 'Bintang'], ['stripes', 'Garis miring'], ['rings', 'Cincin'], ['paper', 'Kertas'], ['plain', 'Polos gradasi']],
  tone: [['dark', 'Gelap'], ['light', 'Terang'], ['accent', 'Warna aksen']],
  grading: [['none', 'Asli'], ['warm', 'Hangat'], ['cool', 'Sejuk'], ['punchy', 'Tegas'], ['film', 'Film'], ['fade', 'Pudar'], ['mono', 'Hitam putih']],
  camera: [['smooth', 'Zoom halus'], ['punch', 'Zoom potong (jump-cut)'], ['angle', 'Ganti angle otomatis'], ['off', 'Diam']],
  fit: [['cover', 'Isi penuh (crop)'], ['blur', 'Utuh + latar buram'], ['contain', 'Utuh + latar gelap']],
  trans: [['fade', 'Pudar'], ['slide', 'Geser'], ['up', 'Naik'], ['zoom', 'Zoom'], ['wipe', 'Sapu'], ['circle', 'Lingkaran'], ['blinds', 'Tirai'], ['flash', 'Kilat'], ['blur', 'Buram'], ['cut', 'Potong langsung']],
  capMode: [['pop', 'Pop per kata'], ['box', 'Kotak sorot'], ['karaoke', 'Karaoke'], ['tiered', 'Bertingkat (kata kunci besar)'], ['single', 'Satu kata'], ['calm', 'Subtitle tenang']],
  personBg: [['none', 'Biarkan'], ['dim', 'Redupkan latar'], ['blur', 'Buramkan latar'], ['tint', 'Warnai latar']],
  sfx: [['auto', 'Otomatis'], ['none', 'Tanpa'], ['whoosh', 'Whoosh'], ['pop', 'Pop'], ['ding', 'Ding'], ['click', 'Klik'], ['riser', 'Naik'], ['boom', 'Dentum']],
  pos: [['top', 'Atas'], ['center', 'Tengah'], ['bottom', 'Bawah']],
  layout: [['full', 'Layar penuh'], ['pip', 'Jendela kecil'], ['split', 'Layar terbagi'], ['phone', 'Mockup HP'], ['float', 'Kartu mengambang'], ['spotlight', 'Sorotan produk']],
  diagram: [['steps', 'Langkah berurutan'], ['compare', 'Perbandingan'], ['bars', 'Grafik batang'], ['flow', 'Alur panah'], ['cycle', 'Siklus'], ['ring', 'Cincin persentase']],
  fx: [['flash', 'Kilat putih'], ['shake', 'Guncang'], ['glitch', 'Glitch'], ['leak', 'Cahaya bocor'], ['pulse', 'Denyut zoom']],
  zoom: [['auto', 'Ikut setelan'], ['smooth', 'Halus'], ['punch', 'Potong'], ['out', 'Mundur']],
  mood: [['corporate', 'Upbeat profesional'], ['lofi', 'Lo-fi santai'], ['hype', 'Energik'], ['cinematic', 'Sinematik'], ['happy', 'Ceria'], ['tech', 'Teknologi'], ['none', 'Tanpa musik']]
};
const optLabel = (k, v) => (OPT[k].find(o => o[0] === v) || [, v])[1];
const VOICES = [['Kore', 'Kore · wanita, tegas'], ['Aoede', 'Aoede · wanita, ringan'], ['Leda', 'Leda · wanita, muda'], ['Zephyr', 'Zephyr · wanita, cerah'], ['Sulafat', 'Sulafat · wanita, hangat'], ['Puck', 'Puck · pria, ceria'], ['Charon', 'Charon · pria, informatif'], ['Orus', 'Orus · pria, mantap'], ['Fenrir', 'Fenrir · pria, bersemangat'], ['Achird', 'Achird · pria, ramah']];

// ---------- gaya visual (preset orisinal Cendekia) ----------
const BASE_LOOK = { accent: '#56B4E9', accent2: '#FFD166', ink: '#0B1620', fontD: 'Plus Jakarta Sans', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'glass', kw: 'color', textIn: 'rise', split: 'word', ease: 'back', emph: 'none', sceneBg: 'mesh', tone: 'dark', grading: 'none', vignette: .25, grain: 0, upper: false, capMode: 'pop', trans: 'auto', transSpeed: 1 };
const PRESETS = {
  cendekia: { name: 'Biru Cendekia', accent: '#56B4E9', accent2: '#FFD166', fontD: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'glass', kw: 'color', textIn: 'rise', sceneBg: 'mesh', capMode: 'pop' },
  kelas: { name: 'Kelas Daring', accent: '#1E81B0', accent2: '#FFE066', fontD: 'Poppins', capFont: 'Poppins', card: 'light', kw: 'marker', textIn: 'pop', sceneBg: 'dots', tone: 'light', capMode: 'box' },
  papan: { name: 'Papan Tulis', accent: '#F4F1DE', accent2: '#F2CC8F', fontD: 'Caveat', fontB: 'Plus Jakarta Sans', capFont: 'Caveat', card: 'sketch', kw: 'underline', textIn: 'type', split: 'char', sceneBg: 'paper', tone: 'dark', capMode: 'calm', ink: '#1F3B2D' },
  datalab: { name: 'Lab Data', accent: '#2EE6C5', accent2: '#B5F44A', fontD: 'Space Grotesk', fontB: 'Space Grotesk', capFont: 'Space Grotesk', card: 'outline', kw: 'box', textIn: 'scramble', split: 'char', sceneBg: 'grid', capMode: 'karaoke', grading: 'cool' },
  direksi: { name: 'Ruang Direksi', accent: '#D9B26A', accent2: '#F5EEDC', fontD: 'Playfair Display', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'solid', kw: 'underline', textIn: 'mask', split: 'line', ease: 'expo', sceneBg: 'plain', capMode: 'calm', grading: 'film' },
  kilat: { name: 'Promo Kilat', accent: '#FFE600', accent2: '#FF4D4D', fontD: 'Anton', capFont: 'Anton', card: 'block', kw: 'box', textIn: 'pop', ease: 'elastic', emph: 'shake', sceneBg: 'rays', tone: 'accent', upper: true, capMode: 'tiered', grading: 'punchy', trans: 'flash' },
  pasar: { name: 'Pasar Pagi', accent: '#FF8A3D', accent2: '#3DDC97', fontD: 'Poppins', capFont: 'Poppins', card: 'light', kw: 'marker', textIn: 'pop', emph: 'pulse', sceneBg: 'bokeh', tone: 'accent', capMode: 'pop', grading: 'warm' },
  senja: { name: 'Kopi Senja', accent: '#E9C46A', accent2: '#F4A261', fontD: 'DM Serif Display', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'paper', kw: 'underline', textIn: 'blur', split: 'line', ease: 'inout', sceneBg: 'paper', tone: 'light', capMode: 'calm', grading: 'warm', grain: .18, ink: '#2B1D14' },
  kota: { name: 'Malam Kota', accent: '#C77DFF', accent2: '#4CC9F0', fontD: 'Righteous', capFont: 'Righteous', card: 'outline', kw: 'gradient', textIn: 'blur', emph: 'glow', sceneBg: 'stars', capMode: 'karaoke', grading: 'cool', trans: 'blur' },
  putih: { name: 'Putih Bersih', accent: '#0E7490', accent2: '#F97316', fontD: 'Montserrat', capFont: 'Montserrat', card: 'light', kw: 'color', textIn: 'left', ease: 'expo', sceneBg: 'plain', tone: 'light', capMode: 'calm', vignette: 0 },
  majalah: { name: 'Majalah', accent: '#E63946', accent2: '#FFFFFF', fontD: 'DM Serif Display', fontB: 'Montserrat', capFont: 'Montserrat', card: 'block', kw: 'color', textIn: 'mask', split: 'line', ease: 'expo', sceneBg: 'stripes', tone: 'light', capMode: 'single', grading: 'fade' },
  coretan: { name: 'Coretan Kreatif', accent: '#FF5D8F', accent2: '#FFD23F', fontD: 'Caveat', fontB: 'Poppins', capFont: 'Poppins', card: 'sketch', kw: 'underline', textIn: 'pop', emph: 'wave', sceneBg: 'paper', tone: 'light', capMode: 'pop', ink: '#22223B' },
  retro: { name: 'Retro 90', accent: '#00C2A8', accent2: '#FF6FB5', fontD: 'Righteous', capFont: 'Righteous', card: 'block', kw: 'box', textIn: 'drop', ease: 'back', emph: 'float', sceneBg: 'rings', tone: 'accent', capMode: 'box', grain: .12, trans: 'blinds' },
  tumbuh: { name: 'Hijau Tumbuh', accent: '#34D399', accent2: '#FDE68A', fontD: 'Montserrat', capFont: 'Montserrat', card: 'glass', kw: 'gradient', textIn: 'rise', sceneBg: 'mesh', capMode: 'tiered', upper: true },
  monokrom: { name: 'Monokrom', accent: '#FFFFFF', accent2: '#9CA3AF', fontD: 'Bebas Neue', capFont: 'Bebas Neue', card: 'outline', kw: 'underline', textIn: 'mask', split: 'line', ease: 'expo', sceneBg: 'stripes', capMode: 'single', grading: 'mono', upper: true, trans: 'cut' },
  podcast: { name: 'Studio Podcast', accent: '#F2A65A', accent2: '#EEE3CB', fontD: 'Playfair Display', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'solid', kw: 'color', textIn: 'fade', split: 'line', ease: 'inout', sceneBg: 'bokeh', capMode: 'karaoke', grading: 'film', grain: .1 },
  terminal: { name: 'Terminal Kode', accent: '#39FF14', accent2: '#FFB000', fontD: 'JetBrains Mono', fontB: 'JetBrains Mono', capFont: 'JetBrains Mono', card: 'outline', kw: 'box', textIn: 'type', split: 'char', ease: 'smooth', sceneBg: 'plain', ink: '#030A04', capMode: 'box', grain: .08, vignette: .35, trans: 'cut' },
  navy: { name: 'Korporat Navy', accent: '#3B82F6', accent2: '#F59E0B', fontD: 'Montserrat', fontB: 'Montserrat', capFont: 'Montserrat', card: 'solid', kw: 'underline', textIn: 'right', ease: 'expo', sceneBg: 'dots', ink: '#071330', capMode: 'calm', trans: 'slide' },
  pastel: { name: 'Pastel Lembut', accent: '#EC4899', accent2: '#A78BFA', fontD: 'Poppins', capFont: 'Poppins', card: 'light', kw: 'gradient', textIn: 'fade', ease: 'inout', emph: 'float', sceneBg: 'mesh', tone: 'light', capMode: 'pop', ink: '#3B1F4A', vignette: 0 },
  sinema: { name: 'Sinema Gelap', accent: '#F1F1F1', accent2: '#D4A017', fontD: 'Playfair Display', fontB: 'Montserrat', capFont: 'Montserrat', card: 'solid', kw: 'color', textIn: 'mask', split: 'line', ease: 'expo', sceneBg: 'plain', capMode: 'single', grading: 'film', vignette: .5, grain: .22, upper: true, trans: 'fade', ink: '#050505' },
  surya: { name: 'Surya Senja', accent: '#FF6B35', accent2: '#FFD23F', fontD: 'Montserrat', capFont: 'Montserrat', card: 'block', kw: 'gradient', textIn: 'drop', ease: 'elastic', emph: 'wave', sceneBg: 'mesh', tone: 'accent', upper: true, capMode: 'tiered', grading: 'warm', trans: 'zoom' },
  zamrud: { name: 'Zamrud Emas', accent: '#34D399', accent2: '#FBBF24', fontD: 'DM Serif Display', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'glass', kw: 'underline', textIn: 'rise', split: 'line', ease: 'inout', sceneBg: 'dots', ink: '#04241A', capMode: 'calm', trans: 'circle' },
  arkade: { name: 'Neon Arkade', accent: '#00F0FF', accent2: '#FF2E97', fontD: 'Space Grotesk', fontB: 'Space Grotesk', capFont: 'Space Grotesk', card: 'outline', kw: 'box', textIn: 'pop', ease: 'elastic', emph: 'glow', sceneBg: 'grid', upper: true, capMode: 'tiered', grading: 'punchy', trans: 'flash', ink: '#0A0420' },
  klinik: { name: 'Klinik Segar', accent: '#0284C7', accent2: '#22C55E', fontD: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'light', kw: 'underline', textIn: 'left', ease: 'smooth', sceneBg: 'rings', tone: 'light', capMode: 'box', vignette: 0, trans: 'wipe' },
  nusantara: { name: 'Nusantara Klasik', accent: '#B45309', accent2: '#F59E0B', fontD: 'Playfair Display', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'paper', kw: 'color', textIn: 'rise', split: 'word', ease: 'back', sceneBg: 'paper', tone: 'light', capMode: 'tiered', grading: 'warm', grain: .12, ink: '#2A1A0A', trans: 'blinds' },
  brutal: { name: 'Tegas Brutal', accent: '#FF3B00', accent2: '#111111', fontD: 'Anton', fontB: 'Montserrat', capFont: 'Anton', card: 'block', kw: 'box', textIn: 'left', ease: 'expo', sceneBg: 'plain', tone: 'light', upper: true, capMode: 'single', vignette: 0, trans: 'wipe', ink: '#111111' },
  kampus: { name: 'Kampus Akademik', accent: '#8B1E3F', accent2: '#F2C14E', fontD: 'Lora', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'paper', kw: 'underline', textIn: 'fade', split: 'line', ease: 'inout', sceneBg: 'paper', tone: 'light', capMode: 'calm', ink: '#1B1B2F', trans: 'fade' },
  startup: { name: 'Startup Pitch', accent: '#8B5CF6', accent2: '#22D3EE', fontD: 'Sora', fontB: 'Sora', capFont: 'Sora', card: 'glass', kw: 'gradient', textIn: 'rise', ease: 'back', sceneBg: 'mesh', capMode: 'pop', ink: '#0D0A1F', trans: 'zoom' },
  berita: { name: 'Berita Kilat', accent: '#E11D48', accent2: '#FACC15', fontD: 'Oswald', fontB: 'Oswald', capFont: 'Oswald', card: 'block', kw: 'box', textIn: 'left', ease: 'expo', sceneBg: 'stripes', upper: true, capMode: 'box', ink: '#0F0F14', trans: 'wipe' },
  sport: { name: 'Sport Energi', accent: '#F97316', accent2: '#FAFAFA', fontD: 'Archivo Black', fontB: 'Montserrat', capFont: 'Archivo Black', card: 'block', kw: 'color', textIn: 'right', ease: 'expo', emph: 'shake', sceneBg: 'rays', upper: true, capMode: 'tiered', grading: 'punchy', ink: '#111827', trans: 'flash' },
  mewah: { name: 'Mewah Hitam Emas', accent: '#D4AF37', accent2: '#F5E6C8', fontD: 'Cinzel', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'outline', kw: 'gradient', textIn: 'blur', split: 'line', ease: 'inout', sceneBg: 'bokeh', capMode: 'calm', grading: 'film', ink: '#0A0A0A', vignette: .45, trans: 'fade' },
  piksel: { name: 'Piksel 8-bit', accent: '#FFDE59', accent2: '#5CE1E6', fontD: 'Press Start 2P', fontB: 'Space Grotesk', capFont: 'Press Start 2P', card: 'block', kw: 'box', textIn: 'type', split: 'char', ease: 'smooth', sceneBg: 'dots', capMode: 'single', ink: '#1A1036', trans: 'cut' },
  spidol: { name: 'Spidol Kelas', accent: '#2563EB', accent2: '#FDE047', fontD: 'Permanent Marker', fontB: 'Poppins', capFont: 'Poppins', card: 'sketch', kw: 'marker', textIn: 'pop', ease: 'back', sceneBg: 'paper', tone: 'light', capMode: 'pop', ink: '#1F2937', vignette: 0 },
  kafe: { name: 'Manis Kafe', accent: '#DB2777', accent2: '#FDE68A', fontD: 'Pacifico', fontB: 'Poppins', capFont: 'Poppins', card: 'light', kw: 'color', textIn: 'drop', ease: 'back', emph: 'float', sceneBg: 'bokeh', tone: 'light', capMode: 'pop', ink: '#3F1D2B', grading: 'warm' },
  lebar: { name: 'Modern Lebar', accent: '#A3E635', accent2: '#FFFFFF', fontD: 'Unbounded', fontB: 'Plus Jakarta Sans', capFont: 'Unbounded', card: 'solid', kw: 'box', textIn: 'mask', split: 'line', ease: 'expo', sceneBg: 'plain', capMode: 'single', ink: '#101010', trans: 'slide' },
  esai: { name: 'Esai Hangat', accent: '#C2410C', accent2: '#FDBA74', fontD: 'Fraunces', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'paper', kw: 'underline', textIn: 'rise', ease: 'smooth', sceneBg: 'paper', tone: 'light', capMode: 'calm', grain: .1, ink: '#2A160B', trans: 'up' },
  laut: { name: 'Biru Laut', accent: '#22D3EE', accent2: '#E0F2FE', fontD: 'Montserrat', fontB: 'Montserrat', capFont: 'Montserrat', card: 'glass', kw: 'color', textIn: 'rise', ease: 'inout', emph: 'wave', sceneBg: 'rings', capMode: 'karaoke', ink: '#032435', trans: 'circle' },
  ramadan: { name: 'Malam Ramadan', accent: '#FBBF24', accent2: '#A7F3D0', fontD: 'DM Serif Display', fontB: 'Plus Jakarta Sans', capFont: 'Plus Jakarta Sans', card: 'glass', kw: 'gradient', textIn: 'blur', split: 'line', ease: 'inout', emph: 'glow', sceneBg: 'stars', capMode: 'calm', ink: '#0B1A3A', trans: 'fade' },
  merahputih: { name: 'Merah Putih', accent: '#DC2626', accent2: '#111111', fontD: 'Archivo Black', fontB: 'Montserrat', capFont: 'Archivo Black', card: 'block', kw: 'box', textIn: 'left', ease: 'back', sceneBg: 'stripes', tone: 'light', upper: true, capMode: 'tiered', ink: '#1A1A1A', vignette: 0, trans: 'wipe' },
  alam: { name: 'Alam Organik', accent: '#4D7C0F', accent2: '#FDE047', fontD: 'Lora', fontB: 'Poppins', capFont: 'Poppins', card: 'paper', kw: 'marker', textIn: 'rise', ease: 'back', sceneBg: 'dots', tone: 'light', capMode: 'pop', grading: 'warm', ink: '#1A2E05', trans: 'up' },
  fintech: { name: 'Fintech Bersih', accent: '#059669', accent2: '#6366F1', fontD: 'Sora', fontB: 'Sora', capFont: 'Sora', card: 'light', kw: 'box', textIn: 'scramble', split: 'char', ease: 'expo', sceneBg: 'grid', tone: 'light', capMode: 'box', vignette: 0, ink: '#0B2A22', trans: 'slide' },
  misteri: { name: 'Misteri Gelap', accent: '#DC2626', accent2: '#E5E5E5', fontD: 'Cinzel', fontB: 'Montserrat', capFont: 'Montserrat', card: 'solid', kw: 'color', textIn: 'blur', split: 'line', ease: 'inout', emph: 'pulse', sceneBg: 'plain', upper: true, capMode: 'single', grading: 'fade', vignette: .55, grain: .25, ink: '#050505', trans: 'blur' },
  anak: { name: 'Ceria Anak', accent: '#F59E0B', accent2: '#3B82F6', fontD: 'Righteous', fontB: 'Poppins', capFont: 'Poppins', card: 'light', kw: 'marker', textIn: 'pop', ease: 'elastic', emph: 'wave', sceneBg: 'dots', tone: 'accent', capMode: 'pop', ink: '#1E1B4B', trans: 'zoom' },
  synthwave: { name: 'Synthwave', accent: '#FF2BD6', accent2: '#00E5FF', fontD: 'Unbounded', fontB: 'Space Grotesk', capFont: 'Space Grotesk', card: 'outline', kw: 'gradient', textIn: 'drop', ease: 'back', emph: 'glow', sceneBg: 'grid', upper: true, capMode: 'karaoke', grading: 'cool', ink: '#14002B', trans: 'zoom' },
  koran: { name: 'Koran Lama', accent: '#1A1A1A', accent2: '#B91C1C', fontD: 'Playfair Display', fontB: 'Lora', capFont: 'Lora', card: 'paper', kw: 'underline', textIn: 'mask', split: 'line', ease: 'expo', sceneBg: 'paper', tone: 'light', capMode: 'single', grading: 'mono', grain: .2, ink: '#111111', trans: 'blinds' },
  senyap: { name: 'Gradasi Senyap', accent: '#6366F1', accent2: '#F472B6', fontD: 'Sora', fontB: 'Sora', capFont: 'Sora', card: 'glass', kw: 'gradient', textIn: 'blur', ease: 'inout', sceneBg: 'mesh', tone: 'light', capMode: 'calm', vignette: 0, ink: '#1E1B3A', trans: 'fade' }
};
const NICHES = {
  auto: { name: 'Otomatis (AI menilai)' },
  edukasi: { name: 'Edukasi & pelatihan', preset: 'kelas', mood: 'corporate', density: 'sedang', note: 'Utamakan diagram langkah, poin, dan daftar yang membantu orang paham. Kata kunci jelas.' },
  bisnis: { name: 'Bisnis & korporat', preset: 'direksi', mood: 'cinematic', density: 'jarang', note: 'Tenang dan berwibawa. Angka dan perbandingan lebih penting dari stiker.' },
  teknologi: { name: 'Tutorial software & AI', preset: 'datalab', mood: 'tech', density: 'sedang', note: 'Pakai mockup HP/layar untuk b-roll, alur langkah, dan label penanda.' },
  promo: { name: 'Promo & jualan UMKM', preset: 'kilat', mood: 'hype', density: 'padat', note: 'Energik. Harga dan promo dibuat besar, ajakan beli jelas, efek dan stiker boleh ramai.' },
  kuliner: { name: 'Kuliner', preset: 'pasar', mood: 'happy', density: 'sedang', note: 'Sorot produk dan rasa. Stiker emoji makanan cocok. Warna hangat.' },
  cerita: { name: 'Podcast & cerita', preset: 'podcast', mood: 'lofi', density: 'jarang', note: 'Biarkan wajah dominan. Kutipan dan judul bab, sedikit kartu.' },
  personal: { name: 'Personal brand', preset: 'cendekia', mood: 'corporate', density: 'sedang', note: 'Hook kuat di awal, poin tajam, notifikasi atau kutipan untuk bukti sosial.' }
};
function presetLook(key) { const p = PRESETS[key] || PRESETS.cendekia; const { name, ...rest } = p; return { ...BASE_LOOK, ...rest, preset: key }; }

// ---------- jenis elemen ----------
const TYPES = {
  title:   { label: 'Judul besar', icon: 'Aa', lane: 1, color: '#56B4E9', f: ['text', 'sub', 'pos', 'behind', 'anim'] },
  card:    { label: 'Kartu poin', icon: '▭', lane: 1, color: '#1E81B0', f: ['text', 'sub', 'pos'] },
  stat:    { label: 'Angka', icon: '%', lane: 1, color: '#F2A900', f: ['value', 'text', 'pos'] },
  list:    { label: 'Daftar', icon: '☰', lane: 1, color: '#1F9D6B', f: ['text', 'items', 'pos'] },
  chips:   { label: 'Kata kunci', icon: '◍', lane: 1, color: '#2EA3A3', f: ['items', 'pos'] },
  quote:   { label: 'Kutipan', icon: '❝', lane: 1, color: '#8E7CC3', f: ['text', 'sub', 'pos'] },
  lower:   { label: 'Nama & jabatan', icon: '▁', lane: 1, color: '#5B7083', f: ['text', 'sub'] },
  callout: { label: 'Penanda', icon: '↘', lane: 1, color: '#E07A5F', f: ['text', 'xy'] },
  notif:   { label: 'Notifikasi', icon: '🔔', lane: 1, color: '#C06C84', f: ['sub', 'text'] },
  sticker: { label: 'Stiker', icon: '★', lane: 1, color: '#F4A261', f: ['emoji', 'xy'] },
  media:   { label: 'B-roll', icon: '▣', lane: 0, color: '#3A86FF', f: ['asset', 'layout', 'text', 'trans'] },
  chapter: { label: 'Judul layar penuh', icon: '§', lane: 0, color: '#105E82', f: ['text', 'sub', 'trans', 'behind'] },
  diagram: { label: 'Animasi penjelasan', icon: '◔', lane: 0, color: '#6D597A', f: ['kind', 'text', 'ditems', 'trans'] },
  cta:     { label: 'Ajakan (CTA)', icon: '➜', lane: 0, color: '#D1495B', f: ['text', 'sub'] },
  zoom:    { label: 'Zoom kamera', icon: '⊕', lane: 2, color: '#7A8B99', f: ['zkind', 'amount'] },
  fx:      { label: 'Efek', icon: '✦', lane: 2, color: '#B5838D', f: ['fxkind'] }
};
const isFull = el => el.type === 'chapter' || el.type === 'diagram' || el.type === 'cta' || (el.type === 'media' && el.layout !== 'pip');
const laneOf = el => (el.type === 'media' && el.layout === 'pip') ? 1 : TYPES[el.type]?.lane ?? 1;

// ---------- proyek (serializable) & runtime ----------
function newProject(mode) {
  return {
    v: 2, mode, name: mode === 'product' ? 'Video produk' : 'Video baru', aspect: '9:16', duration: 0,
    words: [], keywords: [], language: '', els: [], assets: [], cuts: [], mutes: [],
    look: presetLook('cendekia'), niche: 'auto',
    cap: { on: true, mode: 'pop', font: '', size: .068, pos: .74, maxWords: 3, upper: false, offset: 0 },
    cam: { mode: 'smooth', fit: 'cover' },
    person: { behind: true, bg: 'none', rim: false, outline: false },
    audio: { mood: 'corporate', musicVol: .16, duck: true, sfx: true, sfxVol: .5, voiceVol: 1, voice: 'Kore' },
    extras: { progress: true, brand: '' },
    brief: '', product: { brand: '', name: '', benefits: '', price: '', cta: '', link: '', dur: 30, tone: 'santai' },
    face: { x: .5, y: .33 }, sceneNote: '', realism: { on: true, kind: 'image', count: 2 }, script: '', hasVoice: false, auto: { look: false, music: false }
  };
}
// visual realistis AI: opsi nyala/mati
const REAL_KINDS = [['image', 'Foto realistis'], ['video', 'Video (Veo)']];
const realCount = (p = P) => p.realism?.on ? clamp(p.realism.count | 0, 0, 6) : 0;
function isAIVisual(el, p = P) { if (el.type !== 'media') return false; const a = p.assets.find(x => x.id === el.asset); return a ? a.origin === 'ai' : !!el.imagePrompt; }
const elHidden = (el, p = P) => !p.realism?.on && isAIVisual(el, p);
function realNote(kind) { if (CANVAS && kind === 'video') return 'Video Veo tidak tersedia di mode Gemini Canvas, jadi diganti foto realistis.'; return kind === 'video' ? 'Klip 4–8 detik dibuat Veo. Hanya untuk akun Gemini API berbayar: biaya dihitung per detik video dan tiap klip butuh 1–5 menit. Bila gagal, otomatis diganti foto realistis.' : 'Foto dibuat Imagen/Gemini Image, lalu diberi gerak kamera pelan. Butuh akun yang mendukung pembuatan gambar.'; }
let P = newProject('talk');
const R = {
  id: null, file: null, url: '', srcW: 0, srcH: 0, voice: null, voiceP: null, voiceBlob: null,
  media: new Map(), playing: false, sel: null, panel: 'ai', busy: false, steps: {}, lastErr: '',
  hist: [], redo: [], light: isMobile, apiKey: store.get('apiKey', ''), model: (m => !m || m === 'gemini-flash-latest' ? 'auto' : m)(store.get('model', 'auto')),
  attach: [], tlZoom: 1
};
const proj = () => P;

// ================= TEKS: tata letak & animasi =================
// Sintaks: *kata* = kata kunci (diberi gaya kata kunci).
function tokenize(text, upper) {
  const out = []; let em = false;
  for (const raw of String(text || '').split(/\s+/).filter(Boolean)) {
    let w = raw, on = em;
    if (w.startsWith('*')) { on = true; w = w.slice(1); }
    let closes = false; if (w.endsWith('*')) { closes = true; w = w.slice(0, -1); }
    w = w.replace(/\*/g, '');
    if (w) out.push({ t: upper ? w.toUpperCase() : w, em: on });
    em = on && !closes;
  }
  return out;
}
const plain = s => String(s || '').replace(/\*/g, '');
function wrapToks(ctx, toks, maxW, sp) {
  const lines = []; let line = [], lw = 0;
  for (const tk of toks) {
    const w = ctx.measureText(tk.t).width, add = line.length ? sp + w : w;
    if (line.length && lw + add > maxW) { lines.push({ toks: line, w: lw }); line = [{ ...tk, w }]; lw = w; }
    else { line.push({ ...tk, w }); lw += add; }
  }
  if (line.length) lines.push({ toks: line, w: lw });
  return lines;
}
function layoutText(ctx, text, o) {
  const toks = Array.isArray(text) ? text : tokenize(text, o.upper);
  let size = o.size; const min = o.min ?? o.size * .45, wt = o.weight;
  let lines;
  for (;;) {
    ctx.font = font(o.fam, size, wt);
    lines = wrapToks(ctx, toks, o.maxW, size * .26);
    const widest = Math.max(0, ...lines.map(l => l.w));
    if ((lines.length <= (o.lines ?? 3) && widest <= o.maxW) || size <= min) break;
    size *= .93;
  }
  const lh = size * (o.lh ?? 1.08);
  return { lines, size, lh, fam: o.fam, weight: wt, h: lines.length * lh, w: Math.max(0, ...lines.map(l => l.w)) };
}
const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&@';
// Gambar blok teks beranimasi. Mengembalikan tinggi blok.
function drawText(ctx, L, o) {
  const a = o.anim || {}, inK = a.in || 'rise', split = (inK === 'type' || inK === 'scramble') ? 'char' : (inK === 'mask' ? 'line' : (a.split || 'word'));
  const ez = EZ[a.ease] || EZ.smooth, age = o.age ?? 9, left = o.left ?? 9, size = L.size, sp = size * .26;
  const kw = o.kw || 'color', ac = o.emColor || '#56B4E9', ac2 = o.em2 || ac, base = o.color || '#fff';
  const exitK = ease(left / .28), exitDy = (1 - exitK) * size * .18;
  const floatDy = a.emph === 'float' ? Math.sin(age * 2.1) * size * .05 : 0;
  ctx.save();
  ctx.font = font(L.fam, size, L.weight); ctx.textBaseline = 'alphabetic'; ctx.lineJoin = 'round';
  // susun unit animasi
  const units = []; let wi = 0, ci = 0;
  L.lines.forEach((ln, li) => {
    let x = o.align === 'left' ? o.x : o.align === 'right' ? o.x - ln.w : o.x - ln.w / 2;
    const y = o.y + li * L.lh + size * .86;
    const lineUnit = { items: [], li, x0: x, y, w: ln.w };
    for (const tk of ln.toks) {
      if (split === 'char') {
        let cx = x;
        for (const ch of [...tk.t]) { const cw = ctx.measureText(ch).width; units.push({ items: [{ t: ch, x: cx, y, w: cw, em: tk.em, wi, ci }], i: ci, li, y }); cx += cw; ci++; }
      } else if (split === 'word') units.push({ items: [{ t: tk.t, x, y, w: tk.w, em: tk.em, wi }], i: wi, li, y });
      else lineUnit.items.push({ t: tk.t, x, y, w: tk.w, em: tk.em, wi });
      x += tk.w + sp; wi++;
    }
    if (split === 'line') { lineUnit.i = li; units.push(lineUnit); }
    else if (split === 'none') { if (!units.length) units.push({ items: [], i: 0, li: 0, y }); units[0].items.push(...lineUnit.items); }
  });
  const st = split === 'char' ? (inK === 'type' ? .035 : .024) : split === 'word' ? .075 : split === 'line' ? .15 : 0;
  const dur = split === 'char' ? .24 : .42;
  for (const u of units) {
    const d0 = u.i * st, raw = (age - d0) / dur;
    let p = inK === 'type' ? (age >= d0 ? 1 : 0) : ez(raw), alpha = clamp(inK === 'pop' ? raw * 2.5 : raw * 1.6, 0, 1);
    if (inK === 'type' || inK === 'scramble') alpha = age >= d0 - (inK === 'scramble' ? .25 : 0) ? 1 : 0;
    if (alpha <= 0) continue;
    const bx = u.items.length ? u.items[0].x : 0, ex = u.items.length ? u.items[u.items.length - 1].x + u.items[u.items.length - 1].w : 0;
    const cx = (bx + ex) / 2, cy = u.y - size * .35;
    ctx.save();
    ctx.globalAlpha = alpha * exitK * (o.alpha ?? 1);
    ctx.translate(0, exitDy * -1 + floatDy);
    if (inK === 'mask') { ctx.beginPath(); ctx.rect(-9999, u.y - size * 1.05, 99999, size * 1.32); ctx.clip(); ctx.translate(0, (1 - p) * size * 1.15); }
    else if (inK === 'rise') ctx.translate(0, (1 - p) * size * .55);
    else if (inK === 'drop') ctx.translate(0, -(1 - p) * size * .55);
    else if (inK === 'left') ctx.translate(-(1 - p) * size * 1.3, 0);
    else if (inK === 'right') ctx.translate((1 - p) * size * 1.3, 0);
    else if (inK === 'pop') { const k = .35 + .65 * p; ctx.translate(cx, cy); ctx.scale(k, k); ctx.translate(-cx, -cy); }
    else if (inK === 'blur' && p < 1 && 'filter' in ctx) ctx.filter = `blur(${((1 - p) * size * .12).toFixed(1)}px)`;
    for (const it of u.items) drawItem(ctx, it, { o, age, size, ac, ac2, base, kw, a, inK, d0, i: u.i });
    ctx.restore();
  }
  // kursor ketikan
  if (inK === 'type' && units.length) {
    const lastI = Math.min(units.length - 1, Math.floor(age / st)), u = units[lastI];
    if (u && age < units.length * st + .8 && Math.floor(age * 3) % 2 === 0) { const it = u.items[0]; ctx.fillStyle = ac; ctx.globalAlpha = exitK; ctx.fillRect(it.x + it.w + size * .04, it.y - size * .8, Math.max(2, size * .06), size * .92); }
  }
  ctx.restore();
  return L.h;
}
function drawItem(ctx, it, c) {
  const { o, age, size, ac, ac2, base, kw, a } = c;
  let txt = it.t;
  if (c.inK === 'scramble' && age < c.d0 + .22 && txt.trim()) txt = GLYPHS[(hash(it.ci + ':' + Math.floor(age * 18)) % GLYPHS.length)];
  ctx.save();
  if (it.em) {
    if (a.emph === 'pulse') { const k = 1 + .07 * Math.sin(age * 6); const cx = it.x + it.w / 2, cy = it.y - size * .35; ctx.translate(cx, cy); ctx.scale(k, k); ctx.translate(-cx, -cy); }
    if (a.emph === 'shake') ctx.translate(Math.sin(age * 47 + it.wi) * size * .025, Math.cos(age * 53 + it.wi) * size * .02);
  }
  if (a.emph === 'wave') ctx.translate(0, Math.sin(age * 5 + (it.ci ?? it.wi) * .55) * size * .06);
  let fill = base, textCol = base;
  if (it.em) {
    const grow = clamp((age - .25) / .4, 0, 1);
    if (kw === 'marker') { ctx.fillStyle = hexA(ac2, .92); const pad = size * .1; ctx.fillRect(it.x - pad, it.y - size * .62, (it.w + pad * 2) * ease(grow), size * .58); textCol = onDark(ac2); }
    else if (kw === 'box') { ctx.fillStyle = ac; const pad = size * .12; rrect(ctx, it.x - pad, it.y - size * .9, it.w + pad * 2, size * 1.1, size * .14); ctx.fill(); textCol = onDark(ac); }
    else if (kw === 'underline') { ctx.fillStyle = ac; ctx.fillRect(it.x, it.y + size * .1, it.w * ease(grow), Math.max(2, size * .08)); textCol = base; }
    else if (kw === 'gradient') { const g = ctx.createLinearGradient(it.x, 0, it.x + it.w, 0); g.addColorStop(0, ac); g.addColorStop(1, ac2); textCol = g; }
    else textCol = ac;
    if (a.emph === 'glow') { ctx.shadowColor = ac; ctx.shadowBlur = size * (.25 + .15 * Math.sin(age * 4)); }
  }
  fill = textCol;
  if (o.stroke && !(it.em && (kw === 'box' || kw === 'marker'))) { ctx.lineWidth = o.strokeW ?? size * .14; ctx.strokeStyle = o.stroke; ctx.strokeText(txt, it.x, it.y); }
  if (o.shadow && !it.em) { ctx.shadowColor = o.shadow; ctx.shadowBlur = size * .25; ctx.shadowOffsetY = size * .04; }
  ctx.fillStyle = fill; ctx.fillText(txt, it.x, it.y);
  ctx.restore();
}
function rrect(ctx, x, y, w, h, r) { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); }
// teks satu baris sederhana (dipotong bila terlalu panjang)
function textLine(ctx, s, x, y, o) {
  ctx.save(); ctx.font = font(o.fam, o.size, o.weight); ctx.textAlign = o.align || 'left'; ctx.textBaseline = 'alphabetic';
  let str = String(s || ''); if (o.maxW) while (str.length > 3 && ctx.measureText(str).width > o.maxW) str = str.slice(0, -2).trimEnd() + '…';
  if (o.stroke) { ctx.lineJoin = 'round'; ctx.lineWidth = o.strokeW ?? o.size * .14; ctx.strokeStyle = o.stroke; ctx.strokeText(str, x, y); }
  ctx.fillStyle = o.color || '#fff'; ctx.fillText(str, x, y); const w = ctx.measureText(str).width; ctx.restore(); return w;
}
function wrapPlain(ctx, s, maxW, fam, size, weight, maxLines = 3) {
  ctx.font = font(fam, size, weight);
  const lines = wrapToks(ctx, tokenize(s, false), maxW, size * .26).slice(0, maxLines);
  return lines.map(l => l.toks.map(t => t.t).join(' '));
}

// ================= CAPTION =================
const capCache = new WeakMap();
function capGroups(p) {
  const c = capCache.get(p), max = clamp(p.cap.maxWords | 0, 1, 8) * (p.cap.mode === 'calm' ? 2 : 1);
  if (c && c.words === p.words && c.max === max && c.mode === p.cap.mode) return c.groups;
  const W = p.words, groups = []; let cur = [];
  for (let i = 0; i < W.length; i++) {
    const prev = W[i - 1];
    if (cur.length && (p.cap.mode === 'single' || cur.length >= max || (W[i].s - prev.e) > .6 || /[.!?;:]$/.test(prev.w) || (cur.length >= 2 && /,$/.test(prev.w)))) { groups.push(cur); cur = []; }
    cur.push(i);
  }
  if (cur.length) groups.push(cur);
  const gs = groups.map(ix => ({ ix, s: W[ix[0]].s, e: W[ix[ix.length - 1]].e }));
  gs.forEach((g, k) => { const nx = gs[k + 1]; g.e2 = nx ? Math.min(nx.s, g.e + .7) : g.e + .7; });
  capCache.set(p, { words: p.words, max, mode: p.cap.mode, groups: gs });
  return gs;
}
function drawCaptions(ctx, W, H, u, t, p, Lk) {
  if (!p.cap.on || !p.words.length) return;
  const tt = t - (p.cap.offset || 0), gs = capGroups(p);
  const g = gs.find(g => tt >= g.s && tt < g.e2); if (!g) return;
  const fam = p.cap.font || Lk.capFont || Lk.fontD, size = u * p.cap.size, mode = p.cap.mode, up = !!p.cap.upper;
  const ac = Lk.accent, ac2 = Lk.accent2, cy = H * p.cap.pos, age = tt - g.s;
  const wtxt = i => up ? p.words[i].w.toUpperCase() : p.words[i].w;
  const isKw = i => p.keywords.includes(i);
  const activeI = g.ix.find(i => tt >= p.words[i].s && tt < p.words[i].e + .05);
  ctx.save(); ctx.lineJoin = 'round'; ctx.textBaseline = 'alphabetic';
  if (mode === 'single') {
    const i = activeI ?? g.ix[g.ix.length - 1], w = p.words[i], a2 = tt - w.s, s2 = size * 1.45;
    const L = layoutText(ctx, [{ t: wtxt(i), em: isKw(i) }], { fam, size: s2, maxW: W * .86, lines: 1 });
    const k = .7 + .3 * EZ.back(a2 / .2); ctx.translate(W / 2, cy); ctx.scale(k, k); ctx.translate(-W / 2, -cy);
    drawText(ctx, L, { x: W / 2, y: cy - L.size * .55, align: 'center', color: '#fff', emColor: ac, kw: 'color', stroke: 'rgba(0,0,0,.85)', strokeW: L.size * .16, anim: { in: 'fade', split: 'none' } });
  } else if (mode === 'tiered') {
    let punch = g.ix.find(isKw); if (punch == null) punch = g.ix.reduce((b, i) => p.words[i].w.length > p.words[b].w.length ? i : b, g.ix[0]);
    const lead = g.ix.filter(i => i !== punch);
    const shown = lead.filter(i => tt >= p.words[i].s - .05);
    const Ls = layoutText(ctx, shown.map(i => ({ t: wtxt(i), em: false })), { fam: Lk.fontB || fam, size: size * .72, maxW: W * .86, lines: 2, weight: 700 });
    const Lp = layoutText(ctx, [{ t: plain(wtxt(punch)).toUpperCase(), em: true }], { fam: Lk.fontD || fam, size: size * 1.75, maxW: W * .88, lines: 1 });
    const total = Ls.h + Lp.h * .95, top = cy - total / 2;
    if (shown.length) drawText(ctx, Ls, { x: W / 2, y: top, align: 'center', color: '#fff', stroke: 'rgba(0,0,0,.8)', strokeW: Ls.size * .15, anim: { in: 'fade', split: 'none' } });
    if (tt >= p.words[punch].s - .05) {
      const a2 = tt - p.words[punch].s, k = .5 + .5 * EZ.back(a2 / .25), cx = W / 2, cyy = top + Ls.h + Lp.size * .5;
      ctx.save(); ctx.translate(cx, cyy); ctx.scale(k, k); ctx.translate(-cx, -cyy);
      drawText(ctx, Lp, { x: W / 2, y: top + Ls.h - Lp.size * .05, align: 'center', color: '#fff', emColor: ac, em2: ac2, kw: Lk.kw === 'marker' || Lk.kw === 'box' ? Lk.kw : 'gradient', stroke: 'rgba(0,0,0,.85)', strokeW: Lp.size * .12, anim: { in: 'fade', split: 'none', emph: Lk.emph } });
      ctx.restore();
    }
  } else {
    // pop / box / karaoke / calm: satu kelompok kata
    const toks = g.ix.map(i => ({ t: wtxt(i), em: false, i }));
    const L = layoutText(ctx, toks, { fam, size: mode === 'calm' ? size * .78 : size, maxW: W * .86, lines: mode === 'calm' ? 3 : 2, weight: mode === 'calm' ? BODY_W(fam) + 100 : undefined });
    const top = cy - L.h / 2;
    let k = 1; if (mode === 'pop') k = .82 + .18 * EZ.back(age / .22);
    ctx.globalAlpha = clamp(age / .1, 0, 1) * clamp((g.e2 - tt) / .12, 0, 1);
    if (mode === 'calm') { const pad = L.size * .45; ctx.fillStyle = 'rgba(0,0,0,.58)'; rrect(ctx, W / 2 - L.w / 2 - pad, top - pad * .6, L.w + pad * 2, L.h + pad * 1.1, L.size * .3); ctx.fill(); }
    ctx.translate(W / 2, cy); ctx.scale(k, k); ctx.translate(-W / 2, -cy);
    ctx.font = font(fam, L.size, L.weight); const sp = L.size * .26;
    let n = 0;
    L.lines.forEach((ln, li) => {
      let x = W / 2 - ln.w / 2; const y = top + li * L.lh + L.size * .86;
      for (const tk of ln.toks) {
        const i = g.ix[n++], w = p.words[i], active = i === activeI, spoken = tt >= w.s;
        let col = '#fff';
        if (mode === 'pop') col = active ? ac : (isKw(i) ? ac2 : '#fff');
        if (mode === 'karaoke') col = spoken ? (isKw(i) ? ac2 : ac) : 'rgba(255,255,255,.92)';
        if (mode === 'calm') col = isKw(i) ? ac2 : '#fff';
        if (mode === 'box' && active) {
          const pd = L.size * .16; ctx.fillStyle = ac; rrect(ctx, x - pd, y - L.size * .92, tk.w + pd * 2, L.size * 1.18, L.size * .18); ctx.fill();
          ctx.fillStyle = onDark(ac); ctx.fillText(tk.t, x, y);
        } else {
          if (mode !== 'calm') { ctx.lineWidth = L.size * .17; ctx.strokeStyle = 'rgba(0,0,0,.88)'; ctx.strokeText(tk.t, x, y); }
          ctx.fillStyle = mode === 'box' ? (isKw(i) ? ac2 : '#fff') : col; ctx.fillText(tk.t, x, y);
        }
        x += tk.w + sp;
      }
    });
  }
  ctx.restore();
}

// ================= LATAR ADEGAN, GRADING, PANEL =================
let NOISE = null;
function noiseTile() {
  if (NOISE) return NOISE;
  const c = document.createElement('canvas'); c.width = c.height = 160; const x = c.getContext('2d'); const d = x.createImageData(160, 160);
  for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
  x.putImageData(d, 0, 0); return (NOISE = c);
}
function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function sceneColors(Lk) {
  const tone = Lk.tone || 'dark';
  if (tone === 'light') return { base: Lk.sceneBg === 'paper' ? '#F2EDE4' : '#F3F6F8', base2: '#E2E9EF', text: Lk.ink || '#0B1620', sub: hexA(Lk.ink || '#0B1620', .72), light: true };
  if (tone === 'accent') return { base: hexMix(Lk.accent, '#000000', .45), base2: hexMix(Lk.accent, '#000000', .7), text: '#FFFFFF', sub: 'rgba(255,255,255,.82)', light: false };
  if (Lk.sceneBg === 'paper') return { base: Lk.ink && lum(Lk.ink) < .2 && Lk.ink !== '#0B1620' ? Lk.ink : '#1D3328', base2: '#162820', text: '#F4F1DE', sub: 'rgba(244,241,222,.8)', light: false };
  return { base: '#08131C', base2: hexMix('#08131C', Lk.accent, .14), text: '#FFFFFF', sub: 'rgba(255,255,255,.8)', light: false };
}
function drawBg(ctx, W, H, t, Lk, kind, seed = 1) {
  const C = sceneColors(Lk), u = Math.min(W, H), ac = Lk.accent, ac2 = Lk.accent2; kind = kind || Lk.sceneBg || 'mesh';
  const g0 = ctx.createLinearGradient(0, 0, W * .3, H); g0.addColorStop(0, C.base2); g0.addColorStop(1, C.base);
  ctx.fillStyle = g0; ctx.fillRect(0, 0, W, H);
  const A = C.light ? .5 : 1;
  ctx.save();
  if (kind === 'mesh' || kind === 'stars') {
    const blobs = [[ac, .25, .3, 1.1], [ac2, .75, .62, .9], [hexMix(ac, ac2, .5), .4, .85, 1.2]];
    blobs.forEach(([c, bx, by, sp], i) => {
      const x = W * (bx + .12 * Math.sin(t * .35 * sp + i * 2)), y = H * (by + .1 * Math.cos(t * .3 * sp + i)), r = u * (.65 + .1 * Math.sin(t * .5 + i));
      const g = ctx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, hexA(c, (kind === 'stars' ? .22 : .5) * A)); g.addColorStop(1, hexA(c, 0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    });
    if (kind === 'stars') { const r = rng(seed * 7 + 3); for (let i = 0; i < 140; i++) { const x = (r() * W + t * 6 * (r() + .2)) % W, y = r() * H, tw = .4 + .6 * Math.abs(Math.sin(t * (1 + r() * 2) + i)); ctx.fillStyle = `rgba(255,255,255,${.75 * tw})`; const s = u * (.0015 + r() * .003); ctx.fillRect(x, y, s, s); } }
  } else if (kind === 'grid') {
    const hz = H * .5, gl = ctx.createRadialGradient(W / 2, hz, 0, W / 2, hz, u * .9); gl.addColorStop(0, hexA(ac, .4 * A)); gl.addColorStop(1, hexA(ac, 0)); ctx.fillStyle = gl; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = hexA(ac, .5 * A); ctx.lineWidth = Math.max(1, u * .002);
    for (let i = -12; i <= 12; i++) { ctx.beginPath(); ctx.moveTo(W / 2 + i * u * .02, hz); ctx.lineTo(W / 2 + i * u * .35, H); ctx.stroke(); }
    const off = (t * .35) % 1;
    for (let k = 0; k < 14; k++) { const z = (k + off) / 14, y = hz + (H - hz) * z * z; ctx.globalAlpha = z; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    ctx.globalAlpha = 1;
    for (let k = 0; k < 8; k++) { const z = (k + off) / 8, y = hz - (hz) * z * z * .9; ctx.globalAlpha = z * .35; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  } else if (kind === 'dots') {
    const gap = u * .055, cx = W / 2, cy = H * .45;
    ctx.fillStyle = hexA(ac, .55 * A);
    for (let y = gap / 2; y < H; y += gap) for (let x = gap / 2; x < W; x += gap) { const d = Math.hypot(x - cx, y - cy) / u; const r = gap * (.08 + .16 * (.5 + .5 * Math.sin(d * 9 - t * 2.4))); ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); }
  } else if (kind === 'rays') {
    const cx = W / 2, cy = H * .42, R = Math.hypot(W, H);
    ctx.translate(cx, cy); ctx.rotate(t * .12);
    for (let i = 0; i < 16; i++) { ctx.fillStyle = hexA(i % 2 ? ac : ac2, (C.light ? .14 : .16)); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R, i * Math.PI / 8, (i + .5) * Math.PI / 8); ctx.closePath(); ctx.fill(); }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, u * .6); g.addColorStop(0, hexA(ac2, .45 * A)); g.addColorStop(1, hexA(ac2, 0)); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  } else if (kind === 'bokeh') {
    const r = rng(seed * 13 + 5);
    for (let i = 0; i < 22; i++) {
      const rad = u * (.03 + r() * .12), x = (r() * W + Math.sin(t * .4 + i) * u * .04), y = ((r() * H - t * u * (.02 + r() * .05)) % (H + rad * 2) + H + rad * 2) % (H + rad * 2) - rad;
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad); const c = i % 3 ? ac : ac2;
      g.addColorStop(0, hexA(c, (.15 + r() * .3) * A)); g.addColorStop(.7, hexA(c, .08 * A)); g.addColorStop(1, hexA(c, 0)); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rad, 0, 7); ctx.fill();
    }
  } else if (kind === 'stripes') {
    const w = u * .09, off = (t * u * .05) % (w * 2);
    ctx.translate(W / 2, H / 2); ctx.rotate(-Math.PI / 5); ctx.fillStyle = C.light ? hexA(Lk.ink || '#000', .05) : hexA(ac, .1);
    for (let x = -Math.hypot(W, H) + off; x < Math.hypot(W, H); x += w * 2) ctx.fillRect(x, -Math.hypot(W, H), w, Math.hypot(W, H) * 2);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  } else if (kind === 'rings') {
    const cx = W / 2, cy = H * .45, gap = u * .09, max = Math.hypot(W, H) * .6;
    ctx.lineWidth = u * .012;
    for (let k = 0; k < 12; k++) { const r = (k * gap + t * u * .06) % max; ctx.strokeStyle = hexA(k % 2 ? ac : ac2, .35 * (1 - r / max) * A + .03); ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.stroke(); }
  } else if (kind === 'paper') {
    ctx.globalAlpha = C.light ? .07 : .1; ctx.fillStyle = ctx.createPattern(noiseTile(), 'repeat'); ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1;
    if (!C.light) { ctx.strokeStyle = 'rgba(255,255,255,.05)'; ctx.lineWidth = u * .04; const r = rng(seed); for (let i = 0; i < 5; i++) { ctx.beginPath(); const y = r() * H; ctx.moveTo(-10, y); ctx.bezierCurveTo(W * .3, y + r() * 60 - 30, W * .7, y + r() * 60 - 30, W + 10, y + r() * 40); ctx.stroke(); } }
  } else {
    const g = ctx.createRadialGradient(W * .3, H * .2, 0, W * .3, H * .2, u); g.addColorStop(0, hexA(ac, .28 * A)); g.addColorStop(1, hexA(ac, 0)); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }
  ctx.restore();
  return C;
}
const GRADE = { none: '', warm: 'sepia(.18) saturate(1.15) brightness(1.03)', cool: 'saturate(1.05) hue-rotate(-10deg) brightness(1.02) contrast(1.05)', punchy: 'contrast(1.18) saturate(1.3)', film: 'contrast(.95) saturate(.85) sepia(.12) brightness(1.02)', fade: 'contrast(.88) brightness(1.06) saturate(.8)', mono: 'grayscale(1) contrast(1.12)' };
function finishFrame(ctx, W, H, t, Lk) {
  const u = Math.min(W, H);
  if (Lk.vignette > 0) { const g = ctx.createRadialGradient(W / 2, H / 2, u * .35, W / 2, H / 2, Math.hypot(W, H) * .62); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(0,0,0,${Lk.vignette})`); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
  if (Lk.grain > 0) { ctx.save(); ctx.globalAlpha = Lk.grain * .5; ctx.globalCompositeOperation = 'overlay'; const p = ctx.createPattern(noiseTile(), 'repeat'); const o = (Math.floor(t * 24) * 37) % 160; ctx.translate(-o, -o * .7); ctx.fillStyle = p; ctx.fillRect(0, 0, W + 160, H + 160); ctx.restore(); }
}
function cardStyle(Lk) {
  switch (Lk.card) {
    case 'solid': return { fill: 'rgba(8,15,24,.93)', stroke: null, text: '#fff', sub: 'rgba(255,255,255,.78)' };
    case 'light': return { fill: 'rgba(255,255,255,.97)', stroke: null, text: Lk.ink || '#0B1620', sub: hexA(Lk.ink || '#0B1620', .7), shadow: true };
    case 'outline': return { fill: 'rgba(3,10,16,.6)', stroke: Lk.accent, text: '#fff', sub: 'rgba(255,255,255,.8)' };
    case 'paper': return { fill: '#FBF6EC', stroke: null, text: Lk.ink || '#2B1D14', sub: hexA(Lk.ink || '#2B1D14', .72), shadow: true, tape: true };
    case 'sketch': return { fill: 'rgba(255,255,255,.96)', stroke: Lk.ink || '#22223B', text: Lk.ink || '#22223B', sub: hexA(Lk.ink || '#22223B', .72), sketch: true };
    case 'block': return { fill: Lk.accent, stroke: null, text: onDark(Lk.accent), sub: hexA(onDark(Lk.accent), .8), hard: true };
    default: return { fill: 'rgba(10,20,32,.64)', stroke: 'rgba(255,255,255,.16)', text: '#fff', sub: 'rgba(255,255,255,.8)' };
  }
}
function drawPanel(ctx, x, y, w, h, Lk, u, P2, t = 0) {
  const r = u * (Lk.card === 'block' ? .012 : .03);
  ctx.save();
  if (P2.hard) { ctx.fillStyle = Lk.ink && lum(Lk.ink) < .3 ? Lk.ink : '#0B1620'; rrect(ctx, x + u * .014, y + u * .014, w, h, r); ctx.fill(); }
  if (P2.shadow) { ctx.shadowColor = 'rgba(0,0,0,.28)'; ctx.shadowBlur = u * .045; ctx.shadowOffsetY = u * .012; }
  ctx.fillStyle = P2.fill; rrect(ctx, x, y, w, h, r); ctx.fill(); ctx.shadowColor = 'transparent';
  if (P2.sketch) {
    ctx.strokeStyle = P2.stroke; ctx.lineWidth = Math.max(1.5, u * .004); const j = u * .006, rr2 = rng(Math.floor(t * 4) + 9);
    for (let k = 0; k < 2; k++) { ctx.beginPath(); ctx.moveTo(x + rr2() * j, y + rr2() * j); ctx.lineTo(x + w + rr2() * j, y - rr2() * j); ctx.lineTo(x + w - rr2() * j, y + h + rr2() * j); ctx.lineTo(x - rr2() * j, y + h - rr2() * j); ctx.closePath(); ctx.stroke(); }
  } else if (P2.stroke) { ctx.strokeStyle = P2.stroke; ctx.lineWidth = Math.max(1.5, u * .003); rrect(ctx, x, y, w, h, r); ctx.stroke(); }
  if (P2.tape) { ctx.fillStyle = hexA(Lk.accent2, .75); ctx.translate(x + w / 2, y); ctx.rotate(-.05); ctx.fillRect(-u * .07, -u * .018, u * .14, u * .036); }
  ctx.restore();
}
function textAnim(Lk) { return { in: Lk.textIn, split: Lk.split, ease: Lk.ease, emph: Lk.emph }; }
function posTop(pos, H, u, h, isLand) {
  if (pos === 'center') return H * .42 - h / 2;
  if (pos === 'bottom') return Math.min(H * .62, H * .7 - h);
  return H * (isLand ? .07 : .1);
}
function countUp(txt, p) {
  const m = /^(\D*?)(\d[\d.,]*)(.*)$/.exec(String(txt || '')); if (!m || p >= 1) return String(txt || '');
  const [, pre, num, suf] = m;
  if (/^\d{1,3}(\.\d{3})+$/.test(num)) return pre + Math.round(parseInt(num.replace(/\./g, ''), 10) * p).toLocaleString('id-ID') + suf;
  const dm = /^(\d+)([.,])(\d+)$/.exec(num);
  if (dm) return pre + (parseFloat(dm[1] + '.' + dm[3]) * p).toFixed(dm[3].length).replace('.', dm[2]) + suf;
  if (/^\d+$/.test(num)) return pre + Math.round(parseInt(num, 10) * p) + suf;
  return String(txt);
}

// ================= ELEMEN OVERLAY =================
function vis(el, t, din = .35, dout = .3) { return Math.min(ease((t - el.start) / din), ease((el.end - t) / dout)); }
function drawOverlay(ctx, W, H, t, el, Lk, env) {
  const u = Math.min(W, H), age = t - el.start, left = el.end - t, land = W > H * 1.1, maxW = W * .86, an = textAnim(Lk);
  const v = vis(el, t); if (v <= 0) return;
  const pl = cardStyle(Lk);
  ctx.save(); ctx.textBaseline = 'alphabetic';
  switch (el.type) {
    case 'title': {
      const L = layoutText(ctx, el.text, { fam: Lk.fontD, size: u * (land ? .09 : .115), maxW, lines: 3, upper: Lk.upper });
      const subH = el.sub ? u * .08 : 0, top = posTop(el.pos, H, u, L.h + subH, land);
      if (!env.behind) { const g = ctx.createLinearGradient(0, top - u * .12, 0, top + L.h + subH + u * .1); g.addColorStop(0, `rgba(0,0,0,${.55 * v})`); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(0, Math.max(0, top - u * .12), W, L.h + subH + u * .22); }
      drawText(ctx, L, { x: W / 2, y: top, align: 'center', color: '#fff', emColor: Lk.accent, em2: Lk.accent2, kw: Lk.kw, age, left, anim: an, stroke: env.behind ? null : 'rgba(0,0,0,.35)', strokeW: L.size * .06, shadow: env.behind ? 'rgba(0,0,0,.35)' : null });
      const by = top + L.h + u * .012, bw = L.w * .45 * ease((age - .3) / .5);
      ctx.globalAlpha = ease(left / .3); ctx.fillStyle = Lk.accent; rrect(ctx, (W - bw) / 2, by, bw, u * .011, u * .006); ctx.fill();
      if (el.sub) { ctx.globalAlpha = ease((age - .45) / .35) * ease(left / .3); textLine(ctx, plain(el.sub), W / 2, by + u * .065, { fam: Lk.fontB, size: u * .04, weight: 700, align: 'center', color: Lk.accent2, maxW, stroke: 'rgba(0,0,0,.6)', strokeW: u * .008 }); }
      break;
    }
    case 'card': case 'list': case 'quote': {
      const pad = u * .045, bar = el.type === 'quote' ? 0 : u * .012, inner = maxW - pad * 2 - bar;
      const L = layoutText(ctx, el.text, { fam: Lk.fontD, size: u * (el.type === 'list' ? .052 : el.type === 'quote' ? .056 : .062), maxW: inner, lines: el.type === 'quote' ? 4 : 2, upper: Lk.upper && el.type !== 'quote' });
      let subLines = [], sS = u * .036; if (el.sub && el.type !== 'list') subLines = wrapPlain(ctx, plain(el.sub), inner, Lk.fontB, sS, BODY_W(Lk.fontB), 3);
      const items = el.type === 'list' ? (el.items || []).map(x => typeof x === 'string' ? x : x.label).filter(Boolean).slice(0, 5) : [];
      const iS = u * .04, ilh = iS * 1.6, qh = el.type === 'quote' ? u * .07 : 0;
      ctx.font = font(Lk.fontB, iS, 650); const iw = Math.max(0, ...items.map(s => ctx.measureText(s).width + iS * 1.5));
      const bw = Math.min(maxW, Math.max(L.w, iw, ...subLines.map(s => (ctx.font = font(Lk.fontB, sS, BODY_W(Lk.fontB)), ctx.measureText(s).width))) + pad * 2 + bar);
      const bh = pad * 2 + qh + L.h + (subLines.length ? u * .016 + subLines.length * sS * 1.35 : 0) + (items.length ? u * .02 + items.length * ilh : 0);
      const x = (W - bw) / 2, y = posTop(el.pos, H, u, bh, land) + (1 - ease(age / .4)) * u * .05;
      ctx.globalAlpha = v; drawPanel(ctx, x, y, bw, bh, Lk, u, pl, t);
      if (bar) { ctx.fillStyle = Lk.card === 'block' ? (Lk.ink || '#0B1620') : Lk.accent; rrect(ctx, x, y, bar, bh, [u * .03, 0, 0, u * .03]); ctx.fill(); }
      let cy = y + pad;
      if (qh) { textLine(ctx, '“', x + pad, cy + qh * .95, { fam: 'Playfair Display', size: u * .12, weight: 800, color: Lk.accent }); cy += qh; }
      ctx.globalAlpha = 1;
      drawText(ctx, L, { x: x + pad + bar, y: cy, align: 'left', color: el.type === 'list' && Lk.card !== 'block' ? (pl.text === '#fff' ? Lk.accent : pl.text) : pl.text, emColor: Lk.card === 'block' ? (Lk.ink || '#0B1620') : (pl.text === '#fff' ? Lk.accent : hexMix(Lk.accent, '#000', .25)), em2: Lk.accent2, kw: Lk.kw, age, left, anim: { ...an, in: an.in === 'type' || an.in === 'scramble' ? an.in : 'rise' }, alpha: v });
      cy += L.h;
      if (subLines.length) { cy += u * .016; ctx.globalAlpha = v * ease((age - .3) / .4); subLines.forEach(s => { cy += sS * 1.05; textLine(ctx, el.type === 'quote' ? '— ' + s : s, x + pad + bar, cy, { fam: Lk.fontB, size: sS, weight: BODY_W(Lk.fontB), color: pl.sub }); cy += sS * .3; }); }
      if (items.length) {
        cy += u * .02; const span = Math.max(.8, el.end - el.start - 1.2), stp = Math.min(.6, span / items.length);
        items.forEach((s, i) => {
          const r = ease((age - .35 - i * stp) / .3); if (r <= 0) { cy += ilh; return; }
          ctx.globalAlpha = v * r; const ix = x + pad + bar + (1 - r) * u * .03, mid = cy + ilh / 2, rad = iS * .42;
          ctx.fillStyle = Lk.card === 'block' ? (Lk.ink || '#0B1620') : Lk.accent; ctx.beginPath(); ctx.arc(ix + rad, mid, rad, 0, 7); ctx.fill();
          ctx.strokeStyle = Lk.card === 'block' ? Lk.accent : onDark(Lk.accent); ctx.lineWidth = rad * .32; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(ix + rad * .55, mid); ctx.lineTo(ix + rad * .9, mid + rad * .35); ctx.lineTo(ix + rad * 1.5, mid - rad * .38); ctx.stroke();
          textLine(ctx, s, ix + rad * 2 + iS * .45, mid + iS * .36, { fam: Lk.fontB, size: iS, weight: 650, color: pl.text, maxW: bw - pad * 2 - bar - rad * 3 });
          cy += ilh;
        });
      }
      break;
    }
    case 'stat': {
      const p = EZ.expo((age) / 1.1), txt = countUp(el.value || el.text, p);
      const L = layoutText(ctx, [{ t: txt, em: false }], { fam: Lk.fontD, size: u * .2, maxW, lines: 1 });
      const cy = el.pos === 'top' ? H * .2 : el.pos === 'bottom' ? H * .55 : H * .4;
      const glow = ctx.createRadialGradient(W / 2, cy, 0, W / 2, cy, u * .55); glow.addColorStop(0, `rgba(0,0,0,${.55 * v})`); glow.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = glow; ctx.fillRect(0, cy - u * .6, W, u * 1.2);
      const k = .55 + .45 * EZ.back(age / .45); ctx.globalAlpha = v;
      ctx.save(); ctx.translate(W / 2, cy); ctx.scale(k, k);
      ctx.font = font(Lk.fontD, L.size); const tw = ctx.measureText(txt).width;
      const g = ctx.createLinearGradient(-tw / 2, 0, tw / 2, 0); g.addColorStop(0, Lk.accent); g.addColorStop(1, Lk.accent2);
      ctx.lineJoin = 'round'; ctx.lineWidth = L.size * .06; ctx.strokeStyle = 'rgba(0,0,0,.55)'; ctx.strokeText(txt, -tw / 2, L.size * .35); ctx.fillStyle = g; ctx.fillText(txt, -tw / 2, L.size * .35);
      ctx.restore();
      if (el.text && el.value) { ctx.globalAlpha = v * ease((age - .35) / .35); textLine(ctx, plain(el.text), W / 2, cy + L.size * .35 + u * .075, { fam: Lk.fontB, size: u * .046, weight: 750, align: 'center', color: '#fff', maxW, stroke: 'rgba(0,0,0,.7)', strokeW: u * .009 }); }
      break;
    }
    case 'chips': {
      const items = (el.items || []).map(x => typeof x === 'string' ? x : x.label).filter(Boolean).slice(0, 6);
      const s = u * .042, ph = s * 1.9, gap = s * .45; ctx.font = font(Lk.fontB, s, 750);
      const ws = items.map(x => ctx.measureText(x).width + s * 1.6); const rows = []; let row = [], rw = 0;
      ws.forEach((w, i) => { if (row.length && rw + gap + w > maxW) { rows.push({ row, rw }); row = []; rw = 0; } row.push(i); rw += (row.length > 1 ? gap : 0) + w; });
      if (row.length) rows.push({ row, rw });
      const totalH = rows.length * (ph + gap); let y = posTop(el.pos || 'center', H, u, totalH, land);
      const stp = Math.min(.35, Math.max(.12, (el.end - el.start - 1) / Math.max(1, items.length)));
      rows.forEach(({ row, rw }) => { let x = (W - rw) / 2; row.forEach(i => {
        const r = EZ.back((age - i * stp) / .3); if (r > 0) {
          ctx.save(); ctx.globalAlpha = v * clamp(r, 0, 1); const cx = x + ws[i] / 2, cy = y + ph / 2; ctx.translate(cx, cy); ctx.scale(r, r); ctx.translate(-cx, -cy);
          const alt = i % 2 === 1; ctx.fillStyle = alt ? 'rgba(8,15,24,.75)' : Lk.accent; rrect(ctx, x, y, ws[i], ph, ph / 2); ctx.fill();
          if (alt) { ctx.strokeStyle = Lk.accent2; ctx.lineWidth = Math.max(1.5, u * .003); ctx.stroke(); }
          textLine(ctx, items[i], cx, cy + s * .36, { fam: Lk.fontB, size: s, weight: 750, align: 'center', color: alt ? Lk.accent2 : onDark(Lk.accent) }); ctx.restore();
        } x += ws[i] + gap; }); y += ph + gap; });
      break;
    }
    case 'lower': {
      const nS = u * .055, tS = u * .034, y = H * (land ? .7 : .6), x = W * .07;
      ctx.font = font(Lk.fontD, nS); const nw = ctx.measureText(plain(el.text)).width; ctx.font = font(Lk.fontB, tS, 600); const tw = ctx.measureText(plain(el.sub)).width;
      const bw = Math.min(W * .86, Math.max(nw, tw) + u * .07), grow = ease(age / .45), out = ease(left / .3);
      ctx.globalAlpha = out; ctx.fillStyle = Lk.accent; ctx.fillRect(x, y, u * .012, (nS + tS) * 1.5 * grow);
      ctx.save(); ctx.beginPath(); ctx.rect(x + u * .012, y - 5, bw * grow, (nS + tS) * 1.8); ctx.clip();
      drawPanel(ctx, x + u * .012, y, bw, nS * 1.4, { ...Lk, card: Lk.card === 'light' || Lk.card === 'paper' ? Lk.card : 'solid' }, u, cardStyle({ ...Lk, card: Lk.card === 'light' || Lk.card === 'paper' ? Lk.card : 'solid' }));
      textLine(ctx, plain(el.text), x + u * .045, y + nS * 1.05, { fam: Lk.fontD, size: nS, color: Lk.card === 'light' || Lk.card === 'paper' ? (Lk.ink || '#0B1620') : '#fff' });
      ctx.fillStyle = Lk.accent; ctx.fillRect(x + u * .012, y + nS * 1.4, Math.min(bw, tw + u * .06), tS * 1.6);
      textLine(ctx, plain(el.sub), x + u * .045, y + nS * 1.4 + tS * 1.15, { fam: Lk.fontB, size: tS, weight: 650, color: onDark(Lk.accent) });
      ctx.restore();
      break;
    }
    case 'callout': {
      const tx = (el.x ?? .62) * W, ty = (el.y ?? .4) * H, toLeft = tx > W / 2;
      const s = u * .042; ctx.font = font(Lk.fontB, s, 750); const lines = wrapPlain(ctx, plain(el.text), W * .42, Lk.fontB, s, 750, 2);
      ctx.font = font(Lk.fontB, s, 750); const lw = Math.max(...lines.map(l => ctx.measureText(l).width), 1);
      const bw = lw + s * 1.4, bh = lines.length * s * 1.3 + s * .9;
      const bx = clamp(toLeft ? tx - u * .3 - bw : tx + u * .3, W * .04, W * .96 - bw), by = clamp(ty - u * .22, H * .06, H * .8);
      const p = ease((age - .1) / .45); ctx.globalAlpha = ease(left / .3);
      const sx = toLeft ? bx + bw : bx, sy = by + bh / 2;
      ctx.strokeStyle = Lk.accent; ctx.lineWidth = Math.max(2, u * .005); ctx.lineCap = 'round'; ctx.setLineDash([u * .015, u * .012]);
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo((sx + tx) / 2, sy, lerp(sx, tx, p), lerp(sy, ty, p)); ctx.stroke(); ctx.setLineDash([]);
      if (p >= 1) { const pr = (age * 1.6) % 1; ctx.strokeStyle = hexA(Lk.accent, 1 - pr); ctx.beginPath(); ctx.arc(tx, ty, u * (.02 + .05 * pr), 0, 7); ctx.stroke(); ctx.fillStyle = Lk.accent; ctx.beginPath(); ctx.arc(tx, ty, u * .012, 0, 7); ctx.fill(); }
      const k = EZ.back(age / .35); ctx.save(); ctx.translate(bx + bw / 2, by + bh / 2); ctx.scale(k, k); ctx.translate(-(bx + bw / 2), -(by + bh / 2));
      ctx.fillStyle = Lk.accent; rrect(ctx, bx, by, bw, bh, s * .4); ctx.fill();
      lines.forEach((l, i) => textLine(ctx, l, bx + s * .7, by + s * .45 + (i + 1) * s * 1.2 - s * .15, { fam: Lk.fontB, size: s, weight: 750, color: onDark(Lk.accent) }));
      ctx.restore(); break;
    }
    case 'notif': {
      const nw = W * .88, s = u * .036, x = (W - nw) / 2, lines = wrapPlain(ctx, plain(el.text), nw - u * .16, Lk.fontB, s, 600, 2), nh = u * .08 + lines.length * s * 1.35;
      const y = H * .05 - (1 - EZ.back(age / .45)) * (nh + H * .06) - (1 - ease(left / .3)) * (nh + H * .06);
      ctx.shadowColor = 'rgba(0,0,0,.3)'; ctx.shadowBlur = u * .04; ctx.fillStyle = 'rgba(250,251,252,.96)'; rrect(ctx, x, y, nw, nh, u * .035); ctx.fill(); ctx.shadowColor = 'transparent';
      const ic = u * .055; ctx.fillStyle = Lk.accent; rrect(ctx, x + u * .03, y + u * .028, ic, ic, ic * .26); ctx.fill();
      textLine(ctx, (plain(el.sub) || 'A')[0].toUpperCase(), x + u * .03 + ic / 2, y + u * .028 + ic * .7, { fam: Lk.fontB, size: ic * .55, weight: 800, align: 'center', color: onDark(Lk.accent) });
      textLine(ctx, plain(el.sub) || 'Notifikasi', x + u * .1, y + u * .05, { fam: Lk.fontB, size: s * .85, weight: 800, color: '#111', maxW: nw * .55 });
      textLine(ctx, 'sekarang', x + nw - u * .03, y + u * .05, { fam: Lk.fontB, size: s * .75, weight: 500, align: 'right', color: '#777' });
      lines.forEach((l, i) => textLine(ctx, l, x + u * .1, y + u * .05 + (i + 1) * s * 1.35, { fam: Lk.fontB, size: s, weight: 550, color: '#222', maxW: nw - u * .14 }));
      break;
    }
    case 'sticker': {
      const k = EZ.back(age / .35) * ease(left / .25), x = (el.x ?? .78) * W, y = (el.y ?? .3) * H, s = u * .16;
      ctx.translate(x, y); ctx.rotate(Math.sin(age * 3) * .12); ctx.scale(k, k);
      ctx.shadowColor = 'rgba(0,0,0,.35)'; ctx.shadowBlur = u * .03; ctx.font = `${Math.round(s)}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(el.emoji || '✨', 0, 0);
      break;
    }
    case 'media': { // jendela kecil
      const f = env.frame(el.asset, t - el.start); const aw = f ? f.w : 16, ah = f ? f.h : 9;
      let w = W * .44, h = w * ah / aw; if (h > H * .32) { h = H * .32; w = h * aw / ah; }
      const x = W - w - W * .05, y = H * .1 + (1 - EZ.back(age / .45)) * -H * .2;
      ctx.globalAlpha = ease(left / .3); ctx.shadowColor = 'rgba(0,0,0,.4)'; ctx.shadowBlur = u * .04; ctx.fillStyle = '#fff'; rrect(ctx, x - 4, y - 4, w + 8, h + 8, u * .025); ctx.fill(); ctx.shadowColor = 'transparent';
      ctx.save(); rrect(ctx, x, y, w, h, u * .02); ctx.clip(); if (f) drawCover(ctx, f, x, y, w, h, 1 + .05 * (age / Math.max(1, el.end - el.start))); ctx.restore();
      if (el.text) textLine(ctx, plain(el.text), x + w / 2, y + h + u * .05, { fam: Lk.fontB, size: u * .032, weight: 700, align: 'center', color: '#fff', maxW: w, stroke: 'rgba(0,0,0,.7)', strokeW: u * .007 });
      break;
    }
  }
  ctx.restore();
}
function drawCover(ctx, f, x, y, w, h, zoom = 1, fx = .5, fy = .5) {
  const s = Math.max(w / f.w, h / f.h) * zoom, dw = f.w * s, dh = f.h * s;
  ctx.drawImage(f.img, x + (w - dw) * fx, y + (h - dh) * fy, dw, dh);
}
function drawContain(ctx, f, x, y, w, h) { const s = Math.min(w / f.w, h / f.h), dw = f.w * s, dh = f.h * s; ctx.drawImage(f.img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh); return { x: x + (w - dw) / 2, y: y + (h - dh) / 2, w: dw, h: dh }; }

// ================= ADEGAN LAYAR PENUH =================
function drawScene(ctx, W, H, t, el, Lk, env) {
  const u = Math.min(W, H), age = t - el.start, left = el.end - t, dur = el.end - el.start, land = W > H * 1.1, maxW = W * .86, an = textAnim(Lk);
  ctx.save(); ctx.textBaseline = 'alphabetic';
  if (el.type === 'cta') {
    ctx.fillStyle = 'rgba(4,9,14,.78)'; ctx.fillRect(0, 0, W, H);
    const g = ctx.createRadialGradient(W / 2, H * .45, 0, W / 2, H * .45, u * .75); g.addColorStop(0, hexA(Lk.accent, .4)); g.addColorStop(1, hexA(Lk.accent, 0)); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    const L = layoutText(ctx, el.text, { fam: Lk.fontD, size: u * .1, maxW, lines: 3, upper: Lk.upper }), top = H * .44 - L.h / 2;
    drawText(ctx, L, { x: W / 2, y: top, align: 'center', color: '#fff', emColor: Lk.accent, em2: Lk.accent2, kw: Lk.kw, age, left: 9, anim: an });
    if (el.sub) {
      const s2 = u * .046; ctx.font = font(Lk.fontB, s2, 800); const tw = Math.min(ctx.measureText(plain(el.sub)).width, maxW - s2 * 1.8), pw = tw + s2 * 1.8, ph = s2 * 2.1;
      const py = top + L.h + u * .07, pulse = 1 + .035 * Math.sin(age * 5), r = EZ.back((age - .45) / .4);
      if (r > 0) { ctx.save(); ctx.globalAlpha = clamp(r, 0, 1); ctx.translate(W / 2, py + ph / 2); ctx.scale(pulse * r, pulse * r); ctx.fillStyle = Lk.accent; rrect(ctx, -pw / 2, -ph / 2, pw, ph, ph / 2); ctx.fill(); textLine(ctx, plain(el.sub), 0, s2 * .36, { fam: Lk.fontB, size: s2, weight: 800, align: 'center', color: onDark(Lk.accent), maxW: tw }); ctx.restore(); }
      const ay = py + ph + u * .06 + Math.sin(age * 4) * u * .012; ctx.globalAlpha = clamp((age - .9) / .3, 0, 1); ctx.strokeStyle = Lk.accent2; ctx.lineWidth = u * .01; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(W / 2 - u * .03, ay); ctx.lineTo(W / 2, ay + u * .03); ctx.lineTo(W / 2 + u * .03, ay); ctx.stroke();
    }
    ctx.restore(); return;
  }
  const C = drawBg(ctx, W, H, t, Lk, el.bg, hash(el.id) % 999);
  if (el.type === 'chapter') {
    const L = layoutText(ctx, el.text, { fam: Lk.fontD, size: u * .13, maxW, lines: 3, upper: Lk.upper }), subS = u * .042;
    const top = H * .45 - (L.h + (el.sub ? subS * 2 : 0)) / 2;
    const lw = u * .18 * ease((age - .1) / .5); ctx.fillStyle = Lk.accent; ctx.fillRect(W / 2 - lw / 2, top - u * .06, lw, u * .01);
    drawText(ctx, L, { x: W / 2, y: top, align: 'center', color: C.text, emColor: C.light ? hexMix(Lk.accent, '#000', .2) : Lk.accent, em2: Lk.accent2, kw: Lk.kw, age, left: 9, anim: an });
    if (el.sub) { ctx.globalAlpha = ease((age - .5) / .4); textLine(ctx, plain(el.sub), W / 2, top + L.h + subS * 1.6, { fam: Lk.fontB, size: subS, weight: 650, align: 'center', color: C.sub, maxW }); }
  } else if (el.type === 'diagram') drawDiagram(ctx, W, H, u, age, el, Lk, C, land);
  else if (el.type === 'media') {
    const f = env.frame(el.asset, age), lay = el.layout || 'full', kb = 1.04 + .08 * clamp(age / Math.max(1, dur), 0, 1);
    if (lay === 'full') { if (f) drawCover(ctx, f, 0, 0, W, H, kb, .5 + .04 * Math.sin(hash(el.id)), .45); }
    else if (lay === 'split') {
      const half = H / 2; ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, half); ctx.clip(); if (f) drawCover(ctx, f, 0, 0, W, half, kb); ctx.restore();
      ctx.save(); ctx.beginPath(); ctx.rect(0, half, W, H - half); ctx.clip(); if (env.video) env.video(ctx, 0, half, W, H - half); ctx.restore();
      ctx.fillStyle = Lk.accent; ctx.fillRect(0, half - u * .006, W * ease(age / .5), u * .012);
    } else if (lay === 'phone') {
      const ph = H * (land ? .82 : .62), pw = ph * .49, x = (W - pw) / 2, y = H * (land ? .09 : .2) + Math.sin(age * 1.6) * u * .01 + (1 - EZ.back(age / .6)) * H * .4, r = pw * .14;
      ctx.save(); ctx.translate(W / 2, y + ph / 2); ctx.rotate(Math.sin(age * .9) * .025); ctx.translate(-W / 2, -(y + ph / 2));
      ctx.shadowColor = 'rgba(0,0,0,.45)'; ctx.shadowBlur = u * .06; ctx.shadowOffsetY = u * .02; ctx.fillStyle = '#111820'; rrect(ctx, x, y, pw, ph, r); ctx.fill(); ctx.shadowColor = 'transparent';
      const bz = pw * .04; ctx.save(); rrect(ctx, x + bz, y + bz, pw - bz * 2, ph - bz * 2, r * .8); ctx.clip(); ctx.fillStyle = '#000'; ctx.fillRect(x, y, pw, ph); if (f) drawCover(ctx, f, x + bz, y + bz, pw - bz * 2, ph - bz * 2, 1, .5, .1 + .2 * clamp(age / dur, 0, 1)); ctx.restore();
      ctx.fillStyle = '#111820'; rrect(ctx, W / 2 - pw * .16, y + bz * 1.4, pw * .32, bz * 1.4, bz); ctx.fill(); ctx.restore();
    } else if (lay === 'float') {
      const aw = f ? f.w : 4, ah = f ? f.h : 3; let w = W * (land ? .5 : .78), h = w * ah / aw; if (h > H * .5) { h = H * .5; w = h * aw / ah; }
      const x = (W - w) / 2, y = H * (land ? .2 : .24) + Math.sin(age * 1.4) * u * .015 + (1 - EZ.back(age / .55)) * H * .35;
      ctx.save(); ctx.translate(W / 2, y + h / 2); ctx.rotate((hash(el.id) % 2 ? 1 : -1) * (.04 + .015 * Math.sin(age))); ctx.translate(-W / 2, -(y + h / 2));
      ctx.shadowColor = 'rgba(0,0,0,.45)'; ctx.shadowBlur = u * .07; ctx.shadowOffsetY = u * .03; ctx.fillStyle = '#fff'; rrect(ctx, x - u * .012, y - u * .012, w + u * .024, h + u * .024, u * .03); ctx.fill(); ctx.shadowColor = 'transparent';
      ctx.save(); rrect(ctx, x, y, w, h, u * .022); ctx.clip(); if (f) drawCover(ctx, f, x, y, w, h, kb); ctx.restore(); ctx.restore();
    } else if (lay === 'spotlight') {
      const cx = W / 2, cy = H * .45;
      const beam = ctx.createRadialGradient(cx, cy, 0, cx, cy, u * .7); beam.addColorStop(0, hexA('#ffffff', C.light ? .5 : .22)); beam.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = beam; ctx.fillRect(0, 0, W, H);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(age * .3); for (let i = 0; i < 10; i++) { ctx.fillStyle = hexA(Lk.accent, .06); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, u, i * Math.PI / 5, (i + .45) * Math.PI / 5); ctx.closePath(); ctx.fill(); } ctx.restore();
      const k = .6 + .4 * EZ.back(age / .7), sz = u * (land ? .62 : .72) * k;
      ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.ellipse(cx, cy + sz * .52, sz * .38, sz * .06, 0, 0, 7); ctx.fill();
      if (f) { ctx.save(); ctx.translate(0, Math.sin(age * 1.8) * u * .012); ctx.shadowColor = 'rgba(0,0,0,.35)'; ctx.shadowBlur = u * .05; drawContain(ctx, f, cx - sz / 2, cy - sz / 2, sz, sz); ctx.restore(); }
    }
    if (el.text) {
      const L = layoutText(ctx, el.text, { fam: Lk.fontD, size: u * .075, maxW, lines: 2, upper: Lk.upper }); const onBg = lay === 'phone' || lay === 'float' || lay === 'spotlight';
      const y = lay === 'split' ? H * .5 - L.h / 2 : lay === 'phone' && !land ? H * .06 : H * (land ? .06 : .08);
      if (!onBg) { const g = ctx.createLinearGradient(0, Math.max(0, y - u * .12), 0, y + L.h + u * .12); g.addColorStop(0, lay === 'split' ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,.55)'); g.addColorStop(.5, 'rgba(0,0,0,.5)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(0, Math.max(0, y - u * .12), W, L.h + u * .24); }
      drawText(ctx, L, { x: W / 2, y, align: 'center', color: onBg ? C.text : '#fff', emColor: C.light && onBg ? hexMix(Lk.accent, '#000', .2) : Lk.accent, em2: Lk.accent2, kw: Lk.kw, age: age - .25, left: 9, anim: an, stroke: onBg ? null : 'rgba(0,0,0,.4)', strokeW: L.size * .06 });
    }
  }
  ctx.restore();
}
function drawDiagram(ctx, W, H, u, age, el, Lk, C, land) {
  const items = (el.items || []).map(x => typeof x === 'string' ? { label: x } : x).filter(x => x && (x.label || x.value)).slice(0, 6);
  const kind = el.kind || 'steps', maxW = W * .86, an = textAnim(Lk), txt = C.text, ac = C.light ? hexMix(Lk.accent, '#000', .15) : Lk.accent;
  const L = layoutText(ctx, el.text, { fam: Lk.fontD, size: u * .07, maxW, lines: 2, upper: Lk.upper });
  const top = H * (land ? .08 : .12);
  drawText(ctx, L, { x: W / 2, y: top, align: 'center', color: txt, emColor: ac, em2: Lk.accent2, kw: Lk.kw, age, left: 9, anim: an });
  const y0 = top + L.h + u * .07, avail = H * (land ? .9 : .86) - y0, n = Math.max(1, items.length), dur = el.end - el.start;
  const stp = Math.min(.7, Math.max(.25, (dur - 1.5) / n)), rev = i => ease((age - .5 - i * stp) / .45);
  const iconAt = (ic, x, y, s) => { if (!ic) return; ctx.save(); ctx.font = `${Math.round(s)}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(ic, x, y); ctx.restore(); };
  const card = (x, y, w, h) => { ctx.fillStyle = C.light ? 'rgba(255,255,255,.92)' : 'rgba(255,255,255,.07)'; rrect(ctx, x, y, w, h, u * .025); ctx.fill(); ctx.strokeStyle = C.light ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.14)'; ctx.lineWidth = 1.5; ctx.stroke(); };
  ctx.save();
  if (kind === 'steps' || kind === 'flow') {
    const rowH = Math.min(u * .19, avail / n), s = Math.min(u * .042, rowH * .28), x0 = W * .1;
    items.forEach((it, i) => {
      const r = rev(i); if (r <= 0) return; const y = y0 + i * rowH, cy = y + rowH * .42;
      ctx.globalAlpha = r;
      if (kind === 'steps') {
        if (i < n - 1) { ctx.strokeStyle = hexA(ac, .5); ctx.lineWidth = u * .006; const nr = rev(i + 1); ctx.beginPath(); ctx.moveTo(x0 + u * .045, cy + u * .05); ctx.lineTo(x0 + u * .045, cy + u * .05 + (rowH - u * .1) * nr); ctx.stroke(); }
        const k = EZ.back((age - .5 - i * stp) / .4); ctx.save(); ctx.translate(x0 + u * .045, cy); ctx.scale(k, k); ctx.fillStyle = ac; ctx.beginPath(); ctx.arc(0, 0, u * .045, 0, 7); ctx.fill();
        textLine(ctx, String(i + 1), 0, u * .018, { fam: Lk.fontD, size: u * .05, align: 'center', color: onDark(ac) }); ctx.restore();
        const tx = x0 + u * .13 + (1 - r) * u * .05; if (it.icon) iconAt(it.icon, tx + s * .6, cy, s * 1.3);
        const lx = tx + (it.icon ? s * 1.7 : 0); const lines = wrapPlain(ctx, plain(it.label), W * .88 - lx, Lk.fontB, s, 750, 2);
        lines.forEach((l, k2) => textLine(ctx, l, lx, cy + s * .35 + (k2 - (lines.length - 1) / 2) * s * 1.2 - (it.value ? s * .5 : 0), { fam: Lk.fontB, size: s, weight: 750, color: txt }));
        if (it.value) textLine(ctx, plain(it.value), lx, cy + s * .35 + lines.length * s * .6 + s * .25, { fam: Lk.fontB, size: s * .78, weight: 550, color: C.sub, maxW: W * .88 - lx });
      } else {
        const bw = W * .7, bh = rowH * .62, bx = (W - bw) / 2 + (1 - r) * u * .06, by = y;
        card(bx, by, bw, bh); if (it.icon) iconAt(it.icon, bx + bh * .5, by + bh / 2, bh * .45);
        textLine(ctx, plain(it.label), bx + (it.icon ? bh * .95 : bw / 2), by + bh / 2 + s * .35, { fam: Lk.fontB, size: s, weight: 750, align: it.icon ? 'left' : 'center', color: txt, maxW: bw - bh });
        if (i < n - 1 && rev(i + 1) > 0) { const ax = W / 2, ay = by + bh + rowH * .06, al = rowH * .26 * rev(i + 1); ctx.strokeStyle = ac; ctx.lineWidth = u * .008; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax, ay + al); ctx.moveTo(ax - u * .02, ay + al - u * .02); ctx.lineTo(ax, ay + al); ctx.lineTo(ax + u * .02, ay + al - u * .02); ctx.stroke(); }
      }
    });
  } else if (kind === 'compare') {
    const head = items[0] || { label: 'Sebelum', value: 'Sesudah' }, rows = items.slice(1), colW = W * .4, gx = W * .06, xL = W / 2 - colW - gx / 2, xR = W / 2 + gx / 2, s = u * .038, rowH = Math.min(u * .14, (avail - u * .12) / Math.max(1, rows.length));
    ctx.globalAlpha = ease((age - .3) / .4);
    [[xL, head.label, '#9aa7b1'], [xR, head.value, ac]].forEach(([x, lb, c]) => { ctx.fillStyle = c; rrect(ctx, x, y0, colW, u * .09, u * .02); ctx.fill(); textLine(ctx, plain(lb), x + colW / 2, y0 + u * .06, { fam: Lk.fontB, size: s, weight: 800, align: 'center', color: onDark(c), maxW: colW - u * .03 }); });
    rows.forEach((it, i) => {
      const r = rev(i + 1); if (r <= 0) return; const y = y0 + u * .12 + i * rowH; ctx.globalAlpha = r;
      card(xL, y, colW, rowH * .82); card(xR, y, colW, rowH * .82);
      const cy = y + rowH * .41;
      textLine(ctx, '✕', xL + u * .04, cy + s * .35, { fam: Lk.fontB, size: s, weight: 800, align: 'center', color: '#E5484D' }); textLine(ctx, plain(it.label), xL + u * .075, cy + s * .35, { fam: Lk.fontB, size: s * .9, weight: 600, color: txt, maxW: colW - u * .09 });
      textLine(ctx, '✓', xR + u * .04, cy + s * .35, { fam: Lk.fontB, size: s, weight: 800, align: 'center', color: '#2BB673' }); textLine(ctx, plain(it.value), xR + u * .075, cy + s * .35, { fam: Lk.fontB, size: s * .9, weight: 700, color: txt, maxW: colW - u * .09 });
    });
  } else if (kind === 'bars') {
    const vals = items.map(it => parseFloat(String(it.value).replace(/[^\d.,-]/g, '').replace(',', '.')) || 0), mx = Math.max(1e-6, ...vals);
    const rowH = Math.min(u * .16, avail / n), s = u * .036, x0 = W * .08, bwMax = W * .84;
    items.forEach((it, i) => {
      const r = rev(i); if (r <= 0) return; const y = y0 + i * rowH; ctx.globalAlpha = Math.min(1, r * 1.5);
      textLine(ctx, (it.icon ? it.icon + ' ' : '') + plain(it.label), x0, y + s, { fam: Lk.fontB, size: s, weight: 700, color: txt, maxW: bwMax * .7 });
      const bh = rowH * .36, w = bwMax * (vals[i] / mx) * EZ.expo((age - .5 - i * stp) / .9);
      ctx.fillStyle = C.light ? 'rgba(0,0,0,.07)' : 'rgba(255,255,255,.08)'; rrect(ctx, x0, y + s * 1.45, bwMax, bh, bh / 2); ctx.fill();
      const g = ctx.createLinearGradient(x0, 0, x0 + bwMax, 0); g.addColorStop(0, ac); g.addColorStop(1, Lk.accent2); ctx.fillStyle = i === vals.indexOf(mx) ? g : hexA(ac, .75); rrect(ctx, x0, y + s * 1.45, Math.max(bh, w), bh, bh / 2); ctx.fill();
      textLine(ctx, countUp(it.value, EZ.expo((age - .5 - i * stp) / .9)), x0 + bwMax, y + s, { fam: Lk.fontD, size: s * 1.05, align: 'right', color: ac });
    });
  } else if (kind === 'cycle') {
    const cx = W / 2, cy = y0 + avail * .48, R = Math.min(W * .32, avail * .36), s = u * .034;
    ctx.strokeStyle = hexA(ac, .45); ctx.lineWidth = u * .008; ctx.beginPath(); ctx.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * ease((age - .4) / 1.2)); ctx.stroke();
    const ang = age * .9; ctx.fillStyle = ac; ctx.beginPath(); ctx.arc(cx + Math.cos(ang) * R, cy + Math.sin(ang) * R, u * .014, 0, 7); ctx.fill();
    items.forEach((it, i) => {
      const r = rev(i); if (r <= 0) return; const a = -Math.PI / 2 + i * Math.PI * 2 / n, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R, k = EZ.back((age - .5 - i * stp) / .4);
      ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.fillStyle = C.light ? '#fff' : '#0E2433'; ctx.strokeStyle = ac; ctx.lineWidth = u * .006; ctx.beginPath(); ctx.arc(0, 0, u * .075, 0, 7); ctx.fill(); ctx.stroke();
      if (it.icon) iconAt(it.icon, 0, 0, u * .06); else textLine(ctx, String(i + 1), 0, u * .022, { fam: Lk.fontD, size: u * .06, align: 'center', color: ac }); ctx.restore();
      ctx.globalAlpha = r; const lines = wrapPlain(ctx, plain(it.label), W * .3, Lk.fontB, s, 750, 2), ly = y + (Math.sin(a) >= -.1 ? u * .12 : -u * .1 - (lines.length - 1) * s * 1.2);
      lines.forEach((l, k2) => textLine(ctx, l, x, ly + k2 * s * 1.2, { fam: Lk.fontB, size: s, weight: 750, align: 'center', color: txt })); ctx.globalAlpha = 1;
    });
  } else if (kind === 'ring') {
    const it = items[0] || { label: '', value: '0%' }, pct = clamp((parseFloat(String(it.value).replace(',', '.')) || 0) / 100, 0, 1), cx = W / 2, cy = y0 + avail * .42, R = Math.min(W * .3, avail * .34), p = EZ.expo((age - .4) / 1.4);
    ctx.lineWidth = u * .045; ctx.lineCap = 'round'; ctx.strokeStyle = C.light ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.1)'; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.stroke();
    const g = ctx.createLinearGradient(cx - R, cy, cx + R, cy); g.addColorStop(0, ac); g.addColorStop(1, Lk.accent2); ctx.strokeStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * pct * p); ctx.stroke();
    textLine(ctx, countUp(it.value, p), cx, cy + u * .04, { fam: Lk.fontD, size: u * .12, align: 'center', color: txt });
    ctx.globalAlpha = ease((age - 1) / .4); const lines = wrapPlain(ctx, plain(it.label), W * .8, Lk.fontB, u * .04, 700, 2); lines.forEach((l, k2) => textLine(ctx, l, cx, cy + R + u * .1 + k2 * u * .05, { fam: Lk.fontB, size: u * .04, weight: 700, align: 'center', color: txt }));
  }
  ctx.restore();
}

// ================= TRANSISI =================
const TRANS_AUTO = ['fade', 'slide', 'zoom', 'wipe', 'circle', 'up', 'blur'];
function transOf(el, Lk) { const k = el.trans && el.trans !== 'auto' ? el.trans : (Lk.trans && Lk.trans !== 'auto' ? Lk.trans : TRANS_AUTO[hash(el.id) % TRANS_AUTO.length]); return k; }
function composite(ctx, sc, kind, p, dir, W, H) {
  if (p >= 1 || kind === 'cut') { if (p > 0) ctx.drawImage(sc, 0, 0); return; }
  if (p <= 0) return;
  const e = ease(p), s = dir === 'in' ? 1 : -1;
  ctx.save();
  switch (kind) {
    case 'slide': ctx.drawImage(sc, s * (1 - e) * W, 0); break;
    case 'up': ctx.globalAlpha = Math.min(1, e * 1.4); ctx.drawImage(sc, 0, s * (1 - e) * H * .35); break;
    case 'zoom': { ctx.globalAlpha = e; const k = dir === 'in' ? 1.2 - .2 * e : 1 + .12 * (1 - e); ctx.translate(W / 2, H / 2); ctx.scale(k, k); ctx.drawImage(sc, -W / 2, -H / 2); break; }
    case 'wipe': ctx.beginPath(); if (dir === 'in') ctx.rect(0, 0, W * e, H); else ctx.rect(W * (1 - e), 0, W * e, H); ctx.clip(); ctx.drawImage(sc, 0, 0); break;
    case 'circle': ctx.beginPath(); ctx.arc(W / 2, H / 2, Math.hypot(W, H) / 2 * e, 0, 7); ctx.clip(); ctx.drawImage(sc, 0, 0); break;
    case 'blinds': { ctx.beginPath(); const n = 8, sw = W / n; for (let i = 0; i < n; i++) ctx.rect(i * sw, 0, sw * e, H); ctx.clip(); ctx.drawImage(sc, 0, 0); break; }
    case 'flash': ctx.globalAlpha = Math.min(1, e * 1.6); ctx.drawImage(sc, 0, 0); ctx.globalAlpha = Math.sin(p * Math.PI) * .85; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, W, H); break;
    case 'blur': ctx.globalAlpha = e; if ('filter' in ctx) ctx.filter = `blur(${((1 - e) * Math.min(W, H) * .03).toFixed(1)}px)`; ctx.drawImage(sc, 0, 0); break;
    default: ctx.globalAlpha = e; ctx.drawImage(sc, 0, 0);
  }
  ctx.restore();
}

// ================= KAMERA =================
const angleCache = new WeakMap();
function angleCuts(p) {
  const c = angleCache.get(p); if (c && c.words === p.words) return c.cuts;
  const cuts = [0]; let last = 0;
  p.words.forEach((w, i) => { if (/[.!?]$/.test(w.w) && w.e - last > 3.2 && p.words[i + 1]) { cuts.push(p.words[i + 1].s); last = p.words[i + 1].s; } });
  if (cuts.length < 3 && p.duration > 8) { cuts.length = 0; for (let x = 0; x < p.duration; x += 5) cuts.push(x); }
  angleCache.set(p, { words: p.words, cuts }); return cuts;
}
function camAt(t, p) {
  let z = 1; const mode = p.cam.mode || 'smooth';
  if (mode === 'angle') { const cuts = angleCuts(p); let k = 0; for (let i = 0; i < cuts.length; i++) if (t >= cuts[i]) k = i; z = k % 2 ? 1.24 : 1; }
  for (const el of p.els) {
    if (el.type === 'zoom' && t >= el.start && t < el.end + .5) {
      const kind = el.kind && el.kind !== 'auto' ? el.kind : (mode === 'punch' ? 'punch' : 'smooth'), amt = clamp(+el.amount || 1.15, 1.02, 1.6);
      let f = 0;
      if (kind === 'punch') f = t < el.end ? 1 : 0;
      else if (kind === 'out') f = t < el.end ? 1 - EZ.inout((t - el.start) / Math.max(.3, el.end - el.start)) : 0;
      else f = t < el.start + .3 ? ease((t - el.start) / .3) : t < el.end ? 1 : 1 - ease((t - el.end) / .45);
      z = Math.max(z, 1 + (amt - 1) * f);
    }
    if (el.type === 'fx' && el.kind === 'pulse' && t >= el.start && t < el.start + .45) z *= 1 + .08 * Math.sin(Math.PI * (t - el.start) / .45);
  }
  if (mode === 'off') z = Math.min(z, 1) || 1;
  return { z, fx: clamp(p.face?.x ?? .5, .1, .9), fy: clamp(p.face?.y ?? .35, .1, .9) };
}
function shakeAt(t, p, u) { for (const el of p.els) if (el.type === 'fx' && el.kind === 'shake' && t >= el.start && t < el.end) { const k = 1 - (t - el.start) / Math.max(.1, el.end - el.start); return [Math.sin(t * 61) * u * .018 * k, Math.cos(t * 47) * u * .014 * k]; } return [0, 0]; }
// gambar video sumber; mengembalikan geometri tempat frame utuh digambar
function drawVideo(ctx, W, H, src, p, cam, opt = {}) {
  const sw = src.w, sh = src.h, fit = p.cam.fit || 'cover', u = Math.min(W, H), grade = GRADE[p.look.grading] || '';
  let g;
  if (fit === 'cover' || Math.abs(sw / sh - W / H) < .02) {
    const s = Math.max(W / sw, H / sh) * cam.z, dw = sw * s, dh = sh * s;
    let x = W / 2 - cam.fx * dw, y = H * .42 - cam.fy * dh; x = clamp(x, W - dw, 0); y = clamp(y, H - dh, 0);
    g = { x, y, w: dw, h: dh };
  } else {
    if (fit === 'blur') { ctx.save(); const s = Math.max(W / sw, H / sh) * 1.1; if ('filter' in ctx) ctx.filter = `blur(${Math.round(u * .04)}px) brightness(.55) ${grade}`; ctx.drawImage(src.img, (W - sw * s) / 2, (H - sh * s) / 2, sw * s, sh * s); ctx.restore(); }
    else { ctx.fillStyle = '#05090D'; ctx.fillRect(0, 0, W, H); }
    const s = Math.min(W / sw, H / sh) * cam.z, dw = sw * s, dh = sh * s, grow = 1 - 1 / cam.z;
    g = { x: (W - dw) / 2 - (cam.fx - .5) * dw * grow, y: (H - dh) / 2 - (cam.fy - .45) * dh * grow, w: dw, h: dh };
  }
  ctx.save();
  if (fit !== 'cover') { ctx.beginPath(); ctx.rect(Math.max(0, g.x), Math.max(0, g.y), Math.min(W, g.w), Math.min(H, g.h)); ctx.clip(); }
  const f = [grade, opt.blur ? `blur(${Math.round(u * .018)}px)` : ''].filter(Boolean).join(' ');
  if (f && 'filter' in ctx) ctx.filter = f;
  ctx.drawImage(src.img, g.x, g.y, g.w, g.h);
  ctx.restore();
  return g;
}
let TMP = null, TMP2 = null;
function tmpCanvas(W, H, which = 1) {
  let c = which === 1 ? TMP : TMP2;
  if (!c) { c = document.createElement('canvas'); if (which === 1) TMP = c; else TMP2 = c; }
  if (c.width !== W || c.height !== H) { c.width = W; c.height = H; }
  const x = c.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.globalCompositeOperation = 'source-over'; x.globalAlpha = 1; x.filter = 'none'; x.clearRect(0, 0, W, H); return [c, x];
}
function personCut(ctx, W, H, src, g, mask, p, rim) {
  const [c, x] = tmpCanvas(W, H, 1); const u = Math.min(W, H);
  if ('filter' in x) x.filter = 'blur(1px)';
  x.drawImage(mask, g.x, g.y, g.w, g.h); x.filter = 'none';
  if (rim) {
    const [c2, x2] = tmpCanvas(W, H, 2); x2.drawImage(c, 0, 0); x2.globalCompositeOperation = 'source-in'; x2.fillStyle = p.look.accent; x2.fillRect(0, 0, W, H);
    ctx.save(); if (p.person.rim) { ctx.shadowColor = p.look.accent; ctx.shadowBlur = u * .045; ctx.globalAlpha = .9; ctx.drawImage(c2, 0, 0); }
    if (p.person.outline) { const d = Math.max(2, u * .006); ctx.shadowColor = 'transparent'; ctx.globalAlpha = 1; for (const [dx, dy] of [[d, 0], [-d, 0], [0, d], [0, -d], [d, d], [-d, -d], [d, -d], [-d, d]]) ctx.drawImage(c2, dx, dy); }
    ctx.restore();
  }
  x.globalCompositeOperation = 'source-in';
  const grade = GRADE[p.look.grading] || ''; if (grade && 'filter' in x) x.filter = grade;
  x.drawImage(src.img, g.x, g.y, g.w, g.h);
  ctx.drawImage(c, 0, 0);
}
function maskFace(mask) {
  // perkiraan posisi wajah dari bagian atas siluet orang
  try {
    const w = mask.width, h = mask.height, d = mask.getContext('2d').getImageData(0, 0, w, h).data; let top = -1;
    for (let y = 0; y < h && top < 0; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4 + 3] > 140) { top = y; break; }
    if (top < 0) return null; const band = Math.min(h - 1, top + Math.round(h * .12)); let sx = 0, n = 0;
    for (let y = top; y <= band; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4 + 3] > 140) { sx += x; n++; }
    return n ? { x: sx / n / w, y: clamp((top + h * .09) / h, .1, .8) } : null;
  } catch { return null; }
}

// ================= KOMPOSISI FRAME =================
let SC = null;
function sceneCanvas(W, H) { if (!SC) SC = document.createElement('canvas'); if (SC.width !== W || SC.height !== H) { SC.width = W; SC.height = H; } const x = SC.getContext('2d'); x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.globalCompositeOperation = 'source-over'; x.filter = 'none'; x.clearRect(0, 0, W, H); return x; }
function drawFrame(ctx, W, H, t, env, p = P) {
  const Lk = p.look, u = Math.min(W, H);
  ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; ctx.filter = 'none';
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
  const [sx, sy] = shakeAt(t, p, u); if (sx || sy) ctx.translate(sx, sy);
  const active = p.els.filter(e => t >= e.start && t < e.end && !elHidden(e, p));
  const hasVideo = p.mode === 'talk' && env.src;
  const mask = hasVideo ? env.mask : null;
  let g = null;
  const cutNeeded = !!mask && (p.person.bg !== 'none' || p.person.rim || p.person.outline || active.some(e => e.behind && (e.type === 'title' || e.type === 'chapter')));
  if (hasVideo) {
    const cam = camAt(t, p);
    g = drawVideo(ctx, W, H, env.src, p, cam, { blur: cutNeeded && p.person.bg === 'blur' });
    if (cutNeeded && p.person.bg === 'dim') { ctx.fillStyle = 'rgba(0,0,0,.45)'; ctx.fillRect(0, 0, W, H); }
    if (cutNeeded && p.person.bg === 'tint') { ctx.fillStyle = hexA(Lk.accent, .38); ctx.fillRect(0, 0, W, H); }
  } else drawBg(ctx, W, H, t, Lk, Lk.sceneBg, 7);
  const envX = { ...env, behind: false, video: hasVideo ? (c, x, y, w, h) => { c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip(); const s = Math.max(w / env.src.w, h / env.src.h), dw = env.src.w * s, dh = env.src.h * s; c.drawImage(env.src.img, x + (w - dw) * (p.face?.x ?? .5), y + (h - dh) * .3, dw, dh); c.restore(); } : null };
  // teks di belakang orang
  const behind = cutNeeded ? active.filter(e => e.behind && (e.type === 'title' || e.type === 'chapter')) : [];
  for (const el of behind) {
    if (el.type === 'chapter') {
      const v = vis(el, t); ctx.fillStyle = `rgba(0,0,0,${.45 * v})`; ctx.fillRect(0, 0, W, H);
      const L = layoutText(ctx, el.text, { fam: Lk.fontD, size: u * .2, maxW: W * .94, lines: 3, upper: true }); ctx.globalAlpha = v;
      drawText(ctx, L, { x: W / 2, y: H * .3 - L.h / 2, align: 'center', color: '#fff', emColor: Lk.accent, em2: Lk.accent2, kw: Lk.kw, age: t - el.start, left: el.end - t, anim: textAnim(Lk) }); ctx.globalAlpha = 1;
    } else drawOverlay(ctx, W, H, t, el, Lk, { ...envX, behind: true });
  }
  if (cutNeeded && g) personCut(ctx, W, H, env.src, g, mask, p, p.person.rim || p.person.outline);
  // adegan layar penuh
  const fulls = active.filter(e => isFull(e) && !behind.includes(e)).sort((a, b) => a.start - b.start);
  const D = .45 / clamp(Lk.transSpeed || 1, .4, 3);
  for (const el of fulls) {
    const sctx = sceneCanvas(W, H); drawScene(sctx, W, H, t, el, Lk, envX);
    const kind = el.type === 'cta' && (!el.trans || el.trans === 'auto') ? 'fade' : transOf(el, Lk);
    let pIn = el.start < .05 ? 1 : (t - el.start) / D, pOut = (el.end - t) / D;
    if (p.els.some(o => o !== el && isFull(o) && !elHidden(o, p) && o.start >= el.end - .05 && o.start - el.end < .15) || el.end >= p.duration - .02) pOut = 1;
    if (pIn < 1) composite(ctx, SC, kind, pIn, 'in', W, H); else if (pOut < 1) composite(ctx, SC, kind, pOut, 'out', W, H); else ctx.drawImage(SC, 0, 0);
  }
  // overlay di atas adegan (disembunyikan saat CTA tampil)
  const ctaOn = active.some(e => e.type === 'cta' && t - e.start > .3);
  for (const el of active) if (!ctaOn && el.type !== 'sticker' || el.type === 'sticker') if ((!isFull(el) && TYPES[el.type]?.lane === 1 && !behind.includes(el)) || (el.type === 'media' && el.layout === 'pip')) drawOverlay(ctx, W, H, t, el, Lk, envX);
  // caption
  if (!active.some(e => e.type === 'cta')) drawCaptions(ctx, W, H, u, t, p, Lk);
  // efek
  for (const el of active) if (el.type === 'fx') {
    const a = t - el.start, d = Math.max(.1, el.end - el.start);
    if (el.kind === 'flash') { ctx.fillStyle = `rgba(255,255,255,${.9 * Math.max(0, 1 - a / Math.min(.35, d))})`; ctx.fillRect(0, 0, W, H); }
    else if (el.kind === 'leak') { ctx.save(); ctx.globalCompositeOperation = 'screen'; const x = W * (-.3 + 1.6 * a / d), gr = ctx.createRadialGradient(x, H * .3, 0, x, H * .3, u * .9); gr.addColorStop(0, 'rgba(255,170,90,.75)'); gr.addColorStop(.5, 'rgba(255,90,60,.25)'); gr.addColorStop(1, 'rgba(255,90,60,0)'); ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H); ctx.restore(); }
    else if (el.kind === 'glitch' && Math.floor(a * 20) % 3 !== 2) { const r = rng(Math.floor(a * 30) + 3); ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); for (let i = 0; i < 7; i++) { const y = r() * H, h = H * (.01 + r() * .05), dx = (r() - .5) * W * .08; ctx.drawImage(ctx.canvas, 0, y, W, h, dx, y, W, h); } ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = .35; ctx.fillStyle = r() > .5 ? '#ff0040' : '#00e5ff'; ctx.fillRect(0, r() * H, W, H * .02); ctx.restore(); }
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  finishFrame(ctx, W, H, t, Lk);
  if (p.extras.progress && p.duration) { const h = Math.max(3, u * .007); ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.fillRect(0, H - h, W, h); const gr = ctx.createLinearGradient(0, 0, W, 0); gr.addColorStop(0, Lk.accent); gr.addColorStop(1, Lk.accent2); ctx.fillStyle = gr; ctx.fillRect(0, H - h, W * clamp(t / p.duration, 0, 1), h); }
  if (p.extras.brand) { const s = u * .03; ctx.font = font(Lk.fontB, s, 700); const tw = ctx.measureText(p.extras.brand).width; ctx.fillStyle = 'rgba(0,0,0,.42)'; rrect(ctx, u * .04, u * .04, tw + s * 1.4, s * 1.9, s * .95); ctx.fill(); textLine(ctx, p.extras.brand, u * .04 + s * .7, u * .04 + s * 1.3, { fam: Lk.fontB, size: s, weight: 700, color: '#fff' }); }
  ctx.restore();
}

// ================= ASET MEDIA =================
function loadImg(url) { return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error('Gambar tidak bisa dibuka')); i.src = url; }); }
function loadVid(url) { return new Promise((res, rej) => { const v = document.createElement('video'); v.muted = true; v.playsInline = true; v.preload = 'auto'; v.loop = false; v.onloadeddata = () => res(v); v.onerror = () => rej(new Error('Video tidak bisa dibuka')); v.src = url; }); }
async function mountAsset(a, blob) {
  const url = URL.createObjectURL(blob), m = { blob, url };
  if (a.kind === 'video') { m.video = await loadVid(url); m.video.addEventListener('seeked', () => { if (!R.playing) requestDraw(); }); a.w = m.video.videoWidth; a.h = m.video.videoHeight; a.dur = m.video.duration || 3; }
  else { m.img = await loadImg(url); a.w = m.img.naturalWidth; a.h = m.img.naturalHeight; }
  R.media.set(a.id, m); return m;
}
async function addAsset(blob, name, origin = 'upload', extra = {}) {
  const kind = (blob.type || '').startsWith('video') || /\.(mp4|mov|webm|m4v)$/i.test(name || '') ? 'video' : 'image';
  const a = { id: 'a' + uid(), name: name || (kind === 'video' ? 'Video' : 'Gambar'), kind, origin, desc: '', ...extra };
  await mountAsset(a, blob);
  P.assets.push(a); dbPutBlob('asset:' + a.id, blob); return a;
}
function removeAsset(id) { const m = R.media.get(id); if (m) { m.video?.pause(); URL.revokeObjectURL(m.url); } R.media.delete(id); P.assets = P.assets.filter(a => a.id !== id); P.els = P.els.filter(e => !(e.type === 'media' && e.asset === id)); dbDel('asset:' + id); }
const assetById = id => P.assets.find(a => a.id === id);
// --- penyedia frame aset ---
const usedVids = new Set();
function previewFrame(id, lt) {
  const a = assetById(id), m = R.media.get(id); if (!a || !m) return null;
  if (a.kind === 'image') return { img: m.img, w: a.w, h: a.h };
  const v = m.video, d = v.duration || a.dur || 1, want = lt % d; usedVids.add(v);
  if (R.playing || R.recording) { if (v.paused) { v.currentTime = want; v.play().catch(() => {}); } else if (Math.abs(v.currentTime - want) > .35) v.currentTime = want; }
  else { if (!v.paused) v.pause(); if (Math.abs(v.currentTime - want) > .05 && !v.seeking) v.currentTime = want; }
  return v.readyState >= 2 ? { img: v, w: v.videoWidth, h: v.videoHeight } : null;
}
function releaseVids() { for (const [, m] of R.media) if (m.video && !usedVids.has(m.video) && !m.video.paused) m.video.pause(); usedVids.clear(); }
// pembaca video untuk render (sekuensial, cepat)
class VReader {
  constructor(M, blob) { this.M = M; this.blob = blob; }
  async init() {
    const M = this.M; this.input = new M.Input({ source: new M.BlobSource(this.blob), formats: M.ALL_FORMATS });
    this.track = await this.input.getPrimaryVideoTrack(); if (!this.track || !(await this.track.canDecode())) throw new Error('Video aset tidak bisa dibaca');
    this.dur = await this.input.computeDuration(); this.t0 = await this.track.getFirstTimestamp();
    const w = this.track.displayWidth, h = this.track.displayHeight, k = Math.min(1, 1080 / Math.max(w, h));
    this.sink = new M.CanvasSink(this.track, { width: Math.round(w * k / 2) * 2, height: Math.round(h * k / 2) * 2, fit: 'fill' });
    this.last = -1; return this;
  }
  async frameAt(t) {
    const d = Math.max(.1, this.dur - this.t0 - .05); t = ((t % d) + d) % d; const ts = this.t0 + t;
    if (!this.it || ts < this.last - 1e-3) { try { await this.it?.return(); } catch {} this.it = this.sink.canvases(ts); this.cur = null; this.nxt = await this.it.next(); }
    while (!this.nxt.done && this.nxt.value.timestamp <= ts + 1e-4) { this.cur = this.nxt.value; this.nxt = await this.it.next(); }
    this.last = ts; const c = this.cur || (!this.nxt.done ? this.nxt.value : null);
    return c ? { img: c.canvas, w: c.canvas.width, h: c.canvas.height } : null;
  }
  async dispose() { try { await this.it?.return(); } catch {} try { this.input.dispose(); } catch {} }
}

// ================= PEMISAH ORANG (MediaPipe) =================
const MP_VER = '0.10.14', MP_MODEL = 'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite';
const SEG = { state: 'idle', seg: null, p: null, ts: 0, inC: null, maskC: null, last: null };
function segWanted(p = P) { return p.mode === 'talk' && !R.light && (p.person.bg !== 'none' || p.person.rim || p.person.outline || p.els.some(e => e.behind && (e.type === 'title' || e.type === 'chapter'))); }
function segInit() {
  if (SEG.state === 'ready') return Promise.resolve(true); if (SEG.state === 'fail') return Promise.resolve(false); if (SEG.p) return SEG.p;
  SEG.state = 'loading';
  SEG.p = (async () => {
    try {
      const V = await import(`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MP_VER}/vision_bundle.mjs`);
      const fs = await V.FilesetResolver.forVisionTasks(`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${MP_VER}/wasm`);
      for (const delegate of ['GPU', 'CPU']) { try { SEG.seg = await V.ImageSegmenter.createFromOptions(fs, { baseOptions: { modelAssetPath: MP_MODEL, delegate }, runningMode: 'VIDEO', outputCategoryMask: false, outputConfidenceMasks: true }); break; } catch (e) { console.warn('segmenter', delegate, e); } }
      if (!SEG.seg) throw new Error('segmenter gagal');
      SEG.inC = document.createElement('canvas'); SEG.maskC = document.createElement('canvas'); SEG.state = 'ready'; return true;
    } catch (e) { console.warn('Pemisah orang tidak tersedia', e); SEG.state = 'fail'; return false; }
  })();
  return SEG.p;
}
function segment(src) {
  if (SEG.state !== 'ready' || !src) return null;
  try {
    const k = Math.min(1, 256 / Math.max(src.w, src.h)), w = Math.max(16, Math.round(src.w * k)), h = Math.max(16, Math.round(src.h * k));
    if (SEG.inC.width !== w || SEG.inC.height !== h) { SEG.inC.width = w; SEG.inC.height = h; }
    SEG.inC.getContext('2d').drawImage(src.img, 0, 0, w, h);
    SEG.ts = Math.max(SEG.ts + 1, Math.round(performance.now()));
    let ok = false;
    SEG.seg.segmentForVideo(SEG.inC, SEG.ts, res => {
      const ms = res.confidenceMasks; if (!ms || !ms.length) return; const m = ms[ms.length - 1], arr = m.getAsFloat32Array(), mw = m.width, mh = m.height;
      if (SEG.maskC.width !== mw || SEG.maskC.height !== mh) { SEG.maskC.width = mw; SEG.maskC.height = mh; }
      const x = SEG.maskC.getContext('2d'), id = x.createImageData(mw, mh);
      for (let i = 0; i < arr.length; i++) { const o = i * 4; id.data[o] = id.data[o + 1] = id.data[o + 2] = 255; id.data[o + 3] = clamp((arr[i] - .3) / .4, 0, 1) * 255; }
      x.putImageData(id, 0, 0); ok = true;
    });
    return ok ? SEG.maskC : null;
  } catch (e) { console.warn('segment', e); return null; }
}

// ================= AUDIO & GAMBAR BANTU =================
async function decodeAudio(blob) { const ab = await blob.arrayBuffer(); return await new OfflineAudioContext(1, 1, 48000).decodeAudioData(ab); }
function canvasJpeg(img, w, h, max = 512, q = .82) {
  const k = Math.min(1, max / Math.max(w, h)), c = document.createElement('canvas'); c.width = Math.round(w * k); c.height = Math.round(h * k);
  c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); return c.toDataURL('image/jpeg', q).split(',')[1];
}
async function grabVideoFrames(url, times, max = 448) {
  const v = await loadVid(url), out = [];
  for (const t of times) { await new Promise(r => { v.onseeked = r; v.currentTime = clamp(t, 0, Math.max(0, v.duration - .05)); }); out.push({ t, b64: canvasJpeg(v, v.videoWidth, v.videoHeight, max) }); }
  v.removeAttribute('src'); v.load(); return out;
}
async function assetJpeg(a, max = 448) {
  const m = R.media.get(a.id); if (!m) return null;
  if (a.kind === 'image') return canvasJpeg(m.img, a.w, a.h, max);
  const fr = await grabVideoFrames(m.url, [Math.min(1, (a.dur || 2) / 2)], max); return fr[0]?.b64;
}
async function fileFrames(file) {
  const url = URL.createObjectURL(file);
  try {
    if (file.type.startsWith('image')) { const i = await loadImg(url); return [canvasJpeg(i, i.naturalWidth, i.naturalHeight, 512)]; }
    const v = await loadVid(url), d = v.duration || 3; v.removeAttribute('src');
    return (await grabVideoFrames(url, [d * .2, d * .5, d * .8], 448)).map(f => f.b64);
  } finally { setTimeout(() => URL.revokeObjectURL(url), 4000); }
}
function paletteFrom(img, w, h) {
  const c = document.createElement('canvas'); c.width = c.height = 48; const x = c.getContext('2d'); x.drawImage(img, 0, 0, 48, 48);
  const d = x.getImageData(0, 0, 48, 48).data, bins = new Map();
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i] / 255, g = d[i + 1] / 255, b = d[i + 2] / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), s = mx ? (mx - mn) / mx : 0;
    if (s < .35 || mx < .3) continue;
    let hh = 0; if (mx !== mn) { hh = mx === r ? (g - b) / (mx - mn) : mx === g ? 2 + (b - r) / (mx - mn) : 4 + (r - g) / (mx - mn); hh = (hh * 60 + 360) % 360; }
    const key = Math.round(hh / 24); const e = bins.get(key) || { n: 0, r: 0, g: 0, b: 0 }; e.n += s * mx; e.r += d[i]; e.g += d[i + 1]; e.b += d[i + 2]; e.c = (e.c || 0) + 1; bins.set(key, e);
  }
  const top = [...bins.values()].sort((a, b) => b.n - a.n).slice(0, 2).map(e => '#' + [e.r, e.g, e.b].map(v => Math.round(v / e.c).toString(16).padStart(2, '0')).join(''));
  const brighten = hx => lum(hx) < .18 ? hexMix(hx, '#ffffff', .35) : hx;
  return top.map(brighten);
}

// ================= AUDIO =================
let NOISEB = null;
function noiseBuf() { if (!NOISEB) { NOISEB = new AudioBuffer({ numberOfChannels: 1, length: 44100, sampleRate: 44100 }); const d = NOISEB.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; } return NOISEB; }
const CH = { M: [0, 4, 7], m: [0, 3, 7], M7: [0, 4, 7, 11], m7: [0, 3, 7, 10], D7: [0, 4, 7, 10], s4: [0, 5, 7] };
const MOODS = {
  corporate: { bpm: 112, prog: [[0, 'M'], [7, 'M'], [9, 'm'], [5, 'M']], pluck: true, cut: 2600, k: [0, 4, 8, 12], s: [4, 12], h: 'off', bass: 'beat' },
  lofi: { bpm: 80, prog: [[9, 'm7'], [5, 'M7'], [0, 'M7'], [7, 'D7']], wave: 'triangle', cut: 1300, k: [0, 7, 10], s: [4, 12], h: '8', swing: .14, bass: 'half' },
  hype: { bpm: 140, prog: [[9, 'm'], [9, 'm'], [5, 'M'], [7, 'M']], wave: 'square', cut: 1700, k: [0, 3, 10], s: [8], h: '16', bass: '808' },
  cinematic: { bpm: 70, prog: [[9, 'm'], [5, 'M'], [0, 'M'], [7, 'M']], wave: 'sawtooth', cut: 900, k: [], s: [], h: '', bass: 'drone', boom: true },
  happy: { bpm: 122, prog: [[0, 'M'], [5, 'M'], [9, 'm'], [7, 's4']], pluck: true, cut: 3200, k: [0, 8], s: [4, 12], h: 'off', bass: 'beat', clap: true },
  tech: { bpm: 124, prog: [[9, 'm'], [5, 'M'], [0, 'M'], [7, 'M']], arp: true, wave: 'sawtooth', cut: 2100, k: [0, 4, 8, 12], s: [4, 12], h: '8', bass: 'half' }
};
function osc(ctx, dest, type, f, t, dur, vol, det = 0) { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.value = f; o.detune.value = det; g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur); o.connect(g).connect(dest); o.start(t); o.stop(t + dur + .03); return o; }
function pad(ctx, dest, type, f, t, dur, vol) { for (const d of [-7, 7]) { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.value = f; o.detune.value = d; g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(vol, t + dur * .25); g.gain.setValueAtTime(vol, t + dur * .7); g.gain.linearRampToValueAtTime(.0001, t + dur); o.connect(g).connect(dest); o.start(t); o.stop(t + dur + .03); } }
function kick(ctx, dest, t, v = .9) { const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(45, t + .12); g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + .35); o.connect(g).connect(dest); o.start(t); o.stop(t + .4); return o; }
function nz(ctx, dest, t, type, f, dur, v, q = .8) { const s = ctx.createBufferSource(), fl = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = noiseBuf(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur); s.connect(fl).connect(g).connect(dest); s.start(t, Math.random() * .5); s.stop(t + dur + .02); return s; }
const loopP = {}, loopB = {};
function ensureLoop(mood) { if (!MOODS[mood]) return Promise.resolve(null); if (!loopP[mood]) loopP[mood] = genLoop(mood).then(b => (loopB[mood] = b)).catch(e => { console.warn('musik', e); return null; }); return loopP[mood]; }
async function genLoop(mood) {
  const M = MOODS[mood], sr = 44100, spb = 60 / M.bpm, bar = spb * 4, len = bar * 8, r = rng(11);
  const ctx = new OfflineAudioContext(2, Math.ceil(len * sr), sr);
  const master = ctx.createGain(); master.gain.value = .5; const comp = ctx.createDynamicsCompressor(); master.connect(comp).connect(ctx.destination);
  const hz = n => 130.81 * Math.pow(2, n / 12);
  for (let b = 0; b < 8; b++) {
    const [root, q] = M.prog[b % 4], t0 = b * bar, notes = CH[q].map(i => root + i + 12);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = M.cut; lp.connect(master);
    if (M.pluck) { for (let s = 0; s < 8; s++) { if (s % 2 && r() < .35) continue; for (const n of notes) osc(ctx, lp, 'triangle', hz(n), t0 + s * spb / 2, spb * .45, .055); } }
    else if (M.arp) { for (let s = 0; s < 16; s++) osc(ctx, lp, M.wave, hz(notes[s % notes.length] + (s % 8 > 3 ? 12 : 0)), t0 + s * spb / 4, spb * .22, .035); pad(ctx, lp, 'triangle', hz(notes[0]), t0, bar, .03); }
    else for (const n of notes) pad(ctx, lp, M.wave, hz(n), t0, bar, M.wave === 'square' ? .025 : .045);
    if (M.bass === 'beat') for (let i = 0; i < 4; i++) osc(ctx, master, 'sine', hz(root - 12), t0 + i * spb, spb * .85, .22);
    if (M.bass === 'half') for (let i = 0; i < 4; i += 2) osc(ctx, master, 'sine', hz(root - 12), t0 + i * spb, spb * 1.8, .2);
    if (M.bass === '808') for (const s of M.k) osc(ctx, master, 'sine', hz(root - 24), t0 + s * spb / 4, spb * 1.2, .45);
    if (M.bass === 'drone') pad(ctx, master, 'sine', hz(root - 12), t0, bar, .12);
    for (let s = 0; s < 16; s++) {
      const tt = t0 + s * spb / 4 + (M.swing && s % 2 ? M.swing * spb / 4 : 0);
      if (M.k.includes(s)) kick(ctx, master, tt, M.bass === '808' ? .7 : .85);
      if (M.s.includes(s)) nz(ctx, master, tt, 'bandpass', M.clap ? 1400 : 1800, M.clap ? .12 : .18, .45);
      if ((M.h === '8' && s % 2 === 0) || M.h === '16' || (M.h === 'off' && s % 4 === 2)) nz(ctx, master, tt, 'highpass', 7500, .05, M.h === '16' && s % 2 ? .05 : .1);
    }
    if (M.boom && b % 2 === 0) { const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(70, t0); o.frequency.exponentialRampToValueAtTime(32, t0 + 1.6); g.gain.setValueAtTime(.7, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + 2.2); o.connect(g).connect(master); o.start(t0); o.stop(t0 + 2.3); }
  }
  const buf = await ctx.startRendering(); normalize(buf, .8); return buf;
}
function normalize(buf, peak) { let pk = 0; for (let c = 0; c < buf.numberOfChannels; c++) { const d = buf.getChannelData(c); for (let i = 0; i < d.length; i++) pk = Math.max(pk, Math.abs(d[i])); } if (pk > 0) { const k = peak / pk; for (let c = 0; c < buf.numberOfChannels; c++) { const d = buf.getChannelData(c); for (let i = 0; i < d.length; i++) d[i] *= k; } } }
// kurva ducking: musik turun saat ada suara
const duckCache = new WeakMap();
function duckCurve(buf) {
  if (!buf) return null; const c = duckCache.get(buf); if (c) return c;
  const d = buf.getChannelData(0), step = Math.round(buf.sampleRate * .05), n = Math.ceil(d.length / step), rms = new Float32Array(n);
  for (let i = 0; i < n; i++) { let s = 0; const a = i * step, b = Math.min(d.length, a + step); for (let j = a; j < b; j++) s += d[j] * d[j]; rms[i] = Math.sqrt(s / Math.max(1, b - a)); }
  const sorted = [...rms].sort((a, b) => a - b), thr = Math.max(.012, sorted[Math.floor(n * .9)] * .22);
  const out = new Float32Array(n); let g = 1;
  for (let i = 0; i < n; i++) { let sp = false; for (let k = -3; k <= 3; k++) if (rms[clamp(i + k, 0, n - 1)] > thr) sp = true; const target = sp ? .42 : 1; g += (target - g) * (target < g ? .5 : .12); out[i] = g; }
  duckCache.set(buf, out); return out;
}
function scheduleMusic(ctx, dest, at, off, dur, p = P) {
  const buf = loopB[p.audio.mood]; if (!buf || p.audio.mood === 'none') return [];
  const left = dur - off; if (left <= .05) return [];
  const s = ctx.createBufferSource(), fade = ctx.createGain(), duck = ctx.createGain(); s.buffer = buf; s.loop = true;
  const fi = 1, fo = 1.5;
  fade.gain.setValueAtTime(off < fi ? off / fi + .001 : 1, at); if (off < fi) fade.gain.linearRampToValueAtTime(1, at + (fi - off));
  const foStart = Math.max(0, dur - fo - off); fade.gain.setValueAtTime(off > dur - fo ? (dur - off) / fo : 1, at + foStart); fade.gain.linearRampToValueAtTime(.0001, at + left);
  const curve = p.audio.duck ? duckCurve(voiceOut()) : null;
  if (curve) { const i0 = Math.floor(off / .05), i1 = Math.min(curve.length, Math.ceil(dur / .05)); if (i1 - i0 > 2) { try { duck.gain.setValueCurveAtTime(curve.slice(i0, i1), at, (i1 - i0) * .05); } catch {} } }
  s.connect(fade).connect(duck).connect(dest); s.start(at, off % buf.duration); s.stop(at + left);
  return [s];
}
const SFX_AUTO = { title: 'whoosh', card: 'whoosh', list: 'click', stat: 'ding', chips: 'pop', quote: 'whoosh', lower: 'whoosh', callout: 'pop', notif: 'ding', sticker: 'pop', media: 'whoosh', chapter: 'boom', diagram: 'whoosh', cta: 'riser', fx: 'boom' };
function sfxKind(el) { if (!el.sfx || el.sfx === 'auto') { if (el.type === 'fx') return el.kind === 'flash' ? 'boom' : el.kind === 'glitch' ? 'click' : 'none'; if (el.type === 'media' && el.layout === 'pip') return 'pop'; return SFX_AUTO[el.type] || 'none'; } return el.sfx; }
function sfx(ctx, dest, w, kind) {
  const N = [];
  if (kind === 'pop') { const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(900, w); o.frequency.exponentialRampToValueAtTime(380, w + .12); g.gain.setValueAtTime(.0001, w); g.gain.exponentialRampToValueAtTime(.6, w + .01); g.gain.exponentialRampToValueAtTime(.0001, w + .2); o.connect(g).connect(dest); o.start(w); o.stop(w + .22); N.push(o); }
  else if (kind === 'ding') { N.push(osc(ctx, dest, 'sine', 1318, w, .9, .35), osc(ctx, dest, 'sine', 1976, w + .005, .6, .16)); }
  else if (kind === 'click') N.push(nz(ctx, dest, w, 'highpass', 3000, .04, .9, 1.5));
  else if (kind === 'riser') { const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = noiseBuf(); s.loop = true; f.type = 'bandpass'; f.Q.value = 2; f.frequency.setValueAtTime(300, w - .8); f.frequency.exponentialRampToValueAtTime(5000, w); g.gain.setValueAtTime(.0001, Math.max(0, w - .8)); g.gain.exponentialRampToValueAtTime(.5, w); g.gain.exponentialRampToValueAtTime(.0001, w + .15); s.connect(f).connect(g).connect(dest); s.start(Math.max(0, w - .8)); s.stop(w + .2); N.push(s); }
  else if (kind === 'boom') { const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(110, w); o.frequency.exponentialRampToValueAtTime(35, w + .5); g.gain.setValueAtTime(.9, w); g.gain.exponentialRampToValueAtTime(.0001, w + .9); o.connect(g).connect(dest); o.start(w); o.stop(w + 1); N.push(o, nz(ctx, dest, w, 'lowpass', 400, .3, .5)); }
  else if (kind === 'whoosh') { const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = noiseBuf(); f.type = 'bandpass'; f.Q.value = 1.1; f.frequency.setValueAtTime(400, w); f.frequency.exponentialRampToValueAtTime(3600, w + .32); g.gain.setValueAtTime(.0001, w); g.gain.exponentialRampToValueAtTime(.9, w + .12); g.gain.exponentialRampToValueAtTime(.0001, w + .42); s.connect(f).connect(g).connect(dest); s.start(w); s.stop(w + .45); N.push(s); }
  return N;
}
function scheduleSfx(ctx, dest, at, off, p = P) {
  if (!p.audio.sfx) return []; const N = [];
  for (const el of p.els) {
    const k = sfxKind(el); if (k === 'none' || elHidden(el, p)) continue;
    const times = el.type === 'list' ? (el.items || []).slice(0, 5).map((_, i) => el.start + .35 + i * Math.min(.6, Math.max(.8, el.end - el.start - 1.2) / Math.max(1, (el.items || []).length))) : el.type === 'chips' ? (el.items || []).slice(0, 6).map((_, i) => el.start + i * Math.min(.35, Math.max(.12, (el.end - el.start - 1) / Math.max(1, (el.items || []).length)))) : [Math.max(0, el.start - .06)];
    for (const tt of times) { if (tt < off - .01) continue; N.push(...sfx(ctx, dest, at + tt - off, k)); }
  }
  return N;
}
// ---------- transport preview ----------
let AC = null, gMusic = null, gSfx = null, gVoice = null, pNodes = [];
async function ensureAC() {
  if (!AC) { AC = new (window.AudioContext || window.webkitAudioContext)(); gMusic = AC.createGain(); gSfx = AC.createGain(); gVoice = AC.createGain(); gMusic.connect(AC.destination); gSfx.connect(AC.destination); gVoice.connect(AC.destination); }
  if (AC.state === 'suspended') await AC.resume().catch(() => {});
  setVolumes();
}
function setVolumes() { if (!AC) return; gMusic.gain.value = P.audio.musicVol; gSfx.gain.value = P.audio.sfxVol; gVoice.gain.value = P.audio.voiceVol; const v = $('#vid'); if (v) v.volume = clamp(P.audio.voiceVol, 0, 1); }
function startAudio(off) {
  stopAudio(); if (!AC) return 0; const at = AC.currentTime + .04;
  pNodes = [...scheduleMusic(AC, gMusic, at, off, P.duration), ...scheduleSfx(AC, gSfx, at, off)];
  const VB = voiceOut(); if (P.mode === 'product' && VB && off < VB.duration) { const s = AC.createBufferSource(); s.buffer = VB; s.connect(gVoice); s.start(at, off); pNodes.push(s); }
  return at;
}
function stopAudio() { for (const n of pNodes) { try { n.stop(); } catch {} } pNodes = []; }
async function buildMix(p = P) {
  const dur = p.duration, sr = 48000, ctx = new OfflineAudioContext(2, Math.max(1, Math.ceil(dur * sr)), sr); let any = false;
  if (R.voiceP) await R.voiceP.catch(() => {});
  { const VB = voiceOut(); if (VB) { const s = ctx.createBufferSource(), g = ctx.createGain(); g.gain.value = p.audio.voiceVol; s.buffer = VB; s.connect(g).connect(ctx.destination); s.start(0); any = true; } }
  if (p.audio.mood !== 'none') { await ensureLoop(p.audio.mood); const g = ctx.createGain(); g.gain.value = p.audio.musicVol; g.connect(ctx.destination); if (scheduleMusic(ctx, g, 0, 0, dur, p).length) any = true; }
  if (p.audio.sfx && p.els.length) { const g = ctx.createGain(); g.gain.value = p.audio.sfxVol; g.connect(ctx.destination); if (scheduleSfx(ctx, g, 0, 0, p).length) any = true; }
  return any ? await ctx.startRendering() : null;
}
// ---------- konversi ----------
function pcmToBuffer(b64, rate = 24000) {
  const bin = atob(b64), n = bin.length >> 1, buf = new AudioBuffer({ numberOfChannels: 1, length: Math.max(1, n), sampleRate: rate }), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) { let v = bin.charCodeAt(i * 2) | (bin.charCodeAt(i * 2 + 1) << 8); if (v >= 32768) v -= 65536; d[i] = v / 32768; }
  return buf;
}
function joinBuffers(list) {
  if (list.length === 1) return list[0];
  const sr = list[0].sampleRate, len = list.reduce((a, b) => a + b.length, 0), out = new AudioBuffer({ numberOfChannels: 1, length: Math.max(1, len), sampleRate: sr }), d = out.getChannelData(0); let o = 0;
  for (const b of list) { d.set(b.getChannelData(0), o); o += b.length; } return out;
}
function bufToWav(buf, sr = buf.sampleRate, maxSec = Infinity) {
  const d = buf.getChannelData(0), n = Math.min(d.length, Math.floor(maxSec * sr)), ab = new ArrayBuffer(44 + n * 2), v = new DataView(ab);
  const wr = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  wr(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); wr(8, 'WAVE'); wr(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); wr(36, 'data'); v.setUint32(40, n * 2, true);
  for (let i = 0, o = 44; i < n; i++, o += 2) { const x = clamp(d[i], -1, 1); v.setInt16(o, x < 0 ? x * 0x8000 : x * 0x7fff, true); }
  return ab;
}
async function resample(buf, sr, maxSec = Infinity) {
  const dur = Math.min(buf.duration, maxSec), ctx = new OfflineAudioContext(1, Math.max(1, Math.ceil(dur * sr)), sr);
  const s = ctx.createBufferSource(); s.buffer = buf; s.connect(ctx.destination); s.start(0); return await ctx.startRendering();
}
// pembagian waktu kata tanpa AI: ikut bagian yang bersuara
function estimateWords(text, buf, dur) {
  const words = String(text || '').split(/\s+/).filter(Boolean); if (!words.length) return [];
  let segs = [];
  if (buf) {
    const d = buf.getChannelData(0), step = Math.round(buf.sampleRate * .02), n = Math.floor(d.length / step), rms = [];
    for (let i = 0; i < n; i++) { let s = 0; for (let j = i * step; j < (i + 1) * step; j++) s += d[j] * d[j]; rms.push(Math.sqrt(s / step)); }
    const thr = Math.max(.01, [...rms].sort((a, b) => a - b)[Math.floor(n * .9)] * .2); let st = -1;
    rms.forEach((r, i) => { if (r > thr && st < 0) st = i; if ((r <= thr || i === n - 1) && st >= 0) { segs.push([st * .02, i * .02]); st = -1; } });
    const merged = []; for (const s of segs) { const l = merged[merged.length - 1]; if (l && s[0] - l[1] < .25) l[1] = s[1]; else if (s[1] - s[0] > .08) merged.push([...s]); } segs = merged;
  }
  if (!segs.length) segs = [[.2, Math.max(.6, dur - .3)]];
  const total = segs.reduce((a, s) => a + s[1] - s[0], 0), wl = words.map(w => w.length + 2), sumL = wl.reduce((a, b) => a + b, 0);
  const out = []; let acc = 0;
  const at = x => { let r = x; for (const s of segs) { const l = s[1] - s[0]; if (r <= l) return s[0] + r; r -= l; } return segs[segs.length - 1][1]; };
  words.forEach((w, i) => { const a = acc / sumL * total; acc += wl[i]; const b = acc / sumL * total; out.push({ w, s: +at(a).toFixed(2), e: +Math.max(at(a) + .08, at(b) - .03).toFixed(2) }); });
  return out;
}
// ---------- bersihkan teks sebelum dibacakan TTS ----------
// Hanya kalimat naskah yang dikirim. Petunjuk panggung, label pembicara, dan emoji dibuang
// supaya tidak ada yang ikut terbaca.
function ttsText(s) {
  return String(s || '')
    .replace(/\[[^\]]*\]|\([^)]*\)|\{[^}]*\}|<[^>]*>/g, ' ')
    .replace(/^\s*(narator|narrator|voice ?over|vo|pembicara|speaker|host|suara)\s*\d*\s*:\s*/gim, '')
    .replace(/^\s*(bacakan|ucapkan|say|read aloud|speak)\b[^:\n]{0,140}:\s*/i, '')
    .replace(/[*_#~`>|]/g, '')
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '')
    .replace(/\s+/g, ' ').trim();
}
// ---------- buang derau di ujung suara TTS ----------
// Gemini TTS kadang menambahkan semburan derau di akhir audio (bentuknya kotak di gelombang suara).
// Ciri derau: volumenya rata (tidak naik-turun seperti suku kata), cukup panjang, dan biasanya berdesis.
function noiseTailAt(d, sr, lastEnd = null) {
  const F = .02, step = Math.max(1, Math.round(sr * F)), n = Math.floor(d.length / step); if (n < 10) return null;
  const rms = new Float32Array(n), pk = new Float32Array(n), zcr = new Float32Array(n);
  for (let i = 0; i < n; i++) { let s = 0, z = 0, p = 0, prev = d[i * step]; for (let j = i * step; j < (i + 1) * step; j++) { const v = d[j], a = v < 0 ? -v : v; s += v * v; if (a > p) p = a; if ((v >= 0) !== (prev >= 0)) z++; prev = v; } rms[i] = Math.sqrt(s / step); pk[i] = p; zcr[i] = z / step; }
  const sorted = Array.from(rms).sort((x, y) => x - y), loud = sorted[Math.floor(n * .95)] || 0; if (loud < .003) return null;
  const sil = Math.max(.003, loud * .06);
  // ciri sebuah rentang frame [a, b): apakah lebih mirip derau daripada ucapan?
  const stats = (a, b) => { let s = 0, q = 0, z = 0, p = 0, e = 0; for (let i = a; i < b; i++) { s += rms[i]; q += rms[i] * rms[i]; z += zcr[i]; if (pk[i] > p) p = pk[i]; e += rms[i] * rms[i]; } const len = b - a, mean = s / len; return { len, mean, cv: Math.sqrt(Math.max(0, q / len - mean * mean)) / (mean || 1), zcr: z / len, crest: p / (Math.sqrt(e / len) || 1), peak: p }; };
  const isNoise = st => (st.crest < 1.7 && st.len >= 3) || st.zcr > .2 || (st.cv < .22 && st.len >= 5) || (st.len <= 12 && st.peak > .97) || (st.len >= 15 && st.cv < .3);
  const isStrong = st => (st.crest < 1.7 && st.len >= 3) || st.zcr > .2 || (st.len <= 12 && st.peak > .97);
  let endF = n, cutF = null;
  for (let it = 0; it < 6; it++) {
    while (endF > 0 && rms[endF - 1] < sil) endF--;
    if (endF < 3) break;
    // segmen bersuara terakhir (dipisah jeda hening ≥ 0,1 dtk)
    let i = endF - 1, run = 0;
    for (; i >= 0; i--) { if (rms[i] < sil) { if (++run >= 5) break; } else run = 0; }
    const segStart = i < 0 ? 0 : i + run, segLen = endF - segStart;
    let hit = null;
    if (segLen <= 30) {
      // bagian paling ujung yang volumenya seragam (mis. kotak yang menempel ke suku kata terakhir)
      const m3 = Array.from(rms.slice(Math.max(segStart, endF - 3), endF)).sort((x, y) => x - y)[1] ?? rms[endF - 1];
      let b = endF; while (b > segStart && rms[b - 1] > m3 * .6 && rms[b - 1] < m3 * 1.6) b--;
      if (b > segStart && endF - b >= 3 && isStrong(stats(b, endF))) hit = b;
      else if (isNoise(stats(segStart, endF))) hit = segStart;
    }
    // derau panjang yang menempel ke ucapan: blok bervolume rata di ujung
    if (hit == null) {
      const ref = Array.from(rms.slice(Math.max(0, endF - 10), endF)).sort((x, y) => x - y)[Math.min(5, endF - 1)] ?? rms[endF - 1];
      let b = endF; while (b > 0 && rms[b - 1] > ref * .55 && rms[b - 1] < ref * 1.8) b--;
      if (endF - b >= 15) { const st = stats(b, endF); if (st.cv < .3 && (st.zcr > .18 || st.cv < .14 || st.len >= 40 || st.crest < 1.7)) hit = b; }
    }
    if (hit == null) break;
    if (lastEnd != null && hit * F < lastEnd - .8) break; // jangan memotong ucapan (waktu transkrip bisa meleset)
    endF = hit; cutF = hit;
  }
  if (cutF == null) return null;
  const noiseAt = cutF * F;
  while (cutF > 0 && rms[cutF - 1] < sil) cutF--; // rapatkan ke akhir ucapan
  return Math.max(.1, Math.min(d.length / sr, cutF * F + .25, noiseAt - .02));
}
// selalu pudarkan 40 ms terakhir supaya tidak ada bunyi klik di ujung
function fadeEnd(buf, sec = .04) {
  const out = new AudioBuffer({ numberOfChannels: buf.numberOfChannels, length: buf.length, sampleRate: buf.sampleRate }), n = Math.min(buf.length, Math.round(buf.sampleRate * sec));
  for (let c = 0; c < buf.numberOfChannels; c++) { const d = out.getChannelData(c); d.set(buf.getChannelData(c)); for (let i = 0; i < n; i++) d[d.length - 1 - i] *= i / n; }
  return out;
}
function trimVoiceTail(buf, lastEnd = null) {
  if (!buf) return { buf, cut: 0 };
  const at = noiseTailAt(buf.getChannelData(0), buf.sampleRate, lastEnd);
  if (at == null || at > buf.duration - .1) return { buf: fadeEnd(buf), cut: 0 };
  return { buf: sliceBuf(buf, 0, at), cut: +(buf.duration - at).toFixed(2) };
}
// ---------- sejajarkan transkrip suara AI dengan naskah ----------
// Membuang ucapan di luar naskah (mis. instruksi yang ikut terbaca) dari audio dan caption,
// lalu memakai ejaan kata dari naskah dengan waktu dari transkrip.
const normW = w => String(w || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^\p{L}\p{N}]/gu, '');
function sliceBuf(buf, t0, t1) {
  const sr = buf.sampleRate, a = Math.max(0, Math.floor(t0 * sr)), b = Math.min(buf.length, Math.ceil(t1 * sr)), len = Math.max(1, b - a);
  const out = new AudioBuffer({ numberOfChannels: buf.numberOfChannels, length: len, sampleRate: sr }), fade = Math.min(len >> 1, Math.round(sr * .012));
  for (let c = 0; c < buf.numberOfChannels; c++) { const d = out.getChannelData(c); d.set(buf.getChannelData(c).subarray(a, b)); for (let i = 0; i < fade; i++) { d[i] *= i / fade; d[len - 1 - i] *= i / fade; } }
  return out;
}
function alignScript(script, tr, buf) {
  const S = String(script || '').split(/\s+/).filter(Boolean); if (!S.length || !tr?.length || !buf) return null;
  const A = S.map(normW), B = tr.map(x => normW(x.w)), n = A.length, m = B.length;
  const eq = (a, b) => !!a && !!b && (a === b || (a.length > 3 && b.length > 3 && (a.startsWith(b) || b.startsWith(a))));
  const L = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = eq(A[i], B[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const map = new Array(n).fill(-1); let i = 0, j = 0;
  while (i < n && j < m) { if (eq(A[i], B[j]) && L[i][j] === L[i + 1][j + 1] + 1) { map[i] = j; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
  const hits = map.filter(x => x >= 0); if (hits.length < Math.max(3, n * .4)) return null;
  const j0 = hits[0], j1 = hits[hits.length - 1];
  let off = 0, end = buf.duration;
  if (j0 > 0) off = Math.max(0, Math.min(tr[j0].s - .12, (tr[j0 - 1].e + tr[j0].s) / 2));
  if (j1 < m - 1) end = Math.min(buf.duration, Math.max(tr[j1].e + .25, (tr[j1].e + tr[j1 + 1].s) / 2));
  const T = map.map(x => x >= 0 ? { s: tr[x].s, e: tr[x].e } : null);
  for (let k = 0; k < n;) {
    if (T[k]) { k++; continue; }
    let e2 = k; while (e2 < n && !T[e2]) e2++;
    const cnt = e2 - k, t0 = k > 0 ? T[k - 1].e : Math.max(off, (T[e2]?.s ?? off) - cnt * .35), t1 = e2 < n ? T[e2].s : Math.min(end, t0 + cnt * .4);
    const lens = S.slice(k, e2).map(w => w.length + 1), sum = lens.reduce((a, b) => a + b, 0); let acc = 0;
    for (let q = k; q < e2; q++) { const a = t0 + (t1 - t0) * acc / sum; acc += lens[q - k]; const b = t0 + (t1 - t0) * acc / sum; T[q] = { s: a, e: Math.max(a + .06, b - .02) }; }
    k = e2;
  }
  const words = S.map((w, k) => ({ w, s: +Math.max(0, T[k].s - off).toFixed(2), e: +Math.max(0, Math.min(end, T[k].e) - off).toFixed(2) }));
  const cut = off > .05 || end < buf.duration - .05;
  return { words, cut, buf: cut ? sliceBuf(buf, off, end) : buf, removed: (j0 > 0 ? j0 : 0) + (m - 1 - j1) };
}

// ================= KLIEN GEMINI =================
const API = 'https://generativelanguage.googleapis.com/v1beta';
class AIError extends Error { constructor(m, code) { super(m); this.code = code; } }
function parseJSON(txt) { const s = String(txt).trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, ''); try { return JSON.parse(s); } catch { const a = s.indexOf('{'), b = s.lastIndexOf('}'); if (a >= 0 && b > a) return JSON.parse(s.slice(a, b + 1)); throw new Error('json'); } }
async function apiCall(model, method, body, signal) {
  const key = effKey(), headers = { 'Content-Type': 'application/json' }; if (key) headers['x-goog-api-key'] = key;
  return fetch(`${API}/models/${model}:${method}${key ? '' : '?key='}`, { method: 'POST', headers, body: JSON.stringify(body), signal });
}
// ---------- baca pesan error asli dari Google ----------
function googleErr(text) {
  let j = null; try { j = JSON.parse(text); } catch {}
  const e = j?.error || {}, details = Array.isArray(e.details) ? e.details : [];
  const reason = details.map(d => d.reason).find(Boolean) || '';
  return { msg: String(e.message || text || '').replace(/\s+/g, ' ').trim(), status: e.status || '', reason };
}
function errOf(status, text, model) {
  const g = googleErr(text), all = `${g.reason} ${g.status} ${g.msg}`, raw = g.msg ? ` (Pesan Google: ${g.msg.slice(0, 180)})` : '';
  const auth = (m, why) => { const e = new AIError(m, 'auth'); e.why = why; e.raw = g.msg; return e; };
  if (!CANVAS && !R.apiKey && (status === 401 || status === 403)) return auth('API key belum diisi. Tempel Gemini API key di panel Proyek.', 'nokey');
  if (/API_KEY_INVALID|API key not valid|API key expired|invalid api key|key.*expired/i.test(all)) return auth(`API key tidak valid atau sudah kedaluwarsa. Pastikan key disalin utuh (diawali "AIza"), tanpa spasi atau tanda kutip.${raw}`, 'invalid');
  if (/REFERRER|referer|referrer/i.test(all)) return auth(`Key ini dibatasi hanya untuk situs tertentu, sehingga ditolak saat dipakai dari halaman ini${location.protocol === 'file:' ? ' (file dibuka langsung dari komputer)' : ''}. Di Google Cloud Console → APIs & Services → Credentials → key ini, ubah "Application restrictions" menjadi None, atau buat key baru di AI Studio.${raw}`, 'referrer');
  if (/SERVICE_DISABLED|has not been used in project|is disabled|it is disabled/i.test(all)) return auth(`Generative Language API belum aktif di project Google Cloud milik key ini. Aktifkan API tersebut, atau buat key baru langsung dari AI Studio (otomatis aktif).${raw}`, 'disabled');
  if (/API_KEY_SERVICE_BLOCKED|are blocked|is blocked/i.test(all)) return auth(`Key ini dibatasi untuk API lain. Di Google Cloud Console → Credentials → key ini → "API restrictions", izinkan Generative Language API, atau buat key baru di AI Studio.${raw}`, 'blocked');
  if (/denied access|project has been denied|contact support/i.test(all)) return auth(`Project Google milik key ini sedang dibatasi oleh Google (di AI Studio biasanya tertulis "Billing Tier: Unavailable" atau "Restricted"). Ini bukan kesalahan key atau aplikasi. Pakai key dari akun Google lain yang tier-nya "Free tier", atau lengkapi verifikasi akun (umur, nomor HP, verifikasi 2 langkah) lalu buat key baru.${raw}`, 'restricted');
  if (/leak/i.test(all)) return auth(`Google memblokir key ini karena terdeteksi bocor ke publik. Hapus key itu dan buat key baru di AI Studio.${raw}`, 'leaked');
  if (/location is not supported|User location|not available in your (country|region)/i.test(all)) return auth(`Gemini API tidak melayani lokasi jaringan Anda saat ini. Jika memakai VPN atau proxy, matikan dulu lalu coba lagi.${raw}`, 'region');
  if (status === 400 && /api[ _-]?key/i.test(all)) return auth(`API key ditolak Google.${raw}`, 'invalid');
  if (status === 401 && CANVAS) { const e = new AIError(`Gemini Canvas menolak permintaan ke model ${model}.${raw}`, 'model'); e.raw = g.msg; return e; }
  if (status === 401) return auth(`Google menolak kredensial yang dikirim.${raw}`, 'unauth');
  if (status === 429 && /per ?day|daily|PerDay/i.test(all)) return new AIError(`Kuota harian model ${model} untuk key ini sudah habis.`, 'quota');
  if (status === 429) return new AIError('Gemini sedang membatasi permintaan (kuota per menit penuh).', 'busy');
  // 403 lain biasanya izin untuk model tertentu saja: coba model lain, jangan hentikan semuanya
  if (status === 403) { const e = new AIError(`Model ${model} tidak diizinkan untuk key ini.${raw}`, 'model'); e.raw = g.msg; return e; }
  if (status === 404 || (status === 400 && /not found|not supported|is not available|unknown name|deprecated|no longer/i.test(all))) return new AIError(`Model ${model} tidak tersedia untuk key ini.`, 'model');
  if (status === 413 || /payload size|request entity too large|exceeds the limit/i.test(all)) return new AIError('Data yang dikirim ke Gemini terlalu besar (batas 20 MB). Coba video yang lebih pendek.', 'other');
  if (status >= 500) return new AIError('Server Gemini sedang sibuk atau kelebihan beban.', 'busy');
  return new AIError(`Gemini menolak permintaan (${status}).${raw}`, 'other');
}
// ---------- cek key: satu panggilan ringan ke daftar model ----------
async function checkKey() {
  if (CANVAS) return { ok: true, msg: 'Mode Gemini Canvas: AI memakai akun Gemini Anda.' };
  if (!R.apiKey) return { ok: false, msg: 'Belum ada key.' };
  try {
    const r = await apiGet('models?pageSize=1000');
    if (r.ok) {
      const j = await r.json(), gen = (j.models || []).filter(m => (m.supportedGenerationMethods || []).includes('generateContent')).map(m => String(m.name).replace(/^models\//, ''));
      // daftar model bisa lolos walau project dibatasi, jadi uji juga satu permintaan kecil
      const pick = ['gemini-flash-lite-latest', 'gemini-2.5-flash-lite', 'gemini-flash-latest', 'gemini-2.5-flash'].find(m => gen.includes(m)) || gen.find(m => /^gemini-.*flash/.test(m) && !/tts|image|live|audio/.test(m));
      if (pick) {
        let last = null;
        for (const m of [pick, ...gen.filter(x => x !== pick && /^gemini-.*flash/.test(x) && !/tts|image|live|audio|embed/.test(x)).slice(0, 2)]) {
          const r2 = await apiCall(m, 'generateContent', { contents: [{ role: 'user', parts: [{ text: 'ok' }] }], generationConfig: { maxOutputTokens: 1 } });
          if (r2.ok) { last = null; break; }
          const e2 = errOf(r2.status, await r2.text().catch(() => ''), m);
          if (e2.code === 'auth') return { ok: false, msg: e2.message };
          if (e2.code === 'busy' || e2.code === 'quota') { last = null; break; } // key sah, hanya sedang dibatasi kuota
          last = e2;
        }
        if (last && last.code === 'model' && /tidak diizinkan/.test(last.message)) return { ok: false, msg: last.message }; // semua model ditolak 403
      }
      return { ok: true, msg: `Key aktif · ${gen.length} model Gemini bisa dipakai.` };
    }
    const t = await r.text().catch(() => ''); const e = errOf(r.status, t, 'daftar model');
    return { ok: false, msg: e.message };
  } catch { return { ok: false, msg: 'Tidak bisa menghubungi Google. Periksa koneksi internet, atau matikan pemblokir iklan/ekstensi yang memblokir googleapis.com.' }; }
}
// ---------- deteksi model yang tersedia untuk key ini ----------
let MODELS_P = null;
const STATIC = { text: ['gemini-flash-latest', 'gemini-3-flash-preview', 'gemini-2.5-flash', 'gemini-flash-lite-latest', 'gemini-2.5-flash-lite'], tts: ['gemini-2.5-flash-preview-tts', 'gemini-2.5-pro-preview-tts'], image: ['gemini-2.5-flash-image'], imagen: ['imagen-4.0-generate-001'], veo: ['veo-3.1-fast-generate-preview', 'veo-3.0-fast-generate-001', 'veo-3.1-generate-preview', 'veo-3.0-generate-001', 'veo-2.0-generate-001'] };
const verOf = n => { const m = /-(\d+(?:\.\d+)?)-/.exec(n + '-'); return m ? parseFloat(m[1]) : 0; };
const rankModel = n => verOf(n) * 10 + (/latest/.test(n) ? 50 : 0) - (/preview|exp/.test(n) ? 1 : 0) - (/\d{2}-\d{4}|\d{3}$/.test(n) ? 2 : 0);
const byRank = (a, b) => rankModel(b) - rankModel(a);
function discoverModels(force = false) {
  if (MODELS_P && !force) return MODELS_P;
  if (CANVAS) { const all = new Set(Object.values(CANVAS_MODELS).flat()); return MODELS_P = Promise.resolve({ ok: true, all, ...CANVAS_MODELS }); }
  MODELS_P = (async () => {
    const all = []; let token = '';
    try {
      for (let i = 0; i < 6; i++) {
        const r = await apiGet(`models?pageSize=1000${token ? `&pageToken=${encodeURIComponent(token)}` : ''}`); if (!r.ok) break;
        const j = await r.json(); all.push(...(j.models || [])); token = j.nextPageToken; if (!token) break;
      }
    } catch (e) { console.warn('daftar model', e); }
    const nm = m => String(m.name || '').replace(/^models\//, ''), has = (m, k) => (m.supportedGenerationMethods || []).includes(k);
    const gen = all.filter(m => has(m, 'generateContent')).map(nm);
    const D = {
      ok: gen.length > 0, all: new Set(all.map(nm)),
      text: gen.filter(n => /^gemini-/.test(n) && /flash/.test(n) && !/lite|tts|image|live|audio|embed|robotics|computer-use|native/.test(n)).sort(byRank),
      lite: gen.filter(n => /^gemini-/.test(n) && /flash-lite/.test(n) && !/tts|image|live|audio/.test(n)).sort(byRank),
      pro: gen.filter(n => /^gemini-/.test(n) && /pro/.test(n) && !/tts|image|live|audio|vision|computer-use/.test(n)).sort(byRank),
      tts: gen.filter(n => /tts/.test(n)).sort((a, b) => (/flash/.test(b) - /flash/.test(a)) || byRank(a, b)),
      image: gen.filter(n => /^gemini-/.test(n) && /image/.test(n) && !/tts/.test(n)).sort((a, b) => (/flash/.test(b) - /flash/.test(a)) || byRank(a, b)),
      imagen: all.filter(m => has(m, 'predict') && /^imagen/.test(nm(m))).map(nm).sort((a, b) => (/fast/.test(a) - /fast/.test(b)) || byRank(a, b)),
      veo: all.filter(m => has(m, 'predictLongRunning') && /^veo/.test(nm(m))).map(nm).sort((a, b) => (/fast/.test(b) - /fast/.test(a)) || byRank(a, b))
    };
    return D;
  })();
  return MODELS_P;
}
// gabungkan model terdeteksi dengan daftar cadangan; buang yang pasti tidak ada
async function modelList(kind, preferred) {
  if (CANVAS) preferred = null;
  const D = await discoverModels(), found = D[kind] || [];
  const fallback = (STATIC[kind] || []).filter(n => !D.ok || D.all.has(n));
  const list = [...new Set([preferred && preferred !== 'auto' ? preferred : null, ...found.slice(0, 4), ...fallback, ...(kind === 'text' ? [...(D.lite || []).slice(0, 2), ...(D.ok ? [] : STATIC.text)] : [])].filter(Boolean))];
  const out = list.length ? list : (STATIC[kind] || []);
  if (kind === 'text' && (!preferred || preferred === 'auto') && R.modelUsed && out.includes(R.modelUsed)) out.unshift(...out.splice(out.indexOf(R.modelUsed), 1));
  const cool = n => (Date.now() - (COOL[n] || 0)) < 90000;   // model yang barusan sibuk dicoba paling akhir
  return [...out.filter(n => !cool(n)), ...out.filter(cool)];
}
const COOL = {};
const ERR_RANK = { auth: 9, quota: 7, busy: 6, net: 5, other: 4, parse: 3, empty: 3, model: 1 };
function worse(a, b) { return !a || (ERR_RANK[b.code] || 0) > (ERR_RANK[a.code] || 0) ? b : a; }
function finalErr(best, tried) {
  if (!best) return new AIError('AI gagal merespons.', 'other');
  const list = tried.length ? ` Model yang dicoba: ${tried.join(', ')}.` : '';
  if (best.code === 'model' && CANVAS) return new AIError(`Model AI yang diizinkan Gemini Canvas sedang tidak bisa dipakai.${list} Coba lagi beberapa saat. Bila terus gagal, Google mungkin baru mengganti model Canvas; buka aplikasi versi file dan isi API key sendiri.`, 'model');
  if (best.code === 'model') return new AIError(`Tidak ada model Gemini yang bisa dipakai key ini untuk langkah ini.${list} Buka panel Proyek, klik "Periksa model", lalu pilih model yang tersedia.`, 'model');
  if (best.code === 'busy') return new AIError(`${best.message} Tunggu 1–2 menit lalu klik tombol yang sama lagi.${list}`, 'busy');
  if (best.code === 'quota') return new AIError(`${best.message} Kuota model lain juga habis. Coba lagi besok, atau aktifkan billing di Google AI Studio.${list}`, 'quota');
  return best;
}
async function gemini(parts, { schema, system, temp = .6 } = {}) {
  const list = await modelList('text', R.model); let best = null; const tried = [];
  // Di Gemini Canvas, sebagian bentuk permintaan (instruksi sistem, skema besar) bisa ditolak proxy-nya.
  // Jadi bila ditolak, coba lagi di model yang sama dengan bentuk yang makin sederhana sebelum pindah model.
  const VARIANTS = CANVAS ? [{ sys: true, sch: true }, { sys: false, sch: true }, { sys: false, sch: false }] : [{ sys: true, sch: true }];
  const jsonHint = sc => `\n\nJawab HANYA dengan satu objek JSON yang valid (tanpa teks lain, tanpa \`\`\`), mengikuti skema berikut:\n${JSON.stringify(sc)}`;
  for (const m of list) {
    tried.push(m);
    let vi = CANVAS ? Math.min(R.canvasVariant || 0, VARIANTS.length - 1) : 0, useSchema = !!schema; // pakai bentuk yang terakhir berhasil
    for (let att = 0; att < 3; att++) {
      const V = VARIANTS[Math.min(vi, VARIANTS.length - 1)], schOn = useSchema && V.sch;
      const gc = { responseMimeType: 'application/json', temperature: temp }; if (schOn) gc.responseSchema = schema;
      let ps = parts;
      if ((system && !V.sys) || (schema && !schOn && CANVAS)) {
        const pre = system && !V.sys ? `INSTRUKSI SISTEM (wajib dipatuhi):\n${system}\n\n---\n\n` : '', post = schema && !schOn && CANVAS ? jsonHint(schema) : '';
        ps = parts.map((p, i) => p.text != null && i === parts.length - 1 ? { text: pre + p.text + post } : p);
        if (!ps.some(p => p.text != null)) ps = [...parts, { text: pre + post }];
      }
      const body = { contents: [{ role: 'user', parts: ps }], generationConfig: gc }; if (system && V.sys) body.systemInstruction = { parts: [{ text: system }] };
      let r; try { r = await apiCall(m, 'generateContent', body); } catch { best = worse(best, new AIError('Tidak bisa menghubungi Gemini. Cek koneksi internet.', 'net')); await sleep(1500 * (att + 1)); continue; }
      if (r.ok) {
        const j = await r.json(), c = j.candidates?.[0], txt = (c?.content?.parts || []).filter(p => !p.thought).map(p => p.text || '').join('');
        if (!txt) { best = worse(best, new AIError(`Gemini tidak mengembalikan hasil (${c?.finishReason || j.promptFeedback?.blockReason || 'kosong'}).`, 'empty')); if (att >= 1) break; continue; }
        try { const out = parseJSON(txt); R.modelUsed = m; delete COOL[m]; if (CANVAS && vi) R.canvasVariant = vi; return out; } catch { best = worse(best, new AIError('Format jawaban AI rusak.', 'parse')); if (att >= 1) break; continue; }
      }
      const t = await r.text().catch(() => '');
      if (r.status === 400 && useSchema && /schema|too many states|constraint/i.test(t)) { useSchema = false; att--; continue; }
      const e = errOf(r.status, t, m); best = worse(best, e); if (e.code === 'busy' || e.code === 'quota') COOL[m] = Date.now();
      // Canvas: 400/401/403 sering berarti bentuk permintaan ditolak. Sederhanakan dulu, jangan langsung menyerah.
      if (CANVAS && [400, 401, 403].includes(r.status) && vi < VARIANTS.length - 1) { vi++; att--; continue; }
      if (e.code === 'auth' && !CANVAS) throw e;
      if (e.code === 'model' || e.code === 'other' || e.code === 'quota' || e.code === 'auth') break;
      if (att < 2) await sleep(1500 * Math.pow(2, att));
    }
  }
  throw finalErr(best, tried);
}
const img64 = b64 => ({ inlineData: { mimeType: 'image/jpeg', data: b64 } });

// ================= SKEMA =================
const S_WORDS = { type: 'OBJECT', properties: { language: { type: 'STRING' }, words: { type: 'ARRAY', items: { type: 'OBJECT', properties: { w: { type: 'STRING' }, s: { type: 'NUMBER' }, e: { type: 'NUMBER' } }, required: ['w', 's', 'e'] } } }, required: ['words'] };
const S_VISION = { type: 'OBJECT', properties: { faceX: { type: 'NUMBER' }, faceY: { type: 'NUMBER' }, shot: { type: 'STRING' }, setting: { type: 'STRING' }, tone: { type: 'STRING' }, colors: { type: 'ARRAY', items: { type: 'STRING' } } }, required: ['faceX', 'faceY'] };
const S_ASSETS = { type: 'OBJECT', properties: { assets: { type: 'ARRAY', items: { type: 'OBJECT', properties: { id: { type: 'STRING' }, desc: { type: 'STRING' } }, required: ['id', 'desc'] } } }, required: ['assets'] };
const S_ITEM = { type: 'OBJECT', properties: { label: { type: 'STRING' }, value: { type: 'STRING' }, icon: { type: 'STRING' } } };
const S_EL = { type: 'OBJECT', properties: {
  type: { type: 'STRING', enum: Object.keys(TYPES) }, start: { type: 'NUMBER' }, end: { type: 'NUMBER' }, text: { type: 'STRING' }, sub: { type: 'STRING' }, value: { type: 'STRING' },
  items: { type: 'ARRAY', items: S_ITEM }, asset: { type: 'STRING' }, layout: { type: 'STRING' }, kind: { type: 'STRING' }, pos: { type: 'STRING' }, trans: { type: 'STRING' }, sfx: { type: 'STRING' },
  behind: { type: 'BOOLEAN' }, emoji: { type: 'STRING' }, x: { type: 'NUMBER' }, y: { type: 'NUMBER' }, amount: { type: 'NUMBER' }, imagePrompt: { type: 'STRING' } }, required: ['type', 'start', 'end'] };
const S_PLAN = { type: 'OBJECT', properties: { title: { type: 'STRING' }, mood: { type: 'STRING' }, preset: { type: 'STRING' }, captionMode: { type: 'STRING' }, keywords: { type: 'ARRAY', items: { type: 'INTEGER' } }, els: { type: 'ARRAY', items: S_EL } }, required: ['els'] };
const S_SCRIPT = { type: 'OBJECT', properties: { title: { type: 'STRING' }, script: { type: 'STRING' } }, required: ['script'] };
const S_STYLE = { type: 'OBJECT', properties: {
  name: { type: 'STRING' }, accent: { type: 'STRING' }, accent2: { type: 'STRING' }, ink: { type: 'STRING' },
  fontD: { type: 'STRING', enum: FONTS }, fontB: { type: 'STRING', enum: FONTS }, capFont: { type: 'STRING', enum: FONTS },
  card: { type: 'STRING', enum: OPT.card.map(o => o[0]) }, kw: { type: 'STRING', enum: OPT.kw.map(o => o[0]) }, textIn: { type: 'STRING', enum: OPT.textIn.map(o => o[0]) },
  split: { type: 'STRING', enum: OPT.split.map(o => o[0]) }, ease: { type: 'STRING', enum: OPT.ease.map(o => o[0]) }, emph: { type: 'STRING', enum: OPT.emph.map(o => o[0]) },
  sceneBg: { type: 'STRING', enum: OPT.sceneBg.map(o => o[0]) }, tone: { type: 'STRING', enum: OPT.tone.map(o => o[0]) }, grading: { type: 'STRING', enum: OPT.grading.map(o => o[0]) },
  capMode: { type: 'STRING', enum: OPT.capMode.map(o => o[0]) }, trans: { type: 'STRING' }, upper: { type: 'BOOLEAN' }, vignette: { type: 'NUMBER' }, grain: { type: 'NUMBER' }, camera: { type: 'STRING' } } };

// ================= PROMPT (ditulis untuk Cendekia Motion Studio) =================
const CATALOG = `Katalog elemen dan field yang dipakai:
- title: judul besar. text 3–7 kata, sub opsional. behind=true menaruh judul di belakang tubuh pembicara (bagus untuk hook).
- card: satu konsep kunci. text ≤6 kata, sub ≤12 kata.
- stat: hanya bila ada angka yang diucapkan. value = angka persis ("70%", "3x", "Rp 2 juta"), text = artinya ≤7 kata.
- list: beberapa hal yang disebut berurutan. text = judul, items = 2–5 butir (label ≤5 kata).
- chips: 2–5 kata kunci singkat (items.label).
- quote: kalimat yang layak dikutip. text ≤14 kata, sub = nama pembicara bila diketahui.
- lower: nama & peran pembicara saat ia memperkenalkan diri. text = nama, sub = peran.
- callout: label yang menunjuk titik di layar. text ≤5 kata, x,y = titik (0–1).
- notif: notifikasi/pesan masuk sebagai bukti sosial. sub = nama aplikasi/pengirim, text = isi ≤12 kata.
- sticker: emoji ekspresif (emoji, x, y). Hemat.
- media: b-roll. asset = id aset yang cocok, atau, bila visual realistis AI menyala, kosongkan asset dan isi imagePrompt (lihat aturan visual realistis). layout: full | pip | split | phone | float | spotlight. text = keterangan singkat opsional.
- chapter: judul bagian layar penuh. text ≤5 kata, sub opsional. behind=true untuk teks raksasa di belakang orang.
- diagram: animasi penjelasan layar penuh. kind: steps | compare | bars | flow | cycle | ring. text = judul, items = {label, value, icon(emoji)}. compare: items[0] = {label: judul kolom kiri, value: judul kolom kanan}, butir berikutnya label = sisi kiri, value = sisi kanan. bars: value berupa angka. ring: satu item, value persen.
- cta: ajakan di akhir, end = durasi. text = ajakan, sub = aksi atau alamat.
- zoom: punch-in kamera pada penekanan. amount 1.08–1.25, durasi 1–2,5 dtk.
- fx: aksen sangat singkat, kind: flash | shake | glitch | leak | pulse (0,3–0,8 dtk).`;
const RULES = `Aturan umum:
1. Semua isi grafis berasal dari ucapan atau data yang diberikan. Jangan mengarang fakta, angka, nama, atau janji.
2. Elemen mulai tepat saat hal terkait diucapkan (lihat timestamp) dan bertahan sampai idenya selesai.
3. Elemen jalur teks (title, card, stat, list, chips, quote, lower, callout, notif, media pip) tidak saling tumpang tindih. Adegan layar penuh (media non-pip, chapter, diagram, cta) juga tidak saling tumpang tindih. zoom, fx, dan sticker boleh bersamaan.
4. Isi WAJIB: setiap elemen selain zoom, fx, dan sticker harus punya text yang tidak kosong. diagram WAJIB punya text dan 2–5 items berisi label. cta WAJIB punya text (ajakan) dan sub (aksi atau alamat). stat WAJIB punya value. Pakai nama field persis seperti katalog (text, sub, value, items.label/value/icon).
4b. Pada setiap text, beri bintang pada satu kata terpenting, contoh "Belajar *AI* dari nol". Jangan beri bintang pada value.
5. trans (transisi masuk adegan layar penuh): auto | fade | slide | up | zoom | wipe | circle | blinds | flash | blur | cut. sfx: auto, kecuali ada alasan khusus.
6. keywords: indeks kata (angka dalam kurung di transkrip) yang ditonjolkan di caption, kira-kira 1 dari 8 kata. Prioritaskan angka, nama, dan kata benda penting.
7. mood musik: corporate | lofi | hype | cinematic | happy | tech. preset gaya: ${Object.keys(PRESETS).join(' | ')}. captionMode: pop | box | karaoke | tiered | single | calm.
8. Gunakan bahasa yang sama dengan transkrip.`;
const SYS_TALK = `Kamu sutradara motion graphics untuk video pendek. Kamu menerima transkrip bertimestamp dari video orang berbicara, lalu merancang lapisan grafis yang membuat isinya lebih mudah dipahami dan membuat penonton bertahan. Balas JSON sesuai skema saja.
${CATALOG}
${RULES}
Khusus video berbicara:
- Wajib tepat satu title di 0–0,4 dtk (durasi 2,5–3,5 dtk) sebagai hook, dan tepat satu cta di 3–4 dtk terakhir.
- Adegan layar penuh total maksimal ±35% durasi supaya wajah tetap jadi pusat. Diagram 4–7 dtk, media 2–4 dtk.
- Zoom berjarak minimal 4 dtk. fx maksimal satu per 15 dtk.
- Kepadatan mengikuti arahan: jarang ≈ 1 elemen per 10 dtk, sedang ≈ 1 per 6 dtk, padat ≈ 1 per 4 dtk (zoom ikut dihitung).
- pos kartu: "top" bila wajah ada di tengah atau bawah frame, "bottom" bila wajah di atas. stat "center".`;
const SYS_PRODUCT = `Kamu sutradara video iklan produk pendek tanpa orang. Videonya berupa adegan layar penuh yang berurutan, ditemani narasi (transkrip bertimestamp) dan caption. Balas JSON sesuai skema saja.
${CATALOG}
${RULES}
Khusus video produk:
- Jalur adegan (media non-pip, chapter, diagram, cta) harus menutup seluruh durasi dari 0 tanpa celah dan tanpa tumpang tindih. Ganti adegan tiap 2–4 dtk mengikuti kalimat narasi.
- Pakai setiap aset produk minimal sekali bila ada. spotlight cocok untuk foto produk berlatar polos, phone untuk screenshot aplikasi/katalog, full untuk foto suasana, float untuk foto apa pun.
- Overlay di atas adegan: title untuk hook di 0–2,5 dtk, stat untuk harga/promo/angka, chips untuk keunggulan singkat, sticker seperlunya. Jangan pakai lower, zoom, atau behind.
- cta di 3–4 dtk terakhir, end = durasi.`;
const TONE_EN = { santai: 'casually and warmly', semangat: 'energetically and persuasively', profesional: 'calmly and clearly', hangat: 'warmly, like telling a story' };
const TONE = { santai: 'santai dan akrab, seperti teman merekomendasikan', semangat: 'bersemangat dan meyakinkan, tempo agak cepat', profesional: 'profesional, tenang, dan jelas', hangat: 'hangat dan bercerita, tempo sedang' };

// ================= LANGKAH AI =================
async function aiTranscribe(buf, maxSec = 420) {
  const b = await resample(buf, 16000, maxSec), wav = bufToWav(b, 16000);
  const res = await gemini([{ inlineData: { mimeType: 'audio/wav', data: b64(wav) } }, { text: `Transkripsikan semua ucapan dalam audio ini kata demi kata, dalam bahasa aslinya (jangan diterjemahkan). Untuk setiap kata beri waktu mulai (s) dan selesai (e) dalam detik sejak awal audio, presisi 0,01 dtk. Sertakan tanda baca yang menempel pada kata. Jangan menambah kata yang tidak diucapkan. Durasi audio ${b.duration.toFixed(1)} dtk. Isi language dengan kode bahasa (mis. "id").` }], { schema: S_WORDS, temp: 0 });
  return { words: cleanWords(res.words, Math.min(P.duration || b.duration, b.duration + .5)), language: res.language || '' };
}
function b64(ab) { const u8 = new Uint8Array(ab); let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); }
function cleanWords(arr, dur) {
  const out = [];
  for (const x of arr || []) {
    const w = String(x.w || '').trim(); if (!w) continue; let s = +x.s, e = +x.e; if (!isFinite(s)) continue; if (!isFinite(e) || e <= s) e = s + .25; if (s > dur) break;
    const p = out[out.length - 1]; if (p) { if (s < p.s) s = p.s + .05; if (p.e > s) p.e = Math.max(p.s + .05, s); }
    out.push({ w, s: +s.toFixed(2), e: +Math.min(Math.max(e, s + .08), dur).toFixed(2) });
  }
  return out;
}
async function aiVision() {
  const d = P.duration, frames = await grabVideoFrames(R.url, [d * .15, d * .45, d * .75], 448);
  const res = await gemini([...frames.map(f => img64(f.b64)), { text: 'Ini beberapa frame dari video orang berbicara. Tentukan titik tengah wajah utama (faceX, faceY, 0–1 dari kiri-atas, rata-rata dari semua frame), shot (close | medium | wide), setting (suasana tempat dan pencahayaan, satu kalimat), tone video (santai | serius | energik | hangat), dan colors: dua warna hex yang menonjol dari pakaian atau latar dan cocok dijadikan warna aksen.' }], { schema: S_VISION, temp: .2 });
  return res;
}
async function aiDescribeAssets(list) {
  const parts = []; for (const a of list) { const j = await assetJpeg(a, 384); if (j) { parts.push({ text: `Aset id=${a.id} (${a.kind}, nama file: ${a.name})` }, img64(j)); } }
  if (!parts.length) return;
  const res = await gemini([...parts, { text: 'Jelaskan isi setiap aset dalam maksimal 12 kata bahasa Indonesia: benda, produk, aktivitas, atau tampilan layar yang terlihat. Tujuannya mencocokkan aset dengan ucapan dalam video. Kembalikan untuk setiap id.' }], { schema: S_ASSETS, temp: .2 });
  for (const r of res.assets || []) { const a = assetById(r.id); if (a) a.desc = String(r.desc || '').slice(0, 120); }
}
function transcriptText(from = 0, to = Infinity) {
  const lines = []; let cur = [], st = null;
  P.words.forEach((w, i) => { if (w.s < from - .01 || w.s > to) return; if (st === null) st = w.s; cur.push(`${w.w}(${i})`); if (/[.!?]$/.test(w.w) || cur.length >= 16) { lines.push(`[${st.toFixed(1)}] ${cur.join(' ')}`); cur = []; st = null; } });
  if (cur.length) lines.push(`[${st.toFixed(1)}] ${cur.join(' ')}`); return lines.join('\n');
}
function assetsText() { return P.assets.length ? P.assets.map(a => `- ${a.id}: ${a.kind}${a.kind === 'video' ? ` ${(a.dur || 0).toFixed(1)} dtk` : ''}, ${a.w}x${a.h}, isi: ${a.desc || a.name}`).join('\n') : '(tidak ada aset)'; }
function nicheText() { const n = NICHES[P.niche]; return n && n.note ? `Bidang konten: ${n.name}. ${n.note} Kepadatan: ${n.density}.` : 'Bidang konten: nilai sendiri dari isi transkrip. Kepadatan: sedang.'; }
async function aiDirect(rev = null) {
  const talk = P.mode === 'talk';
  const head = `Durasi video: ${P.duration.toFixed(1)} dtk. Rasio: ${P.aspect}. ${nicheText()}
Arahan pengguna: ${P.brief || '-'}
${talk ? `Posisi wajah (0–1): x=${(P.face.x).toFixed(2)}, y=${(P.face.y).toFixed(2)}. Suasana: ${P.sceneNote || '-'}.` : `Data produk: merek ${P.product.brand || '-'}; produk ${P.product.name || '-'}; harga/promo ${P.product.price || '-'}; ajakan ${P.product.cta || '-'}; link ${P.product.link || '-'}.`}
Aset tersedia:\n${assetsText()}
${realismText()}`;
  let user;
  if (rev) {
    const scope = rev.all ? 'SELURUH video' : `rentang ${fmtT(rev.from)}–${fmtT(rev.to)} saja`;
    const cur = (rev.all ? P.els : P.els.filter(e => inRange(e, rev))).map(stripEl);
    user = `${head}\n\nINSTRUKSI REVISI untuk ${scope}: ${rev.text}\n${rev.images ? 'Gambar terlampir adalah referensi/screenshot dari pengguna.\n' : ''}Elemen saat ini di cakupan tersebut:\n${JSON.stringify(cur)}\n\nKembalikan daftar els LENGKAP untuk cakupan itu setelah direvisi (bukan hanya yang berubah). Pertahankan yang tidak diminta untuk diubah.${rev.all ? '' : ` Semua elemen harus mulai di dalam ${rev.from.toFixed(1)}–${rev.to.toFixed(1)} dtk.`}\n\nTranskrip:\n${transcriptText(rev.all ? 0 : rev.from - 2, rev.all ? Infinity : rev.to + 2)}`;
  } else user = `${head}\n\nTranskrip (kata(indeks), [waktu mulai kalimat]):\n${transcriptText()}`;
  const parts = [{ text: user }]; if (rev?.images) for (const b of rev.images) parts.unshift(img64(b));
  return gemini(parts, { schema: S_PLAN, system: talk ? SYS_TALK : SYS_PRODUCT, temp: rev ? .5 : .85 });
}
const inRange = (e, rev) => e.start >= rev.from - .05 && e.start < rev.to;
function realismText() {
  const n = realCount();
  if (!n) return 'Visual realistis AI: MATI. Jangan isi imagePrompt; pakai aset yang tersedia atau elemen lain.';
  const vid = P.realism.kind === 'video';
  return `Visual realistis AI: NYALA, maksimal ${n} ${vid ? 'klip video realistis 4–8 dtk' : 'foto realistis'}. Untuk media yang tidak punya aset cocok, kosongkan asset dan isi imagePrompt dalam bahasa Inggris: ${vid ? 'subjek, aksi yang sedang terjadi, lokasi, pencahayaan, dan gerak kamera (mis. slow dolly-in, handheld, aerial)' : 'subjek, aksi, lokasi, pencahayaan, sudut dan lensa kamera'}. Pakai konteks Indonesia bila relevan (orang, tempat, suasana). Tanpa teks, logo, merek, atau wajah tokoh nyata. Taruh di momen yang paling butuh visual nyata; layout full, float, pip${P.mode === 'talk' ? ', atau split' : ''}; durasi ${vid ? '3–6' : '2–4'} dtk.${P.mode === 'product' ? ' Jangan minta visual produk itu sendiri karena hasil AI bisa berbeda dari produk asli; minta suasana, cara pakai, bahan, atau calon pembeli.' : ''}`;
}
function stripEl(e) { const o = { type: e.type, start: +e.start.toFixed(2), end: +e.end.toFixed(2) }; for (const k of ['text', 'sub', 'value', 'asset', 'layout', 'kind', 'pos', 'trans', 'sfx', 'emoji', 'imagePrompt']) if (e[k]) o[k] = e[k]; if (e.items?.length) o.items = e.items; if (e.behind) o.behind = true; if (e.x != null) { o.x = e.x; o.y = e.y; } if (e.amount) o.amount = e.amount; return o; }
async function aiScript() {
  const p = P.product, words = Math.round(p.dur * 2.3);
  const res = await gemini([{ text: `Tulis naskah voice-over iklan berbahasa Indonesia untuk video ±${p.dur} detik (sekitar ${words} kata, jangan lebih).
Gaya bicara: ${TONE[p.tone] || p.tone}.
Struktur: kalimat pembuka yang langsung menarik (masalah atau pertanyaan yang dekat dengan calon pembeli), perkenalkan produk, 2–4 keunggulan terkuat, harga atau promo bila ada, lalu ajakan penutup yang jelas.
Kalimat pendek dan enak diucapkan. Tanpa emoji, tanpa label, tanpa petunjuk panggung. Jangan menambah klaim yang tidak ada di data.
Data:
Merek: ${p.brand || '-'}
Produk: ${p.name || '-'}
Keunggulan: ${p.benefits || '-'}
Harga/promo: ${p.price || '-'}
Ajakan: ${p.cta || '-'}
Link/kontak: ${p.link || '-'}
Arahan tambahan: ${P.brief || '-'}
Isi foto/video produk:\n${assetsText()}
Kembalikan title (judul video ≤6 kata) dan script.` }], { schema: S_SCRIPT, temp: .9 });
  return res;
}
async function aiTTS(text, voice, tone) {
  const models = await modelList('tts'); const tried = [];
  let last = null;
  for (const m of models) for (let att = 0; att < 2; att++) {
    if (!att) tried.push(m);
    let r; try { r = await apiCall(m, 'generateContent', { contents: [{ role: 'user', parts: [{ text: ttsText(text) }] }], generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice || 'Kore' } } } } }); }
    catch { last = new AIError('Tidak bisa menghubungi layanan suara AI.', 'net'); await sleep(1200); continue; }
    if (r.ok) { const j = await r.json(), parts = (j.candidates?.[0]?.content?.parts || []).filter(p => p.inlineData?.data); if (parts.length) { const rate = +(/rate=(\d+)/.exec(parts[0].inlineData.mimeType || '')?.[1] || 24000); return joinBuffers(parts.map(p => pcmToBuffer(p.inlineData.data, rate))); } last = new AIError('Layanan suara tidak mengembalikan audio.', 'empty'); continue; }
    const t = await r.text().catch(() => ''); const e2 = errOf(r.status, t, m); last = worse(last, e2); if (e2.code === 'auth') throw e2; if (['model', 'other', 'quota'].includes(e2.code)) break; await sleep(2500 * (att + 1));
  }
  throw last ? finalErr(last, tried) : new AIError('Suara AI gagal dibuat.', 'other');
}
function imgAspect(el) {
  const land = P.aspect === '16:9' || (P.aspect === 'source' && R.srcW > R.srcH);
  if (el?.type === 'diagram' || el?.layout === 'spotlight') return '1:1';
  if (el?.layout === 'pip' || el?.layout === 'float') return land ? '4:3' : '3:4';
  if (el?.layout === 'split') return land ? '16:9' : '4:3';
  if (P.aspect === '1:1') return '1:1'; if (P.aspect === '4:5') return '3:4'; return land ? '16:9' : '9:16';
}
async function aiImage(prompt, aspect) {
  const full = `${prompt}. Photorealistic photograph, shot on a full-frame camera with a 35mm lens, natural lighting, realistic skin and material textures, true-to-life colors, subtle depth of field. Absolutely no text, letters, captions, watermark, or logo.`;
  const tries = [];
  for (const m of (await modelList('image')).slice(0, 3)) tries.push([m, 'generateContent', { contents: [{ role: 'user', parts: [{ text: full }] }], generationConfig: { responseModalities: ['IMAGE', 'TEXT'], imageConfig: { aspectRatio: aspect } } }], [m, 'generateContent', { contents: [{ role: 'user', parts: [{ text: full + ` Aspect ratio ${aspect}.` }] }], generationConfig: { responseModalities: ['IMAGE', 'TEXT'] } }]);
  for (const m of (await modelList('imagen')).slice(0, 3)) tries.push([m, 'predict', { instances: [{ prompt: full }], parameters: { sampleCount: 1, aspectRatio: aspect } }]);
  let last = null;
  for (const [m, method, body] of tries) {
    let r; try { r = await apiCall(m, method, body); } catch { last = new AIError('Tidak bisa menghubungi pembuat gambar.', 'net'); continue; }
    if (!r.ok) { const t = await r.text().catch(() => ''); const e2 = errOf(r.status, t, m); last = worse(last, e2); if (e2.code === 'auth') throw e2; continue; }
    const j = await r.json(); let data = '', mime = 'image/png';
    if (method === 'predict') { const p = j.predictions?.[0]; data = p?.bytesBase64Encoded || ''; mime = p?.mimeType || mime; }
    else { const p = (j.candidates?.[0]?.content?.parts || []).find(x => x.inlineData); data = p?.inlineData?.data || ''; mime = p?.inlineData?.mimeType || mime; }
    if (data) { const bin = atob(data), u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); return new Blob([u8], { type: mime }); }
    last = new AIError('Pembuat gambar tidak mengembalikan gambar.', 'empty');
  }
  throw last ? finalErr(last, [...new Set(tries.map(t => t[0]))]) : new AIError('Gambar AI gagal dibuat.', 'other');
}
// ---------- video realistis (Veo) ----------
function apiGet(path) { const key = effKey(), headers = {}; if (key) headers['x-goog-api-key'] = key; return fetch(`${API}/${path}${key ? '' : (path.includes('?') ? '&' : '?') + 'key='}`, { headers }); }
function b64Blob(data, mime) { const bin = atob(data), u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); return new Blob([u8], { type: mime }); }
async function fetchVideoFile(uri) {
  const key = effKey();
  const tries = [() => fetch(uri, { headers: key ? { 'x-goog-api-key': key } : {} }), () => { const u = new URL(uri); if (key) u.searchParams.set('key', key); return fetch(u.toString()); }];
  for (const t of tries) { try { const r = await t(); if (r.ok) { const b = await r.blob(); if (b.size > 1000) return b.type.startsWith('video') ? b : new Blob([b], { type: 'video/mp4' }); } } catch (e) { console.warn('unduh video', e); } }
  return null;
}
async function aiVideo(prompt, aspect, onTick) {
  if (CANVAS) throw new AIError('Video realistis (Veo) tidak tersedia di mode Gemini Canvas.', 'blocked');
  const full = `${prompt}. Realistic cinematic footage, natural lighting, smooth camera movement, realistic motion, people and textures. No text, captions, subtitles, watermark, or logo.`;
  const ar = ['9:16', '3:4', '4:5'].includes(aspect) ? '9:16' : '16:9';
  let last = null;
  for (const m of await modelList('veo')) {
    let r; try { r = await apiCall(m, 'predictLongRunning', { instances: [{ prompt: full }], parameters: { aspectRatio: ar } }); } catch { last = new AIError('Tidak bisa menghubungi pembuat video.', 'net'); continue; }
    if (!r.ok) { const t = await r.text().catch(() => ''); last = errOf(r.status, t, m); if (last.code === 'auth') throw last; if (r.status === 429 || /billing|paid|quota/i.test(t)) last = new AIError('Video AI (Veo) butuh akun Gemini API berbayar atau kuotanya sedang habis.', 'billing'); if (last.code === 'billing') break; continue; }
    const op = await r.json(); if (!op.name) { last = new AIError('Pembuat video tidak memberi nomor proses.', 'empty'); continue; }
    const t0 = Date.now(); let fails = 0;
    for (;;) {
      await sleep(Date.now() - t0 < 20000 ? 5000 : 8000);
      if (Date.now() - t0 > 7 * 60000) { last = new AIError('Pembuatan video AI melebihi 7 menit.', 'timeout'); break; }
      let s; try { s = await apiGet(op.name); } catch { if (++fails > 4) { last = new AIError('Koneksi terputus saat menunggu video AI.', 'net'); break; } continue; }
      if (!s.ok) { if (++fails > 4) { last = errOf(s.status, await s.text().catch(() => ''), m); break; } continue; }
      const j = await s.json(); onTick?.(Math.round((Date.now() - t0) / 1000));
      if (j.error) { last = new AIError(`Video AI gagal: ${j.error.message || 'tanpa keterangan'}`, 'other'); break; }
      if (!j.done) continue;
      const resp = j.response || {}, smp = resp.generateVideoResponse?.generatedSamples?.[0] || resp.generatedVideos?.[0] || resp.videos?.[0], v = smp?.video || smp;
      if (v?.bytesBase64Encoded) return b64Blob(v.bytesBase64Encoded, v.mimeType || 'video/mp4');
      if (v?.uri) { const blob = await fetchVideoFile(v.uri); if (blob) return blob; last = new AIError('Video AI selesai dibuat tetapi tidak bisa diunduh dari browser ini.', 'download'); break; }
      last = new AIError('Video AI ditolak filter keamanan Google. Ubah deskripsi visualnya.', 'blocked'); break;
    }
    if (last && ['blocked', 'download', 'timeout'].includes(last.code)) break;
  }
  throw last || new AIError('Video AI gagal dibuat.', 'other');
}
async function aiStyle(images, note) {
  const parts = images.map(img64);
  parts.push({ text: images.length
    ? `Pelajari gaya editing video dari ${images.length} gambar referensi ini: warna dominan dan aksen, karakter huruf (pilih yang paling mirip dari daftar), cara kata kunci ditonjolkan, bentuk kartu teks, nuansa latar, color grading, energi animasi, dan gaya caption. Terjemahkan menjadi pengaturan berikut. name = nama gaya singkat (≤3 kata). accent/accent2/ink dalam hex. vignette 0–0.5, grain 0–0.3. camera: smooth | punch | angle | off. trans: salah satu ${OPT.trans.map(o => o[0]).join(' | ')}.`
    : `Rancang tampilan baru yang segar untuk video ini, berbeda jelas dari tampilan sekarang (${PRESETS[P.look.preset]?.name || 'kustom'}, aksen ${P.look.accent}). Sesuaikan dengan isi dan audiens berikut. ${note || ''}\nRingkasan isi: ${P.words.slice(0, 120).map(w => w.w).join(' ') || P.script || P.product.name}\nname = nama gaya ≤3 kata, accent/accent2/ink hex, vignette 0–0.5, grain 0–0.3, camera: smooth | punch | angle | off, trans: ${OPT.trans.map(o => o[0]).join(' | ')}.` });
  return gemini(parts, { schema: S_STYLE, temp: .9 });
}

// ================= PENERAPAN RENCANA =================
const VALID = { layout: OPT.layout.map(o => o[0]), pos: OPT.pos.map(o => o[0]), trans: ['auto', ...OPT.trans.map(o => o[0])], sfx: OPT.sfx.map(o => o[0]), diagram: OPT.diagram.map(o => o[0]), fx: OPT.fx.map(o => o[0]), zoom: OPT.zoom.map(o => o[0]) };
function normEl(x, dur) {
  const type = TYPES[x.type] ? x.type : null; if (!type) return null;
  const el = { id: x.id || uid(), type, start: clamp(+x.start || 0, 0, dur), end: clamp(+x.end || 0, 0, dur) };
  const str = (v, n) => String(v ?? '').slice(0, n);
  // terima nama kolom alternatif yang kadang dipakai AI
  const pick = (...ks) => { for (const k of ks) { const v = x[k]; if (v != null && String(v).trim()) return v; } return ''; };
  el.text = str(pick('text', 'title', 'headline', 'heading', 'label', 'caption', 'quote', 'name', 'message'), 120);
  el.sub = str(pick('sub', 'subtitle', 'subtext', 'subheading', 'description', 'button', 'cta', 'action', 'link', 'url', 'author', 'role', 'app'), 120);
  el.value = str(pick('value', 'number', 'stat', 'amount_text', 'figure'), 30);
  const rawItems = [x.items, x.steps, x.points, x.bullets, x.list, x.rows, x.data, x.options].find(a => Array.isArray(a) && a.length) || [];
  el.items = rawItems.map(i => typeof i === 'string' || typeof i === 'number' ? { label: str(i, 60) } : { label: str(i?.label ?? i?.text ?? i?.title ?? i?.name ?? i?.step ?? i?.left ?? '', 60), value: str(i?.value ?? i?.right ?? i?.number ?? i?.desc ?? i?.description ?? '', 40), icon: str(i?.icon ?? i?.emoji ?? '', 8) }).filter(i => i.label || i.value).slice(0, 6);
  el.pos = VALID.pos.includes(x.pos) ? x.pos : (type === 'stat' || type === 'chips' ? 'center' : 'top');
  el.trans = VALID.trans.includes(x.trans) ? x.trans : 'auto'; el.sfx = VALID.sfx.includes(x.sfx) ? x.sfx : 'auto';
  if (type === 'media') { el.layout = VALID.layout.includes(x.layout) ? x.layout : 'full'; el.asset = assetById(x.asset) ? x.asset : ''; el.imagePrompt = str(x.imagePrompt, 400); if (!el.asset && (!el.imagePrompt || !realCount())) return null; if (el.layout === 'split' && P.mode === 'product') el.layout = 'float'; }
  if (type === 'diagram') el.kind = VALID.diagram.includes(x.kind) ? x.kind : 'steps';
  if (type === 'fx') el.kind = VALID.fx.includes(x.kind) ? x.kind : 'flash';
  if (type === 'zoom') { el.kind = VALID.zoom.includes(x.kind) ? x.kind : 'auto'; el.amount = clamp(+x.amount || 1.15, 1.03, 1.5); }
  if (type === 'title' || type === 'chapter') el.behind = !!x.behind && P.mode === 'talk';
  if (type === 'sticker') el.emoji = str(x.emoji, 8) || '✨';
  if (type === 'sticker' || type === 'callout') { el.x = clamp(+x.x || (type === 'sticker' ? .78 : .62), .05, .95); el.y = clamp(+x.y || (type === 'sticker' ? .3 : .4), .05, .95); }
  if (type === 'stat' && !el.value) { el.value = el.text; el.text = ''; }
  if (['title', 'card', 'quote', 'lower', 'notif', 'callout'].includes(type) && !plain(el.text).trim()) return null;
  if (type === 'stat' && !plain(el.value).trim()) return null;
  repairEl(el);
  if (type === 'cta') el.end = dur;
  const minD = type === 'fx' ? .2 : type === 'zoom' ? .6 : 1;
  if (el.end - el.start < minD) el.end = Math.min(dur, el.start + Math.max(minD, type === 'diagram' ? 5 : 2.5));
  if (el.end <= el.start) return null;
  if ((type === 'list' || type === 'chips') && !el.items.length) return null;
  return el;
}
// elemen yang berebut tempat yang sama di layar; lower, callout, sticker boleh bersamaan
const EXCL = new Set(['title', 'card', 'stat', 'list', 'chips', 'quote', 'notif', 'media']);
function resolveOverlap(list, gap) {
  const keep = [];
  for (const c of list) {
    const p = keep[keep.length - 1];
    if (!p || c.start >= p.end - .05) { keep.push(c); continue; }
    if (c.type === 'cta') { p.end = Math.max(p.start + .5, c.start); keep.push(c); continue; }
    if (c.end <= p.end + .05) { c._drop = true; continue; }
    const pd = p.end - p.start, ov = p.end - c.start;
    if (ov < pd * .4) { p.end = c.start - gap; keep.push(c); }
    else { c.start = p.end + gap; if (c.end - c.start < .8) c._drop = true; else keep.push(c); }
  }
}
function tidyEls(els, dur) {
  els = guardEls(els, dur);
  els.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  resolveOverlap(els.filter(isFull), 0);
  resolveOverlap(els.filter(e => !isFull(e) && laneOf(e) === 1 && EXCL.has(e.type)), .1);
  els = els.filter(e => { const d = e._drop; delete e._drop; return !d; });
  if (P.mode === 'product') {
    // isi celah jalur adegan, tapi CTA tidak pernah ditarik ke depan
    const cta = els.find(e => e.type === 'cta'), endBody = cta ? cta.start : dur;
    let body = els.filter(e => isFull(e) && e.type !== 'cta' && e.start < endBody - .2).sort((a, b) => a.start - b.start);
    if (!body.length && endBody > .5) { body = fillerScenes(0, endBody); els.push(...body); }
    if (body.length) {
      if (body[0].start > .02) { if (body[0].start > 3) { const f = fillerScenes(0, body[0].start); els.push(...f); body = [...f, ...body]; } else body[0].start = 0; }
      for (let i = 0; i < body.length - 1; i++) if (body[i + 1].start - body[i].end > .02) body[i].end = body[i + 1].start;
      body[body.length - 1].end = endBody;
    }
  }
  return els.filter(e => e.end - e.start > .15).sort((a, b) => a.start - b.start);
}
// adegan pengisi bila AI tidak memberi adegan (mis. b-roll AI gugur)
function fillerScenes(a, b) {
  const out = [], span = b - a, lays = ['spotlight', 'float', 'full'], imgs = P.assets.filter(x => !elHiddenAsset(x));
  if (!imgs.length) return [{ id: uid(), type: 'chapter', start: a, end: b, text: `*${plain(P.product?.name || P.name || 'Produk')}*`, sub: P.product?.brand || '', items: [], pos: 'center', trans: 'auto', sfx: 'auto' }];
  const n = Math.max(1, Math.round(span / 3.5)), d = span / n;
  for (let i = 0; i < n; i++) out.push({ id: uid(), type: 'media', start: a + i * d, end: a + (i + 1) * d, asset: imgs[i % imgs.length].id, layout: lays[i % lays.length], text: '', sub: '', items: [], pos: 'top', trans: 'auto', sfx: 'auto' });
  return out;
}
const elHiddenAsset = a => a.origin === 'ai' && !P.realism?.on;
// isi otomatis bila adegan kosong, supaya tidak pernah tampil layar kosong
function speechIn(a, b, n = 6) { const t = P.words.filter(w => w.s >= a - .2 && w.s < b).slice(0, n).map(w => plain(w.w).replace(/[.,!?;:]+$/, '')).join(' '); return t ? t[0].toUpperCase() + t.slice(1) : ''; }
function repairEl(el) {
  if (el.type === 'cta') {
    if (!plain(el.text).trim()) el.text = P.mode === 'product' ? (P.product?.cta || 'Pesan *sekarang*') : 'Ikuti untuk info *berikutnya*';
    if (!plain(el.sub).trim()) el.sub = P.mode === 'product' ? (P.product?.link || P.product?.brand || '') : (P.extras?.brand || '');
  }
  if (el.type === 'diagram' && !(el.items || []).some(i => plain(i.label || i.value).trim())) el.type = 'chapter';
  if ((el.type === 'chapter' || el.type === 'diagram') && !plain(el.text).trim()) el.text = speechIn(el.start, el.end) || plain(P.product?.name || P.name || '');
  return el;
}
// pengaman: CTA hanya satu, di akhir, durasinya wajar; elemen tidak memanjang tak wajar
const MAXDUR = { chapter: 5, diagram: 9, media: 8, title: 6, card: 8, list: 10, chips: 8, quote: 8, lower: 6, callout: 5, notif: 5, sticker: 4, stat: 6 };
function guardEls(els, dur, caps = true) {
  const ctas = els.filter(e => e.type === 'cta').sort((x, y) => y.start - x.start);
  const drop = new Set(ctas.slice(1));
  const c = ctas[0];
  if (c) { let d0 = c.end - c.start; if (!(d0 >= 1.5 && d0 <= 6)) d0 = 3.5; if (c.start < dur - 6.5 || c.end - c.start > 6.5) c.start = Math.max(0, dur - d0); c.end = dur; }
  if (caps && P.mode === 'talk') for (const e of els) { const mx = MAXDUR[e.type]; if (mx && e.end - e.start > mx) e.end = e.start + mx; }
  return els.filter(e => !drop.has(e));
}
function applyPlan(plan, rev = null) {
  const dur = P.duration, fresh = (plan.els || []).map(x => normEl(x, dur)).filter(Boolean);
  if (rev && !rev.all) {
    const inR = fresh.map(e => { if (e.type === 'cta') return e; const st = clamp(e.start, rev.from, Math.max(rev.from, rev.to - .3)), d = Math.max(.5, e.end - e.start); return { ...e, start: st, end: e.type === 'cta' ? dur : clamp(Math.max(e.end, st + .5), st + .5, Math.min(dur, st + Math.max(d, .5) + 6)) }; }).filter(e => e.end - e.start > .2);
    P.els = tidyEls([...P.els.filter(e => !inRange(e, rev)), ...inR], dur);
  } else P.els = tidyEls(fresh, dur);
  if (Array.isArray(plan.keywords) && (!rev || rev.all)) P.keywords = plan.keywords.map(n => n | 0).filter(n => n >= 0 && n < P.words.length);
  if (!rev) {
    if (P.auto.look && PRESETS[plan.preset]) { const keep = { brand: P.extras.brand }; applyLook(presetLook(plan.preset)); Object.assign(P.extras, keep); }
    if (P.auto.look && OPT.capMode.some(o => o[0] === plan.captionMode)) P.cap.mode = plan.captionMode;
    if (P.auto.music && MOODS[plan.mood]) P.audio.mood = plan.mood;
    if (plan.title && (P.name === 'Video baru' || P.name === 'Video produk')) P.name = String(plan.title).slice(0, 60);
  }
  ensureLoop(P.audio.mood);
}
function applyLook(lk) { P.look = { ...BASE_LOOK, ...lk }; P.cap.mode = lk.capMode || P.cap.mode; P.cap.upper = !!lk.upper; P.cap.font = ''; }
function styleToLook(s) {
  const L = { ...P.look }, hex = v => /^#[0-9a-f]{6}$/i.test(v || '') ? v : null;
  if (hex(s.accent)) L.accent = s.accent; if (hex(s.accent2)) L.accent2 = s.accent2; if (hex(s.ink)) L.ink = s.ink;
  for (const k of ['fontD', 'fontB', 'capFont']) if (FONTS.includes(s[k])) L[k] = s[k];
  const pick = (k, o) => { if (OPT[o].some(x => x[0] === s[k])) L[k] = s[k]; };
  pick('card', 'card'); pick('kw', 'kw'); pick('textIn', 'textIn'); pick('split', 'split'); pick('ease', 'ease'); pick('emph', 'emph'); pick('sceneBg', 'sceneBg'); pick('tone', 'tone'); pick('grading', 'grading'); pick('capMode', 'capMode');
  if (s.trans && (s.trans === 'auto' || OPT.trans.some(x => x[0] === s.trans))) L.trans = s.trans;
  if (typeof s.upper === 'boolean') L.upper = s.upper; if (isFinite(+s.vignette)) L.vignette = clamp(+s.vignette, 0, .6); if (isFinite(+s.grain)) L.grain = clamp(+s.grain, 0, .35);
  L.preset = 'custom'; return L;
}

// ================= PROMPT UNTUK APLIKASI VIDEO AI =================
function exportPrompts() {
  const out = [], dur = P.duration, step = 10, Lk = P.look;
  for (let a = 0; a < dur; a += step) {
    const b = Math.min(dur, a + step), els = P.els.filter(e => e.start < b && e.end > a).sort((x, y) => x.start - y.start);
    const said = P.words.filter(w => w.s >= a && w.s < b).map(w => w.w).join(' ');
    const lines = els.map(e => {
      const t = `${(Math.max(a, e.start) - a).toFixed(1)}–${(Math.min(b, e.end) - a).toFixed(1)} dtk`;
      const txt = plain(e.text), sub = plain(e.sub);
      switch (e.type) {
        case 'title': return `${t}: judul besar "${txt}"${sub ? ` dengan subjudul "${sub}"` : ''}${e.behind ? ', ditaruh di belakang tubuh orang' : ''}`;
        case 'card': return `${t}: kartu teks "${txt}"${sub ? ` / "${sub}"` : ''}`;
        case 'stat': return `${t}: angka besar "${e.value}" menghitung naik${txt ? `, keterangan "${txt}"` : ''}`;
        case 'list': return `${t}: daftar "${txt}": ${e.items.map(i => i.label).join(', ')}, muncul satu per satu`;
        case 'chips': return `${t}: label kata kunci ${e.items.map(i => `"${i.label}"`).join(', ')}`;
        case 'quote': return `${t}: kutipan "${txt}"`;
        case 'lower': return `${t}: nama "${txt}", peran "${sub}" di sepertiga bawah`;
        case 'callout': return `${t}: label penunjuk "${txt}"`;
        case 'notif': return `${t}: notifikasi ponsel dari "${sub}": "${txt}"`;
        case 'sticker': return `${t}: stiker ${e.emoji}`;
        case 'media': return `${t}: b-roll ${optLabel('layout', e.layout).toLowerCase()} berisi ${assetById(e.asset)?.desc || e.imagePrompt || 'gambar pendukung'}${txt ? `, teks "${txt}"` : ''}`;
        case 'chapter': return `${t}: layar judul bagian "${txt}"`;
        case 'diagram': return `${t}: animasi ${optLabel('diagram', e.kind).toLowerCase()} "${txt}": ${e.items.map(i => i.label + (i.value ? ` (${i.value})` : '')).join('; ')}`;
        case 'cta': return `${t}: ajakan penutup "${txt}"${sub ? ` dengan tombol "${sub}"` : ''}`;
        case 'zoom': return `${t}: zoom-in kamera ${Math.round(((e.amount || 1.15) - 1) * 100)}%`;
        case 'fx': return `${t}: efek ${optLabel('fx', e.kind).toLowerCase()}`;
      }
    });
    out.push(`KLIP ${fmtT(a)}–${fmtT(b)}\nGaya: aksen ${Lk.accent} dan ${Lk.accent2}, huruf ${Lk.fontD}, kartu ${optLabel('card', Lk.card).toLowerCase()}, animasi teks ${optLabel('textIn', Lk.textIn).toLowerCase()}, caption ${optLabel('capMode', P.cap.mode).toLowerCase()}.\n${said ? `Ucapan: "${said}"\n` : ''}${lines.length ? 'Tambahkan:\n- ' + lines.join('\n- ') : 'Biarkan video apa adanya, hanya caption.'}`);
  }
  return out.join('\n\n');
}

// ================= DRAF (IndexedDB) =================
let DBP = null;
function db() {
  if (!DBP) DBP = new Promise((res, rej) => { try { const q = indexedDB.open('cendekia-motion-v2', 1); q.onupgradeneeded = () => { const d = q.result; if (!d.objectStoreNames.contains('drafts')) d.createObjectStore('drafts', { keyPath: 'id' }); if (!d.objectStoreNames.contains('blobs')) d.createObjectStore('blobs'); }; q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); } catch (e) { rej(e); } }).catch(e => { console.warn('IndexedDB tidak tersedia', e); return null; });
  return DBP;
}
async function tx(store, mode, fn) { const d = await db(); if (!d) return null; return new Promise((res, rej) => { try { const t = d.transaction(store, mode), s = t.objectStore(store); const r = fn(s); t.oncomplete = () => res(r?.result); t.onerror = () => rej(t.error); } catch (e) { rej(e); } }).catch(e => { console.warn('db', e); return null; }); }
function dbPutBlob(name, blob) { if (!R.id || !blob) return; tx('blobs', 'readwrite', s => s.put(blob, `${R.id}|${name}`)); }
function dbDel(name) { if (R.id) tx('blobs', 'readwrite', s => s.delete(`${R.id}|${name}`)); }
const dbGetBlob = (id, name) => tx('blobs', 'readonly', s => s.get(`${id}|${name}`));
const listDrafts = async () => ((await tx('drafts', 'readonly', s => s.getAll())) || []).sort((a, b) => b.updated - a.updated);
async function deleteDraft(id) {
  await tx('drafts', 'readwrite', s => s.delete(id));
  await tx('blobs', 'readwrite', s => s.delete(IDBKeyRange.bound(id + '|', id + '|￿')));
}
let saveT = null;
function scheduleSave() { clearTimeout(saveT); saveT = setTimeout(saveDraft, 1500); }
async function saveDraft() {
  if (!R.id) return;
  let thumb = '';
  try { const c = document.createElement('canvas'), pv = $('#pv'); const k = 120 / Math.max(pv.width, pv.height); c.width = Math.round(pv.width * k); c.height = Math.round(pv.height * k); c.getContext('2d').drawImage(pv, 0, 0, c.width, c.height); thumb = c.toDataURL('image/jpeg', .7); } catch {}
  await tx('drafts', 'readwrite', s => s.put({ id: R.id, name: P.name, mode: P.mode, updated: Date.now(), dur: P.duration, thumb, project: JSON.stringify(P) }));
}

// ================= RIWAYAT (urungkan / ulangi) =================
let histT = null;
function commit(now = false) {
  clearTimeout(histT);
  const run = () => { const s = JSON.stringify(P); if (R.hist[R.hist.length - 1] !== s) { R.hist.push(s); if (R.hist.length > 80) R.hist.shift(); R.redo = []; } updateUndo(); scheduleSave(); };
  if (now) run(); else histT = setTimeout(run, 350);
}
function undo() { if (R.hist.length < 2) return; R.redo.push(R.hist.pop()); P = JSON.parse(R.hist[R.hist.length - 1]); afterHistory(); toast('Diurungkan.', 1400); }
function redo() { if (!R.redo.length) return; const s = R.redo.pop(); R.hist.push(s); P = JSON.parse(s); afterHistory(); toast('Diulangi.', 1400); }
function afterHistory() { R.cutSel = null; try { cutToolsUI(); } catch {} if (R.sel && !P.els.some(e => e.id === R.sel)) R.sel = null; ensureLoop(P.audio.mood); setVolumes(); sizePreview(); renderPanel(); updateUndo(); scheduleSave(); }
function updateUndo() { $('#bUndo').disabled = R.hist.length < 2; $('#bRedo').disabled = !R.redo.length; }

// ================= TEMPLATE GAYA =================
const getTemplates = () => store.get('templates', []);
function saveTemplate(name, look = P.look) {
  const list = getTemplates(); list.unshift({ id: uid(), name: String(name || 'Template').slice(0, 40), look: { ...look }, cap: { mode: P.cap.mode, font: P.cap.font, upper: P.cap.upper, size: P.cap.size }, mood: P.audio.mood, cam: P.cam.mode });
  store.set('templates', list.slice(0, 30));
}
function useTemplate(tp) { P.look = { ...BASE_LOOK, ...tp.look }; Object.assign(P.cap, tp.cap || {}); if (tp.mood) { P.audio.mood = tp.mood; ensureLoop(tp.mood); } if (tp.cam) P.cam.mode = tp.cam; }

// ================= HALAMAN AWAL =================
const HOME = { mode: 'talk', files: [] };
const STEP_LABEL = { audio: 'Membaca audio video', tr: 'AI mentranskrip per kata', vision: 'AI melihat wajah & suasana', assets: 'AI mengenali foto/video', seg: 'Menyiapkan pemisah orang', script: 'AI menulis naskah iklan', voice: 'AI membacakan naskah', direct: 'AI menyusun motion graphics', images: 'AI membuat visual realistis' };
const STEP_ORDER = { talk: ['audio', 'tr', 'vision', 'assets', 'seg', 'direct', 'images'], product: ['assets', 'script', 'voice', 'tr', 'direct', 'images'] };
function setHomeMode(m) {
  HOME.mode = m;
  $$('.choice').forEach(b => { const on = b.dataset.mode === m; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
  $('#setProd').hidden = m !== 'product'; $('#startTalk').hidden = m !== 'talk'; $('#startProd').hidden = m !== 'product';
  $('#assetsLbl').textContent = m === 'product' ? 'Foto/video produk (disarankan 2–6)' : 'B-roll (opsional): foto/video pendukung';
  const asp = $('#hAspect'); asp.querySelector('[value=source]').disabled = m === 'product'; if (m === 'product' && asp.value === 'source') asp.value = '9:16';
}
function renderHomeAssets() {
  $('#homeAssets').innerHTML = HOME.files.map((f, i) => `<div class="t">${f.type.startsWith('video') ? `<video src="${f._url}#t=0.5" muted></video>` : `<img src="${f._url}" alt="">`}<button type="button" data-rm="${i}" aria-label="Hapus">✕</button></div>`).join('');
  $$('#homeAssets [data-rm]').forEach(b => b.onclick = () => { const f = HOME.files.splice(+b.dataset.rm, 1)[0]; URL.revokeObjectURL(f._url); renderHomeAssets(); });
}
function clearHomeFiles() { HOME.files.forEach(f => URL.revokeObjectURL(f._url)); HOME.files = []; renderHomeAssets(); }
function addHomeFiles(files) { for (const f of files) { if (!/^(image|video)\//.test(f.type)) continue; f._url = URL.createObjectURL(f); HOME.files.push(f); } renderHomeAssets(); }
function keyUI(state) {
  if (CANVAS) { $('.keyline').hidden = true; $('#hKeyDot').classList.add('ok'); $('#hKeyTxt').innerHTML = '<span class="okmsg">✓ Mode Gemini Canvas' + (window.CMS_VERSION ? ' · v' + window.CMS_VERSION : '') + '</span> AI berjalan memakai akun Gemini Anda sendiri. Tidak perlu API key, dan tidak perlu berlangganan.'; return; }
  const has = !!R.apiKey, dot = $('#hKeyDot'), txt = $('#hKeyTxt'); $('#hKey').value = R.apiKey;
  dot.classList.toggle('ok', has && state?.ok !== false); dot.classList.toggle('bad', !!state && !state.ok && has);
  if (!has) { txt.innerHTML = 'Buat key gratis di <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a>. Key hanya disimpan di browser ini; pemakaian AI tercatat di akun Google Anda.'; return; }
  if (!state) { txt.innerHTML = 'Key tersimpan di browser ini. Memeriksa key ke Google…'; return; }
  txt.innerHTML = state.ok ? `<span class="okmsg">✓ ${esc(state.msg)}</span> Pemakaian AI tercatat di akun Google Anda.` : `<span class="badmsg">✗ ${esc(state.msg)}</span>`;
}
// bersihkan key yang ikut tersalin dengan tanda kutip, spasi, atau "key="
const cleanKey = v => String(v || '').trim().replace(/^key\s*=\s*/i, '').replace(/^["'`]+|["'`]+$/g, '').replace(/\s+/g, '');
async function verifyKey() { if (!R.apiKey) return keyUI(); keyUI(null); const st = await checkKey(); R.keyState = st; keyUI(st); return st; }
function setKey(v) { R.apiKey = cleanKey(v); store.set('apiKey', R.apiKey); MODELS_P = null; keyUI(); if (R.apiKey) { discoverModels(true); verifyKey(); } }
function homeSettings(p) {
  p.aspect = $('#hAspect').value; p.niche = $('#hNiche').value; p.brief = $('#hBrief').value.trim(); p.realism = { on: $('#hReal').checked, kind: CANVAS ? 'image' : $('#hRealKind').value, count: +$('#hRealCount').value }; p.cam.mode = $('#hCamera').value;
  const n = NICHES[p.niche], pre = $('#hPreset').value, mus = $('#hMusic').value;
  p.auto.look = pre === 'auto'; p.auto.music = mus === 'auto';
  const lookKey = pre !== 'auto' ? pre : (n?.preset || 'cendekia'); p.look = presetLook(lookKey); p.cap.mode = p.look.capMode; p.cap.upper = !!p.look.upper;
  p.audio.mood = mus !== 'auto' ? mus : (n?.mood || 'corporate');
  if (p.mode === 'product') { p.cam.mode = 'off'; p.look.tone = p.look.tone === 'dark' ? 'dark' : p.look.tone; }
}
function resetRuntime() {
  pause(); stopAudio(); clearTimeout(saveT); clearTimeout(histT);
  for (const [, m] of R.media) { m.video?.pause(); URL.revokeObjectURL(m.url); }
  if (R.url) URL.revokeObjectURL(R.url);
  Object.assign(R, { id: 'd' + Date.now().toString(36), file: null, url: '', srcW: 0, srcH: 0, voice: null, voiceP: null, voiceBlob: null, voUpload: null, media: new Map(), sel: null, steps: {}, lastErr: '', hist: [], redo: [], attach: [] });
  const v = $('#vid'); v.removeAttribute('src'); v.load();
}
async function loadMainVideo(file) {
  const v = $('#vid'); R.file = file; R.url = URL.createObjectURL(file); v.src = R.url; v.muted = false;
  await new Promise((res, rej) => { v.onloadedmetadata = res; v.onerror = () => rej(new Error('Video tidak bisa dibuka browser ini. Coba format MP4 (H.264).')); });
  R.srcW = v.videoWidth; R.srcH = v.videoHeight; let d = v.duration;
  if (!isFinite(d) || !d) { try { const M = await loadMB(); const inp = new M.Input({ source: new M.BlobSource(file), formats: M.ALL_FORMATS }); d = await inp.computeDuration(); inp.dispose(); } catch { d = 0; } }
  if (!d) throw new Error('Durasi video tidak terbaca.');
  R.voiceP = decodeAudio(file).then(b => (R.voice = b)).catch(() => (R.voice = null));
  return d;
}
async function startTalk(file) {
  if (!file) return;
  if (!(file.type.startsWith('video/') || /\.(mp4|mov|webm|m4v|mkv)$/i.test(file.name))) return toast('File harus berupa video.');
  resetRuntime(); P = newProject('talk'); homeSettings(P); P.name = file.name.replace(/\.[^.]+$/, '').slice(0, 60) || 'Video baru';
  try { P.duration = await loadMainVideo(file); } catch (e) { return toast(e.message, 6000); }
  dbPutBlob('video', file);
  for (const f of HOME.files) { try { await addAsset(f, f.name); } catch (e) { console.warn(e); } }
  clearHomeFiles();
  enterStudio(); ensureLoop(P.audio.mood);
  if ($('#hNoAI').checked) { P.els = tidyEls([normEl({ type: 'title', start: .2, end: 3.2, text: 'Judul *video* Anda', pos: 'top' }, P.duration), normEl({ type: 'cta', start: Math.max(0, P.duration - 3.5), end: P.duration, text: 'Ikuti untuk tips *berikutnya*', sub: 'cendekiadigital.com' }, P.duration)].filter(Boolean), P.duration); commit(true); renderPanel(); toast('Mode manual. Ketik transkrip di panel Teks agar caption muncul.', 5000); }
  else { commit(true); runTalk(); }
}
async function startProduct() {
  const p = newProject('product'); homeSettings(p);
  Object.assign(p.product, { brand: $('#pBrand').value.trim(), name: $('#pName').value.trim(), benefits: $('#pBenefits').value.trim(), price: $('#pPrice').value.trim(), cta: $('#pCta').value.trim(), link: $('#pLink').value.trim(), dur: +$('#pDur').value, tone: $('#pTone').value });
  p.audio.voice = $('#pVoice').value;
  if (!p.product.name && !p.product.brand) { $('#pName').focus(); return toast('Isi nama produk atau merek dulu.'); }
  if (!$('#hNoAI').checked && !hasAI()) { $('#hKey').focus(); return toast('Tempel Gemini API key dulu, atau centang "Tanpa AI".'); }
  resetRuntime(); P = p; P.name = [p.product.brand, p.product.name].filter(Boolean).join(' · ').slice(0, 60); P.duration = p.product.dur;
  for (const f of HOME.files) { try { await addAsset(f, f.name); } catch (e) { console.warn(e); } }
  clearHomeFiles();
  enterStudio(); ensureLoop(P.audio.mood);
  if ($('#hNoAI').checked) { manualProduct(); commit(true); renderPanel(); toast('Mode manual: adegan disusun dari foto Anda. Sunting di panel Elemen.', 5000); }
  else { commit(true); runProduct(); }
}
function manualProduct() {
  const d = P.duration, pr = P.product, els = [];
  els.push({ type: 'chapter', start: 0, end: 2.6, text: `*${pr.name || pr.brand}*`, sub: pr.brand && pr.name ? pr.brand : '' });
  const lays = ['spotlight', 'float', 'full', 'phone'], body = d - 2.6 - 3.5, assets = P.assets.length ? P.assets : [null];
  const per = body / Math.max(1, assets.length + (pr.benefits ? 1 : 0)); let t = 2.6;
  assets.forEach((a, i) => { if (a) els.push({ type: 'media', start: t, end: t + per, asset: a.id, layout: lays[i % lays.length], text: '' }); else els.push({ type: 'chapter', start: t, end: t + per, text: pr.name || 'Produk' }); t += per; });
  const ben = pr.benefits.split(/\n|;/).map(s => s.trim()).filter(Boolean).slice(0, 5);
  if (ben.length) els.push({ type: 'diagram', kind: 'steps', start: t, end: t + per, text: 'Kenapa *pilih* ini', items: ben.map(b => ({ label: b, icon: '✅' })) });
  if (pr.price) els.push({ type: 'stat', start: 3, end: 5.5, value: pr.price.split(/[,;]/)[0], text: pr.price.split(/[,;]/).slice(1).join(',').trim(), pos: 'top' });
  els.push({ type: 'cta', start: d - 3.5, end: d, text: pr.cta || 'Pesan *sekarang*', sub: pr.link || '' });
  P.els = tidyEls(els.map(x => normEl(x, d)).filter(Boolean), d);
}
// ================= PIPELINE AI =================
function stepSet(k, st, note = '') { R.steps[k] = { st, note }; if (R.panel === 'ai') renderPanel(); }
function busy(on, txt) { $('#busy').hidden = !on; if (txt) $('#busyTxt').textContent = txt; }
function failSteps(e) { for (const k in R.steps) if (R.steps[k].st === 'active') R.steps[k] = { st: 'err', note: '' }; R.lastErr = e.message; if (e.code === 'auth') { R.keyState = { ok: false, msg: e.message }; keyUI(R.keyState); } toast(e.message, e.code === 'auth' ? 14000 : 7000); }
async function makeVisual(el, kind, tick) {
  const aspect = imgAspect(el), meta = { desc: el.imagePrompt.slice(0, 90), prompt: el.imagePrompt };
  if (kind === 'video') {
    try { const blob = await aiVideo(el.imagePrompt, aspect, tick); return await addAsset(blob, 'Video AI.mp4', 'ai', meta); }
    catch (e) { if (e.code === 'auth') throw e; console.warn('video AI', e); R.veoErr = e.message; }
  }
  const blob = await aiImage(el.imagePrompt, aspect); return await addAsset(blob, 'Foto AI', 'ai', meta);
}
async function genImages() {
  const n = realCount(), need = n ? P.els.filter(e => e.type === 'media' && !e.asset && e.imagePrompt).slice(0, n) : [];
  if (need.length) {
    const vid = P.realism.kind === 'video'; let ok = 0, okV = 0, done = 0; R.veoErr = '';
    stepSet('images', 'active', `0/${need.length}`); busy(true, vid ? 'AI membuat video realistis (1–5 menit per klip)…' : 'AI membuat foto realistis…');
    const one = async el => {
      try { const a = await makeVisual(el, P.realism.kind, s => stepSet('images', 'active', `${done}/${need.length} · ${s} dtk`)); el.asset = a.id; ok++; if (a.kind === 'video') { okV++; if (el.end - el.start > (a.dur || 8)) el.end = el.start + (a.dur || 8); } }
      catch (e) { if (e.code === 'auth') throw e; console.warn('visual', e); }
      finally { done++; stepSet('images', 'active', `${done}/${need.length}`); }
    };
    for (let i = 0; i < need.length; i += 2) await Promise.all(need.slice(i, i + 2).map(one));
    stepSet('images', ok ? 'done' : 'skip', ok ? (vid ? `${okV} video${ok > okV ? `, ${ok - okV} foto pengganti` : ''}` : `${ok} foto`) : 'tidak tersedia untuk key ini');
    if (vid && ok > okV) toast(`Sebagian video realistis tidak bisa dibuat${R.veoErr ? ` (${R.veoErr})` : ''}. Diganti foto realistis.`, 8000);
  }
  P.els = tidyEls(P.els.filter(e => !(e.type === 'media' && !e.asset)), P.duration);
}
// buang ucapan di luar naskah dari narasi AI (audio & caption)
function cleanVoice(trWords) {
  if (P.mode !== 'product' || !P.script || !R.voice) return false;
  const al = alignScript(P.script, trWords, R.voice); if (!al) return false;
  P.words = al.words;
  if (al.cut) { R.voice = al.buf; R.voiceBlob = new Blob([bufToWav(al.buf)], { type: 'audio/wav' }); dbPutBlob('voice', R.voiceBlob); console.info(`Narasi dibersihkan: ${al.removed} kata di luar naskah dibuang.`); }
  return al.cut;
}
// buang derau di ujung narasi AI, lalu rapikan waktu kata
function trimNoise(trusted) {
  const lastEnd = trusted && P.words.length ? Math.max(...P.words.map(w => w.e)) : null;
  const t = trimVoiceTail(R.voice, lastEnd); if (!t.cut) { R.voice = t.buf; return 0; }
  R.voice = t.buf; R.voiceBlob = new Blob([bufToWav(t.buf)], { type: 'audio/wav' }); dbPutBlob('voice', R.voiceBlob);
  if (!trusted) P.words = estimateWords(P.script, R.voice, R.voice.duration + 1.4);
  const D = R.voice.duration, over = P.words.length ? Math.max(...P.words.map(w => w.e)) : 0;
  if (over > D - .05) { const k = (D - .05) / over; P.words = P.words.map(w => ({ ...w, s: +(w.s * k).toFixed(2), e: +(w.e * k).toFixed(2) })); } // rapatkan, jangan buang kata
  console.info(`Derau ${t.cut} dtk di akhir narasi dibuang.`); return t.cut;
}
// tombol manual: buang semua bunyi setelah kata terakhir
function cleanTail() {
  if (!P.words.length) return toast('Belum ada kata yang dikenali di suara ini.');
  const lastEnd = Math.max(...P.words.map(w => w.e)), from = lastEnd + .35;
  if (P.mode === 'product' && R.voice && !(P.cuts || []).length && !(P.mutes || []).length) {
    const auto = trimNoise(true);
    if (!auto && R.voice.duration > from + .05) { R.voice = sliceBuf(R.voice, 0, from); R.voiceBlob = new Blob([bufToWav(R.voice)], { type: 'audio/wav' }); dbPutBlob('voice', R.voiceBlob); }
    else if (!auto) return toast('Ujung suara sudah bersih.', 2500);
    P.duration = +(R.voice.duration + 1.4).toFixed(2); P.els = tidyEls(P.els, P.duration); changed(true); sizeTimeline(); toast('Bunyi setelah kata terakhir dibuang.', 3000); return;
  }
  if (from >= P.duration - .05) return toast('Ujung suara sudah bersih.', 2500);
  addMute(from, P.duration); changed(true); cutToolsUI(); toast('Suara setelah kata terakhir dibisukan.', 3000);
}
async function runTalk() {
  if (R.busy) return; R.busy = true; R.steps = {}; busy(true, 'AI mendengarkan…'); renderPanel();
  try {
    stepSet('audio', 'active'); await R.voiceP; if (!R.voice) throw new AIError('Audio video tidak bisa dibaca, jadi tidak bisa ditranskrip. Ketik transkrip di panel Teks.', 'audio'); stepSet('audio', 'done');
    const jobs = [];
    stepSet('tr', 'active');
    jobs.push(aiTranscribe(voiceOut(true)).then(r => { P.words = r.words; P.language = r.language; if (!P.words.length) throw new AIError('AI tidak menemukan ucapan di video ini.', 'empty'); stepSet('tr', 'done', `${P.words.length} kata`); }));
    stepSet('vision', 'active');
    jobs.push(aiVision().then(v => { P.face = { x: clamp(+v.faceX || .5, .1, .9), y: clamp(+v.faceY || .35, .1, .9) }; P.sceneNote = [v.shot, v.setting, v.tone].filter(Boolean).join(', '); R.visionColors = (v.colors || []).filter(c => /^#[0-9a-f]{6}$/i.test(c)); stepSet('vision', 'done', v.shot || ''); }).catch(e => { if (e.code === 'auth') throw e; stepSet('vision', 'skip', 'dilewati'); }));
    const need = P.assets.filter(a => !a.desc);
    if (need.length) { stepSet('assets', 'active'); jobs.push(aiDescribeAssets(need).then(() => stepSet('assets', 'done', `${need.length} aset`)).catch(e => { if (e.code === 'auth') throw e; stepSet('assets', 'skip', 'dilewati'); })); }
    if (!R.light) { stepSet('seg', 'active'); segInit().then(ok => stepSet('seg', ok ? 'done' : 'skip', ok ? 'siap' : 'tidak didukung browser ini')); }
    await Promise.all(jobs);
    stepSet('direct', 'active'); busy(true, 'AI menyusun motion…');
    applyPlan(await aiDirect()); stepSet('direct', 'done', `${P.els.length} elemen`);
    await genImages();
    if (P.els.some(e => e.behind) && !R.light) segInit();
    toast('Rencana motion selesai. Putar preview, lalu sunting seperlunya.', 4500);
  } catch (e) { console.error(e); failSteps(e); }
  finally { R.busy = false; busy(false); commit(true); refreshAll(); }
}
async function runProduct() {
  if (R.busy) return; R.busy = true; R.steps = {}; busy(true, 'AI menulis naskah…'); renderPanel();
  try {
    const need = P.assets.filter(a => !a.desc);
    if (need.length) { stepSet('assets', 'active'); try { await aiDescribeAssets(need); stepSet('assets', 'done', `${need.length} aset`); } catch (e) { if (e.code === 'auth') throw e; stepSet('assets', 'skip', 'dilewati'); } }
    if (R.voUpload) { R.voice = R.voUpload; P.cuts = []; P.mutes = []; stepSet('script', 'skip', 'pakai rekaman Anda'); stepSet('voice', 'done', 'rekaman Anda'); }
    else {
      if (R.keepScript && P.script) stepSet('script', 'skip', 'pakai naskah yang ada');
      else { stepSet('script', 'active'); const sc = await aiScript(); P.script = String(sc.script || '').trim(); if (sc.title) P.name = String(sc.title).slice(0, 60); stepSet('script', 'done', `${P.script.split(/\s+/).length} kata`); }
      stepSet('voice', 'active'); busy(true, 'AI membacakan naskah…');
      try { const buf = await aiTTS(P.script, P.audio.voice, P.product.tone); R.voice = buf; P.cuts = []; P.mutes = []; R.voiceBlob = new Blob([bufToWav(buf)], { type: 'audio/wav' }); dbPutBlob('voice', R.voiceBlob); P.hasVoice = true; stepSet('voice', 'done', `${buf.duration.toFixed(1)} dtk`); }
      catch (e) { if (e.code === 'auth') throw e; R.voice = null; P.hasVoice = false; stepSet('voice', 'err', 'gagal'); toast('Narator AI gagal dibuat. Video tetap disusun tanpa suara; Anda bisa unggah rekaman sendiri di panel Suara.', 7000); }
    }
    P.duration = R.voice ? +(R.voice.duration + 1.4).toFixed(2) : P.product.dur;
    stepSet('tr', 'active', 'menyamakan waktu kata');
    if (R.voice) {
      let trOk = false;
      try { const r = await aiTranscribe(R.voice); P.words = r.words.length ? r.words : estimateWords(P.script, R.voice, P.duration); trOk = !!r.words.length; if (!R.voUpload) cleanVoice(r.words); }
      catch (e) { if (e.code === 'auth') throw e; P.words = estimateWords(P.script, R.voice, P.duration); }
      if (!R.voUpload) trimNoise(trOk);
      P.duration = +(R.voice.duration + 1.4).toFixed(2);
    }
    else P.words = estimateWords(P.script, null, P.duration - 1);
    stepSet('tr', 'done', `${P.words.length} kata`);
    stepSet('direct', 'active'); busy(true, 'AI menyusun adegan…');
    applyPlan(await aiDirect()); stepSet('direct', 'done', `${P.els.length} elemen`);
    await genImages();
    toast('Video produk tersusun. Putar preview, lalu sunting seperlunya.', 4500);
  } catch (e) { console.error(e); failSteps(e); }
  finally { R.busy = false; R.keepScript = false; busy(false); commit(true); refreshAll(); }
}
async function runRedesign(rev) {
  if (R.busy) return; if (!P.words.length && P.mode === 'talk') return toast('Belum ada transkrip. Jalankan AI lengkap dulu, atau ketik transkrip di panel Teks.');
  R.busy = true; busy(true, rev ? 'AI merevisi…' : 'AI menyusun ulang…'); stepSet('direct', 'active');
  try { applyPlan(await aiDirect(rev), rev); await genImages(); stepSet('direct', 'done', `${P.els.length} elemen`); toast(rev ? 'Revisi diterapkan. Ctrl+Z untuk membatalkan.' : 'Rancangan baru diterapkan. Ctrl+Z untuk membatalkan.', 4500); }
  catch (e) { console.error(e); failSteps(e); }
  finally { R.busy = false; busy(false); commit(true); refreshAll(); }
}
// ================= BUKA DRAF =================
function mergeProject(raw) { const b = newProject(raw.mode || 'talk'); const o = { ...b, ...raw }; for (const k of ['look', 'cap', 'cam', 'person', 'audio', 'extras', 'product', 'face', 'auto', 'realism']) o[k] = { ...b[k], ...(raw[k] || {}) }; if (!raw.realism && raw.aiImages != null) o.realism = { on: raw.aiImages > 0, kind: 'image', count: raw.aiImages || 2 }; delete o.aiImages; o.els = (raw.els || []).map(e => ({ items: [], ...e })); return o; }
async function openDraft(id) {
  const rec = (await listDrafts()).find(d => d.id === id); if (!rec) return toast('Draf tidak ditemukan.');
  resetRuntime(); R.id = id; let raw; try { raw = JSON.parse(rec.project); } catch { return toast('Draf rusak.'); }
  P = mergeProject(raw); P.els = guardEls(P.els.map(e => repairEl({ items: [], ...e })), P.duration, false); if (P.mode === 'product') P.els = tidyEls(P.els, P.duration);
  if (P.mode === 'talk') { const blob = await dbGetBlob(id, 'video'); if (!blob) return toast('Video untuk draf ini sudah tidak ada di browser.'); try { await loadMainVideo(blob instanceof File ? blob : new File([blob], P.name + '.mp4', { type: blob.type })); } catch (e) { return toast(e.message, 6000); } }
  else { const vb = await dbGetBlob(id, 'voice'); if (vb) { R.voiceBlob = vb; try { R.voice = await decodeAudio(vb); } catch {} } }
  if (P.mode === 'product' && R.voice && !(P.cuts || []).length && P.words.length && trimNoise(true)) { P.duration = +(R.voice.duration + 1.4).toFixed(2); P.els = tidyEls(P.els, P.duration); }
  const keep = []; for (const a of P.assets) { const b = await dbGetBlob(id, 'asset:' + a.id); if (b) { try { await mountAsset(a, b); keep.push(a); } catch {} } } P.assets = keep;
  enterStudio(); ensureLoop(P.audio.mood); commit(true); if (segWanted()) segInit();
  toast('Draf dibuka.');
}
async function renderDrafts() {
  const list = await listDrafts(); $('#draftBox').hidden = !list.length;
  $('#draftList').innerHTML = list.slice(0, 8).map(d => `<div class="draft"><img src="${d.thumb || ''}" alt=""><div class="meta"><b>${esc(d.name)}</b><span class="small muted">${d.mode === 'product' ? 'Video produk' : 'Video berbicara'} · ${fmtT(d.dur)} · ${new Date(d.updated).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span></div><button class="btn xs" data-open="${d.id}">Buka</button><button class="btn xs ghost warn" data-del="${d.id}" aria-label="Hapus draf">Hapus</button></div>`).join('');
  $$('#draftList [data-open]').forEach(b => b.onclick = () => openDraft(b.dataset.open));
  $$('#draftList [data-del]').forEach(b => b.onclick = async () => { if (b.dataset.armed) { await deleteDraft(b.dataset.del); renderDrafts(); } else { b.dataset.armed = 1; b.textContent = 'Yakin?'; setTimeout(() => { b.textContent = 'Hapus'; delete b.dataset.armed; }, 3000); } });
}
// ================= DEMO HALAMAN AWAL =================
function demoProject() {
  const d = newProject('product'); d.duration = 8; d.look = presetLook('cendekia'); d.cap.mode = 'pop'; d.extras.progress = true;
  const ws = 'Unggah video, AI menyusun motion, lalu render.'.split(' '); d.words = ws.map((w, i) => ({ w, s: 2.9 + i * .38, e: 2.9 + i * .38 + .34 })); d.keywords = [4];
  d.els = [
    { id: 'd1', type: 'title', start: 0, end: 2.7, text: 'Dari rekaman jadi *motion*', sub: 'Cendekia Motion Studio', pos: 'center' },
    { id: 'd2', type: 'chips', start: .3, end: 2.7, items: [], pos: 'bottom' },
    { id: 'd3', type: 'diagram', kind: 'steps', start: 2.8, end: 5.6, text: 'Tiga *langkah*', items: [{ label: 'Unggah video', icon: '🎬' }, { label: 'AI menyusun', icon: '✨' }, { label: 'Render MP4', icon: '⬇️' }], trans: 'circle' },
    { id: 'd4', type: 'stat', start: 5.7, end: 6.9, value: '3x', text: 'lebih cepat menyunting', pos: 'center' },
    { id: 'd5', type: 'cta', start: 6.9, end: 8, text: 'Mulai *sekarang*', sub: 'cendekiadigital.com' }
  ];
  d.els[1].items = []; d.els = d.els.filter(e => e.type !== 'chips');
  return d;
}
let demoRaf = 0;
function runDemo() {
  const c = $('#demo'), x = c.getContext('2d'), D = demoProject(), env = { src: null, frame: () => null }; const t0 = performance.now();
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tick = () => { if ($('#home').hidden) { demoRaf = 0; return; } const t = reduce ? 4.2 : ((performance.now() - t0) / 1000) % D.duration; drawFrame(x, c.width, c.height, t, env, D); if (!reduce) demoRaf = requestAnimationFrame(tick); };
  cancelAnimationFrame(demoRaf); document.fonts.ready.then(tick);
}

// ================= GALERI GAYA VISUAL (halaman awal) =================
// Setiap kartu dirender langsung oleh mesin video, jadi yang terlihat = hasil asli preset itu.
const STYLE_DESC = {
  cendekia: 'Biru tenang dengan kartu kaca. Aman untuk hampir semua topik.',
  kelas: 'Terang dan ramah, kata kunci distabilo. Pas untuk materi belajar.',
  papan: 'Nuansa papan tulis kapur, teks diketik per huruf.',
  datalab: 'Grid teknologi, teks berganti acak seperti kode.',
  direksi: 'Emas dan huruf serif elegan. Berwibawa untuk eksekutif.',
  kilat: 'Kuning-merah tegas, huruf besar bergetar. Untuk promo dan diskon.',
  pasar: 'Oranye-hijau ceria dan hangat. Cocok untuk kuliner dan UMKM.',
  senja: 'Kertas hangat dan serif klasik, berbutir seperti film.',
  kota: 'Ungu neon di langit malam, kata kunci menyala.',
  putih: 'Putih minimalis dan rapi, tanpa gangguan.',
  majalah: 'Merah editorial dengan garis miring, satu kata per caption.',
  coretan: 'Pink-kuning dan tulisan tangan, kata kunci bergelombang.',
  retro: 'Toska-pink ala 90-an, teks jatuh memantul.',
  tumbuh: 'Hijau segar, huruf kapital, caption bertingkat.',
  monokrom: 'Hitam putih, huruf tinggi ramping, potongan tajam.',
  podcast: 'Bokeh hangat dan caption karaoke. Untuk obrolan dan cerita.',
  terminal: 'Hijau fosfor di layar gelap, teks diketik seperti kode. Pas untuk tutorial Python.',
  navy: 'Biru navy dan aksen jingga, rapi dan meyakinkan. Untuk presentasi bisnis.',
  pastel: 'Merah muda-lavender lembut dan melayang. Untuk lifestyle, kecantikan, dan parenting.',
  sinema: 'Hitam pekat, serif kapital, berbutir film. Untuk cerita dan teaser dramatis.',
  surya: 'Jingga-kuning hangat, teks jatuh kenyal. Untuk motivasi dan konten energik.',
  zamrud: 'Hijau zamrud dan emas yang teduh. Untuk konten religi, keuangan syariah, dan premium.',
  arkade: 'Toska-magenta neon dengan efek menyala. Untuk gaming, teknologi, dan anak muda.',
  klinik: 'Biru-hijau bersih dan menenangkan. Untuk kesehatan, farmasi, dan layanan publik.',
  nusantara: 'Cokelat tanah dan kertas tua bernuansa tradisional. Untuk budaya, kerajinan, dan pariwisata.',
  brutal: 'Putih, hitam, dan oranye menyala dengan huruf raksasa. Untuk pernyataan tegas dan promo berani.',
  kampus: 'Merah marun dan serif buku, tenang seperti ruang kuliah. Untuk materi kuliah dan riset.',
  startup: 'Ungu-toska modern dengan kartu kaca. Untuk pitch, peluncuran produk, dan SaaS.',
  berita: 'Merah-kuning tegas ala breaking news, huruf tinggi kapital. Untuk info terkini.',
  sport: 'Oranye menyala, huruf tebal, teks bergetar. Untuk olahraga dan fitness.',
  mewah: 'Hitam dan emas dengan huruf klasik ukiran. Untuk produk premium dan properti.',
  piksel: 'Huruf piksel ala gim 8-bit, teks diketik. Untuk gaming dan konten nostalgia.',
  spidol: 'Tulisan spidol di kertas, kata kunci distabilo. Untuk guru dan tips belajar.',
  kafe: 'Pink-krem dengan huruf sambung manis. Untuk kafe, kue, dan toko online.',
  lebar: 'Huruf lebar modern dan hijau limau. Untuk agensi kreatif dan fesyen.',
  esai: 'Serif hangat di kertas krem. Untuk opini, refleksi, dan cerita personal.',
  laut: 'Biru laut segar dengan riak cincin. Untuk wisata, travel, dan produk air.',
  ramadan: 'Langit malam berbintang dengan emas lembut. Untuk konten Ramadan dan religi.',
  merahputih: 'Merah, putih, dan hitam yang tegas. Untuk Agustusan, kebangsaan, dan BUMN.',
  alam: 'Hijau daun dan kuning hangat. Untuk produk organik, pertanian, dan lingkungan.',
  fintech: 'Hijau-indigo bersih, angka berganti acak. Untuk keuangan, investasi, dan data.',
  misteri: 'Gelap pekat dan merah darah, berbutir. Untuk kisah misteri dan true crime.',
  anak: 'Kuning-biru ceria, teks memantul. Untuk konten anak dan sekolah dasar.',
  synthwave: 'Magenta-toska neon di grid retro 80-an. Untuk musik dan konten malam.',
  koran: 'Hitam putih ala koran tua dengan aksen merah. Untuk sejarah dan fakta unik.',
  senyap: 'Gradasi lembut indigo-pink yang tenang. Untuk wellness, mindfulness, dan HR.'
};
const GAL = { projs: {}, active: new Set(), raf: 0, t0: 0, size: [216, 384] };
const GAL_DUR = 5.2, GAL_STILL = 1.6;
let GAL_FONTS = null;
function galFonts() {
  if (!GAL_FONTS) { const fams = new Set(['Plus Jakarta Sans']); Object.values(PRESETS).forEach(p => [p.fontD, p.fontB, p.capFont].forEach(f => f && fams.add(f)));
    GAL_FONTS = Promise.race([Promise.all([...fams].flatMap(f => [400, 600, 700, 800].map(w => document.fonts.load(`${w} 24px "${f}"`).catch(() => {})))), new Promise(r => setTimeout(r, 4000))]); }
  return GAL_FONTS;
}
function galSize(a) { return a === '16:9' ? [384, 216] : a === '1:1' ? [300, 300] : a === '4:5' ? [272, 340] : [216, 384]; }
function galProject(key) {
  if (GAL.projs[key]) return GAL.projs[key];
  const d = newProject('product'); d.duration = GAL_DUR; d.look = presetLook(key); d.cap.mode = d.look.capMode; d.cap.upper = !!d.look.upper; d.extras.progress = false; d.extras.brand = '';
  const ws = 'Kerja jadi lebih cepat dengan bantuan AI'.split(' ');
  d.words = ws.map((w, i) => ({ w, s: .25 + i * .55, e: .25 + i * .55 + .48 })); d.keywords = [3, 6];
  d.cap.size = .085; d.cap.pos = .8;
  d.els = [
    { id: 'g1', type: 'chapter', start: 0, end: 2.6, text: 'Kerja lebih *cerdas*', sub: PRESETS[key].name, trans: 'auto', items: [] },
    { id: 'g2', type: 'card', start: 2.75, end: GAL_DUR, text: 'Hemat *3 jam*', sub: 'setiap minggu', pos: 'center', items: [] }
  ];
  return GAL.projs[key] = d;
}
function galDraw(c, t) {
  const k = c.dataset.gk; if (!k || !PRESETS[k]) return;
  try { drawFrame(c.getContext('2d'), c.width, c.height, t, { src: null, frame: () => null }, galProject(k)); } catch (e) { console.warn('preview gaya', k, e); }
}
function galLoop() {
  cancelAnimationFrame(GAL.raf);
  if ($('#home').hidden || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const tick = () => {
    if ($('#home').hidden) { GAL.raf = 0; return; }
    const t = ((performance.now() - GAL.t0) / 1000) % GAL_DUR;
    GAL.active.forEach(c => { if (c.isConnected) galDraw(c, t); else GAL.active.delete(c); });
    GAL.raf = requestAnimationFrame(tick);
  };
  GAL.t0 = performance.now(); GAL.raf = requestAnimationFrame(tick);
}
function nichesFor(key) { return Object.values(NICHES).filter(n => n.preset === key).map(n => n.name); }
function galInfo() {
  const k = $('#hPreset').value, box = $('#styleInfo'); if (!box) return;
  if (k === 'auto') {
    const n = NICHES[$('#hNiche').value], start = n?.preset ? PRESETS[n.preset].name : null;
    box.innerHTML = `<b>Otomatis</b> · AI memilih gaya yang paling pas dengan isi video. ${start ? `Untuk bidang <b>${esc(n.name)}</b>, titik awalnya <b>${esc(start)}</b>.` : 'Arahkan kursor ke kartu lain untuk melihat contohnya.'}`;
    return;
  }
  const p = presetLook(k), fit = nichesFor(k);
  box.innerHTML = `<b>${esc(PRESETS[k].name)}</b> · ${esc(STYLE_DESC[k] || '')}<span class="tags"><span>Huruf ${esc(p.fontD)}</span><span>Teks: ${esc(optLabel('textIn', p.textIn).toLowerCase())}</span><span>Caption: ${esc(optLabel('capMode', p.capMode).toLowerCase())}</span><span>Kartu: ${esc(optLabel('card', p.card).toLowerCase())}</span>${fit.length ? `<span class="fit">Cocok: ${esc(fit.join(', '))}</span>` : ''}</span>`;
}
function renderGallery() {
  const grid = $('#styleGrid'); if (!grid) return;
  const sel = $('#hPreset').value, asp = $('#hAspect').value, rec = NICHES[$('#hNiche').value]?.preset;
  GAL.size = galSize(asp === 'source' ? '9:16' : asp); const [W, H] = GAL.size;
  grid.dataset.shape = W > H ? 'wide' : W === H ? 'square' : 'tall';
  grid.style.setProperty('--ar', `${W}/${H}`);
  const tile = (k, name, badge, inner) => `<button type="button" class="stile${sel === k ? ' on' : ''}" role="radio" aria-checked="${sel === k}" data-sk="${k}" title="${esc(name)}">${badge ? `<i class="badge ${badge[0]}">${badge[1]}</i>` : ''}<span class="frame">${inner}</span><span class="nm">${esc(name)}</span></button>`;
  grid.innerHTML = tile('auto', 'Otomatis', ['ai', 'AI'], `<span class="autoart"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9zM19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z"/></svg><b>AI pilih</b><small>sesuai isi video</small></span>`)
    + Object.entries(PRESETS).map(([k, p]) => tile(k, p.name, k === rec ? ['fit', 'COCOK'] : null, `<canvas width="${W}" height="${H}" data-gk="${k}"></canvas>`)).join('');
  GAL.active.clear();
  const cs = $$('canvas[data-gk]', grid);
  galFonts().then(() => { cs.forEach(c => galDraw(c, GAL_STILL)); const on = grid.querySelector('.stile.on canvas'); if (on) GAL.active.add(on); });
  $$('.stile', grid).forEach(b => {
    const c = b.querySelector('canvas');
    b.onclick = () => { $('#hPreset').value = b.dataset.sk; $$('.stile', grid).forEach(x => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-checked', on); const xc = x.querySelector('canvas'); if (xc && !on) { GAL.active.delete(xc); galDraw(xc, GAL_STILL); } }); if (c) GAL.active.add(c); galInfo(); };
    if (!c) return;
    const enter = () => GAL.active.add(c), leave = () => { if (!b.classList.contains('on')) { GAL.active.delete(c); galDraw(c, GAL_STILL); } };
    b.addEventListener('pointerenter', enter); b.addEventListener('pointerleave', leave); b.addEventListener('focus', enter); b.addEventListener('blur', leave);
  });
  galInfo(); if (!GAL.raf) galLoop();
}

// ================= STUDIO: PANEL =================
const ICONS = {
  ai: '<path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M18.5 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  el: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  text: '<path d="M5 6V4h14v2"/><path d="M12 4v16"/><path d="M8.5 20h7"/>',
  look: '<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10" r="1.4"/><circle cx="12" cy="7.5" r="1.4"/><circle cx="15.5" cy="10" r="1.4"/><path d="M13 21a2.5 2.5 0 010-5h2"/>',
  audio: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  assets: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/>',
  proj: '<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'
};
const PANELS = { ai: ['Arahan AI', 'Jalankan, susun ulang, atau revisi rancangan'], el: ['Elemen', 'Tambah dan sunting isi motion'], text: ['Teks & caption', 'Caption, transkrip, dan animasi huruf'], look: ['Tampilan', 'Gaya, warna, kamera, orang, transisi'], audio: ['Suara', 'Musik, efek suara, dan narator'], assets: ['Aset', 'Foto, video, dan gambar AI'], proj: ['Proyek', 'API key, draf, impor & ekspor'] };
const RAIL_LBL = { ai: 'Arahan AI', el: 'Elemen', text: 'Teks', look: 'Tampilan', audio: 'Suara', assets: 'Aset', proj: 'Proyek' };
function enterStudio() {
  $('#home').hidden = true; $('#studio').hidden = false;
  for (const id of ['#projBar', '#bUndo', '#bRedo', '#bHome', '#bRender']) $(id).hidden = false; $('#barGrow').hidden = true;
  $('#projName').value = P.name; $('#modePill').textContent = P.mode === 'product' ? 'Video produk' : 'Video berbicara';
  $('#rail').innerHTML = Object.keys(PANELS).map(k => `<button type="button" data-p="${k}" class="${k === R.panel ? 'on' : ''}" aria-label="${PANELS[k][0]}"><svg viewBox="0 0 24 24">${ICONS[k]}</svg>${RAIL_LBL[k]}</button>`).join('');
  $$('#rail button').forEach(b => b.onclick = () => openPanel(b.dataset.p));
  R.panel = 'ai'; openPanel('ai'); requestAnimationFrame(() => { sizePreview(); seek(0); });
}
function openPanel(k) { R.panel = k; $$('#rail button').forEach(b => b.classList.toggle('on', b.dataset.p === k)); renderPanel(); $('#drawer').scrollTop = 0; }
function refreshAll() { $('#projName').value = P.name; sizePreview(); renderPanel(); drawTimeline(); }
// ---------- helper form ----------
const getPath = (o, k) => k.split('.').reduce((a, x) => a?.[x], o);
function setPath(o, k, v) { const ks = k.split('.'); let a = o; for (let i = 0; i < ks.length - 1; i++) a = a[ks[i]]; a[ks[ks.length - 1]] = v; }
const opts = (list, v) => list.map(([a, b]) => `<option value="${esc(a)}"${String(a) === String(v) ? ' selected' : ''}>${esc(b)}</option>`).join('');
const sel = (k, list, extra = '') => `<select data-k="${k}" ${extra}>${opts(list, getPath(P, k))}</select>`;
const rng2 = (k, min, max, step) => `<input type="range" data-k="${k}" min="${min}" max="${max}" step="${step}">`;
const chk = (k, label) => `<label class="check"><input type="checkbox" data-k="${k}"> <span>${label}</span></label>`;
function bindK(root) {
  $$('[data-k]', root).forEach(inp => {
    const k = inp.dataset.k, cur = getPath(P, k);
    if (inp.type === 'checkbox') inp.checked = !!cur; else if (cur != null) inp.value = cur;
    const num = inp.type === 'range' || inp.type === 'number' || 'num' in inp.dataset;
    const ev = inp.tagName === 'SELECT' || inp.type === 'checkbox' ? 'change' : 'input';
    inp.addEventListener(ev, () => { const v = inp.type === 'checkbox' ? inp.checked : num ? parseFloat(inp.value) : inp.value; setPath(P, k, v); onKey(k, v); changed(); });
  });
}
function onKey(k, v) {
  if (k === 'aspect') sizePreview();
  if (k === 'name') $('#projName').value = v;
  if (k === 'audio.mood') { P.auto.music = false; ensureLoop(v).then(() => { if (R.playing) restartAudio(); }); }
  if (/^audio\.(musicVol|sfxVol|voiceVol)$/.test(k)) setVolumes();
  if (k === 'audio.sfx' || k === 'audio.duck') { if (R.playing) restartAudio(); }
  if (k.startsWith('person.') && segWanted()) segInit().then(requestDraw);
  if (k.startsWith('look.')) P.auto.look = false;
  if (k.startsWith('realism.')) { requestDraw(); setTimeout(renderPanel, 0); }
}
function changed(rerender = false) { commit(); requestDraw(); drawTimeline(); if (rerender) renderPanel(); }
function renderPanel() {
  if ($('#studio').hidden) return;
  const k = R.panel, [t, s] = PANELS[k]; $('#dTitle').textContent = t; $('#dSub').textContent = s;
  const b = $('#dBody'); b.innerHTML = ({ ai: panelAI, el: panelEl, text: panelText, look: panelLook, audio: panelAudio, assets: panelAssets, proj: panelProj })[k](); bindK(b);
  ({ ai: wireAI, el: wireEl, text: wireText, look: wireLook, audio: wireAudio, assets: wireAssets, proj: wireProj })[k](b);
}
// ---------- Arahan AI ----------
function panelAI() {
  const talk = P.mode === 'talk', steps = (STEP_ORDER[P.mode] || []).filter(k => R.steps[k]).map(k => { const s = R.steps[k]; return `<div class="step ${s.st}"><i>${s.st === 'done' ? '✓' : s.st === 'err' ? '!' : ''}</i>${STEP_LABEL[k]}<small>${esc(s.note)}</small></div>`; }).join('');
  const err = R.lastErr && Object.values(R.steps).some(s => s.st === 'err') ? `<p class="hint err">${esc(R.lastErr)}</p>` : '';
  const rv = R.rev || (R.rev = { all: true, from: '', to: '', text: '', frame: true });
  return `
  <div class="blk">
    ${talk ? '' : `<div class="g2">
      <div><label class="f">Merek</label><input type="text" data-k="product.brand"></div><div><label class="f">Produk</label><input type="text" data-k="product.name"></div>
      <div class="span"><label class="f">Keunggulan</label><textarea data-k="product.benefits" rows="3"></textarea></div>
      <div><label class="f">Harga / promo</label><input type="text" data-k="product.price"></div><div><label class="f">Ajakan</label><input type="text" data-k="product.cta"></div>
      <div><label class="f">Link / kontak</label><input type="text" data-k="product.link"></div><div><label class="f">Durasi</label>${sel('product.dur', [[15, '±15 dtk'], [30, '±30 dtk'], [45, '±45 dtk'], [60, '±60 dtk']], 'data-num')}</div>
      <div><label class="f">Gaya bicara</label>${sel('product.tone', [['santai', 'Santai'], ['semangat', 'Semangat'], ['profesional', 'Profesional'], ['hangat', 'Hangat']])}</div><div><label class="f">Suara</label>${sel('audio.voice', VOICES)}</div>
    </div>`}
    <label class="f" style="margin-top:10px">Arahan untuk AI</label><textarea data-k="brief" placeholder="Audiens, pesan utama, ajakan di akhir"></textarea>
    <div style="margin-top:8px"><label class="f">Bidang konten</label>${sel('niche', Object.entries(NICHES).map(([a, b]) => [a, b.name]))}</div>
    ${realBlock()}
    <button class="btn main wide" style="margin-top:10px" id="aRun" ${R.busy ? 'disabled' : ''}>${talk ? 'Jalankan AI lengkap' : 'Tulis naskah, suara & adegan baru'}</button>
    <button class="btn wide" style="margin-top:6px" id="aRe" ${R.busy || (talk && !P.words.length) ? 'disabled' : ''}>Susun ulang motion (teks & suara tetap)</button>
    <div class="steps">${steps}</div>${err}
  </div>
  ${talk ? '' : `<div class="blk"><h3>Naskah narator</h3><textarea data-k="script" rows="5" placeholder="Naskah muncul setelah AI menulisnya."></textarea>
    <button class="btn wide sm" style="margin-top:6px" id="aVoice" ${R.busy || !P.script ? 'disabled' : ''}>Bacakan ulang naskah ini, lalu susun ulang adegan</button></div>`}
  <div class="blk">
    <h3>Revisi dengan AI</h3>
    <div class="seg" role="tablist"><button type="button" data-scope="all" class="${rv.all ? 'on' : ''}">Seluruh video</button><button type="button" data-scope="range" class="${rv.all ? '' : 'on'}">Rentang detik</button></div>
    <div class="g2" id="rvRange" style="margin-top:8px" ${rv.all ? 'hidden' : ''}>
      <div><label class="f">Dari (mm:dd)</label><input type="text" id="rvFrom" value="${esc(rv.from)}" placeholder="00:12"></div>
      <div><label class="f">Sampai (mm:dd)</label><input type="text" id="rvTo" value="${esc(rv.to)}" placeholder="00:20"></div>
      <button class="btn sm span" type="button" id="rvHere">Pakai posisi playhead (±3 dtk)</button>
    </div>
    <textarea id="rvText" style="margin-top:8px" placeholder="mis. Ganti judul pembuka jadi lebih provokatif. Tambah angka saat saya menyebut 70%. Jadikan CTA ke cendekiadigital.com">${esc(rv.text)}</textarea>
    <label class="check" style="margin-top:6px"><input type="checkbox" id="rvFrame" ${rv.frame ? 'checked' : ''}> <span>Sertakan tangkapan preview saat ini</span></label>
    <div class="thumbs">${R.attach.map((b, i) => `<div class="t"><img src="data:image/jpeg;base64,${b}" alt=""><button type="button" data-rmat="${i}" aria-label="Hapus lampiran">✕</button></div>`).join('')}</div>
    <div class="row" style="margin-top:8px"><button class="btn sm" type="button" id="rvShot">Lampirkan screenshot</button><span class="grow"></span><button class="btn main sm" type="button" id="rvGo" ${R.busy ? 'disabled' : ''}>Kirim revisi</button></div>
  </div>
  <div class="blk"><h3>Ekspor rencana</h3><button class="btn sm" id="aPrompt">Prompt editing per adegan</button><p class="hint">Untuk diproses ulang di aplikasi pembuat video AI lain.</p></div>
  <p class="hint">${CANVAS ? 'Mode Gemini Canvas (memakai akun Gemini Anda).' : R.apiKey ? 'API key tersimpan.' : 'API key belum diisi (panel Proyek).'} Model: ${esc(R.modelUsed || (R.model === 'auto' ? 'otomatis' : R.model))}. Setiap proses memakai kuota akun Gemini Anda.</p>`;
}
function realBlock() {
  const r = P.realism, pend = P.els.filter(e => e.type === 'media' && !e.asset && e.imagePrompt).length, made = P.els.filter(e => isAIVisual(e) && e.asset).length;
  return `<div class="realbox ${r.on ? '' : 'off'}" style="margin-top:10px">
    ${chk('realism.on', '<b>Tambah visual realistis AI</b>')}
    <div class="g2" style="margin-top:8px"><div><label class="f">Jenis</label>${sel('realism.kind', REAL_KINDS, r.on ? '' : 'disabled')}</div><div><label class="f">Maksimal</label>${sel('realism.count', [1, 2, 3, 4, 5, 6].map(n => [n, n + (r.kind === 'video' ? ' klip' : ' foto')]), 'data-num ' + (r.on ? '' : 'disabled'))}</div></div>
    <p class="hint">${r.on ? realNote(r.kind) : `Mati: AI tidak membuat visual baru${made ? `, dan ${made} adegan visual AI yang sudah ada disembunyikan dari video (tidak dihapus)` : ''}.`}</p>
    ${r.on ? `<button class="btn sm wide" style="margin-top:6px" id="aVis" ${R.busy ? 'disabled' : ''}>${pend ? `Buat visual untuk ${pend} adegan yang menunggu` : 'Tambah adegan visual realistis dengan AI'}</button>` : ''}
  </div>`;
}
function wireAI(b) {
  const av2 = $('#aVis', b); if (av2) av2.onclick = async () => {
    if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.');
    if (P.els.some(e => e.type === 'media' && !e.asset && e.imagePrompt)) { R.busy = true; renderPanel(); try { await genImages(); toast('Visual realistis selesai dibuat.'); } catch (e) { failSteps(e); } finally { R.busy = false; busy(false); commit(true); refreshAll(); } }
    else runRedesign({ all: true, from: 0, to: P.duration, text: `Tambahkan ${P.realism.count} adegan media dengan imagePrompt untuk ${P.realism.kind === 'video' ? 'klip video' : 'foto'} realistis di momen yang paling butuh visual nyata. Pertahankan semua elemen lain.`, images: null });
  };
  const rv = R.rev;
  $('#aRun', b).onclick = () => { if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.'); P.mode === 'talk' ? runTalk() : (R.keepScript = false, runProduct()); };
  $('#aRe', b).onclick = () => runRedesign(null);
  const av = $('#aVoice', b); if (av) av.onclick = () => { R.keepScript = true; R.voUpload = null; runProduct(); };
  $$('[data-scope]', b).forEach(x => x.onclick = () => { rv.all = x.dataset.scope === 'all'; renderPanel(); });
  const keep = () => { rv.from = $('#rvFrom', b)?.value || rv.from; rv.to = $('#rvTo', b)?.value || rv.to; rv.text = $('#rvText', b).value; rv.frame = $('#rvFrame', b).checked; };
  $('#rvText', b).oninput = keep; $('#rvFrame', b).onchange = keep; if ($('#rvFrom', b)) { $('#rvFrom', b).oninput = keep; $('#rvTo', b).oninput = keep; }
  const here = $('#rvHere', b); if (here) here.onclick = () => { const t = now(); rv.from = fmtT(Math.max(0, t - 3)); rv.to = fmtT(Math.min(P.duration, t + 3)); renderPanel(); };
  $$('[data-rmat]', b).forEach(x => x.onclick = () => { R.attach.splice(+x.dataset.rmat, 1); renderPanel(); });
  $('#rvShot', b).onclick = () => $('#fShot').click();
  $('#rvGo', b).onclick = () => {
    keep(); if (!rv.text.trim()) return toast('Tulis dulu apa yang ingin diubah.'); if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.');
    let from = 0, to = P.duration; if (!rv.all) { from = parseT(rv.from); to = parseT(rv.to); if (!isFinite(from) || !isFinite(to) || to <= from) return toast('Isi rentang waktu dengan format mm:dd, mis. 00:12 sampai 00:20.'); }
    const images = [...R.attach]; if (rv.frame) { try { images.push($('#pv').toDataURL('image/jpeg', .8).split(',')[1]); } catch {} }
    runRedesign({ all: rv.all, from: clamp(from, 0, P.duration), to: clamp(to, 0, P.duration), text: rv.text.trim(), images: images.length ? images : null }).then(() => { R.attach = []; rv.text = ''; renderPanel(); });
  };
  $('#aPrompt', b).onclick = () => { $('#promptTxt').value = exportPrompts(); $('#promptModal').hidden = false; };
}
// ---------- Elemen ----------
const elLabel = el => TYPES[el.type]?.label || el.type;
const elDesc = el => plain(el.text || el.value || el.sub || (el.items || []).map(i => i.label).join(', ') || (el.type === 'zoom' ? `${Math.round(((el.amount || 1.15) - 1) * 100)}%` : el.type === 'fx' ? optLabel('fx', el.kind) : el.type === 'sticker' ? el.emoji : el.type === 'media' ? (assetById(el.asset)?.name || 'menunggu visual AI') : ''));
function panelEl() {
  const cur = P.els.find(e => e.id === R.sel), list = [...P.els].sort((a, b) => a.start - b.start);
  return `${cur ? inspector(cur) : ''}
  <div class="blk"><h3>Tambah di posisi playhead (${fmtT(now())})</h3>
    <div class="addgrid">${Object.entries(TYPES).filter(([k]) => !(P.mode === 'product' && (k === 'lower' || k === 'zoom'))).map(([k, v]) => `<button type="button" data-add="${k}"><i>${v.icon}</i>${v.label}</button>`).join('')}</div>
  </div>
  <div class="blk"><h3>${list.length} elemen</h3>
    ${list.map(e => `<div class="el ${e.id === R.sel ? 'on' : ''}" data-id="${e.id}" tabindex="0"><span class="sw" style="background:${TYPES[e.type].color}"></span><div class="tx"><b>${esc(elLabel(e))}${e.type === 'media' ? ' · ' + esc(optLabel('layout', e.layout)) : ''}</b><span>${fmtT(e.start)}–${fmtT(e.end)} · ${elHidden(e) ? 'disembunyikan · ' : ''}${esc(elDesc(e)).slice(0, 48)}</span></div></div>`).join('') || '<p class="hint">Belum ada elemen. Jalankan AI atau tambah manual.</p>'}
    <p class="hint">Di timeline: seret elemen untuk memindah, tarik ujungnya untuk mengubah durasi. Tombol Delete menghapus elemen terpilih.</p>
  </div>`;
}
function inspector(el) {
  const f = TYPES[el.type].f, row = [];
  const sub = { notif: 'Aplikasi / pengirim', lower: 'Peran / jabatan', quote: 'Nama pembicara', cta: 'Tombol / alamat', chapter: 'Subjudul', title: 'Subjudul' }[el.type] || 'Teks pendukung';
  for (const k of f) {
    if (k === 'text') row.push(`<div class="fld"><label class="f">${el.type === 'stat' ? 'Keterangan' : el.type === 'lower' ? 'Nama' : 'Teks'} <span class="muted small">(*kata* = kata kunci)</span></label>${el.type === 'quote' || el.type === 'notif' ? `<textarea data-f="text" rows="2">${esc(el.text)}</textarea>` : `<input type="text" data-f="text" value="${esc(el.text)}">`}</div>`);
    if (k === 'sub') row.push(`<div class="fld"><label class="f">${sub}</label><input type="text" data-f="sub" value="${esc(el.sub)}"></div>`);
    if (k === 'value') row.push(`<div class="fld"><label class="f">Angka</label><input type="text" data-f="value" value="${esc(el.value)}" placeholder="mis. 70%, 3x, Rp 2 juta"></div>`);
    if (k === 'items') row.push(`<div class="fld"><label class="f">Butir (satu per baris)</label><textarea data-f="items" rows="3">${esc((el.items || []).map(i => i.label).join('\n'))}</textarea></div>`);
    if (k === 'ditems') row.push(`<div class="fld"><label class="f">Butir: label | nilai | ikon</label><textarea data-f="ditems" rows="4">${esc((el.items || []).map(i => [i.label, i.value, i.icon].filter((x, j) => x || j < 1).join(' | ')).join('\n'))}</textarea><p class="hint">${el.kind === 'compare' ? 'Baris pertama: judul kolom kiri | judul kolom kanan. Baris berikut: sisi kiri | sisi kanan.' : el.kind === 'bars' ? 'Nilai berupa angka, mis. Penjualan | 120 | 📈' : el.kind === 'ring' ? 'Satu baris: label | persen, mis. Peserta puas | 92%' : 'Ikon boleh emoji.'}</p></div>`);
    if (k === 'pos') row.push(`<div class="fld"><label class="f">Posisi</label><select data-f="pos">${opts(OPT.pos, el.pos)}</select></div>`);
    if (k === 'behind' && P.mode === 'talk') row.push(`<label class="check fld"><input type="checkbox" data-f="behind" ${el.behind ? 'checked' : ''}> <span>Taruh di belakang tubuh orang ${SEG.state === 'fail' ? '(pemisah orang tidak tersedia di browser ini)' : R.light ? '(matikan mode ringan)' : ''}</span></label>`);
    if (k === 'xy') row.push(`<div class="g2 fld"><div><label class="f">Posisi kiri-kanan</label><input type="range" data-f="x" min=".05" max=".95" step=".01" value="${el.x ?? .7}"></div><div><label class="f">Posisi atas-bawah</label><input type="range" data-f="y" min=".05" max=".95" step=".01" value="${el.y ?? .35}"></div></div>`);
    if (k === 'emoji') row.push(`<div class="fld"><label class="f">Emoji</label><input type="text" data-f="emoji" value="${esc(el.emoji)}" maxlength="8"><div class="chips" style="margin-top:6px">${['🔥', '✨', '💡', '🚀', '✅', '❌', '😮', '👏', '💰', '📈', '❤️', '👀'].map(e => `<button type="button" class="chip" data-emo="${e}">${e}</button>`).join('')}</div></div>`);
    if (k === 'asset') row.push(`<div class="fld"><label class="f">Aset</label><select data-f="asset"><option value="">${el.imagePrompt ? 'Visual AI (belum dibuat)' : '(pilih aset)'}</option>${P.assets.map(a => `<option value="${a.id}"${a.id === el.asset ? ' selected' : ''}>${esc(a.name)}${a.desc ? ' · ' + esc(a.desc.slice(0, 30)) : ''}</option>`).join('')}</select>${!el.asset || assetById(el.asset)?.origin === 'ai' ? `<label class="f" style="margin-top:8px">Deskripsi visual AI (bahasa Inggris)</label><textarea data-f="imagePrompt" rows="3" placeholder="mis. young Indonesian office worker typing on a laptop in a bright cafe, slow dolly-in">${esc(el.imagePrompt || '')}</textarea><div class="row" style="margin-top:6px"><button class="btn xs" data-act="genimg" data-kind="image">${el.asset ? 'Buat ulang sebagai foto' : 'Buat foto realistis'}</button><button class="btn xs" data-act="genimg" data-kind="video">${el.asset ? 'Buat ulang sebagai video' : 'Buat video realistis'}</button></div>${elHidden(el) ? '<p class="hint err">Visual realistis AI sedang dimatikan, jadi adegan ini tidak tampil di video.</p>' : ''}` : ''}</div>`);
    if (k === 'layout') row.push(`<div class="fld"><label class="f">Tata letak</label><select data-f="layout">${opts(OPT.layout.filter(o => P.mode === 'talk' || o[0] !== 'split'), el.layout)}</select></div>`);
    if (k === 'kind') row.push(`<div class="fld"><label class="f">Jenis animasi</label><select data-f="kind">${opts(OPT.diagram, el.kind)}</select></div>`);
    if (k === 'zkind') row.push(`<div class="g2 fld"><div><label class="f">Gerak zoom</label><select data-f="kind">${opts(OPT.zoom, el.kind || 'auto')}</select></div><div><label class="f">Besar zoom</label><input type="range" data-f="amount" min="1.03" max="1.5" step=".01" value="${el.amount || 1.15}"></div></div>`);
    if (k === 'fxkind') row.push(`<div class="fld"><label class="f">Efek</label><select data-f="kind">${opts(OPT.fx, el.kind)}</select></div>`);
    if (k === 'trans') row.push(`<div class="fld"><label class="f">Transisi masuk</label><select data-f="trans">${opts([['auto', 'Ikut setelan'], ...OPT.trans], el.trans || 'auto')}</select></div>`);
  }
  return `<div class="insp">
    <div class="hdr"><span class="tag" style="width:10px;height:10px;border-radius:3px;background:${TYPES[el.type].color}"></span><b>${esc(elLabel(el))}</b><button class="btn xs ghost" data-act="close" aria-label="Tutup">✕</button></div>
    <div class="g3 fld"><div><label class="f">Mulai</label><input type="number" step="0.1" min="0" data-f="start" value="${el.start.toFixed(1)}"></div><div><label class="f">Selesai</label><input type="number" step="0.1" min="0" data-f="end" value="${el.end.toFixed(1)}"></div><div><label class="f">Suara</label><select data-f="sfx">${opts(OPT.sfx, el.sfx || 'auto')}</select></div></div>
    ${row.join('')}
    <div class="row" style="margin-top:4px"><button class="btn xs" data-act="play">Putar dari sini</button><button class="btn xs" data-act="dup">Duplikat</button><span class="grow"></span><button class="btn xs warn" data-act="del">Hapus</button></div>
  </div>`;
}
function wireEl(b) {
  $$('[data-add]', b).forEach(x => x.onclick = () => addEl(x.dataset.add));
  $$('.el', b).forEach(x => { const go = () => { selectEl(x.dataset.id); }; x.onclick = go; x.onkeydown = e => { if (e.key === 'Enter') go(); }; });
  const box = $('.insp', b); if (!box) return; const el = P.els.find(e => e.id === R.sel);
  $$('[data-f]', box).forEach(inp => {
    const f = inp.dataset.f, ev = inp.tagName === 'SELECT' || inp.type === 'checkbox' ? 'change' : 'input';
    inp.addEventListener(ev, () => {
      let v = inp.type === 'checkbox' ? inp.checked : inp.value;
      if (['start', 'end', 'x', 'y', 'amount'].includes(f)) v = parseFloat(v) || 0;
      if (f === 'start' || f === 'end') v = clamp(v, 0, P.duration);
      if (f === 'items') { el.items = v.split('\n').map(s => s.trim()).filter(Boolean).map(label => ({ label })); }
      else if (f === 'ditems') { el.items = v.split('\n').map(s => s.trim()).filter(Boolean).map(l => { const [label, value, icon] = l.split('|').map(x => (x || '').trim()); return { label, value: value || '', icon: icon || '' }; }); }
      else el[f] = v;
      if (el.end <= el.start + .2) el.end = Math.min(P.duration, el.start + 1);
      if (f === 'behind' && v) segInit().then(requestDraw);
      if (f === 'start' && !R.playing) seek(el.start + .4);
      changed(f === 'layout' || f === 'kind');
    });
  });
  $$('[data-emo]', box).forEach(x => x.onclick = () => { el.emoji = x.dataset.emo; changed(true); });
  box.querySelector('[data-act=close]').onclick = () => { R.sel = null; renderPanel(); drawTimeline(); };
  box.querySelector('[data-act=play]').onclick = () => { seek(el.start); play(); };
  box.querySelector('[data-act=dup]').onclick = () => { const c = { ...JSON.parse(JSON.stringify(el)), id: uid() }; const d = c.end - c.start; c.start = Math.min(P.duration - d, el.end + .1); c.end = c.start + d; P.els.push(c); R.sel = c.id; changed(true); };
  box.querySelector('[data-act=del]').onclick = () => deleteSel();
  $$('[data-act=genimg]', box).forEach(btn => btn.onclick = async () => {
    if (!el.imagePrompt?.trim()) return toast('Isi deskripsi visualnya dulu.'); if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.');
    const kind = btn.dataset.kind; $$('[data-act=genimg]', box).forEach(x => x.disabled = true); btn.textContent = kind === 'video' ? 'Membuat video… (1–5 menit)' : 'Membuat foto…'; R.veoErr = '';
    try {
      const a = await makeVisual(el, kind, sec => { btn.textContent = `Membuat video… ${sec} dtk`; }); el.asset = a.id;
      if (a.kind === 'video' && el.end - el.start > (a.dur || 8)) el.end = el.start + (a.dur || 8);
      if (!P.realism.on) { P.realism.on = true; toast('Visual realistis AI dinyalakan.'); }
      if (kind === 'video' && a.kind !== 'video') toast(`Video tidak bisa dibuat${R.veoErr ? ` (${R.veoErr})` : ''}. Diganti foto realistis.`, 8000);
      changed(true);
    } catch (e) { toast(e.message, 7000); $$('[data-act=genimg]', box).forEach(x => x.disabled = false); btn.textContent = 'Coba lagi'; }
  });
}
function selectEl(id) { R.sel = id; const el = P.els.find(e => e.id === id); if (el && !R.playing && (now() < el.start || now() > el.end)) seek(el.start + Math.min(.6, (el.end - el.start) / 2)); if (R.panel !== 'el') openPanel('el'); else renderPanel(); drawTimeline(); }
function deleteSel() { if (!R.sel) return; P.els = P.els.filter(e => e.id !== R.sel); R.sel = null; changed(true); toast('Elemen dihapus. Ctrl+Z untuk membatalkan.', 2200); }
function addEl(type) {
  const t = clamp(now(), 0, Math.max(0, P.duration - .5)), d = P.duration;
  const def = { title: { text: 'Judul *besar*', pos: 'top', dur: 3 }, card: { text: 'Poin *penting*', sub: 'Penjelasan singkat', dur: 3.5 }, stat: { value: '70%', text: 'keterangan angka', pos: 'center', dur: 2.5 }, list: { text: 'Tiga *hal*', items: [{ label: 'Butir pertama' }, { label: 'Butir kedua' }, { label: 'Butir ketiga' }], dur: 4 }, chips: { items: [{ label: 'Kata kunci' }, { label: 'Kedua' }, { label: 'Ketiga' }], pos: 'center', dur: 3 }, quote: { text: 'Kalimat yang layak *dikutip*', sub: 'Nama', dur: 4 }, lower: { text: 'Nama Anda', sub: 'Jabatan', dur: 4 }, callout: { text: 'Lihat ini', x: .65, y: .45, dur: 2.5 }, notif: { sub: 'WhatsApp', text: 'Pesanan baru masuk!', dur: 3 }, sticker: { emoji: '🔥', x: .78, y: .28, dur: 1.8 }, media: { asset: P.assets[0]?.id || '', layout: P.mode === 'talk' ? 'pip' : 'float', dur: 3 }, chapter: { text: 'Bagian *baru*', dur: 2.5 }, diagram: { kind: 'steps', text: 'Cara *kerjanya*', items: [{ label: 'Langkah satu', icon: '1️⃣' }, { label: 'Langkah dua', icon: '2️⃣' }, { label: 'Langkah tiga', icon: '3️⃣' }], dur: 5 }, cta: { text: 'Ikuti untuk *tips* berikutnya', sub: 'cendekiadigital.com', dur: 3.5 }, zoom: { kind: 'auto', amount: 1.15, dur: 1.6 }, fx: { kind: 'flash', dur: .4 } }[type] || { dur: 3 };
  if (type === 'media' && !def.asset) { toast('Unggah foto/video dulu di panel Aset.'); openPanel('assets'); return; }
  const { dur, ...rest } = def; const start = type === 'cta' ? Math.max(0, d - dur) : t;
  const el = normEl({ type, start, end: Math.min(d, start + dur), ...rest }, d); if (!el) return;
  el.id = uid(); P.els.push(el); R.sel = el.id; if (R.panel !== 'el') openPanel('el'); changed(true);
}
// ---------- Teks & caption ----------
function panelText() {
  const fonts = [['', 'Ikut gaya'], ...FONTS.map(f => [f, f])];
  const words = P.words.slice(0, 700);
  return `<div class="blk"><h3>Caption</h3>
    ${chk('cap.on', 'Tampilkan caption')}
    <div class="kv" style="margin-top:10px">
      <label>Gaya</label>${sel('cap.mode', OPT.capMode)}
      <label>Huruf</label>${sel('cap.font', fonts)}
      <label>Ukuran</label>${rng2('cap.size', .04, .11, .001)}
      <label>Posisi</label>${rng2('cap.pos', .45, .93, .005)}
      <label>Kata per tampilan</label>${rng2('cap.maxWords', 1, 6, 1)}
      <label>Geser sinkron</label>${rng2('cap.offset', -1, 1, .05)}
    </div>
    <div style="margin-top:8px">${chk('cap.upper', 'Huruf kapital')}</div>
  </div>
  <div class="blk"><h3>Kata di video</h3>
    ${words.length ? `<p class="hint" style="margin-top:0">Klik kata untuk menandai sorotan caption. Klik ikon gunting untuk memotong kata itu dari video dan suara.</p><div class="chips" id="kwWords">${words.map((w, i) => `<span class="wchip ${P.keywords.includes(i) ? 'on' : ''}"><button type="button" data-wi="${i}">${esc(w.w)}</button><button type="button" class="sc" data-cutw="${i}" title="Potong kata ini" aria-label="Potong kata ${esc(w.w)}">${SCISSORS}</button></span>`).join('')}</div>${P.words.length > 700 ? '<p class="hint">Menampilkan 700 kata pertama.</p>' : ''}` : '<p class="hint" style="margin-top:0">Belum ada transkrip.</p>'}
    ${(P.cuts || []).length || (P.mutes || []).length ? `<p class="hint">${(P.cuts || []).length} potongan (${cutTotal().toFixed(1)} dtk dibuang) · ${(P.mutes || []).length} bagian bisu. Ctrl+Z untuk membatalkan.</p>` : ''}
  </div>
  <div class="blk"><h3>Transkrip</h3>
    <textarea id="trTxt" rows="6" placeholder="Ketik atau tempel transkrip di sini bila tidak memakai AI.">${esc(P.words.map(w => w.w).join(' '))}</textarea>
    <div class="row" style="margin-top:6px"><button class="btn sm" id="trApply">Terapkan teks</button><button class="btn sm" id="trAI" ${R.busy || !R.voice ? 'disabled' : ''}>Transkrip ulang dengan AI</button></div>
    <p class="hint">Jumlah kata sama: waktu tiap kata dipertahankan. Berbeda: waktu dibagi ulang mengikuti bagian yang bersuara.</p>
  </div>
  <div class="blk"><h3>Animasi teks judul & kartu</h3>
    <div class="kv">
      <label>Masuk</label>${sel('look.textIn', OPT.textIn)}
      <label>Dipecah</label>${sel('look.split', OPT.split)}
      <label>Kelenturan</label>${sel('look.ease', OPT.ease)}
      <label>Gerak kata kunci</label>${sel('look.emph', OPT.emph)}
      <label>Gaya kata kunci</label>${sel('look.kw', OPT.kw)}
      <label>Huruf judul</label>${sel('look.fontD', FONTS.map(f => [f, f]))}
      <label>Huruf isi</label>${sel('look.fontB', FONTS.map(f => [f, f]))}
    </div>
    <div style="margin-top:8px">${chk('look.upper', 'Judul huruf kapital')}</div>
  </div>`;
}
function wireText(b) {
  $$('[data-wi]', b).forEach(x => x.onclick = () => { const i = +x.dataset.wi; P.keywords = P.keywords.includes(i) ? P.keywords.filter(k => k !== i) : [...P.keywords, i]; x.parentElement.classList.toggle('on'); changed(); });
  $$('[data-cutw]', b).forEach(x => x.onclick = () => { pause(); const i = +x.dataset.cutw, w = P.words[i]; cutWord(i); toast(`Kata "${w.w}" dipotong. Ctrl+Z untuk membatalkan.`, 2800); });
  $('#trApply', b).onclick = () => {
    const nw = $('#trTxt', b).value.split(/\s+/).filter(Boolean); if (!nw.length) { P.words = []; P.keywords = []; return changed(true); }
    if (nw.length === P.words.length) P.words = P.words.map((w, i) => ({ ...w, w: nw[i] }));
    else { P.words = estimateWords(nw.join(' '), voiceOut(true), P.duration); P.keywords = []; }
    changed(true); toast('Transkrip diperbarui.');
  };
  $('#trAI', b).onclick = async () => { if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.'); R.busy = true; busy(true, 'AI mentranskrip…'); try { const r = await aiTranscribe(voiceOut(true)); P.words = r.words; P.keywords = []; const cut = !R.voUpload && !(P.cuts || []).length && cleanVoice(r.words); if (cut) { P.duration = +(R.voice.duration + 1.4).toFixed(2); P.els = tidyEls(P.els.map(e => e.type === 'cta' ? { ...e, start: Math.max(0, P.duration - (e.end - e.start)), end: P.duration } : { ...e, end: Math.min(e.end, P.duration) }), P.duration); } toast(cut ? 'Ucapan di luar naskah dibuang dari narasi dan caption.' : `${P.words.length} kata ditranskrip.`); } catch (e) { toast(e.message, 6000); } finally { R.busy = false; busy(false); changed(true); } };
}
// ---------- Tampilan ----------
function panelLook() {
  const tps = getTemplates(), talk = P.mode === 'talk';
  return `<div class="blk"><h3>Bidang konten</h3><div class="chips">${Object.entries(NICHES).filter(([k]) => k !== 'auto').map(([k, n]) => `<button type="button" class="chip ${P.niche === k ? 'on' : ''}" data-niche="${k}">${esc(n.name)}</button>`).join('')}</div><p class="hint">Memilih gaya, musik, dan kepadatan yang cocok. AI juga memakainya saat menyusun ulang.</p></div>
  <div class="blk"><h3>Gaya siap pakai</h3><div class="presets">${Object.entries(PRESETS).map(([k, p]) => `<button type="button" class="preset ${P.look.preset === k ? 'on' : ''}" data-pre="${k}"><canvas width="240" height="150" data-prev="${k}"></canvas><span>${esc(p.name)}</span></button>`).join('')}</div></div>
  <div class="blk"><h3>Template saya</h3>
    ${tps.length ? `<div class="stack">${tps.map(t => `<div class="row"><button type="button" class="chip" data-tpl="${t.id}" style="border-left:8px solid ${t.look.accent}">${esc(t.name)}</button><span class="grow"></span><button class="btn xs ghost warn" data-tpldel="${t.id}" aria-label="Hapus template">Hapus</button></div>`).join('')}</div>` : '<p class="hint" style="margin-top:0">Belum ada. Simpan tampilan sekarang, atau tiru gaya dari video/gambar referensi.</p>'}
    <div class="row" style="margin-top:8px"><input type="text" id="tplName" placeholder="Nama template" style="flex:1"><button class="btn sm" id="tplSave">Simpan tampilan ini</button></div>
  </div>
  <div class="blk"><h3>Tiru gaya & ide AI</h3>
    <button class="btn wide sm" id="lkRef" ${R.busy ? 'disabled' : ''}>Tiru dari 1–4 video/gambar referensi</button>
    <button class="btn wide sm" style="margin-top:6px" id="lkAI" ${R.busy ? 'disabled' : ''}>Minta AI rancang tampilan baru</button>
    <p class="hint">AI membaca warna, huruf, kartu, latar, caption, dan transisi, lalu menyimpannya sebagai template.</p>
  </div>
  <div class="blk"><h3>Warna</h3>
    <div class="row"><input type="color" data-k="look.accent" aria-label="Warna aksen"><input type="color" data-k="look.accent2" aria-label="Warna aksen kedua"><input type="color" data-k="look.ink" aria-label="Warna tinta"><span class="small muted">aksen · aksen 2 · tinta</span></div>
    <div class="row" style="margin-top:8px"><button class="btn xs" id="palVid">${talk ? 'Ambil dari video' : 'Ambil dari foto produk'}</button>${(R.visionColors || []).map(c => `<button type="button" class="chip" data-col="${c}" style="border-left:14px solid ${c}">${c}</button>`).join('')}</div>
  </div>
  <div class="blk"><h3>Racik sendiri</h3><div class="kv">
    <label>Bentuk kartu</label>${sel('look.card', OPT.card)}
    <label>Latar adegan</label>${sel('look.sceneBg', OPT.sceneBg)}
    <label>Nuansa latar</label>${sel('look.tone', OPT.tone)}
    ${talk ? `<label>Color grading</label>${sel('look.grading', OPT.grading)}` : ''}
    <label>Vinyet</label>${rng2('look.vignette', 0, .6, .01)}
    <label>Butiran film</label>${rng2('look.grain', 0, .35, .01)}
  </div></div>
  ${talk ? `<div class="blk"><h3>Kamera</h3><div class="kv"><label>Gerak</label>${sel('cam.mode', OPT.camera)}<label>Isi frame</label>${sel('cam.fit', OPT.fit)}</div><p class="hint">Fokus zoom mengikuti posisi wajah (x ${P.face.x.toFixed(2)}, y ${P.face.y.toFixed(2)}).</p></div>
  <div class="blk"><h3>Orang & latar</h3><div class="kv"><label>Latar di belakang orang</label>${sel('person.bg', OPT.personBg)}</div>
    <div class="stack" style="margin-top:8px">${chk('person.rim', 'Cahaya tepi (rim light)')}${chk('person.outline', 'Garis tepi orang')}</div>
    <p class="hint">${R.light ? 'Mode ringan aktif: pemisah orang dimatikan.' : SEG.state === 'ready' ? 'Pemisah orang siap.' : SEG.state === 'fail' ? 'Pemisah orang tidak didukung browser ini.' : SEG.state === 'loading' ? 'Memuat pemisah orang…' : 'Pemisah orang dimuat saat dibutuhkan.'}</p></div>` : ''}
  <div class="blk"><h3>Transisi adegan</h3><div class="kv"><label>Jenis</label>${sel('look.trans', [['auto', 'Otomatis (bervariasi)'], ...OPT.trans])}<label>Kecepatan</label>${rng2('look.transSpeed', .5, 2.5, .1)}</div>
    <button class="btn xs" style="margin-top:8px" id="trRand">Acak transisi tiap adegan</button></div>
  <div class="blk"><h3>Lainnya</h3><div class="stack">${chk('extras.progress', 'Garis progres di bawah')}<div><label class="f">Label merek di pojok (opsional)</label><input type="text" data-k="extras.brand" placeholder="mis. @cendekiadigital"></div></div></div>`;
}
function drawPresetThumb(c, key) { c.dataset.gk = key; galDraw(c, GAL_STILL); }
function wireLook(b) {
  galFonts().then(() => $$('[data-prev]', b).forEach(c => { try { drawPresetThumb(c, c.dataset.prev); } catch (e) { console.warn(e); } }));
  $$('[data-niche]', b).forEach(x => x.onclick = () => { const n = NICHES[x.dataset.niche]; P.niche = x.dataset.niche; applyLook(presetLook(n.preset)); P.audio.mood = n.mood; ensureLoop(n.mood); P.auto.look = P.auto.music = false; changed(true); });
  $$('[data-pre]', b).forEach(x => x.onclick = () => { applyLook(presetLook(x.dataset.pre)); P.auto.look = false; changed(true); });
  $$('[data-tpl]', b).forEach(x => x.onclick = () => { const tp = getTemplates().find(t => t.id === x.dataset.tpl); if (tp) { useTemplate(tp); P.auto.look = false; changed(true); toast(`Template "${tp.name}" dipakai.`); } });
  $$('[data-tpldel]', b).forEach(x => x.onclick = () => { store.set('templates', getTemplates().filter(t => t.id !== x.dataset.tpldel)); renderPanel(); });
  $('#tplSave', b).onclick = () => { const n = $('#tplName', b).value.trim() || `Gaya ${new Date().toLocaleDateString('id-ID')}`; saveTemplate(n); toast(`Template "${n}" disimpan.`); renderPanel(); };
  $('#lkRef', b).onclick = () => { if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.'); $('#fRef').click(); };
  $('#lkAI', b).onclick = () => { if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.'); styleFromAI([]); };
  $$('[data-col]', b).forEach(x => x.onclick = () => { P.look.accent = x.dataset.col; P.auto.look = false; changed(true); });
  $('#palVid', b).onclick = () => {
    let src = null; if (P.mode === 'talk' && $('#vid').readyState >= 2) src = { img: $('#vid'), w: R.srcW, h: R.srcH }; else { const a = P.assets.find(a => a.kind === 'image') || P.assets[0]; const f = a && previewFrame(a.id, .5); if (f) src = f; }
    if (!src) return toast('Belum ada gambar untuk diambil warnanya.');
    const pal = paletteFrom(src.img, src.w, src.h); if (!pal.length) return toast('Warna kurang mencolok. Pilih warna manual.');
    P.look.accent = pal[0]; if (pal[1]) P.look.accent2 = pal[1]; P.auto.look = false; changed(true); toast('Warna aksen diambil.');
  };
  $('#trRand', b).onclick = () => { const k = OPT.trans.map(o => o[0]).filter(x => x !== 'cut'); P.els.filter(isFull).forEach(e => e.trans = k[Math.floor(Math.random() * k.length)]); changed(); toast('Transisi tiap adegan diacak.'); };
}
async function styleFromAI(files) {
  R.busy = true; busy(true, files.length ? 'AI mempelajari gaya referensi…' : 'AI merancang tampilan…');
  try {
    const imgs = []; for (const f of files.slice(0, 4)) imgs.push(...(await fileFrames(f)).slice(0, files.length > 2 ? 1 : 3));
    const s = await aiStyle(imgs.slice(0, 8), P.brief); const lk = styleToLook(s); applyLook(lk); if (OPT.camera.some(o => o[0] === s.camera) && P.mode === 'talk') P.cam.mode = s.camera;
    const name = (files.length ? 'Tiru: ' : 'AI: ') + (s.name || 'Gaya baru'); saveTemplate(name, lk); P.auto.look = false;
    toast(`Tampilan "${name}" diterapkan dan disimpan sebagai template.`, 4500);
  } catch (e) { console.error(e); toast(e.message, 6000); }
  finally { R.busy = false; busy(false); changed(true); }
}
// ---------- Suara ----------
function panelAudio() {
  const prod = P.mode === 'product';
  return `<div class="blk"><h3>Musik latar</h3><div class="kv"><label>Suasana</label>${sel('audio.mood', OPT.mood)}<label>Volume</label>${rng2('audio.musicVol', 0, .6, .01)}</div>
    <div style="margin-top:8px">${chk('audio.duck', 'Kecilkan musik saat ada suara bicara')}</div><p class="hint">Musik disintesis langsung di browser, jadi orisinal dan bebas lisensi.</p></div>
  <div class="blk"><h3>Efek suara</h3>${chk('audio.sfx', 'Aktifkan whoosh, pop, ding, dan lainnya')}<div class="kv" style="margin-top:8px"><label>Volume efek</label>${rng2('audio.sfxVol', 0, 1, .01)}</div><p class="hint">Atur efek per elemen lewat kolom "Suara" di panel Elemen.</p></div>
  <div class="blk"><h3>Potong & bisukan</h3>
    <p class="hint" style="margin-top:0">Di timeline: klik kata di jalur <b>Kata</b> (Shift+klik untuk beberapa kata) atau seret di jalur <b>Suara</b>, lalu klik ${SCISSORS} <b>Potong</b> untuk membuang bagian itu, atau <b>Bisukan</b> agar gambar tetap jalan tanpa suara.</p>
    <button class="btn wide sm" id="auTail" ${R.busy || !P.words.length ? 'disabled' : ''}>Bersihkan bunyi setelah kata terakhir</button>
    <p class="hint">${(P.cuts || []).length} potongan (${cutTotal().toFixed(1)} dtk dibuang) · ${(P.mutes || []).length} bagian bisu.</p>
    ${(P.mutes || []).map((m, i) => `<div class="row" style="margin-top:4px"><span class="small">Bisu ${fmtT(m.s)}–${fmtT(m.e)}</span><span class="grow"></span><button class="btn xs" data-unm="${i}">Hapus bisu</button></div>`).join('')}
  </div>
  <div class="blk"><h3>${prod ? 'Narator' : 'Suara video'}</h3><div class="kv"><label>Volume</label>${rng2('audio.voiceVol', 0, 1.5, .01)}${prod ? `<label>Suara AI</label>${sel('audio.voice', VOICES)}` : ''}</div>
    ${prod ? `<button class="btn wide sm" style="margin-top:8px" id="auTTS" ${R.busy || !P.script ? 'disabled' : ''}>Bacakan ulang dengan suara ini</button>
    <button class="btn wide sm" style="margin-top:6px" id="auVO" ${R.busy ? 'disabled' : ''}>Pakai rekaman suara saya sendiri</button>
    <p class="hint">${R.voice ? `Narasi ${R.voice.duration.toFixed(1)} dtk.` : 'Belum ada narasi.'} Setelah ganti suara, adegan disusun ulang agar pas dengan waktu ucapan.</p>` : ''}
  </div>`;
}
function wireAudio(b) {
  $$('[data-unm]', b).forEach(x => x.onclick = () => unMute(P.mutes[+x.dataset.unm]));
  const tl2 = $('#auTail', b); if (tl2) tl2.onclick = cleanTail;
  const t = $('#auTTS', b); if (t) t.onclick = () => { R.keepScript = true; R.voUpload = null; runProduct(); };
  const v = $('#auVO', b); if (v) v.onclick = () => $('#fVO').click();
}
// ---------- Aset ----------
function panelAssets() {
  const sa = R.assetSel && assetById(R.assetSel) ? R.assetSel : P.assets[0]?.id;
  return `<div class="blk"><button class="btn main wide" id="asUp">Unggah foto atau video</button>
    <button class="btn wide sm" style="margin-top:6px" id="asDesc" ${R.busy || !P.assets.length ? 'disabled' : ''}>Minta AI mengenali isi semua aset</button></div>
  <div class="blk"><h3>${P.assets.length} aset</h3>
    ${P.assets.map(a => `<div class="asset ${a.id === sa ? 'sel' : ''}" data-as="${a.id}"><div class="th">${a.kind === 'video' ? `<video src="${R.media.get(a.id)?.url || ''}#t=0.5" muted></video>` : `<img src="${R.media.get(a.id)?.url || ''}" alt="">`}</div><div class="tx"><b>${esc(a.name)}</b><span class="muted">${a.kind === 'video' ? `Video ${(a.dur || 0).toFixed(1)} dtk` : 'Gambar'}${a.origin === 'ai' ? ' · buatan AI' : ''}${a.desc ? ' · ' + esc(a.desc) : ''}</span></div><button class="btn xs ghost warn" data-asdel="${a.id}" aria-label="Hapus aset">✕</button></div>`).join('') || '<p class="hint" style="margin-top:0">Belum ada aset.</p>'}
  </div>
  ${P.assets.length ? `<div class="blk"><h3>Tambah aset terpilih sebagai b-roll</h3><p class="hint" style="margin-top:0">Ditaruh di ${fmtT(now())} selama ±3 dtk.</p>
    <div class="chips" style="margin-top:6px">${OPT.layout.filter(o => P.mode === 'talk' || o[0] !== 'split').map(([k, n]) => `<button type="button" class="chip" data-lay="${k}">${n}</button>`).join('')}</div></div>` : ''}
  <div class="blk"><h3>Buat visual realistis dengan AI</h3><textarea id="giPrompt" rows="3" placeholder="mis. iced coffee being poured into a glass on a wooden table, morning light, close-up"></textarea>
    <div class="row" style="margin-top:6px"><select id="giKind" style="width:auto">${opts(REAL_KINDS, R.giKind || P.realism.kind)}</select><select id="giAsp" style="width:auto">${opts([['9:16', '9:16'], ['1:1', '1:1'], ['3:4', '3:4'], ['4:3', '4:3'], ['16:9', '16:9']], imgAspect(null))}</select><span class="grow"></span><button class="btn sm" id="giGo" ${R.busy ? 'disabled' : ''}>Buat</button></div>
    <p class="hint" id="giNote">${realNote(R.giKind || P.realism.kind)} Deskripsi dalam bahasa Inggris memberi hasil paling akurat.</p></div>
  <div class="blk"><h3>Tips b-roll</h3><ul class="hint" style="padding-left:18px;margin:0"><li>Pasang tepat saat benda/produknya disebut, 2–4 detik saja.</li><li>Jangan lebih dari ±40% durasi supaya wajah tetap jadi pusat.</li><li>Screenshot vertikal paling cocok untuk Mockup HP.</li><li>Foto produk berlatar polos paling cocok untuk Sorotan produk.</li></ul></div>`;
}
function wireAssets(b) {
  $('#asUp', b).onclick = () => { R.assetTarget = 'studio'; $('#fAssets').click(); };
  $('#asDesc', b).onclick = async () => { if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.'); R.busy = true; busy(true, 'AI mengenali aset…'); try { await aiDescribeAssets(P.assets); toast('Isi aset dikenali.'); } catch (e) { toast(e.message, 6000); } finally { R.busy = false; busy(false); changed(true); } };
  $$('[data-as]', b).forEach(x => x.onclick = e => { if (e.target.closest('[data-asdel]')) return; R.assetSel = x.dataset.as; renderPanel(); });
  $$('[data-asdel]', b).forEach(x => x.onclick = () => { if (x.dataset.armed) { removeAsset(x.dataset.asdel); changed(true); } else { x.dataset.armed = 1; x.textContent = 'Hapus?'; setTimeout(() => { x.textContent = '✕'; delete x.dataset.armed; }, 2500); } });
  $$('[data-lay]', b).forEach(x => x.onclick = () => {
    const id = R.assetSel && assetById(R.assetSel) ? R.assetSel : P.assets[0]?.id; if (!id) return;
    const t = clamp(now(), 0, Math.max(0, P.duration - 1)), el = normEl({ type: 'media', start: t, end: Math.min(P.duration, t + 3), asset: id, layout: x.dataset.lay }, P.duration);
    if (el) { el.id = uid(); P.els.push(el); if (isFull(el)) P.els = tidyEls(P.els, P.duration); R.sel = el.id; openPanel('el'); changed(true); }
  });
  $('#giKind', b).onchange = e => { R.giKind = e.target.value; $('#giNote', b).textContent = realNote(R.giKind) + ' Deskripsi dalam bahasa Inggris memberi hasil paling akurat.'; };
  $('#giGo', b).onclick = async () => {
    const pr = $('#giPrompt', b).value.trim(); if (!pr) return toast('Tulis deskripsi visualnya dulu.'); if (!hasAI()) return toast('Tempel Gemini API key dulu di panel Proyek.');
    const kind = $('#giKind', b).value, asp = $('#giAsp', b).value, meta = { desc: pr.slice(0, 90), prompt: pr };
    R.busy = true; busy(true, kind === 'video' ? 'AI membuat video realistis… (1–5 menit)' : 'AI membuat foto realistis…');
    try {
      const a = kind === 'video' ? await addAsset(await aiVideo(pr, asp, s => busy(true, `AI membuat video realistis… ${s} dtk`)), 'Video AI.mp4', 'ai', meta) : await addAsset(await aiImage(pr, asp), 'Foto AI', 'ai', meta);
      R.assetSel = a.id; if (!P.realism.on) P.realism.on = true; toast(`${kind === 'video' ? 'Video' : 'Foto'} realistis dibuat dan masuk daftar aset. Pilih tata letak di bawah untuk memasangnya.`, 5000);
    } catch (e) { toast(e.message, 7000); } finally { R.busy = false; busy(false); changed(true); }
  };

}
// ---------- Proyek ----------
function panelProj() {
  if (CANVAS) return `<div class="blk"><h3>Akses AI</h3><p class="hint okmsg" style="margin-top:0">✓ Mode Gemini Canvas</p><p class="hint">AI berjalan memakai akun Gemini Anda sendiri, tanpa API key. Model yang bisa dipakai ditentukan Google untuk Canvas: teks, suara AI, dan foto realistis. Video Veo tidak tersedia di mode ini.</p></div>${projRest()}`;
  return `<div class="blk"><h3>Gemini API key</h3><div class="row"><input type="password" id="pjKey" value="${esc(R.apiKey)}" placeholder="AIza…" style="flex:1" autocomplete="off"><button class="btn sm main" id="pjKeySave">Simpan</button></div>
    ${R.keyState ? `<p class="hint ${R.keyState.ok ? 'okmsg' : 'badmsg'}">${R.keyState.ok ? '✓' : '✗'} ${esc(R.keyState.msg)}</p>` : ''}
    <div class="row" style="margin-top:6px"><button class="btn xs" id="pjKeyTest" ${R.apiKey ? '' : 'disabled'}>Tes key sekarang</button></div>
    <p class="hint">Disimpan hanya di browser ini. Bila halaman ini dijalankan di Gemini Canvas, kolom ini boleh dikosongkan.</p>
    <label class="f" style="margin-top:10px" for="pjModel">Model teks</label><select id="pjModel"><option value="auto">Otomatis (pilih model terbaik yang tersedia)</option>${R.model !== 'auto' ? `<option value="${esc(R.model)}" selected>${esc(R.model)}</option>` : ''}</select>
    <div class="row" style="margin-top:6px"><button class="btn xs" id="pjCheck">Periksa model</button><span class="hint" id="pjModels" style="margin:0;flex:1">Memeriksa model yang tersedia…</span></div>
    <p class="hint">Bila satu model sibuk, kuotanya habis, atau sudah dipensiunkan Google, aplikasi otomatis pindah ke model lain yang tersedia.</p></div>${projRest()}`;
}
function projRest() {
  return `  <div class="blk"><h3>Video</h3><div class="kv"><label>Nama proyek</label><input type="text" data-k="name"><label>Format</label>${sel('aspect', [...(P.mode === 'talk' ? [['source', 'Ikuti video asli']] : []), ['9:16', '9:16 Reels/Shorts'], ['4:5', '4:5 Feed'], ['1:1', '1:1 Kotak'], ['16:9', '16:9 YouTube']])}</div>
    <p class="hint">${P.mode === 'talk' ? `Sumber ${R.srcW}×${R.srcH}, ` : ''}durasi ${fmtT(P.duration)}.</p>
    <label class="check" style="margin-top:8px"><input type="checkbox" id="pjLight" ${R.light ? 'checked' : ''}> <span>Mode ringan (preview lebih kecil, tanpa pemisah orang). Otomatis aktif di HP.</span></label></div>
  <div class="blk"><h3>Draf & berkas</h3><p class="hint" style="margin-top:0">Draf tersimpan otomatis di browser ini, termasuk video dan aset.</p>
    <div class="row" style="margin-top:8px"><button class="btn sm" id="pjSave">Simpan draf sekarang</button><button class="btn sm" id="pjExp">Ekspor rancangan (.json)</button><button class="btn sm" id="pjImp">Impor rancangan</button></div>
    <div class="row" style="margin-top:8px"><button class="btn sm warn" id="pjClear">Kosongkan semua elemen</button></div></div>`;
}
function wireProj(b) {
  if ($('#pjKeySave', b)) $('#pjKeySave', b).onclick = async () => { setKey($('#pjKey', b).value); if (!R.apiKey) { toast('API key dikosongkan.'); return renderPanel(); } const st = await verifyKey(); toast(st?.ok ? 'API key disimpan dan aktif.' : 'API key ditolak Google. Lihat keterangannya di panel ini.', 5000); renderPanel(); };
  if ($('#pjKeyTest', b)) $('#pjKeyTest', b).onclick = async () => { const st = await verifyKey(); toast(st?.ok ? st.msg : 'Key ditolak. Lihat keterangannya di panel ini.', 5000); renderPanel(); };
  if ($('#pjModel', b)) $('#pjModel', b).onchange = e => { R.model = e.target.value || 'auto'; store.set('model', R.model); toast(R.model === 'auto' ? 'Model dipilih otomatis.' : `Model ${R.model} dipakai lebih dulu.`); };
  const fillModels = force => { const out = $('#pjModels', b); if (out) out.textContent = 'Memeriksa model yang tersedia…'; discoverModels(force).then(D => {
    const selEl = $('#pjModel', b); if (!selEl) return;
    const names = [...new Set([...D.text, ...D.lite, ...D.pro])];
    selEl.innerHTML = `<option value="auto">Otomatis (pilih model terbaik yang tersedia)</option>` + names.map(n => `<option value="${esc(n)}"${n === R.model ? ' selected' : ''}>${esc(n)}</option>`).join('') + (R.model !== 'auto' && !names.includes(R.model) ? `<option value="${esc(R.model)}" selected>${esc(R.model)} (tidak terdeteksi)</option>` : '');
    if (out) out.textContent = D.ok ? `Tersedia untuk key ini: ${names.length} model teks · suara AI ${D.tts.length ? 'ada' : 'tidak ada'} · gambar ${D.image.length + D.imagen.length ? 'ada' : 'tidak ada'} · video Veo ${D.veo.length ? 'ada' : 'tidak ada'}.${R.modelUsed ? ` Terakhir dipakai: ${R.modelUsed}.` : ''}` : (R.apiKey ? 'Daftar model tidak bisa dibaca. Periksa key, lalu klik Periksa model lagi.' : 'Isi API key dulu untuk melihat model yang tersedia.');
  }); };
  fillModels(false); if ($('#pjCheck', b)) $('#pjCheck', b).onclick = () => fillModels(true);
  $('#pjLight', b).onchange = e => { R.light = e.target.checked; sizePreview(); renderPanel(); };
  $('#pjSave', b).onclick = async () => { await saveDraft(); toast('Draf disimpan.'); };
  $('#pjExp', b).onclick = () => { const blob = new Blob([JSON.stringify(P, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = (P.name || 'proyek').replace(/[^\w\- ]+/g, '').trim() + '.motion.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 3000); };
  $('#pjImp', b).onclick = () => $('#fJson').click();
  $('#pjClear', b).onclick = e => { const x = e.currentTarget; if (x.dataset.armed) { P.els = []; R.sel = null; changed(true); toast('Semua elemen dikosongkan. Ctrl+Z untuk membatalkan.'); } else { x.dataset.armed = 1; x.textContent = 'Klik lagi untuk yakin'; setTimeout(() => { x.textContent = 'Kosongkan semua elemen'; delete x.dataset.armed; }, 3000); } };
}

// ================= POTONG & BISUKAN =================
// P.cuts  : rentang WAKTU SUMBER (detik) yang dibuang dari video/suara asli (tidak merusak file asli).
// P.mutes : rentang WAKTU VIDEO JADI yang suaranya dibisukan, gambar tetap jalan.
// Kata, caption, dan elemen disimpan dalam waktu video jadi, jadi ikut bergeser saat dipotong.
const SCISSORS = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/></svg>';
const MUTE_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M23 9l-6 6M17 9l6 6"/></svg>';
const cutsSorted = (p = P) => (p.cuts || []).slice().sort((a, b) => a.s - b.s);
function srcOf(t, p = P) { let x = t; for (const c of cutsSorted(p)) { if (c.s <= x + 1e-6) x += c.e - c.s; else break; } return x; }
function outOf(x, p = P) { let t = x; for (const c of cutsSorted(p)) { if (x >= c.e) t -= c.e - c.s; else if (x > c.s) t -= x - c.s; } return Math.max(0, t); }
const inCut = (x, p = P) => (p.cuts || []).find(c => x >= c.s - 1e-3 && x < c.e - 1e-3);
const inMute = (t, p = P) => (p.mutes || []).find(m => t >= m.s && t < m.e);
function keepSegs(p, srcDur) { const segs = []; let pos = 0, out = 0; for (const c of cutsSorted(p)) { if (c.s > pos) { segs.push({ s: pos, e: Math.min(c.s, srcDur), out }); out += Math.min(c.s, srcDur) - pos; } pos = Math.max(pos, c.e); } if (srcDur > pos) segs.push({ s: pos, e: srcDur, out }); return segs; }
const cutTotal = (p = P) => (p.cuts || []).reduce((a, c) => a + c.e - c.s, 0);
// suara dalam waktu video jadi (potongan dibuang, bagian bisu dinolkan)
const VOC = new Map();
function voiceOut(noMute = false) {
  const src = R.voice; if (!src) return null;
  const cuts = P.cuts || [], mutes = noMute ? [] : (P.mutes || []);
  if (!cuts.length && !mutes.length) return src;
  const key = `${noMute}|${JSON.stringify(cuts)}|${JSON.stringify(mutes)}`, hit = VOC.get(key);
  if (hit && hit.src === src) return hit.buf;
  const sr = src.sampleRate, segs = keepSegs(P, src.duration), fade = Math.round(sr * .006);
  const parts = segs.map(s => [Math.round(s.s * sr), Math.min(src.length, Math.round(s.e * sr))]).filter(([a, b]) => b > a);
  const total = parts.reduce((a, [x, y]) => a + y - x, 0), out = new AudioBuffer({ numberOfChannels: src.numberOfChannels, length: Math.max(1, total), sampleRate: sr });
  for (let c = 0; c < src.numberOfChannels; c++) {
    const d = out.getChannelData(c), s = src.getChannelData(c); let o = 0;
    for (const [a, b] of parts) { d.set(s.subarray(a, b), o); const n = Math.min(fade, (b - a) >> 1); for (let i = 0; i < n; i++) { d[o + i] *= i / n; d[o + b - a - 1 - i] *= i / n; } o += b - a; }
    for (const m of mutes) { const a = Math.max(0, Math.round(m.s * sr)), b = Math.min(d.length, Math.round(m.e * sr)); for (let i = a; i < b; i++) { const k = Math.min(1, (i - a) / fade, (b - 1 - i) / fade); d[i] *= 1 - Math.max(0, k); } }
  }
  if (VOC.size > 6) VOC.clear(); VOC.set(key, { src, buf: out }); return out;
}
// potong rentang [a, b) waktu video jadi: buang dari suara/video, geser semua yang sesudahnya
function rippleCut(a, b) {
  a = clamp(a, 0, P.duration); b = clamp(b, 0, P.duration); const len = b - a; if (len < .04) return false;
  if (P.duration - len < .5) { toast('Bagian yang dipotong terlalu panjang.'); return false; }
  const sa = srcOf(a), sb = srcOf(b);
  const cuts = [...(P.cuts || []), { s: +sa.toFixed(3), e: +sb.toFixed(3) }].sort((x, y) => x.s - y.s), merged = [];
  for (const c of cuts) { const l = merged[merged.length - 1]; if (l && c.s <= l.e + .002) l.e = Math.max(l.e, c.e); else merged.push({ ...c }); }
  const sh = t => t <= a ? t : t >= b ? t - len : a;
  const keep = [], remap = new Map();
  P.words.forEach((w, i) => { const mid = (w.s + w.e) / 2; if (mid >= a && mid < b) return; remap.set(i, keep.length); const s = sh(w.s); keep.push({ ...w, s: +s.toFixed(2), e: +Math.max(s + .05, sh(w.e)).toFixed(2) }); });
  P.keywords = P.keywords.map(i => remap.get(i)).filter(i => i != null); P.words = keep;
  P.duration = +(P.duration - len).toFixed(3);
  P.els = P.els.map(el => { if (el.start >= a && el.end <= b && el.type !== 'cta') return null; const s = sh(el.start), e = el.type === 'cta' && el.end >= P.duration + len - .05 ? P.duration : sh(el.end); return e - s < .2 ? null : { ...el, start: s, end: Math.min(e, P.duration) }; }).filter(Boolean);
  P.mutes = (P.mutes || []).map(m => ({ s: sh(m.s), e: sh(m.e) })).filter(m => m.e - m.s > .02);
  P.cuts = merged; R.cutSel = null; if (R.sel && !P.els.some(e => e.id === R.sel)) R.sel = null;
  return len;
}
function addMute(a, b) {
  a = clamp(a, 0, P.duration); b = clamp(b, 0, P.duration); if (b - a < .04) return false;
  const ms = [...(P.mutes || []), { s: +a.toFixed(3), e: +b.toFixed(3) }].sort((x, y) => x.s - y.s), merged = [];
  for (const m of ms) { const l = merged[merged.length - 1]; if (l && m.s <= l.e + .01) l.e = Math.max(l.e, m.e); else merged.push({ ...m }); }
  P.mutes = merged; R.cutSel = null; return true;
}
function doCut() { const s = R.cutSel; if (!s) return; pause(); const len = rippleCut(s.a, s.b); if (!len) return; seek(Math.max(0, s.a - .3)); changed(true); sizeTimeline(); cutToolsUI(); toast(`${len.toFixed(1)} dtk dipotong dari video dan suara. Ctrl+Z untuk membatalkan.`, 3500); }
function doMute() { const s = R.cutSel; if (!s) return; if (!addMute(s.a, s.b)) return; changed(true); cutToolsUI(); toast('Suara di bagian itu dibisukan. Ctrl+Z untuk membatalkan.', 3000); }
function unMute(m) { P.mutes = (P.mutes || []).filter(x => x !== m); R.cutSel = null; changed(true); cutToolsUI(); toast('Bisu dihapus.', 2000); }
function cutWord(i) {
  const w = P.words[i]; if (!w) return; const prev = P.words[i - 1], next = P.words[i + 1];
  R.cutSel = { a: Math.max(prev ? (prev.e + w.s) / 2 : 0, w.s - .05), b: Math.min(next ? (w.e + next.s) / 2 : P.duration, w.e + .05) }; doCut();
}
function selectWords(i, j) {
  const lo = Math.min(i, j), hi = Math.max(i, j), W = P.words, prev = W[lo - 1], next = W[hi + 1];
  R.cutSel = { kind: 'word', i0: lo, i1: hi, a: Math.max(prev ? (prev.e + W[lo].s) / 2 : 0, W[lo].s - .05), b: Math.min(next ? (W[hi].e + next.s) / 2 : P.duration, W[hi].e + .05) };
}
// toolbar gunting mengambang di timeline
function cutToolsUI() {
  let box = $('#cutTools'); const s = R.cutSel;
  const bc = $('#bCut'); if (bc) { const armed = !!(s && !s.mute); bc.classList.toggle('armed', armed); $('#bCutTxt').textContent = armed ? 'Potong pilihan' : 'Potong'; }
  if (!box) { box = document.createElement('div'); box.id = 'cutTools'; box.className = 'cuttools'; $('#tlScroll').appendChild(box); }
  if (!s || $('#studio').hidden) { box.hidden = true; return; }
  const w = tl.getBoundingClientRect().width, D = P.duration || 1, x = s.a / D * w, x2 = s.b / D * w;
  const label = s.mute ? 'Bagian bisu' : s.kind === 'word' ? `${s.i1 - s.i0 + 1} kata · ${(s.b - s.a).toFixed(1)} dtk` : `${(s.b - s.a).toFixed(1)} dtk suara`;
  box.innerHTML = s.mute
    ? `<span>${label}</span><button type="button" data-ct="unmute">Hapus bisu</button><button type="button" data-ct="x" aria-label="Tutup">✕</button>`
    : `<span>${label}</span><button type="button" data-ct="cut" class="cut" title="Potong (Delete)">${SCISSORS} Potong</button><button type="button" data-ct="mute" title="Bisukan saja, gambar tetap jalan">${MUTE_ICON} Bisukan</button><button type="button" data-ct="x" aria-label="Batal">✕</button>`;
  box.hidden = false;
  const bw = box.offsetWidth, left = clamp((x + x2) / 2 - bw / 2, tlS.scrollLeft + 4, Math.max(tlS.scrollLeft + 4, tlS.scrollLeft + tlS.clientWidth - bw - 4));
  box.style.left = left + 'px'; box.style.top = (LANE_Y[3] - 32) + 'px';
  box.querySelector('[data-ct=x]').onclick = () => { R.cutSel = null; cutToolsUI(); drawTimeline(); };
  const c = box.querySelector('[data-ct=cut]'); if (c) c.onclick = doCut;
  const m = box.querySelector('[data-ct=mute]'); if (m) m.onclick = doMute;
  const u = box.querySelector('[data-ct=unmute]'); if (u) u.onclick = () => unMute(s.mute);
}

// ================= PREVIEW & TRANSPORT =================
const pv = $('#pv'), pctx = pv.getContext('2d'), vid = $('#vid');
function outDims(short) {
  let r; const a = P.aspect;
  if (a === '9:16') r = 9 / 16; else if (a === '1:1') r = 1; else if (a === '16:9') r = 16 / 9; else if (a === '4:5') r = 4 / 5;
  else r = R.srcW && R.srcH ? R.srcW / R.srcH : 9 / 16;
  let W, H; if (r < 1) { W = short; H = short / r; } else { H = short; W = short * r; }
  const ev = x => Math.max(2, Math.round(x / 2) * 2); return { W: ev(W), H: ev(H) };
}
function sizePreview() {
  if ($('#studio').hidden) return;
  const { W, H } = outDims(R.light ? 360 : 540); if (pv.width !== W || pv.height !== H) { pv.width = W; pv.height = H; }
  const m = $('#monitor').getBoundingClientRect(), k = Math.max(.05, Math.min((m.width - 28) / W, (m.height - 28) / H));
  pv.style.width = Math.floor(W * k) + 'px'; pv.style.height = Math.floor(H * k) + 'px';
  sizeTimeline(); requestDraw();
}
R.pos = 0; R.t0 = 0;
function now() { if (P.mode === 'talk') return outOf(vid.currentTime || 0); return R.playing && AC ? clamp(AC.currentTime - R.t0, 0, P.duration) : R.pos; }
async function play() {
  if (R.playing || !P.duration) return;
  await ensureAC(); await ensureLoop(P.audio.mood);
  if (now() >= P.duration - .05) seek(0);
  if (P.mode === 'talk') { try { await vid.play(); } catch { return toast('Video tidak bisa diputar di browser ini.'); } R.playing = true; vid.muted = !!inMute(now()); startAudio(now()); }
  else { R.playing = true; const at = startAudio(R.pos); R.t0 = at - R.pos; }
  $('#bPlay').textContent = '❚❚'; $('#bPlay').setAttribute('aria-label', 'Jeda'); loop();
}
function pause() {
  if (!R.playing) { stopAudio(); return; }
  if (P.mode === 'talk') vid.pause(); else R.pos = now();
  R.playing = false; stopAudio(); for (const [, m] of R.media) m.video?.pause();
  $('#bPlay').textContent = '▶'; $('#bPlay').setAttribute('aria-label', 'Putar'); requestDraw(); scheduleSave();
}
function seek(t) {
  t = clamp(t, 0, Math.max(0, P.duration - .01));
  if (P.mode === 'talk') vid.currentTime = srcOf(t); else { R.pos = t; if (R.playing && AC) R.t0 = AC.currentTime - t; }
  if (R.playing) restartAudio(); else requestDraw();
}
function restartAudio() { if (!R.playing) return; const t = now(); if (P.mode === 'product') { const at = startAudio(t); R.t0 = at - t; } else startAudio(t); }
vid.addEventListener('seeked', () => { if (!R.playing) requestDraw(); });
vid.addEventListener('loadeddata', () => requestDraw());
vid.addEventListener('ended', () => pause());
let raf = 0, drawQ = 0;
function loop() {
  if (R.playing && P.mode === 'talk') { const c = inCut(vid.currentTime); if (c) vid.currentTime = c.e; vid.muted = !!inMute(now()); if (now() >= P.duration - .02) { pause(); return; } }
  draw(); if (R.playing) { if (P.mode === 'product' && now() >= P.duration - .01) { pause(); R.pos = P.duration; draw(); return; } raf = requestAnimationFrame(loop); } }
function requestDraw() { if (R.playing || drawQ) return; drawQ = requestAnimationFrame(() => { drawQ = 0; draw(); }); }
function draw() {
  if ($('#studio').hidden) return;
  const t = now(), src = P.mode === 'talk' && vid.readyState >= 2 ? { img: vid, w: vid.videoWidth, h: vid.videoHeight } : null;
  let mask = null;
  if (src && segWanted()) {
    if (SEG.state === 'idle') segInit().then(requestDraw);
    if (SEG.state === 'ready') { if (R.playing || R.segT !== t) { mask = segment(src); R.segT = t; R.segMask = mask; } else mask = R.segMask; if (mask && !R.faceSet && !P.sceneNote) { const f = maskFace(mask); if (f) { P.face = f; R.faceSet = true; } } }
  }
  try { drawFrame(pctx, pv.width, pv.height, t, { src, mask, frame: previewFrame }, P); } catch (e) { console.error('draw', e); }
  releaseVids();
  $('#tc').innerHTML = `<b>${fmtT(t)}</b> / ${fmtT(P.duration)}`;
  drawTimeline();
}

// ================= TIMELINE =================
const tl = $('#tl'), tlS = $('#tlScroll'), LANE_Y = [22, 56, 90, 124, 158], LANE_H = 34;
function sizeTimeline() { const w = Math.max(200, tlS.clientWidth * R.tlZoom), dpr = devicePixelRatio || 1; tl.style.width = w + 'px'; tl.style.height = '206px'; if (tl.width !== Math.round(w * dpr)) { tl.width = Math.round(w * dpr); tl.height = Math.round(206 * dpr); } }
const peaksCache = new WeakMap();
function peaks(buf, n) { const c = peaksCache.get(buf); if (c && c.n === n) return c.p; const d = buf.getChannelData(0), step = Math.max(1, Math.floor(d.length / n)), p = new Float32Array(n); for (let i = 0; i < n; i++) { let m = 0; for (let j = i * step, e = Math.min(d.length, j + step); j < e; j += 4) m = Math.max(m, Math.abs(d[j])); p[i] = m; } peaksCache.set(buf, { n, p }); return p; }
function drawTimeline() {
  if ($('#studio').hidden || !tl.width) return;
  const dpr = devicePixelRatio || 1, w = tl.width / dpr, h = 206, x = tl.getContext('2d'); x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, w, h);
  const cs = getComputedStyle(document.documentElement), col = n => cs.getPropertyValue(n).trim();
  const D = P.duration || 1, px = t => t / D * w;
  x.fillStyle = col('--paper2'); x.fillRect(0, 0, w, 22);
  x.strokeStyle = col('--line'); x.lineWidth = 1; for (const y of LANE_Y) { x.beginPath(); x.moveTo(0, y + .5); x.lineTo(w, y + .5); x.stroke(); }
  const step = [1, 2, 5, 10, 15, 30, 60].find(s => px(s) > 56) || 60; x.fillStyle = col('--mute'); x.font = '500 10px "JetBrains Mono", monospace';
  for (let s = 0; s <= D; s += step) { x.fillRect(px(s), 14, 1, 8); x.fillText(`${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`, px(s) + 3, 11); }
  for (const el of P.els) {
    const lane = laneOf(el), y = LANE_Y[lane] + 5, ex = px(el.start), ew = Math.max(4, px(el.end) - ex), on = el.id === R.sel;
    x.globalAlpha = elHidden(el) ? .25 : on ? 1 : .85; x.fillStyle = TYPES[el.type].color; rrect(x, ex, y, ew, LANE_H - 10, 5); x.fill();
    if (on) { x.strokeStyle = col('--ink'); x.lineWidth = 2; x.stroke(); x.fillStyle = 'rgba(255,255,255,.85)'; x.fillRect(ex + 2, y + 6, 2, LANE_H - 22); x.fillRect(ex + ew - 4, y + 6, 2, LANE_H - 22); }
    x.globalAlpha = 1; if (ew > 22) { x.save(); x.beginPath(); x.rect(ex + 6, y, ew - 10, LANE_H - 10); x.clip(); x.fillStyle = '#fff'; x.font = '650 11px "Plus Jakarta Sans", sans-serif'; x.fillText(`${TYPES[el.type].icon} ${elDesc(el) || elLabel(el)}`, ex + 7, y + 16); x.restore(); }
  }
  const wy = LANE_Y[3] + 9; x.fillStyle = col('--line2');
  P.words.forEach((wd, i) => { x.fillStyle = P.keywords.includes(i) ? col('--brand') : col('--line2'); x.fillRect(px(wd.s), wy, Math.max(1, px(wd.e) - px(wd.s) - 1), 16); });
  if (!P.words.length) { x.fillStyle = col('--mute'); x.font = '500 11px "Plus Jakarta Sans", sans-serif'; x.fillText('Belum ada transkrip', 8, wy + 12); }
  const VB = voiceOut(true);
  for (const m of P.mutes || []) { x.fillStyle = 'rgba(194,65,45,.16)'; x.fillRect(px(m.s), LANE_Y[3] + 2, Math.max(2, px(m.e) - px(m.s)), LANE_H * 2 - 4); }
  if (VB) { const n = Math.min(4000, Math.floor(px(Math.min(D, VB.duration)))), pk = peaks(VB, Math.max(10, n)), mid = LANE_Y[4] + 17; x.fillStyle = col('--sky'); for (let i = 0; i < pk.length; i++) { const hh = Math.max(1, pk[i] * 26); x.fillRect(i, mid - hh / 2, 1, hh); } }
  for (const c of cutsSorted()) { const cx = px(outOf(c.s)); x.fillStyle = '#C2412D'; x.fillRect(cx - 1, LANE_Y[3] + 2, 2, LANE_H * 2 - 4); x.beginPath(); x.moveTo(cx - 4, LANE_Y[3] + 2); x.lineTo(cx + 4, LANE_Y[3] + 2); x.lineTo(cx, LANE_Y[3] + 8); x.fill(); }
  if (R.cutSel) { const a = px(R.cutSel.a), b = px(R.cutSel.b); x.fillStyle = 'rgba(194,65,45,.22)'; x.fillRect(a, LANE_Y[3], b - a, LANE_H * 2); x.strokeStyle = '#C2412D'; x.lineWidth = 1.5; x.setLineDash([4, 3]); x.strokeRect(a + .5, LANE_Y[3] + .5, b - a - 1, LANE_H * 2 - 1); x.setLineDash([]); }
  const ph = px(now()); x.fillStyle = '#F2A900'; x.fillRect(ph - 1, 0, 2, h); x.beginPath(); x.moveTo(ph - 6, 0); x.lineTo(ph + 6, 0); x.lineTo(ph, 8); x.fill();
  if (R.playing && R.tlZoom > 1) { const sl = tlS.scrollLeft, vw = tlS.clientWidth; if (ph < sl + 20 || ph > sl + vw - 40) tlS.scrollLeft = ph - vw * .3; }
}
let TD = null;
function tlHit(e) {
  const r = tl.getBoundingClientRect(), xx = e.clientX - r.left, y = e.clientY - r.top, D = P.duration || 1, t = clamp(xx / r.width * D, 0, D);
  if (y < 22) return { t, ruler: true };
  const lane = LANE_Y.findIndex(ly => y >= ly && y < ly + LANE_H);
  if (lane === 3) { const wi = P.words.findIndex(w => t >= w.s - .04 && t <= w.e + .04); return { t, lane, wi }; }
  if (lane === 4) { const m = (P.mutes || []).find(m => t >= m.s && t < m.e); return { t, lane, mute: m }; }
  if (lane < 0 || lane > 2) return { t };
  const cands = P.els.filter(el => laneOf(el) === lane && xx >= el.start / D * r.width - 6 && xx <= el.end / D * r.width + 6).sort((a, b) => (a.id === R.sel ? -1 : 0) - (b.id === R.sel ? -1 : 0));
  const el = cands[0]; if (!el) return { t, lane };
  const exL = el.start / D * r.width, exR = el.end / D * r.width, edge = xx - exL < 7 ? 'l' : exR - xx < 7 ? 'r' : 'm';
  return { t, el, edge, lane };
}
const clearCutSel = () => { if (R.cutSel) { R.cutSel = null; cutToolsUI(); } };
tl.addEventListener('pointerdown', e => {
  if (!P.duration) return; const h = tlHit(e); tl.setPointerCapture(e.pointerId);
  if (h.lane === 3 && h.wi >= 0) { const anc = e.shiftKey && R.cutSel?.kind === 'word' ? (R.cutSel.anchor ?? R.cutSel.i0) : h.wi; selectWords(anc, h.wi); R.cutSel.anchor = anc; if (!R.playing) seek(P.words[h.wi].s); TD = { words: true, anchor: R.cutSel.anchor }; drawTimeline(); cutToolsUI(); return; }
  if (h.lane === 4) { TD = { range: true, a: h.t, mute: h.mute, moved: false }; return; }
  clearCutSel();
  if (h.el) { TD = { el: h.el, edge: h.edge, t0: h.t, s: h.el.start, e: h.el.end, moved: false }; if (R.sel !== h.el.id) selectEl(h.el.id); }
  else { TD = { scrub: true }; seek(h.t); }
});
tl.addEventListener('pointermove', e => {
  const h = tlHit(e);
  if (!TD) { tl.style.cursor = h.lane === 3 && h.wi >= 0 ? 'pointer' : h.lane === 4 ? 'text' : h.el ? (h.edge === 'm' ? 'grab' : 'ew-resize') : h.ruler ? 'col-resize' : 'default'; return; }
  if (TD.scrub) { seek(h.t); return; }
  if (TD.words) { if (h.lane === 3 && h.wi >= 0) { selectWords(TD.anchor, h.wi); R.cutSel.anchor = TD.anchor; drawTimeline(); cutToolsUI(); } return; }
  if (TD.range) { if (Math.abs(h.t - TD.a) > (P.duration || 1) * .004) TD.moved = true; if (TD.moved) { R.cutSel = { kind: 'audio', a: Math.min(TD.a, h.t), b: Math.max(TD.a, h.t) }; drawTimeline(); cutToolsUI(); } return; }
  const el = TD.el, dt = h.t - TD.t0, len = TD.e - TD.s, D = P.duration, snap = v => { const ph = now(); return Math.abs(v - ph) < D * .006 ? ph : v; };
  if (Math.abs(dt) > .02) TD.moved = true; if (!TD.moved) return;
  if (TD.edge === 'm') { el.start = clamp(snap(TD.s + dt), 0, D - len); el.end = el.start + len; }
  else if (TD.edge === 'l') el.start = clamp(snap(TD.s + dt), 0, TD.e - .3);
  else el.end = clamp(snap(TD.e + dt), TD.s + .3, D);
  drawTimeline(); requestDraw();
});
tl.addEventListener('pointerup', () => {
  if (TD?.range && !TD.moved) { if (TD.mute) { R.cutSel = { a: TD.mute.s, b: TD.mute.e, mute: TD.mute }; drawTimeline(); cutToolsUI(); } else { clearCutSel(); seek(TD.a); drawTimeline(); } }
  else if (TD?.range && R.cutSel && R.cutSel.b - R.cutSel.a < .08) clearCutSel();
  if (TD && TD.el && TD.moved) changed(R.panel === 'el');
  TD = null;
});
tl.addEventListener('dblclick', e => { const h = tlHit(e); if (h.el) { selectEl(h.el.id); seek(h.el.start); } });
tlS.addEventListener('scroll', () => { if (R.cutSel) cutToolsUI(); });

// ================= RENDER =================
let MB = null;
async function loadMB() { if (!MB) MB = await import('https://cdn.jsdelivr.net/npm/mediabunny@1.59.1/dist/bundles/mediabunny.min.mjs'); return MB; }
async function loadFonts() { const fams = new Set([P.look.fontD, P.look.fontB, P.look.capFont, P.cap.font, 'Plus Jakarta Sans', 'Playfair Display'].filter(Boolean)); await Promise.all([...fams].flatMap(f => [400, 500, 600, 700, 800, 900].map(w => document.fonts.load(`${w} 40px "${f}"`).catch(() => {})))); }
const RF = new Map();
function renderFrame(id, lt) { const a = assetById(id); if (!a) return null; if (a.kind === 'image') { const m = R.media.get(id); return m ? { img: m.img, w: a.w, h: a.h } : null; } return RF.get(id) || null; }
async function renderVideo({ short, fps, signal, onProgress }) {
  if (!('VideoEncoder' in window)) return recordRealtime({ short, fps, signal, onProgress });
  onProgress(0, 'Memuat huruf & encoder…'); await loadFonts(); const M = await loadMB();
  const { W, H } = outDims(short), dur = P.duration, n = Math.max(1, Math.floor(dur * fps));
  const readers = new Map(), usedV = new Set(P.els.filter(e => e.type === 'media' && assetById(e.asset)?.kind === 'video').map(e => e.asset));
  let input = null, out = null;
  try {
    for (const id of usedV) { try { readers.set(id, await new VReader(M, R.media.get(id).blob).init()); } catch (e) { console.warn('aset video', e); } }
    let mainIter = null, sw = 0, sh = 0;
    if (P.mode === 'talk') {
      input = new M.Input({ source: new M.BlobSource(R.file), formats: M.ALL_FORMATS });
      const vt = await input.getPrimaryVideoTrack(); if (!vt) throw new Error('Track video tidak ditemukan.');
      if (!(await vt.canDecode())) throw new Error('Codec video ini tidak bisa dibaca browser. Konversi dulu ke MP4 (H.264).');
      sw = vt.displayWidth; sh = vt.displayHeight; const k = Math.min(1, Math.max(W / sw, H / sh) * 1.35);
      const sink = new M.CanvasSink(vt, { width: Math.max(2, Math.round(sw * k / 2) * 2), height: Math.max(2, Math.round(sh * k / 2) * 2), fit: 'fill', poolSize: 3 });
      const t0 = await vt.getFirstTimestamp(); mainIter = sink.canvasesAtTimestamps((function* () { for (let i = 0; i < n; i++) yield t0 + srcOf(i / fps); })())[Symbol.asyncIterator]();
    }
    const vcodec = await M.getFirstEncodableVideoCodec(['avc', 'vp9', 'av1', 'vp8'], { width: W, height: H }); if (!vcodec) throw new Error('Browser tidak bisa meng-encode video di resolusi ini. Coba 720p.');
    const mp4 = vcodec === 'avc';
    out = new M.Output({ format: mp4 ? new M.Mp4OutputFormat({ fastStart: 'in-memory' }) : new M.WebMOutputFormat(), target: new M.BufferTarget() });
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const ctx = cv.getContext('2d', { alpha: false });
    const vs = new M.CanvasSource(cv, { codec: vcodec, bitrate: M.QUALITY_HIGH, keyFrameInterval: 2 }); out.addVideoTrack(vs, { frameRate: fps });
    onProgress(0, 'Menyiapkan audio (suara, musik, efek)…'); const mix = await buildMix(); let as = null;
    if (mix) { const ac = await M.getFirstEncodableAudioCodec(mp4 ? ['aac', 'opus'] : ['opus', 'vorbis'], { numberOfChannels: 2, sampleRate: 48000 }); if (ac) { as = new M.AudioBufferSource({ codec: ac, bitrate: M.QUALITY_HIGH }); out.addAudioTrack(as); } }
    const seg = segWanted() ? await segInit() : false;
    await out.start(); if (as) { await as.add(mix); as.close(); }
    let last = null; const tS = performance.now();
    for (let i = 0; i < n; i++) {
      if (signal.aborted) throw new DOMException('Dibatalkan', 'AbortError');
      const t = i / fps;
      if (mainIter) { const r = await mainIter.next(); if (!r.done && r.value) last = r.value.canvas; }
      RF.clear();
      for (const el of P.els) if (el.type === 'media' && t >= el.start && t < el.end && readers.has(el.asset)) RF.set(el.asset, await readers.get(el.asset).frameAt(t - el.start));
      const src = last ? { img: last, w: last.width, h: last.height } : null;
      const mask = seg && src ? segment(src) : null;
      drawFrame(ctx, W, H, t, { src, mask, frame: renderFrame }, P);
      await vs.add(t, 1 / fps);
      if (i % 5 === 0 || i === n - 1) { const el = (performance.now() - tS) / 1000, eta = el / (i + 1) * (n - i - 1); onProgress((i + 1) / n, `Merender frame ${i + 1}/${n} · sisa ±${eta < 60 ? Math.ceil(eta) + ' dtk' : Math.ceil(eta / 60) + ' mnt'}`); }
    }
    vs.close(); onProgress(1, 'Menyusun file…'); await out.finalize();
    return { blob: new Blob([out.target.buffer], { type: mp4 ? 'video/mp4' : 'video/webm' }), ext: mp4 ? 'mp4' : 'webm', W, H };
  } catch (e) { try { await out?.cancel(); } catch {} throw e; }
  finally { try { input?.dispose(); } catch {} for (const [, r] of readers) r.dispose(); RF.clear(); }
}
// cadangan untuk browser tanpa WebCodecs: rekam real-time
async function recordRealtime({ short, fps, signal, onProgress }) {
  if (!window.MediaRecorder) throw new Error('Browser ini tidak bisa merender video. Pakai Chrome atau Edge terbaru.');
  onProgress(0, 'Browser ini merender secara real-time. Biarkan tab tetap terbuka.'); await loadFonts();
  const { W, H } = outDims(Math.min(short, 720)), cv = document.createElement('canvas'); cv.width = W; cv.height = H; const ctx = cv.getContext('2d');
  const stream = cv.captureStream(fps), mix = await buildMix(); let ac = null, srcN = null;
  if (mix) { ac = new AudioContext(); const dest = ac.createMediaStreamDestination(); srcN = ac.createBufferSource(); srcN.buffer = mix; srcN.connect(dest); stream.addTrack(dest.stream.getAudioTracks()[0]); }
  const mime = ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm'].find(m => MediaRecorder.isTypeSupported(m)); if (!mime) throw new Error('Browser ini tidak bisa merekam video.');
  const rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 8e6 }), chunks = []; rec.ondataavailable = e => e.data.size && chunks.push(e.data);
  const done = new Promise(r => rec.onstop = r);
  pause(); R.recording = true; const v = vid, wasMuted = v.muted;
  try {
    if (P.mode === 'talk') { v.muted = true; v.currentTime = 0; await new Promise(r => { v.onseeked = r; }); }
    rec.start(250); const t0 = performance.now(); if (srcN) srcN.start(); if (P.mode === 'talk') await v.play();
    await new Promise((res, rej) => {
      const tick = () => {
        if (signal.aborted) return rej(new DOMException('Dibatalkan', 'AbortError'));
        if (P.mode === 'talk') { const c = inCut(v.currentTime); if (c) v.currentTime = c.e; }
        const t = P.mode === 'talk' ? outOf(v.currentTime) : (performance.now() - t0) / 1000;
        const src = P.mode === 'talk' && v.readyState >= 2 ? { img: v, w: v.videoWidth, h: v.videoHeight } : null;
        drawFrame(ctx, W, H, t, { src, mask: null, frame: previewFrame }, P); releaseVids();
        onProgress(t / P.duration, `Merekam ${fmtT(t)} / ${fmtT(P.duration)}`);
        if (t >= P.duration - .02 || (P.mode === 'talk' && v.ended)) return res(); requestAnimationFrame(tick);
      }; tick();
    });
  } finally { R.recording = false; v.pause(); v.muted = wasMuted; try { srcN?.stop(); } catch {} if (rec.state !== 'inactive') rec.stop(); }
  await done; ac?.close(); const mp4 = mime.startsWith('video/mp4');
  return { blob: new Blob(chunks, { type: mp4 ? 'video/mp4' : 'video/webm' }), ext: mp4 ? 'mp4' : 'webm', W, H };
}
let rAbort = null, rUrl = '';
function openRender() {
  if (!P.duration) return; pause();
  $('#rOpts').hidden = false; $('#rProg').hidden = true; $('#rDone').hidden = true; $('#rDl').hidden = true; $('#rStart').hidden = false; $('#rClose').textContent = 'Tutup';
  $('#rMobile').hidden = !isMobile; if (isMobile || R.light) $('#rRes').value = '720';
  $('#rNote').textContent = 'VideoEncoder' in window ? 'Render berjalan di perangkat ini, lebih cepat dari durasi video di laptop modern. Biarkan tab tetap terbuka.' : 'Browser ini merender secara real-time (selama durasi video). Untuk hasil lebih cepat pakai Chrome atau Edge.';
  $('#renderModal').hidden = false; $('#rStart').focus();
}
$('#rStart').addEventListener('click', async () => {
  rAbort = new AbortController(); $('#rOpts').hidden = true; $('#rProg').hidden = false; $('#rStart').hidden = true; $('#rClose').textContent = 'Batalkan';
  const setP = (p, txt) => { $('#rBar').style.width = (clamp(p, 0, 1) * 100).toFixed(1) + '%'; if (txt) $('#rTxt').textContent = txt; };
  try {
    const r = await renderVideo({ short: +$('#rRes').value, fps: +$('#rFps').value, signal: rAbort.signal, onProgress: setP });
    if (rUrl) URL.revokeObjectURL(rUrl); rUrl = URL.createObjectURL(r.blob);
    $('#rVid').src = rUrl; $('#rDl').href = rUrl; $('#rDl').download = (P.name || 'video').replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-') + '-motion.' + r.ext;
    $('#rInfo').textContent = `${r.W}×${r.H} · ${(r.blob.size / 1048576).toFixed(1)} MB · ${r.ext.toUpperCase()}`;
    $('#rProg').hidden = true; $('#rDone').hidden = false; $('#rDl').hidden = false; $('#rClose').textContent = 'Tutup'; toast('Render selesai.');
  } catch (e) {
    if (e.name === 'AbortError') { toast('Render dibatalkan.'); $('#renderModal').hidden = true; }
    else { console.error(e); setP(0, 'Gagal: ' + e.message); $('#rClose').textContent = 'Tutup'; }
  } finally { rAbort = null; }
});
$('#rClose').addEventListener('click', () => { if (rAbort) return rAbort.abort(); $('#renderModal').hidden = true; $('#rVid').pause(); });

// ================= INISIALISASI =================
(function init() {
  const th = store.get('theme', ''); if (th) document.documentElement.dataset.theme = th;
  $('#bTheme').onclick = () => { const n = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = n; store.set('theme', n); drawTimeline(); };
  // isi pilihan halaman awal
  $('#hNiche').innerHTML = opts(Object.entries(NICHES).map(([k, n]) => [k, n.name]), 'auto');
  $('#hPreset').innerHTML = opts([['auto', 'Otomatis (AI pilih)'], ...Object.entries(PRESETS).map(([k, p]) => [k, p.name])], 'auto');
  $('#hMusic').innerHTML = opts([['auto', 'Otomatis (AI pilih)'], ...OPT.mood], 'auto');
  $('#pVoice').innerHTML = opts(VOICES, 'Kore');
  $$('.choice').forEach(b => b.onclick = () => setHomeMode(b.dataset.mode));
  setHomeMode('talk'); keyUI(); if (R.apiKey) verifyKey();
  renderGallery(); $('#hAspect').addEventListener('change', renderGallery); $('#hNiche').addEventListener('change', renderGallery);
  const realUI = () => { const on = $('#hReal').checked; $('.realbox').classList.toggle('off', !on); $('#hRealKind').disabled = $('#hRealCount').disabled = !on; $('#hRealNote').textContent = realNote($('#hRealKind').value); };
  if (CANVAS) { const o = $('#hRealKind [value=video]'); o.disabled = true; o.textContent = 'Klip video realistis (Veo) · tidak tersedia di Canvas'; $('#hRealKind').value = 'image'; }
  $('#hReal').onchange = realUI; $('#hRealKind').onchange = realUI; realUI();
  $('#hKeySave').onclick = async () => { setKey($('#hKey').value); if (!R.apiKey) return toast('API key dikosongkan.'); const st = await verifyKey(); toast(st?.ok ? 'API key disimpan dan aktif.' : 'API key disimpan, tapi ditolak Google. Lihat keterangan di bawah kolom key.', 5000); };
  const dropZone = (el, onFiles, pick) => {
    el.addEventListener('click', pick); el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
    el.addEventListener('dragover', e => { e.preventDefault(); el.classList.add('over'); }); el.addEventListener('dragleave', () => el.classList.remove('over'));
    el.addEventListener('drop', e => { e.preventDefault(); el.classList.remove('over'); onFiles([...e.dataTransfer.files]); });
  };
  dropZone($('#assetsDrop'), addHomeFiles, () => { R.assetTarget = 'home'; $('#fAssets').click(); });
  dropZone($('#videoDrop'), fs => startTalk(fs[0]), () => $('#fVideo').click());
  $('#hGoProd').onclick = startProduct;
  // input berkas
  $('#fVideo').onchange = e => { const f = e.target.files[0]; e.target.value = ''; startTalk(f); };
  $('#fAssets').onchange = async e => {
    const fs = [...e.target.files]; e.target.value = '';
    if (R.assetTarget !== 'studio' || $('#studio').hidden) return addHomeFiles(fs);
    const added = []; for (const f of fs) { try { added.push(await addAsset(f, f.name)); } catch (err) { toast(err.message); } }
    if (added.length) { R.assetSel = added[0].id; changed(true); toast(`${added.length} aset ditambahkan.`); if (hasAI()) aiDescribeAssets(added).then(() => renderPanel()).catch(() => {}); }
  };
  $('#fRef').onchange = e => { const fs = [...e.target.files].slice(0, 4); e.target.value = ''; if (fs.length) styleFromAI(fs); };
  $('#fShot').onchange = async e => { for (const f of [...e.target.files].slice(0, 3)) { const u = URL.createObjectURL(f); try { const i = await loadImg(u); R.attach.push(canvasJpeg(i, i.naturalWidth, i.naturalHeight, 768)); } catch {} URL.revokeObjectURL(u); } e.target.value = ''; R.attach = R.attach.slice(-4); renderPanel(); };
  $('#fVO').onchange = async e => {
    const f = e.target.files[0]; e.target.value = ''; if (!f) return;
    try { const buf = await decodeAudio(f); R.voUpload = buf; R.voiceBlob = f; dbPutBlob('voice', f); P.hasVoice = true; toast('Rekaman diterima.'); }
    catch { return toast('Audio tidak bisa dibaca. Coba MP3 atau WAV.'); }
    if (hasAI()) runProduct(); else { R.voice = R.voUpload; P.duration = +(R.voice.duration + 1.4).toFixed(2); P.words = estimateWords(P.script, R.voice, P.duration); P.els = tidyEls(P.els, P.duration); changed(true); }
  };
  $('#fJson').onchange = async e => { const f = e.target.files[0]; e.target.value = ''; if (!f) return; try { const raw = JSON.parse(await f.text()); P = mergeProject({ ...raw, mode: P.mode, duration: P.duration, assets: P.assets }); afterHistory(); commit(true); toast('Rancangan diimpor.'); } catch { toast('Berkas JSON tidak valid.'); } };
  // bilah atas & transport
  $('#projName').oninput = e => { P.name = e.target.value; commit(); };
  $('#bUndo').onclick = undo; $('#bRedo').onclick = redo;
  $('#bRender').onclick = openRender;
  $('#bHome').onclick = async () => {
    pause(); await saveDraft(); $('#studio').hidden = true; $('#home').hidden = false;
    for (const id of ['#projBar', '#bUndo', '#bRedo', '#bHome', '#bRender']) $(id).hidden = true; $('#barGrow').hidden = false;
    renderDrafts(); runDemo(); renderGallery(); scrollTo(0, 0);
  };
  $('#bHelp').onclick = () => { $('#helpModal').hidden = false; $('#helpModal [data-close]').focus(); };
  $$('[data-close]').forEach(b => b.onclick = () => b.closest('.modal').hidden = true);
  $('#promptCopy').onclick = async () => { try { await navigator.clipboard.writeText($('#promptTxt').value); toast('Prompt disalin.'); } catch { $('#promptTxt').select(); toast('Tekan Ctrl+C untuk menyalin.'); } };
  $('#bPlay').onclick = () => R.playing ? pause() : play();
  $('#bBack').onclick = () => seek(0);
  $('#bCut').onclick = () => {
    if (R.cutSel && !R.cutSel.mute) return doCut();
    if (!P.words.length) { toast('Seret di jalur Suara pada timeline untuk memilih bagian yang mau dipotong, lalu klik Potong.', 5000); return; }
    const t = now(); let i = P.words.findIndex(w => t >= w.s - .05 && t <= w.e + .05);
    if (i < 0) i = P.words.reduce((b, w, k) => Math.abs((w.s + w.e) / 2 - t) < Math.abs((P.words[b].s + P.words[b].e) / 2 - t) ? k : b, 0);
    pause(); selectWords(i, i); R.cutSel.anchor = i; drawTimeline(); cutToolsUI();
    toast(`Kata "${P.words[i].w}" terpilih. Klik Potong sekali lagi untuk membuangnya. Shift+klik kata lain di timeline untuk memilih lebih banyak.`, 5000);
  };
  $('#bAdd').onclick = () => { openPanel('el'); };
  $('#tlZoom').oninput = e => { R.tlZoom = +e.target.value; sizeTimeline(); drawTimeline(); cutToolsUI(); };
  addEventListener('resize', () => sizePreview());
  document.addEventListener('keydown', e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    if (e.key === 'Escape' && R.cutSel && $('#renderModal').hidden) { R.cutSel = null; cutToolsUI(); drawTimeline(); return; }
    if (e.key === 'Escape') { $$('.modal').forEach(m => { if (!m.hidden && m.id !== 'renderModal') m.hidden = true; }); return; }
    if ($('#studio').hidden || typing) return;
    if (e.key === ' ' && !/BUTTON/.test(document.activeElement?.tagName)) { e.preventDefault(); R.playing ? pause() : play(); }
    else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo(); }
    else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); }
    else if ((e.key === 'Delete' || e.key === 'Backspace') && R.cutSel && !R.cutSel.mute) { e.preventDefault(); doCut(); }
    else if (e.key === 'Escape' && R.cutSel) { R.cutSel = null; cutToolsUI(); drawTimeline(); }
    else if ((e.key === 'Delete' || e.key === 'Backspace') && R.sel) { e.preventDefault(); deleteSel(); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); seek(now() + (e.key === 'ArrowLeft' ? -1 : 1) * (e.shiftKey ? 5 : 1)); }
  });
  addEventListener('beforeunload', () => { if (R.id && !$('#studio').hidden) saveDraft(); });
  renderDrafts(); runDemo();
  window.__cms = { get P() { return P; }, R, tidyEls, guardEls, normEl, drawFrame, renderVideo, startTalk, startProduct, openDraft, now, seek, play, pause, selectEl, addEl, SEG };
})();
