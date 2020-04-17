(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{441:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"network-optimisations-configuration-of-mmv1-on-a-very-fast-computer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network-optimisations-configuration-of-mmv1-on-a-very-fast-computer"}},[t._v("#")]),t._v(" Network Optimisations & Configuration of mmV1 on a Very FAST Computer")]),t._v(" "),s("p",[t._v("On a very fast system "),s("code",[t._v("nanomsg")]),t._v(" can crash. The crash is due to socket exhaustion, i.e., no more sockets in the system are available due to the system processing so fast. It has to do with the coins loop saturating things and using up all sockets, while "),s("code",[t._v("Nanomsg")]),t._v(" assumes it can get an open socket. The following magic TCP settings change will get sockets to recycle as fast as possible.")]),t._v(" "),s("p",[t._v("The workaround is to create a new conf file and make it run on every boot. You can set them with "),s("code",[t._v("sysctl -w")]),t._v(", but to make them permanent, better put them in a file like "),s("code",[t._v("/etc/sysctl.d/01-barterdex.conf")]),t._v(" and execute "),s("code",[t._v("sudo sysctl -p /etc/sysctl.d/01-barterdex.conf")]),t._v(" afterwards which will set both parameters.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" "),s("code",[t._v("root")]),t._v(" or "),s("code",[t._v("sudo")]),t._v(" needed for these commands. If you are a total "),s("code",[t._v("N00B")]),t._v(" and not sure what these lines do, you shouldn't mess with these settings.")]),t._v(" "),s("p",[t._v("To create the conf file use "),s("code",[t._v("sudo nano /etc/sysctl.d/01-barterdex.conf")]),t._v(" and paste the following inside the conf file and save it using "),s("code",[t._v("CTRL+X")]),t._v(" then "),s("code",[t._v("Y")]),t._v(" and hit "),s("code",[t._v("Enter")]),t._v(".")]),t._v(" "),s("p",[t._v("Contents of "),s("code",[t._v("01-barterdex.conf")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("net.core.rmem_default "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1048576")]),t._v("\nnet.core.wmem_default "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1048576")]),t._v("\nnet.core.rmem_max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16777216")]),t._v("\nnet.core.wmem_max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16777216")]),t._v("\nnet.ipv4.tcp_rmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("87380")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16777216")]),t._v("\nnet.ipv4.tcp_wmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16777216")]),t._v("\nnet.ipv4.udp_rmem_min "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v("\nnet.ipv4.udp_wmem_min "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v("\nnet.core.netdev_max_backlog "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("262144")]),t._v("\nnet.ipv4.tcp_max_orphans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("262144")]),t._v("\nnet.ipv4.tcp_max_syn_backlog "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("262144")]),t._v("\nnet.ipv4.tcp_tw_reuse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nnet.ipv4.tcp_max_tw_buckets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000000")]),t._v("\nnet.ipv4.ip_local_port_range "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16001")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65530")]),t._v("\nnet.core.somaxconn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20480")]),t._v("\nnet.ipv4.tcp_low_latency "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nnet.ipv4.tcp_slow_start_after_idle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nnet.ipv4.tcp_mtu_probing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nnet.ipv4.tcp_fastopen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nnet.ipv4.tcp_limit_output_bytes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("131072")]),t._v("\n")])])]),s("p",[t._v("You can also use a kernel module dealing with network congestion. But, there is not enough data on how much it helps. For this you need to add the following 2 lines into the previous file. Try to load the module with "),s("code",[t._v("sudo modprobe tcp_bbr")]),t._v(" to see if you have it. If the terminal shows nothing, that is good. It means it could load the module.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("net.core.default_qdisc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fq\nnet.ipv4.tcp_congestion_control"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bbr\n")])])]),s("p",[t._v("And, for the "),s("code",[t._v("bbr")]),t._v(" module in the last line to be automatically loaded on boot, put the following line in "),s("code",[t._v("/etc/modules-load.d/modules.conf")]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("tcp_bbr\n")])])]),s("p",[t._v("Reboot your computer/server.")])])}),[],!1,null,null,null);e.default=n.exports}}]);