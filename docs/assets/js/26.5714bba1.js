(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{112:function(s,t,a){s.exports=a.p+"assets/img/image-20190715085036593.ab4a32ff.png"},113:function(s,t,a){s.exports=a.p+"assets/img/image2019-07-15_09.01.21.1ac5bd70.png"},379:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"制作标准机镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#制作标准机镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 制作标准机镜像")]),s._v(" "),e("p",[s._v("通过使用标准机镜像，可以")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("避免重复执行对测试机安装必要软件的过程")])]),s._v(" "),e("li",[e("strong",[s._v("以一种相对标准化的过程管理测试机的维护")])])]),s._v(" "),e("p",[s._v("标准机镜像中预装了如下内容：")]),s._v(" "),e("ul",[e("li",[s._v("docker")]),s._v(" "),e("li",[s._v("gitlab-runner")]),s._v(" "),e("li",[s._v("kubernetes images")])]),s._v(" "),e("p",[s._v("本文档描述的安装过程已基于 centos 7.6 验证")]),s._v(" "),e("p",[s._v("标准机镜像的制作过程描述如下：")]),s._v(" "),e("h3",{attrs:{id:"安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装docker","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装docker")]),s._v(" "),e("p",[e("strong",[s._v("卸载旧版本")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove docker "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-client "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-client-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-common "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-latest-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-selinux "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-engine-selinux "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tdocker-engine\n")])])]),e("p",[e("strong",[s._v("下载依赖包及安装包")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-cli-18.09.7-3.el7.x86_64.rpm\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-18.09.7-3.el7.x86_64.rpm\n")])])]),e("p",[e("strong",[s._v("安装")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y containerd.io-1.2.6-3.3.el7.x86_64.rpm\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce-cli-18.09.7-3.el7.x86_64.rpm\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce-18.09.7-3.el7.x86_64.rpm\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n")])])]),e("p",[e("strong",[s._v("启动 docker 服务")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n")])])]),e("p",[e("strong",[s._v("检查 docker 版本")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker version\n")])])]),e("p",[e("strong",[s._v("参考文档")])]),s._v(" "),e("p",[s._v("https://docs.docker.com/install/linux/docker-ce/centos/")]),s._v(" "),e("p",[s._v("https://docs.docker.com/install/linux/linux-postinstall/")]),s._v(" "),e("h3",{attrs:{id:"安装-nfs-utils"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-nfs-utils","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 nfs-utils")]),s._v(" "),e("p",[e("strong",[s._v("执行安装命令")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nfs-utils\n")])])]),e("p",[s._v("必须先安装 nfs-utils 才能挂载 nfs 网络存储")]),s._v(" "),e("h3",{attrs:{id:"k8s基本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s基本配置","aria-hidden":"true"}},[s._v("#")]),s._v(" K8S基本配置")]),s._v(" "),e("p",[e("strong",[s._v("配置K8S的yum源")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/yum.repos.d/kubernetes.repo\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kubernetes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Kubernetes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("repo_gpgcheck")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n        http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n")])])]),e("p",[e("strong",[s._v("关闭swap、防火墙")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("swapoff -a\n")])])]),e("p",[e("strong",[s._v("关闭SeLinux")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("setenforce "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),e("p",[e("strong",[s._v("修改 /etc/sysctl.conf")])]),s._v(" "),e("p",[e("code",[s._v("vim /etc/sysctl.conf")])]),s._v(" "),e("p",[s._v("向其中添加")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("net.ipv4.ip_forward = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\n")])])]),e("p",[s._v("如下图所示")]),s._v(" "),e("p",[e("img",{attrs:{src:a(112),alt:"image-20190715085036593",title:":size=600x445"}})]),s._v(" "),e("p",[e("strong",[s._v("安装kubelet、kubeadm、kubectl")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y kubelet-1.15.0 kubeadm-1.15.0 kubectl-1.15.0\n")])])]),e("p",[e("strong",[s._v("修改docker Cgroup Driver为systemd")])]),s._v(" "),e("p",[e("code",[s._v("vim /usr/lib/systemd/system/docker.service")])]),s._v(" "),e("p",[s._v("向其中他添加")]),s._v(" "),e("p",[e("code",[s._v("--exec-opt native.cgroupdriver=systemd")])]),s._v(" "),e("p",[s._v("如下图所示")]),s._v(" "),e("p",[e("img",{attrs:{src:a(113),alt:"屏幕快照 2019-07-15 09.01.21",title:":size=1000x326"}})]),s._v(" "),e("p",[s._v("重启 docker")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl daemon-reload\nsystemctl restart docker\n")])])]),e("p",[e("strong",[s._v("启动kubelet")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kubelet "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" systemctl start kubelet\n")])])]),e("p",[e("strong",[s._v("加载 kubernetes 镜像")])]),s._v(" "),e("p",[s._v("由于k8s服务相关镜像在国外镜像源，国内无法访问")]),s._v(" "),e("p",[s._v("执行以下命令添加docker k8s国内镜像源")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://get.daocloud.io/daotools/set_mirror.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -s http://f1361db2.m.daocloud.io\n\nsystemctl restart docker\n")])])]),e("p",[e("strong",[s._v("拉取k8s相关镜像")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker pull mirrorgooglecontainers/kube-apiserver:v1.15.0\ndocker pull mirrorgooglecontainers/kube-controller-manager:v1.15.0\ndocker pull mirrorgooglecontainers/kube-scheduler:v1.15.0\ndocker pull mirrorgooglecontainers/kube-proxy:v1.15.0\ndocker pull mirrorgooglecontainers/pause:3.1\ndocker pull mirrorgooglecontainers/etcd:3.3.10\ndocker pull coredns/coredns:1.3.1\n")])])]),e("p",[e("strong",[s._v("更改镜像名为k8s官网镜像")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker tag d235b23c3570 k8s.gcr.io/kube-proxy:v1.15.0\ndocker tag 201c7a840312 k8s.gcr.io/kube-apiserver:v1.15.0\ndocker tag 2d3813851e87 k8s.gcr.io/kube-scheduler:v1.15.0\ndocker tag 8328bb49b652 k8s.gcr.io/kube-controller-manager:v1.15.0\ndocker tag da86e6ba6ca1 k8s.gcr.io/pause:3.1\ndocker tag eb516548c180 k8s.gcr.io/coredns:1.3.1\ndocker tag 2c4adeb21b4f k8s.gcr.io/etcd:3.3.10\n")])])]),e("p",[e("strong",[s._v("制作镜像")])]),s._v(" "),e("p",[s._v("请参考阿里云基于ECS "),e("a",{attrs:{href:"https://help.aliyun.com/document_detail/35109.html?spm=5176.2020520101.0.0.75fc4df5mtdFmV",target:"_blank",rel:"noopener noreferrer"}},[s._v("制作虚拟机镜像"),e("OutboundLink")],1),s._v(" 的文档")])])},[],!1,null,null,null);t.default=r.exports}}]);