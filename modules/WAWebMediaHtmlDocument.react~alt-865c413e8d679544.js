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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.Suspense, _ = m.use, f = m.useCallback, g = m.useEffect, h = m.useRef, y = m.useState, C = new WeakMap();
	function b(e) {
		C.delete(e);
	}
	function v(e) {
		var t = C.get(e);
		if (t != null) return t;
		var n = (async function() {
			await e.downloadMedia({
				downloadEvenIfExpensive: !0,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
				isUserInitiated: !0
			});
			var t = await o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(e);
			if (t.blob) return t.blob.text();
			var n = new Error("Failed to download HTML attachment");
			throw n.stack, n;
		})();
		return C.set(e, n), n;
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
		var t = o("react-compiler-runtime").c(13), n = e.filename, a = e.onRetry, i;
		t[0] !== a ? (i = function(t) {
			t.stopPropagation(), t.preventDefault(), a();
		}, t[0] = a, t[1] = i) : i = t[1];
		var l = i, u;
		t[2] !== n ? (u = d.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			maxLines: 2,
			textAlign: "center",
			children: s._(
				/*BTDS*/
				"",
				[s._param("filename", n)]
			)
		}), t[2] = n, t[3] = u) : u = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = d.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			textAlign: "center",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = c) : c = t[4];
		var m;
		t[5] !== u ? (m = d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			gap: 8,
			xstyle: S.errorTextContainer,
			children: [u, c]
		}), t[5] = u, t[6] = m) : m = t[6];
		var p;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[7] = p) : p = t[7];
		var _;
		t[8] !== l ? (_ = d.jsx(r("WDSButton.react"), {
			variant: "filled",
			onPress: l,
			label: p
		}), t[8] = l, t[9] = _) : _ = t[9];
		var f;
		return t[10] !== m || t[11] !== _ ? (f = d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			gap: 24,
			xstyle: S.errorContainer,
			children: [m, _]
		}), t[10] = m, t[11] = _, t[12] = f) : f = t[12], f;
	}
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
		var t = o("react-compiler-runtime").c(14), n = e.containerRef, a = e.mediaData, i = e.msg, l = e.onLoad, s = y(0), c = s[0], m = s[1], _ = y(!1), f = _[0], g = _[1], h;
		t[0] !== i ? (h = function() {
			b(i), g(!1), m(I);
		}, t[0] = i, t[1] = h) : h = t[1];
		var C = h, v;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to load HTML attachment"]))).sendLogs("html-viewer-load-failed"), g(!0);
		}, t[2] = v) : v = t[2];
		var S = v;
		if (f) {
			var L;
			return t[3] !== C || t[4] !== a.filename ? (L = d.jsx(R, {
				filename: a.filename,
				onRetry: C
			}), t[3] = C, t[4] = a.filename, t[5] = L) : L = t[5], L;
		}
		var k;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (k = d.jsx(r("CometHeroHoldTrigger.react"), {
			description: "NoMedia",
			hold: !0
		}), t[6] = k) : k = t[6];
		var T;
		t[7] !== n || t[8] !== i || t[9] !== l ? (T = d.jsx(p, {
			fallback: k,
			children: d.jsx(E, {
				msg: i,
				onLoad: l,
				onError: S,
				containerRef: n
			})
		}), t[7] = n, t[8] = i, t[9] = l, t[10] = T) : T = t[10];
		var D;
		return t[11] !== c || t[12] !== T ? (D = d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "WAWebMediaHtmlDocument",
			onError: S,
			children: T
		}, c), t[11] = c, t[12] = T, t[13] = D) : D = t[13], D;
	}
	function I(e) {
		return e + 1;
	}
	l.default = k;
}), 226);
