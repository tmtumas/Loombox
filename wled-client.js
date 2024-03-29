var me = Object.create;
var W = Object.defineProperty;
var pe = Object.getOwnPropertyDescriptor;
var ge = Object.getOwnPropertyNames;
var ue = Object.getPrototypeOf
  , Se = Object.prototype.hasOwnProperty;
var E = (s,e)=>()=>(e || s((e = {
    exports: {}
}).exports, e),
e.exports);
var Ce = (s,e,t,i)=>{
    if (e && typeof e == "object" || typeof e == "function")
        for (let n of ge(e))
            !Se.call(s, n) && n !== t && W(s, n, {
                get: ()=>e[n],
                enumerable: !(i = pe(e, n)) || i.enumerable
            });
    return s
}
;
var y = (s,e,t)=>(t = s != null ? me(ue(s)) : {},
Ce(e || !s || !s.__esModule ? W(t, "default", {
    value: s,
    enumerable: !0
}) : t, s));
var q = E(()=>{}
);
var $ = E(()=>{}
);
var Q = E((Ye,Z)=>{
    var u = null;
    typeof WebSocket < "u" ? u = WebSocket : typeof MozWebSocket < "u" ? u = MozWebSocket : typeof global < "u" ? u = global.WebSocket || global.MozWebSocket : typeof window < "u" ? u = window.WebSocket || window.MozWebSocket : typeof self < "u" && (u = self.WebSocket || self.MozWebSocket);
    Z.exports = u
}
);
var _ = {
    immediate: !0,
    websocket: {
        reconnect: !0
    },
    secure: !1,
    host: ""
}
  , I = {
    state: {
        nightlight: {},
        udpSync: {},
        segments: []
    },
    info: {
        leds: {},
        wifi: {},
        fs: {}
    },
    effects: [],
    palettes: [],
    presets: {},
    deviceOptions: {},
    lightCapabilities: {},
    live: {
        leds: !1
    },
    config: {
        id: {},
        network: {},
        accessPoint: {},
        wifi: {},
        hardware: {},
        light: {},
        defaults: {},
        interfaces: {},
        overlay: {},
        timers: {},
        ota: {},
        usermods: {}
    }
};
var A = (n=>(n[n.INSTANT = 0] = "INSTANT",
n[n.FADE = 1] = "FADE",
n[n.COLOR_FADE = 2] = "COLOR_FADE",
n[n.SUNRISE = 3] = "SUNRISE",
n))(A || {})
  , v = (i=>(i[i.OFF = 0] = "OFF",
i[i.UNTIL_END = 1] = "UNTIL_END",
i[i.UNTIL_REBOOT = 2] = "UNTIL_REBOOT",
i))(v || {})
  , h = {
    DEBUG: 128,
    DISABLE_ALEXA: 64,
    DISABLE_BLYNK: 32,
    USERMOD_CRONIXIE: 16,
    DISABLE_FILESYSTEM: 8,
    DISABLE_HUESYNC: 4,
    ENABLE_ADALIGHT: 2,
    DISABLE_OTA: 1
}
  , C = {
    CCT: 4,
    WHITE: 2,
    RGB: 1
}
  , N = (n=>(n[n.NO_CONNECTION_AFTER_BOOT = 0] = "NO_CONNECTION_AFTER_BOOT",
n[n.DISCONNECTED = 1] = "DISCONNECTED",
n[n.AWLAYS = 2] = "AWLAYS",
n[n.NEVER = 3] = "NEVER",
n))(N || {})
  , T = (n=>(n[n.NONE = 0] = "NONE",
n[n.BRIGHTER = 1] = "BRIGHTER",
n[n.ACCURATE = 2] = "ACCURATE",
n[n.DUAL = 3] = "DUAL",
n))(T || {})
  , k = (r=>(r[r.GRB = 0] = "GRB",
r[r.RGB = 1] = "RGB",
r[r.BRG = 2] = "BRG",
r[r.RBG = 3] = "RBG",
r[r.BGR = 4] = "BGR",
r[r.GBR = 5] = "GBR",
r))(k || {})
  , j = (l=>(l[l.WS281x = 22] = "WS281x",
l[l.SK6812_RGBW = 30] = "SK6812_RGBW",
l[l.TM1814 = 31] = "TM1814",
l[l.KHZ400 = 24] = "KHZ400",
l[l.WS2801 = 50] = "WS2801",
l[l.APA102 = 51] = "APA102",
l[l.LPD8806 = 52] = "LPD8806",
l[l.P9813 = 53] = "P9813",
l[l.PWM_White = 41] = "PWM_White",
l[l.PWM_CCT = 42] = "PWM_CCT",
l[l.PWM_RGB = 43] = "PWM_RGB",
l[l.PWM_RGBW = 44] = "PWM_RGBW",
l[l.PWM_RGB_CCT = 45] = "PWM_RGB_CCT",
l[l.DDP_RGB_NETWORK = 80] = "DDP_RGB_NETWORK",
l))(j || {})
  , U = (d=>(d[d.DISABLED = 0] = "DISABLED",
d[d.PUSHBUTTON = 2] = "PUSHBUTTON",
d[d.PUSHBUTTON_INVERTED = 3] = "PUSHBUTTON_INVERTED",
d[d.SWITCH = 4] = "SWITCH",
d[d.PIR_SENSOR = 5] = "PIR_SENSOR",
d[d.TOUCH = 6] = "TOUCH",
d[d.ANALOG = 7] = "ANALOG",
d[d.ANALOG_INVERTED = 8] = "ANALOG_INVERTED",
d))(U || {})
  , R = (o=>(o[o.REMOTE_DISABLED = 0] = "REMOTE_DISABLED",
o[o.KEY_24_RGB = 1] = "KEY_24_RGB",
o[o.KEY_24_WITH_CT = 2] = "KEY_24_WITH_CT",
o[o.KEY_40_BLUE = 3] = "KEY_40_BLUE",
o[o.KEY_44_RGB = 4] = "KEY_44_RGB",
o[o.KEY_21_RGB = 5] = "KEY_21_RGB",
o[o.KEY_6_BLACK = 6] = "KEY_6_BLACK",
o[o.KEY_9_RED = 7] = "KEY_9_RED",
o[o.JSON_REMOTE = 8] = "JSON_REMOTE",
o))(R || {})
  , G = (n=>(n[n.LINEAR_WRAP_IF_MOVING = 0] = "LINEAR_WRAP_IF_MOVING",
n[n.LINEAR_ALWAYS_WRAP = 1] = "LINEAR_ALWAYS_WRAP",
n[n.LINEAR_NEVER_WRAP = 2] = "LINEAR_NEVER_WRAP",
n[n.NONE = 3] = "NONE",
n))(G || {})
  , F = (i=>(i[i.NONE = 0] = "NONE",
i[i.ANALOG = 1] = "ANALOG",
i[i.DIGITAL = 2] = "DIGITAL",
i))(F || {})
  , J = (a=>(a[a.DISABLED = 0] = "DISABLED",
a[a.SINGLE_RGB = 1] = "SINGLE_RGB",
a[a.SINGLE_DRGB = 2] = "SINGLE_DRGB",
a[a.EFFECT = 3] = "EFFECT",
a[a.MULTI_RGB = 4] = "MULTI_RGB",
a[a.DIMMER_MULTI_RGB = 5] = "DIMMER_MULTI_RGB",
a[a.MULTI_RGBW = 6] = "MULTI_RGBW",
a))(J || {});
var Y = y(q(), 1)
  , H = y($(), 1)
  , B = typeof AbortController > "u" ? H.default : AbortController
  , K = typeof fetch > "u" ? Y.default : fetch;
function be(s) {
    return !!s.detail
}
var L = class extends Event {
    detail;
    constructor(e, t) {
        super(e, t),
        this.detail = t?.detail
    }
}
  , f = class extends EventTarget {
    on(e, t) {
        return this.addEventListener(e, i=>{
            if (be(i))
                return t(...i.detail);
            t(i)
        }
        )
    }
    once(e, t) {
        let i = this.on(e, t);
        return this.addEventListener(e, ()=>this.off(e, t)),
        i
    }
    off(e, t) {
        return this.removeEventListener(e, t)
    }
    emit(e, ...t) {
        let i = new L(e,{
            detail: t
        });
        return this.dispatchEvent(i)
    }
}
;
var b = class extends f {
    api_endpoint;
    authority;
    constructor({secure: e, host: t, port: i}) {
        super(),
        this.authority = `${e ? "https" : "http"}://${t}${i ? ":" + i : ""}`,
        this.api_endpoint = `${this.authority}/${"json"}`
    }
    handleErrors(e) {
        if (!e.ok)
            throw this.emit("error", e),
            e;
        return e
    }
    async fetch(e, t={}) {
        let {timeout: i=5e3} = t
          , n = new B
          , c = setTimeout(()=>n.abort(), i)
          , r = await K(e, {
            ...t,
            signal: n.signal
        });
        return clearTimeout(c),
        r
    }
    async getAll(e={}) {
        let {timeout: t} = e;
        return await (await this.fetch(this.api_endpoint, {
            timeout: t
        }).then(this.handleErrors)).json()
    }
    async getPalettes(e={}) {
        let {timeout: t} = e;
        return await (await this.fetch(`${this.api_endpoint}/pal`, {
            timeout: t
        }).then(this.handleErrors)).json()
    }
    async getEffects(e={}) {
        let {timeout: t} = e;
        return await (await this.fetch(`${this.api_endpoint}/eff`, {
            timeout: t
        }).then(this.handleErrors)).json()
    }
    async getInfo(e={}) {
        let {timeout: t} = e;
        return await (await this.fetch(`${this.api_endpoint}/info`, {
            timeout: t
        }).then(this.handleErrors)).json()
    }
    async getState(e={}) {
        let {timeout: t} = e;
        return await (await this.fetch(`${this.api_endpoint}/state`, {
            timeout: t
        }).then(this.handleErrors)).json()
    }
    async getLive(e={}) {
        let {timeout: t} = e;
        return await (await this.fetch(`${this.api_endpoint}/live`, {
            timeout: t
        }).then(this.handleErrors)).json()
    }
    async getPresets(e={}) {
        let {timeout: t} = e;
        return await (await this.fetch(`${this.authority}/presets.json`, {
            timeout: t
        }).then(this.handleErrors)).json()
    }
    async getConfig(e={}) {
        let {timeout: t} = e;
        return await (await this.fetch(`${this.api_endpoint}/cfg`, {
            timeout: t
        }).then(this.handleErrors)).json()
    }
    async getPalettesDataPage(e=0, t={}) {
        let {timeout: i} = t;
        return await (await this.fetch(`${this.api_endpoint}/palx?page=${e}`, {
            timeout: i
        }).then(this.handleErrors)).json()
    }
    async updateState(e, t={}) {
        let {timeout: i} = t
          , c = await (await this.fetch(this.api_endpoint, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e),
            timeout: i
        }).then(this.handleErrors)).json();
        return e.v,
        c
    }
    async updateConfig(e, t={}) {
        let {timeout: i} = t;
        return await (await this.fetch(`${this.api_endpoint}/cfg`, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e),
            timeout: i
        }).then(this.handleErrors)).json()
    }
}
;
function z(s) {
    let {state: e, info: t} = s;
    return !!e && !!t
}
function V(s) {
    let {leds: e, n: t} = s;
    return !!e && !!t
}
function x(s) {
    return typeof s == "function"
}
function m(s, e, t, i) {
    let c = Array.isArray(s) ? [] : {};
    for (let[r,a] of Object.entries(s)) {
        let d = (t ? t + "." : "") + r, o;
        if (typeof a == "object" || Array.isArray(a)) {
            i || (i = new Map);
            let g = i.get(a);
            g ? o = g : (o = m(a, e, d, i),
            i.set(a, o))
        } else
            o = a;
        if (e) {
            let[g,S] = e(r, o, t);
            c[g] = S
        } else
            c[r] = a
    }
    return c
}
var M = s=>new Promise(e=>setTimeout(e, s));
var X = y(Q(), 1)
  , w = class extends f {
    api_endpoint;
    available = !1;
    websocket;
    reconnect = !0;
    constructor({secure: e, host: t, port: i, websocket: n}) {
        super(),
        n && typeof n == "object" && typeof n.reconnect == "boolean" && (this.reconnect = n.reconnect),
        this.api_endpoint = `${e ? "wss" : "ws"}://${t}${i ? ":" + i : ""}/${"ws"}`
    }
    disconnect() {
        this.websocket && this.websocket.readyState == this.websocket.OPEN && this.websocket.close()
    }
    connect() {
        return this.websocket && this.websocket.readyState == this.websocket.OPEN ? Promise.resolve(!0) : (this.websocket = new X.default(this.api_endpoint),
        this.websocket.binaryType = "arraybuffer",
        new Promise((e,t)=>{
            this.websocket.addEventListener("error", t),
            this.websocket.addEventListener("open", ()=>{
                this.websocket.removeEventListener("error", t),
                this.emit("open"),
                this.init(),
                e(!0)
            }
            )
        }
        ))
    }
    init() {
        this.available = !0,
        this.websocket.addEventListener("message", ({data: e})=>{
            if (e instanceof ArrayBuffer) {
                let t = new Uint8Array(e.slice(0, 2))
                  , i = String.fromCharCode(t[0])
                  , n = t[1];
                if (i == "L")
                    switch (n) {
                    case 1:
                    default:
                        let c = []
                          , r = e.slice(2);
                        for (let a = 0; a < r.byteLength / 3; a++)
                            c.push(new Uint8Array(r.slice(a, a + 3)));
                        this.emit("live:leds", c)
                    }
            } else if (typeof e == "string") {
                let t = JSON.parse(e);
                if (z(t)) {
                    let {state: i, info: n} = t;
                    this.emit("update:context", {
                        state: i,
                        info: n
                    })
                } else
                    V(t) && this.emit("live:leds", t.leds)
            }
        }
        ),
        this.websocket.addEventListener("close", e=>{
            this.emit("close", e),
            e.wasClean || this.reconnect && setTimeout(()=>this.connect(), 1e3),
            this.available = !1
        }
        ),
        this.websocket.addEventListener("error", e=>{
            this.emit("error", e)
        }
        )
    }
    send(e, t) {
        if (this.available) {
            this.websocket.send(e),
            t();
            return
        } else {
            let i = new Error("WebSocket is not available.");
            if (t)
                t(i);
            else
                throw i
        }
    }
    updateState(e) {
        return new Promise((t,i)=>{
            this.send(JSON.stringify(e), n=>{
                n && i(n),
                t(void 0)
            }
            )
        }
        )
    }
    startLEDStream() {
        return new Promise((e,t)=>{
            this.send(JSON.stringify({
                lv: !0
            }), i=>{
                i && t(i),
                e(void 0)
            }
            )
        }
        )
    }
    stopLEDStream() {
        return new Promise((e,t)=>{
            this.send(JSON.stringify({
                lv: !1
            }), i=>{
                i && t(i),
                e(void 0)
            }
            )
        }
        )
    }
}
;
var P = {};
function p(s) {
    return (e,t,i)=>{
        let n = (i ? i + "." : "") + e
          , c = Object.keys(s).find(o=>(P[o] || (P[o] = new RegExp("^" + o.replaceAll(".", "\\.").replaceAll("*", "[^_]+") + "$","m")),
        !!n.match(P[o])))
          , a = (c ? s[c] : e).split(".");
        return [a[a.length - 1] || e, t]
    }
}
function ee(s) {
    return {
        cct: !!(s & C.CCT),
        white: !!(s & C.WHITE),
        rgb: !!(s & C.RGB)
    }
}
var te = {
    ver: "version",
    vid: "buildId",
    leds: "leds",
    "leds.count": "leds.count",
    "leds.fps": "leds.fps",
    "leds.rgbw": "leds.rgbw",
    "leds.cct": "leds.cct",
    "leds.wv": "leds.whiteValueInput",
    "leds.lc": "leds.lightCapabilities",
    "leds.seglc": "leds.segmentLightCapabilities",
    "leds.pwr": "leds.currentPower",
    "leds.maxpwr": "leds.maxPower",
    "leds.maxseg": "leds.maxSegments",
    str: "syncToggleReceive",
    name: "name",
    udpport: "udpPort",
    live: "live",
    lm: "liveSource",
    lip: "liveIp",
    ws: "wsConnectedCount",
    fxcount: "effectsCount",
    palcount: "palettesCount",
    wifi: "wifi",
    "wifi.bssid": "wifi.bssid",
    "wifi.rssi": "wifi.rssi",
    "wifi.txPower": "wifi.txPower",
    "wifi.sleep": "wifi.sleep",
    "wifi.signal": "wifi.signal",
    "wifi.channel": "wifi.channel",
    fs: "fs",
    "fs.u": "fs.used",
    "fs.t": "fs.total",
    "fs.pmt": "fs.presetsModifiedTime",
    ndc: "discoveredDevicesCount",
    arch: "arch",
    core: "core",
    freeheap: "freeheap",
    uptime: "uptime",
    opt: "options",
    resetReason: "resetReason",
    resetReason0: "resetReason0",
    resetReason1: "resetReason1",
    brand: "brand",
    product: "product",
    mac: "mac"
}
  , Ee = Object.fromEntries(Object.entries(te).map(([s,e])=>[e, s]))
  , ye = p(te)
  , Ze = p(Ee);
function ie(s) {
    return m(s, ye)
}
var ne = {
    error: "error",
    on: "on",
    bri: "brightness",
    transition: "transition",
    tt: "temporaryTransition",
    ps: "presetId",
    n: "name",
    psave: "savePresetId",
    pdel: "deletePresetId",
    ib: "includeBrightness",
    sb: "segmentBounds",
    o: "overwriteState",
    ql: "label",
    pl: "playlistId",
    nl: "nightlight",
    "nl.on": "nightlight.on",
    "nl.dur": "nightlight.duration",
    "nl.mode": "nightlight.mode",
    "nl.tbri": "nightlight.targetBrightness",
    "nl.rem": "nightlight.remaining",
    udpn: "udpSync",
    "udpn.send": "udpSync.send",
    "udpn.recv": "udpSync.receive",
    "udpn.nn": "udpSync.noSync",
    lor: "liveDataOverride",
    mainseg: "mainSegmentId",
    seg: "segments",
    "seg.*.id": "segments.*.id",
    "seg.*.n": "segments.*.name",
    "seg.*.start": "segments.*.start",
    "seg.*.stop": "segments.*.stop",
    "seg.*.len": "segments.*.length",
    "seg.*.of": "segments.*.offset",
    "seg.*.grp": "segments.*.grouping",
    "seg.*.spc": "segments.*.spacing",
    "seg.*.rpt": "segments.*.repeat",
    "seg.*.frz": "segments.*.freeze",
    "seg.*.col": "segments.*.colors",
    "seg.*.cct": "segments.*.cct",
    "seg.*.fx": "segments.*.effectId",
    "seg.*.sx": "segments.*.effectSpeed",
    "seg.*.ix": "segments.*.effectIntensity",
    "seg.*.pal": "segments.*.paletteId",
    "seg.*.sel": "segments.*.selected",
    "seg.*.rev": "segments.*.reverse",
    "seg.*.on": "segments.*.on",
    "seg.*.bri": "segments.*.brightness",
    "seg.*.mi": "segments.*.mirror",
    "seg.*.lx": "segments.*.loxonePrimaryColor",
    "seg.*.ly": "segments.*.loxoneSecondaryColor",
    playlist: "playlist",
    "playlist.ps": "playlist.presets",
    "playlist.dur": "playlist.durations",
    "playlist.transition": "playlist.transition",
    "playlist.repeat": "playlist.repeat",
    "playlist.end": "playlist.end",
    v: "returnFullState",
    rb: "reboot",
    time: "time"
}
  , ve = Object.fromEntries(Object.entries(ne).map(([s,e])=>[e, s]))
  , Le = p(ne)
  , xe = p(ve);
function se(s) {
    return m(s, Le)
}
function re(s) {
    return m(s, xe)
}
var ae = {
    "*.n": "*.name",
    "*.ql": "*.label",
    "*.on": "*.on",
    "*.bri": "*.brightness",
    "*.transition": "*.transition",
    "*.mainseg": "*.mainSegment",
    "*.seg": "*.segments",
    "*.seg.*.id": "*.segments.*.id",
    "*.seg.*.start": "*.segments.*.start",
    "*.seg.*.stop": "*.segments.*.stop",
    "*.seg.*.len": "*.segments.*.length",
    "*.seg.*.grp": "*.segments.*.grouping",
    "*.seg.*.spc": "*.segments.*.spacing",
    "*.seg.*.rpt": "*.segments.*.repeat",
    "*.seg.*.frz": "*.segments.*.freeze",
    "*.seg.*.col": "*.segments.*.colors",
    "*.seg.*.fx": "*.segments.*.effectId",
    "*.seg.*.sx": "*.segments.*.effectSpeed",
    "*.seg.*.ix": "*.segments.*.effectIntensity",
    "*.seg.*.pal": "*.segments.*.paletteId",
    "*.seg.*.sel": "*.segments.*.selected",
    "*.seg.*.rev": "*.segments.*.reverse",
    "*.seg.*.on": "*.segments.*.on",
    "*.seg.*.bri": "*.segments.*.brightness",
    "*.seg.*.mi": "*.segments.*.mirror",
    "*.seg.*.lx": "*.segments.*.loxonePrimaryColor",
    "*.seg.*.ly": "*.segments.*.loxoneSecondaryColor"
}
  , Pe = Object.fromEntries(Object.entries(ae).map(([s,e])=>[e, s]))
  , Oe = p(ae)
  , Qe = p(Pe);
function oe(s) {
    return m(s, Oe)
}
function le(s) {
    return {
        debug: !!(s & h.DEBUG),
        alexa: !!(s & h.DISABLE_ALEXA),
        blynk: !!(s & h.DISABLE_BLYNK),
        cronixie: !!(s & h.USERMOD_CRONIXIE),
        filesystem: !!(s & h.DISABLE_FILESYSTEM),
        huesync: !!(s & h.DISABLE_HUESYNC),
        adalight: !(s & h.ENABLE_ADALIGHT),
        OTA: !!(s & h.DISABLE_OTA)
    }
}
var ce = {
    eth: "ethernet",
    "eth.type": "ethernet.type",
    id: "id",
    "id.mdns": "id.mdns",
    "id.name": "id.name",
    "id.inv": "id.invocationName",
    nw: "network",
    "nw.ins": "nw.instances",
    "nw.ins.*.ssid": "nw.instances.*.ssid",
    "nw.ins.*.ip": "nw.instances.*.ip",
    "nw.ins.*.gw": "nw.instances.*.gateway",
    "nw.ins.*.sn": "nw.instances.*.subnet",
    ap: "accessPoint",
    "ap.ssid": "accessPoint.ssid",
    "ap.chan": "accessPoint.channel",
    "ap.hide": "accessPoint.hide",
    "ap.behav": "accessPoint.openBehavior",
    wifi: "wifi",
    "wifi.sleep": "wifi.sleep",
    hw: "hardware",
    "hw.led": "hardware.led",
    "hw.led.maxpwr": "hardware.led.maxCurrent",
    "hw.led.ledma": "hardware.led.maxCurrentPerLED",
    "hw.led.rgbwm": "hardware.led.autoWhiteMode",
    "hw.led.cct": "hardware.led.cctCorrection",
    "hw.led.cr": "hardware.led.cctFromRGB",
    "hw.led.cb": "hardware.led.cctBlending",
    "hw.led.fps": "hardware.led.fps",
    "hw.led.ins": "hardware.led.instances",
    "hw.led.ins.*.type": "hardware.led.instances.*.type",
    "hw.led.ins.*.start": "hardware.led.instances.*.start",
    "hw.led.ins.*.len": "hardware.led.instances.*.length",
    "hw.led.ins.*.skip": "hardware.led.instances.*.skip",
    "hw.led.ins.*.order": "hardware.led.instances.*.colorOrder",
    "hw.led.ins.*.pin": "hardware.led.instances.*.pins",
    "hw.led.ins.*.ref": "hardware.led.instances.*.offRefresh",
    "hw.led.ins.*.rev": "hardware.led.instances.*.reverse",
    "hw.led.ins.*.rgbw": "hardware.led.instances.*.rgbw",
    "hw.btn": "hardware.button",
    "hw.btn.max": "hardware.button.max",
    "hw.btn.ins": "hardware.button.instances",
    "hw.btn.ins.*.type": "hardware.button.instances.*.type",
    "hw.btn.ins.*.pin": "hardware.button.instances.*.pin",
    "hw.btn.ins.*.macros": "hardware.button.instances.*.macros",
    "hw.btn.tt": "hardware.button.touchThreshold",
    "hw.btn.mqtt": "hardware.button.mqtt",
    "hw.ir": "hardware.ir",
    "hw.pin": "hardware.pin",
    "hw.type": "hardware.type",
    "hw.relay": "hardware.relay",
    "hw.relay.pin": "hardware.relay.pin",
    "hw.relay.rev": "hardware.relay.reverse",
    light: "light",
    "light.scale-bri": "light.scaleBrightness",
    "light.pal-mode": "light.paletteBlendingMode",
    "light.aseg": "light.autoSegments",
    "light.gc": "light.gammaCorrection",
    "light.gc.bri": "light.gammaCorrection.brightness",
    "light.gc.col": "light.gammaCorrection.color",
    "light.tr": "light.transition",
    "light.tr.mode": "light.transition.enabled",
    "light.tr.dur": "light.transition.duration",
    "light.tr.pal": "light.transition.palettes",
    "light.nl": "light.nightlight",
    "light.nl.mode": "light.nightlight.mode",
    "light.nl.dur": "light.nightlight.duration",
    "light.nl.tbri": "light.nightlight.targetBrightness",
    def: "defaults",
    "def.ps": "defaults.preset",
    "def.on": "defaults.on",
    "def.bri": "defaults.brightness",
    if: "interfaces",
    "if.blynk": "interfaces.blynk",
    "if.blynk.host": "interfaces.blynk.host",
    "if.blynk.port": "interfaces.blynk.port",
    "if.blynk.token": "interfaces.blynk.token",
    "if.hue": "interfaces.hue",
    "if.hue.en": "interfaces.hue.enabled",
    "if.hue.id": "interfaces.hue.id",
    "if.hue.ip": "interfaces.hue.ip",
    "if.hue.iv": "interfaces.hue.interval",
    "if.hue.recv": "interfaces.hue.receive",
    "if.hue.recv.on": "interfaces.hue.receive.on",
    "if.hue.recv.bri": "interfaces.hue.receive.brightness",
    "if.hue.recv.col": "interfaces.hue.receive.color",
    "if.live": "interfaces.live",
    "if.live.dmx": "interfaces.live.dmx",
    "if.live.dmx.addr": "interfaces.live.dmx.address",
    "if.live.dmx.mode": "interfaces.live.dmx.mode",
    "if.live.dmx.seqskip": "interfaces.live.dmx.sequenceSkip",
    "if.live.dmx.uni": "interfaces.live.dmx.universe",
    "if.live.mc": "interfaces.live.multicast",
    "if.live.port": "interfaces.live.port",
    "if.live.en": "interfaces.live.enabled",
    "if.live.maxbri": "interfaces.live.maxBrightness",
    "if.live.no-gc": "interfaces.live.noGammaCorrection",
    "if.live.offset": "interfaces.live.offset",
    "if.live.timeout": "interfaces.live.timeout",
    "if.mqtt": "interfaces.mqtt",
    "if.mqtt.en": "interfaces.mqtt.enabled",
    "if.mqtt.broker": "interfaces.mqtt.broker",
    "if.mqtt.port": "interfaces.mqtt.port",
    "if.mqtt.cid": "interfaces.mqtt.clientId",
    "if.mqtt.user": "interfaces.mqtt.user",
    "if.mqtt.topics": "interfaces.mqtt.topics",
    "if.mqtt.topics.device": "interfaces.mqtt.topics.device",
    "if.mqtt.topics.group": "interfaces.mqtt.topics.group",
    "if.nodes": "interfaces.nodes",
    "if.nodes.list": "interfaces.nodes.list",
    "if.nodes.bcast": "interfaces.nodes.broadcast",
    "if.ntp": "interfaces.ntp",
    "if.ntp.en": "interfaces.ntp.enabled",
    "if.ntp.host": "interfaces.ntp.host",
    "if.ntp.ampm": "interfaces.ntp.ampm",
    "if.ntp.tz": "interfaces.ntp.timezone",
    "if.ntp.ln": "interfaces.ntp.lon",
    "if.ntp.lt": "interfaces.ntp.lat",
    "if.ntp.offset": "interfaces.ntp.offset",
    "if.sync": "interfaces.sync",
    "if.sync.port0": "interfaces.sync.port0",
    "if.sync.port1": "interfaces.sync.port1",
    "if.sync.recv": "interfaces.sync.receive",
    "if.sync.recv.bri": "interfaces.sync.receive.brightness",
    "if.sync.recv.col": "interfaces.sync.receive.color",
    "if.sync.recv.fx": "interfaces.sync.receive.effects",
    "if.sync.recv.grp": "interfaces.sync.receive.groups",
    "if.sync.send": "interfaces.sync.send",
    "if.sync.send.btn": "interfaces.sync.send.button",
    "if.sync.send.dir": "interfaces.sync.send.direct",
    "if.sync.send.hue": "interfaces.sync.send.hue",
    "if.sync.send.macro": "interfaces.sync.send.macro",
    "if.sync.send.va": "interfaces.sync.send.alexa",
    "if.sync.send.twice": "interfaces.sync.send.twice",
    "if.sync.send.grp": "interfaces.sync.send.groups",
    "if.va": "interfaces.alexa",
    "if.va.alexa": "interfaces.alexa.enabled",
    "if.va.macros": "interfaces.alexa.macros",
    ol: "overlay",
    "ol.clock": "overlay.clock",
    "ol.cntdwn": "overlay.countdown",
    "ol.min": "overlay.min",
    "ol.max": "overlay.max",
    "ol.o12pix": "overlay.o12pix",
    "ol.o5m": "overlay.show5MinuteMarks",
    "ol.osec": "overlay.showSecondsTrail",
    timers: "timers",
    "timers.cntdwn": "timers.countdown",
    "timers.cntdwn.goal": "timers.countdown.goal",
    "timers.cntdwn.macro": "timers.countdown.macro",
    "timers.ins": "timers.instances",
    "timers.ins.*.en": "timers.instances.*.enabled",
    "timers.ins.*.hour": "timers.instances.*.hour",
    "timers.ins.*.min": "timers.instances.*.minute",
    "timers.ins.*.dow": "timers.instances.*.dayOfWeek",
    "timers.ins.*.macro": "timers.instances.*.macro",
    "timers.ins.*.start": "timers.instances.*.start",
    "timers.ins.*.start.mon": "timers.instances.*.start.month",
    "timers.ins.*.start.day": "timers.instances.*.start.day",
    "timers.ins.*.end": "timers.instances.*.end",
    "timers.ins.*.end.mon": "timers.instances.*.end.month",
    "timers.ins.*.end.day": "timers.instances.*.end.day",
    ota: "ota",
    "ota.aota": "ota.arduinoOTA",
    "ota.lock": "ota.lock",
    "ota.lock-wifi": "ota.lockWiFi",
    dmx: "dmx",
    "dmx.chan": "dmx.channel",
    "dmx.gap": "dmx.gap",
    "dmx.start": "dmx.start",
    "dmx.start-led": "dmx.startLED",
    "dmx.fixmap": "dmx.fixtureMap",
    "dmx.e131proxy": "dmx.e131Proxy",
    um: "usermods"
}
  , De = Object.fromEntries(Object.entries(ce).map(([s,e])=>[e, s]))
  , We = p(ce)
  , _e = p(De);
function de(s) {
    return m(s, We)
}
function he(s) {
    return m(s, _e)
}
var fe = class extends f {
    state;
    info;
    effects;
    palettes;
    presets;
    config;
    deviceOptions;
    lightCapabilities;
    live;
    isReady;
    options;
    get wsReadyState() {
        return this.WSAPI.websocket.readyState
    }
    JSONAPI;
    WSAPI;
    constructor(e={}) {
        super();
        let t;
        typeof e == "string" ? t = {
            host: e
        } : t = e;
        let i = Object.assign(_, t);
        this.options = i,
        Object.assign(this, I),
        this.WSAPI = new w(i),
        this.WSAPI.on("error", n=>this.emit("error", n)),
        this.WSAPI.on("close", n=>this.emit("close", n)),
        this.WSAPI.on("open", n=>this.emit("open", n)),
        this.WSAPI.on("live:leds", n=>this.emit("live:leds", n)),
        this.WSAPI.on("update:context", this.setContext.bind(this)),
        this.JSONAPI = new b(i),
        this.JSONAPI.on("error", n=>this.emit("error", n)),
        i.immediate && this.init()
    }
    async init() {
        if (this.isReady)
            return this.isReady;
        let e = this.options.websocket ? [this.refreshContext(this.options.init), this.WSAPI.connect()] : [this.refreshContext(this.options.init)]
          , t = Promise.allSettled(e);
        this.isReady = t.then(([i,n])=>n && n.status == "rejected" && i.status == "rejected" ? (this.emit("error", i.reason),
        Promise.reject(i.reason)) : (i.status == "fulfilled" && (this.emit("success", {
            transport: "http"
        }),
        this.emit("success:http")),
        n && n.status == "fulfilled" && (this.emit("success", {
            transport: "ws"
        }),
        this.emit("success:ws")),
        this.emit("ready"),
        !0))
    }
    async refreshContext(e={}) {
        let {presets: t=!0, config: i=!0} = e
          , [n,c,r] = await Promise.all([this.JSONAPI.getAll(), t ? this.JSONAPI.getPresets() : Promise.resolve({}), i ? this.JSONAPI.getConfig() : Promise.resolve({})]);
        this.setContext({
            ...n,
            presets: c,
            config: r
        })
    }
    async refreshState() {
        let e = await this.JSONAPI.getState();
        this.setContext({
            state: e
        })
    }
    async refreshInfo() {
        let e = await this.JSONAPI.getInfo();
        this.setContext({
            info: e
        })
    }
    async refreshEffects() {
        let e = await this.JSONAPI.getEffects();
        this.setContext({
            effects: e
        })
    }
    async refreshPalettes() {
        let e = await this.JSONAPI.getPalettes();
        this.setContext({
            palettes: e
        })
    }
    async refreshPresets() {
        let e = await this.JSONAPI.getPresets();
        this.setContext({
            presets: e
        })
    }
    async refreshConfig() {
        let e = await this.JSONAPI.getConfig();
        this.setContext({
            config: e
        })
    }
    setContext({state: e, info: t, effects: i, palettes: n, presets: c, config: r}) {
        let a = e ? se(e) : this.state
          , d = t ? ie(t) : this.info
          , o = i || this.effects
          , g = n || this.palettes
          , S = c ? oe(c) : this.presets
          , O = r ? de(r) : this.config
          , D = {
            state: a,
            info: d,
            effects: o,
            palettes: g,
            presets: S,
            deviceOptions: t ? le(t.opt) : this.deviceOptions,
            lightCapabilities: t ? ee(t.leds.lc) : this.lightCapabilities,
            live: this.live,
            config: O
        };
        Object.assign(this, {
            ...D
        }),
        this.emit("update:context", D),
        e && this.emit("update:state", a),
        t && this.emit("update:info", d),
        i && this.emit("update:effects", o),
        n && this.emit("update:palettes", g),
        c && this.emit("update:presets", S),
        r && this.emit("update:config", O)
    }
    async updateState(e, t) {
        let i, n;
        if (t) {
            let {transition: r, noSync: a, method: d, timeout: o} = t;
            r && (e.temporaryTransition = r),
            a && (e.udpSync = {
                ...e.udpSync || {},
                noSync: a
            }),
            d && (i = d),
            n && (n = o)
        }
        let c = re(e);
        if ((!i || i != "json") && this.WSAPI.available)
            try {
                this.emit("loading"),
                await this.WSAPI.updateState(c),
                this.emit("success", {
                    transport: "ws"
                }),
                this.emit("success:ws");
                return
            } catch (r) {
                this.emit("error", r)
            }
        if (!i || i != "ws")
            try {
                this.emit("loading");
                let r = await this.JSONAPI.updateState({
                    ...c,
                    v: !0
                }, {
                    timeout: n
                });
                return this.emit("success", {
                    transport: "http"
                }),
                this.emit("success:http"),
                this.setContext(r)
            } catch (r) {
                this.emit("error", r)
            }
        throw new Error("No transport available to handle state update.")
    }
    async updateConfig(e) {
        let t = he(e)
          , {success: i} = await this.JSONAPI.updateConfig(t);
        return i && this.refreshContext(),
        i
    }
    buildStateWithSegments(e, t) {
        let i;
        return t !== void 0 ? i = {
            segments: (Array.isArray(t) ? t : [t]).map(n=>({
                id: n,
                ...x(e) ? e(this.getSegment(n)) : e
            }))
        } : i = x(e) ? e() : e,
        i
    }
    connect() {
        return this.WSAPI.connect()
    }
    disconnect() {
        return this.WSAPI.disconnect()
    }
    async startLEDStream() {
        await this.WSAPI.startLEDStream(),
        this.live.leds = !0,
        this.emit("update:live", this.live)
    }
    async stopLEDStream() {
        await this.WSAPI.stopLEDStream(),
        this.live.leds = !1,
        this.emit("update:live", this.live)
    }
    toggleLEDStream() {
        return this.live.leds ? this.stopLEDStream() : this.startLEDStream()
    }
    reboot() {
        return this.updateState({
            reboot: !0
        })
    }
    turnOn({segmentId: e, ...t}={}) {
        return this.updateState(this.buildStateWithSegments({
            on: !0
        }, e), t)
    }
    turnOff({segmentId: e, ...t}={}) {
        return this.updateState(this.buildStateWithSegments({
            on: !1
        }, e), t)
    }
    toggle({segmentId: e, ...t}={}) {
        return this.updateState(this.buildStateWithSegments(i=>({
            on: i ? !i.on : !this.state.on
        }), e), t)
    }
    setBrightness(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            brightness: e
        }, t), i)
    }
    setColor(e, t) {
        return this.setPrimaryColor(e, t)
    }
    setPrimaryColor(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            colors: [e]
        }, t || 0), i)
    }
    setSecondaryColor(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            colors: [void 0, e]
        }, t || 0), i)
    }
    setTertiaryColor(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            colors: [void 0, void 0, e]
        }, t || 0), i)
    }
    setCCT(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            cct: e
        }, t || 0), i)
    }
    setPalette(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            paletteId: e
        }, t || 0), i)
    }
    paletteDataCache;
    async getPalettesData(e) {
        let t = {};
        if (e) {
            let {p: i} = await this.JSONAPI.getPalettesDataPage(e);
            Object.assign(t, i)
        } else if (this.paletteDataCache)
            t = this.paletteDataCache;
        else {
            let i = 1;
            for (e = 0; e <= i || e > 100; ) {
                let n = await this.JSONAPI.getPalettesDataPage(e);
                if (n != null) {
                    let {m: c, p: r} = n;
                    Object.assign(t, r),
                    i = c,
                    e++
                } else
                    await M(100)
            }
            this.paletteDataCache = t
        }
        return t
    }
    setEffect(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            effectId: e
        }, t || 0), i)
    }
    setEffectSpeed(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            effectSpeed: e
        }, t || 0), i)
    }
    setEffectIntensity(e, {segmentId: t, ...i}={}) {
        return this.updateState(this.buildStateWithSegments({
            effectIntensity: e
        }, t || 0), i)
    }
    setTransitionTime(e) {
        return this.updateState({
            transitionTime: e
        })
    }
    setMainSegmentId(e) {
        return this.updateState({
            mainSegmentId: e
        })
    }
    getSegment(e) {
        return this.state.segments[e]
    }
    createSegment(e) {
        return this.updateState({
            segments: [...this.state.segments, e]
        })
    }
    updateSegment(e, t, i) {
        return this.updateState({
            segments: [{
                id: e,
                ...t
            }]
        }, i)
    }
    deleteSegment(e) {
        return this.updateState({
            segments: [{
                id: e,
                stop: 0
            }]
        })
    }
    async setSegments(e) {
        return await this.clearSegments(),
        this.updateState({
            segments: e
        })
    }
    clearSegments() {
        return this.updateState({
            segments: this.state.segments.map(()=>({
                stop: 0
            }))
        })
    }
    setPlaylist(e) {
        return this.updateState({
            playlist: e
        })
    }
    nightlight = (()=>{
        let e = this;
        return {
            get state() {
                return e.state.nightlight
            },
            enable(t={}) {
                return typeof t == "number" && (t = {
                    duration: t
                }),
                this.state.remaining = this.state.duration,
                e.updateState({
                    nightlight: {
                        on: !0,
                        ...t
                    }
                })
            },
            disable() {
                return e.updateState({
                    nightlight: {
                        on: !1
                    }
                })
            },
            toggle() {
                return e.updateState({
                    nightlight: {
                        on: !e.state.nightlight.on
                    }
                })
            },
            setDuration(t) {
                return e.updateState({
                    nightlight: {
                        duration: t
                    }
                })
            },
            setTargetBrightness(t) {
                return e.updateState({
                    nightlight: {
                        targetBrightness: t
                    }
                })
            },
            setMode(t) {
                return e.updateState({
                    nightlight: {
                        mode: t
                    }
                })
            }
        }
    }
    )();
    ignoreLiveData(e) {
        let t = e ? 2 : 1;
        return this.updateState({
            liveDataOverride: t
        })
    }
    allowLiveData() {
        return this.updateState({
            liveDataOverride: 0
        })
    }
    enableUDPSync(e) {
        return e || (e = {
            send: !0
        },
        this.info.syncToggleReceive && (e.receive = !0)),
        this.updateState({
            udpSync: e
        })
    }
    disableUDPSync() {
        let e = {
            send: !1
        };
        return this.info.syncToggleReceive && (e.receive = !1),
        this.updateState({
            udpSync: e
        })
    }
    getPreset(e) {
        return this.presets[e]
    }
    setPreset(e) {
        return this.updateState({
            presetId: e
        })
    }
    async saveStateAsPreset(e, t) {
        t = Object.assign({
            includeBrightness: !0,
            segmentBounds: !0
        }, t),
        await this.updateState({
            savePresetId: e,
            ...t,
            time: new Date().getTime()
        }, {
            method: "json"
        })
    }
    async savePreset(e, t) {
        await this.updateState({
            savePresetId: e,
            overwriteState: !0,
            ...t
        }, {
            method: "json"
        }),
        this.presets[e] = t
    }
    async deletePreset(e) {
        await this.updateState({
            deletePresetId: e
        }),
        delete this.presets[e]
    }
}
;
export {N as WLEDAPOpenBehavior, T as WLEDAutoWhiteMode, k as WLEDBusColorOrder, j as WLEDBusType, U as WLEDButtonType, fe as WLEDClient, F as WLEDClockOverlay, J as WLEDDMXMode, R as WLEDIRRemoteType, v as WLEDLiveDataOverride, A as WLEDNightlightMode, G as WLEDPaletteBlendingMode};
