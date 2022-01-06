"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9535:function(e,t,a){var l=a(7294),n=a(5444),i=a(6125);t.Z=function(){var e,t,r=(0,n.useStaticQuery)("230163734"),s=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social,m=null==c?void 0:c.github;return l.createElement("div",{className:"bio"},l.createElement(i.S,{className:"bio-avatar",layout:"fixed",src:"../images/paynym.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(3771)}),l.createElement("div",{className:"author"},l.createElement("div",{className:"author-name"},(null==s?void 0:s.name)&&m&&l.createElement("strong",null,l.createElement("a",{href:"https://github.com/"+m},s.name))),l.createElement("div",{className:"author-summary"},(null==s?void 0:s.summary)&&l.createElement("p",null,null==s?void 0:s.summary))))}},7704:function(e,t,a){a.r(t);var l=a(7294),n=a(5444),i=a(9535),r=a(7198),s=a(3751),c=a(6125);t.default=function(e){var t,m=e.data,o=e.location,d=(null===(t=m.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=m.allMarkdownRemark.nodes;return 0===p.length?l.createElement(r.Z,{location:o,title:d},l.createElement(s.Z,{title:"All posts"}),l.createElement(i.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:o,title:d},l.createElement(s.Z,{title:"All posts"}),l.createElement("div",{className:"site-bio"},l.createElement("div",null,l.createElement(c.S,{src:"../images/paynym.png",className:"footer__paynym",width:128,height:128,layout:"fixed",alt:"Paynym icon",placeholder:"blurred",__imageData:a(3853)})),l.createElement("div",null,l.createElement("header",null,l.createElement("h2",null,l.createElement(n.Link,{to:"https://github.com/wanderingmud1D9",itemProp:"url"},l.createElement("span",{itemProp:"headline"},"wanderingmud1D9")))),l.createElement("p",null,"Bitcoin, Monero, Privacy, and Open Source Software"),l.createElement("ul",{className:"site-links"},l.createElement("li",{className:"site-links__link"},l.createElement("a",{href:"https://www.podpage.com/wanderingmud1D9/"},"Podcast")),l.createElement("li",{className:"site-links__link"},l.createElement("a",{href:"https://hackaday.io/wanderingmud1D9"},"Hackaday.io")),l.createElement("li",{className:"site-links__link"},l.createElement("a",{href:"/politics"},"Politics"))))),l.createElement("ol",{style:{listStyle:"none"}},p.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",{className:"post-list-item__description"},l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},3853:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVQ4y32U2U8aQRzH+Tv63gdjYGF3Z3e5Dzl2WUAutQGtJ0UKtg/aWhKv1MbGC0VEUKiIRNjlEIm2xLc2sUkfWns8tWmf+3c0OK2ipU3mYSY7n9/3+535zQpIzExiZgJl4ORfo+UGAZDQKplDo3ABCU3hLIEyKplDCizwM5DQcCIjrJcMhbO/Ybi4XN9Q0ChcBMooqE6l1E6gDKyuVbrlpI1AGQEEFFQnrK2gOpsVNAoXiZnlpA1iMsIKsSvl5mAG7R2t0t3YirESoVHYppWIjAA1kxgDNS893oQbA28Iitv1AOlwW70D3nsuq4dEDCTGkhijlNqhhdYwBVhUaOhxDub284ViuXRY4/hyeCKskVoItGGNQBk5abvK3BwSRUx2k7t+WD45qmVSu7lMtlSq5vJcl92DiYzQ8+UBC5oDU7gFE+oWFmPRt98XX397dPYzdHS+lysUy1W/L4QjxmbP12C13ImKaYvO+SyR9b36Ovfmx73q+Vj6BMJj9x8AcSO5VuluAWuVLonQ0O0YPK3X56dn5p5MJTeT+b19jq/kubLfFyDERhJn5aStBUygDIaYbIyH54rRlWhi/Xl+a2Y/x5UqtWQq7enqBf+xfXG3Zgqjd5Iprny6FDa9e3ork8rGkztBv19N0AT6V29fP20zhhi77P3bifTywnxsfnJldc2upxW4AUhaPYxm2/AChW06r2vg8OglV60HfX7RbblYRHeoe3Tq7hudfw2WAouctImFJrfVyxcr2VxhqK/PKDWYVJ1KQGMiA9nUm1cwLCkFLCoyqAj64XCgVKnm+UpoNBCPxgqFYiwSG+kdJhANgbFk85OEhqXAirR3OGg3XyhuJ5LxaDS+vhEeHz/IF7lStVI9Xl6NjPQPyhE1LmYuWv2PMoVbtDKrk7aX+NKHz192traXZpfnJueiixu7LzIFvpxO741PPB4LhvxDw1ajHYhNJM7Cn4EFE+pnJqfXViPvzz8dVY83VyK1wt2PZ3o+69uKxnPZg41YIhQaC40GwlOzwWBQDXQAZX8BEleL5O8W1r8AAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/0d9111538f68d77d6833db13877ec3e6/bf8e1/paynym.png","srcSet":"/static/0d9111538f68d77d6833db13877ec3e6/bf8e1/paynym.png 128w,\\n/static/0d9111538f68d77d6833db13877ec3e6/acb7c/paynym.png 256w","sizes":"128px"},"sources":[{"srcSet":"/static/0d9111538f68d77d6833db13877ec3e6/6766a/paynym.webp 128w,\\n/static/0d9111538f68d77d6833db13877ec3e6/22bfc/paynym.webp 256w","type":"image/webp","sizes":"128px"}]},"width":128,"height":128}')},3771:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#383848","images":{"fallback":{"src":"/static/0d9111538f68d77d6833db13877ec3e6/e5610/paynym.png","srcSet":"/static/0d9111538f68d77d6833db13877ec3e6/e5610/paynym.png 50w,\\n/static/0d9111538f68d77d6833db13877ec3e6/e9b55/paynym.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/0d9111538f68d77d6833db13877ec3e6/3faea/paynym.webp 50w,\\n/static/0d9111538f68d77d6833db13877ec3e6/6a679/paynym.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-af23f219697403f2853e.js.map