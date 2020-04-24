(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{103:function(e,a,o){e.exports=o(243)},108:function(e,a,o){},109:function(e,a,o){},111:function(e,a,o){},205:function(e,a,o){},242:function(e,a,o){},243:function(e,a,o){"use strict";o.r(a);var n=o(0),l=o.n(n),t=o(12),c=o.n(t),d=(o(108),o(21)),r=o(22),i=o(25),h=o(24),p=(o(109),function(e){Object(i.a)(o,e);var a=Object(h.a)(o);function o(){return Object(d.a)(this,o),a.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"header"},"Covid-19 Tracker"))}}]),o}(n.Component)),b=o(61),s=o.n(b),u=o(85),m=o(47),g=o(280),v=o(281),f=(o(111),o(86)),S=(o(205),function(e){Object(i.a)(o,e);var a=Object(h.a)(o);function o(e){var n;return Object(d.a)(this,o),(n=a.call(this,e)).state={chartData:{}},n}return Object(r.a)(o,[{key:"componentDidMount",value:function(){console.log(this.props);var e=[this.props.confirmed,this.props.dead,this.props.recovered],a={labels:["Confirmed","Deaths","Recovered"],datasets:[{data:[].concat(e),backgroundColor:["rgba(173, 216, 230, 1)","rgba(240, 128, 128, 1)","rgba(144, 238, 144, 1)"]}]};this.setState({chartData:a})}},{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{className:"PieChartWrapper"},l.a.createElement(f.a,{className:"chart",data:this.state.chartData,options:{maintainAspectRatio:!0,title:{display:!0,text:"Case Breakdown",fontSize:20},legend:{display:!1}},width:550,height:150}),l.a.createElement("br",null))}}]),o}(n.Component)),E=function(e){Object(i.a)(o,e);var a=Object(h.a)(o);function o(e){var n;return Object(d.a)(this,o),(n=a.call(this,e)).state={},n}return Object(r.a)(o,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"headerCountry"},"Details for: ",this.props.country||"India"),l.a.createElement("div",{className:"main-wrapper"},l.a.createElement("div",{className:"Confirmed"},l.a.createElement("h2",{className:"fontSize"},"Confirmed number of cases in ",this.props.country,": ",this.props.confirmed," ")),l.a.createElement("div",{className:"Deaths"},l.a.createElement("h2",{className:"fontSize"},"Confirmed number of deaths in ",this.props.country,": ",this.props.dead)),l.a.createElement("div",{className:"Recovered"},l.a.createElement("h2",{className:"fontSize"},"Confirmed number of recovered patients in ",this.props.country,": ",this.props.recovered))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(S,{dead:this.props.dead,recovered:this.props.recovered,confirmed:this.props.confirmed})),l.a.createElement("h4",{className:"update"},"Last Updated at: ",this.props.updatedAt))}}]),o}(n.Component),C=o(88),M=(o(242),function(e){Object(i.a)(o,e);var a=Object(h.a)(o);function o(e){var n;return Object(d.a)(this,o),(n=a.call(this,e)).state={fetching:!1,country:null,dead:null,recovered:null,confirmed:null,updatedAt:null},n.getDetails=n.getDetails.bind(Object(m.a)(n)),n}return Object(r.a)(o,[{key:"componentDidMount",value:function(){this.getDetails()}},{key:"getDetails",value:function(){var e=Object(u.a)(s.a.mark((function e(a){var o,n,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a),o="https://covid19.mathdro.id/api/countries",this.setState({fetching:!0}),null==a){e.next=9;break}return e.next=6,fetch(o+"/"+a);case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,fetch(o+"/India");case 11:n=e.sent;case 12:return e.next=14,n.json();case 14:l=e.sent,console.log(l),this.setState({fetching:!1,country:a,dead:l.deaths.value,recovered:l.recovered.value,confirmed:l.confirmed.value,updatedAt:l.lastUpdate});case 17:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return!0===this.state.fetching?l.a.createElement("div",null,l.a.createElement(C.SolarSystemLoading,null)):l.a.createElement("div",{className:"mainwrapper"},l.a.createElement(v.a,{className:"combo-box",options:y,getOptionLabel:function(e){return e.label},style:{width:300},renderInput:function(e){return l.a.createElement(g.a,Object.assign({},e,{label:"Enter a Country",variant:"outlined"}))},onChange:function(a,o){e.getDetails(o.label)}}),l.a.createElement(E,{country:this.state.country,dead:this.state.dead,recovered:this.state.recovered,confirmed:this.state.confirmed,updatedAt:this.state.updatedAt}))}}]),o}(n.Component)),y=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AR",label:"Argentina",phone:"54"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61",suggested:!0},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1",suggested:!0},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CY",label:"Cyprus",phone:"357"},{code:"DE",label:"Germany",phone:"49",suggested:!0},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FR",label:"France",phone:"33",suggested:!0},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GH",label:"Ghana",phone:"233"},{code:"GL",label:"Greenland",phone:"299"},{code:"GN",label:"Guinea",phone:"224"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IN",label:"India",phone:"91"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81",suggested:!0},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MG",label:"Madagascar",phone:"261"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NE",label:"Niger",phone:"227"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PT",label:"Portugal",phone:"351"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RO",label:"Romania",phone:"40"},{code:"RU",label:"Russian",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SY",label:"Syria",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TD",label:"Chad",phone:"235"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TW",label:"Taiwan",phone:"886"},{code:"TZ",label:"Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"Usa",phone:"1",suggested:!0},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VN",label:"Vietnam",phone:"84"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}],A=M;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement("div",{className:"bg"},l.a.createElement(p,null),l.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.c0e7c8d4.chunk.js.map