__d("WAWebGdprRequestAccountInfoSettingsDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebGdprConstants",
	"WAWebGdprRequestAccountInfoSettingsDrawerBodyContent",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebWdsPictoDocIcon.react",
	"react",
	"react-compiler-runtime",
	"useWAWebGdprStatus"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.Suspense, m = c.useCallback, p = {
		paddingBottom18: {
			paddingBottom: "x1hhzuzn",
			$$css: !0
		},
		paddingBottom30: {
			paddingBottom: "xbaz6xv",
			$$css: !0
		}
	}, _ = {
		drawerSection: {
			paddingTop: "x9orja2",
			$$css: !0
		},
		title: {
			paddingInlineStart: "x162tt16",
			marginTop: "x1dpc15r",
			marginBottom: "xcugx37",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(27), n = e.onClose, a = e.ref, i = o("useWAWebGdprStatus").useGdprStatus(o("WAWebGdprConstants").ReportType.Account, !0), l = i[0], c = i[1], d = i[2], m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled(), t[0] = m) : m = t[0];
		var p = o("useWAWebGdprStatus").useGdprStatus(o("WAWebGdprConstants").ReportType.Newsletters, m), _ = p[0], f = p[1], g = p[2], h;
		t[1] !== d || t[2] !== g ? (h = function() {
			d(), o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && g();
		}, t[1] = d, t[2] = g, t[3] = h) : h = t[3];
		var C = h, b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (b = {
			surface: "unknown",
			viewName: "gdpr-request-info"
		}, t[4] = b) : b = t[4];
		var v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[5] = v) : v = t[5];
		var S;
		t[6] !== n ? (S = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: v,
			onBack: n,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[6] = n, t[7] = S) : S = t[7];
		var R;
		t[8] !== f ? (R = o("useWAWebGdprStatus").doOtherPendingRequestsExist([f]), t[8] = f, t[9] = R) : R = t[9];
		var L;
		t[10] !== c || t[11] !== l || t[12] !== C || t[13] !== R ? (L = u.jsx(y, {
			isLoading: l,
			report: o("WAWebGdprConstants").ReportType.Account,
			status: c,
			refetch: C,
			otherPendingRequestsExist: R
		}), t[10] = c, t[11] = l, t[12] = C, t[13] = R, t[14] = L) : L = t[14];
		var E;
		t[15] !== c || t[16] !== _ || t[17] !== f || t[18] !== C ? (E = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() ? u.jsx(y, {
			isLoading: _,
			report: o("WAWebGdprConstants").ReportType.Newsletters,
			status: f,
			refetch: C,
			otherPendingRequestsExist: o("useWAWebGdprStatus").doOtherPendingRequestsExist([c])
		}) : null, t[15] = c, t[16] = _, t[17] = f, t[18] = C, t[19] = E) : E = t[19];
		var k;
		t[20] !== L || t[21] !== E ? (k = u.jsxs(r("WAWebDrawerBody.react"), { children: [L, E] }), t[20] = L, t[21] = E, t[22] = k) : k = t[22];
		var I;
		return t[23] !== a || t[24] !== S || t[25] !== k ? (I = u.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: "request-account-info-drawer",
			tsNavigationData: b,
			children: [S, k]
		}), t[23] = a, t[24] = S, t[25] = k, t[26] = I) : I = t[26], I;
	}
	function g(e) {
		switch (e) {
			case o("WAWebGdprConstants").ReportType.Account: return "account-information";
			case o("WAWebGdprConstants").ReportType.Newsletters: return "newsletter-activity";
		}
	}
	function h(e) {
		switch (e) {
			case o("WAWebGdprConstants").ReportType.Account: {
				var t = s._(
					/*BTDS*/
					""
				);
				return [t, u.jsxs(u.Fragment, { children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getRequestAccountInfoFAQUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})
				] })];
			}
			case o("WAWebGdprConstants").ReportType.Newsletters: {
				var n = s._(
					/*BTDS*/
					""
				);
				return [n, u.jsxs(u.Fragment, { children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterActivityInforUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})
				] })];
			}
		}
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(34), n = e.isLoading, a = e.otherPendingRequestsExist, i = e.refetch, l = e.report, s = e.status, c;
		t[0] !== l ? (c = h(l), t[0] = l, t[1] = c) : c = t[1];
		var m = c, f = m[0], y = m[1];
		if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
			var C;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (C = [_.drawerSection, p.paddingBottom18], t[2] = C) : C = t[2];
			var b;
			t[3] !== l ? (b = g(l), t[3] = l, t[4] = b) : b = t[4];
			var v;
			t[5] !== f ? (v = u.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: _.title,
				children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: f })
			}), t[5] = f, t[6] = v) : v = t[6];
			var S;
			t[7] !== y || t[8] !== n || t[9] !== a || t[10] !== i || t[11] !== l || t[12] !== s ? (S = n ? u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebSpinner.react").Spinner, {
					size: 50,
					stroke: 4
				}) })
			}) : u.jsx(r("WAWebGdprRequestAccountInfoSettingsDrawerBodyContent"), {
				status: s,
				refetch: i,
				report: l,
				otherPendingRequestsExist: a,
				newsletterBodyText: u.jsx(u.Fragment, { children: y })
			}), t[7] = y, t[8] = n, t[9] = a, t[10] = i, t[11] = l, t[12] = s, t[13] = S) : S = t[13];
			var R;
			return t[14] !== b || t[15] !== v || t[16] !== S ? (R = u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				xstyle: C,
				testid: b,
				children: [v, S]
			}), t[14] = b, t[15] = v, t[16] = S, t[17] = R) : R = t[17], R;
		}
		var L;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (L = [_.drawerSection, p.paddingBottom30], t[18] = L) : L = t[18];
		var E;
		t[19] !== l ? (E = g(l), t[19] = l, t[20] = E) : E = t[20];
		var k;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebWdsPictoDocIcon.react").WdsPictoDocIcon, {}) })
		}), t[21] = k) : k = t[21];
		var I;
		t[22] !== y ? (I = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			padding: 32,
			children: y
		}), t[22] = y, t[23] = I) : I = t[23];
		var T;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 4
			}) })
		}), t[24] = T) : T = t[24];
		var D;
		t[25] !== a || t[26] !== i || t[27] !== l || t[28] !== s ? (D = u.jsx(d, {
			fallback: T,
			children: u.jsx(r("WAWebGdprRequestAccountInfoSettingsDrawerBodyContent"), {
				status: s,
				refetch: i,
				report: l,
				otherPendingRequestsExist: a
			})
		}), t[25] = a, t[26] = i, t[27] = l, t[28] = s, t[29] = D) : D = t[29];
		var x;
		return t[30] !== E || t[31] !== I || t[32] !== D ? (x = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: L,
			testid: E,
			children: [
				k,
				I,
				D
			]
		}), t[30] = E, t[31] = I, t[32] = D, t[33] = x) : x = t[33], x;
	}
	l.default = f;
}), 226);
