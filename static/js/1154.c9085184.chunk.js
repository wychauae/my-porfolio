"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[1154],{1154:(i,t,o)=>{o.d(t,{TrailMaker:()=>a});var n=o(4409),s=o(5922);const e="trail";class a extends n.sJ{constructor(i){super(i),this._delay=0}clear(){}init(){}interact(i){var t,o,s,e;const a=this.container,{interactivity:r}=a;if(!a.retina.reduceFactor)return;const l=a.actualOptions.interactivity.modes.trail;if(!l)return;const c=l.delay*n.Xu/this.container.retina.reduceFactor;if(this._delay<c&&(this._delay+=i.value),this._delay<c)return;const d=!(l.pauseOnStop&&(r.mouse.position===this._lastPosition||(null===(t=r.mouse.position)||void 0===t?void 0:t.x)===(null===(o=this._lastPosition)||void 0===o?void 0:o.x)&&(null===(s=r.mouse.position)||void 0===s?void 0:s.y)===(null===(e=this._lastPosition)||void 0===e?void 0:e.y))),u=a.interactivity.mouse.position;u?this._lastPosition={...u}:delete this._lastPosition,d&&a.particles.push(l.quantity,a.interactivity.mouse,l.particles),this._delay-=c}isEnabled(i){var t;const o=this.container,s=o.actualOptions,a=o.interactivity.mouse,r=(null!==(t=null===i||void 0===i?void 0:i.interactivity)&&void 0!==t?t:s.interactivity).events;return a.clicking&&a.inside&&!!a.position&&(0,n.hn)(e,r.onClick.mode)||a.inside&&!!a.position&&(0,n.hn)(e,r.onHover.mode)}loadModeOptions(i){i.trail||(i.trail=new s.X);for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];for(const s of o)i.trail.load(null===s||void 0===s?void 0:s.trail)}reset(){}}}}]);
//# sourceMappingURL=1154.c9085184.chunk.js.map