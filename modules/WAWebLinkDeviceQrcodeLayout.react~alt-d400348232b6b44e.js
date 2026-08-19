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
	"requireDeferred"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("deferredLoadComponent")(r("requireDeferred")("WAWebLogoutReasonBanner.react").__setRef("WAWebLinkDeviceQrcodeLayout.react")), d = 228;
	function m(e) {
		var t = e.apiCmd, n = e.autoLogoutEnabled, a = e.children, i = e.enabedAlternateDeviceLinking, l = e.onAutoLogoutToggle, d = e.onClickLinkWithPhoneNumber, m = e.theme, p = _(), f = d;
		return u.jsx(o("WAWebLinkDeviceCodeView.react").LinkDeviceCodeView, {
			codeType: o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR,
			apiCmd: t,
			banners: u.jsx(r("CometPlaceholder.react"), {
				fallback: null,
				name: "WAWebLogoutReasonBanner",
				children: u.jsx(c, {})
			}),
			title: p,
			autoLogoutEnabled: n,
			onAutoLogoutToggle: l,
			screenReaderSubtitleConfig: f != null ? {
				onClick: f,
				shouldShow: i,
				text: s._(
					/*BTDS*/
					""
				)
			} : null,
			alternativeLinkDeviceMethodHint: f != null ? u.jsx(r("WAWebAlternateDeviceLinkingLink.react"), {
				codeType: o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR,
				onClick: f,
				enabled: i
			}) : null,
			children: u.jsx("div", babelHelpers.extends({}, {
				0: {},
				2: { className: "x14a8spa x1t7qo4d x1c76a8b xu7uy1i" },
				1: { className: "x18d9i69 xexx8yu" },
				3: { className: "x1t7qo4d xu7uy1i x18d9i69 xexx8yu" }
			}[!!r("WAWebEnvironment").isWindows << 1 | !!(r("WAWebEnvironment").isWindows && o("WAWebHybridRegGating").isHybridRegEnabled()) << 0], { children: a }))
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.theme;
		return u.jsx("div", {
			className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				className: {
					0: "xf39lq1 xh8yej3 x5yr21d x16qb05n xi7iut8 x1dm3dyd x1pv694p",
					1: "xh8yej3 x5yr21d x16qb05n xi7iut8 x1dm3dyd x1pv694p x1od0jb8"
				}[(t === "wds") << 0],
				children: [u.jsx(r("CometHeroHoldTrigger.react"), {
					description: "WAWebLinkDeviceQrcodeQRSpinner",
					hold: !0
				}), u.jsx(o("WAWebSpinner.react").Spinner, {})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
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
