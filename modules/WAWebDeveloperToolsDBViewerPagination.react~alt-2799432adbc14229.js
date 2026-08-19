__d("WAWebDeveloperToolsDBViewerPagination.react", [
	"WAWebDeveloperBorderBox.react",
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDeveloperToolsLoadTable",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSIconIcArrowBack.react",
	"WDSIconIcArrowForward.react",
	"err",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		container: {
			maxWidth: "x1j9u4d2",
			$$css: !0
		},
		largeContainer: {
			minWidth: "x13o0s5z",
			maxWidth: "x65f84u",
			$$css: !0
		},
		paginationWrapper: {
			width: "xh8yej3",
			maxHeight: "xkgu5aw",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		}
	}, c = 5;
	function d(e) {
		var t, n = e.offset, a = e.onOffsetChange, i = e.rowCount, l = m(i, n), c = l.canGoBack, d = l.canGoForward, p = l.currentPage, _ = l.endPage, f = l.startPage, g = l.totalPages, h = s.jsx(t = r("WAWebDeveloperToolsDBViewerButton.react"), {
			isActive: c,
			disabled: !c,
			onClick: function() {
				a(n - 1);
			},
			children: s.jsx(r("WDSIconIcArrowBack.react"), {})
		}), y = Array.from({ length: _ - f + 1 }, function(e, t) {
			var n = f + t;
			return s.jsx(r("WAWebDeveloperToolsDBViewerButton.react"), {
				disabled: p === n,
				isActive: p === n,
				onClick: function() {
					a(n - 1);
				},
				children: n
			}, n);
		}), C = s.jsx(t, {
			isActive: d,
			disabled: !d,
			onClick: function() {
				a(n + 1);
			},
			children: s.jsx(r("WDSIconIcArrowForward.react"), {
				height: 30,
				width: 30
			})
		}), b = s.jsxs(s.Fragment, { children: [s.jsx(t, {
			onClick: function() {
				a(0);
			},
			children: "1"
		}), s.jsx(o("WAWebText.react").WAWebTextSmall, { children: "•" })] }), v = s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebText.react").WAWebTextSmall, { children: "•" }), s.jsx(t, {
			onClick: function() {
				a(g - 1);
			},
			children: g
		})] });
		return s.jsx(r("WAWebDeveloperBorderBox.react"), {
			xstyle: u.paginationWrapper,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				xstyle: [u.container, g > 6 && u.largeContainer],
				gap: 4,
				children: [
					h,
					f > 1 && b,
					y,
					_ < g && v,
					C
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e, t) {
		if (e < 0) throw r("err")("Row count is invalid");
		if (t < 0) throw r("err")("Current offset is invalid");
		var n = t + 1, a = n > 1, i = o("WAWebDeveloperToolsLoadTable").MAX_ROWS * n < e, l = Math.ceil(e / o("WAWebDeveloperToolsLoadTable").MAX_ROWS), s = Math.max(1, n - Math.floor(c / 2)), u = Math.min(l, s + c);
		return u - s < c && (s = Math.max(1, l - c)), {
			canGoBack: a,
			currentPage: n,
			canGoForward: i,
			totalPages: l,
			startPage: s,
			endPage: u
		};
	}
	l.DeveloperToolsDBViewerPagination = d, l.getPaginationData = m;
}), 98);
