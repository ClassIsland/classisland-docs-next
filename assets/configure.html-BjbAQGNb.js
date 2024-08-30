import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as s,b as i,d as n,w as d,e as l,r as h,o as r}from"./app-Dpf_P9fn.js";const o={},p=l(`<h1 id="集控配置文件" tabindex="-1"><a class="header-anchor" href="#集控配置文件"><span>集控配置文件</span></a></h1><p>ClassIsland 集控配置文件的参考文档。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><a href="#reversionstring"><code>ReVersionString</code></a></td><td>一种存储了字符串和其版本信息的类型。</td></tr></tbody></table><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><table><thead><tr><th>文件</th><th>说明</th></tr></thead><tbody><tr><td><a href="#mgmt-configure">集控配置</a></td><td>客户端集控配置，存储了集控服务器/集控清单 url 的相关信息。</td></tr><tr><td><a href="#mgmt-manifest">集控清单</a></td><td>包含了要拉取的集控相关文件的信息和组织的相关信息。</td></tr><tr><td><a href="#mgmt-policy">策略文件</a></td><td>控制 ClassIsland 行为的各个策略。</td></tr><tr><td>应用设置</td><td>ClassIsland 的设置。</td></tr><tr><td><a href="#mgmt-profile">课表、时间表与科目文件</a></td><td>存储课表、时间表与科目信息的文件。</td></tr></tbody></table><p><a id="ReVersionString"></a></p><h2 id="reversionstring" tabindex="-1"><a class="header-anchor" href="#reversionstring"><span>ReVersionString</span></a></h2><p><code>ReVersionString</code>是一种存储了字符串和其版本信息的类型。</p><h3 id="成员" tabindex="-1"><a class="header-anchor" href="#成员"><span>成员</span></a></h3><table><thead><tr><th>属性</th><th>类型</th><th>必填？</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>Version</code></td><td><code>int</code></td><td><strong>是</strong></td><td>当前字符串的版本序号</td><td><code>1</code></td></tr><tr><td><code>Value</code></td><td><code>string?</code></td><td>否</td><td>字符串内容</td><td><code>Hello world!</code></td></tr></tbody></table><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello world!&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a id="mgmt-configure"></a></p><h2 id="集控配置" tabindex="-1"><a class="header-anchor" href="#集控配置"><span>集控配置</span></a></h2><p>客户端集控配置，存储了集控服务器/集控清单 url 的相关信息。</p><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h3><table><thead><tr><th>属性</th><th>类型</th><th>必填？</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>ManagementServerKind</code></td><td><code>int</code></td><td><strong>是</strong></td><td>集控服务器类型。（<code>0</code>：静态托管的配置文件；<code>1</code>：集控服务器）</td><td><code>0</code></td></tr><tr><td><code>ManagementServer</code></td><td><code>string</code></td><td>仅当<code>ManagementServerKind</code>为 1 时必填</td><td>集控服务器地址</td><td><code>https://example.com:23333</code></td></tr><tr><td><code>ManagementServerGrpc</code></td><td><code>string</code></td><td>仅当<code>ManagementServerKind</code>为 1 时必填</td><td>集控服务器Grpc通讯地址</td><td><code>https://example.com:23333</code></td></tr><tr><td><code>ManifestUrlTemplate</code></td><td><code>string</code></td><td>仅当<code>ManagementServerKind</code>为 0 时必填</td><td>集控清单 url 模板</td><td><code>https://example.com/manifest.json</code></td></tr><tr><td><code>ClassIdentity</code></td><td><code>string</code></td><td>否</td><td>班级标识符</td><td><code>1-101</code></td></tr></tbody></table><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ManagementServerKind&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ManagementServer&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ManagementServerGrpc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ManifestUrlTemplate&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://example.com/manifest.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ClassIdentity&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TEST&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a id="mgmt-manifest"></a></p><h2 id="集控清单" tabindex="-1"><a class="header-anchor" href="#集控清单"><span>集控清单</span></a></h2><p>包含了要拉取的集控相关文件的信息和组织的相关信息。</p><p>如果您正在手动修改此文件，请务必在修改了<code>ReVersionString</code>类型的属性后更新该属性的版本序号，否则 ClassIsland 实例可能不会更新相关信息。</p><h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1"><span>属性</span></a></h3><table><thead><tr><th>属性</th><th>类型</th><th>必填？</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>ServerKind</code></td><td><code>int</code></td><td><strong>是</strong></td><td>服务器类型（<code>0</code>：静态托管的配置文件；<code>1</code>：集控服务器）</td><td><code>0</code></td></tr><tr><td><code>OrganizationName</code></td><td><code>string</code></td><td>否</td><td>组织名称</td><td><code>⌈黑塔⌋空间站</code></td></tr><tr><td><code>ClassPlanSource</code></td><td><a href="#ReVersionString"><code>ReVersionString</code></a></td><td>否</td><td>课表文件 url 模板</td><td>--</td></tr><tr><td><code>TimeLayoutSource</code></td><td><a href="#ReVersionString"><code>ReVersionString</code></a></td><td>否</td><td>时间表文件 url 模板</td><td>--</td></tr><tr><td><code>SubjectsSource</code></td><td><a href="#ReVersionString"><code>ReVersionString</code></a></td><td>否</td><td>科目文件 url 模板</td><td>--</td></tr><tr><td><code>DefaultSettingsSource</code></td><td><a href="#ReVersionString"><code>ReVersionString</code></a></td><td>否</td><td>应用设置 url 模板</td><td>--</td></tr><tr><td><code>PolicySource</code></td><td><a href="#ReVersionString"><code>ReVersionString</code></a></td><td>否</td><td>策略文件 url 模板</td><td>--</td></tr></tbody></table><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ClassPlanSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://example.com/ClassPlan.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;TimeLayoutSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://example.com/TimeLayout.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;SubjectsSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://example.com/Subjects.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;DefaultSettingsSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://example.com/settings.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;PolicySource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://example.com/policy.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ServerKind&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;OrganizationName&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Test Organization&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a id="mgmt-policy"></a></p><h2 id="策略文件" tabindex="-1"><a class="header-anchor" href="#策略文件"><span>策略文件</span></a></h2>`,31),c=s("p",null,[s("a",{id:"mgmt-profile"})],-1),k=s("h2",{id:"课表、时间表与科目文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#课表、时间表与科目文件"},[s("span",null,"课表、时间表与科目文件")])],-1),g=s("p",null,"存储课表、时间表与科目信息的文件，格式为档案文件格式。",-1),u=s("p",null,"您可以直接将含有这些信息的档案文件导出，并直接在清单引用这些文件。",-1);function m(B,y){const t=h("RouteLink");return r(),a("div",null,[p,s("p",null,[i("控制 ClassIsland 行为的各个策略，详见"),n(t,{to:"/en-us/management/policy.html"},{default:d(()=>[i("策略文件")]),_:1}),i("。")]),c,k,g,u])}const b=e(o,[["render",m],["__file","configure.html.vue"]]),q=JSON.parse('{"path":"/en-us/management/configure.html","title":"集控配置文件","lang":"en-US","frontmatter":{"description":"集控配置文件 ClassIsland 集控配置文件的参考文档。 目录 类型 配置文件 ReVersionString ReVersionString是一种存储了字符串和其版本信息的类型。 成员 示例 集控配置 客户端集控配置，存储了集控服务器/集控清单 url 的相关信息。 属性 示例 集控清单 包含了要拉取的集控相关文件的信息和组织的相关信息。 如果...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://classisland.github.io/classisland-docs-next/management/configure.html"}],["meta",{"property":"og:url","content":"https://classisland.github.io/classisland-docs-next/en-us/management/configure.html"}],["meta",{"property":"og:site_name","content":"ClassIsland Documentation"}],["meta",{"property":"og:title","content":"集控配置文件"}],["meta",{"property":"og:description","content":"集控配置文件 ClassIsland 集控配置文件的参考文档。 目录 类型 配置文件 ReVersionString ReVersionString是一种存储了字符串和其版本信息的类型。 成员 示例 集控配置 客户端集控配置，存储了集控服务器/集控清单 url 的相关信息。 属性 示例 集控清单 包含了要拉取的集控相关文件的信息和组织的相关信息。 如果..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T03:47:10.000Z"}],["meta",{"property":"article:author","content":"ClassIsland社区"}],["meta",{"property":"article:modified_time","content":"2024-08-30T03:47:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集控配置文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T03:47:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[{"level":3,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}]},{"level":2,"title":"ReVersionString","slug":"reversionstring","link":"#reversionstring","children":[{"level":3,"title":"成员","slug":"成员","link":"#成员","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"集控配置","slug":"集控配置","link":"#集控配置","children":[{"level":3,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}]},{"level":2,"title":"集控清单","slug":"集控清单","link":"#集控清单","children":[{"level":3,"title":"属性","slug":"属性-1","link":"#属性-1","children":[]},{"level":3,"title":"示例","slug":"示例-2","link":"#示例-2","children":[]}]},{"level":2,"title":"策略文件","slug":"策略文件","link":"#策略文件","children":[]},{"level":2,"title":"课表、时间表与科目文件","slug":"课表、时间表与科目文件","link":"#课表、时间表与科目文件","children":[]}],"git":{"createdTime":1715484575000,"updatedTime":1724989630000,"contributors":[{"name":"hello8693","email":"1320998105@qq.com","commits":1}]},"readingTime":{"minutes":2.38,"words":715},"filePathRelative":"en-us/management/configure.md","localizedDate":"May 12, 2024","autoDesc":true}');export{b as comp,q as data};
