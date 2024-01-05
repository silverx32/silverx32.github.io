import{_ as i,r as l,o as t,c,a as n,b as s,d as e,e as o}from"./app-rnd0czXG.js";const p="/vuepress-01-002.png",d="/vuepress-01-001.png",u={},r=n("h2",{id:"前期准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前期准备","aria-hidden":"true"},"#"),s(" 前期准备")],-1),m=n("br",null,null,-1),v={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},b=n("s",null,"捏马，没有中文",-1),k=n("br",null,null,-1),h={href:"https://www.baidu.com/s?ie=UTF-8&wd=nodejs",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"创建文件夹",-1),_=o(`<ul><li>在本地创建一个文件夹</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token operator">&lt;</span>文件夹名<span class="token operator">&gt;</span>
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>文件夹名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>初始化git和npm</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#加入git管理</span>
<span class="token function">git</span> init
<span class="token comment">#初始化npm</span>
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用github action部署</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#新建.github文件夹和workflows文件夹</span>
<span class="token function">mkdir</span> .github/workflows
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在workflows文件夹里新建一个docs.yml文件</li><li>打开docs.yml文件，输入以下内容</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 什么都行

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># 手动触发部署</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
    
<span class="token comment">#加上GithubToken权限 不然后面推送gh-pages分支会提示无权限    </span>
<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> read
  <span class="token key atrule">pages</span><span class="token punctuation">:</span> write
  <span class="token key atrule">id-token</span><span class="token punctuation">:</span> write
  
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
 <span class="token comment">#使用github action部署</span>
    <span class="token comment">#   - name: Setup pnpm</span>
    <span class="token comment">#     uses: pnpm/action-setup@v2</span>
    <span class="token comment">#     with:</span>
    <span class="token comment">#       # 选择要使用的 pnpm 版本</span>
    <span class="token comment">#       version: 8</span>
    <span class="token comment">#       # 使用 pnpm 安装依赖</span>
    <span class="token comment">#       run_install: true</span>

    <span class="token comment">#   - name: Setup Node.js</span>
    <span class="token comment">#     uses: actions/setup-node@v4</span>
    <span class="token comment">#     with:</span>
    <span class="token comment">#       # 选择要使用的 node 版本</span>
    <span class="token comment">#       node-version: 18</span>
    <span class="token comment">#       # 缓存 pnpm 依赖</span>
    <span class="token comment">#       cache: pnpm</span>

      <span class="token comment"># 运行构建脚本</span>
    <span class="token comment">#   - name: Build VuePress site</span>
    <span class="token comment">#     run: pnpm build</span>
<span class="token comment">#使用github action部署End</span>
      
      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span>
      <span class="token comment"># 推送到gh-pages分支</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">id</span><span class="token punctuation">:</span> &lt;你の名字<span class="token punctuation">&gt;</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> .vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.GITHUB_TOKEN<span class="token punctuation">}</span><span class="token punctuation">}</span> 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地部署" tabindex="-1"><a class="header-anchor" href="#本地部署" aria-hidden="true">#</a> 本地部署</h2><h3 id="_1-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-安装依赖" aria-hidden="true">#</a> 1.安装依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-安装vuepress-reco" tabindex="-1"><a class="header-anchor" href="#_2-安装vuepress-reco" aria-hidden="true">#</a> 2.安装vuepress-reco</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx @vuepress-reco/theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-配置package-json" tabindex="-1"><a class="header-anchor" href="#_3-配置package-json" aria-hidden="true">#</a> 3. 配置package.json</h3><ul><li>打开package.json</li><li>加入在最外层里加入</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.13&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-配置-gitignore" tabindex="-1"><a class="header-anchor" href="#_4-配置-gitignore" aria-hidden="true">#</a> 4. 配置.gitignore</h3><ul><li>加入以下内容</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.vuepress/.cache
.vuepress/.temp
node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-运行build" tabindex="-1"><a class="header-anchor" href="#_5-运行build" aria-hidden="true">#</a> 5. 运行build</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-推送至github" tabindex="-1"><a class="header-anchor" href="#_6-推送至github" aria-hidden="true">#</a> 6. 推送至github</h3><ul><li>仓库命名为：<code>&lt;你の名字&gt;.github.io</code></li><li>等待github action自动部署完成</li><li>如图：workflows会先有一个main的进程，然后会有一个Bot的进程 <img src="`+p+'" alt="github action"></li><li>等待两个进程成功</li></ul><h3 id="_7-配置github-pages" tabindex="-1"><a class="header-anchor" href="#_7-配置github-pages" aria-hidden="true">#</a> 7. 配置github pages</h3><ul><li>在仓库的settings里找到github pages</li><li><strong>设置如图</strong><img src="'+d+'" alt="github pages"></li><li>打开<code>&lt;你の名字&gt;.github.io</code>即可看到效果</li></ul>',25);function f(y,x){const a=l("ExternalLinkIcon");return t(),c("div",null,[r,n("ol",null,[n("li",null,[s("安装nodejs"),m,n("a",v,[s("nodejs官网"),e(a)]),s(),b,k,n("a",h,[s("百度一下，你就知道"),e(a)])]),g]),_])}const j=i(u,[["render",f],["__file","vuepress-01.html.vue"]]);export{j as default};
