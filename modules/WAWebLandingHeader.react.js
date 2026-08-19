__d("WAWebLandingHeader.react", [
	"WAWebEnvironment",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebNativeAppDownloadButton.react",
	"WAWebWaLogoIcon.react",
	"WAWebWaWordmarkIcon.react",
	"WAWebWamEnumWebcNativeUpsellCtaSourceType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { paddingInlineEnd6: {
		paddingInlineEnd: "x1icxu4v",
		$$css: !0
	} }, c = {
		brandColor: {
			color: "x1y4xi8",
			$$css: !0
		},
		headerIcon: {
			marginTop: "x1rdy4ex",
			$$css: !0
		},
		headerText: {
			marginInlineStart: "xe9ewy2",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 0,
			xstyle: [u.paddingInlineEnd6, c.headerIcon],
			children: s.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
				height: 30,
				iconXstyle: c.brandColor
			})
		}), t[0] = r) : r = t[0];
		var a;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			xstyle: c.headerText,
			children: s.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
				height: 20,
				iconXstyle: c.brandColor
			})
		}), t[1] = a) : a = t[1];
		var i;
		return t[2] !== n ? (i = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [
				r,
				a,
				n
			]
		}), t[2] = n, t[3] = i) : i = t[3], i;
	}
	function m(e) {
		var t = e.showAppDownloadButton, n = e.surface;
		if (r("WAWebEnvironment").isWindows) return s.jsx("div", { className: "x78zum5 x1okw0bk x6s0dn4 x1nhvcw1 x1p2m28r xse5ku5 x1rcfgkt x11t971q x1chd833 xvc5jky x1ojdt5g xdsw7e4 x1lbx5cb x1vy9x54 x6gp099 x1yualc3" });
		switch (n) {
			case "link-device-screen": return s.jsx(d, { children: s.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 0,
				children: t && s.jsx(r("WAWebNativeAppDownloadButton.react"), { sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_DOWNLOAD_BUTTON })
			}) });
			case "lock-screen": return s.jsx(d, {});
			case "default":
			default: return s.jsx("div", {
				className: "x78zum5 x1okw0bk x6s0dn4 x1nhvcw1 x1p2m28r xse5ku5 x1rcfgkt x11t971q x1chd833 xvc5jky x1ojdt5g xdsw7e4 x1lbx5cb x1vy9x54 x6gp099 x1yualc3",
				children: s.jsx("div", {
					className: "x1rg5ohu xcev3uh x1f6kntn xk50ysn xggjnk3 x1awj2ng xtvhhri xxymvpz",
					children: r("WAWebFbtCommon")("WhatsApp Web")
				})
			});
		}
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
