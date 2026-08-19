__d("WAWebMessageHistoryBundleInfoNotification.react", [
	"fbt",
	"WAWebFaqUrl",
	"WAWebGroupHistoryBundleInfoContext",
	"WAWebGroupHistoryReceiverUserJourneyLogger",
	"WAWebVelocityTransitionGroup",
	"WAWebWrapperSystemBubble.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.use, m = c.useEffect, p = c.useRef, _ = c.useState, f = {
		historyInfoBubble: {
			paddingTop: "x1tiyuxx",
			paddingBottom: "x1nbhmlj",
			$$css: !0
		},
		transitionGroup: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			position: "x7wzq59",
			bottom: "x1ey2m1c",
			zIndex: "x12xzxwr",
			$$css: !0
		},
		staticBundleInfo: {
			marginBottom: "xcytdqz",
			$$css: !0
		}
	}, g = o("WAWebFaqUrl").getGroupHistoryFAQUrl();
	function h(e) {
		var t = e.authorName, n = e.firstBundleMsgElement, a = e.groupId, i = _(!1), l = i[0], c = i[1], h = p(null), y = p(!1), C = p(!1), b = d(o("WAWebGroupHistoryBundleInfoContext").WAWebGroupHistoryBundleInfoContext), v = b.setVisibleGroupHistoryBundleSenders;
		return m(function() {
			var e = h.current;
			if (e != null) {
				var r = !1, i = !1, l = !1, s = function() {
					var e = i && !l, n = r || e;
					r && !y.current && (y.current = !0, o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.footerInlineShown(a)), e && !C.current && (C.current = !0, o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.footerFloatingShown(a)), c(e), v(function(e) {
						var r = e.has(t);
						if (n === r) return e;
						var o = new Set(e);
						return n ? o.add(t) : o.delete(t), o;
					});
				}, u = function(t) {
					var e, n, r = (e = (n = t.rootBounds) == null ? void 0 : n.height) != null ? e : 0;
					return t.intersectionRatio === 0 && t.boundingClientRect.top > r / 2;
				}, d = new IntersectionObserver(function(e) {
					var t = e[e.length - 1];
					r = t.intersectionRatio > 0, i = u(t), s();
				}), m = new IntersectionObserver(function(e) {
					var t = e[e.length - 1];
					l = u(t), s();
				});
				return d.observe(e), n != null && m.observe(n), function() {
					d.disconnect(), m.disconnect(), v(function(e) {
						if (!e.has(t)) return e;
						var n = new Set(e);
						return n.delete(t), n;
					});
				};
			}
		}, [
			t,
			n,
			a,
			v
		]), u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebWrapperSystemBubble.react"), {
			testid: "group-history-bundle-footer",
			ref: h,
			isFocusable: !1,
			groupHistoryBackground: !0,
			xstyle: f.staticBundleInfo,
			children: u.jsxs(r("WDSText.react"), {
				type: "Body3Emphasized",
				xstyle: f.historyInfoBubble,
				colorName: "contentDefault",
				children: [
					s._(
						/*BTDS*/
						"",
						[s._param("authorName", t)]
					),
					".",
					" ",
					u.jsx(r("WDSTextualLink.react"), {
						href: g,
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})
		}), u.jsx(r("WAWebVelocityTransitionGroup"), {
			xstyle: f.transitionGroup,
			transitionName: "group-history-info",
			children: l ? u.jsx(r("WAWebWrapperSystemBubble.react"), {
				isFocusable: !1,
				children: u.jsxs(r("WDSText.react"), {
					type: "Body3Emphasized",
					xstyle: f.historyInfoBubble,
					colorName: "contentDefault",
					children: [
						s._(
							/*BTDS*/
							"",
							[s._param("authorName", t)]
						),
						".",
						" ",
						u.jsx(r("WDSTextualLink.react"), {
							href: g,
							children: s._(
								/*BTDS*/
								""
							)
						})
					]
				})
			}) : null
		})] });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
