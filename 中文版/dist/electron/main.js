﻿module.exports = function(t)
{
	function n(r)
	{
		if(e[r]) return e[r].exports;
		var o = e[r] = {
			i: r,
			l: !1,
			exports:
			{}
		};
		return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	var e = {};
	return n.m = t, n.c = e, n.d = function(t, e, r)
	{
		n.o(t, e) || Object.defineProperty(t, e,
		{
			enumerable: !0,
			get: r
		})
	}, n.r = function(t)
	{
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag,
		{
			value: "Module"
		}), Object.defineProperty(t, "__esModule",
		{
			value: !0
		})
	}, n.t = function(t, e)
	{
		if(1 & e && (t = n(t)), 8 & e) return t;
		if(4 & e && "object" == typeof t && t && t.__esModule) return t;
		var r = Object.create(null);
		if(n.r(r), Object.defineProperty(r, "default",
		{
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t)
			for(var o in t) n.d(r, o, function(n)
			{
				return t[n]
			}.bind(null, o));
		return r
	}, n.n = function(t)
	{
		var e = t && t.__esModule ? function()
		{
			return t.default
		} : function()
		{
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, n)
	{
		return Object.prototype.hasOwnProperty.call(t, n)
	}, n.p = "", n(n.s = 44)
}([function(t)
{
	t.exports = require("electron")
}, function(t)
{
	var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = n)
}, function(t, n, e)
{
	var r = e(33)("wks"),
		o = e(34),
		i = e(1)
		.Symbol,
		c = "function" == typeof i;
	(t.exports = function(t)
	{
		return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t))
	})
	.store = r
}, function(t)
{
	var n = t.exports = {
		version: "2.5.7"
	};
	"number" == typeof __e && (__e = n)
}, function(t, n, e)
{
	var r = e(7);
	t.exports = function(t)
	{
		if(!r(t)) throw TypeError(t + " is not an object!");
		return t
	}
}, function(t, n, e)
{
	var r = e(12),
		o = e(29);
	t.exports = e(8) ? function(t, n, e)
	{
		return r.f(t, n, o(1, e))
	} : function(t, n, e)
	{
		return t[n] = e, t
	}
}, function(t, n, e)
{
	var r = e(1),
		o = e(3),
		i = e(10),
		c = e(5),
		u = e(13),
		a = "prototype",
		s = function(t, n, e)
		{
			var f, l, p, h = t & s.F,
				d = t & s.G,
				v = t & s.S,
				y = t & s.P,
				g = t & s.B,
				m = t & s.W,
				w = d ? o : o[n] || (o[n] = {}),
				x = w[a],
				b = d ? r : v ? r[n] : (r[n] ||
				{})[a];
			for(f in d && (e = n), e)(l = !h && b && void 0 !== b[f]) && u(w, f) || (p = l ? b[f] : e[f], w[f] = d && "function" != typeof b[f] ? e[f] : g && l ? i(p, r) : m && b[f] == p ? function(t)
			{
				var n = function(n, e, r)
				{
					if(this instanceof t)
					{
						switch (arguments.length)
						{
							case 0:
								return new t;
							case 1:
								return new t(n);
							case 2:
								return new t(n, e)
						}
						return new t(n, e, r)
					}
					return t.apply(this, arguments)
				};
				return n[a] = t[a], n
			}(p) : y && "function" == typeof p ? i(Function.call, p) : p, y && ((w.virtual || (w.virtual = {}))[f] = p, t & s.R && x && !x[f] && c(x, f, p)))
		};
	s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function(t)
{
	t.exports = function(t)
	{
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
}, function(t, n, e)
{
	t.exports = !e(18)((function()
	{
		return 7 != Object.defineProperty(
			{}, "a",
			{
				get: function()
				{
					return 7
				}
			})
			.a
	}))
}, function(t)
{
	t.exports = {}
}, function(t, n, e)
{
	var r = e(11);
	t.exports = function(t, n, e)
	{
		return r(t), void 0 === n ? t : 1 === e ? function(e)
		{
			return t.call(n, e)
		} : 2 === e ? function(e, r)
		{
			return t.call(n, e, r)
		} : 3 === e ? function(e, r, o)
		{
			return t.call(n, e, r, o)
		} : function()
		{
			return t.apply(n, arguments)
		}
	}
}, function(t)
{
	t.exports = function(t)
	{
		if("function" != typeof t) throw TypeError(t + " is not a function!");
		return t
	}
}, function(t, n, e)
{
	var r = e(4),
		o = e(52),
		i = e(53),
		c = Object.defineProperty;
	n.f = e(8) ? Object.defineProperty : function(t, n, e)
	{
		if(r(t), n = i(n, !0), r(e), o) try
		{
			return c(t, n, e)
		}
		catch (n)
		{}
		if("get" in e || "set" in e) throw TypeError("Accessors not supported!");
		return "value" in e && (t[n] = e.value), t
	}
}, function(t)
{
	var n = {}.hasOwnProperty;
	t.exports = function(t, e)
	{
		return n.call(t, e)
	}
}, function(t)
{
	var n = {}.toString;
	t.exports = function(t)
	{
		return n.call(t)
			.slice(8, -1)
	}
}, function(t)
{
	var n = Math.ceil,
		e = Math.floor;
	t.exports = function(t)
	{
		return isNaN(t = +t) ? 0 : (0 < t ? e : n)(t)
	}
}, function(t)
{
	t.exports = function(t)
	{
		if(null == t) throw TypeError("Can't call method on  " + t);
		return t
	}
}, function(t)
{
	t.exports = !0
}, function(t)
{
	t.exports = function(t)
	{
		try
		{
			return !!t()
		}
		catch (t)
		{
			return !0
		}
	}
}, function(t, n, e)
{
	var r = e(7),
		o = e(1)
		.document,
		i = r(o) && r(o.createElement);
	t.exports = function(t)
	{
		return i ? o.createElement(t) :
		{}
	}
}, function(t, n, e)
{
	var r = e(31),
		o = e(16);
	t.exports = function(t)
	{
		return r(o(t))
	}
}, function(t, n, e)
{
	var r = e(33)("keys"),
		o = e(34);
	t.exports = function(t)
	{
		return r[t] || (r[t] = o(t))
	}
}, function(t, n, e)
{
	var r = e(12)
		.f,
		o = e(13),
		i = e(2)("toStringTag");
	t.exports = function(t, n, e)
	{
		t && !o(t = e ? t : t.prototype, i) && r(t, i,
		{
			configurable: !0,
			value: n
		})
	}
}, function(t, n, e)
{
	"use strict";

	function r(t)
	{
		var n, e;
		this.promise = new t((function(t, r)
		{
			if(null != n || null != e) throw TypeError("Bad Promise constructor");
			n = t, e = r
		})), this.resolve = o(n), this.reject = o(e)
	}
	var o = e(11);
	t.exports.f = function(t)
	{
		return new r(t)
	}
}, function(t)
{
	t.exports = require("path")
}, function(t, n, e)
{
	t.exports = e(45)
}, function(t, n, e)
{
	t.exports = {
		default: e(80),
		__esModule: !0
	}
}, function(t, n, e)
{
	"use strict";
	n.__esModule = !0;
	var r = function(t)
	{
		return t && t.__esModule ? t :
		{
			default: t
		}
	}(e(81));
	n.default = r.default || function(t)
	{
		for(var n, e = 1; e < arguments.length; e++)
			for(var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
		return t
	}
}, function(t, n, e)
{
	"use strict";
	var r = e(17),
		o = e(6),
		i = e(54),
		c = e(5),
		u = e(9),
		a = e(55),
		s = e(22),
		f = e(61),
		l = e(2)("iterator"),
		p = !([].keys && "next" in [].keys()),
		h = "keys",
		d = "values",
		v = function()
		{
			return this
		};
	t.exports = function(t, n, e, y, g, m, w)
	{
		a(e, n, y);
		var x, b, _, k = function(t)
			{
				return !p && t in L ? L[t] : function()
				{
					return new e(this, t)
				}
			},
			O = n + " Iterator",
			j = g == d,
			S = !1,
			L = t.prototype,
			M = L[l] || L["@@iterator"] || g && L[g],
			P = M || k(g),
			C = g ? j ? k("entries") : P : void 0,
			E = "Array" == n && L.entries || M;
		if(E && ((_ = f(E.call(new t))) !== Object.prototype && _.next && (s(_, O, !0), !r && "function" != typeof _[l] && c(_, l, v))), j && M && M.name !== d && (S = !0, P = function()
		{
			return M.call(this)
		}), (!r || w) && (p || S || !L[l]) && c(L, l, P), u[n] = P, u[O] = v, g)
			if(x = {
				values: j ? P : k(d),
				keys: m ? P : k(h),
				entries: C
			}, w)
				for(b in x) b in L || i(L, b, x[b]);
			else o(o.P + o.F * (p || S), n, x);
		return x
	}
}, function(t)
{
	t.exports = function(t, n)
	{
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: n
		}
	}
}, function(t, n, e)
{
	var r = e(58),
		o = e(35);
	t.exports = Object.keys || function(t)
	{
		return r(t, o)
	}
}, function(t, n, e)
{
	var r = e(14);
	t.exports = Object("z")
		.propertyIsEnumerable(0) ? Object : function(t)
		{
			return "String" == r(t) ? t.split("") : Object(t)
		}
}, function(t, n, e)
{
	var r = e(15),
		o = Math.min;
	t.exports = function(t)
	{
		return 0 < t ? o(r(t), 9007199254740991) : 0
	}
}, function(t, n, e)
{
	var r = e(3),
		o = e(1),
		i = "__core-js_shared__",
		c = o[i] || (o[i] = {});
	(t.exports = function(t, n)
	{
		return c[t] || (c[t] = void 0 === n ?
		{} : n)
	})("versions", [])
	.push(
	{
		version: r.version,
		mode: e(17) ? "pure" : "global",
		copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
	})
}, function(t)
{
	var n = 0,
		e = Math.random();
	t.exports = function(t)
	{
		return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + e)
			.toString(36))
	}
}, function(t)
{
	t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, n, e)
{
	var r = e(1)
		.document;
	t.exports = r && r.documentElement
}, function(t, n, e)
{
	var r = e(16);
	t.exports = function(t)
	{
		return Object(r(t))
	}
}, function(t, n, e)
{
	var r = e(14),
		o = e(2)("toStringTag"),
		i = "Arguments" == r(function()
		{
			return arguments
		}());
	t.exports = function(t)
	{
		var n, e, c;
		return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n)
		{
			try
			{
				return t[n]
			}
			catch (n)
			{}
		}(n = Object(t), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c
	}
}, function(t, n, e)
{
	var r = e(4),
		o = e(11),
		i = e(2)("species");
	t.exports = function(t, n)
	{
		var e, c = r(t)
			.constructor;
		return void 0 === c || null == (e = r(c)[i]) ? n : o(e)
	}
}, function(t, n, e)
{
	var r, o, i, c = e(10),
		u = e(72),
		a = e(36),
		s = e(19),
		f = e(1),
		l = f.process,
		p = f.setImmediate,
		h = f.clearImmediate,
		d = f.MessageChannel,
		v = f.Dispatch,
		y = 0,
		g = {},
		m = "onreadystatechange",
		w = function()
		{
			var t = +this;
			if(g.hasOwnProperty(t))
			{
				var n = g[t];
				delete g[t], n()
			}
		},
		x = function(t)
		{
			w.call(t.data)
		};
	p && h || (p = function(t)
	{
		for(var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
		return g[++y] = function()
		{
			u("function" == typeof t ? t : Function(t), n)
		}, r(y), y
	}, h = function(t)
	{
		delete g[t]
	}, "process" == e(14)(l) ? r = function(t)
	{
		l.nextTick(c(w, t, 1))
	} : v && v.now ? r = function(t)
	{
		v.now(c(w, t, 1))
	} : d ? (i = (o = new d)
		.port2, o.port1.onmessage = x, r = c(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t)
	{
		f.postMessage(t + "", "*")
	}, f.addEventListener("message", x, !1)) : r = m in s("script") ? function(t)
	{
		a.appendChild(s("script"))[m] = function()
		{
			a.removeChild(this), w.call(t)
		}
	} : function(t)
	{
		setTimeout(c(w, t, 1), 0)
	}), t.exports = {
		set: p,
		clear: h
	}
}, function(t)
{
	t.exports = function(t)
	{
		try
		{
			return {
				e: !1,
				v: t()
			}
		}
		catch (t)
		{
			return {
				e: !0,
				v: t
			}
		}
	}
}, function(t, n, e)
{
	var r = e(4),
		o = e(7),
		i = e(23);
	t.exports = function(t, n)
	{
		if(r(t), o(n) && n.constructor === t) return n;
		var e = i.f(t);
		return (0, e.resolve)(n), e.promise
	}
}, function(t, n, e)
{
	"use strict";
	n.__esModule = !0;
	var r = function(t)
	{
		return t && t.__esModule ? t :
		{
			default: t
		}
	}(e(47));
	n.default = function(t)
	{
		return function()
		{
			var n = t.apply(this, arguments);
			return new r.default((function(t, e)
			{
				return function o(i, c)
				{
					try
					{
						var u = n[i](c),
							a = u.value
					}
					catch (t)
					{
						return void e(t)
					}
					return u.done ? void t(a) : r.default.resolve(a)
						.then((function(t)
						{
							o("next", t)
						}), (function(t)
						{
							o("throw", t)
						}))
				}("next")
			}))
		}
	}
}, function(t, n, e)
{
	"use strict";

	function r()
	{
		var t = this,
			n = {};
		try
		{
			n = JSON.parse(g.readFileSync(b, "utf8"))
				.bounds
		}
		catch (n)
		{}(w = new h.BrowserWindow(p()(
		{
			height: 603,
			width: 850,
			minWidth: 850,
			minHeight: 603,
			backgroundColor: "#f5f5f5",
			useContentSize: !0,
			show: !1,
			minimizable: !0,
			frame: !1,
			titleBarStyle: "hidden",
			webPreferences:
			{
				nodeIntegration: !0,
				webSecurity: !0,
				nodeIntegrationInWorker: !1,
				enableRemoteModule: !0,
				preload: y.resolve(y.join(__dirname, "preload.js"))
			}
		}, n)))
		.setMenu(null), w.webContents.on("will-navigate", (function(t)
		{
			return t.preventDefault()
		})), w.loadURL(_,
		{
			userAgent: "ClashforWindows/" + h.app.getVersion()
		}), w.on("hide", (function()
		{
			w.webContents.send("window-event", "hide")
		})), w.on("show", (function()
		{
			"darwin" === process.platform && h.app.dock.show(), w.webContents.send("window-event", "show"), w.setBounds(o(w.getBounds()))
		})), w.on("close", (function(t)
		{
			if(h.app.isQuiting)
			{
				try
				{
					g.writeFileSync(b, f()(
					{
						bounds: w.getBounds()
					}))
				}
				catch (t)
				{}
				h.globalShortcut.unregisterAll(), h.app.exit()
			}
			else t.preventDefault(), w.hide(), "darwin" === process.platform && h.app.dock.hide();
			return !1
		})), w.on("session-end", (function(t)
		{
			t.preventDefault(), w.webContents.send("app-exit")
		})), w.webContents.on("crashed", a()(c.a.mark((function n()
		{
			var e, r;
			return c.a.wrap((function(t)
			{
				for(;;) switch (t.prev = t.next)
				{
					case 0:
						if("darwin" !== process.platform)
						{
							t.next = 2;
							break
						}
						return t.abrupt("return");
					case 2:
						return e = {
							type: "error",
							title: "Clash for Windows",
							message: "面板崩溃了！",
							buttons: ["刷新", "退出"]
						}, t.next = 5, h.dialog.showMessageBox(w, e);
					case 5:
						r = t.sent, 0 === r.response ? (h.app.relaunch(), h.app.exit(0)) : h.app.quit();
					case 8:
					case "end":
						return t.stop()
				}
			}), n, t)
		})))), w.setTouchBar(new d(
		{
			items: [new v(
			{
				label: "General",
				backgroundColor: "#505050",
				click: function()
				{
					w.webContents.send("menu-item-change", 0)
				}
			}), new v(
			{
				label: "Proxies",
				backgroundColor: "#505050",
				click: function()
				{
					w.webContents.send("menu-item-change", 1)
				}
			}), new v(
			{
				label: "Profiles",
				backgroundColor: "#505050",
				click: function()
				{
					w.webContents.send("menu-item-change", 2)
				}
			}), new v(
			{
				label: "Logs",
				backgroundColor: "#505050",
				click: function()
				{
					w.webContents.send("menu-item-change", 3)
				}
			}), new v(
			{
				label: "Connections",
				backgroundColor: "#505050",
				click: function()
				{
					w.webContents.send("menu-item-change", 4)
				}
			}), new v(
			{
				label: "Settings",
				backgroundColor: "#505050",
				click: function()
				{
					w.webContents.send("menu-item-change", 5)
				}
			}), new v(
			{
				label: "Feedback",
				backgroundColor: "#505050",
				click: function()
				{
					w.webContents.send("menu-item-change", 6)
				}
			})]
		})), h.powerMonitor.on("resume", (function()
		{
			w.webContents.send("app-resume")
		}));
		var r = h.nativeImage.createFromPath(e(24)
				.join(__static, "imgs", "logo_64.png"))
			.resize(
			{
				width: 24,
				height: 24
			}),
			i = y.join(__static, "tray_normal_Z8R_icon.ico");
		(x = new h.Tray("darwin" === process.platform ? r : i))
		.setToolTip("Clash for Windows"), x.on("click", (function()
		{
			w.setBounds(o(w.getBounds())), w.show()
		})), h.ipcMain.on("cleanup-done", (function()
		{
			try
			{
				g.writeFileSync(b, f()(
				{
					bounds: w.getBounds()
				}))
			}
			catch (t)
			{}
			h.app.isQuiting = !0, h.app.quit()
		})), h.ipcMain.on("status-changed", (function(t, n)
		{
			try
			{
				"darwin" !== process.platform && x.setImage(n)
			}
			catch (n)
			{}
		})), h.ipcMain.on("show-notification", (function(t, n)
		{
			var e = y.join(global.__static, "imgs/logo_64.png"),
				r = new h.Notification(p()(
				{}, n,
				{
					icon: "darwin" === process.platform ? null : h.nativeImage.createFromPath(e)
				}));
			n.folder && r.on("click", (function()
			{
				h.shell.openPath(n.folder)
			})), r.show()
		}));
		var u = h.Menu.buildFromTemplate([
		{
			label: "显示面板",
			click: function()
			{
				return w.show()
			}
		},
		{
			type: "separator"
		},
		{
			label: "系统代理",
			type: "checkbox",
			id: "system-proxy",
			click: function(t)
			{
				var n = t.checked;
				w.webContents.send("system-proxy-changed", n)
			}
		},
		{
			label: "混合配置",
			type: "checkbox",
			id: "mixin",
			click: function(t)
			{
				var n = t.checked;
				w.webContents.send("mixin-changed", n)
			}
		},
		{
			type: "separator"
		},
		{
			label: "代理模式",
			id: "mode",
			submenu: [
			{
				label: "全局",
				type: "radio",
				id: "mode-global",
				click: function()
				{
					return w.webContents.send("mode-changed", "global")
				}
			},
			{
				label: "规则",
				type: "radio",
				id: "mode-rule",
				click: function()
				{
					return w.webContents.send("mode-changed", "rule")
				}
			},
			{
				label: "直连",
				type: "radio",
				id: "mode-direct",
				click: function()
				{
					return w.webContents.send("mode-changed", "direct")
				}
			},
			{
				label: "脚本",
				type: "radio",
				id: "mode-script",
				click: function()
				{
					return w.webContents.send("mode-changed", "script")
				}
			}]
		},
		{
			type: "separator"
		},
		{
			label: "强制退出",
			click: function()
			{
				h.app.isQuiting = !0, h.app.quit()
			}
		},
		{
			label: "退出",
			click: function()
			{
				return w.webContents.send("app-exit")
			}
		}]);
		h.ipcMain.on("clash-core-status-change", (function(t, n)
		{
			var e = u.getMenuItemById("system-proxy");
			e && (e.enabled = 1 !== n);
			var r = u.getMenuItemById("mode");
			r && (r.enabled = 1 !== n)
		})), h.ipcMain.on("mode-changed", (function(t, n)
		{
			var e = u.getMenuItemById("mode-" + n);
			e && (e.checked = !0)
		})), h.ipcMain.on("system-proxy-changed", (function(t, n)
		{
			var e = u.getMenuItemById("system-proxy");
			e && (e.checked = n)
		})), h.ipcMain.on("mixin-changed", (function(t, n)
		{
			var e = u.getMenuItemById("mixin");
			e && (e.checked = n)
		})), h.ipcMain.on("speed-update", (function(t, n, e)
		{
			try
			{
				x && x.setImage(h.nativeImage.createFromDataURL(n)
					.crop(
					{
						x: 0,
						y: 0,
						width: e ? 225 : 60,
						height: 69
					})
					.resize(
					{
						height: 23
					}))
			}
			catch (n)
			{}
		})), x.on("click", (function()
		{
			w.show()
		})), x.on("right-click", (function()
		{
			x.popUpContextMenu(u)
		}))
	}

	function o(t)
	{
		var n = t.x,
			e = t.y;
		if(!h.screen.getAllDisplays()
			.find((function(t)
			{
				var r = t.bounds;
				if(r)
				{
					var o = r.x,
						i = r.y,
						c = r.width,
						u = r.height;
					return m.inRange(n, o, o + c) && m.inRange(e, i, i + u)
				}
			})))
		{
			var r = h.screen.getDisplayNearestPoint(
				{
					x: n,
					y: e
				})
				.bounds;
			if(r) return {
				x: r.x,
				y: r.y
			}
		}
		return {
			x: n,
			y: e
		}
	}
	e.r(n);
	var i = e(25),
		c = e.n(i),
		u = e(43),
		a = e.n(u),
		s = e(26),
		f = e.n(s),
		l = e(27),
		p = e.n(l),
		h = e(0),
		d = (e.n(h), e(0)
			.TouchBar),
		v = d.TouchBarButton,
		y = e(24),
		g = e(87),
		m = e(88);
	global.__static = e(24)
		.join(__dirname, "/static")
		.replace(/\\/g, "\\\\"), h.app.disableHardwareAcceleration(), h.app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors");
	var w = void 0,
		x = void 0,
		b = y.join(h.app.getPath("userData"), "window_ocnfig.json"),
		_ = "file://" + __dirname + "/index.html",
		k = h.app.requestSingleInstanceLock();
	h.app.setAppUserModelId("com.lbyczf.clashwin"), h.app.setAsDefaultProtocolClient("clash"), h.app.on("open-url", (function(t, n)
	{
		w.webContents.send("app-open", [n])
	})), k ? (h.app.on("second-instance", (function(t, n)
	{
		w && (w.webContents.send("app-open", n), w.isMinimized() && w.restore(), w.show())
	})), h.app.on("ready", (function()
	{
		h.powerMonitor.on("shutdown", (function(t)
		{
			t.preventDefault(), w.webContents.send("app-exit"), setTimeout((function()
			{
				h.app.isQuiting = !0, h.app.quit()
			}), 5e3)
		})), r()
	}))) : h.app.quit(), h.app.on("activate", (function()
	{
		null === w ? r() : w.show()
	}))
}, function(t, n, e)
{
	var r = function()
		{
			return this
		}() || Function("return this")(),
		o = r.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(r)
		.indexOf("regeneratorRuntime"),
		i = o && r.regeneratorRuntime;
	if(r.regeneratorRuntime = void 0, t.exports = e(46), o) r.regeneratorRuntime = i;
	else try
	{
		delete r.regeneratorRuntime
	}
	catch (n)
	{
		r.regeneratorRuntime = void 0
	}
}, function(t)
{
	! function(n)
	{
		"use strict";

		function e(t, n, e, r)
		{
			var i = n && n.prototype instanceof o ? n : o,
				c = Object.create(i.prototype),
				u = new h(r || []);
			return c._invoke = s(t, e, u), c
		}

		function r(t, n, e)
		{
			try
			{
				return {
					type: "normal",
					arg: t.call(n, e)
				}
			}
			catch (t)
			{
				return {
					type: "throw",
					arg: t
				}
			}
		}

		function o()
		{}

		function i()
		{}

		function c()
		{}

		function u(t)
		{
			["next", "throw", "return"].forEach((function(n)
			{
				t[n] = function(t)
				{
					return this._invoke(n, t)
				}
			}))
		}

		function a(t)
		{
			function n(e, o, i, c)
			{
				var u = r(t[e], t, o);
				if("throw" !== u.type)
				{
					var a = u.arg,
						s = a.value;
					return s && "object" == typeof s && g.call(s, "__await") ? Promise.resolve(s.__await)
						.then((function(t)
						{
							n("next", t, i, c)
						}), (function(t)
						{
							n("throw", t, i, c)
						})) : Promise.resolve(s)
						.then((function(t)
						{
							a.value = t, i(a)
						}), c)
				}
				c(u.arg)
			}
			var e;
			this._invoke = function(t, r)
			{
				function o()
				{
					return new Promise((function(e, o)
					{
						n(t, r, e, o)
					}))
				}
				return e = e ? e.then(o, o) : o()
			}
		}

		function s(t, n, e)
		{
			var o = O;
			return function(i, c)
			{
				if(o == S) throw new Error("Generator is already running");
				if(o == L)
				{
					if("throw" === i) throw c;
					return {
						value: void 0,
						done: !0
					}
				}
				for(e.method = i, e.arg = c;;)
				{
					var u = e.delegate;
					if(u)
					{
						var a = f(u, e);
						if(a)
						{
							if(a === M) continue;
							return a
						}
					}
					if("next" === e.method) e.sent = e._sent = e.arg;
					else if("throw" === e.method)
					{
						if(o == O) throw o = L, e.arg;
						e.dispatchException(e.arg)
					}
					else "return" === e.method && e.abrupt("return", e.arg);
					o = S;
					var s = r(t, n, e);
					if("normal" === s.type)
					{
						if(o = e.done ? L : j, s.arg === M) continue;
						return {
							value: s.arg,
							done: e.done
						}
					}
					"throw" === s.type && (o = L, e.method = "throw", e.arg = s.arg)
				}
			}
		}

		function f(t, n)
		{
			var e = t.iterator[n.method];
			if(void 0 === e)
			{
				if(n.delegate = null, "throw" === n.method)
				{
					if(t.iterator.return && (n.method = "return", n.arg = void 0, f(t, n), "throw" === n.method)) return M;
					n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return M
			}
			var o = r(e, t.iterator, n.arg);
			if("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, M;
			var i = o.arg;
			return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, M) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, M)
		}

		function l(t)
		{
			var n = {
				tryLoc: t[0]
			};
			1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
		}

		function p(t)
		{
			var n = t.completion ||
			{};
			n.type = "normal", delete n.arg, t.completion = n
		}

		function h(t)
		{
			this.tryEntries = [
			{
				tryLoc: "root"
			}], t.forEach(l, this), this.reset(!0)
		}

		function d(t)
		{
			if(t)
			{
				var n = t[w];
				if(n) return n.call(t);
				if("function" == typeof t.next) return t;
				if(!isNaN(t.length))
				{
					var e = -1,
						r = function n()
						{
							for(; ++e < t.length;)
								if(g.call(t, e)) return n.value = t[e], n.done = !1, n;
							return n.value = void 0, n.done = !0, n
						};
					return r.next = r
				}
			}
			return {
				next: v
			}
		}

		function v()
		{
			return {
				value: void 0,
				done: !0
			}
		}
		var y = Object.prototype,
			g = y.hasOwnProperty,
			m = "function" == typeof Symbol ? Symbol :
			{},
			w = m.iterator || "@@iterator",
			x = m.asyncIterator || "@@asyncIterator",
			b = m.toStringTag || "@@toStringTag",
			_ = "object" == typeof t,
			k = n.regeneratorRuntime;
		if(k) _ && (t.exports = k);
		else
		{
			(k = n.regeneratorRuntime = _ ? t.exports :
			{})
			.wrap = e;
			var O = "suspendedStart",
				j = "suspendedYield",
				S = "executing",
				L = "completed",
				M = {},
				P = {};
			P[w] = function()
			{
				return this
			};
			var C = Object.getPrototypeOf,
				E = C && C(C(d([])));
			E && E !== y && g.call(E, w) && (P = E);
			var T = c.prototype = o.prototype = Object.create(P);
			i.prototype = T.constructor = c, c.constructor = i, c[b] = i.displayName = "GeneratorFunction", k.isGeneratorFunction = function(t)
			{
				var n = "function" == typeof t && t.constructor;
				return !!n && (n === i || "GeneratorFunction" === (n.displayName || n.name))
			}, k.mark = function(t)
			{
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, !(b in t) && (t[b] = "GeneratorFunction")), t.prototype = Object.create(T), t
			}, k.awrap = function(t)
			{
				return {
					__await: t
				}
			}, u(a.prototype), a.prototype[x] = function()
			{
				return this
			}, k.AsyncIterator = a, k.async = function(t, n, r, o)
			{
				var i = new a(e(t, n, r, o));
				return k.isGeneratorFunction(n) ? i : i.next()
					.then((function(t)
					{
						return t.done ? t.value : i.next()
					}))
			}, u(T), T[b] = "Generator", T[w] = function()
			{
				return this
			}, T.toString = function()
			{
				return "[object Generator]"
			}, k.keys = function(t)
			{
				var n = [];
				for(var e in t) n.push(e);
				return n.reverse(),
					function e()
					{
						for(; n.length;)
						{
							var r = n.pop();
							if(r in t) return e.value = r, e.done = !1, e
						}
						return e.done = !0, e
					}
			}, k.values = d, h.prototype = {
				constructor: h,
				reset: function(t)
				{
					if(this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(p), !t)
						for(var n in this) "t" === n.charAt(0) && g.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0)
				},
				stop: function()
				{
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t)
				{
					function n(n, r)
					{
						return i.type = "throw", i.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
					}
					if(this.done) throw t;
					for(var e = this, r = this.tryEntries.length - 1; 0 <= r; --r)
					{
						var o = this.tryEntries[r],
							i = o.completion;
						if("root" === o.tryLoc) return n("end");
						if(o.tryLoc <= this.prev)
						{
							var c = g.call(o, "catchLoc"),
								u = g.call(o, "finallyLoc");
							if(c && u)
							{
								if(this.prev < o.catchLoc) return n(o.catchLoc, !0);
								if(this.prev < o.finallyLoc) return n(o.finallyLoc)
							}
							else if(c)
							{
								if(this.prev < o.catchLoc) return n(o.catchLoc, !0)
							}
							else
							{
								if(!u) throw new Error("try statement without catch or finally");
								if(this.prev < o.finallyLoc) return n(o.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, n)
				{
					for(var e, r = this.tryEntries.length - 1; 0 <= r; --r)
						if((e = this.tryEntries[r])
							.tryLoc <= this.prev && g.call(e, "finallyLoc") && this.prev < e.finallyLoc)
						{
							var o = e;
							break
						} o && ("break" === t || "continue" === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
					var i = o ? o.completion :
					{};
					return i.type = t, i.arg = n, o ? (this.method = "next", this.next = o.finallyLoc, M) : this.complete(i)
				},
				complete: function(t, n)
				{
					if("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), M
				},
				finish: function(t)
				{
					for(var n, e = this.tryEntries.length - 1; 0 <= e; --e)
						if((n = this.tryEntries[e])
							.finallyLoc === t) return this.complete(n.completion, n.afterLoc), p(n), M
				},
				catch: function(t)
				{
					for(var n, e = this.tryEntries.length - 1; 0 <= e; --e)
						if((n = this.tryEntries[e])
							.tryLoc === t)
						{
							var r = n.completion;
							if("throw" === r.type)
							{
								var o = r.arg;
								p(n)
							}
							return o
						} throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, n, e)
				{
					return this.delegate = {
						iterator: d(t),
						resultName: n,
						nextLoc: e
					}, "next" === this.method && (this.arg = void 0), M
				}
			}
		}
	}(function()
	{
		return this
	}() || Function("return this")())
}, function(t, n, e)
{
	t.exports = {
		default: e(48),
		__esModule: !0
	}
}, function(t, n, e)
{
	e(49), e(50), e(62), e(66), e(78), e(79), t.exports = e(3)
		.Promise
}, function() {}, function(t, n, e)
{
	"use strict";
	var r = e(51)(!0);
	e(28)(String, "String", (function(t)
	{
		this._t = t + "", this._i = 0
	}), (function()
	{
		var t, n = this._t,
			e = this._i;
		return e >= n.length ?
		{
			value: void 0,
			done: !0
		} : (t = r(n, e), this._i += t.length,
		{
			value: t,
			done: !1
		})
	}))
}, function(t, n, e)
{
	var r = e(15),
		o = e(16);
	t.exports = function(t)
	{
		return function(n, e)
		{
			var i, c, u = o(n) + "",
				a = r(e),
				s = u.length;
			return 0 > a || a >= s ? t ? "" : void 0 : 55296 > (i = u.charCodeAt(a)) || 56319 < i || a + 1 === s || 56320 > (c = u.charCodeAt(a + 1)) || 57343 < c ? t ? u.charAt(a) : i : t ? u.slice(a, a + 2) : c - 56320 + (i - 55296 << 10) + 65536
		}
	}
}, function(t, n, e)
{
	t.exports = !e(8) && !e(18)((function()
	{
		return 7 != Object.defineProperty(e(19)("div"), "a",
			{
				get: function()
				{
					return 7
				}
			})
			.a
	}))
}, function(t, n, e)
{
	var r = e(7);
	t.exports = function(t, n)
	{
		if(!r(t)) return t;
		var e, o;
		if(n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
		if("function" == typeof(e = t.valueOf) && !r(o = e.call(t))) return o;
		if(!n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(t, n, e)
{
	t.exports = e(5)
}, function(t, n, e)
{
	"use strict";
	var r = e(56),
		o = e(29),
		i = e(22),
		c = {};
	e(5)(c, e(2)("iterator"), (function()
	{
		return this
	})), t.exports = function(t, n, e)
	{
		t.prototype = r(c,
		{
			next: o(1, e)
		}), i(t, n + " Iterator")
	}
}, function(t, n, e)
{
	var r = e(4),
		o = e(57),
		i = e(35),
		c = e(21)("IE_PROTO"),
		u = function() {},
		a = "prototype",
		s = function()
		{
			var t, n = e(19)("iframe"),
				r = i.length;
			for(n.style.display = "none", e(36)
				.appendChild(n), n.src = "javascript:", (t = n.contentWindow.document)
				.open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s[a][i[r]];
			return s()
		};
	t.exports = Object.create || function(t, n)
	{
		var e;
		return null === t ? e = s() : (u[a] = r(t), e = new u, u[a] = null, e[c] = t), void 0 === n ? e : o(e, n)
	}
}, function(t, n, e)
{
	var r = e(12),
		o = e(4),
		i = e(30);
	t.exports = e(8) ? Object.defineProperties : function(t, n)
	{
		o(t);
		for(var e, c = i(n), u = c.length, a = 0; u > a;) r.f(t, e = c[a++], n[e]);
		return t
	}
}, function(t, n, e)
{
	var r = e(13),
		o = e(20),
		i = e(59)(!1),
		c = e(21)("IE_PROTO");
	t.exports = function(t, n)
	{
		var e, u = o(t),
			a = 0,
			s = [];
		for(e in u) e != c && r(u, e) && s.push(e);
		for(; n.length > a;) r(u, e = n[a++]) && (~i(s, e) || s.push(e));
		return s
	}
}, function(t, n, e)
{
	var r = e(20),
		o = e(32),
		i = e(60);
	t.exports = function(t)
	{
		return function(n, e, c)
		{
			var u, a = r(n),
				s = o(a.length),
				f = i(c, s);
			if(t && e != e)
			{
				for(; s > f;)
					if((u = a[f++]) != u) return !0
			}
			else
				for(; s > f; f++)
					if((t || f in a) && a[f] === e) return t || f || 0;
			return !t && -1
		}
	}
}, function(t, n, e)
{
	var r = e(15),
		o = Math.max,
		i = Math.min;
	t.exports = function(t, n)
	{
		return 0 > (t = r(t)) ? o(t + n, 0) : i(t, n)
	}
}, function(t, n, e)
{
	var r = e(13),
		o = e(37),
		i = e(21)("IE_PROTO"),
		c = Object.prototype;
	t.exports = Object.getPrototypeOf || function(t)
	{
		return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
	}
}, function(t, n, e)
{
	e(63);
	for(var r = e(1), o = e(5), i = e(9), c = e(2)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < u.length; a++)
	{
		var s = u[a],
			f = r[s],
			l = f && f.prototype;
		l && !l[c] && o(l, c, s), i[s] = i.Array
	}
}, function(t, n, e)
{
	"use strict";
	var r = e(64),
		o = e(65),
		i = e(9),
		c = e(20);
	t.exports = e(28)(Array, "Array", (function(t, n)
	{
		this._t = c(t), this._i = 0, this._k = n
	}), (function()
	{
		var t = this._t,
			n = this._k,
			e = this._i++;
		return !t || e >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
	}), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t)
{
	t.exports = function() {}
}, function(t)
{
	t.exports = function(t, n)
	{
		return {
			value: n,
			done: !!t
		}
	}
}, function(t, n, e)
{
	"use strict";
	var r, o, i, c, u = e(17),
		a = e(1),
		s = e(10),
		f = e(38),
		l = e(6),
		p = e(7),
		h = e(11),
		d = e(67),
		v = e(68),
		y = e(39),
		g = e(40)
		.set,
		m = e(73)(),
		w = e(23),
		x = e(41),
		b = e(74),
		_ = e(42),
		k = "Promise",
		O = a.TypeError,
		j = a.process,
		S = j && j.versions,
		L = S && S.v8 || "",
		M = a[k],
		P = "process" == f(j),
		C = function() {},
		E = o = w.f,
		T = !! function()
		{
			try
			{
				var t = M.resolve(1),
					n = (t.constructor = {})[e(2)("species")] = function(t)
					{
						t(C, C)
					};
				return (P || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof n && 0 !== L.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
			}
			catch (n)
			{}
		}(),
		I = function(t)
		{
			var n;
			return p(t) && "function" == typeof(n = t.then) && n
		},
		R = function(t, n)
		{
			if(!t._n)
			{
				t._n = !0;
				var e = t._c;
				m((function()
				{
					for(var r = t._v, o = 1 == t._s, i = 0, c = function(n)
					{
						var e, i, c, u = o ? n.ok : n.fail,
							a = n.resolve,
							s = n.reject,
							f = n.domain;
						try
						{
							u ? (!o && (2 == t._h && B(t), t._h = 1), !0 === u ? e = r : (f && f.enter(), e = u(r), f && (f.exit(), c = !0)), e === n.promise ? s(O("Promise-chain cycle")) : (i = I(e)) ? i.call(e, a, s) : a(e)) : s(r)
						}
						catch (n)
						{
							f && !c && f.exit(), s(n)
						}
					}; e.length > i;) c(e[i++]);
					t._c = [], t._n = !1, n && !t._h && F(t)
				}))
			}
		},
		F = function(t)
		{
			g.call(a, (function()
			{
				var n, e, r, o = t._v,
					i = A(t);
				if(i && (n = x((function()
				{
					P ? j.emit("unhandledRejection", o, t) : (e = a.onunhandledrejection) ? e(
					{
						promise: t,
						reason: o
					}) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o)
				})), t._h = P || A(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v
			}))
		},
		A = function(t)
		{
			return 1 !== t._h && 0 === (t._a || t._c)
				.length
		},
		B = function(t)
		{
			g.call(a, (function()
			{
				var n;
				P ? j.emit("rejectionHandled", t) : (n = a.onrejectionhandled) && n(
				{
					promise: t,
					reason: t._v
				})
			}))
		},
		N = function(t)
		{
			var n = this;
			n._d || (n._d = !0, (n = n._w || n)
				._v = t, n._s = 2, !n._a && (n._a = n._c.slice()), R(n, !0))
		},
		D = function(t)
		{
			var n, e = this;
			if(!e._d)
			{
				e._d = !0, e = e._w || e;
				try
				{
					if(e === t) throw O("Promise can't be resolved itself");
					(n = I(t)) ? m((function()
					{
						var r = {
							_w: e,
							_d: !1
						};
						try
						{
							n.call(t, s(D, r, 1), s(N, r, 1))
						}
						catch (t)
						{
							N.call(r, t)
						}
					})): (e._v = t, e._s = 1, R(e, !1))
				}
				catch (n)
				{
					N.call(
					{
						_w: e,
						_d: !1
					}, n)
				}
			}
		};
	T || (M = function(t)
		{
			d(this, M, k, "_h"), h(t), r.call(this);
			try
			{
				t(s(D, this, 1), s(N, this, 1))
			}
			catch (t)
			{
				N.call(this, t)
			}
		}, (r = function()
		{
			this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
		})
		.prototype = e(75)(M.prototype,
		{
			then: function(t, n)
			{
				var e = E(y(this, M));
				return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = P ? j.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && R(this, !1), e.promise
			},
			catch: function(t)
			{
				return this.then(void 0, t)
			}
		}), i = function()
		{
			var t = new r;
			this.promise = t, this.resolve = s(D, t, 1), this.reject = s(N, t, 1)
		}, w.f = E = function(t)
		{
			return t === M || t === c ? new i(t) : o(t)
		}), l(l.G + l.W + l.F * !T,
	{
		Promise: M
	}), e(22)(M, k), e(76)(k), c = e(3)[k], l(l.S + l.F * !T, k,
	{
		reject: function(t)
		{
			var n = E(this);
			return (0, n.reject)(t), n.promise
		}
	}), l(l.S + l.F * (u || !T), k,
	{
		resolve: function(t)
		{
			return _(u && this === c ? M : this, t)
		}
	}), l(l.S + l.F * !(T && e(77)((function(t)
	{
		M.all(t)
			.catch(C)
	}))), k,
	{
		all: function(t)
		{
			var n = this,
				e = E(n),
				r = e.resolve,
				o = e.reject,
				i = x((function()
				{
					var e = [],
						i = 0,
						c = 1;
					v(t, !1, (function(t)
					{
						var u = i++,
							a = !1;
						e.push(void 0), c++, n.resolve(t)
							.then((function(t)
							{
								a || (a = !0, e[u] = t, --c || r(e))
							}), o)
					})), --c || r(e)
				}));
			return i.e && o(i.v), e.promise
		},
		race: function(t)
		{
			var n = this,
				e = E(n),
				r = e.reject,
				o = x((function()
				{
					v(t, !1, (function(t)
					{
						n.resolve(t)
							.then(e.resolve, r)
					}))
				}));
			return o.e && r(o.v), e.promise
		}
	})
}, function(t)
{
	t.exports = function(t, n, e, r)
	{
		if(!(t instanceof n) || void 0 !== r && r in t) throw TypeError(e + ": incorrect invocation!");
		return t
	}
}, function(t, n, e)
{
	var r = e(10),
		o = e(69),
		i = e(70),
		c = e(4),
		u = e(32),
		a = e(71),
		s = {},
		f = {};
	(n = t.exports = function(t, n, e, l, p)
	{
		var h, d, v, y, g = p ? function()
			{
				return t
			} : a(t),
			m = r(e, l, n ? 2 : 1),
			w = 0;
		if("function" != typeof g) throw TypeError(t + " is not iterable!");
		if(i(g))
		{
			for(h = u(t.length); h > w; w++)
				if((y = n ? m(c(d = t[w])[0], d[1]) : m(t[w])) === s || y === f) return y
		}
		else
			for(v = g.call(t); !(d = v.next())
				.done;)
				if((y = o(v, m, d.value, n)) === s || y === f) return y
	})
	.BREAK = s, n.RETURN = f
}, function(t, n, e)
{
	var r = e(4);
	t.exports = function(t, n, e, o)
	{
		try
		{
			return o ? n(r(e)[0], e[1]) : n(e)
		}
		catch (e)
		{
			var i = t.return;
			throw void 0 !== i && r(i.call(t)), e
		}
	}
}, function(t, n, e)
{
	var r = e(9),
		o = e(2)("iterator"),
		i = Array.prototype;
	t.exports = function(t)
	{
		return void 0 !== t && (r.Array === t || i[o] === t)
	}
}, function(t, n, e)
{
	var r = e(38),
		o = e(2)("iterator"),
		i = e(9);
	t.exports = e(3)
		.getIteratorMethod = function(t)
		{
			if(null != t) return t[o] || t["@@iterator"] || i[r(t)]
		}
}, function(t)
{
	t.exports = function(t, n, e)
	{
		var r = void 0 === e;
		switch (n.length)
		{
			case 0:
				return r ? t() : t.call(e);
			case 1:
				return r ? t(n[0]) : t.call(e, n[0]);
			case 2:
				return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
			case 3:
				return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
			case 4:
				return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3])
		}
		return t.apply(e, n)
	}
}, function(t, n, e)
{
	var r = e(1),
		o = e(40)
		.set,
		i = r.MutationObserver || r.WebKitMutationObserver,
		c = r.process,
		u = r.Promise,
		a = "process" == e(14)(c);
	t.exports = function()
	{
		var t, n, e, s = function()
		{
			var r, o;
			for(a && (r = c.domain) && r.exit(); t;)
			{
				o = t.fn, t = t.next;
				try
				{
					o()
				}
				catch (o)
				{
					throw t ? e() : n = void 0, o
				}
			}
			n = void 0, r && r.enter()
		};
		if(a) e = function()
		{
			c.nextTick(s)
		};
		else if(!i || r.navigator && r.navigator.standalone)
			if(u && u.resolve)
			{
				var f = u.resolve(void 0);
				e = function()
				{
					f.then(s)
				}
			}
		else e = function()
		{
			o.call(r, s)
		};
		else
		{
			var l = !0,
				p = document.createTextNode("");
			new i(s)
				.observe(p,
				{
					characterData: !0
				}), e = function()
				{
					p.data = l = !l
				}
		}
		return function(r)
		{
			var o = {
				fn: r,
				next: void 0
			};
			n && (n.next = o), t || (t = o, e()), n = o
		}
	}
}, function(t, n, e)
{
	var r = e(1)
		.navigator;
	t.exports = r && r.userAgent || ""
}, function(t, n, e)
{
	var r = e(5);
	t.exports = function(t, n, e)
	{
		for(var o in n) e && t[o] ? t[o] = n[o] : r(t, o, n[o]);
		return t
	}
}, function(t, n, e)
{
	"use strict";
	var r = e(1),
		o = e(3),
		i = e(12),
		c = e(8),
		u = e(2)("species");
	t.exports = function(t)
	{
		var n = "function" == typeof o[t] ? o[t] : r[t];
		c && n && !n[u] && i.f(n, u,
		{
			configurable: !0,
			get: function()
			{
				return this
			}
		})
	}
}, function(t, n, e)
{
	var r = e(2)("iterator"),
		o = !1;
	try
	{
		var i = [7][r]();
		i.return = function()
		{
			o = !0
		}, Array.from(i, (function()
		{
			throw 2
		}))
	}
	catch (n)
	{}
	t.exports = function(t, n)
	{
		if(!n && !o) return !1;
		var e = !1;
		try
		{
			var i = [7],
				c = i[r]();
			c.next = function()
			{
				return {
					done: e = !0
				}
			}, i[r] = function()
			{
				return c
			}, t(i)
		}
		catch (n)
		{}
		return e
	}
}, function(t, n, e)
{
	"use strict";
	var r = e(6),
		o = e(3),
		i = e(1),
		c = e(39),
		u = e(42);
	r(r.P + r.R, "Promise",
	{
		finally: function(t)
		{
			var n = c(this, o.Promise || i.Promise),
				e = "function" == typeof t;
			return this.then(e ? function(e)
			{
				return u(n, t())
					.then((function()
					{
						return e
					}))
			} : t, e ? function(e)
			{
				return u(n, t())
					.then((function()
					{
						throw e
					}))
			} : t)
		}
	})
}, function(t, n, e)
{
	"use strict";
	var r = e(6),
		o = e(23),
		i = e(41);
	r(r.S, "Promise",
	{
		try: function(t)
		{
			var n = o.f(this),
				e = i(t);
			return (e.e ? n.reject : n.resolve)(e.v), n.promise
		}
	})
}, function(t, n, e)
{
	var r = e(3),
		o = r.JSON || (r.JSON = {
			stringify: JSON.stringify
		});
	t.exports = function()
	{
		return o.stringify.apply(o, arguments)
	}
}, function(t, n, e)
{
	t.exports = {
		default: e(82),
		__esModule: !0
	}
}, function(t, n, e)
{
	e(83), t.exports = e(3)
		.Object.assign
}, function(t, n, e)
{
	var r = e(6);
	r(r.S + r.F, "Object",
	{
		assign: e(84)
	})
}, function(t, n, e)
{
	"use strict";
	var r = e(30),
		o = e(85),
		i = e(86),
		c = e(37),
		u = e(31),
		a = Object.assign;
	t.exports = !a || e(18)((function()
	{
		var t = {},
			n = {},
			e = Symbol(),
			r = "abcdefghijklmnopqrst";
		return t[e] = 7, r.split("")
			.forEach((function(t)
			{
				n[t] = t
			})), 7 != a(
			{}, t)[e] || Object.keys(a(
			{}, n))
			.join("") != r
	})) ? function(t)
	{
		for(var n = c(t), e = arguments.length, a = 1, s = o.f, f = i.f; e > a;)
			for(var l, p = u(arguments[a++]), h = s ? r(p)
				.concat(s(p)) : r(p), d = h.length, v = 0; d > v;) f.call(p, l = h[v++]) && (n[l] = p[l]);
		return n
	} : a
}, function(t, n)
{
	n.f = Object.getOwnPropertySymbols
}, function(t, n)
{
	n.f = {}.propertyIsEnumerable
}, function(t)
{
	t.exports = require("fs")
}, function(t)
{
	t.exports = require("lodash")
}]);