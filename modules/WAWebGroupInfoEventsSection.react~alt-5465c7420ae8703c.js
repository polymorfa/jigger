__d("WAWebGroupInfoEventsSection.react", [
	"fbt",
	"WAWebChevronIcon.react",
	"WAWebDrawerSection.react",
	"WAWebEventPreviewBlock.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebSpinner.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebEventFutureEvents"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, g = {
		eventCount: {
			fontSize: "x6prxxf",
			color: "xhslqc4",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		outerContainer: {
			width: "xh8yej3",
			boxSizing: "x9f619",
			position: "x1n2onr6",
			$$css: !0
		},
		withStartFade: {
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_insetInlineStart": "x1682cnc",
			"::before_left": null,
			"::before_right": null,
			"::before_backgroundImage": "xg0bfl6",
			"::before_width": "x1o4m6q",
			"::before_height": "xszcg87",
			$$css: !0
		},
		withStartFadeRtl: {
			"::before_content": "x1cpjm7i",
			"::before_position": "x1hmns74",
			"::before_top": "x1y3wzot",
			"::before_insetInlineStart": "x1682cnc",
			"::before_left": null,
			"::before_right": null,
			"::before_backgroundImage": "xo1xex6",
			"::before_width": "x1o4m6q",
			"::before_height": "xszcg87",
			$$css: !0
		},
		withEndFade: {
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_top": "x1m1drc7",
			"::after_insetInlineEnd": "x1unh1gc",
			"::after_left": null,
			"::after_right": null,
			"::after_backgroundImage": "x10tw4oa",
			"::after_width": "xk69ee5",
			"::after_height": "x1wsn0xg",
			$$css: !0
		},
		withEndFadeRtl: {
			"::after_content": "x1s928wv",
			"::after_position": "x1j6awrg",
			"::after_top": "x1m1drc7",
			"::after_insetInlineEnd": "x1unh1gc",
			"::after_left": null,
			"::after_right": null,
			"::after_backgroundImage": "x12nvoqz",
			"::after_width": "xk69ee5",
			"::after_height": "x1wsn0xg",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.chat, a = t.onAllEvents, i = t.onEventInfo, l = o("useWAWebEventFutureEvents").useFutureEvents(n), u = _(!1), d = u[0], h = u[1], C = _(!0), b = C[0], v = C[1], S = p(null), R = p(null);
		if (m(function() {
			var e = R.current, t = function() {
				if (e == null) {
					v(!1), h(!1);
					return;
				}
				var t = e.clientWidth, n = e.scrollLeft, r = e.scrollWidth, o = Math.abs(n / (r - t));
				o > .05 ? h(!0) : h(!1), o > .95 ? v(!1) : v(!0);
			};
			return e == null || e.addEventListener("scroll", t), function() {
				e == null || e.removeEventListener("scroll", t);
			};
		}, [l.length]), l.length === 0) return null;
		var L = l.length === 1, E = s._(
			/*BTDS*/
			""
		), k = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			iconXstyle: g.secondaryColor,
			directional: !0,
			height: 21
		}), I = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [c.jsx(y, { msgs: l }), c.jsx("div", { children: k })]
		}), T = l.map(function(e) {
			return c.jsx(r("WAWebEventPreviewBlock.react"), {
				eventMsg: e,
				fullWidth: L,
				onClick: function() {
					return i(e);
				}
			}, e.id.toString());
		}), D = r("WAWebL10N").isRTL() ? g.withEndFadeRtl : g.withEndFade, x = r("WAWebL10N").isRTL() ? g.withStartFadeRtl : g.withStartFade;
		return c.jsx(r("WAWebDrawerSection.react"), {
			subtitle: I,
			theme: "chat-info",
			title: E,
			titleOnClick: a,
			titleTestId: "section-events",
			xstyle: T.length > 0 && f.paddingBottom10,
			children: c.jsx("div", babelHelpers.extends({ ref: S }, (e || (e = r("stylex"))).props([g.outerContainer, o("WDSPaddings.stylex").wdsPaddings.paddingHor20].concat(b && !L ? [D] : [], d && !L ? [x] : [])), { children: c.jsx("div", {
				ref: R,
				className: "xw2csxc x10wlt62 xuxw1ft",
				dir: "auto",
				children: T
			}) }))
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.msgs, a = n.length;
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([g.eventCount, o("WDSMargins.stylex").wdsMargins.marginEnd8]), { children: a != null ? s._(
			/*BTDS*/
			"",
			[s._param("number-of-events", a, [0, a])]
		) : c.jsx(o("WAWebSpinner.react").Spinner, {
			size: 16,
			stroke: 6
		}) }));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = h;
}), 226);
