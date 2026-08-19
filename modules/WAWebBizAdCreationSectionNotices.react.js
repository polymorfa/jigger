__d("WAWebBizAdCreationSectionNotices.react", [
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationNoticeCard.react",
	"WAWebBizAdLogger",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"useVisibility",
	"useWAWebBizAdCreationNotices",
	"useWAWebBizAdCreationResolvedNoticeActionOverrides"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useRef, p = u.useState, _ = { container: {
		rowGap: "x1qvou4u",
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(18), n = e.specElement, a = r("useWAWebBizAdCreationNotices")(n), i = r("useWAWebBizAdCreationResolvedNoticeActionOverrides")(), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = new Set(), t[0] = l) : l = t[0];
		var u = p(l), c = u[0], f = u[1], g = d(r("WAWebBizAdCreationLoggerContext")), h;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (h = new Set(), t[1] = h) : h = t[1];
		var y = m(h), C;
		t[2] !== c || t[3] !== g || t[4] !== a || t[5] !== n ? (C = { onVisible: function() {
			g != null && a.forEach(function(e, t) {
				if (!c.has(t) && e.noticeName != null) {
					var o = n + "-" + e.noticeName + "-" + String(e.title);
					y.current.has(o) || (y.current.add(o), r("WAWebBizAdLogger").logValidationNoticeImpression({
						loggerContext: g,
						messageType: e.severity,
						noticeName: e.noticeName,
						specElement: n
					}));
				}
			});
		} }, t[2] = c, t[3] = g, t[4] = a, t[5] = n, t[6] = C) : C = t[6];
		var b = r("useVisibility")(C), v = b[0], S;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (S = function(t) {
			f(function(e) {
				var n = new Set(e);
				return n.add(t), n;
			});
		}, t[7] = S) : S = t[7];
		var R = S, L = a.filter(function(e, t) {
			return !c.has(t);
		});
		if (L.length === 0) return null;
		var E;
		if (t[8] !== c || t[9] !== a || t[10] !== i) {
			var k;
			t[12] !== c || t[13] !== i ? (k = function(t, n) {
				var e, o;
				if (c.has(n)) return null;
				var a = t.noticeName;
				return s.jsx(r("WAWebBizAdCreationNoticeCard.react"), {
					cta: t.cta,
					message: (e = t.description) == null ? void 0 : e.toString(),
					onActionOverride: a != null ? i[a] : void 0,
					onDismiss: t.dismissable === !0 ? function() {
						return R(n);
					} : void 0,
					severity: t.severity,
					title: (o = t.title) == null ? void 0 : o.toString()
				}, n);
			}, t[12] = c, t[13] = i, t[14] = k) : k = t[14], E = a.map(k), t[8] = c, t[9] = a, t[10] = i, t[11] = E;
		} else E = t[11];
		var I;
		return t[15] !== E || t[16] !== v ? (I = s.jsx(o("WAWebFlex.react").FlexColumn, {
			ref: v,
			align: "stretch",
			xstyle: _.container,
			children: E
		}), t[15] = E, t[16] = v, t[17] = I) : I = t[17], I;
	}
	l.default = f;
}), 98);
