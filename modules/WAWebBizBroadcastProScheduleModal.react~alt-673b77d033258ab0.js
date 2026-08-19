__d("WAWebBizBroadcastProScheduleModal.react", [
	"fbt",
	"WATimeUtils",
	"WAWeb-moment",
	"WAWebDateInput.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebTimeInput.react",
	"WDSButton.react",
	"WDSText.react",
	"fbs",
	"react",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useState, _ = 30, f = _ * o("WATimeUtils").DAY_SECONDS, g = 1e3, h = {
		drawer: {
			backgroundColor: "x1280gxy",
			position: "x1n2onr6",
			$$css: !0
		},
		drawerBody: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexBasis: "xdl72j9",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "xexx8yu",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x1f0uite",
			$$css: !0
		},
		footer: {
			boxSizing: "x9f619",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function y(e) {
		var t = e.isSubmitting, n = t === void 0 ? !1 : t, a = e.onCancel, i = e.onSchedule, l = p(function() {
			return o("WATimeUtils").unixTime();
		}), c = l[0], f = l[1];
		r("useWAWebInterval")(function() {
			f(o("WATimeUtils").unixTime());
		}, g, { immediate: !0 });
		var y = m(function() {
			return C();
		}, []), L = p(function() {
			return b(y);
		}), E = L[0], k = L[1], I = p(function() {
			return v(y);
		}), T = I[0], D = I[1], x = p(!1), $ = x[0], P = x[1], N = b(c), M = m(function() {
			return r("WAWeb-moment")(N, "YYYY-MM-DD").locale("en").add(_, "days").format("YYYY-MM-DD");
		}, [N]), w = d(function() {
			return [N, M];
		}, [M, N]), A = d(function(e) {
			e.length !== 0 && (P(!1), k(e));
		}, []), F = d(function(e) {
			e.length !== 0 && (P(!1), D(e));
		}, []), O = R(S(E, T), c), B = d(function() {
			var e = S(E, T), t = o("WATimeUtils").unixTime();
			e != null && R(e, t) ? (P(!1), i(e)) : (f(t), P(!0));
		}, [
			i,
			E,
			T
		]);
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: { esc: function(t) {
				t.stopPropagation(), a();
			} },
			children: u.jsx(o("WAWebModal.react").Modal, {
				type: o("WAWebModal.react").ModalTheme.EventCreation,
				onOverlayClick: a,
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				children: u.jsxs(r("WAWebDrawer.react"), {
					xstyle: h.drawer,
					testid: "bb_pro_schedule_modal",
					children: [
						u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
							title: s._(
								/*BTDS*/
								""
							),
							type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
							onCancel: a
						}),
						u.jsxs(r("WAWebDrawerBody.react"), {
							xstyle: h.drawerBody,
							ariaRole: "form",
							ariaLabel: r("fbs")._(
								/*BTDS*/
								""
							),
							children: [
								u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									textAlign: "start",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								u.jsxs(o("WAWebFlex.react").FlexRow, {
									as: "section",
									columnGap: 16,
									children: [u.jsx(o("WAWebFlex.react").FlexItem, {
										grow: 1,
										basis: 0,
										children: u.jsx(o("WAWebDateInput.react").DateInput, {
											theme: "event",
											name: "bb-pro-schedule-date",
											testid: "bb_pro_schedule_date_input",
											ariaLabel: s._(
												/*BTDS*/
												""
											),
											displayFormat: "MM/DD/YYYY",
											value: E,
											onChange: A,
											getDateBoundaries: w
										})
									}), u.jsx(o("WAWebFlex.react").FlexItem, {
										grow: 1,
										basis: 0,
										children: u.jsx(o("WAWebTimeInput.react").TimeInput, {
											theme: "event",
											name: "bb-pro-schedule-time",
											testid: "bb_pro_schedule_time_input",
											ariaLabel: s._(
												/*BTDS*/
												""
											),
											value: T,
											onChange: F
										})
									})]
								}),
								$ ? u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									textAlign: "start",
									children: s._(
										/*BTDS*/
										""
									)
								}) : null
							]
						}),
						u.jsx(o("WAWebFlex.react").FlexRow, {
							justify: "end",
							xstyle: h.footer,
							children: u.jsx(r("WDSButton.react"), {
								variant: "filled",
								size: "medium",
								disabled: !O || n,
								loading: n,
								onPress: B,
								testid: "bb_pro_schedule_to_send",
								label: s._(
									/*BTDS*/
									""
								)
							})
						})
					]
				})
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		var e, t = (e = o("WATimeUtils")).unixTime() + e.MINUTE_SECONDS;
		return Math.ceil(t / e.MINUTE_SECONDS) * e.MINUTE_SECONDS;
	}
	function b(e) {
		return r("WAWeb-moment").unix(e).locale("en").format("YYYY-MM-DD");
	}
	function v(e) {
		return r("WAWeb-moment").unix(e).locale("en").format("HH:mm");
	}
	function S(e, t) {
		var n = r("WAWeb-moment")(e + "T" + t);
		return n.isValid() ? Math.floor(n.valueOf() / 1e3) : null;
	}
	function R(e, t) {
		if (e == null) return !1;
		var n = e - t;
		return n > 0 && n <= f;
	}
	l.default = y;
}), 226);
