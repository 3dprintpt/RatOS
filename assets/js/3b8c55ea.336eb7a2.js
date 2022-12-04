"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3217],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9250:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"installation",title:"Installing RatOS",sidebar_label:"Installation",sidebar_position:1},s="Installation",p={unversionedId:"installation",id:"installation",title:"Installing RatOS",description:"Raspberry Pi Installation",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation",title:"Installing RatOS",sidebar_label:"Installation",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Initial Configuration",permalink:"/docs/configuration"}},u=[{value:"Raspberry Pi Installation",id:"raspberry-pi-installation",children:[{value:"WIFI or Ethernet",id:"wifi-or-ethernet",children:[],level:3}],level:2},{value:"Preparing your control board",id:"preparing-your-control-board",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Updating",id:"updating",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"raspberry-pi-installation"},"Raspberry Pi Installation"),(0,o.kt)("p",null,"Download the newest release (download the RatOS-","*",".img.xz file under the assets dropdown) of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Rat-Os/RatOS/releases"},"RatOS on github"),".\nThen use ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Balena Etcher")," to write that image to the SD card that goes into your raspberry pi (16GB or larger)."),(0,o.kt)("p",null,"Note: this will destroy all data on the card!"),(0,o.kt)("a",{class:"button button--primary",href:"https://github.com/Rat-Os/RatOS/releases"},"Download RatOS"),(0,o.kt)("h3",{id:"wifi-or-ethernet"},"WIFI or Ethernet"),(0,o.kt)("p",null,'When the RatOS image has been written to the SD card, insert the SD card into the Raspberry Pi and turn on the Pi. After a few minutes the raspberry pi will host a hotspot called "RatOS", join this hotspot on your phone or a PC/Laptop with wifi, the password is "raspberry". When connected, open ',(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local/configure"},"http://RatOS.local/configure")," or ",(0,o.kt)("a",{parentName:"p",href:"http://192.168.50.1/configure"},"http://192.168.50.1/configure")," and follow the steps presented there to setup wifi and your printers hostname."),(0,o.kt)("p",null,"Alternatively, if you're using a pi with Ethernet, you can use an ethernet cable instead."),(0,o.kt)("h2",{id:"preparing-your-control-board"},"Preparing your control board"),(0,o.kt)("p",null,"After completing the setup wizard, wait a couple of minutes, then open ",(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local/"},"http://RatOS.local/"),' in your browser (or whatever hostname you chose during setup). This will present you with the mainsail interface. On the dashboard you\'ll see a box with the heading "Scripts", in that box there\'ll be a button called "COMPILE FIRMWARE", click that. This will compile fresh firmware for the supported RatOS boards, it\'ll take a couple of minutes, ',(0,o.kt)("strong",{parentName:"p"},"don't shut down your pi during this process"),'. When the process is complete you\'ll see "Firmware binaries compiled successfully!" in the console. At this point you\'re ready to download the firmware for your board. On the left there\'s a menu option named "Machine", click on that, and you\'ll see a list of files and folders. There\'s a folder here called "firmware_binaries", open that folder. You can download the firmware binary for your board from here. Use the links below to move on to the preparation of the control board.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-11"},"BIGTREETECH Octopus v1.1")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-446"},"BIGTREETECH Octopus Pro 446")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-429"},"BIGTREETECH Octopus Pro 429")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/skr-pro-12"},"BIGTREETECH SKR Pro v1.2")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/skr-2-429"},"BIGTREETECH SKR 2")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/fysetc/spider-11"},"Fysetc Spider v1.1")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"With the control board connected via USB to your Raspberry Pi and the printer turned on, open your browser and navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local"},"http://RatOS.local/")," or your chosen hostname and proceed to the ",(0,o.kt)("a",{parentName:"p",href:"configuration"},"configuration guide"),"."),(0,o.kt)("h2",{id:"updating"},"Updating"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is important that you ",(0,o.kt)("strong",{parentName:"p"},"don't")," update the klipper package ",(0,o.kt)("em",{parentName:"p"},"before")," your board connects correctly, because firmware updates will not compile or flash automatically before your board is properly flashed and connected."))),(0,o.kt)("p",null,"After you've configured your printer.cfg and everything is working, go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MACHINE")," tab in Mainsail. You'll see a sheet with the title \"Update Manager\", if you're familiar with Fluidd or Mainsail, you'll notice a new entry called ",(0,o.kt)("inlineCode",{parentName:"p"},"RatOS"),". This ",(0,o.kt)("inlineCode",{parentName:"p"},"RatOS")," package will update all the config files in the config folder, improvements, support for hotends, macros, extruders, new boards etc, will be coming to your printer this way in the future. ",(0,o.kt)("strong",{parentName:"p"},"Be sure to keep this up to date, especially if you update klipper or moonraker"),". Always update the RatOS package first, before updating anything else. This is important because Klipper and Moonraker sometimes make changes that require manual system or configuration changes which RatOS will try to do for you."),(0,o.kt)("p",null,"In general, it's advisable to keep all your packages up to date, but if you're happy with how your printer works and there's nothing interesting for you in the updates, it's perfectly fine to delay updating until a later time. Klipper is a continually evolving project, that also means that bugs ",(0,o.kt)("em",{parentName:"p"},"do happen"),". In the rare circumstance that bugs are introduced, they're usually fixed very quickly, but if you have a bunch of important prints coming up, maybe delay the updates till afterwards. Now that we've gotten that out of the way, ",(0,o.kt)("strong",{parentName:"p"},"please go ahead and update RatOS to the latest version"),"."))}d.isMDXComponent=!0}}]);