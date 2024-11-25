"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[74239],{35683:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>c});var a=o(6254);const d={},i=(0,o(39583).A)(d,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"tuya-zwt198-zwt100-bh",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-zwt198-zwt100-bh"},[(0,a.Lk)("span",null,"Tuya ZWT198/ZWT100-BH")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZWT198/ZWT100-BH")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Avatto wall thermostat")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"factory_reset, lock (state), sensor, climate (system_mode, preset, current_heating_setpoint, running_state, local_temperature, local_temperature_calibration), frost_protection, max_temperature_limit, deadzone_temperature, backlight_mode, working_day, schedule_weekday, schedule_holiday, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZWT198-ZWT100-BH.png",alt:"Tuya ZWT198/ZWT100-BH"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>When the thermostat is on, long press the temperature up button for 5 seconds. Now the WiFi-like icon starts flashing indicating readiness for pairing the device.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="factory-reset-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-binary"><span>Factory reset (binary)</span></a></h3><p>Full factory reset, use with caution!. Value can be found in the published state on the <code>factory_reset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset is ON, if <code>OFF</code> OFF.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum"><span>Sensor (enum)</span></a></h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>internal</code>, <code>external</code>, <code>both</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>system_mode</code>, <code>preset</code>, <code>current_heating_setpoint</code>, <code>running_state</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>auto</code>, <code>temporary_manual</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9.9</code> and the maximum value is <code>9.9</code> with a step size of <code>0.1</code>.</li></ul><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>Antifreeze function. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="max-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-limit-numeric"><span>Max temperature limit (numeric)</span></a></h3><p>Maximum upper temperature. Value can be found in the published state on the <code>max_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>90</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric"><span>Deadzone temperature (numeric)</span></a></h3><p>The delta between local_temperature (5&lt;t&lt;35)and current_heating_setpoint to trigger Heat. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="backlight-mode-enum" tabindex="-1"><a class="header-anchor" href="#backlight-mode-enum"><span>Backlight mode (enum)</span></a></h3><p>Intensity of the backlight. Value can be found in the published state on the <code>backlight_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="working-day-enum" tabindex="-1"><a class="header-anchor" href="#working-day-enum"><span>Working day (enum)</span></a></h3><p>Workday setting. Value can be found in the published state on the <code>working_day</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;working_day&quot;: NEW_VALUE}</code>. The possible values are: <code>disabled</code>, <code>6-1</code>, <code>5-2</code>, <code>7</code>.</p><h3 id="schedule-weekday-text" tabindex="-1"><a class="header-anchor" href="#schedule-weekday-text"><span>Schedule weekday (text)</span></a></h3><p>Workdays (6 times <code>hh:mm/cc.c°C</code>). Value can be found in the published state on the <code>schedule_weekday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_weekday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-holiday-text" tabindex="-1"><a class="header-anchor" href="#schedule-holiday-text"><span>Schedule holiday (text)</span></a></h3><p>Holidays (2 times <code>hh:mm/cc.c°C)</code>. Value can be found in the published state on the <code>schedule_holiday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_holiday&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',29))])}]]),c=JSON.parse('{"path":"/devices/ZWT198_ZWT100-BH.html","title":"Tuya ZWT198/ZWT100-BH control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZWT198/ZWT100-BH control via MQTT","description":"Integrate your Tuya ZWT198/ZWT100-BH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-31T20:08:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Factory reset (binary)","slug":"factory-reset-binary","link":"#factory-reset-binary","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Max temperature limit (numeric)","slug":"max-temperature-limit-numeric","link":"#max-temperature-limit-numeric","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Backlight mode (enum)","slug":"backlight-mode-enum","link":"#backlight-mode-enum","children":[]},{"level":3,"title":"Working day (enum)","slug":"working-day-enum","link":"#working-day-enum","children":[]},{"level":3,"title":"Schedule weekday (text)","slug":"schedule-weekday-text","link":"#schedule-weekday-text","children":[]},{"level":3,"title":"Schedule holiday (text)","slug":"schedule-holiday-text","link":"#schedule-holiday-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732562068000},"filePathRelative":"devices/ZWT198_ZWT100-BH.md"}')}}]);