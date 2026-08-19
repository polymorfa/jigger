__d("WAFlowsCopyIndividualFieldsTooltipNUX.react", [
	"fbt",
	"FBLogger",
	"WAFlowsConfigurationContext.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsIcon.react",
	"WAFlowsInitEnvironmentTypes",
	"WDSNativeFocusTrap.react",
	"WebAsyncStorage",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useLayoutEffect, p = c.useState, _ = "xbo7t1b-B", f = "xyss6yv-B", g = { closeButton: {
		backgroundColor: "xtwfq29",
		height: "x6w4g8m",
		width: "x10vfzb2",
		$$css: !0
	} };
	function h(e) {
		var t = e.ref, n = e.target, a = o("WAFlowsConfigurationContext.react").useWAFlowsConfiguration(), i = a.allowCopyFieldsInSMBResponse, l = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController().flowInitData, c = l[0], _ = p(), f = _[0], h = _[1], y = p(), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1];
		m(function() {
			var e = n.current;
			if (e != null) {
				var t = e.getBoundingClientRect(), r = -8, o = Math.min(t.width * .1, 20), a = t.height + e.offsetTop + r, i = e.offsetLeft + o;
				b({
					marginTop: a,
					marginLeft: i
				});
			}
		}, [n]);
		var L = "wae_copy_fields_tooltip_nux_dismissed";
		d(function() {
			r("WebAsyncStorage").getItem(L, function(e, t) {
				if (e) {
					r("FBLogger")("wa_flows").warn("Error getting %s from storage: %s", L, String(e));
					return;
				}
				h(!!t), R(!t);
			});
		}, []);
		var E = function() {
			r("WebAsyncStorage").setItem(L, !0, function(e) {
				e && r("FBLogger")("wa_flows").warn("Error setting %s in storage: %s", L, String(e));
			}), h(!0);
		}, k = (c == null ? void 0 : c.environment.response_viewer) === o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB;
		return !i || !k || !S ? null : u.jsx(r("WDSNativeFocusTrap.react"), { children: u.jsxs("div", {
			ref: t,
			className: {
				0: "x78zum5 xdt5ytf x10l6tqk xowaa7l x1xto104 x14zcgw3 xezivpi x1vvkbs xg01cxk xjibb99 x4afe7t x10e4vud x1vjfegm",
				2: "x78zum5 xdt5ytf x10l6tqk xowaa7l x1xto104 x14zcgw3 xezivpi x1vvkbs xg01cxk xjibb99 x4afe7t x10e4vud x1vjfegm xwaqgkh xa3vuyk",
				1: "x78zum5 xdt5ytf x10l6tqk xowaa7l x1xto104 x14zcgw3 xezivpi x1vvkbs xg01cxk xjibb99 x4afe7t x10e4vud x1vjfegm x1latf0r xmmqq2k xoc0nem",
				3: "x78zum5 xdt5ytf x10l6tqk xowaa7l x1xto104 x14zcgw3 xezivpi x1vvkbs xg01cxk xjibb99 x4afe7t x10e4vud x1vjfegm x1latf0r xmmqq2k xoc0nem"
			}[(f === !0) << 1 | (f === !1) << 0],
			onAnimationEnd: function() {
				return R(!f);
			},
			style: C,
			tabIndex: 0,
			children: [u.jsx("svg", {
				width: "20",
				height: "8",
				viewBox: "0 0 20 8",
				fill: "none",
				"aria-hidden": "true",
				className: "xxpymi5",
				children: u.jsx("path", {
					d: "M0 8C3.80952 8 7.44667 0 10 0C12.5538 0 16.191 8 20 8L0 8Z",
					fill: "var(--WDS-surface-inverse)"
				})
			}), u.jsxs("div", {
				className: "x78zum5 xfex06f xpip370 x1y1aw1k xpdmqnj xwib8y2 x1g0dm76 x1obq294 x5a5i1n xde0f50 x15x8krk",
				children: [s._(
					/*BTDS*/
					""
				), u.jsx("button", {
					className: "x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1heor9g xexx8yu xyri2b x18d9i69 x1c1uobl xjbqb8w",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					type: "button",
					"data-testid": void 0,
					onClick: E,
					children: u.jsx(r("WAFlowsIcon.react"), {
						id: "waf_cross",
						xstyle: g.closeButton
					})
				})]
			})]
		}) });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
