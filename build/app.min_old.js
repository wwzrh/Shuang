"use strict";

function _toConsumableArray(b) {
	return _arrayWithoutHoles(b) || _iterableToArray(b) || _nonIterableSpread()
}

function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(b) {
	if (Symbol.iterator in Object(b) || "[object Arguments]" === Object.prototype.toString.call(b)) return Array.from(b)
}

function _arrayWithoutHoles(b) {
	if (Array.isArray(b)) {
		for (var c = 0, d = Array(b.length); c < b.length; c++) d[c] = b[c];
		return d
	}
}

function _classCallCheck(b, c) {
	if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(b, c) {
	for (var d, e = 0; e < c.length; e++) d = c[e], d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(b, d.key, d)
}

function _createClass(b, c, d) {
	return c && _defineProperties(b.prototype, c), d && _defineProperties(b, d), b
}

function _slicedToArray(b, c) {
	return _arrayWithHoles(b) || _iterableToArrayLimit(b, c) || _nonIterableRest()
}

function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(b, c) {
	if (Symbol.iterator in Object(b) || "[object Arguments]" === Object.prototype.toString.call(b)) {
		var d = [],
			e = !0,
			f = !1,
			g = void 0;
		try {
			for (var h, i = b[Symbol.iterator](); !(e = (h = i.next()).done) && (d.push(h.value), !(c && d.length === c)); e = !0);
		} catch (b) {
			f = !0, g = b
		} finally {
			try {
				e || null == i["return"] || i["return"]()
			} finally {
				if (f) throw g
			}
		}
		return d
	}
}

function _arrayWithHoles(b) {
	if (Array.isArray(b)) return b
}
var Shuang = {
		resource: {
			dict: {},
			schemeList: {},
			scheme: {},
			emoji: {
				right: "\u2705",
				wrong: "\u274E"
			}
		},
		core: {
			model: {},
			current: {},
			order: {
				shengIndex: 0,
				yunIndex: 0
			},
			history: []
		},
		app: {
			setting: {
				config: {},
				reload: function reload() {}
			},
			staticJS: 0,
			modeList: [],
			action: {}
		}
	},
	$ = document.querySelector.bind(document);

function importJS() {
	var b = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "",
		c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : function () {
			Shuang.app.staticJS++
		};
	b = "build/".concat(b, ".min.js");
	var d = document.createElement("script");
	Object.assign(d, {
		src: b,
		onload: c
	}), document.body.appendChild(d)
}
Shuang.resource.dict = {
	"": {
		a: "\u554A",
		ai: "\u7231",
		an: "\u5B89",
		ang: "\u6602",
		ao: "\u5965",
		e: "\u9E45",
		ei: ["\u8BF6"],
		en: "\u55EF",
		er: "\u8033",
		o: "\u54E6",
		ou: "\u6B27"
	},
	b: {
		a: "\u7238",
		ai: "\u767D",
		an: "\u73ED",
		ang: "\u5E2E",
		ao: "\u5305",
		ei: "\u88AB",
		en: "\u672C",
		eng: "\u5D29",
		i: "\u5FC5",
		ian: "\u53D8",
		iao: "\u8868",
		ie: "\u522B",
		in: "\u5BBE",
		ing: "\u51B0",
		o: "\u64AD",
		u: "\u4E0D"
	},
	c: {
		a: "\u64E6",
		ai: "\u5F69",
		an: "\u9910",
		ang: "\u82CD",
		ao: "\u8349",
		e: "\u6D4B",
		en: ["\u5C91"],
		eng: "\u5C42",
		i: "\u8BCD",
		ong: "\u4ECE",
		ou: "\u51D1",
		u: "\u7C97",
		uan: "\u7A9C",
		ui: "\u50AC",
		un: "\u6751",
		uo: "\u9519"
	},
	d: {
		a: "\u5927",
		ai: "\u4EE3",
		an: "\u4F46",
		ang: "\u5F53",
		ao: "\u5230",
		e: "\u5FB7",
		ei: ["\u5F97"],
		eng: "\u7B49",
		i: "\u5E1D",
		ia: ["\u55F2"],
		ian: "\u70B9",
		iao: "\u9493",
		ie: "\u53E0",
		ing: "\u9876",
		iu: "\u4E22",
		ong: "\u4E1C",
		ou: "\u6597",
		u: "\u8BFB",
		uan: "\u77ED",
		ui: "\u5BF9",
		un: "\u987F",
		uo: "\u591A"
	},
	f: {
		a: "\u6CD5",
		an: "\u7FFB",
		ang: "\u65B9",
		ei: "\u98DE",
		en: "\u5206",
		eng: "\u98CE",
		o: "\u4F5B",
		ou: ["\u5426"],
		u: "\u670D"
	},
	g: {
		a: ["\u65EE"],
		ai: "\u8BE5",
		an: "\u5E72",
		ang: "\u521A",
		ao: "\u9AD8",
		e: "\u4E2A",
		ei: ["\u7ED9"],
		en: "\u8DDF",
		eng: "\u66F4",
		ong: "\u516C",
		ou: "\u72D7",
		u: "\u8C37",
		ua: "\u74DC",
		uai: "\u602A",
		uan: "\u5173",
		uang: "\u5149",
		ui: "\u9B3C",
		un: "\u6EDA",
		uo: "\u56FD"
	},
	h: {
		a: "\u54C8",
		ai: "\u6D77",
		an: "\u6C49",
		ang: "\u676D",
		ao: "\u597D",
		e: "\u548C",
		ei: "\u9ED1",
		en: "\u5F88",
		eng: "\u6A2A",
		ong: "\u7EA2",
		ou: "\u7334",
		u: "\u80E1",
		ua: "\u534E",
		uai: "\u574F",
		uan: "\u6B22",
		uang: "\u9EC4",
		ui: "\u7070",
		un: "\u660F",
		uo: "\u706B"
	},
	j: {
		i: "\u673A",
		ia: "\u5BB6",
		ian: "\u95F4",
		iang: "\u6C5F",
		iao: "\u4EA4",
		ie: "\u6770",
		in: "\u91D1",
		ing: "\u4EAC",
		iong: "\u7A98",
		iu: "\u65E7",
		u: "\u5C45",
		uan: "\u5377",
		ue: "\u7EDD",
		un: "\u519B"
	},
	k: {
		a: ["\u5361"],
		ai: "\u5F00",
		an: "\u770B",
		ang: "\u5EB7",
		ao: "\u9760",
		e: "\u79D1",
		en: "\u80AF",
		eng: "\u5751",
		ong: "\u7A7A",
		ou: "\u53E3",
		u: "\u54ED",
		ua: "\u5938",
		uai: "\u5FEB",
		uan: "\u5BBD",
		uang: "\u6846",
		ui: "\u4E8F",
		un: "\u56F0",
		uo: "\u9614"
	},
	l: {
		a: "\u62C9",
		ai: "\u6765",
		an: "\u84DD",
		ang: "\u72FC",
		ao: "\u8001",
		e: ["\u4E50"],
		ei: "\u7D2F",
		eng: "\u51B7",
		i: "\u91CC",
		ia: ["\u4FE9"],
		ian: "\u8FDE",
		iang: "\u51C9",
		iao: "\u804A",
		ie: "\u5217",
		in: "\u6797",
		ing: "\u9886",
		iu: "\u5218",
		o: "\u54AF",
		ong: "\u9F99",
		ou: "\u697C",
		u: "\u8DEF",
		uan: "\u4E71",
		un: "\u8F6E",
		uo: "\u7F57",
		v: "\u7EFF",
		ve: "\u7565"
	},
	m: {
		a: "\u9A6C",
		ai: "\u4E70",
		an: "\u6EE1",
		ang: "\u5FD9",
		ao: "\u732B",
		e: "\u4E48",
		ei: "\u6CA1",
		en: "\u95E8",
		eng: "\u68A6",
		i: "\u7C73",
		ian: "\u9762",
		iao: "\u79D2",
		ie: "\u706D",
		in: "\u6C11",
		ing: "\u660E",
		iu: "\u8C2C",
		o: "\u9B54",
		ou: "\u67D0",
		u: "\u6728"
	},
	n: {
		a: "\u62FF",
		ai: "\u4E43",
		an: "\u5357",
		ang: "\u56CA",
		ao: "\u8111",
		e: ["\u5462"],
		ei: "\u5185",
		en: "\u5AE9",
		eng: "\u80FD",
		i: "\u4F60",
		ian: "\u5E74",
		iang: "\u5A18",
		iao: "\u9E1F",
		ie: "\u8042",
		in: "\u60A8",
		ing: "\u5B81",
		iu: "\u725B",
		ong: "\u519C",
		u: "\u52AA",
		uan: "\u6696",
		uo: "\u632A",
		v: "\u5973",
		ve: "\u8650"
	},
	p: {
		a: "\u722C",
		ai: "\u724C",
		an: "\u6F58",
		ang: "\u80D6",
		ao: "\u70AE",
		ei: "\u914D",
		en: "\u55B7",
		eng: "\u9E4F",
		i: "\u76AE",
		ian: "\u7247",
		iao: "\u98D8",
		ie: "\u6487",
		in: "\u62FC",
		ing: "\u51ED",
		o: "\u7834",
		ou: "\u5256",
		u: "\u666E"
	},
	q: {
		i: "\u9F50",
		ia: "\u6D3D",
		ian: "\u524D",
		iang: "\u5899",
		iao: "\u6865",
		ie: "\u4E14",
		in: "\u7434",
		ing: "\u8F7B",
		iong: "\u7A77",
		iu: "\u79CB",
		u: "\u53BB",
		uan: "\u5168",
		ue: "\u786E",
		un: "\u7FA4"
	},
	r: {
		an: "\u7136",
		ang: "\u8BA9",
		ao: "\u7ED5",
		e: "\u70ED",
		en: "\u4EC1",
		eng: "\u4ECD",
		i: "\u65E5",
		ong: "\u5BB9",
		ou: "\u8089",
		u: "\u5982",
		uan: "\u8F6F",
		ui: "\u777F",
		un: "\u6DA6",
		uo: "\u82E5"
	},
	s: {
		a: "\u8428",
		ai: "\u8D5B",
		an: "\u4F1E",
		ang: "\u6851",
		ao: "\u626B",
		e: "\u8272",
		en: "\u68EE",
		eng: "\u50E7",
		i: "\u53F8",
		ong: "\u677E",
		ou: "\u641C",
		u: "\u82CF",
		uan: "\u9178",
		ui: "\u5C81",
		un: "\u5B59",
		uo: "\u9501"
	},
	t: {
		a: "\u5B83",
		ai: "\u53F0",
		an: "\u8C08",
		ang: "\u6C64",
		ao: "\u6D9B",
		e: "\u7279",
		eng: "\u75BC",
		i: "\u4F53",
		ian: "\u5929",
		iao: "\u6761",
		ie: "\u8D34",
		ing: "\u542C",
		ong: "\u901A",
		ou: "\u5934",
		u: "\u56FE",
		uan: "\u56E2",
		ui: "\u63A8",
		un: "\u541E",
		uo: "\u62D6"
	},
	w: {
		a: "\u54C7",
		ai: "\u5916",
		an: "\u4E07",
		ang: "\u738B",
		ei: "\u4E3A",
		en: "\u6587",
		eng: "\u7FC1",
		o: "\u6211",
		u: "\u65E0"
	},
	x: {
		i: "\u559C",
		ia: "\u590F",
		ian: "\u73B0",
		iang: "\u5411",
		iao: "\u5C0F",
		ie: "\u8C22",
		in: "\u5FC3",
		ing: "\u661F",
		iong: "\u5144",
		iu: "\u79C0",
		u: "\u5F90",
		uan: "\u9009",
		ue: "\u5B66",
		un: "\u5BFB"
	},
	y: {
		a: "\u538B",
		an: "\u71D5",
		ang: "\u7F8A",
		ao: "\u836F",
		e: "\u9875",
		i: "\u4EE5",
		in: "\u97F3",
		ing: "\u8D62",
		o: "\u54DF",
		ong: "\u7528",
		ou: "\u6709",
		u: "\u4E0E",
		uan: "\u5143",
		ue: "\u6708",
		un: "\u4E91"
	},
	z: {
		a: "\u548B",
		ai: "\u5728",
		an: "\u8D5E",
		ang: "\u810F",
		ao: "\u9020",
		e: "\u5219",
		ei: "\u8D3C",
		en: "\u600E",
		eng: "\u589E",
		i: "\u5B50",
		ong: "\u5B97",
		ou: "\u8D70",
		u: "\u7EC4",
		uan: "\u94BB",
		ui: "\u6700",
		un: "\u9075",
		uo: "\u505A"
	},
	ch: {
		a: "\u8336",
		ai: "\u62C6",
		an: "\u4EA7",
		ang: "\u573A",
		ao: "\u8D85",
		e: "\u8F66",
		en: "\u9648",
		eng: "\u6210",
		i: "\u5403",
		ong: "\u5145",
		ou: "\u4E11",
		u: "\u51FA",
		ua: ["\u6B3B"],
		uai: "\u8E39",
		uan: "\u7A7F",
		uang: "\u5E8A",
		ui: "\u5439",
		un: "\u7EAF",
		uo: "\u6233"
	},
	sh: {
		a: "\u6C99",
		ai: "\u6652",
		an: "\u5C71",
		ang: "\u4E0A",
		ao: "\u5C11",
		e: "\u8BBE",
		en: "\u6DF1",
		eng: "\u751F",
		i: "\u662F",
		ou: "\u6536",
		u: "\u4E66",
		ua: "\u5237",
		uai: "\u5E05",
		uan: "\u6813",
		uang: "\u53CC",
		ui: "\u6C34",
		un: "\u987A",
		uo: "\u8BF4"
	},
	zh: {
		a: "\u70B8",
		ai: "\u6458",
		an: "\u5360",
		ang: "\u5F20",
		ao: "\u8D75",
		e: "\u8005",
		en: "\u771F",
		eng: "\u6B63",
		i: "\u4E4B",
		ong: "\u4E2D",
		ou: "\u5468",
		u: "\u4E3B",
		ua: "\u722A",
		uai: "\u62FD",
		uan: "\u4E13",
		uang: "\u88C5",
		ui: "\u8FFD",
		un: "\u51C6",
		uo: "\u6349"
	}
}, Object.entries(Shuang.resource.dict).forEach(function (b) {
	var c = _slicedToArray(b, 2),
		d = c[0],
		e = c[1];
	return Shuang.resource.dict[d].list = Object.keys(e)
}), Shuang.resource.dict.list = Object.keys(Shuang.resource.dict), Shuang.resource.schemeList = {
	ziranma: "\u81EA\u7136\u7801",
	sougou: "\u641C\u72D7\u53CC\u62FC",
	weiruan: "\u5FAE\u8F6F\u53CC\u62FC",
	xiaohe: "\u5C0F\u9E64\u53CC\u62FC",
	zhinengabc: "\u667A\u80FDABC",
	pinyinjiajia: "\u62FC\u97F3\u52A0\u52A0",
	ziguang: "\u7D2B\u5149\u53CC\u62FC",
	guobiao: "\u56FD\u6807\u53CC\u62FC*",
	xiaolang: "\u5C0F\u6D6A\u53CC\u62FC*",
	daniu: "\u5927\u725B\u53CC\u62FC*",
	jiandao3: "\u952E\u9053\u53CC\u62FC3**",
	jiandao6: "\u952E\u9053\u53CC\u62FC6**",
	xiaoguan: "\u5F00\u6E90\u5C0F\u9E73**",
	xiaoyue: "\u5C0F\u6708\u53CC\u62FC**",
	yunbiaokuaipin: "\u97F5\u6807\u5757\u62FC**"
}, Shuang.app.modeList = {
	"all-random": {
		name: "\u5168\u90E8\u968F\u673A",
		desc: "\u5168\u90E8\u62FC\u97F3\u7EC4\u5408"
	},
	"all-order": {
		name: "\u5168\u90E8\u987A\u5E8F",
		desc: "\u5168\u90E8\u62FC\u97F3\u7EC4\u5408"
	},
	"hard-random": {
		name: "\u56F0\u96BE\u968F\u673A",
		desc: "\u97F5\u6BCD\u9700\u8F6C\u6362"
	},
	"hard-random-without-pinyin": {
		name: "\u65E0\u62FC\u97F3",
		desc: "\u65E0\u62FC\u97F3\u63D0\u793A"
	}
}, Shuang.core.model = function () {
	function b() {
		var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
			d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
		_classCallCheck(this, b), this.sheng = c.toLowerCase(), this.yun = d.toLowerCase(), this.dict = Shuang.resource.dict[this.sheng][this.yun], this.scheme = new Set, this.view = {
			sheng: this.sheng.toUpperCase().slice(0, 1) + this.sheng.slice(1),
			yun: this.yun
		}
	}
	return _createClass(b, [{
		key: "beforeJudge",
		value: function beforeJudge() {
			var b = this;
			this.scheme.clear();
			var c = Shuang.app.setting.config.scheme,
				d = Shuang.resource.scheme[c].detail,
				e = this.sheng + this.yun;
			if (d.other[e]) Array.isArray(d.other[e]) ? d.other[e].forEach(function (c) {
				return b.scheme.add(c)
			}) : this.scheme.add(d.other[e]);
			else {
				var f = !0,
					g = !1,
					h = void 0;
				try {
					for (var i, j = d.sheng[this.sheng][Symbol.iterator](); !(f = (i = j.next()).done); f = !0) {
						var k = i.value,
							l = !0,
							m = !1,
							n = void 0;
						try {
							for (var o, p, q = d.yun[this.yun][Symbol.iterator](); !(l = (o = q.next()).done); l = !0) p = o.value, this.scheme.add(k + p)
						} catch (b) {
							m = !0, n = b
						} finally {
							try {
								l || null == q["return"] || q["return"]()
							} finally {
								if (m) throw n
							}
						}
					}
				} catch (b) {
					g = !0, h = b
				} finally {
					try {
						f || null == j["return"] || j["return"]()
					} finally {
						if (g) throw h
					}
				}
				if ("u" === this.yun && "jqxy".includes(this.sheng)) {
					var r = !0,
						t = !1,
						u = void 0;
					try {
						for (var v, w = d.sheng[this.sheng][Symbol.iterator](); !(r = (v = w.next()).done); r = !0) {
							var x = v.value,
								s = !0,
								z = !1,
								A = void 0;
							try {
								for (var B, C, D = d.yun.v[Symbol.iterator](); !(s = (B = D.next()).done); s = !0) C = B.value, this.scheme.add(x + C)
							} catch (b) {
								z = !0, A = b
							} finally {
								try {
									s || null == D["return"] || D["return"]()
								} finally {
									if (z) throw A
								}
							}
						}
					} catch (b) {
						t = !0, u = b
					} finally {
						try {
							r || null == w["return"] || w["return"]()
						} finally {
							if (t) throw u
						}
					}
				}
			}
		}
	}, {
		key: "judge",
		value: function judge() {
			var b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
				c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
			return this.beforeJudge(), this.scheme.has(b.toLowerCase() + c.toLowerCase())
		}
	}], [{
		key: "getRandom",
		value: function getRandom() {
			var c = Math.floor,
				d = Shuang.resource.dict.list[c(Math.random() * Shuang.resource.dict.list.length)],
				e = Shuang.resource.dict[d].list[c(Math.random() * Shuang.resource.dict[d].list.length)],
				f = new b(d, e);
			return b.isSame(f, Shuang.core.current) ? b.getRandom() : f
		}
	}, {
		key: "getHardRandom",
		value: function getHardRandom() {
			var c;
			do c = b.getRandom(); while ("" === c.sheng || 1 === c.yun.length);
			return c
		}
	}, {
		key: "getByOrder",
		value: function getByOrder() {
			for (;;) {
				var c = Shuang.resource.dict.list[Shuang.core.order.shengIndex];
				if (void 0 !== c) {
					var d = Shuang.resource.dict[c].list[Shuang.core.order.yunIndex];
					if (d) return Shuang.core.order.yunIndex++, new b(c, d)
				}
				0 === Shuang.core.order.yunIndex ? Shuang.core.order.shengIndex = 0 : (Shuang.core.order.shengIndex++, Shuang.core.order.yunIndex = 0)
			}
		}
	}, {
		key: "isSame",
		value: function isSame(c, d) {
			return c.sheng === d.sheng && c.yun === d.yun
		}
	}]), b
}(), Shuang.app.setting = {
	config: {},
	reload: function reload() {
		this.config = {
			scheme: readStorage("scheme") || "ziranma",
			mode: readStorage("mode") || "all-random",
			showPic: readStorage("showPic") || "true",
			darkMode: readStorage("darkMode") || (6 <= new Date().getHours() && 22 >= new Date().getHours() ? "false" : "true"),
			autoNext: readStorage("autoNext") || "true",
			autoClear: readStorage("autoClear") || "true",
			showKeys: readStorage("showKeys") || "true"
		};
		var b = this.config,
			c = b.scheme,
			d = b.mode,
			e = b.showPic,
			f = b.darkMode,
			g = b.autoNext,
			h = b.autoClear,
			i = b.showKeys;
		Array.prototype.find.call($("#scheme-select").children, function (b) {
			return Shuang.resource.schemeList[c].startsWith(b.innerText)
		}).selected = !0, $("#mode-select")[Object.keys(Shuang.app.modeList).indexOf(d)].selected = !0, $("#pic-switcher").checked = "true" === e, $("#dark-mode-switcher").checked = "true" === f, $("#auto-next-switcher").checked = "true" === g, $("#auto-clear-switcher").checked = "true" === h, $("#show-keys").checked = "true" === i;
		this.setScheme(Shuang.resource.schemeList[c], !1), this.setMode(Shuang.app.modeList[d].name), this.setPicVisible(e), this.setDarkMode(f), this.setAutoNext(g), this.setAutoClear(h), this.setShowKeys(i)
	},
	setScheme: function setScheme(b) {
		var c = this,
			d = !(1 < arguments.length && arguments[1] !== void 0) || arguments[1];
		this.config.scheme = Object.keys(Shuang.resource.schemeList)[Object.values(Shuang.resource.schemeList).findIndex(function (c) {
			return c.startsWith(b)
		})], importJS("scheme/" + this.config.scheme, function () {
			d && Shuang.app.action.next(), c.updateTips()
		}), writeStorage("scheme", this.config.scheme)
	},
	setMode: function setMode(b) {
		Shuang.core.history = [];
		for (var c = 0, d = Object.entries(Shuang.app.modeList); c < d.length; c++) {
			var e = _slicedToArray(d[c], 2),
				f = e[0],
				g = e[1].name;
			if (g === b) {
				this.config.mode = f, $("#mode-desc").innerText = Shuang.app.modeList[f].desc, $("#q").style.display = "hard-random-without-pinyin" === f ? "none" : "block";
				break
			}
		}
		writeStorage("mode", this.config.mode)
	},
	setPicVisible: function setPicVisible(b) {
		this.config.showPic = b.toString(), "false" === this.config.showPic ? $("#keyboard").style.display = "none" : "true" === this.config.showPic && ($("#keyboard").style.display = "block"), writeStorage("showPic", this.config.showPic)
	},
	setDarkMode: function setDarkMode(b) {
		this.config.darkMode = b.toString(), "true" === this.config.darkMode ? $("body").setAttribute("class", "dark-mode") : "false" === this.config.darkMode && $("body").setAttribute("class", ""), writeStorage("darkMode", this.config.darkMode)
	},
	setAutoNext: function setAutoNext(b) {
		this.config.autoNext = b.toString(), writeStorage("autoNext", this.config.autoNext)
	},
	setAutoClear: function setAutoClear(b) {
		this.config.autoClear = b.toString(), writeStorage("autoClear", this.config.autoClear)
	},
	setShowKeys: function setShowKeys(b) {
		this.config.showKeys = b.toString(), writeStorage("showKeys", this.config.showKeys);
		
		var keys = document.getElementsByClassName("key");
		for (var i=0; i<=26; ++i) keys[i].style.visibility = "hidden";
		if (!b) return;
		try{
			var c = Shuang.app.setting.config.scheme,
				d = Shuang.resource.scheme[c].detail,
				e = Shuang.core.current.sheng + Shuang.core.current.yun,
				key_str = "qwertyuiopasdfghjkl;zxcvbnm";
			if (d.other[e]){
				keys[key_str.indexOf(d.other[e][0])].style.visibility = "visible";
				keys[key_str.indexOf(d.other[e][1])].style.visibility = "visible";
			}
			else{
				keys[key_str.indexOf(d.sheng[Shuang.core.current.sheng])].style.visibility = "visible";
				keys[key_str.indexOf(d.yun[Shuang.core.current.yun])].style.visibility = "visible";
			}
		} catch(e) {
			return;
		}
	},
	updateTips: function updateTips() {
		var b = $("#tips");
		b.innerHTML = "";
		var c = Shuang.resource.scheme[this.config.scheme];
		if (c.tips) {
			var d = Array.isArray(c.tips) ? c.tips : [c.tips],
				e = !0,
				f = !1,
				g = void 0;
			try {
				for (var h, i = d[Symbol.iterator](); !(e = (h = i.next()).done); e = !0) {
					var j = h.value,
						k = document.createElement("div");
					k.className = "line", k.innerHTML = j, b.appendChild(k)
				}
			} catch (b) {
				f = !0, g = b
			} finally {
				try {
					e || null == i["return"] || i["return"]()
				} finally {
					if (f) throw g
				}
			}
		}
		$("#pic").setAttribute("src", "img/".concat(this.config.scheme, ".png"))
	}
};

function readStorage() {
	var b = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
	return localStorage.getItem(b)
}

function writeStorage() {
	var b = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "",
		c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "";
	localStorage.setItem(b, c)
}
Shuang.app.action = {
	init: function init() {
		var c = this;

		function b(b, c, d) {
			c.forEach(function (c) {
				var d = document.createElement("option");
				c.disabled && d.setAttribute("disabled", "disabled"), d.innerText = c.text || c, b.appendChild(d)
			}), b.onchange = function (b) {
				d(b.target.value)
			}
		}
		navigator && navigator.userAgent && /Windows|Linux/.test(navigator.userAgent) && (Shuang.resource.emoji = {
			right: "\u2714\uFE0F",
			wrong: "\u274C"
		});
		var d = Object.values(Shuang.resource.schemeList),
			e = {
				common: d.filter(function (b) {
					return !b.endsWith("*")
				}),
				uncommon: d.filter(function (b) {
					return b.endsWith("*") && !b.endsWith("**")
				}).map(function (b) {
					return b.slice(0, -1)
				}),
				rare: d.filter(function (b) {
					return b.endsWith("**")
				}).map(function (b) {
					return b.slice(0, -2)
				})
			},
			f = [{
				disabled: !0,
				text: "\u5E38\u89C1"
			}].concat(_toConsumableArray(e.common), [{
				disabled: !0,
				text: "\u5C0F\u4F17"
			}], _toConsumableArray(e.uncommon), [{
				disabled: !0,
				text: "\u7231\u597D\u8005"
			}], _toConsumableArray(e.rare));
		b($("#scheme-select"), f, function (b) {
			Shuang.app.setting.setScheme(b)
		}), b($("#mode-select"), Object.values(Shuang.app.modeList).map(function (b) {
			return b.name
		}), function (b) {
			Shuang.app.setting.setMode(b), c.next()
		}), Shuang.core.current = new Shuang.core.model("sh", "uang"), $("#q").innerText = Shuang.core.current.view.sheng + Shuang.core.current.view.yun, $("#dict").innerText = Shuang.core.current.dict, Shuang.app.setting.reload(), document.addEventListener("keydown", function (b) {
			["Escape", "Tab", "Enter", "Space"].includes(b.code) && b.preventDefault()
		}), document.addEventListener("keyup", function (b) {
			c.keyPressed(b)
		}), $("#pic-switcher").addEventListener("change", function (b) {
			Shuang.app.setting.setPicVisible(b.target.checked)
		}), $("#dark-mode-switcher").addEventListener("change", function (b) {
			Shuang.app.setting.setDarkMode(b.target.checked)
		}), $("#auto-next-switcher").addEventListener("change", function (b) {
			Shuang.app.setting.setAutoNext(b.target.checked)
		}), $("#auto-clear-switcher").addEventListener("change", function (b) {
			Shuang.app.setting.setAutoClear(b.target.checked)
		}), $("#show-keys").addEventListener("change", function (b) {
			Shuang.app.setting.setShowKeys(b.target.checked)
		}), $(".pay-name#alipay").addEventListener("mouseover", function () {
			Shuang.app.action.qrShow("alipay-qr")
		}), $("#alipay-qr").addEventListener("click", function (b) {
			Shuang.app.action.qrHide(b.target)
		}), $("#alipay-qr").addEventListener("mouseout", function (b) {
			Shuang.app.action.qrHide(b.target)
		}), $(".pay-name#wxpay").addEventListener("mouseover", function () {
			Shuang.app.action.qrShow("wxpay-qr")
		}), $("#wxpay-qr").addEventListener("click", function (b) {
			Shuang.app.action.qrHide(b.target)
		}), $("#wxpay-qr").addEventListener("mouseout", function (b) {
			Shuang.app.action.qrHide(b.target)
		}), $("#wx-name").addEventListener("mouseover", function () {
			Shuang.app.action.qrShow("wx-qr")
		}), $("#wx-qr").addEventListener("click", function (b) {
			Shuang.app.action.qrHide(b.target)
		}), $("#wx-qr").addEventListener("mouseout", function (b) {
			Shuang.app.action.qrHide(b.target)
		}), $("#dict").addEventListener("click", function () {
			Shuang.core.current.beforeJudge(), $("#a").value = Shuang.core.current.scheme.values().next().value, c.judge()
		}), this.redo()
	},
	keyPressed: function keyPressed(b) {
		switch (b.code) {
			case "Escape":
				this.redo();
				break;
			case "Tab":
				Shuang.core.current.beforeJudge(), $("#a").value = Shuang.core.current.scheme.values().next().value, this.judge();
				break;
			case "Enter":
			case "Space":
				this.judge() ? this.next() : this.redo();
				break;
			default:
				$("#a").value = $("#a").value.slice(0, 2).replace(/[^a-zA-Z;]/g, "");
				var c = 2 === a.value.length,
					d = this.judge();
				c && (d && "true" === Shuang.app.setting.config.autoNext ? this.next() : !d && "true" === Shuang.app.setting.config.autoClear && this.redo());
		}
	},
	judge: function judge() {
		var b = $("#a"),
			c = $("#btn"),
			d = _slicedToArray(b.value, 2),
			e = d[0],
			f = d[1];
		return f && Shuang.core.current.judge(e, f) ? (c.onclick = this.next.bind(this), c.innerText = Shuang.resource.emoji.right, !0) : (c.onclick = this.redo.bind(this), c.innerText = Shuang.resource.emoji.wrong, !1)
	},
	redo: function redo() {
		$("#a").value = "", $("#a").focus(), $("#btn").onclick = this.redo.bind(this), $("#btn").innerText = Shuang.resource.emoji.wrong
	},
	next: function next() {
		switch (this.redo(), Shuang.app.setting.config.mode) {
			case "all-random":
				Shuang.core.current = Shuang.core.model.getRandom();
				break;
			case "all-order":
				Shuang.core.current = Shuang.core.model.getByOrder();
				break;
			case "hard-random":
				Shuang.core.current = Shuang.core.model.getHardRandom();
				break;
			case "hard-random-without-pinyin":
				do Shuang.core.current = Shuang.core.model.getHardRandom(); while (Array.isArray(Shuang.core.current.dict));
		}
		Shuang.core.history.includes(Shuang.core.current.sheng + Shuang.core.current.yun) ? this.next() : Shuang.core.history = [].concat(_toConsumableArray(Shuang.core.history), [Shuang.core.current.sheng + Shuang.core.current.yun]).slice(-100), $("#q").innerText = Shuang.core.current.view.sheng + Shuang.core.current.view.yun, $("#dict").innerText = Shuang.core.current.dict
		
		var keys = document.getElementsByClassName("key");
		for (var i=0; i<=26; ++i) keys[i].style.visibility = "hidden";
		if ("false" == Shuang.app.setting.config.showKeys) return;
		var c = Shuang.app.setting.config.scheme,
			d = Shuang.resource.scheme[c].detail,
			e = Shuang.core.current.sheng + Shuang.core.current.yun,
			key_str = "qwertyuiopasdfghjkl;zxcvbnm";
		if (d.other[e]){
			keys[key_str.indexOf(d.other[e][0])].style.visibility = "visible";
			keys[key_str.indexOf(d.other[e][1])].style.visibility = "visible";
		}
		else{
			keys[key_str.indexOf(d.sheng[Shuang.core.current.sheng])].style.visibility = "visible";
			keys[key_str.indexOf(d.yun[Shuang.core.current.yun])].style.visibility = "visible";
		}
	},
	qrShow: function qrShow(b) {
		$("#" + b).style.display = "block"
	},
	qrHide: function qrHide(b) {
		b.style.display = "none"
	}
}, Shuang.app.action.init();