"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88767],{14650:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>c});var i=a(6254);const n={},o=(0,a(39583).A)(n,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"neo-nas-ps09b2",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#neo-nas-ps09b2"},[(0,i.Lk)("span",null,"Neo NAS-PS09B2")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"NAS-PS09B2")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=Neo"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Neo")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Human presence sensor")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"occupancy, human_motion_state, departure_delay, radar_range, radar_sensitivity, presence_sensitivity, dis_current, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-PS09B2.png",alt:"Neo NAS-PS09B2"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="human-motion-state-enum" tabindex="-1"><a class="header-anchor" href="#human-motion-state-enum"><span>Human motion state (enum)</span></a></h3><p>Human Motion State. Value can be found in the published state on the <code>human_motion_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>small</code>, <code>large</code>.</p><h3 id="departure-delay-numeric" tabindex="-1"><a class="header-anchor" href="#departure-delay-numeric"><span>Departure delay (numeric)</span></a></h3><p>Presence Time. Value can be found in the published state on the <code>departure_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;departure_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="radar-range-numeric" tabindex="-1"><a class="header-anchor" href="#radar-range-numeric"><span>Radar range (numeric)</span></a></h3><p>Motion Range Detection. Value can be found in the published state on the <code>radar_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_range&quot;: NEW_VALUE}</code>. The minimal value is <code>150</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric"><span>Radar sensitivity (numeric)</span></a></h3><p>Motion Detection Sensitivity. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>7</code>.</p><h3 id="presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#presence-sensitivity-numeric"><span>Presence sensitivity (numeric)</span></a></h3><p>Motionless Detection Sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>7</code>.</p><h3 id="current-distance-numeric" tabindex="-1"><a class="header-anchor" href="#current-distance-numeric"><span>Current distance (numeric)</span></a></h3><p>Current Distance of Detected Motion. Value can be found in the published state on the <code>dis_current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>cm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17))])}]]),c=JSON.parse('{"path":"/devices/NAS-PS09B2.html","title":"Neo NAS-PS09B2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Neo NAS-PS09B2 control via MQTT","description":"Integrate your Neo NAS-PS09B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T19:12:51.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Human motion state (enum)","slug":"human-motion-state-enum","link":"#human-motion-state-enum","children":[]},{"level":3,"title":"Departure delay (numeric)","slug":"departure-delay-numeric","link":"#departure-delay-numeric","children":[]},{"level":3,"title":"Radar range (numeric)","slug":"radar-range-numeric","link":"#radar-range-numeric","children":[]},{"level":3,"title":"Radar sensitivity (numeric)","slug":"radar-sensitivity-numeric","link":"#radar-sensitivity-numeric","children":[]},{"level":3,"title":"Presence sensitivity (numeric)","slug":"presence-sensitivity-numeric","link":"#presence-sensitivity-numeric","children":[]},{"level":3,"title":"Current distance (numeric)","slug":"current-distance-numeric","link":"#current-distance-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732562068000},"filePathRelative":"devices/NAS-PS09B2.md"}')}}]);