__d("WAWebBizAdCreationInlineValidationNotices.react", [
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationNoticesUtils",
	"WAWebBizAdLogger",
	"WAWebBizInlineValidationNotice.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationInlineValidationNotices",
	"useWAWebBizAdCreationResolvedNoticeActionOverrides",
	"useWAWebBizAdCreationResolvedNoticeCTAOverrides"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = { container: {
		rowGap: "x1qvou4u",
		$$css: !0
	} };
	function f(e) {
		return o("WAWebBizAdCreationNoticesUtils").ERROR_SEVERITIES.includes(e) ? "error" : o("WAWebBizAdCreationNoticesUtils").SUCCESS_SEVERITIES.includes(e) ? "success" : o("WAWebBizAdCreationNoticesUtils").TIP_SEVERITIES.includes(e) ? "tip" : "warning";
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(17), n = e.showHighestPriorityOnly, a = e.specElement, i = n === void 0 ? !1 : n, l = r("useWAWebBizAdCreationInlineValidationNotices")(a, i), u = c(r("WAWebBizAdCreationLoggerContext")), m = r("useWAWebBizAdCreationResolvedNoticeActionOverrides")(), g = r("useWAWebBizAdCreationResolvedNoticeCTAOverrides")(), y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (y = new Set(), t[0] = y) : y = t[0];
		var C = p(y), b;
		t[1] !== l ? (b = l.flatMap(h), t[1] = l, t[2] = b) : b = t[2];
		var v = b, S, R;
		if (t[3] !== u || t[4] !== v || t[5] !== a ? (S = function() {
			u == null || v.length === 0 || v.forEach(function(e) {
				var t = a + "-" + String(e.noticeName) + "-" + e.message.toString();
				if (!C.current.has(t)) {
					var n;
					C.current.add(t), r("WAWebBizAdLogger").logValidationNoticeImpression({
						extra: { notice_type: "inline" },
						loggerContext: u,
						messageType: e.severity,
						noticeName: (n = e.noticeName) != null ? n : null,
						specElement: a
					});
				}
			});
		}, R = [
			u,
			v,
			a
		], t[3] = u, t[4] = v, t[5] = a, t[6] = S, t[7] = R) : (S = t[6], R = t[7]), d(S, R), v.length === 0) return null;
		var L;
		if (t[8] !== v || t[9] !== g || t[10] !== m) {
			var E;
			t[12] !== g || t[13] !== m ? (E = function(t, n) {
				var e;
				return s.jsx(r("WAWebBizInlineValidationNotice.react"), {
					cta: (e = t.noticeName != null ? g[t.noticeName] : void 0) != null ? e : t.cta,
					message: t.message,
					onActionOverride: t.noticeName != null ? m[t.noticeName] : void 0,
					type: f(t.severity)
				}, n);
			}, t[12] = g, t[13] = m, t[14] = E) : E = t[14], L = v.map(E), t[8] = v, t[9] = g, t[10] = m, t[11] = L;
		} else L = t[11];
		var k;
		return t[15] !== L ? (k = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.container,
			children: L
		}), t[15] = L, t[16] = k) : k = t[16], k;
	}
	function h(e) {
		var t = e.cta, n = e.description, r = e.noticeName, o = e.severity;
		return n == null || n.toString().trim() === "" ? [] : [{
			cta: t,
			message: n,
			noticeName: r,
			severity: o
		}];
	}
	l.default = g;
}), 98);
