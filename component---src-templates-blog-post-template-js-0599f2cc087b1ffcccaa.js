(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return g});var n=a(0),i=a.n(n),r=a(142),o=a(144),l=a(150),s=a.n(l),d=a(146),c=o.b.div.withConfig({displayName:"blogPostTemplate__BlogWrapper",componentId:"sc-1nlh0ei-0"})(["padding:0 30px;font-size:1.1rem;"]),u=o.b.h2.withConfig({displayName:"blogPostTemplate__BlogHeader",componentId:"sc-1nlh0ei-1"})(["text-align:center;"]),f=o.b.div.withConfig({displayName:"blogPostTemplate__FluidImageWrapper",componentId:"sc-1nlh0ei-2"})(["max-width:550px;width:100%;margin:auto;"]),p=o.b.div.withConfig({displayName:"blogPostTemplate__BlogPost",componentId:"sc-1nlh0ei-3"})(["display:flex;flex-direction:column;align-items:center;img{width:50%;}"]),h=o.b.div.withConfig({displayName:"blogPostTemplate__Links",componentId:"sc-1nlh0ei-4"})(["display:flex;"]),m=Object(o.b)(r.Link).withConfig({displayName:"blogPostTemplate__PostLink",componentId:"sc-1nlh0ei-5"})(["text-decoration:none;color:#c701c0;&:first-child{margin-right:10px;}"]),g="1579492234";t.default=function(e){var t=e.data,a=e.pageContext,n=a.next,r=a.prev,o=t.markdownRemark,l=o.frontmatter,g=l.title,y=l.alt;return i.a.createElement(d.a,null,i.a.createElement(c,null,i.a.createElement(u,null,g),i.a.createElement(f,null,i.a.createElement(s.a,{fluid:o.frontmatter.cover_image.childImageSharp.fluid,alt:y})),i.a.createElement(p,{dangerouslySetInnerHTML:{__html:o.html}}),i.a.createElement(h,null,n&&i.a.createElement(m,{to:"pages/"+n.frontmatter.path},"Next"),r&&i.a.createElement(m,{to:"pages/"+r.frontmatter.path},"Previous"))))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(141),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(143),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),p=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},145:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(48),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},146:function(e,t,a){"use strict";var n=a(147),i=a.n(n),r=a(0),o=a.n(r),l=a(144),s=a(142),d=l.b.header.withConfig({displayName:"Nav__NavHeader",componentId:"sc-2vz3qr-0"})(["display:flex;justify-content:space-between;align-items:center;padding:0 35px;margin-bottom:10px;font-size:1.1rem;"]),c=l.b.ul.withConfig({displayName:"Nav__NavList",componentId:"sc-2vz3qr-1"})(["display:flex;justify-content:space-between;padding:0;min-width:240px;"]),u=l.b.li.withConfig({displayName:"Nav__NavItem",componentId:"sc-2vz3qr-2"})(["display:block;"]),f=Object(l.b)(s.Link).withConfig({displayName:"Nav__Navlink",componentId:"sc-2vz3qr-3"})(["text-decoration:none;color:#db1fde;"]),p=function(e){return o.a.createElement(u,null,o.a.createElement(f,{to:e.to},e.children))},h=function(){return o.a.createElement(d,null,o.a.createElement(s.Link,{to:"/"},o.a.createElement("h3",null,"GatsbyBlog")),o.a.createElement(c,null,o.a.createElement(p,{to:"/"},"Home"),o.a.createElement(p,{to:"/about"},"About"),o.a.createElement(p,{to:"/contacts"},"Contacts")))};function m(){var e=i()(["\n  html {\n    font-size: 16px;\n  }\n\n  body {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    font-family: avenir;\n  }\n"]);return m=function(){return e},e}var g=Object(l.a)(m()),y=l.b.div.withConfig({displayName:"Layout__Container",componentId:"sc-1i3zltk-0"})(["margin:0 auto;height:100vh;font-size:1.1rem;"]),b=l.b.div.withConfig({displayName:"Layout__Inner",componentId:"sc-1i3zltk-1"})(["display:flex;flex-direction:column;align-items:center;"]);t.a=function(e){var t=e.children;return o.a.createElement(y,null,o.a.createElement(g,null),o.a.createElement(h,null),o.a.createElement(b,null,t))}},150:function(e,t,a){"use strict";var n=a(9);t.__esModule=!0,t.default=void 0;var i,r=n(a(7)),o=n(a(50)),l=n(a(148)),s=n(a(149)),d=n(a(0)),c=n(a(4)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+l+s+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,i=e.onError,r=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,s.default)({},r,{onLoad:n,onError:i,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!0,r=!1,l=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!1,r=!0),"undefined"==typeof window&&(n=!1,i=!1),t.critical&&(n=!0,i=!1,r=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:i,IOSupported:r,fadeIn:l,hasNoScript:c,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,w="boolean"==typeof b?"lightgray":b,E=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),S=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),I={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var L=h;return d.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&d.default.createElement(y,(0,s.default)({src:L.base64},I)),L.tracedSVG&&d.default.createElement(y,(0,s.default)({src:L.tracedSVG},I)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,src:L.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:a,title:t},L))}}))}if(m){var x=m,N=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},r);return"inherit"===r.display&&delete N.display,d.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&d.default.createElement(y,(0,s.default)({src:x.base64},I)),x.tracedSVG&&d.default.createElement(y,(0,s.default)({src:x.tracedSVG},I)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(y,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-0599f2cc087b1ffcccaa.js.map