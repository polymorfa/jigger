__d("MAWLoadingSpinner.react", [
	"BaseToasterStateManager",
	"MWXIconCheckmarkCircle",
	"MWXIconStrict.react",
	"MWXProgressRing.react",
	"MWXSpinner.react",
	"mwPushToast",
	"mwReplaceToast",
	"react",
	"react-compiler-runtime",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useLayoutEffect, m = u.useRef, p = r("BaseToasterStateManager").getInstance();
	function _(e, t, n, o) {
		return o === void 0 && (o = 0), e === "spinner" ? {
			icon: { comet: s.jsx(r("MWXSpinner.react"), {
				color: t ? "light" : "dark",
				size: 24
			}) },
			startAddOn: { type: "spinner" },
			title: n
		} : e === "progressRing" ? {
			icon: { comet: s.jsx(r("MWXProgressRing.react"), {
				color: t ? "light" : "dark",
				size: 24
			}) },
			startAddOn: {
				source: o,
				type: "progressRing"
			},
			title: n
		} : {
			icon: { comet: s.jsx(r("MWXSpinner.react"), {
				color: t ? "light" : "dark",
				size: 24
			}) },
			startAddOn: { type: "spinner" },
			title: n
		};
	}
	function f(e, t) {
		o("mwReplaceToast").mwReplaceToast({
			icon: {
				comet: s.jsx(r("MWXIconStrict.react"), {
					icon: r("MWXIconCheckmarkCircle"),
					size: 24
				}),
				mds: r("MWXIconCheckmarkCircle").component
			},
			title: t,
			toastId: e
		});
	}
	function g(e, t, n, a, i, l) {
		var s = o("react-compiler-runtime").c(10), u = m(), g, h;
		s[0] !== a || s[1] !== t || s[2] !== l || s[3] !== n || s[4] !== i || s[5] !== e ? (g = function() {
			if (i) u.current == null ? u.current = o("mwPushToast").mwPushToast(_(e, t, n, l), Number.MAX_SAFE_INTEGER) : o("mwReplaceToast").mwReplaceToast(babelHelpers.extends({}, _(e, t, n, l), { toastId: u.current }));
			else if (u.current != null) {
				var s = u.current;
				f(s, a), r("setTimeout")(function() {
					p.expire(s), u.current = void 0;
				}, 2750);
			}
		}, h = [
			i,
			t,
			e,
			n,
			l,
			a
		], s[0] = a, s[1] = t, s[2] = l, s[3] = n, s[4] = i, s[5] = e, s[6] = g, s[7] = h) : (g = s[6], h = s[7]), d(g, h);
		var y, C;
		s[8] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			return function() {
				u.current != null && p.expire(u.current);
			};
		}, C = [], s[8] = y, s[9] = C) : (y = s[8], C = s[9]), c(y, C);
	}
	l.useMAWLoadingSpinner = g;
}), 98);
