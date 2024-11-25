"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79457],{44880:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>d});var n=o(6254);const c={},i=(0,o(39583).A)(c,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"xyzroe-zigdc",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#xyzroe-zigdc"},[(0,n.Lk)("span",null,"xyzroe ZigDC")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ZigDC")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=xyzroe"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("xyzroe")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"ZigDC")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"current, voltage, power, temperature, humidity, action, cpu_temperature, switch_type, switch_actions, bind_command, uptime, interval, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZigDC.png",alt:"xyzroe ZigDC"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://xyzroe.cc/ZigDC" target="_blank" rel="noopener noreferrer">xyzroe ZigDC</a></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',3)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="current-numeric-ch1-endpoint" tabindex="-1"><a class="header-anchor" href="#current-numeric-ch1-endpoint"><span>Current (numeric, ch1 endpoint)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current_ch1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric-ch1-endpoint" tabindex="-1"><a class="header-anchor" href="#voltage-numeric-ch1-endpoint"><span>Voltage (numeric, ch1 endpoint)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage_ch1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric-ch1-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-ch1-endpoint"><span>Power (numeric, ch1 endpoint)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_ch1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric-ch2-endpoint" tabindex="-1"><a class="header-anchor" href="#current-numeric-ch2-endpoint"><span>Current (numeric, ch2 endpoint)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current_ch2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric-ch2-endpoint" tabindex="-1"><a class="header-anchor" href="#voltage-numeric-ch2-endpoint"><span>Voltage (numeric, ch2 endpoint)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage_ch2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric-ch2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-ch2-endpoint"><span>Power (numeric, ch2 endpoint)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_ch2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric-ch3-endpoint" tabindex="-1"><a class="header-anchor" href="#current-numeric-ch3-endpoint"><span>Current (numeric, ch3 endpoint)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current_ch3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric-ch3-endpoint" tabindex="-1"><a class="header-anchor" href="#voltage-numeric-ch3-endpoint"><span>Voltage (numeric, ch3 endpoint)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage_ch3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric-ch3-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-ch3-endpoint"><span>Power (numeric, ch3 endpoint)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_ch3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric-ch4-endpoint" tabindex="-1"><a class="header-anchor" href="#current-numeric-ch4-endpoint"><span>Current (numeric, ch4 endpoint)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current_ch4</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric-ch4-endpoint" tabindex="-1"><a class="header-anchor" href="#voltage-numeric-ch4-endpoint"><span>Voltage (numeric, ch4 endpoint)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage_ch4</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric-ch4-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-ch4-endpoint"><span>Power (numeric, ch4 endpoint)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_ch4</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric-ch5-endpoint" tabindex="-1"><a class="header-anchor" href="#current-numeric-ch5-endpoint"><span>Current (numeric, ch5 endpoint)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current_ch5</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric-ch5-endpoint" tabindex="-1"><a class="header-anchor" href="#voltage-numeric-ch5-endpoint"><span>Voltage (numeric, ch5 endpoint)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage_ch5</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric-ch5-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-ch5-endpoint"><span>Power (numeric, ch5 endpoint)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_ch5</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric-ch6-endpoint" tabindex="-1"><a class="header-anchor" href="#current-numeric-ch6-endpoint"><span>Current (numeric, ch6 endpoint)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current_ch6</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric-ch6-endpoint" tabindex="-1"><a class="header-anchor" href="#voltage-numeric-ch6-endpoint"><span>Voltage (numeric, ch6 endpoint)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage_ch6</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric-ch6-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-ch6-endpoint"><span>Power (numeric, ch6 endpoint)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power_ch6</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="temperature-numeric-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-l6-endpoint"><span>Temperature (numeric, l6 endpoint)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature_l6</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#humidity-numeric-l6-endpoint"><span>Humidity (numeric, l6 endpoint)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity_l6</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>triple</code>, <code>hold</code>, <code>release</code>.</p><h3 id="cpu-temperature-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#cpu-temperature-numeric-l2-endpoint"><span>CPU temperature (numeric, l2 endpoint)</span></a></h3><p>Temperature of the CPU. Value can be found in the published state on the <code>temperature_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="switch-type-enum-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-l7-endpoint"><span>Switch type (enum, l7 endpoint)</span></a></h3><p>IN1. Value can be found in the published state on the <code>switch_type_l7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_l7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_l7&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>single_click</code>, <code>multi_click</code>, <code>reset_to_defaults</code>.</p><h3 id="switch-actions-enum-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-l7-endpoint"><span>Switch actions (enum, l7 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_l7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_l7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_l7&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="bind-command-enum-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#bind-command-enum-l7-endpoint"><span>Bind command (enum, l7 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>bind_command_l7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;bind_command_l7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;bind_command_l7&quot;: NEW_VALUE}</code>. The possible values are: <code>on/off</code>, <code>toggle</code>, <code>change_level_up</code>, <code>change_level_down</code>, <code>change_level_up_with_off</code>, <code>change_level_down_with_off</code>, <code>recall_scene_0</code>, <code>recall_scene_1</code>, <code>recall_scene_2</code>, <code>recall_scene_3</code>, <code>recall_scene_4</code>, <code>recall_scene_5</code>.</p><h3 id="switch-type-enum-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-l8-endpoint"><span>Switch type (enum, l8 endpoint)</span></a></h3><p>IN2. Value can be found in the published state on the <code>switch_type_l8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_l8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_l8&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>single_click</code>, <code>multi_click</code>, <code>reset_to_defaults</code>.</p><h3 id="switch-actions-enum-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-l8-endpoint"><span>Switch actions (enum, l8 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_l8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_l8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_l8&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="bind-command-enum-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#bind-command-enum-l8-endpoint"><span>Bind command (enum, l8 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>bind_command_l8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;bind_command_l8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;bind_command_l8&quot;: NEW_VALUE}</code>. The possible values are: <code>on/off</code>, <code>toggle</code>, <code>change_level_up</code>, <code>change_level_down</code>, <code>change_level_up_with_off</code>, <code>change_level_down_with_off</code>, <code>recall_scene_0</code>, <code>recall_scene_1</code>, <code>recall_scene_2</code>, <code>recall_scene_3</code>, <code>recall_scene_4</code>, <code>recall_scene_5</code>.</p><h3 id="switch-type-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-l1-endpoint"><span>Switch type (enum, l1 endpoint)</span></a></h3><p>BTN. Value can be found in the published state on the <code>switch_type_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>single_click</code>, <code>multi_click</code>, <code>reset_to_defaults</code>.</p><h3 id="switch-actions-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-l1-endpoint"><span>Switch actions (enum, l1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="bind-command-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#bind-command-enum-l1-endpoint"><span>Bind command (enum, l1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>bind_command_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;bind_command_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;bind_command_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>on/off</code>, <code>toggle</code>, <code>change_level_up</code>, <code>change_level_down</code>, <code>change_level_up_with_off</code>, <code>change_level_down_with_off</code>, <code>recall_scene_0</code>, <code>recall_scene_1</code>, <code>recall_scene_2</code>, <code>recall_scene_3</code>, <code>recall_scene_4</code>, <code>recall_scene_5</code>.</p><h3 id="uptime-numeric" tabindex="-1"><a class="header-anchor" href="#uptime-numeric"><span>Uptime (numeric)</span></a></h3><p>Uptime. Value can be found in the published state on the <code>uptime</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>sec</code>.</p><h3 id="interval-numeric" tabindex="-1"><a class="header-anchor" href="#interval-numeric"><span>Interval (numeric)</span></a></h3><p>Reporting interval. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;interval&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>600</code>. The unit of this value is <code>sec</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',70))])}]]),d=JSON.parse('{"path":"/devices/ZigDC.html","title":"xyzroe ZigDC control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"xyzroe ZigDC control via MQTT","description":"Integrate your xyzroe ZigDC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-30T19:12:33.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Current (numeric, ch1 endpoint)","slug":"current-numeric-ch1-endpoint","link":"#current-numeric-ch1-endpoint","children":[]},{"level":3,"title":"Voltage (numeric, ch1 endpoint)","slug":"voltage-numeric-ch1-endpoint","link":"#voltage-numeric-ch1-endpoint","children":[]},{"level":3,"title":"Power (numeric, ch1 endpoint)","slug":"power-numeric-ch1-endpoint","link":"#power-numeric-ch1-endpoint","children":[]},{"level":3,"title":"Current (numeric, ch2 endpoint)","slug":"current-numeric-ch2-endpoint","link":"#current-numeric-ch2-endpoint","children":[]},{"level":3,"title":"Voltage (numeric, ch2 endpoint)","slug":"voltage-numeric-ch2-endpoint","link":"#voltage-numeric-ch2-endpoint","children":[]},{"level":3,"title":"Power (numeric, ch2 endpoint)","slug":"power-numeric-ch2-endpoint","link":"#power-numeric-ch2-endpoint","children":[]},{"level":3,"title":"Current (numeric, ch3 endpoint)","slug":"current-numeric-ch3-endpoint","link":"#current-numeric-ch3-endpoint","children":[]},{"level":3,"title":"Voltage (numeric, ch3 endpoint)","slug":"voltage-numeric-ch3-endpoint","link":"#voltage-numeric-ch3-endpoint","children":[]},{"level":3,"title":"Power (numeric, ch3 endpoint)","slug":"power-numeric-ch3-endpoint","link":"#power-numeric-ch3-endpoint","children":[]},{"level":3,"title":"Current (numeric, ch4 endpoint)","slug":"current-numeric-ch4-endpoint","link":"#current-numeric-ch4-endpoint","children":[]},{"level":3,"title":"Voltage (numeric, ch4 endpoint)","slug":"voltage-numeric-ch4-endpoint","link":"#voltage-numeric-ch4-endpoint","children":[]},{"level":3,"title":"Power (numeric, ch4 endpoint)","slug":"power-numeric-ch4-endpoint","link":"#power-numeric-ch4-endpoint","children":[]},{"level":3,"title":"Current (numeric, ch5 endpoint)","slug":"current-numeric-ch5-endpoint","link":"#current-numeric-ch5-endpoint","children":[]},{"level":3,"title":"Voltage (numeric, ch5 endpoint)","slug":"voltage-numeric-ch5-endpoint","link":"#voltage-numeric-ch5-endpoint","children":[]},{"level":3,"title":"Power (numeric, ch5 endpoint)","slug":"power-numeric-ch5-endpoint","link":"#power-numeric-ch5-endpoint","children":[]},{"level":3,"title":"Current (numeric, ch6 endpoint)","slug":"current-numeric-ch6-endpoint","link":"#current-numeric-ch6-endpoint","children":[]},{"level":3,"title":"Voltage (numeric, ch6 endpoint)","slug":"voltage-numeric-ch6-endpoint","link":"#voltage-numeric-ch6-endpoint","children":[]},{"level":3,"title":"Power (numeric, ch6 endpoint)","slug":"power-numeric-ch6-endpoint","link":"#power-numeric-ch6-endpoint","children":[]},{"level":3,"title":"Temperature (numeric, l6 endpoint)","slug":"temperature-numeric-l6-endpoint","link":"#temperature-numeric-l6-endpoint","children":[]},{"level":3,"title":"Humidity (numeric, l6 endpoint)","slug":"humidity-numeric-l6-endpoint","link":"#humidity-numeric-l6-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"CPU temperature (numeric, l2 endpoint)","slug":"cpu-temperature-numeric-l2-endpoint","link":"#cpu-temperature-numeric-l2-endpoint","children":[]},{"level":3,"title":"Switch type (enum, l7 endpoint)","slug":"switch-type-enum-l7-endpoint","link":"#switch-type-enum-l7-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, l7 endpoint)","slug":"switch-actions-enum-l7-endpoint","link":"#switch-actions-enum-l7-endpoint","children":[]},{"level":3,"title":"Bind command (enum, l7 endpoint)","slug":"bind-command-enum-l7-endpoint","link":"#bind-command-enum-l7-endpoint","children":[]},{"level":3,"title":"Switch type (enum, l8 endpoint)","slug":"switch-type-enum-l8-endpoint","link":"#switch-type-enum-l8-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, l8 endpoint)","slug":"switch-actions-enum-l8-endpoint","link":"#switch-actions-enum-l8-endpoint","children":[]},{"level":3,"title":"Bind command (enum, l8 endpoint)","slug":"bind-command-enum-l8-endpoint","link":"#bind-command-enum-l8-endpoint","children":[]},{"level":3,"title":"Switch type (enum, l1 endpoint)","slug":"switch-type-enum-l1-endpoint","link":"#switch-type-enum-l1-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, l1 endpoint)","slug":"switch-actions-enum-l1-endpoint","link":"#switch-actions-enum-l1-endpoint","children":[]},{"level":3,"title":"Bind command (enum, l1 endpoint)","slug":"bind-command-enum-l1-endpoint","link":"#bind-command-enum-l1-endpoint","children":[]},{"level":3,"title":"Uptime (numeric)","slug":"uptime-numeric","link":"#uptime-numeric","children":[]},{"level":3,"title":"Interval (numeric)","slug":"interval-numeric","link":"#interval-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732562068000},"filePathRelative":"devices/ZigDC.md"}')}}]);