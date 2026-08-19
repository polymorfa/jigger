__d("WAWebResponsesListDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebEmptyResponsesList.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebListFilterButton.react",
	"WAWebNewsletterGatingUtils",
	"WAWebQuestions.flow",
	"WAWebQuestionsAdminGatingUtils",
	"WAWebQuestionsRenderingUtils",
	"WAWebResponsesListShimmer.react",
	"WAWebResponsesRow.react",
	"WAWebSearchHighlightTermsContext.react",
	"WAWebSpinner.react",
	"WAWebTabOrder",
	"WDSPaddings.stylex",
	"WDSSearchBar.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebDebouncedCallback",
	"useWAWebFocusOnMount",
	"useWAWebNewsletterResponseMessages"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = d.useState, g = {
		responsesFilters: {
			position: "x1n2onr6",
			boxSizing: "x9f619",
			backgroundColor: "x1280gxy",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "x2vl965",
			paddingTop: "x1gxa6cn",
			marginBottom: "xefnzgg",
			$$css: !0
		},
		scrollContent: {
			height: "x5yr21d",
			overflowX: "x14aock7",
			overflowY: "x1rife3k",
			$$css: !0
		},
		content: {
			minHeight: "x1us19tq",
			width: "xh8yej3",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function h(t) {
		var n = o("react-compiler-runtime").c(58), a = t.isReplyDisabled, i = t.question, l = r("useWAWebFocusOnMount")(), u = f(null), d = u[0], m = u[1], p = f(o("WAWebQuestions.flow").ResponsesFilterType.ALL), h = p[0], b = p[1], R = f(""), L = R[0], E = R[1], k;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (k = function(t) {
			E(t);
		}, n[0] = k) : k = n[0];
		var I = r("useWAWebDebouncedCallback")(k, 250), T = o("useWAWebNewsletterResponseMessages").useNewsletterQuestionResponses(i, h, L.length >= 3 ? L : void 0), D = T[0], x = T[1], $ = T[2], P = T[3], N = T[4], M = T[5], w = o("WAWebFrontendMsgGetters").getChat(i), A = _(), F = o("WAWebQuestionsAdminGatingUtils").isQuestionsM2FeatureEnabledForAdmins(w);
		d == null && x !== o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.FETCHING && m(o("WAWebNewsletterGatingUtils").isNewsletterQuestionsSearchEnabled() && D.length > 0);
		var O;
		n[1] !== L ? (O = L.trim() !== "" ? L.trim().toLowerCase().split(/\s+/).filter(Boolean) : null, n[1] = L, n[2] = O) : O = n[2];
		var B = O, W;
		n[3] !== D || n[4] !== h ? (W = h === o("WAWebQuestions.flow").ResponsesFilterType.STARRED ? D.filter(y) : D, n[3] = D, n[4] = h, n[5] = W) : W = n[5];
		var q = W, U;
		n[6] !== I || n[7] !== N ? (U = function(t) {
			t.length <= 100 && (N(), I(t));
		}, n[6] = I, n[7] = N, n[8] = U) : U = n[8];
		var V = U, H;
		n[9] !== $ || n[10] !== P ? (H = function() {
			if (A.current != null) {
				var e = A.current.scrollHeight, t = A.current.scrollTop, n = A.current.clientHeight;
				t + n >= e - 150 && P() && $();
			}
		}, n[9] = $, n[10] = P, n[11] = H) : H = n[11];
		var G = H, z;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (z = function() {
			return b(o("WAWebQuestions.flow").ResponsesFilterType.ALL);
		}, n[12] = z) : z = n[12];
		var j;
		n[13] !== M ? (j = function() {
			return void M();
		}, n[13] = M, n[14] = j) : j = n[14];
		var K;
		n[15] !== h || n[16] !== x || n[17] !== j ? (K = c.jsx(r("WAWebEmptyResponsesList.react"), {
			selectedFilter: h,
			onViewAllResponses: z,
			onTryAgain: j,
			status: x,
			testid: "newsletter-empty-question-responses"
		}), n[15] = h, n[16] = x, n[17] = j, n[18] = K) : K = n[18];
		var Q = K, X;
		e: {
			if (x === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.FETCHING) {
				var Y;
				n[19] === Symbol.for("react.memo_cache_sentinel") ? (Y = o("WAWebNewsletterGatingUtils").isNewsletterQuestionResponsesShimmerEnabled() ? c.jsx(r("WAWebResponsesListShimmer.react"), {}) : c.jsx(C, { size: 40 }), n[19] = Y) : Y = n[19], X = Y;
				break e;
			}
			if (x === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.FETCHING_MORE || x === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.SUCCESS) {
				var J;
				n[20] !== Q || n[21] !== a || n[22] !== F || n[23] !== i || n[24] !== x || n[25] !== q ? (J = q.length > 0 ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
					className: (e || (e = r("stylex")))(o("WDSPaddings.stylex").wdsPaddings.paddingVer8, g.content),
					align: "stretch",
					role: "navigation",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					children: [q.map(function(e) {
						return c.jsx(r("WAWebResponsesRow.react"), {
							question: i,
							response: e.response,
							isReplyDisabled: a,
							isStarringEnabled: F
						}, e.response.id.toString());
					}), x === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.FETCHING_MORE && (o("WAWebNewsletterGatingUtils").isNewsletterQuestionResponsesShimmerEnabled() ? c.jsx(r("WAWebResponsesListShimmer.react"), { count: 1 }) : c.jsx(C, {
						size: 32,
						xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer20
					}))]
				}) : Q, n[20] = Q, n[21] = a, n[22] = F, n[23] = i, n[24] = x, n[25] = q, n[26] = J) : J = n[26], X = J;
				break e;
			}
			if (x === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.ERROR || x === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.OFFLINE) {
				X = Q;
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + x);
		}
		var Z;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
			/*BTDS*/
			""
		), n[27] = Z) : Z = n[27];
		var ee;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (ee = {
			surface: "unknown",
			viewName: "responses-list"
		}, n[28] = ee) : ee = n[28];
		var te;
		n[29] !== i.questionResponsesCount ? (te = s._(
			/*BTDS*/
			"",
			[s._plural(i.questionResponsesCount, "number")]
		), n[29] = i.questionResponsesCount, n[30] = te) : te = n[30];
		var ne;
		n[31] !== te ? (ne = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: te,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onCancel: o("WAWebDrawerManager").closeDrawerRight
		}), n[31] = te, n[32] = ne) : ne = n[32];
		var re;
		n[33] !== h || n[34] !== d || n[35] !== V ? (re = d === !0 && c.jsx(v, {
			selectedFilter: h,
			updateDebouncedQuery: V
		}), n[33] = h, n[34] = d, n[35] = V, n[36] = re) : re = n[36];
		var oe;
		n[37] !== N || n[38] !== h ? (oe = function(t) {
			t !== h && (N(), b(t));
		}, n[37] = N, n[38] = h, n[39] = oe) : oe = n[39];
		var ae;
		n[40] !== F || n[41] !== h || n[42] !== oe ? (ae = c.jsx(S, {
			selectedFilter: h,
			isStarringEnabled: F,
			handleFilterChange: oe
		}), n[40] = F, n[41] = h, n[42] = oe, n[43] = ae) : ae = n[43];
		var ie;
		n[44] !== X || n[45] !== G ? (ie = c.jsx(r("WAWebDrawerBody.react"), {
			ref: A,
			onScroll: G,
			xstyle: g.scrollContent,
			children: X
		}), n[44] = X, n[45] = G, n[46] = ie) : ie = n[46];
		var le;
		n[47] !== B || n[48] !== ie ? (le = c.jsx(r("WAWebSearchHighlightTermsContext.react").Provider, {
			value: B,
			children: ie
		}), n[47] = B, n[48] = ie, n[49] = le) : le = n[49];
		var se;
		n[50] !== ne || n[51] !== re || n[52] !== ae || n[53] !== le ? (se = c.jsxs(r("WAWebDrawer.react"), {
			testid: "responses-list-drawer",
			tsNavigationData: ee,
			children: [
				ne,
				re,
				ae,
				le
			]
		}), n[50] = ne, n[51] = re, n[52] = ae, n[53] = le, n[54] = se) : se = n[54];
		var ue;
		return n[55] !== l || n[56] !== se ? (ue = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: l,
			"aria-label": Z,
			children: se
		}), n[55] = l, n[56] = se, n[57] = ue) : ue = n[57], ue;
	}
	function y(e) {
		var t = e.response;
		return t.starred;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(5), n = e.size, r = e.xstyle, a;
		t[0] !== n ? (a = c.jsx(o("WAWebSpinner.react").Spinner, {
			size: n,
			stroke: 4,
			color: "highlight"
		}), t[0] = n, t[1] = a) : a = t[1];
		var i;
		return t[2] !== a || t[3] !== r ? (i = c.jsx(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			align: "center",
			xstyle: r,
			grow: 1,
			children: a
		}), t[2] = a, t[3] = r, t[4] = i) : i = t[4], i;
	}
	function b(e) {
		return e === o("WAWebQuestions.flow").ResponsesFilterType.REPLIED ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebQuestions.flow").ResponsesFilterType.ALL ? s._(
			/*BTDS*/
			""
		) : e === o("WAWebQuestions.flow").ResponsesFilterType.STARRED ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(9), n = e.selectedFilter, a = e.updateDebouncedQuery, i = f(""), l = i[0], s = i[1], u;
		t[0] !== a ? (u = function(t) {
			t.length <= 100 && (s(t), a(t));
		}, t[0] = a, t[1] = u) : u = t[1];
		var d = u, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "xh8yej3 x9f619 x1phvje8 xcldk2z xexx8yu x1g2khh7 x1280gxy" }, t[2] = m) : m = t[2];
		var p;
		t[3] !== n ? (p = b(n), t[3] = n, t[4] = p) : p = t[4];
		var _;
		return t[5] !== d || t[6] !== l || t[7] !== p ? (_ = c.jsx("div", babelHelpers.extends({}, m, { children: c.jsx(r("WDSSearchBar.react"), {
			hintText: p,
			value: l,
			onValueChange: d,
			testid: "questions_responses_search_bar"
		}) })), t[5] = d, t[6] = l, t[7] = p, t[8] = _) : _ = t[8], _;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(4), n = e.handleFilterChange, a = e.isStarringEnabled, i = e.selectedFilter, l = _(), s;
		if (t[0] !== n || t[1] !== a || t[2] !== i) {
			var u = Array.from(o("WAWebQuestions.flow").ResponsesFilterType.members()).filter(function(e) {
				return a || e !== o("WAWebQuestions.flow").ResponsesFilterType.STARRED;
			});
			s = c.jsx(o("WAWebFlex.react").FlexRow, {
				shrink: 0,
				wrap: "wrap",
				rowGap: 8,
				columnGap: 8,
				ref: l,
				xstyle: g.responsesFilters,
				children: u.map(function(e) {
					var t = function() {
						n(e);
					};
					return c.jsx(r("WAWebListFilterButton.react"), {
						label: o("WAWebQuestionsRenderingUtils").getResponsesFilterLabel(e),
						onClick: t,
						selected: i === e,
						tabOrder: o("WAWebTabOrder").TAB_ORDER.RESPONSES_TAB_FILTERS
					}, e);
				})
			}), t[0] = n, t[1] = a, t[2] = i, t[3] = s;
		} else s = t[3];
		return s;
	}
	l.ResponsesListDrawer = h;
}), 226);
