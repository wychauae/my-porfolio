"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[1827],{1827:(e,o,n)=>{n.d(o,{WobbleUpdater:()=>d});var l=n(4409);class a{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,l.DT)(e.angle)),void 0!==e.move&&(this.move=(0,l.DT)(e.move)))}}class s{constructor(){this.distance=5,this.enable=!1,this.speed=new a}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,l.DT)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,l.Et)(e.speed))this.speed.load({angle:e.speed});else{const o=e.speed;void 0!==o.min?this.speed.load({angle:o}):this.speed.load(e.speed)}}}const t=2*Math.PI;const i=2*Math.PI;class d{constructor(e){this.container=e}init(e){var o;const n=e.options.wobble;null!==n&&void 0!==n&&n.enable?e.wobble={angle:(0,l.G0)()*i,angleSpeed:(0,l.VG)(n.speed.angle)/360,moveSpeed:(0,l.VG)(n.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,l.VG)(null!==(o=null===n||void 0===n?void 0:n.distance)&&void 0!==o?o:0)*this.container.retina.pixelRatio}isEnabled(e){var o;return!e.destroyed&&!e.spawning&&!(null===(o=e.options.wobble)||void 0===o||!o.enable)}loadOptions(e){e.wobble||(e.wobble=new s);for(var o=arguments.length,n=new Array(o>1?o-1:0),l=1;l<o;l++)n[l-1]=arguments[l];for(const a of n)e.wobble.load(null===a||void 0===a?void 0:a.wobble)}update(e,o){this.isEnabled(e)&&function(e,o){var n;const{wobble:a}=e.options,{wobble:s}=e;if(null===a||void 0===a||!a.enable||!s)return;const i=s.angleSpeed*o.factor,d=s.moveSpeed*o.factor*((null!==(n=e.retina.wobbleDistance)&&void 0!==n?n:0)*o.factor)/(l.Xu/60),b=t,{position:c}=e;s.angle+=i,s.angle>b&&(s.angle-=b),c.x+=d*Math.cos(s.angle),c.y+=d*Math.abs(Math.sin(s.angle))}(e,o)}}}}]);
//# sourceMappingURL=1827.0f0acad8.chunk.js.map