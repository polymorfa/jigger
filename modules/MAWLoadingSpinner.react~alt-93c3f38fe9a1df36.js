__d("MAWLoadingSpinner.react", [
	"BaseToasterStateManager",
	"MWXIconCheckmarkCircle",
	"MWXIconStrict.react",
	"MWXProgressRing.react",
	"MWXSpinner.react",
	"mwPushToast",
	"mwReplaceToast",
	"react",
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
		var s = m();
		d(function() {
			if (i) s.current == null ? s.current = o("mwPushToast").mwPushToast(_(e, t, n, l), Number.MAX_SAFE_INTEGER) : o("mwReplaceToast").mwReplaceToast(babelHelpers.extends({}, _(e, t, n, l), { toastId: s.current }));
			else if (s.current != null) {
				var u = s.current;
				f(u, a), r("setTimeout")(function() {
					p.expire(u), s.current = void 0;
				}, 2750);
			}
		}, [
			i,
			t,
			e,
			n,
			l,
			a
		]), c(function() {
			return function() {
				s.current != null && p.expire(s.current);
			};
		}, []);
	}
	l.useMAWLoadingSpinner = g;
}), 98);
