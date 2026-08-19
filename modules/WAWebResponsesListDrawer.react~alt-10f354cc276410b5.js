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
		var n = t.isReplyDisabled, a = t.question, i = r("useWAWebFocusOnMount")(), l = f(null), u = l[0], d = l[1], h = f(o("WAWebQuestions.flow").ResponsesFilterType.ALL), C = h[0], S = h[1], R = f(""), L = R[0], E = R[1], k = r("useWAWebDebouncedCallback")(function(e) {
			E(e);
		}, 250), I = o("useWAWebNewsletterResponseMessages").useNewsletterQuestionResponses(a, C, L.length >= 3 ? L : void 0), T = I[0], D = I[1], x = I[2], $ = I[3], P = I[4], N = I[5], M = o("WAWebFrontendMsgGetters").getChat(a), w = _(), A = o("WAWebQuestionsAdminGatingUtils").isQuestionsM2FeatureEnabledForAdmins(M);
		u == null && D !== o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.FETCHING && d(o("WAWebNewsletterGatingUtils").isNewsletterQuestionsSearchEnabled() && T.length > 0);
		var F = p(function() {
			return L.trim() !== "" ? L.trim().toLowerCase().split(/\s+/).filter(Boolean) : null;
		}, [L]), O = p(function() {
			return C === o("WAWebQuestions.flow").ResponsesFilterType.STARRED ? T.filter(function(e) {
				var t = e.response;
				return t.starred;
			}) : T;
		}, [T, C]), B = m(function(e) {
			e.length <= 100 && (P(), k(e));
		}, [k, P]), W = function() {
			if (w.current != null) {
				var e = w.current.scrollHeight, t = w.current.scrollTop, n = w.current.clientHeight;
				t + n >= e - 150 && $() && x();
			}
		}, q = c.jsx(r("WAWebEmptyResponsesList.react"), {
			selectedFilter: C,
			onViewAllResponses: function() {
				return S(o("WAWebQuestions.flow").ResponsesFilterType.ALL);
			},
			onTryAgain: function() {
				return void N();
			},
			status: D,
			testid: "newsletter-empty-question-responses"
		}), U;
		e: {
			if (D === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.FETCHING) {
				U = o("WAWebNewsletterGatingUtils").isNewsletterQuestionResponsesShimmerEnabled() ? c.jsx(r("WAWebResponsesListShimmer.react"), {}) : c.jsx(y, { size: 40 });
				break e;
			}
			if (D === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.FETCHING_MORE || D === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.SUCCESS) {
				U = O.length > 0 ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
					className: (e || (e = r("stylex")))(o("WDSPaddings.stylex").wdsPaddings.paddingVer8, g.content),
					align: "stretch",
					role: "navigation",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					children: [O.map(function(e) {
						return c.jsx(r("WAWebResponsesRow.react"), {
							question: a,
							response: e.response,
							isReplyDisabled: n,
							isStarringEnabled: A
						}, e.response.id.toString());
					}), D === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.FETCHING_MORE && (o("WAWebNewsletterGatingUtils").isNewsletterQuestionResponsesShimmerEnabled() ? c.jsx(r("WAWebResponsesListShimmer.react"), { count: 1 }) : c.jsx(y, {
						size: 32,
						xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer20
					}))]
				}) : q;
				break e;
			}
			if (D === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.ERROR || D === o("useWAWebNewsletterResponseMessages").FetchQuestionResponsesStatus.OFFLINE) {
				U = q;
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + D);
		}
		return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: i,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: c.jsxs(r("WAWebDrawer.react"), {
				testid: "responses-list-drawer",
				tsNavigationData: {
					surface: "unknown",
					viewName: "responses-list"
				},
				children: [
					c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: s._(
							/*BTDS*/
							"",
							[s._plural(a.questionResponsesCount, "number")]
						),
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
						onCancel: o("WAWebDrawerManager").closeDrawerRight
					}),
					u === !0 && c.jsx(b, {
						selectedFilter: C,
						updateDebouncedQuery: B
					}),
					c.jsx(v, {
						selectedFilter: C,
						isStarringEnabled: A,
						handleFilterChange: function(t) {
							t !== C && (P(), S(t));
						}
					}),
					c.jsx(r("WAWebSearchHighlightTermsContext.react").Provider, {
						value: F,
						children: c.jsx(r("WAWebDrawerBody.react"), {
							ref: w,
							onScroll: W,
							xstyle: g.scrollContent,
							children: U
						})
					})
				]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.size, n = e.xstyle;
		return c.jsx(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			align: "center",
			xstyle: n,
			grow: 1,
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				size: t,
				stroke: 4,
				color: "highlight"
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
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
	function b(e) {
		var t = e.selectedFilter, n = e.updateDebouncedQuery, o = f(""), a = o[0], i = o[1], l = function(t) {
			t.length <= 100 && (i(t), n(t));
		};
		return c.jsx("div", {
			className: "xh8yej3 x9f619 x1phvje8 xcldk2z xexx8yu x1g2khh7 x1280gxy",
			children: c.jsx(r("WDSSearchBar.react"), {
				hintText: C(t),
				value: a,
				onValueChange: l,
				testid: "questions_responses_search_bar"
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.handleFilterChange, n = e.isStarringEnabled, a = e.selectedFilter, i = _(), l = Array.from(o("WAWebQuestions.flow").ResponsesFilterType.members()).filter(function(e) {
			return n || e !== o("WAWebQuestions.flow").ResponsesFilterType.STARRED;
		});
		return c.jsx(o("WAWebFlex.react").FlexRow, {
			shrink: 0,
			wrap: "wrap",
			rowGap: 8,
			columnGap: 8,
			ref: i,
			xstyle: g.responsesFilters,
			children: l.map(function(e) {
				var n = function() {
					t(e);
				};
				return c.jsx(r("WAWebListFilterButton.react"), {
					label: o("WAWebQuestionsRenderingUtils").getResponsesFilterLabel(e),
					onClick: n,
					selected: a === e,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.RESPONSES_TAB_FILTERS
				}, e);
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.ResponsesListDrawer = h;
}), 226);
