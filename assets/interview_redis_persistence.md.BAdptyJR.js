import{_ as e,c as l,o as i,a1 as a}from"./chunks/framework.DjA6K2Mq.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/redis/persistence.md","filePath":"interview/redis/persistence.md"}'),o={name:"interview/redis/persistence.md"},r=a('<h3 id="一、aof日志" tabindex="-1">一、AOF日志 <a class="header-anchor" href="#一、aof日志" aria-label="Permalink to &quot;一、AOF日志&quot;">​</a></h3><hr><h4 id="_1-1-什么情况下会记录-aof-日志" tabindex="-1">1.1 什么情况下会记录 aof 日志 <a class="header-anchor" href="#_1-1-什么情况下会记录-aof-日志" aria-label="Permalink to &quot;1.1 什么情况下会记录 aof 日志&quot;">​</a></h4><ul><li>新增、修改、删除数据是都会记录 aof 日志</li><li>查询时如果 KEY 已过期也会记录一条 aof 日志</li></ul><h4 id="_1-2-一条命令的-aof-日志执行过程是怎样的" tabindex="-1">1.2 一条命令的 aof 日志执行过程是怎样的 <a class="header-anchor" href="#_1-2-一条命令的-aof-日志执行过程是怎样的" aria-label="Permalink to &quot;1.2 一条命令的 aof 日志执行过程是怎样的&quot;">​</a></h4><ul><li>写入 <ul><li>执行命令追加写入全局<code>server.aof_buf</code>缓冲区</li><li>如果存在重写子进程追加至 <code>server.aof_rewrite_buf_blocks</code>作为子进程增量数据</li><li>将数据写入<code>server.aof_fd</code>文件的内核缓冲区[等待操作系统刷盘]</li></ul></li><li>刷盘策略 <ul><li>方法：flushAppendOnlyFile</li><li>策略： <ul><li>Always：立即将 aof 文件缓冲区数据刷到磁盘[同步]</li><li>Everysec：定时任务每 1 秒，将数据放入后台线程任务列表[异步]</li><li>No：啥都不做，由系统决定什么时候写回磁盘[异步]</li></ul></li><li>刷盘时机： <ul><li>关闭服务：prepareForShutdown-&gt;flushAppendOnlyFile</li></ul></li><li>执行完命令：beforeSleep-&gt;flushAppendOnlyFile</li><li>定时任务：serverCron-&gt;flushAppendOnlyFile =&gt; 异步线程</li></ul></li></ul>',6),t=[r];function s(n,c,d,_,f,u){return i(),l("div",null,t)}const m=e(o,[["render",s]]);export{p as __pageData,m as default};
