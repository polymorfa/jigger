__d("WAFlowsCalendarPickerYearPagesNavigation.react", [
	"LocalDate",
	"WAFlowsCalendarPickerDialogNavigationUtils",
	"WAFlowsDatePickerUtils",
	"WAFlowsEnvContext.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = 15;
	function _(e) {
		var t = e.currentPage, n = e.focusDate, a = e.onFocusDateChange, i = e.onInitialPageCalculated, l = e.onNavigationStateChange, u = e.restraint, _ = o("WAFlowsEnvContext.react").useWAFlowsEnv(), f = _.env, g = m(function() {
			return o("WAFlowsCalendarPickerDialogNavigationUtils").getValidMonthsAndYears(n, u);
		}, [n, u]), h = m(function() {
			return n.getYear();
		}, [n]), y = m(function() {
			return n.getMonth();
		}, [n]), C = m(function() {
			return n.getDayOfMonth();
		}, [n]), b = m(function() {
			return new Date().getFullYear();
		}, []), v = m(function() {
			return o("WAFlowsCalendarPickerDialogNavigationUtils").getMinDateValueForMonthAndYearSelector(g);
		}, [g]), S = m(function() {
			return o("WAFlowsCalendarPickerDialogNavigationUtils").getMaxDateValueForMonthAndYearSelector(g);
		}, [g]), R = m(function() {
			return o("WAFlowsDatePickerUtils").getYears({
				minDateValue: v,
				maxDateValue: S,
				locale: f.locale
			});
		}, [
			v,
			S,
			f.locale
		]), L = m(function() {
			return Math.ceil(R.length / p);
		}, [R.length]), E = m(function() {
			var e = R.findIndex(function(e) {
				return e.value === h;
			});
			return e !== -1 ? Math.floor(e / p) : 0;
		}, [R, h]);
		d(function() {
			i != null && i(E);
		}, [E, i]), d(function() {
			if (l != null) {
				var e = t > 0, n = t < L - 1;
				l(e, n);
			}
		}, [
			t,
			L,
			l
		]);
		var k = m(function() {
			var e = t * p, n = e + p, r = R.slice(e, n), o = p - r.length, a = Array.from({ length: o }, function(e, t) {
				var n = R[R.length - 1], r = n.value + 1 + t;
				return {
					value: r,
					label: String(r),
					isPlaceholder: !0
				};
			});
			return [].concat(r, a);
		}, [R, t]), I = c(function(e, t, n) {
			var o = r("LocalDate").create(e, t, n);
			a(o);
		}, [a]), T = c(function(e) {
			return I(e, y, C);
		}, [
			y,
			C,
			I
		]);
		return s.jsx("div", {
			className: "x1mwbobv xxf0are x1ogmrtr x1sks88i x193iq5w x12t3zde x167vaf5 x2yie3v x8945me x4prdry xrvj5dj x1rp53t7 x1fc8kun",
			children: k.map(function(e) {
				var t = e.isPlaceholder === !0;
				return s.jsx("button", babelHelpers.extends({
					disabled: t,
					"aria-disabled": t,
					onClick: t ? void 0 : function() {
						return T(e.value);
					}
				}, {
					0: { className: "x6s0dn4 xjbqb8w x1iwo8zk x1033uif x179ill4 x1b60jn0 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14ug900 x1ypdohk x78zum5 x170ipx4 x8dwtsl xx621zj xe6o68h xl56j7k x5gkzjs xwaiz5r xh8yej3 x1ubxc9n xs4w0pf xy28gfk" },
					4: { className: "x6s0dn4 x1iwo8zk x1033uif x179ill4 x1b60jn0 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk x78zum5 x170ipx4 x8dwtsl xx621zj xe6o68h xl56j7k x5gkzjs xwaiz5r xh8yej3 xs4w0pf xy28gfk x1abdmlv xk4n5i7 xm38lk9" },
					2: { className: "x6s0dn4 xjbqb8w x1iwo8zk x1033uif x179ill4 x1b60jn0 x1ypdohk x78zum5 x170ipx4 x8dwtsl xx621zj xe6o68h xl56j7k x5gkzjs xwaiz5r xh8yej3 x1ubxc9n xs4w0pf xy28gfk xnj1f2r x2uibgs xkveyfu x12llq9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xo1mcw5" },
					6: { className: "x6s0dn4 x1iwo8zk x1033uif x179ill4 x1b60jn0 x1ypdohk x78zum5 x170ipx4 x8dwtsl xx621zj xe6o68h xl56j7k x5gkzjs xwaiz5r xh8yej3 xs4w0pf xy28gfk x1abdmlv xm38lk9 xnj1f2r x2uibgs xkveyfu x12llq9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xo1mcw5" },
					1: { className: "x6s0dn4 xjbqb8w x1iwo8zk x1033uif x179ill4 x1b60jn0 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x14ug900 x1ypdohk x78zum5 x170ipx4 x8dwtsl xx621zj xe6o68h xl56j7k x5gkzjs xwaiz5r xh8yej3 x1ubxc9n xs4w0pf xy28gfk x47corl" },
					5: { className: "x6s0dn4 x1iwo8zk x1033uif x179ill4 x1b60jn0 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1ypdohk x78zum5 x170ipx4 x8dwtsl xx621zj xe6o68h xl56j7k x5gkzjs xwaiz5r xh8yej3 xs4w0pf xy28gfk x1abdmlv xk4n5i7 xm38lk9 x47corl" },
					3: { className: "x6s0dn4 xjbqb8w x1iwo8zk x1033uif x179ill4 x1b60jn0 x1ypdohk x78zum5 x170ipx4 x8dwtsl xx621zj xe6o68h xl56j7k x5gkzjs xwaiz5r xh8yej3 x1ubxc9n xs4w0pf xy28gfk xnj1f2r x2uibgs xkveyfu x12llq9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xo1mcw5 x47corl" },
					7: { className: "x6s0dn4 x1iwo8zk x1033uif x179ill4 x1b60jn0 x1ypdohk x78zum5 x170ipx4 x8dwtsl xx621zj xe6o68h xl56j7k x5gkzjs xwaiz5r xh8yej3 xs4w0pf xy28gfk x1abdmlv xm38lk9 xnj1f2r x2uibgs xkveyfu x12llq9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xo1mcw5 x47corl" }
				}[(!t && e.value === h) << 2 | (!t && e.value === b) << 1 | !!t << 0], { children: e.label }), e.value);
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
