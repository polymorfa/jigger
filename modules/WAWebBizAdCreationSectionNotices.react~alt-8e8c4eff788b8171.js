__d("WAWebBizAdCreationSectionNotices.react", [
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationNoticeCard.react",
	"WAWebBizAdLogger",
	"WAWebFlex.react",
	"react",
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
		var t = e.specElement, n = r("useWAWebBizAdCreationNotices")(t), a = r("useWAWebBizAdCreationResolvedNoticeActionOverrides")(), i = p(new Set()), l = i[0], u = i[1], f = d(r("WAWebBizAdCreationLoggerContext")), g = m(new Set()), h = r("useVisibility")({ onVisible: function() {
			f != null && n.forEach(function(e, n) {
				if (!l.has(n) && e.noticeName != null) {
					var o = t + "-" + e.noticeName + "-" + String(e.title);
					g.current.has(o) || (g.current.add(o), r("WAWebBizAdLogger").logValidationNoticeImpression({
						loggerContext: f,
						messageType: e.severity,
						noticeName: e.noticeName,
						specElement: t
					}));
				}
			});
		} }), y = h[0], C = c(function(e) {
			u(function(t) {
				var n = new Set(t);
				return n.add(e), n;
			});
		}, []), b = n.filter(function(e, t) {
			return !l.has(t);
		});
		return b.length === 0 ? null : s.jsx(o("WAWebFlex.react").FlexColumn, {
			ref: y,
			align: "stretch",
			xstyle: _.container,
			children: n.map(function(e, t) {
				var n, o;
				if (l.has(t)) return null;
				var i = e.noticeName;
				return s.jsx(r("WAWebBizAdCreationNoticeCard.react"), {
					cta: e.cta,
					message: (n = e.description) == null ? void 0 : n.toString(),
					onActionOverride: i != null ? a[i] : void 0,
					onDismiss: e.dismissable === !0 ? function() {
						return C(t);
					} : void 0,
					severity: e.severity,
					title: (o = e.title) == null ? void 0 : o.toString()
				}, t);
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
