define("regs-router",["underscore","backbone","dispatch","queryparams"],function(e,t,n){var r=t.Router.extend({routes:{"sxs/:section/:version":"toSxS","/:section/:version":"loadSection"},loadSection:function(e){var r={id:e};r.scrollToId=t.history.getHash(),n.trigger("regSection:open",e,r,"regSection")},toSxS:function(e,t,r){n.trigger("sxs:route",{regParagraph:e,docNumber:t,fromVersion:r.from_version})},backToSearchResults:function(e,t){var r={query:t.q,version:t.version};typeof t.page!="undefined"&&(r.page=t.page),n.trigger("search:submitted",r,"searchResults")},start:function(){var e=n.getURLPrefix()||"/";t.history.start({pushState:"pushState"in window.history,silent:!0,root:e})}});typeof window.history=="undefined"&&typeof window.history.pushState=="undefined"&&(r=function(){this.start=function(){},this.navigate=function(){}});var i=new r;return i});