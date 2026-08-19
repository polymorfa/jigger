__d("WAWebBizAdCreationInlineValidationNotices.react", [
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationNoticesUtils",
	"WAWebBizAdLogger",
	"WAWebBizInlineValidationNotice.react",
	"WAWebFlex.react",
	"react",
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
		var t = e.showHighestPriorityOnly, n = t === void 0 ? !1 : t, a = e.specElement, i = r("useWAWebBizAdCreationInlineValidationNotices")(a, n), l = c(r("WAWebBizAdCreationLoggerContext")), u = r("useWAWebBizAdCreationResolvedNoticeActionOverrides")(), g = r("useWAWebBizAdCreationResolvedNoticeCTAOverrides")(), h = p(new Set()), y = m(function() {
			return i.flatMap(function(e) {
				var t = e.cta, n = e.description, r = e.noticeName, o = e.severity;
				return n == null || n.toString().trim() === "" ? [] : [{
					cta: t,
					message: n,
					noticeName: r,
					severity: o
				}];
			});
		}, [i]);
		return d(function() {
			l == null || y.length === 0 || y.forEach(function(e) {
				var t = a + "-" + String(e.noticeName) + "-" + e.message.toString();
				if (!h.current.has(t)) {
					var n;
					h.current.add(t), r("WAWebBizAdLogger").logValidationNoticeImpression({
						extra: { notice_type: "inline" },
						loggerContext: l,
						messageType: e.severity,
						noticeName: (n = e.noticeName) != null ? n : null,
						specElement: a
					});
				}
			});
		}, [
			l,
			y,
			a
		]), y.length === 0 ? null : s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.container,
			children: y.map(function(e, t) {
				var n;
				return s.jsx(r("WAWebBizInlineValidationNotice.react"), {
					cta: (n = e.noticeName != null ? g[e.noticeName] : void 0) != null ? n : e.cta,
					message: e.message,
					onActionOverride: e.noticeName != null ? u[e.noticeName] : void 0,
					type: f(e.severity)
				}, t);
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
