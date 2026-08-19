__d("WAFlowsCalendarPickerDialog.react", [
	"fbt",
	"AbstractCalendarPager.react",
	"GeoCalendar.react",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"getStyleValue",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useMemo, g = m.useReducer, h = m.useState, y = 258, C = "waf-calendar-wrapper", b = "." + C + " [aria-label]", v = "xekv6nw-B", S = "x17qceat-B", R = {
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
	}, L = {
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
	}, E = "1rem", k = {
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
	}, I = {
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
	function T(t) {
		var a = t.date, i = t.endDate, l = t.endDateLabel, c = t.includeDays, m = t.isOpen, y = t.label, b = t.maxDate, v = t.maxDays, S = t.minDate, L = t.minDays, E = t.onClose, k = t.onSelect, I = t.source, T = t.unavailableDates, w = o("WAFlowsEnvContext.react").useWAFlowsEnv(), A = w.env, F = D(A.platform), O = A.platform === "android" || A.platform === "wa_web", B = A.isRTL ? R.buttonsWrapperRTL : R.buttonsWrapperLTR, W = h(o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(a, i, I, S, b, L)), q = W[0], U = W[1], V = h(), H = V[0], G = V[1], z = h(0), j = z[0], K = z[1], Q = h("show"), X = Q[0], Y = Q[1], J = g(o("WAFlowsCalendarPickerDialogNavigationReducer").calendarPickerPageNavigationReducer, {
			currentPage: 0,
			canNavigatePrevious: !1,
			canNavigateNext: !1,
			navigationWheelsOpen: !1
		}), Z = J[0], ee = J[1], te = f(function() {
			return x(A.platform, I, y, l);
		}, [
			I,
			y,
			l,
			A.platform
		]), ne = f(function() {
			return H ? o("WAFlowsDatePickerUtils").getDisplayDate(H.toISOString(), A.locale) : "";
		}, [H, A.locale]), re = f(function() {
			return o("WAFlowsDatePickerUtils").getDisplayDate(q.toISOString(), A.locale, ["month", "year"]);
		}, [q, A.locale]), oe = f(function() {
			return o("WAFlowsCalendarPickerUtils").getDerivedMinDate(a, i, I, S, b, L, v);
		}, [
			a,
			i,
			I,
			S,
			b,
			L,
			v
		]), ae = f(function() {
			return o("WAFlowsCalendarPickerUtils").getDerivedMaxDate(a, i, I, S, b, L, v);
		}, [
			a,
			i,
			I,
			S,
			b,
			L,
			v
		]), ie = p(function() {
			return Y("hide"), new (u || (u = (n("Promise"))))(function(e) {
				window.setTimeout(function() {
					e();
				}, j);
			});
		}, [j]), le = p(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield ie(), E();
		}), [ie, E]), se = p((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield ie(), k(e);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [ie, k]), ue = p(function(e) {
			var t = e.toISOString(), n = I === "end" ? {
				date: a,
				endDate: t
			} : {
				date: t,
				endDate: i
			};
			return !o("WAFlowsIsDateUnavailableWithLocalDate").isDateUnavailableWithLocalDate(babelHelpers.extends({}, n, {
				source: I,
				unavailableDates: T,
				includeDays: c,
				minDate: S,
				maxDate: b,
				minDays: L,
				maxDays: v
			}));
		}, [
			I,
			a,
			i,
			T,
			c,
			S,
			b,
			L,
			v
		]), ce = p(function(e) {
			e.target === e.currentTarget && le();
		}, [le]), de = p(function(e) {
			var t = P(e, a, i, I, S, b, L);
			U(t);
		}, [
			a,
			i,
			S,
			b,
			L,
			I
		]), me = p(function() {
			H && se(H.toISOString());
		}, [H, se]), pe = p(function(e) {
			return N(e, q, K);
		}, [q]);
		_(function() {
			var e = o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(a, i, I, S, b, L);
			G($(A.platform, e, a));
		}, [
			a,
			i,
			I,
			S,
			b,
			L,
			A.platform
		]), _(function() {
			U(o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(a, i, I, S, b, L));
		}, [
			a,
			i,
			S,
			b,
			L,
			I
		]), _(function() {
			m && (Y("show"), ee({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.SHOW_NAVIGATION_WHEELS,
				open: !1
			}));
		}, [m]);
		var _e = p(function(e) {
			de(e), ee({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.SHOW_NAVIGATION_WHEELS,
				open: !1
			});
		}, [de]), fe = p(function() {
			Z.canNavigatePrevious && ee({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.NAVIGATE_PAGE,
				direction: "previous"
			});
		}, [Z.canNavigatePrevious]), ge = p(function() {
			Z.canNavigateNext && ee({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.NAVIGATE_PAGE,
				direction: "next"
			});
		}, [Z.canNavigateNext]), he = p(function(e, t) {
			ee({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.UPDATE_NAVIGATION_STATE,
				canPrevious: e,
				canNext: t
			});
		}, []), ye = p(function(e) {
			ee({
				type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.UPDATE_CURRENT_PAGE,
				page: e
			});
		}, []);
		if (!m) return null;
		var Ce = M({
			platform: A.platform,
			focusDate: q,
			restraint: ue,
			currentPage: Z.currentPage,
			onFocusDateChange: de,
			onYearChange: _e,
			onInitialPageCalculated: ye,
			onNavigationStateChange: he
		});
		return d.jsx(o("WAFlowsReactPortal.react").WAFlowsReactPortal, {
			targetId: r("WAFlowsContainerElementIDs").OVERLAY_PORTAL_CONTAINER_ID,
			children: d.jsx("div", {
				className: {
					0: "xixxii4 x13vifvy xu96u03 x1vjfegm xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xy9na11 xsz6t5k x10e4vud x1larqbn xvma63k",
					1: "xixxii4 x13vifvy xu96u03 x1vjfegm xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xy9na11 xsz6t5k x10e4vud x1larqbn x127lhb5"
				}[(X === "show") << 0],
				style: { backgroundColor: o("WAFlowsCalendarPickerUtils").getDialogOverlayColor() },
				onClick: ce,
				role: "none",
				children: d.jsx("div", {
					className: C,
					"data-is-selected-month-and-year": o("WAFlowsCalendarPickerDialogNavigationUtils").isSelectedMonthAndYear(q, H),
					ref: function(t) {
						t && pe(t);
					},
					children: d.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(R.canvas, F.canvas), { children: [
						te != null && d.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
							text: te,
							xstyle: F.headerLabel,
							maxLines: 1
						}),
						ne != null && O && d.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
							text: ne,
							xstyle: F.headerDate,
							maxLines: 1
						}),
						re != null && (A.platform === "ios" || A.platform === "wa_web") && d.jsxs(d.Fragment, { children: [d.jsx(r("WAFlowsCalendarPickerDialogNavigationSelector.react"), {
							label: re,
							isSelectorExpanded: Z.navigationWheelsOpen,
							onToggleSelector: function() {
								return ee({
									type: o("WAFlowsCalendarPickerDialogNavigationReducer").WAFlowsCalendarPickerNavigationActionTypes.SHOW_NAVIGATION_WHEELS,
									open: !Z.navigationWheelsOpen
								});
							},
							xstyle: R.headerFocusDateSelectorHeader
						}), A.platform === "wa_web" && Z.navigationWheelsOpen && d.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(R.buttonsWrapper, B, F.buttonsWrapper), { children: [d.jsx(r("WAFlowsCalendarPickerDialogNavigationButtons.react"), {
							direction: "previous",
							isDisabled: !Z.canNavigatePrevious,
							onClick: fe
						}), d.jsx(r("WAFlowsCalendarPickerDialogNavigationButtons.react"), {
							direction: "next",
							isDisabled: !Z.canNavigateNext,
							onClick: ge
						})] }))] }),
						Z.navigationWheelsOpen ? Ce : d.jsx(r("AbstractCalendarPager.react"), {
							calendarType: r("GeoCalendar.react"),
							showMonthYearSelector: !0,
							monthYearSelectorType: r("WAFlowsCalendarPickerDialogNavigationDropdowns.react"),
							classNames: {
								monthHeader: "x78zum5 x1qughib",
								buttonsWrapper: (e || (e = r("stylex")))(R.buttonsWrapper, B, F.buttonsWrapper)
							},
							dateRestraints: [ue],
							focusDate: q,
							leftButton: d.jsx(r("WAFlowsCalendarPickerDialogNavigationButtons.react"), {
								direction: "previous",
								isDisabled: o("WAFlowsCalendarPickerDialogNavigationUtils").isLimitDateReached(q, oe)
							}),
							onSelectDateChange: function(t) {
								G(t), A.platform === "ios" && se(t.toISOString());
							},
							onFocusDateChange: de,
							showDaysOutsideOfMonth: !1,
							rightButton: d.jsx(r("WAFlowsCalendarPickerDialogNavigationButtons.react"), {
								direction: "next",
								isDisabled: o("WAFlowsCalendarPickerDialogNavigationUtils").isLimitDateReached(q, ae)
							})
						}),
						O && d.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(F.actions), { children: [d.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
							text: s._(
								/*BTDS*/
								""
							),
							xstyle: [R.action, F.action],
							onClick: function() {
								return void le();
							}
						}), d.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
							text: s._(
								/*BTDS*/
								""
							),
							xstyle: [R.action, F.action],
							onClick: me
						})] }))
					] }))
				})
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = {
			android: k,
			ios: L,
			wa_web: I
		};
		return t[e];
	}
	function x(e, t, n, r) {
		return e === "android" || e === "wa_web" ? t === "end" ? r : n : null;
	}
	function $(e, t, n) {
		return e === "android" || e === "wa_web" ? t : o("WAFlowsGetFocusDateWithLocalDate").getDefaultLocalDate(n != null ? n : void 0);
	}
	function P(e, t, n, r, a, i, l) {
		var s = o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(t, n, r, a, i, l);
		return e.month === (s == null ? void 0 : s.month) && e.year === (s == null ? void 0 : s.year) ? s : o("WAFlowsGetFocusDateWithLocalDate").getFocusDateWithLocalDate(e.toISOString(), r === "end" ? e.toISOString() : n, r, a, i, l);
	}
	function N(e, t, n) {
		if (n(e ? o("WAFlowsScreenUtils").getMilliseconds(o("getStyleValue").getStyleValue("--waf-wds-animation-duration", e)) : 0), o("WAFlowsCalendarPickerDialogNavigationUtils").isDateCurrentMonthAndYear(t)) {
			var r, a = o("WAFlowsCalendarPickerDialogNavigationUtils").getTodayDayNumber(), i = e == null || (r = e.querySelectorAll(b)) == null ? void 0 : r[a - 1];
			i && i.setAttribute("data-is-today", "true");
		}
	}
	function M(e) {
		var t = e.currentPage, n = e.focusDate, o = e.onFocusDateChange, a = e.onInitialPageCalculated, i = e.onNavigationStateChange, l = e.onYearChange, s = e.platform, u = e.restraint;
		return s === "ios" ? d.jsx(r("WAFlowsCalendarPickerDialogNavigationWheels.react"), {
			focusDate: n,
			restraint: [u],
			onFocusDateChange: o
		}) : s === "wa_web" ? d.jsx(r("WAFlowsCalendarPickerYearPagesNavigation.react"), {
			currentPage: t,
			focusDate: n,
			onFocusDateChange: l,
			onInitialPageCalculated: a,
			onNavigationStateChange: i,
			restraint: [u]
		}) : null;
	}
	M.displayName = M.name + " [from " + i.id + "]", l.default = T;
}), 226);
