__d("WAWebVoipGroupCallPaginationControls.react", [
	"fbt",
	"WDSButton.react",
	"WDSIconIcChevronLeft.react",
	"WDSIconIcChevronRight.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"useWAWebVoipWindowPopoutTooltipProps"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 2, d = { pageNumberHidden: {
		visibility: "xlshs6z",
		$$css: !0
	} };
	function m(e) {
		var t = e.displayPage, n = e.hidden, o = n === void 0 ? !1 : n, a = e.totalPages;
		return a <= c ? null : u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			selectable: !1,
			xstyle: o ? d.pageNumberHidden : void 0,
			children: s._(
				/*BTDS*/
				"",
				[s._param("displayPage", t, [0]), s._param("totalPages", a, [0])]
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.currentPage, n = e.onPrevPage, o = e.size, a = o === void 0 ? "small" : o, i = e.totalPages, l = e.xstyle, c = r("useWAWebVoipWindowPopoutTooltipProps")(), d = c.tooltipAnchorRef, p = c.tooltipOwnerDocument;
		if (i <= 1) return null;
		var _ = t === 0, f = s._(
			/*BTDS*/
			""
		);
		return u.jsxs("div", {
			className: "x3nfvp2 xdt5ytf x6s0dn4 x129bwdz",
			children: [u.jsx(r("WDSTooltip.react"), {
				label: f,
				ownerAnchorRef: d,
				ownerDocument: p,
				children: u.jsx(r("WDSButton.react"), {
					disabled: _,
					directional: !0,
					Icon: r("WDSIconIcChevronLeft.react"),
					onPress: n,
					size: a,
					type: "media",
					variant: "filled",
					xstyle: l,
					"aria-label": f
				})
			}), u.jsx(m, {
				displayPage: t,
				hidden: _,
				totalPages: i
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.currentPage, n = e.onNextPage, o = e.size, a = o === void 0 ? "small" : o, i = e.totalPages, l = e.xstyle, c = r("useWAWebVoipWindowPopoutTooltipProps")(), d = c.tooltipAnchorRef, p = c.tooltipOwnerDocument;
		if (i <= 1) return null;
		var _ = t === i - 1, f = s._(
			/*BTDS*/
			""
		);
		return u.jsxs("div", {
			className: "x3nfvp2 xdt5ytf x6s0dn4 x129bwdz",
			children: [u.jsx(r("WDSTooltip.react"), {
				label: f,
				ownerAnchorRef: d,
				ownerDocument: p,
				children: u.jsx(r("WDSButton.react"), {
					disabled: _,
					directional: !0,
					Icon: r("WDSIconIcChevronRight.react"),
					onPress: n,
					size: a,
					type: "media",
					variant: "filled",
					xstyle: l,
					"aria-label": f
				})
			}), u.jsx(m, {
				displayPage: t + 2,
				hidden: _,
				totalPages: i
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.WAWebVoipGroupCallPrevPageButton = p, l.WAWebVoipGroupCallNextPageButton = _;
}), 226);
