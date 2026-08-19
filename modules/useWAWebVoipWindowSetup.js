__d("useWAWebVoipWindowSetup", [
	"Promise",
	"WALogger",
	"WAResolvable",
	"WAWebFbtCommon",
	"WAWebIdentityFunction",
	"WAWebKeyboardRun",
	"WAWebKeyboardShortcuts",
	"WAWebPopover.react",
	"WAWebRobotoVariableFontLoadable",
	"WAWebUim",
	"WAWebVoipWindowConstants",
	"WDSThemes",
	"asyncToGeneratorRuntime",
	"fbs",
	"react",
	"stylex",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = p || (p = o("react")), f = _.useEffect, g = _.useState, h = "voip-ui-crash-call-ended";
	function y(e) {
		(e != null ? e : window).dispatchEvent(new Event(h));
	}
	var C = "voip-ui-splash-screen-secondary-text";
	function b(t, a) {
		var i = g(function() {
			return document.createElement("div");
		}), l = i[0], c = i[1], p = r("useWAWebStableCallback")(a);
		return f(function() {
			if (!t) return;
			var a = t.logContext, i = t.onBeforeUnload, c = t.onPageHide, _ = t.popoverPortalId, f = t.preventPageRefresh, g = f === void 0 ? !1 : f, y = t.replaceUrl, b = t.setDocumentTitle, L = t.targetWindow, E = function() {
				return k.resolve();
			}, k = new (o("WAResolvable")).Resolvable(), I = function(t) {
				var e = t.key, n = e === "F5" || e === "r" && (t.ctrlKey || t.metaKey) || e === "R" && (t.ctrlKey || t.metaKey);
				n && (t.preventDefault(), t.stopPropagation());
			}, T = function(t) {
				var e = o("WAWebKeyboardShortcuts").getAction(t);
				e && r("WAWebKeyboardRun")(e);
			}, D = null, x = null, $ = null, P = null, N = null;
			function M() {
				return w.apply(this, arguments);
			}
			function w() {
				return w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var t, f = L.document.documentElement;
						if (f || (f = L.document.createElement("html"), L.document.appendChild(f)), !L.document.head) {
							var M = L.document.createElement("head");
							f.prepend(M);
						}
						var w = L.document.createElement("meta");
						w.name = "robots", w.content = "noindex", (t = L.document.head) == null || t.appendChild(w), b == null || b(L.document);
						var A = S(L.document);
						if (!L.document.body) {
							var F = L.document.createElement("body");
							f.appendChild(F);
						}
						L.document.body.appendChild(A), document.documentElement.getAttributeNames().forEach(function(e) {
							var t;
							f.setAttribute(e, (t = document.documentElement.getAttribute(e)) != null ? t : void 0);
						}), document.body.getAttributeNames().forEach(function(e) {
							var t;
							L.document.body.setAttribute(e, (t = document.body.getAttribute(e)) != null ? t : void 0);
						}), L.document.body.classList.add("dark");
						var O = (m || (m = r("stylex")))(o("WDSThemes").WDSDarkTheme).split(" ").filter(Boolean);
						if (O.length > 0) {
							var B;
							(B = L.document.body.classList).add.apply(B, O);
						}
						var W = document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID), q = R(W, L, function(e) {
							return e.style.overflow = "hidden", e;
						});
						q || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: ", ": Could not find popover portal in main page"])), a).sendLogs("voip: " + a + ": Could not find popover portal in main page");
						var U = q != null ? q : {}, V = U.parentRoot, H = V === void 0 ? document.createElement("div") : V, G = U.innermostContainer, z = G === void 0 ? document.createElement("div") : G, j = document.createElement("div");
						D = j, j.id = "app", j.appendChild(H);
						var K = document.createElement("div");
						K.id = _, z.appendChild(K), yield o("WAWebRobotoVariableFontLoadable").requireRobotoVariableFont(), document.readyState === "complete" ? k.resolve() : L.addEventListener("load", E), (d || (d = n("Promise"))).allSettled([].concat(v(document, L.document, a), [k.promise])).then(function() {
							l.setAttribute("style", "height: 100%; width: 100%;"), z.setAttribute("style", "height: 100%; width: 100%;"), z.appendChild(l), L.document.body.appendChild(j), N = function() {
								var e = r("fbs")._(
									/*BTDS*/
									""
								).toString(), t = L.document.getElementById(C);
								t != null && (t.textContent = e), L.setTimeout(function() {
									L.close();
								}, 3e3);
							}, L.addEventListener(h, N), i && L.addEventListener("beforeunload", i), c && L.addEventListener("pagehide", c), p == null || p(L);
						}), x = o("WAWebUim").setupUimListeners(L), g && L.addEventListener("keydown", I, !0), L.addEventListener("keydown", T), $ = function() {
							P != null && window.clearTimeout(P), P = window.setTimeout(function() {
								var e = L.outerWidth, t = L.outerHeight, n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(), r = o("WAWebVoipWindowConstants").getEffectiveMinWindowHeight(), i = e < n, l = t < r;
								if (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
									"voip: ",
									": resize ",
									"x",
									" effectiveMin=",
									"x",
									"",
									""
								])), a, e, t, n, r, i || l ? " -> snap-back" : ""), i || l) try {
									L.resizeTo(Math.max(e, n), Math.max(t, r));
								} catch (e) {}
							}, 200);
						}, L.addEventListener("resize", $);
						try {
							L.history.replaceState(null, "", y != null ? y : window.location.origin);
						} catch (e) {}
					} catch (e) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
							"voip: ",
							": Failed to set up window ",
							""
						])), a, String(e)).sendLogs("voip: " + a + ": Failed to set up window " + String(e));
					}
				}), w.apply(this, arguments);
			}
			return M(), function() {
				D && D.remove(), x == null || x(), L.removeEventListener("load", E), i && L.removeEventListener("beforeunload", i), c && L.removeEventListener("pagehide", c), g && L.removeEventListener("keydown", I, !0), N && L.removeEventListener(h, N), L.removeEventListener("keydown", T), P != null && window.clearTimeout(P), $ && L.removeEventListener("resize", $);
			};
		}, [
			t,
			l,
			p
		]), l;
	}
	function v(e, t, n) {
		var r = [];
		return Array.from(e.styleSheets).forEach(function(a) {
			var i = a, l;
			try {
				l = i.cssRules;
			} catch (e) {
				l = null;
			}
			if (l) {
				var m, p = t.createElement("style");
				Array.from(l).forEach(function(t) {
					p.appendChild(e.createTextNode(t.cssText));
				}), (m = t.head) == null || m.appendChild(p);
			} else {
				var s;
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: ", ": CSS rules not found for stylesheet. Falling back to using href."])), n);
				var u = t.createElement("link");
				u.rel = "stylesheet", u.href = a.href;
				var d = new (o("WAResolvable")).Resolvable();
				u.onload = function() {
					return d.resolve();
				}, u.onerror = function() {
					return d.resolve();
				}, r.push(d.promise), (s = t.head) == null || s.appendChild(u);
			}
		}), r;
	}
	function S(e) {
		var t = e.createElement("div");
		t.className = "WhatsAppWebSplashScreen/initial_startup", t.style.cssText = "align-items: center; background-color: var(--splashscreen-startup-background); display: flex; flex-direction: column; height: 100%; justify-content: center; left: 0; position: fixed; top: 0; user-select: none; width: 100%; font-family: \"Roboto Variable\", \"Roboto\", \"Helvetica Neue\", \"Helvetica\", sans-serif;";
		var n = e.createElement("div");
		n.className = "WhatsAppWebSplashScreen/graphic", n.style.cssText = "margin-top: -40px; color: var(--splashscreen-startup-icon);";
		var o = e.createElement("span"), a = e.createElementNS("http://www.w3.org/2000/svg", "svg");
		a.setAttribute("width", "52"), a.setAttribute("height", "52"), a.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		var i = e.createElementNS("http://www.w3.org/2000/svg", "path");
		i.setAttribute("d", "M37.7 31.2c-.6-.4-3.8-2-4.4-2.1-.6-.2-1-.4-1.4.3l-2 2.5c-.4.4-.8.5-1.5.2-.6-.3-2.7-1-5.1-3.2-2-1.7-3.2-3.8-3.6-4.5-.4-.6 0-1 .3-1.3l1-1.1.6-1.1c.2-.4 0-.8 0-1.1l-2-4.8c-.6-1.3-1.1-1-1.5-1.1h-1.2c-.5 0-1.2.1-1.8.8-.5.6-2.2 2.2-2.2 5.3 0 3.2 2.3 6.3 2.6 6.7.3.4 4.6 7 11 9.7l3.7 1.4c1.5.5 3 .4 4 .2 1.3-.1 3.9-1.5 4.4-3 .5-1.5.5-2.8.4-3-.2-.4-.6-.5-1.3-.8M26 47.2c-3.9 0-7.6-1-11-3l-.7-.4-8.1 2L8.4 38l-.6-.8A21.4 21.4 0 0126 4.4a21.3 21.3 0 0121.4 21.4c0 11.8-9.6 21.4-21.4 21.4M44.2 7.6a25.8 25.8 0 00-40.6 31L0 52l13.7-3.6A25.8 25.8 0 0044.3 7.5"), i.setAttribute("fill", "currentColor"), a.appendChild(i), o.appendChild(a), n.appendChild(o);
		var l = e.createElement("div");
		l.className = "WhatsAppWebSplashScreen/main", l.style.cssText = "margin-top: 20px; font-size: 18px; -webkit-font-smoothing: antialiased; color: var(--splashscreen-primary-title);", l.textContent = r("WAWebFbtCommon")("WhatsApp").toString();
		var s = e.createElement("div");
		return s.id = C, s.className = "WhatsAppWebSplashScreen/secondary", s.style.cssText = "margin-top: 32px; font-size: 14px; -webkit-font-smoothing: antialiased; color: var(--splashscreen-secondary-lighter);", s.textContent = r("fbs")._(
			/*BTDS*/
			""
		).toString(), t.appendChild(n), t.appendChild(l), t.appendChild(s), t;
	}
	function R(e, t, n) {
		if (n === void 0 && (n = o("WAWebIdentityFunction").identityFunction), e == null) return null;
		for (var r = [], a = e == null ? void 0 : e.parentElement; a && a !== document.body;) r.push(a), a = a.parentElement;
		var i = document.createElement("div"), l = r.map(function(e) {
			var r = t.document.importNode(e, !1);
			return r instanceof t.HTMLElement ? n(r) : r;
		}).reduce(function(e, t) {
			return t.appendChild(e), t;
		}, i);
		return {
			parentRoot: l,
			innermostContainer: i
		};
	}
	l.onReactVoipUiCrash = y, l.useVoipWindowSetup = b;
}), 226);
