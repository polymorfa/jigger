__d("WAWebVoipMicOffIndicator.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSIconIcMicOffFilled.react",
	"WDSTooltip.react",
	"react",
	"useWAWebVoipWindowPopoutTooltipProps"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		wrapper: {
			position: "x10l6tqk",
			zIndex: "x1u8a7rm",
			insetInlineStart: "x4brfc7",
			left: null,
			right: null,
			top: "xugynej",
			$$css: !0
		},
		wrapperInset: {
			insetInlineStart: "xxrlk4x",
			left: null,
			right: null,
			top: "xymx5cc",
			$$css: !0
		},
		badge: {
			backgroundColor: "x1rk1j4g",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			color: "x17t9dm2",
			lineHeight: "x14ju556",
			$$css: !0
		},
		small: {
			width: "xvy4d1p",
			height: "xxk0z11",
			$$css: !0
		},
		medium: {
			width: "x1td3qas x154bzus",
			height: "x10w6t97 x1amrg0d",
			$$css: !0
		},
		large: {
			width: "x100vrsf",
			height: "x1vqgdyp",
			$$css: !0
		}
	}, d = {
		small: 14,
		medium: 20,
		large: 24
	};
	function m(e) {
		var t = e.inset, n = e.size, a = n === void 0 ? "medium" : n, i = d[a], l = r("useWAWebVoipWindowPopoutTooltipProps")(), m = l.tooltipAnchorRef, p = l.tooltipOwnerDocument;
		return u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1u8a7rm x4brfc7 xugynej" },
			1: { className: "x10l6tqk x1u8a7rm xxrlk4x xymx5cc" }
		}[(t === !0) << 0], { children: u.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			ownerAnchorRef: m,
			ownerDocument: p,
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				role: "status",
				"aria-label": "Microphone is muted",
				xstyle: [c.badge, c[a]],
				children: u.jsx(r("WDSIconIcMicOffFilled.react"), {
					height: i,
					width: i
				})
			})
		}) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
