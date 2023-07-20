import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,a as n,e as a,b as e,d as t}from"./app-9f31e196.js";const i={},u=n("h2",{id:"nacos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nacos","aria-hidden":"true"},"#"),a(" Nacos")],-1),r=n("h3",{id:"_3-2-nacos注册中心",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-2-nacos注册中心","aria-hidden":"true"},"#"),a(" 3.2 Nacos注册中心")],-1),d={href:"https://nacos.io/%EF%BC%8CNacos%E7%9A%84%E4%BD%BF%E7%94%A8%E4%B8%8D%E5%90%8C%E4%BA%8EEureka%EF%BC%8CNacos%E6%9C%89%E7%82%B9%E7%B1%BB%E4%BC%BC%E4%BA%8ENginx%EF%BC%8C%E9%9C%80%E8%A6%81%E4%B8%8B%E8%BD%BD%E6%9D%A5%E8%BF%90%E8%A1%8C%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%B2%A1%E4%B8%8B%E8%BD%BD%E7%9B%B4%E6%8E%A5%E5%AF%BC%E5%8C%85%E4%BD%BF%E7%94%A8%E4%BC%9A%E6%8A%A5%E5%BE%88%E5%A4%9A%E9%94%99",target:"_blank",rel:"noopener noreferrer"},k=n("h4",{id:"_3-2-1-安装nacos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-2-1-安装nacos","aria-hidden":"true"},"#"),a(" 3.2.1 安装Nacos")],-1),v=n("h5",{id:"_3-2-1-1-windows安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-2-1-1-windows安装","aria-hidden":"true"},"#"),a(" 3.2.1.1 Windows安装")],-1),m=n("ol",null,[n("li",null,"下载安装包，开发阶段采用单机安装即可")],-1),b=n("p",null,"在Nacos的GitHub页面，提供有下载链接，可以下载编译好的Nacos服务端或者源代码：",-1),g={href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>windows版本使用<code>nacos-server-1.4.1.zip</code>包即可。</p><ol start="2"><li>解压到任意非中文目录下</li></ol><ul><li>bin：启动脚本</li><li>conf：配置文件</li></ul><ol start="3"><li>端口配置</li></ol><p>Nacos的默认端口是8848，如果你电脑上的其它进程占用了8848端口，需要关闭该进程或者修改端口。</p><p><strong>如果无法关闭占用8848端口的进程</strong>，也可以进入nacos的conf目录，修改配置文件（application.properties）中的端口：</p><ol start="4"><li>进入bin目录，执行如下windows命令即可启动：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>startup.cmd -m standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),f={start:"5"},E={href:"http://127.0.0.1:8848/nacos%EF%BC%8C%E9%BB%98%E8%AE%A4%E7%9A%84%E8%B4%A6%E5%8F%B7%E5%92%8C%E5%AF%86%E7%A0%81%E9%83%BD%E6%98%AFnacos%EF%BC%8C%E6%B2%A1%E6%8A%A5%E9%94%99%E5%8D%B3%E6%88%90%E5%8A%9F",target:"_blank",rel:"noopener noreferrer"},_=t(`<h5 id="_3-2-1-2-linux安装" tabindex="-1"><a class="header-anchor" href="#_3-2-1-2-linux安装" aria-hidden="true">#</a> 3.2.1.2 Linux安装</h5><p>略</p><h4 id="_3-2-3-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-2-3-基本使用" aria-hidden="true">#</a> 3.2.3 基本使用</h4><ol><li>在父工程的pom文件中的<code>&lt;dependencyManagement&gt;</code>中引入SpringCloudAlibaba的依赖：</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--Nacos管理依赖--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-alibaba-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在子工程中中的pom文件中引入nacos-discovery依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
     <span class="token comment">&lt;!--Nacos服务注册依赖--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，Eureka相关依赖的注释掉</p><ol start="2"><li><p>在子工程中添加配置</p></li><li><h3 id="配置nacos地址" tabindex="-1"><a class="header-anchor" href="#配置nacos地址" aria-hidden="true">#</a> 配置nacos地址</h3><p>在user-service和order-service的application.yml中添加nacos地址：</p></li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment">#配置Nacos地址</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span> <span class="token comment">#配置集群</span>
        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> HZ <span class="token comment"># 集群名称，联系Nacos的多级存储模型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-4-同集群优先负载均衡" tabindex="-1"><a class="header-anchor" href="#_3-2-4-同集群优先负载均衡" aria-hidden="true">#</a> 3.2.4 同集群优先负载均衡</h4><p>默认的<code>ZoneAvoidanceRule</code>并不能实现根据同集群优先来实现负载均衡。因此Nacos中提供了一个<code>NacosRule</code>的实现，可以优先从同集群中挑选实例。</p><ol><li>给对应服务添加集群配置：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: HZ <span class="token comment"># 集群名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改负载均衡规则</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">userservice</span><span class="token punctuation">:</span>
  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.alibaba.cloud.nacos.ribbon.NacosRule <span class="token comment">#负载均衡规则，实现同集群下的负载均衡</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-5-权重配置" tabindex="-1"><a class="header-anchor" href="#_3-2-5-权重配置" aria-hidden="true">#</a> 3.2.5 权重配置</h4><p>默认情况下NacosRule是同集群内随机挑选，不会考虑机器的性能问题。所以会导致性能快的机器没有充分利用，性能慢的机器又会有堆积，因此，Nacos提供了权重配置来控制访问频率，权重越大则访问频率越高。</p><p>可在对应服务点击详情，编辑进行设置，数值越大权重越大，如果权重修改为0，则该实例永远不会被访问</p><h4 id="_3-2-6-环境隔离" tabindex="-1"><a class="header-anchor" href="#_3-2-6-环境隔离" aria-hidden="true">#</a> 3.2.6 环境隔离</h4><ol><li><p>Nacos提供了namespace（命名空间）来实现环境隔离功能。</p><ul><li>nacos中可以有多个namespace</li><li>namespace下可以有group、service等</li><li>不同namespace之间相互隔离，例如不同namespace的服务互相不可见</li></ul></li><li><p>创建namespace</p></li></ol><ul><li><p>默认情况下，所有service、data、group都在同一个namespace，名为public（保留空间）</p></li><li><p>我们可以自己添加namespace然后在配置文件中将服务添加到指定命名空间中</p></li><li><p>给微服务配置namespace只能通过修改配置来实现</p></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">cluster-name</span><span class="token punctuation">:</span> HZ <span class="token comment">#配置集群</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> 492a7d5d<span class="token punctuation">-</span>237b<span class="token punctuation">-</span>46a1<span class="token punctuation">-</span>a99a<span class="token punctuation">-</span>fa8e98e4b0f9 <span class="token comment"># 命名空间，填ID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同环境，即namespace下的服务是不可见的，即不能从一个环境的服务访问另一个环境的服务，控制台会报错：</p><h4 id="_3-2-7-nacos与eureka的区别" tabindex="-1"><a class="header-anchor" href="#_3-2-7-nacos与eureka的区别" aria-hidden="true">#</a> 3.2.7 Nacos与Eureka的区别</h4><p>Nacos的服务实例分为两种类型：</p><ul><li><p>临时实例：如果实例宕机超过一定时间，会从服务列表剔除，默认的类型。</p></li><li><p>非临时实例：如果实例宕机，不会从服务列表剔除，也可以叫永久实例。</p></li></ul><p>配置一个服务实例为永久实例如下</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">ephemeral</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 设置为非临时实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nacos和Eureka整体结构类似，服务注册、服务拉取、心跳等待，但是也存在一些差异</p><ul><li><p>Nacos与eureka的共同点</p><ul><li>都支持服务注册和服务拉取</li><li>都支持服务提供者心跳方式做健康检测</li></ul></li><li><p>Nacos与Eureka的区别</p><ul><li>Nacos支持服务端主动检测提供者状态：临时实例采用心跳模式，非临时实例采用主动检测模式</li><li>临时实例心跳不正常会被剔除，非临时实例则不会被剔除</li><li>Nacos支持服务列表变更的消息推送模式，服务列表更新更及时</li><li>Nacos集群默认采用AP方式，当集群中存在非临时实例时，采用CP模式；Eureka采用AP方式</li></ul></li></ul><p>（ACP模式详见另外章节）</p><h4 id="_3-2-8-配置管理" tabindex="-1"><a class="header-anchor" href="#_3-2-8-配置管理" aria-hidden="true">#</a> 3.2.8 配置管理</h4><p>Nacos除了可以做注册中心，还可以做配置中心来使用。</p><p>配置中心就是将多个微服务的主要配置统一到一个平台上（Nacos）来集中管理，简单理解就是对项目的针对性提纯，原本项目结构复杂，我们将配置文件单独拎出来放到一起（同样类比于目录与正文的关系，就可以很清晰知道其好处）。</p><p>使用配置中心(Nacos)的另一个好处就是<strong>配置的热更新</strong>，就是在配置中心更改后原服务并不用重启就能生效，这一点尤为重要，因为每次项目重启都是一次耗时费力的过程（尤其是资源占有率大的项目）</p><p>并不是在配置中心配置了就能热更新了，具体参照配置热更新一小节</p><h5 id="_3-2-8-1-在nacos添加配置" tabindex="-1"><a class="header-anchor" href="#_3-2-8-1-在nacos添加配置" aria-hidden="true">#</a> 3.2.8.1 在nacos添加配置</h5><p>在nacos中选择<code>配置管理</code>，然后新增</p><ul><li>DataID : 即为配置文件的id， 格式为： [服务名称]-[profile].[后缀名]</li><li>Group：默认</li><li>描述：自己写</li><li>配置格式：目前支持yaml与properties ， 通常都用yaml格式</li></ul><p>注意：项目的核心配置，需要热更新的配置才有放到nacos管理的必要。基本不会变更的一些配置还是保存在微服务本地比较好。</p><h5 id="_3-2-8-2-从nacos拉取配置" tabindex="-1"><a class="header-anchor" href="#_3-2-8-2-从nacos拉取配置" aria-hidden="true">#</a> 3.2.8.2 从Nacos拉取配置</h5><p>微服务需要拉取nacos中管理的配置与本地的application.yml配置合并，才能完成项目启动。也就是说在application.yml文件还未被读取时就得先知道nacos得地址，因此spring引入了一种新的配置文件：<strong>bootstrap.yaml</strong>文件，会在application.yml之前被读取。</p><p>大致流程：项目启动 - 加载bootstrap.yaml文件 - 获取nacos中配置文件 - 读取application.yml文件 - 创建Spring容器 - 加载Bean</p><p>实现步骤：</p><ol><li>在需要受配置中心管理配置得服务中引入nacos-config依赖</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--nacos配置管理依赖--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加bootstrap.yaml</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> userservice <span class="token comment"># 服务名称</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev <span class="token comment">#开发环境，这里是dev </span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment"># Nacos地址</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml <span class="token comment"># 文件后缀名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里会根据spring.cloud.nacos.server-addr获取nacos地址，再根据</p><p><code>\${spring.application.name}-\${spring.profiles.active}.\${spring.cloud.nacos.config.file-extension}</code>作为文件id，来读取配置。（所以这就是之前说明id要求的原因）,如上的配置文件，对应<strong>DataId</strong>为<strong>userservice-dev.yaml</strong></p><ol start="3"><li>使用@Value注入nacos配置</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RefreshScope</span> <span class="token comment">//开启热更新</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${pattern.dateformat}&quot;</span><span class="token punctuation">)</span><span class="token comment">//注入Nacos中的配置</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dateformat<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;now&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>dateformat<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-8-3-配置热更新" tabindex="-1"><a class="header-anchor" href="#_3-2-8-3-配置热更新" aria-hidden="true">#</a> 3.2.8.3 配置热更新</h5><p>并不是将配置放到Nacos就能热更新，要实现<strong>配置热更新</strong>还需要满足以下条件。</p><ul><li>方式一：在@Value注入的变量所在类上添加注解@RefreshScope：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RefreshScope</span> <span class="token comment">//开启热更新</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${pattern.dateformat}&quot;</span><span class="token punctuation">)</span><span class="token comment">//注入Nacos中的配置</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dateformat<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;now&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>dateformat<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方式二:使用@ConfigurationProperties注解代替@Value注解。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;pattern&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PatternProperties</span> <span class="token punctuation">{</span> <span class="token comment">//定义一个类与配置文件中 pattern映射</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> dateformat<span class="token punctuation">;</span> <span class="token comment">//类属性为 pattern的下级元素</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在UserController中使用这个类代替@Value：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">PatternProperties</span> patternProperties<span class="token punctuation">;</span><span class="token comment">//使用类注入代替@Value属性注入</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;now&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span>patternProperties<span class="token punctuation">.</span><span class="token function">getDateformat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-9-配置共享" tabindex="-1"><a class="header-anchor" href="#_3-2-9-配置共享" aria-hidden="true">#</a> 3.2.9 配置共享</h4><p>在微服务启动时，会去nacos读取多个配置文件，例如：</p><ul><li><p><code>[spring.application.name]-[spring.profiles.active].yaml</code>，例如：userservice-dev.yaml</p></li><li><p><code>[spring.application.name].yaml</code>，例如：userservice.yaml</p></li></ul><p>而<code>[spring.application.name].yaml</code>不包含环境，因此可以被多个环境共享。</p><p>所以要在Nacos中添加一个多环境的配置只需要在设置DataID时不指定环境就行，如：userservice.yaml</p><ul><li>配置共享的优先级</li></ul><p>服务名-frofile.yaml &gt; 服务名.yaml &gt; 本地配置</p><ul><li>搭建Nacos集群</li></ul><p>Nacos生产环境下一定要部署为集群状态（参照同集群优先负载均衡）</p>`,70);function x(N,B){const s=o("ExternalLinkIcon");return l(),c("div",null,[u,r,n("p",null,[a("Nacos是阿里巴巴在SpringCloudAlibaba中包含的注册中心。官网："),n("a",d,[a("https://nacos.io/，Nacos的使用不同于Eureka，Nacos有点类似于Nginx，需要下载来运行，如果没下载直接导包使用会报很多错"),e(s)])]),k,v,m,b,n("p",null,[a("GitHub主页："),n("a",g,[a("https://github.com/alibaba/nacos"),e(s)])]),n("p",null,[a("GitHub的Release下载页："),n("a",h,[a("https://github.com/alibaba/nacos/releases"),e(s)])]),y,n("ol",f,[n("li",null,[a("访问"),n("a",E,[a("http://127.0.0.1:8848/nacos，默认的账号和密码都是nacos，没报错即成功"),e(s)])])]),_])}const C=p(i,[["render",x],["__file","Nacos.html.vue"]]);export{C as default};
