__d("WAWebDesktopSharerContext.react", [
	"JSResourceForInteraction",
	"WALogger",
	"WAWebEnvironment",
	"WAWebNoop",
	"WAWebPdfViewerTestIds",
	"WAWebTPFrameUrlBuilder",
	"WAWebTPPdfSharer",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.createContext, _ = m.useCallback, f = m.useContext, g = m.useEffect, h = m.useMemo, y = m.useRef, C = m.useState, b = r("JSResourceForInteraction")("WAWebTPReturnPdfHandler").__setRef("WAWebDesktopSharerContext.react"), v = 15, S = "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox", R = 9999, L = 16, E = {
		viewer: null,
		sessionId: "",
		hide: r("WAWebNoop"),
		destroy: r("WAWebNoop"),
		updatePosition: r("WAWebNoop")
	}, k = {
		createSession: function(t, n) {
			return n.onViewerReady(E), "";
		},
		destroySession: r("WAWebNoop"),
		hideSession: r("WAWebNoop"),
		updateSessionPosition: r("WAWebNoop")
	}, I = p(k), T = {
		insetInlineStart: "",
		insetInlineEnd: "",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		pointerEvents: "x67bb7w",
		position: "xixxii4",
		zIndex: "x1q2oy4v",
		$$css: !0
	}, D = {
		sessionContainer: function(t, n, r, o) {
			return [
				T,
				{
					height: o != null ? "x16ye13r" : o,
					left: n != null ? "xgq9j65" : n,
					top: t != null ? "xjbys53" : t,
					width: r != null ? "x5lhr3w" : r,
					$$css: !0
				},
				{
					"--x-height": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(o),
					"--x-left": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(n),
					"--x-top": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(t),
					"--x-width": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(r)
				}
			];
		},
		sessionContainerHidden: {
			height: "xqtp20y",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			visibility: "xlshs6z",
			width: "xnalus7",
			$$css: !0
		},
		sessionContainerInlineRadius: {
			borderStartStartRadius: "xbjudin",
			borderStartEndRadius: "xnlwouz",
			borderEndEndRadius: "xpp8er5",
			borderEndStartRadius: "xs9wviy",
			$$css: !0
		},
		sessionContainerAppRadius: {
			borderStartStartRadius: "xrlxcrs",
			borderStartEndRadius: "x7g1fbw",
			borderEndEndRadius: "xxl59ln",
			borderEndStartRadius: "xmw6rta",
			$$css: !0
		}
	};
	function x(t) {
		var n = t.children, a = C([]), i = a[0], l = a[1], c = y([]), m = y(new Map()), p = y(new Map()), f = y(new Map()), S = y(new Map()), R = y(0);
		g(function() {
			var e = c.current, t = m.current, n = p.current, r = f.current, o = S.current;
			return function() {
				for (var a of t.values()) a.destroy();
				t.clear(), n.clear(), r.clear();
				for (var i of o.values()) i();
				o.clear(), e.length = 0;
			};
		}, []);
		var L = _(function(t) {
			var n = m.current.get(t);
			n != null && (n.destroy(), m.current.delete(t)), p.current.delete(t);
			var r = c.current.indexOf(t);
			r !== -1 && c.current.splice(r, 1);
			var a = f.current.has(t);
			f.current.delete(t);
			var i = S.current.get(t);
			S.current.delete(t), a && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebDesktopSharerContext] evicted pending, no iframe ", ""])), t).sendLogs("webtp-desktop-sharer-evict-pending"), i != null && i();
		}, []), E = _(function(e) {
			L(e), l(function(t) {
				return t.filter(function(t) {
					return t.id !== e;
				});
			});
		}, [L]), k = _(function(e) {
			var t = m.current.get(e);
			t != null && (t.destroy(), m.current.delete(e)), p.current.delete(e), f.current.delete(e), S.current.delete(e);
			var n = c.current.indexOf(e);
			n !== -1 && c.current.splice(n, 1), l(function(t) {
				return t.filter(function(t) {
					return t.id !== e;
				});
			});
		}, []), T = _(function(e) {
			l(function(t) {
				return t.map(function(t) {
					return t.id === e ? babelHelpers.extends({}, t, { visible: !1 }) : t;
				});
			});
		}, []), x = _(function(e, t) {
			l(function(n) {
				return n.map(function(n) {
					return n.id === e ? babelHelpers.extends({}, n, {
						top: t.top,
						left: t.left,
						width: t.width,
						height: t.height,
						visible: !0
					}) : n;
				});
			});
		}, []), P = _(function(e, t) {
			var n = p.current.get(e);
			if (t == null) {
				var a = m.current.get(e);
				a != null && (a.destroy(), m.current.delete(e)), p.current.delete(e);
				return;
			}
			if (!(n === t && m.current.has(e))) {
				var i = m.current.get(e);
				i != null && i.destroy();
				var l = new (o("WAWebTPPdfSharer")).WAWebTPPdfSharer(t);
				m.current.set(e, l), p.current.set(e, t), b.load(), l.listenForReturnPdf(function(e) {
					var t = e.buffer, n = e.fileName;
					b.load().then(function(e) {
						return e({
							buffer: t,
							fileName: n
						});
					}).catch(function(e) {
						o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["webtp return-pdf handler failed"]))).catching(r("getErrorSafe")(e)).sendLogs("webtp-return-pdf-handler-fail");
					});
				}), l.listenForInactive(function() {
					E(e);
				});
				var u = f.current.get(e);
				if (f.current.delete(e), u != null) {
					var c = {
						viewer: l,
						sessionId: e,
						hide: function() {
							return T(e);
						},
						destroy: function() {
							return k(e);
						},
						updatePosition: function(n) {
							return x(e, n);
						}
					};
					u(c);
				}
			}
		}, [
			T,
			k,
			x,
			E
		]), N = _(function(e, t) {
			var n = String(R.current++);
			f.current.set(n, t.onViewerReady), t.onEvicted != null && S.current.set(n, t.onEvicted), c.current.push(n);
			var r = [];
			for (var o of c.current) {
				if (c.current.length - r.length <= v) break;
				o !== n && r.push(o);
			}
			l(function(o) {
				var a = o.filter(function(e) {
					return !r.includes(e.id);
				});
				return a.push({
					id: n,
					top: e.top,
					left: e.left,
					width: e.width,
					height: e.height,
					inline: t.inline === !0,
					visible: !0
				}), a;
			});
			for (var a of r) L(a);
			for (var i of m.current.values()) i.checkInactive();
			return n;
		}, [L]), M = h(function() {
			return {
				createSession: N,
				destroySession: k,
				hideSession: T,
				updateSessionPosition: x
			};
		}, [
			N,
			k,
			T,
			x
		]);
		return d.jsxs(I.Provider, {
			value: M,
			children: [n, d.jsx("div", {
				"data-testid": r("WAWebPdfViewerTestIds").SHARER_POOL,
				className: "x47corl",
				children: i.map(function(e) {
					return d.jsx("div", babelHelpers.extends({ "data-testid": r("WAWebPdfViewerTestIds").SHARER_SESSION_CONTAINER }, (u || (u = r("stylex"))).props(D.sessionContainer(e.top, e.left, e.visible ? e.width : 0, e.visible ? e.height : 0), e.inline ? D.sessionContainerInlineRadius : D.sessionContainerAppRadius, !e.visible && D.sessionContainerHidden), { children: d.jsx($, {
						sessionId: e.id,
						inline: e.inline,
						handleIframeRef: P
					}) }), e.id);
				})
			})]
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(e) {
		var t = o("react-compiler-runtime").c(12), n = e.handleIframeRef, a = e.inline, i = e.sessionId, l;
		t[0] !== n || t[1] !== i ? (l = function(t) {
			return n(i, t);
		}, t[0] = n, t[1] = i, t[2] = l) : l = t[2];
		var s = l, u;
		t[3] !== a ? (u = a ? o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl() : o("WAWebTPFrameUrlBuilder").getWAWebTPPdfSharerUrl(), t[3] = a, t[4] = u) : u = t[4];
		var c = a ? r("WAWebPdfViewerTestIds").EDIT_INLINE_IFRAME : r("WAWebPdfViewerTestIds").EDIT_MODAL_IFRAME, m;
		t[5] !== a ? (m = {
			0: { className: "x972fbf x10w94by x1qhh985 x14e42zd x1lliihq x5yr21d xh8yej3 xrlxcrs x7g1fbw xxl59ln xmw6rta" },
			1: { className: "x972fbf x10w94by x1qhh985 x14e42zd x1lliihq x5yr21d xh8yej3 xbjudin xnlwouz xpp8er5 xs9wviy" }
		}[!!a << 0], t[5] = a, t[6] = m) : m = t[6];
		var p;
		return t[7] !== s || t[8] !== u || t[9] !== c || t[10] !== m ? (p = d.jsx("iframe", babelHelpers.extends({
			ref: s,
			src: u,
			sandbox: S,
			"data-testid": c
		}, m)), t[7] = s, t[8] = u, t[9] = c, t[10] = m, t[11] = p) : p = t[11], p;
	}
	function P(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children;
		if (r("WAWebEnvironment").isWindows) {
			var a;
			return t[0] !== n ? (a = d.jsx(x, { children: n }), t[0] = n, t[1] = a) : a = t[1], a;
		}
		var i;
		return t[2] !== n ? (i = d.jsx(d.Fragment, { children: n }), t[2] = n, t[3] = i) : i = t[3], i;
	}
	function N() {
		return f(I);
	}
	l.MAX_POOL_SIZE = v, l.WAWebDesktopSharerProvider = x, l.WAWebDesktopSharerProviderGate = P, l.useDesktopSharerContext = N;
}), 98);
