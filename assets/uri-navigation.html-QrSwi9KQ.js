import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as t,b as e,d as n,w as d,e as l,r,o}from"./app-Dpf_P9fn.js";const c="/classisland-docs-next/assets/1721609023773-BQZc71cT.png",p={},h=t("h1",{id:"uri-导航",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#uri-导航"},[t("span",null,"Uri 导航")])],-1),g={class:"hint-container info"},u=t("p",{class:"hint-container-title"},"Info",-1),m=l('<p>ClassIsland 支持在应用内通过 Uri 进行导航，同时也在系统注册 Url 协议，从外部调用 ClassIsland 的各项功能。</p><p>ClassIsland 默认的 Uri 导航协议是 <code>classisland://</code>。应用内置的导航路径在 <code>classisland://app/</code> 下，插件扩展的导航路径一般在 <code>classisland://plugins/</code> 下。</p><h2 id="注册-url-协议" tabindex="-1"><a class="header-anchor" href="#注册-url-协议"><span>注册 Url 协议</span></a></h2><p>您可以在<a href="classisland://app/settings/general" target="_blank" rel="noopener noreferrer">【应用设置】-&gt;【基本】</a> 中启用【注册 Url 协议】选项以注册 Url 导航协议。</p><figure><img src="'+c+'" alt="1721609023773" tabindex="0" loading="lazy"><figcaption>1721609023773</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>在有些情况下，部分杀毒软件可能会将【注册 Url 协议】视为敏感行为进行拦截。如果在开启此功能时出现这种情况，请点击【允许】。</p></div><p>注册完成后，您可以通过在【运行】中调用<a href="classisland://app/test" target="_blank" rel="noopener noreferrer"><code>classisland://app/test</code></a>来测试注册是否成功。</p><h2 id="支持的功能" tabindex="-1"><a class="header-anchor" href="#支持的功能"><span>支持的功能</span></a></h2><p>您可以通过 Url 协议调用以下功能：</p><h3 id="应用设置" tabindex="-1"><a class="header-anchor" href="#应用设置"><span>应用设置</span></a></h3><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>classisland://app/settings/{page}/[...]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开应用设置。</p><p><strong>参数</strong></p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>page</td><td><code>string</code></td><td>要导航到的设置页面 id</td></tr></tbody></table><p>您可以通过修改 <code>page</code> 参数导航到指定的设置页面。以下为 ClassIsland 内置的设置页面以及其对应的 <code>category</code> 参数值。</p><table><thead><tr><th>页面</th><th>值</th><th>类型</th></tr></thead><tbody><tr><td>基本</td><td>general</td><td>内置</td></tr><tr><td>组件</td><td>components</td><td>内置</td></tr><tr><td>外观</td><td>appearance</td><td>内置</td></tr><tr><td>提醒</td><td>notification</td><td>内置</td></tr><tr><td>窗口</td><td>window</td><td>内置</td></tr><tr><td>天气</td><td>weather</td><td>内置</td></tr><tr><td>更新</td><td>update</td><td>内置</td></tr><tr><td>隐私</td><td>privacy</td><td>内置</td></tr><tr><td>插件</td><td>classisland.plugins</td><td>扩展</td></tr><tr><td>关于 ClassIsland</td><td>about</td><td>关于</td></tr><tr><td>测试页面</td><td>test-settings-page</td><td>调试</td></tr><tr><td>调试</td><td>debug</td><td>调试</td></tr><tr><td>笔刷</td><td>debug_brushes</td><td>调试</td></tr></tbody></table><h3 id="档案设置" tabindex="-1"><a class="header-anchor" href="#档案设置"><span>档案设置</span></a></h3><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>classisland://app/profile/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开档案设置窗口。</p><h3 id="换课" tabindex="-1"><a class="header-anchor" href="#换课"><span>换课</span></a></h3><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>classisland://app/class-swap</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开换课窗口。</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>在当前没有加载课表时，此 Uri 不起作用。</p></div><h3 id="测试导航" tabindex="-1"><a class="header-anchor" href="#测试导航"><span>测试导航</span></a></h3><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>classisland://app/test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开测试导航窗口。</p>',26);function b(k,v){const a=r("RouteLink");return o(),i("div",null,[h,t("div",g,[u,t("p",null,[e("本文章主要讲述用户如何使用 Uri 导航。如果您想了解在 ClassIsland 注册自定义 Uri 的方法，请参阅"),n(a,{to:"/en-us/dev/uri-navigation.html"},{default:d(()=>[e("开发 Uri 导航")]),_:1}),e("。")])]),m])}const U=s(p,[["render",b],["__file","uri-navigation.html.vue"]]),_=JSON.parse('{"path":"/en-us/app/uri-navigation.html","title":"Uri 导航","lang":"en-US","frontmatter":{"description":"Uri 导航 Info 本文章主要讲述用户如何使用 Uri 导航。如果您想了解在 ClassIsland 注册自定义 Uri 的方法，请参阅。 ClassIsland 支持在应用内通过 Uri 进行导航，同时也在系统注册 Url 协议，从外部调用 ClassIsland 的各项功能。 ClassIsland 默认的 Uri 导航协议是 classisl...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://classisland.github.io/classisland-docs-next/app/uri-navigation.html"}],["meta",{"property":"og:url","content":"https://classisland.github.io/classisland-docs-next/en-us/app/uri-navigation.html"}],["meta",{"property":"og:site_name","content":"ClassIsland Documentation"}],["meta",{"property":"og:title","content":"Uri 导航"}],["meta",{"property":"og:description","content":"Uri 导航 Info 本文章主要讲述用户如何使用 Uri 导航。如果您想了解在 ClassIsland 注册自定义 Uri 的方法，请参阅。 ClassIsland 支持在应用内通过 Uri 进行导航，同时也在系统注册 Url 协议，从外部调用 ClassIsland 的各项功能。 ClassIsland 默认的 Uri 导航协议是 classisl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T03:47:10.000Z"}],["meta",{"property":"article:author","content":"ClassIsland社区"}],["meta",{"property":"article:modified_time","content":"2024-08-30T03:47:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Uri 导航\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T03:47:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"注册 Url 协议","slug":"注册-url-协议","link":"#注册-url-协议","children":[]},{"level":2,"title":"支持的功能","slug":"支持的功能","link":"#支持的功能","children":[{"level":3,"title":"应用设置","slug":"应用设置","link":"#应用设置","children":[]},{"level":3,"title":"档案设置","slug":"档案设置","link":"#档案设置","children":[]},{"level":3,"title":"换课","slug":"换课","link":"#换课","children":[]},{"level":3,"title":"测试导航","slug":"测试导航","link":"#测试导航","children":[]}]}],"git":{"createdTime":1721610247000,"updatedTime":1724989630000,"contributors":[{"name":"hello8693","email":"1320998105@qq.com","commits":1}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"en-us/app/uri-navigation.md","localizedDate":"July 22, 2024","autoDesc":true}');export{U as comp,_ as data};
