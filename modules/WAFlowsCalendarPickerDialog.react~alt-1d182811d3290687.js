__d("WAFlowsCalendarPickerDialog.react", [
	"fbt",
	"AbstractCalendarPager.react",
	"GeoCalendar.react",
	"WAFlowsCalendarPickerDialogNavigationButtons.react",
	"WAFlowsCalendarPickerDialogNavigationDropdowns.react",
	"WAFlowsCalendarPickerDialogNavigationReducer",
	"WAFlowsCalendarPickerDialogNavigationSelector.react",
	"WAFlowsCalendarPickerDialogNavigationUtils",
	"WAFlowsCalendarPickerDialogNavigationWheels.react",
	"WAFlowsCalendarPickerUtils",
	"WAFlowsCalendarPickerYearPagesNavigation.react",
	"WAFlowsContainerElementIDs",
	"WAFlowsDatePickerUtils",
	"WAFlowsEmbeddedLink.react",
	"WAFlowsEnvContext.react",
	"WAFlowsGetFocusDateWithLocalDate",
	"WAFlowsIsDateUnavailableWithLocalDate",
	"WAFlowsLabel.react",
	"WAFlowsReactPortal.react",
	"WAFlowsScreenUtils",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useReducer, g = d.useState, h = 258, y = "waf-calendar-wrapper", C = "." + y + " [aria-label]", b = "xekv6nw-B", v = "x17qceat-B", S = {
		canvas: {
			width: "x1ye0lqc",
			boxSizing: "x9f619",
			backgroundColor: "x1h3rtpe",
			transform: "xr3nxaw",
			$$css: !0
		},
		buttonsWrapper: {
			position: "x10l6tqk",
			display: "x78zum5",
			justifyContent: "xlqzeqv",
			$$css: !0
		},
		buttonsWrapperLTR: {
			right: "x1d83s0a",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		buttonsWrapperRTL: {
			left: "x1lr0wgl",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		action: {
			color: "x1v5yvga",
			$$css: !0
		},
		headerFocusDateSelectorHeader: {
			width: "xeq5yr9",
			$$css: !0
		}
	}, R = {
		canvas: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x8945me",
			borderStartStartRadius: "x1d6c9rj",
			borderStartEndRadius: "x102lzsk",
			borderEndEndRadius: "x16l4sp",
			borderEndStartRadius: "xe7h4wa",
			$$css: !0
		},
		buttonsWrapper: {
			top: "xf1ewck",
			$$css: !0
		}
	}, L = "1rem", E = {
		canvas: {
			paddingTop: "x12t3zde",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x2yie3v",
			paddingInlineStart: "x8945me",
			borderStartStartRadius: "x1mwbobv",
			borderStartEndRadius: "xxf0are",
			borderEndEndRadius: "x1ogmrtr",
			borderEndStartRadius: "x1sks88i",
			$$css: !0
		},
		buttonsWrapper: {
			top: "x1q8tvpq",
			$$css: !0
		},
		headerLabel: {
			marginBottom: "xyi6m4r",
			color: "xhslqc4",
			$$css: !0
		},
		headerDate: {
			fontSize: "xkbp9ht",
			position: "x1n2onr6",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			paddingBottom: "xmnamis",
			lineHeight: "xladpa3",
			"::after_position": "x1j6awrg",
			"::after_content": "x1s928wv",
			"::after_zIndex": "xitxdhh",
			"::after_height": "xcock1l",
			"::after_bottom": "x11iha90",
			"::after_left": "x79zusj",
			"::after_right": "x1fsdklf",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_backgroundColor": "x1dwy1gy",
			$$css: !0
		},
		actions: {
			display: "x78zum5",
			justifyContent: "x13a6bvl",
			$$css: !0
		},
		action: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xqfkjy8",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1rgrh6f",
			minHeight: "x1in32aq",
			$$css: !0
		}
	}, k = {
		canvas: {
			paddingTop: "x12t3zde",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "x2yie3v",
			paddingInlineStart: "x8945me",
			borderStartStartRadius: "x1mwbobv",
			borderStartEndRadius: "xxf0are",
			borderEndEndRadius: "x1ogmrtr",
			borderEndStartRadius: "x1sks88i",
			width: "x1fjzz8u",
			$$css: !0
		},
		buttonsWrapper: {
			top: "x1q8tvpq",
			$$css: !0
		},
		headerLabel: {
			marginBottom: "xyi6m4r",
			color: "xhslqc4",
			$$css: !0
		},
		headerDate: {
			fontSize: "xkbp9ht",
			position: "x1n2onr6",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			paddingBottom: "xmnamis",
			lineHeight: "xladpa3",
			"::after_position": "x1j6awrg",
			"::after_content": "x1s928wv",
			"::after_zIndex": "xitxdhh",
			"::after_height": "xcock1l",
			"::after_bottom": "x11iha90",
			"::after_left": "x79zusj",
			"::after_right": "x1fsdklf",
			"::after_insetInlineStart": null,
			"::after_insetInlineEnd": null,
			"::after_backgroundColor": "x1dwy1gy",
			$$css: !0
		},
		actions: {
			display: "x78zum5",
			justifyContent: "x13a6bvl",
			columnGap: "x4prdry",
			$$css: !0
		},
		action: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xqfkjy8",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1rgrh6f",
			minHeight: "x1in32aq",
			textTransform: "x6mezaz",
			lineHeight: "x1qfl8hi",
			letterSpacing: "x1g4lutg",
			minWidth: "x4m7ku4",
			backgroundColor: "xjbqb8w",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			":hover_backgroundColor": "x1bdw58b",
			":hover_textDecoration": "x1lku1pv",
			":focus_backgroundColor": "xu7nupc",
			":focus_textDecoration": "x190264o",
			":focus_color": "xxuqjll",
			$$css: !0
		}
	};
	function I(t) {
		var n = t.date, a = t.endDate, i = t.endDateLabel, l = t.includeDays, u = t.isOpen, d = t.label, h = t.maxDate, C = t.maxDays, b = t.minDate, v = t.minDays, R = t.onClose, L = t.onSelect, E = t.source, k = t.unavailableDates, I = o("WAFlowsEnvContext.react").useWAFlowsEnv(), M = I.env, w = T(M.platform), A = M.platform === "android" || M.platform === "wa_web", F = M.isRTL ? S.buttonsWrapperRTL : S.buttonsWrapperLTR, O = g(o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(n, a, E, b, h, v)), B = O[0], W = O[1], q = g(), U = q[0], V = q[1], H = g(0), G = H[0], z = H[1], j = g("show"), K = j[0], Q = j[1], X = f(o("WAFlowsCalendarPickerDialogNavigationReducer").calendarPickerPageNavigationReducer, {
			currentPage: 0,
			canNavigatePrevious: !1,
			canNavigateNext: !1,
			navigationWheelsOpen: !1
		}), Y = X[0], J = X[1], Z = _(function() {
			return D(M.platform, E, d, i);
		}, [
			E,
			d,
			i,
			M.platform
		]), ee = _(function() {
			return U ? o("WAFlowsDatePickerUtils").getDisplayDate(U.toISOString(), M.locale) : "";
		}, [U, M.locale]), te = _(function() {
			return o("WAFlowsDatePickerUtils").getDisplayDate(B.toISOString(), M.locale, ["month", "year"]);
		}, [B, M.locale]), ne = _(function() {
			return o("WAFlowsCalendarPickerUtils").getDerivedMinDate(n, a, E, b, h, v, C);
		}, [
			n,
			a,
			E,
			b,
			h,
			v,
			C
		]), re = _(function() {
			return o("WAFlowsCalendarPickerUtils").getDerivedMaxDate(n, a, E, b, h, v, C);
		}, [
			n,
			a,
			E,
			b,
			h,
			v,
			C
		]), oe = m(function() {
			return Q("hide"), new Promise(function(e) {
				window.setTimeout(function() {
					e();
				}, G);
			});
		}, [G]), ae = m(async function() {
			await oe(), R();
		}, [oe, R]), ie = m(async function(e) {
			await oe(), L(e);
		}, [oe, L]), le = m(function(e) {
			var t = e.toISOString(), r = E === "end" ? {
				date: n,
				endDate: t
			} : {
				date: t,
				endDate: a
			};
			return !o("WAFlowsIsDateUnavailableWithLocalDate").isDateUnavailableWithLocalDate(babelHelpers.extends({}, r, {
				source: E,
				unavailableDates: k,
				includeDays: l,
				minDate: b,
				maxDate: h,
				minDays: v,
				maxDays: C
			}));
		}, [
			E,
			n,
			a,
			k,
			l,
			b,
			h,
			v,
			C
		]), se = m(function(e) {
			e.target === e.currentTarget && ae();
		}, [ae]), ue = m(function(e) {
			var t = $(e, n, a, E, b, h, v);
			W(t);
		}, [
			n,
			a,
			b,
			h,
			v,
			E
		]), ce = m(function() {
			U && ie(U.toISOString());
		}, [U, ie]), de = m(function(e) {
			return P(e, B, z);
		}, [B]);
		p(function() {
			var e = o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(n, a, E, b, h, v);
			V(x(M.platform, e, n));
		}, [
			n,
			a,
			E,
			b,
			h,
			v,
			M.platform
		]), p(function() {
			W(o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(n, a, E, b, h, v));
		}, [
			n,
			a,
			b,
			h,
			v,
			E
		]), p(function() {
			u && (Q("show"), J({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.SHOW_NAVIGATION_WHEELS,
				open: !1
			}));
		}, [u]);
		var me = m(function(e) {
			ue(e), J({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.SHOW_NAVIGATION_WHEELS,
				open: !1
			});
		}, [ue]), pe = m(function() {
			Y.canNavigatePrevious && J({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.NAVIGATE_PAGE,
				direction: "previous"
			});
		}, [Y.canNavigatePrevious]), _e = m(function() {
			Y.canNavigateNext && J({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.NAVIGATE_PAGE,
				direction: "next"
			});
		}, [Y.canNavigateNext]), fe = m(function(e, t) {
			J({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.UPDATE_NAVIGATION_STATE,
				canPrevious: e,
				canNext: t
			});
		}, []), ge = m(function(e) {
			J({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.UPDATE_CURRENT_PAGE,
				page: e
			});
		}, []);
		if (!u) return null;
		var he = N({
			platform: M.platform,
			focusDate: B,
			restraint: le,
			currentPage: Y.currentPage,
			onFocusDateChange: ue,
			onYearChange: me,
			onInitialPageCalculated: ge,
			onNavigationStateChange: fe
		});
		return c.jsx(o("WAFlowsReactPortal.react").WAFlowsReactPortal, {
			targetId: r("WAFlowsContainerElementIDs").OVERLAY_PORTAL_CONTAINER_ID,
			children: c.jsx("div", {
				className: {
					0: "xixxii4 x13vifvy xu96u03 x1vjfegm xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xy9na11 xsz6t5k x10e4vud x1larqbn xvma63k",
					1: "xixxii4 x13vifvy xu96u03 x1vjfegm xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xy9na11 xsz6t5k x10e4vud x1larqbn x127lhb5"
				}[(K === "show") << 0],
				style: { backgroundColor: o("WAFlowsCalendarPickerUtils").getDialogOverlayColor() },
				onClick: se,
				role: "none",
				children: c.jsx("div", {
					className: y,
					"data-is-selected-month-and-year": o("WAFlowsCalendarPickerDialogNavigationUtils").isSelectedMonthAndYear(B, U),
					ref: function(t) {
						t && de(t);
					},
					children: c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(S.canvas, w.canvas), { children: [
						Z != null && c.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
							text: Z,
							xstyle: w.headerLabel,
							maxLines: 1
						}),
						ee != null && A && c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
							text: ee,
							xstyle: w.headerDate,
							maxLines: 1
						}),
						te != null && (M.platform === "ios" || M.platform === "wa_web") && c.jsxs(c.Fragment, { children: [c.jsx(r("WAFlowsCalendarPickerDialogNavigationSelector.react"), {
							label: te,
							isSelectorExpanded: Y.navigationWheelsOpen,
							onToggleSelector: function() {
								return J({
									type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.SHOW_NAVIGATION_WHEELS,
									open: !Y.navigationWheelsOpen
								});
							},
							xstyle: S.headerFocusDateSelectorHeader
						}), M.platform === "wa_web" && Y.navigationWheelsOpen && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(S.buttonsWrapper, F, w.buttonsWrapper), { children: [c.jsx(r("WAFlowsCalendarPickerDialogNavigationButtons.react"), {
							direction: "previous",
							isDisabled: !Y.canNavigatePrevious,
							onClick: pe
						}), c.jsx(r("WAFlowsCalendarPickerDialogNavigationButtons.react"), {
							direction: "next",
							isDisabled: !Y.canNavigateNext,
							onClick: _e
						})] }))] }),
						Y.navigationWheelsOpen ? he : c.jsx(r("AbstractCalendarPager.react"), {
							calendarType: r("GeoCalendar.react"),
							showMonthYearSelector: !0,
							monthYearSelectorType: r("WAFlowsCalendarPickerDialogNavigationDropdowns.react"),
							classNames: {
								monthHeader: "x78zum5 x1qughib",
								buttonsWrapper: (e || (e = r("stylex")))(S.buttonsWrapper, F, w.buttonsWrapper)
							},
							dateRestraints: [le],
							focusDate: B,
							leftButton: c.jsx(r("WAFlowsCalendarPickerDialogNavigationButtons.react"), {
								direction: "previous",
								isDisabled: o("WAFlowsCalendarPickerDialogNavigationUtils").isLimitDateReached(B, ne)
							}),
							onSelectDateChange: function(t) {
								V(t), M.platform === "ios" && ie(t.toISOString());
							},
							onFocusDateChange: ue,
							showDaysOutsideOfMonth: !1,
							rightButton: c.jsx(r("WAFlowsCalendarPickerDialogNavigationButtons.react"), {
								direction: "next",
								isDisabled: o("WAFlowsCalendarPickerDialogNavigationUtils").isLimitDateReached(B, re)
							})
						}),
						A && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(w.actions), { children: [c.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
							text: s._(
								/*BTDS*/
								""
							),
							xstyle: [S.action, w.action],
							onClick: function() {
								return void ae();
							}
						}), c.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
							text: s._(
								/*BTDS*/
								""
							),
							xstyle: [S.action, w.action],
							onClick: ce
						})] }))
					] }))
				})
			})
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = {
			android: E,
			ios: R,
			wa_web: k
		};
		return t[e];
	}
	function D(e, t, n, r) {
		return e === "android" || e === "wa_web" ? t === "end" ? r : n : null;
	}
	function x(e, t, n) {
		return e === "android" || e === "wa_web" ? t : o("WAFlowsGetFocusDateWithLocalDate").getDefaultLocalDate(n != null ? n : void 0);
	}
	function $(e, t, n, r, a, i, l) {
		var s = o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(t, n, r, a, i, l);
		return e.month === (s == null ? void 0 : s.month) && e.year === (s == null ? void 0 : s.year) ? s : o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(e.toISOString(), r === "end" ? e.toISOString() : n, r, a, i, l);
	}
	function P(e, t, n) {
		if (n(e ? o("WAFlowsScreenUtils").getMilliseconds(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", e)) : 0), o("WAFlowsCalendarPickerDialogNavigationUtils").isDateCurrentMonthAndYear(t)) {
			var r, a = o("WAFlowsCalendarPickerDialogNavigationUtils").getTodayDayNumber(), i = e == null || (r = e.querySelectorAll(C)) == null ? void 0 : r[a - 1];
			i && i.setAttribute("data-is-today", "true");
		}
	}
	function N(e) {
		var t = e.currentPage, n = e.focusDate, o = e.onFocusDateChange, a = e.onInitialPageCalculated, i = e.onNavigationStateChange, l = e.onYearChange, s = e.platform, u = e.restraint;
		return s === "ios" ? c.jsx(r("WAFlowsCalendarPickerDialogNavigationWheels.react"), {
			focusDate: n,
			restraint: [u],
			onFocusDateChange: o
		}) : s === "wa_web" ? c.jsx(r("WAFlowsCalendarPickerYearPagesNavigation.react"), {
			currentPage: t,
			focusDate: n,
			onFocusDateChange: l,
			onInitialPageCalculated: a,
			onNavigationStateChange: i,
			restraint: [u]
		}) : null;
	}
	N.displayName = N.name + " [from " + i.id + "]", l.default = I;
}), 226);
