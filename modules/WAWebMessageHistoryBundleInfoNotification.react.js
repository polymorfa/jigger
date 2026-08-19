__d("WAWebMessageHistoryBundleInfoNotification.react", [
	"fbt",
	"WAWebFaqUrl",
	"WAWebGroupHistoryBundleInfoContext",
	"WAWebGroupHistoryReceiverUserJourneyLogger",
	"WAWebVelocityTransitionGroup",
	"WAWebWrapperSystemBubble.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(19), n = e.authorName, a = e.firstBundleMsgElement, i = e.groupId, l = _(!1), c = l[0], h = l[1], C = p(null), b = p(!1), v = p(!1), S = d(o("WAWebGroupHistoryBundleInfoContext").WAWebGroupHistoryBundleInfoContext), R = S.setVisibleGroupHistoryBundleSenders, L, E;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== R ? (L = function() {
			var e = C.current;
			if (e != null) {
				var t = !1, r = !1, l = !1, s = function() {
					var e = r && !l, a = t || e;
					t && !b.current && (b.current = !0, o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.footerInlineShown(i)), e && !v.current && (v.current = !0, o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.footerFloatingShown(i)), h(e), R(function(e) {
						var t = e.has(n);
						if (a === t) return e;
						var r = new Set(e);
						return a ? r.add(n) : r.delete(n), r;
					});
				}, u = y, c = new IntersectionObserver(function(e) {
					var n = e[e.length - 1];
					t = n.intersectionRatio > 0, r = u(n), s();
				}), d = new IntersectionObserver(function(e) {
					var t = e[e.length - 1];
					l = u(t), s();
				});
				return c.observe(e), a != null && d.observe(a), (function() {
					c.disconnect(), d.disconnect(), R(function(e) {
						if (!e.has(n)) return e;
						var t = new Set(e);
						return t.delete(n), t;
					});
				});
			}
		}, E = [
			n,
			a,
			i,
			R
		], t[0] = n, t[1] = a, t[2] = i, t[3] = R, t[4] = L, t[5] = E) : (L = t[4], E = t[5]), m(L, E);
		var k;
		t[6] !== n ? (k = s._(
			/*BTDS*/
			"",
			[s._param("authorName", n)]
		), t[6] = n, t[7] = k) : k = t[7];
		var I;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx(r("WDSTextualLink.react"), {
			href: g,
			children: s._(
				/*BTDS*/
				""
			)
		}), t[8] = I) : I = t[8];
		var T;
		t[9] !== k ? (T = u.jsx(r("WAWebWrapperSystemBubble.react"), {
			testid: "group-history-bundle-footer",
			ref: C,
			isFocusable: !1,
			groupHistoryBackground: !0,
			xstyle: f.staticBundleInfo,
			children: u.jsxs(r("WDSText.react"), {
				type: "Body3Emphasized",
				xstyle: f.historyInfoBubble,
				colorName: "contentDefault",
				children: [
					k,
					".",
					" ",
					I
				]
			})
		}), t[9] = k, t[10] = T) : T = t[10];
		var D;
		t[11] !== n || t[12] !== c ? (D = c ? u.jsx(r("WAWebWrapperSystemBubble.react"), {
			isFocusable: !1,
			children: u.jsxs(r("WDSText.react"), {
				type: "Body3Emphasized",
				xstyle: f.historyInfoBubble,
				colorName: "contentDefault",
				children: [
					s._(
						/*BTDS*/
						"",
						[s._param("authorName", n)]
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
		}) : null, t[11] = n, t[12] = c, t[13] = D) : D = t[13];
		var x;
		t[14] !== D ? (x = u.jsx(r("WAWebVelocityTransitionGroup"), {
			xstyle: f.transitionGroup,
			transitionName: "group-history-info",
			children: D
		}), t[14] = D, t[15] = x) : x = t[15];
		var $;
		return t[16] !== T || t[17] !== x ? ($ = u.jsxs(u.Fragment, { children: [T, x] }), t[16] = T, t[17] = x, t[18] = $) : $ = t[18], $;
	}
	function y(e) {
		var t, n, r = (t = (n = e.rootBounds) == null ? void 0 : n.height) != null ? t : 0;
		return e.intersectionRatio === 0 && e.boundingClientRect.top > r / 2;
	}
	l.default = h;
}), 226);
