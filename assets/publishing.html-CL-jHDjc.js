import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,d as n,w as e,a as s,e as d,b as i,r as o,o as p}from"./app-Dpf_P9fn.js";const c="/classisland-docs-next/assets/1722514478099-CToO7BR_.png",k="/classisland-docs-next/assets/1722514515956-BQRLR5B-.png",g={},u=s("h1",{id:"发布插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#发布插件"},[s("span",null,"发布插件")])],-1),m=s("p",null,"您可以将插件打包、并通过上传到插件插件仓库或私下分享等方式分发您的插件。",-1),b=s("h2",{id:"打包插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#打包插件"},[s("span",null,"打包插件")])],-1),A=s("p",null,[i("在 Powershell Core 中使用以下命令将插件输出/发布目录打包到一个扩展名为"),s("code",null,".cipx"),i("的"),s("code",null,"zip"),i("压缩文件中。")],-1),y=s("div",{class:"language-powershell line-numbers-mode","data-highlighter":"shiki","data-ext":"powershell","data-title":"powershell",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"Compress-Archive"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," -"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"Path "),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"（你的插件编译输出目录，如 E:\\xxx\\MyPlugin\\bin\\Release\\net8.0-windows\\）"'),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}}," -"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"DestinationPath ."),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"/"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"myplugin.cipx")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),v=s("ol",null,[s("li",null,[s("p",null,"将您的插件加载到 ClassIsland 中。")]),s("li",null,[s("p",null,[i("在 ClassIsland 中打开"),s("a",{href:"classisland://app/settings/classisland.plugins",target:"_blank",rel:"noopener noreferrer"},"【应用设置】->【插件】"),i("。")])]),s("li",null,[s("p",null,"选择要打包的插件，点击插件详细界面的【更多选项…（右上角三个点）】，点击【打包插件…】"),s("figure",null,[s("img",{src:c,alt:"1722514478099",tabindex:"0",loading:"lazy"}),s("figcaption",null,"1722514478099")]),s("figure",null,[s("img",{src:k,alt:"1722514515956",tabindex:"0",loading:"lazy"}),s("figcaption",null,"1722514515956")])]),s("li",null,[s("p",null,"选择保存插件包的位置。")]),s("li",null,[s("p",null,"打包完成。")])],-1),_=d(`<h2 id="上架到插件市场" tabindex="-1"><a class="header-anchor" href="#上架到插件市场"><span>上架到插件市场</span></a></h2><div class="hint-container info"><p class="hint-container-title">Info</p><p>这里的插件市场指应用内置的插件源。</p></div><p><strong>上架插件市场的插件必须满足以下条件：</strong></p><ul><li>插件内容符合相关法律法规，无涉黄、涉政等敏感内容。</li><li>插件是符合<a href="https://opensource.org/osd" target="_blank" rel="noopener noreferrer">开源定义</a>，并有开源许可证的开源项目。</li><li>代码存储库托管于 GitHub 上。</li></ul><p>不符合以上条件的插件仍然能在本项目的开源许可（MIT License）下以其它形式自由分发，但不能上架插件市场。</p><p>要将插件上架到插件市场，您需要在在原来的插件清单的基础上，补充相关信息，并将补充后的插件清单文件上传到<a href="https://github.com/ClassIsland/PluginIndex" target="_blank" rel="noopener noreferrer">插件源仓库</a>中。</p><p>以下是需要补充的信息：</p><table><thead><tr><th>属性名</th><th>类型</th><th>必填？</th><th>说明</th></tr></thead><tbody><tr><td>RepoOwner</td><td><code>string</code></td><td><strong>是</strong></td><td>插件的 GitHub 仓库所有者</td></tr><tr><td>RepoName</td><td><code>string</code></td><td><strong>是</strong></td><td>插件的 GitHub 仓库名称</td></tr><tr><td>AssetsRoot</td><td><code>string</code></td><td><strong>是</strong></td><td>插件的资源根目录，格式为<code>&lt;默认分支&gt;/&lt;插件项目相对存储库的路径&gt;</code>，例如<code>master/ExamplePlugin</code>。</td></tr></tbody></table><p>例如：</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="classisland.example.yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">classisland.example</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">示例插件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">插件描述</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">entranceAssembly</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ClassIsland.ExamplePlugin.dll&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://github.com/ClassIsland/ClassIsland</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">repoOwner</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ClassIsland</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">repoName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ExamplePlugins</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">assetsRoot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">master/HelloWorldPlugin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您还需要将打包后的插件上传到<strong>您的插件的仓库</strong>的 Release 中，并添加 MD5 校验信息。</p>`,11),B=s("ol",null,[s("li",null,[i("在"),s("a",{href:"https://github.com/ClassIsland/ClassIsland/raw/master/tools/generate-md5.ps1",target:"_blank",rel:"noopener noreferrer"},"此处"),i("下载 MD5 计算 Powershell 脚本，并重命名为 "),s("code",null,"generate-md5.ps1")]),s("li",null,[i("运行以下命令："),s("div",{class:"language-powershell line-numbers-mode","data-highlighter":"shiki","data-ext":"powershell","data-title":"powershell",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"/"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"generate"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"-"),s("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"md5.ps1 打包输出目录")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])]),i("此命令将运行 MD5 计算脚本，并将符合格式要求的 MD5 校验信息输出到文件 "),s("code",null,"checksums.md"),i(" 中。")]),s("li",null,[i("上传插件包到 Releases，并在发行日志中填入 "),s("code",null,"checksums.md"),i(" 的内容。")])],-1),C=s("ol",null,[s("li",null,"利用 7z 等工具计算插件包的 MD5。"),s("li",null,[i("上传插件包到 Releases，并按以下格式在发行日志中加入校验信息："),s("div",{class:"language-markdown line-numbers-mode","data-highlighter":"shiki","data-ext":"markdown","data-title":"markdown",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0A1A7","--shiki-dark":"#7F848E","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},'<!-- CLASSISLAND_PKG_MD5 {"插件包文件名": "得到的 MD5"} -->')])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])]),i("其中被注释标签包裹的 json 对象是一个以文件名为键，MD5 值为值的字典。如果有多个文件，可以扩充此字典。")])],-1),f=s("p",null,[i("补充后的插件清单文件需要重命名为插件 id，并上传到"),s("a",{href:"https://github.com/ClassIsland/PluginIndex",target:"_blank",rel:"noopener noreferrer"},"插件源仓库"),i("根目录下的"),s("a",{href:"https://github.com/ClassIsland/PluginIndex/tree/main/index",target:"_blank",rel:"noopener noreferrer"},[s("code",null,"index")]),i("文件夹中。")],-1),F=s("p",null,"上传完成后，需要向源仓库发起 PR。您的插件将被审核，插件审核通过后即可进入插件市场。相关的下载信息将根据插件清单中的信息添加到插件源中。",-1);function x(w,E){const a=o("Tabs");return p(),h("div",null,[u,m,b,n(a,{id:"9",data:[{id:"Powershell Core"},{id:"手动打包"}],"tab-id":"pack_method"},{title0:e(({value:l,isActive:t})=>[i("Powershell Core")]),title1:e(({value:l,isActive:t})=>[i("手动打包")]),tab0:e(({value:l,isActive:t})=>[A,y]),tab1:e(({value:l,isActive:t})=>[v]),_:1}),_,n(a,{id:"158",data:[{id:"通过 Powershell"},{id:"手动添加"}],"tab-id":"pack_method"},{title0:e(({value:l,isActive:t})=>[i("通过 Powershell")]),title1:e(({value:l,isActive:t})=>[i("手动添加")]),tab0:e(({value:l,isActive:t})=>[B]),tab1:e(({value:l,isActive:t})=>[C]),_:1}),f,F])}const D=r(g,[["render",x],["__file","publishing.html.vue"]]),R=JSON.parse('{"path":"/en-us/dev/plugins/publishing.html","title":"发布插件","lang":"en-US","frontmatter":{"description":"发布插件 您可以将插件打包、并通过上传到插件插件仓库或私下分享等方式分发您的插件。 打包插件 上架到插件市场 Info 这里的插件市场指应用内置的插件源。 上架插件市场的插件必须满足以下条件： 插件内容符合相关法律法规，无涉黄、涉政等敏感内容。 插件是符合开源定义，并有开源许可证的开源项目。 代码存储库托管于 GitHub 上。 不符合以上条件的插件仍...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://classisland.github.io/classisland-docs-next/dev/plugins/publishing.html"}],["meta",{"property":"og:url","content":"https://classisland.github.io/classisland-docs-next/en-us/dev/plugins/publishing.html"}],["meta",{"property":"og:site_name","content":"ClassIsland Documentation"}],["meta",{"property":"og:title","content":"发布插件"}],["meta",{"property":"og:description","content":"发布插件 您可以将插件打包、并通过上传到插件插件仓库或私下分享等方式分发您的插件。 打包插件 上架到插件市场 Info 这里的插件市场指应用内置的插件源。 上架插件市场的插件必须满足以下条件： 插件内容符合相关法律法规，无涉黄、涉政等敏感内容。 插件是符合开源定义，并有开源许可证的开源项目。 代码存储库托管于 GitHub 上。 不符合以上条件的插件仍..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T03:47:10.000Z"}],["meta",{"property":"article:author","content":"ClassIsland社区"}],["meta",{"property":"article:modified_time","content":"2024-08-30T03:47:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"发布插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T03:47:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"打包插件","slug":"打包插件","link":"#打包插件","children":[]},{"level":2,"title":"上架到插件市场","slug":"上架到插件市场","link":"#上架到插件市场","children":[]}],"git":{"createdTime":1722516708000,"updatedTime":1724989630000,"contributors":[{"name":"hello8693","email":"1320998105@qq.com","commits":1}]},"readingTime":{"minutes":2.77,"words":830},"filePathRelative":"en-us/dev/plugins/publishing.md","localizedDate":"August 1, 2024","autoDesc":true}');export{D as comp,R as data};
