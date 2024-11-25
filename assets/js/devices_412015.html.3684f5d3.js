"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[44295],{55766:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>s,data:()=>l});var i=n(6254);const t={},s=(0,n(39583).A)(t,[["render",function(e,a){const n=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a[11]||(a[11]=(0,i.Lk)("h1",{id:"legrand-412015",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#legrand-412015"},[(0,i.Lk)("span",null,"Legrand 412015")])],-1)),(0,i.Lk)("table",null,[a[6]||(a[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[a[2]||(a[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"412015")],-1)),(0,i.Lk)("tr",null,[a[1]||(a[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(n,{to:"/supported-devices/#v=Legrand"},{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.eW)("Legrand")]))),_:1})])]),a[3]||(a[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"DIN power consumption module")],-1)),a[4]||(a[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"power, power_apparent, power_alarm_active, power_alarm, linkquality")],-1)),a[5]||(a[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/412015.png",alt:"Legrand 412015"})])],-1))])]),a[12]||(a[12]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="model-numbers" tabindex="-1"><a class="header-anchor" href="#model-numbers"><span>Model numbers</span></a></h3><p>In Legrand, model number depends on the country and the colour of the devices, for instance:</p><ul><li>French models are branded as Céliane with Netatmo, whereas Spanish models are branded as Legrand Valena Next. However, this device has no colour options, so there is only one model: &quot;412015&quot; or &quot;4 120 15&quot;</li></ul><p>Other brand names depending on the country:</p><ul><li>Availability for Céliane™ with Netatmo → France and Overseas territories, Greece, Poland, Hungary, Tunisia, Morocco, Ivory Coast, Czech Republic, Russia, Mauritius</li><li>Availability for Dooxie™ with Netatmo → France and Overseas territories</li><li>Availability for Mosaic™ with Netatmo → France and Overseas territories, Ivory Coast</li><li>Availability for Living Now™ with Netatmo → Italy, Belgium, Greece, Portugal, Lebanon, Israel, Chile, Peru, Mexico</li><li>Availability for Valena Allure™ with Netatmo → Greece, Germany, Austria, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Russia</li><li>Availability for Valena Life™ with Netatmo → Greece, Germany, Austria, Portugal, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Lituania, Russia</li><li>Availability for Valena Next™ with Netatmo → Spain, Belgium</li><li>Availability for Arteor™ with Netatmo → Australia, New Zealand, India, Malaysia, Lebanon, Mauritius, South Africa</li><li>Availability for Plexo™ with Netatmo → France and Overseas territories, Spain, Belgium</li><li>Availability for Modul&#39;Up™ with Netatmo → France and Overseas territories</li></ul><h3 id="force-read-power" tabindex="-1"><a class="header-anchor" href="#force-read-power"><span>Force read power</span></a></h3><ul><li><code>power</code>: Asks the device for the current active power.</li></ul><p>Example of MQTT message payload to ask for the active power. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/get</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string">&quot;power&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="power-alarm-configuration" tabindex="-1"><a class="header-anchor" href="#power-alarm-configuration"><span>Power Alarm Configuration</span></a></h3><ul><li><code>power_alarm</code>: enables or disables the power alarm, and sets the value: <code>DISABLE</code> (default) / <code>integer</code> (in kWh)</li></ul><p>Example of MQTT message payload to disable the power alarm. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;power_alarm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DISABLE&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example of MQTT message payload to enable the power alarm at 3.3 kWh. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;power_alarm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3300&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When it reaches that value, the <code>power_alarm_active</code> binary_sensor will change to <code>true</code>.</p><h3 id="identify" tabindex="-1"><a class="header-anchor" href="#identify"><span>Identify</span></a></h3><p>Helps to identify the device using the LED.</p><ul><li><p><code>identify[&#39;effect&#39;]</code>: only works for blink3 &amp; fixed in <code>effect</code>. Values:</p><ul><li><code>blink3</code></li><li><code>fixed</code></li><li><code>blinkgreen</code></li><li><code>blinkblue</code></li></ul></li><li><p><code>identify[&#39;color&#39;]</code>: only works for blink3 &amp; fixed in <code>effect</code>. Values:</p><ul><li><code>default</code></li><li><code>red</code></li><li><code>green</code></li><li><code>blue</code></li><li><code>lightblue</code></li><li><code>yellow</code></li><li><code>pink</code></li><li><code>white</code></li></ul></li></ul><p>Example of MQTT message payload to Identify the device. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;identify&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blink3&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',23)),(0,i.Lk)("p",null,[a[8]||(a[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>a[7]||(a[7]=[(0,i.eW)("OTA updates")]))),_:1}),a[9]||(a[9]=(0,i.eW)("."))]),a[13]||(a[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>a[10]||(a[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),a[14]||(a[14]=(0,i.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>identity_effect</code>: Defines the identification effect to simplify the device identification. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">identity_effect</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">effect</span><span class="token punctuation">:</span> blink 3 <span class="token comment"># allowed: &#39;blink 3&#39;, &#39;fixed&#39;, &#39;blink green&#39;, &#39;blink blue&#39;</span></span>\n<span class="line">  <span class="token key atrule">color</span><span class="token punctuation">:</span> red <span class="token comment"># allowed: &#39;default&#39;, &#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;lightblue&#39;, &#39;yellow&#39;, &#39;pink&#39;, &#39;white&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-apparent-numeric" tabindex="-1"><a class="header-anchor" href="#power-apparent-numeric"><span>Power apparent (numeric)</span></a></h3><p>Instantaneous measured apparent power. Value can be found in the published state on the <code>power_apparent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VA</code>.</p><h3 id="power-alarm-active-binary" tabindex="-1"><a class="header-anchor" href="#power-alarm-active-binary"><span>Power alarm active (binary)</span></a></h3><p>Value can be found in the published state on the <code>power_alarm_active</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> power alarm active is ON, if <code>false</code> OFF.</p><h3 id="power-alarm-binary" tabindex="-1"><a class="header-anchor" href="#power-alarm-binary"><span>Power alarm (binary)</span></a></h3><p>Enable/disable the power alarm. Value can be found in the published state on the <code>power_alarm</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_alarm&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power alarm is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13))])}]]),l=JSON.parse('{"path":"/devices/412015.html","title":"Legrand 412015 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 412015 control via MQTT","description":"Integrate your Legrand 412015 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-29T17:33:31.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Model numbers","slug":"model-numbers","link":"#model-numbers","children":[]},{"level":3,"title":"Force read power","slug":"force-read-power","link":"#force-read-power","children":[]},{"level":3,"title":"Power Alarm Configuration","slug":"power-alarm-configuration","link":"#power-alarm-configuration","children":[]},{"level":3,"title":"Identify","slug":"identify","link":"#identify","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Power apparent (numeric)","slug":"power-apparent-numeric","link":"#power-apparent-numeric","children":[]},{"level":3,"title":"Power alarm active (binary)","slug":"power-alarm-active-binary","link":"#power-alarm-active-binary","children":[]},{"level":3,"title":"Power alarm (binary)","slug":"power-alarm-binary","link":"#power-alarm-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732562068000},"filePathRelative":"devices/412015.md"}')}}]);