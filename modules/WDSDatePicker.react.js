__d("WDSDatePicker.react", [
	"fbt",
	"WDSDatePickerPopover.react",
	"WDSDatePickerTextFieldTrigger.react",
	"WDSDatePickerTrigger.react",
	"WDSDatePickerUtils",
	"emptyArray",
	"nullthrows",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState;
	function g(e) {
		var t, n = e.count, a = n === void 0 ? 1 : n, i = e.disableAfterDate, l = e.disableBeforeDate, c = e.disabled, g = c === void 0 ? !1 : c, h = e.initialDate, y = e.label, C = e.locale, b = e.mode, v = b === void 0 ? "single" : b, S = e.onChange, R = e.onRangeChange, L = e.placeholder, E = e.rangeValue, k = e.showClearButton, I = k === void 0 ? !0 : k, T = e.showTodayButton, D = T === void 0 ? !0 : T, x = e.size, $ = x === void 0 ? "medium" : x, P = e.testID, N = e.value, M = _(null), w = _(null), A = f(null), F = A[0], O = A[1], B = v === "birthday", W = v === "single" || B, q = d(function(e) {
			S != null && S(B ? o("WDSDatePickerUtils").toBirthdayDate(e) : e);
		}, [B, S]), U = d(function(e) {
			var t, n, r, a = (t = E == null ? void 0 : E.start) != null ? t : null, i = (n = E == null ? void 0 : E.end) != null ? n : null;
			if (w.current == null && (a == null || i != null)) {
				w.current = e, O(e), R != null && R({
					start: e,
					end: null
				});
				return;
			}
			var l = (r = w.current) != null ? r : a, s = o("WDSDatePickerUtils").normalizeRange(l, e);
			w.current = null, O(null), R != null && R(s);
		}, [
			R,
			E == null ? void 0 : E.start,
			E == null ? void 0 : E.end
		]), V = _(null), H = d(function(e) {
			if (W) q(e);
			else {
				var t = w.current == null && ((E == null ? void 0 : E.start) == null || (E == null ? void 0 : E.end) != null);
				if (U(e), !t) {
					var n = V.current;
					n != null && n();
				}
			}
		}, [
			W,
			q,
			U,
			E == null ? void 0 : E.start,
			E == null ? void 0 : E.end
		]), G = d(function() {
			w.current = null, O(null), W ? S != null && S(null) : R != null && R({
				start: null,
				end: null
			});
		}, [
			W,
			S,
			R
		]), z = d(function() {
			var e = new Date();
			W ? q(e) : (w.current = null, O(null), R != null && R({
				start: e,
				end: e
			}));
			var t = V.current;
			t != null && t();
		}, [
			W,
			q,
			R
		]), j = p(function() {
			var e;
			if (W) return N == null ? r("emptyArray") : [B ? r("nullthrows")(o("WDSDatePickerUtils").toBirthdayDate(N)) : N];
			var t = (e = E == null ? void 0 : E.start) != null ? e : F, n = E == null ? void 0 : E.end;
			return [t, n].filter(Boolean);
		}, [
			W,
			B,
			N,
			E == null ? void 0 : E.start,
			E == null ? void 0 : E.end,
			F
		]), K = p(function() {
			var e, t;
			if (W) return r("emptyArray");
			var n = (e = E == null ? void 0 : E.start) != null ? e : null, a = (t = E == null ? void 0 : E.end) != null ? t : null;
			return o("WDSDatePickerUtils").getRangeHighlightDates(n, a);
		}, [
			W,
			E == null ? void 0 : E.start,
			E == null ? void 0 : E.end
		]), Q = d(function() {
			w.current = null, O(null);
		}, []), X = p(function() {
			var e, t, n;
			return B ? (e = o("WDSDatePickerUtils").toBirthdayDate(N != null ? N : h)) != null ? e : new Date(o("WDSDatePickerUtils").BIRTHDAY_CANONICAL_YEAR, new Date().getMonth(), 1) : (t = (n = h != null ? h : N) != null ? n : E == null ? void 0 : E.start) != null ? t : void 0;
		}, [
			B,
			N,
			h,
			E == null ? void 0 : E.start
		]), Y = u.jsx(r("WDSDatePickerPopover.react"), {
			count: a,
			disableAfterDate: B ? void 0 : i,
			disableBeforeDate: B ? void 0 : l,
			hideYear: B,
			highlightedDates: K,
			initialDate: X,
			locale: C,
			onClear: G,
			onSelected: H,
			onToday: z,
			selectedDates: j,
			showClearButton: I,
			showTodayButton: D,
			testID: P,
			useCustomHeader: W
		}), J = r("useWDSMenu")({
			align: "start",
			enableUIM: !1,
			menu: Y,
			onClose: Q,
			position: "below",
			targetRef: M
		}), Z = J.closeMenu, ee = J.isMenuOpen, te = J.menuPortal, ne = J.openMenu;
		m(function() {
			V.current = Z;
		}, [Z]);
		var re = d(function() {
			g || (ee ? Z() : ne());
		}, [
			g,
			ee,
			Z,
			ne
		]);
		if (W) {
			var oe, ae = (oe = y != null ? y : L) != null ? oe : B ? o("WDSDatePickerUtils").getMonthDayInputMask(C) : s._(
				/*BTDS*/
				""
			), ie = function(t) {
				S != null && S(B ? o("WDSDatePickerUtils").toBirthdayDate(t) : t);
			};
			return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSDatePickerTextFieldTrigger.react"), {
				disabled: g,
				hideYear: B,
				label: ae,
				locale: C,
				onOpenPopover: re,
				onValueChange: ie,
				ref: M,
				testID: P,
				value: N
			}), te] });
		}
		var le = o("WDSDatePickerUtils").formatRangeLocalized(E == null ? void 0 : E.start, E == null ? void 0 : E.end, C), se = (t = y != null ? y : L) != null ? t : null;
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSDatePickerTrigger.react"), {
			ariaLabel: se,
			disabled: g,
			displayValue: le,
			isOpen: ee,
			onPress: re,
			placeholder: L,
			ref: M,
			size: $,
			testID: P
		}), te] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
