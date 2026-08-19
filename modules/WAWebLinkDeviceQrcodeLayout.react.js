__d("WAWebLinkDeviceQrcodeLayout.react", [
	"fbt",
	"CometHeroHoldTrigger.react",
	"CometPlaceholder.react",
	"WAWebAlternateDeviceLinkingLink.react",
	"WAWebEnvironment",
	"WAWebFlex.react",
	"WAWebHybridRegGating",
	"WAWebLinkDeviceCodeView.react",
	"WAWebLinkDeviceCodeViewCodeType",
	"WAWebSpinner.react",
	"deferredLoadComponent",
	"react",
	"react-compiler-runtime",
	"requireDeferred"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("deferredLoadComponent")(r("requireDeferred")("WAWebLogoutReasonBanner.react").__setRef("WAWebLinkDeviceQrcodeLayout.react")), d = 228;
	function m(e) {
		var t = o("react-compiler-runtime").c(18), n = e.apiCmd, a = e.autoLogoutEnabled, i = e.children, l = e.enabedAlternateDeviceLinking, d = e.onAutoLogoutToggle, m = e.onClickLinkWithPhoneNumber, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = _(), t[0] = p) : p = t[0];
		var f = p, g = m, h;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "WAWebLogoutReasonBanner",
			children: u.jsx(c, {})
		}), t[1] = h) : h = t[1];
		var y;
		t[2] !== l || t[3] !== g ? (y = g != null ? {
			onClick: g,
			shouldShow: l,
			text: s._(
				/*BTDS*/
				""
			)
		} : null, t[2] = l, t[3] = g, t[4] = y) : y = t[4];
		var C;
		t[5] !== l || t[6] !== g ? (C = g != null ? u.jsx(r("WAWebAlternateDeviceLinkingLink.react"), {
			codeType: o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR,
			onClick: g,
			enabled: l
		}) : null, t[5] = l, t[6] = g, t[7] = C) : C = t[7];
		var b;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = {
			0: {},
			2: { className: "x14a8spa x1t7qo4d x1c76a8b xu7uy1i" },
			1: { className: "x18d9i69 xexx8yu" },
			3: { className: "x1t7qo4d xu7uy1i x18d9i69 xexx8yu" }
		}[!!r("WAWebEnvironment").isWindows << 1 | !!(r("WAWebEnvironment").isWindows && o("WAWebHybridRegGating").isHybridRegEnabled()) << 0], t[8] = b) : b = t[8];
		var v;
		t[9] !== i ? (v = u.jsx("div", babelHelpers.extends({}, b, { children: i })), t[9] = i, t[10] = v) : v = t[10];
		var S;
		return t[11] !== n || t[12] !== a || t[13] !== d || t[14] !== y || t[15] !== C || t[16] !== v ? (S = u.jsx(o("WAWebLinkDeviceCodeView.react").LinkDeviceCodeView, {
			codeType: o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR,
			apiCmd: n,
			banners: h,
			title: f,
			autoLogoutEnabled: a,
			onAutoLogoutToggle: d,
			screenReaderSubtitleConfig: y,
			alternativeLinkDeviceMethodHint: C,
			children: v
		}), t[11] = n, t[12] = a, t[13] = d, t[14] = y, t[15] = C, t[16] = v, t[17] = S) : S = t[17], S;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(7), n = e.theme, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8" }, t[0] = a) : a = t[0];
		var i;
		t[1] !== n ? (i = {
			0: "xf39lq1 xh8yej3 x5yr21d x16qb05n xi7iut8 x1dm3dyd x1pv694p",
			1: "xh8yej3 x5yr21d x16qb05n xi7iut8 x1dm3dyd x1pv694p x1od0jb8"
		}[(n === "wds") << 0], t[1] = n, t[2] = i) : i = t[2];
		var l, s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("CometHeroHoldTrigger.react"), {
			description: "WAWebLinkDeviceQrcodeQRSpinner",
			hold: !0
		}), s = u.jsx(o("WAWebSpinner.react").Spinner, {}), t[3] = l, t[4] = s) : (l = t[3], s = t[4]);
		var c;
		return t[5] !== i ? (c = u.jsx("div", babelHelpers.extends({}, a, { children: u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			className: i,
			children: [l, s]
		}) })), t[5] = i, t[6] = c) : c = t[6], c;
	}
	function _() {
		return r("WAWebEnvironment").isWindows ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	_.displayName = _.name + " [from " + i.id + "]", l.WAWebLinkDeviceQrcodeLayout = m, l.QRSpinner = p;
}), 226);
