__d("WAWebMediaHtmlDocument.react", [
	"fbt",
	"CometHeroHoldTrigger.react",
	"SecureMessageListener",
	"SecurePostMessage",
	"WALogger",
	"WAWebErrorBoundary.react",
	"WAWebFileSaverDownloadData",
	"WAWebFlex.react",
	"WAWebSpinner.react",
	"WAWebTPFrameUrlBuilder",
	"WAWebWamEnumWebcRmrReasonCode",
	"WDSButton.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.Suspense, _ = m.use, f = m.useCallback, g = m.useEffect, h = m.useRef, y = m.useState, C = new WeakMap();
	function b(e) {
		C.delete(e);
	}
	function v(e) {
		var t = C.get(e);
		if (t != null) return t;
		var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield e.downloadMedia({
				downloadEvenIfExpensive: !0,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
				isUserInitiated: !0
			});
			var t = yield o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(e);
			if (t.blob) return t.blob.text();
			var n = new Error("Failed to download HTML attachment");
			throw n.stack, n;
		})();
		return C.set(e, r), r;
	}
	var S = {
		errorContainer: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		errorTextContainer: {
			maxWidth: "x1j9u4d2",
			$$css: !0
		}
	};
	function R(e) {
		var t = e.filename, n = e.onRetry, a = function(t) {
			t.stopPropagation(), t.preventDefault(), n();
		};
		return d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			gap: 24,
			xstyle: S.errorContainer,
			children: [d.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				gap: 8,
				xstyle: S.errorTextContainer,
				children: [d.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					maxLines: 2,
					textAlign: "center",
					children: s._(
						/*BTDS*/
						"",
						[s._param("filename", t)]
					)
				}), d.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					textAlign: "center",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}), d.jsx(r("WDSButton.react"), {
				variant: "filled",
				onPress: a,
				label: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	var L = 15e3;
	function E(t) {
		var n = t.containerRef, a = t.msg, i = t.onError, l = t.onLoad, u = _(v(a)), c = h(null), m = y(!1), p = m[0], f = m[1], C = o("WAWebTPFrameUrlBuilder").getWAWebTPHtmlSandboxUrl(), b = new URL(C).origin;
		return g(function() {
			var t = !1, n = window.setTimeout(function() {
				t || (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["HTML sandbox handshake timed out after ", "ms"])), L).sendLogs("html-viewer-handshake-timeout"), i());
			}, L), a = function(o) {
				var e = o.data;
				if (e != null && typeof e == "object" && e.type === "sandboxReady") {
					t = !0, window.clearTimeout(n);
					var a = c.current;
					(a == null ? void 0 : a.contentWindow) != null && (r("SecurePostMessage").sendMessageToSpecificOrigin(a.contentWindow, {
						type: "renderHtml",
						html: u
					}, b), f(!0));
				}
			}, l = new (r("SecureMessageListener"))(window).setSupportedOrigins(["whatsapp.com", "whatsapp.net"]).setEventHandler(a).beginListening();
			return function() {
				window.clearTimeout(n), l.stopListening();
			};
		}, [
			u,
			i,
			b
		]), d.jsxs("div", {
			ref: n,
			className: "x78zum5 xdt5ytf xh8yej3 x5yr21d x6s0dn4 xl56j7k",
			children: [d.jsx("div", babelHelpers.extends({}, {
				0: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xl56j7k x6s0dn4 x1hc1fzr x19991ni x1d8287x xz4gly6" },
				1: { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 xl56j7k x6s0dn4 x19991ni x1d8287x xz4gly6 xg01cxk" }
			}[!!p << 0], { children: d.jsx(o("WAWebSpinner.react").Spinner, {
				stroke: 6,
				size: 40
			}) })), d.jsx("div", babelHelpers.extends({}, {
				0: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy xg01cxk x1o0tod x19991ni x1d8287x xz4gly6" },
				1: { className: "x10l6tqk x5yr21d xh8yej3 x13vifvy x1o0tod x19991ni x1d8287x xz4gly6 x1hc1fzr" }
			}[!!p << 0], { children: d.jsx("iframe", {
				ref: c,
				src: C,
				sandbox: "allow-scripts allow-same-origin",
				className: "xh8yej3 x5yr21d x972fbf x10w94by x1qhh985 x14e42zd xyi3aci xwf5gio x1p453bz x1suzm8a x1280gxy",
				onLoad: l,
				onError: i,
				title: s._(
					/*BTDS*/
					""
				)
			}) }))]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.containerRef, n = e.mediaData, a = e.msg, i = e.onLoad, l = y(0), s = l[0], c = l[1], m = y(!1), _ = m[0], g = m[1], h = f(function() {
			b(a), g(!1), c(function(e) {
				return e + 1;
			});
		}, [a]), C = f(function() {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to load HTML attachment"]))).sendLogs("html-viewer-load-failed"), g(!0);
		}, []);
		return _ ? d.jsx(R, {
			filename: n.filename,
			onRetry: h
		}) : d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebMediaHtmlDocument",
			onError: C,
			children: d.jsx(p, {
				fallback: d.jsx(r("CometHeroHoldTrigger.react"), {
					description: "NoMedia",
					hold: !0
				}),
				children: d.jsx(E, {
					msg: a,
					onLoad: i,
					onError: C,
					containerRef: t
				})
			})
		}, s);
	}
	k.displayName = k.name + " [from " + i.id + "]", l.default = k;
}), 226);
