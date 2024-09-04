import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as t,w as i,a as s,b as e,e as h,r as n,o as k}from"./app-BXrx0rrb.js";const c={},g=h('<h1 id="配置-classisland-插件开发环境" tabindex="-1"><a class="header-anchor" href="#配置-classisland-插件开发环境"><span>配置 ClassIsland <strong>插件</strong>开发环境</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本文档待补充。</p></div><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境"><span>开发环境</span></a></h2><p><strong>首先确保您的系统满足以下要求：</strong></p><ul><li>Windows 10 1803 及以上的操作系统，x86_64 架构</li></ul><p>要在本地进行开发，<strong>您需要安装以下负载和工具</strong>：</p><ul><li><a href="https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0" target="_blank" rel="noopener noreferrer">.NET 8.0 SDK</a></li><li><a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer">Visual Studio 2022</a>，包括【.NET 桌面开发】工作负载</li><li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></li></ul><h2 id="克隆并构建-classisland" tabindex="-1"><a class="header-anchor" href="#克隆并构建-classisland"><span>克隆并构建 ClassIsland</span></a></h2><p>开发插件的过程中需要使用 ClassIsland 源码以构建 ClassIsland 本体的可执行文件，以用于运行和调试插件。</p><div class="hint-container note"><p class="hint-container-title">为什么不使用 Releases 中发布的可执行文件</p><p>Release 版本的构建无法使用热重载（包括 XAML 热重载）功能，调试起来很麻烦。</p></div><p>以下是克隆仓库的命令行：</p>',11),u=s("div",{class:"language-shell line-numbers-mode","data-highlighter":"shiki","data-ext":"shell","data-title":"shell",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"git"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," https://github.com/ClassIsland/ClassIsland.git")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-shell line-numbers-mode","data-highlighter":"shiki","data-ext":"shell","data-title":"shell",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"git"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," git@github.com:ClassIsland/ClassIsland.git")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),b=s("div",{class:"language-shell line-numbers-mode","data-highlighter":"shiki","data-ext":"shell","data-title":"shell",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"gh"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," repo"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," clone"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," ClassIsland/ClassIsland")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),A=h(`<p>克隆完成后，运行以下命令进入 ClassIsland 源代码目录。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ClassIsland</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>目前插件功能还未下放到 <code>master</code> 分支上，需要签出开发分支 <code>dev</code>。如果您想签出到特定版本上，请使用对应版本的标签名（如 <code>1.4.3.0</code>）：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 签出到 dev 分支</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 如果要签出到某个版本上，请使用标签名：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># git checkout 1.4.3.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 Powershell 运行以下命令构建 ClassIsland：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">dotnet build </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">c Debug </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">p:Version</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(git describe </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">tags </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">abbrev</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这样就获得了 ClassIsland 的 Debug 构建。构建默认输出在 <code>（项目文件夹\\ClassIsland\\bin\\Debug\\net8.0-windows）</code>下。</p><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新"><span>更新</span></a></h2><p>如果 ClassIsland 发布了新版本，或您更新了插件 SDK，在这种情况下需要更新 ClassIsland 仓库。要更新仓库，请先拉取，然后重新进行构建。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dotnet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dotnet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Debug</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始开发插件" tabindex="-1"><a class="header-anchor" href="#开始开发插件"><span>开始开发插件</span></a></h2>`,11);function v(y,F){const d=n("Tabs"),r=n("RouteLink");return k(),p("div",null,[g,t(d,{id:"55",data:[{id:"HTTP"},{id:"SSH"},{id:"GitHub CLI"}],"tab-id":"clonemethod"},{title0:i(({value:a,isActive:l})=>[e("HTTP")]),title1:i(({value:a,isActive:l})=>[e("SSH")]),title2:i(({value:a,isActive:l})=>[e("GitHub CLI")]),tab0:i(({value:a,isActive:l})=>[u]),tab1:i(({value:a,isActive:l})=>[m]),tab2:i(({value:a,isActive:l})=>[b]),_:1}),A,s("p",null,[e("一切准备工作就绪后，继续阅读文章"),t(r,{to:"/dev/plugins/create-project.html"},{default:i(()=>[e("开始编写插件")]),_:1}),e("，开始您的插件开发之旅吧！")])])}const _=o(c,[["render",v],["__file","devlopment-plugins.html.vue"]]),B=JSON.parse('{"path":"/dev/get-started/devlopment-plugins.html","title":"配置 ClassIsland 插件开发环境","lang":"zh-CN","frontmatter":{"description":"配置 ClassIsland 插件开发环境 注意 本文档待补充。 开发环境 首先确保您的系统满足以下要求： Windows 10 1803 及以上的操作系统，x86_64 架构 要在本地进行开发，您需要安装以下负载和工具： .NET 8.0 SDK Visual Studio 2022，包括【.NET 桌面开发】工作负载 Git 克隆并构建 Class...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"http://beta.docs.classisland.tech/en-us/dev/get-started/devlopment-plugins.html"}],["meta",{"property":"og:url","content":"http://beta.docs.classisland.tech/dev/get-started/devlopment-plugins.html"}],["meta",{"property":"og:site_name","content":"ClassIsland文档"}],["meta",{"property":"og:title","content":"配置 ClassIsland 插件开发环境"}],["meta",{"property":"og:description","content":"配置 ClassIsland 插件开发环境 注意 本文档待补充。 开发环境 首先确保您的系统满足以下要求： Windows 10 1803 及以上的操作系统，x86_64 架构 要在本地进行开发，您需要安装以下负载和工具： .NET 8.0 SDK Visual Studio 2022，包括【.NET 桌面开发】工作负载 Git 克隆并构建 Class..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-29T07:25:46.000Z"}],["meta",{"property":"article:author","content":"ClassIsland 社区"}],["meta",{"property":"article:modified_time","content":"2024-08-29T07:25:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置 ClassIsland 插件开发环境\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T07:25:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland 社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"开发环境","slug":"开发环境","link":"#开发环境","children":[]},{"level":2,"title":"克隆并构建 ClassIsland","slug":"克隆并构建-classisland","link":"#克隆并构建-classisland","children":[]},{"level":2,"title":"更新","slug":"更新","link":"#更新","children":[]},{"level":2,"title":"开始开发插件","slug":"开始开发插件","link":"#开始开发插件","children":[]}],"git":{"createdTime":1719066151000,"updatedTime":1724916346000,"contributors":[{"name":"hello8693","email":"1320998105@qq.com","commits":1}]},"readingTime":{"minutes":1.57,"words":470},"filePathRelative":"dev/get-started/devlopment-plugins.md","localizedDate":"2024年6月22日","autoDesc":true}');export{_ as comp,B as data};