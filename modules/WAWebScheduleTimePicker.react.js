__d("WAWebScheduleTimePicker.react", [
	"fbt",
	"WATimeUtils",
	"WAWeb-moment",
	"WAWebDateInput.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebIsScheduledTimeValid",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebModal.react",
	"WAWebScheduledMessagesGatingUtils",
	"WAWebText.react",
	"WAWebTimeInput.react",
	"WAWebWdsIcSendFilledIcon.react",
	"WDSButton.react",
	"fbs",
	"react",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useState, _ = {
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
			$$css: !0
		},
		inputsRow: {
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		submitBtn: {
			transitionProperty: "xs2xxs2",
			transitionDuration: "x1d8287x",
			$$css: !0
		},
		alignStart: {
			textAlign: "x1yc453h",
			$$css: !0
		}
	}, f = 3600 * 24, g = 60, h = 1e3;
	function y() {
		var e = Math.floor(Date.now() / 1e3), t = Math.max(o("WAWebScheduledMessagesGatingUtils").getScheduledMessagesMinDurationSeconds(), 0), n = Math.floor(e / g) * g, r = Math.ceil((n + t) / g) * g, a = Math.ceil((e + 1) / g) * g;
		return o("WATimeUtils").castMilliSecondsToUnixTime(Math.max(r, a) * 1e3);
	}
	function C(e) {
		return r("WAWeb-moment").unix(e).locale("en").format("YYYY-MM-DD");
	}
	function b(e) {
		return r("WAWeb-moment").unix(e).locale("en").format("HH:mm");
	}
	function v(e) {
		var t = e.isGroup, n = t === void 0 ? !1 : t, a = e.onCancel, i = e.onSchedule, l = p(function() {
			return o("WATimeUtils").unixTime();
		}), c = l[0], g = l[1];
		r("useWAWebInterval")(function() {
			g(o("WATimeUtils").unixTime());
		}, h, { immediate: !0 });
		var v = m(function() {
			return y();
		}, []), S = p(function() {
			return C(v);
		}), R = S[0], L = S[1], E = p(function() {
			return b(v);
		}), k = E[0], I = E[1], T = d(function() {
			var e = new Date(c * 1e3), t = r("WAWeb-moment")(e).locale("en").format("YYYY-MM-DD"), n = Math.floor(o("WAWebScheduledMessagesGatingUtils").getScheduledMessagesMaxDurationSeconds() / f), a = r("WAWeb-moment")(e).locale("en").add(n, "days").format("YYYY-MM-DD");
			return [t, a];
		}, [c]), D = m(function() {
			var e = r("WAWeb-moment")(R + "T" + k);
			return e.isValid() ? o("WATimeUtils").castMilliSecondsToUnixTime(e.valueOf()) : o("WATimeUtils").castMilliSecondsToUnixTime(0);
		}, [R, k]), x = r("WAWebIsScheduledTimeValid")(D, c), $ = d(function() {
			r("WAWebIsScheduledTimeValid")(D, o("WATimeUtils").unixTime()) && i(D);
		}, [i, D]), P = d(function(e) {
			e.length !== 0 && L(e);
		}, []), N = d(function(e) {
			e.length !== 0 && I(e);
		}, []), M = s._(
			/*BTDS*/
			""
		), w = u.jsx(r("WDSButton.react"), {
			size: "large",
			variant: "filled",
			Icon: o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
			xstyle: _.submitBtn,
			disabled: !x,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			testid: "schedule_time_picker_confirm_button",
			onPress: $,
			directional: !0
		}), A = r("WAWebL10N").isRTL();
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
					xstyle: _.drawer,
					testid: "schedule_time_picker_modal",
					children: [
						u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
							title: M,
							type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
							onCancel: a
						}),
						u.jsxs(r("WAWebDrawerBody.react"), {
							xstyle: _.drawerBody,
							ariaRole: "form",
							ariaLabel: r("fbs")._(
								/*BTDS*/
								""
							),
							children: [
								n ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
									marginTop: 12,
									marginBottom: 12,
									marginStart: 8,
									testid: "schedule_time_picker_group_education",
									children: s._(
										/*BTDS*/
										""
									)
								}) : null,
								u.jsx(o("WAWebText.react").WAWebTextMuted, {
									marginTop: 12,
									marginStart: 8,
									children: s._(
										/*BTDS*/
										""
									)
								}),
								u.jsxs(o("WAWebFlex.react").FlexRow, {
									xstyle: [_.inputsRow, _.alignStart],
									as: "section",
									columnGap: 16,
									children: [u.jsx(o("WAWebFlex.react").FlexItem, {
										grow: 1,
										basis: 0,
										children: u.jsx(o("WAWebDateInput.react").DateInput, {
											theme: "event",
											onChange: P,
											value: R,
											name: "schedule-date",
											getDateBoundaries: T
										})
									}), u.jsx(o("WAWebFlex.react").FlexItem, {
										grow: 1,
										basis: 0,
										children: u.jsx(o("WAWebTimeInput.react").TimeInput, {
											theme: "event",
											name: "schedule-time",
											value: k,
											onChange: N
										})
									})]
								})
							]
						}),
						u.jsx("div", babelHelpers.extends({}, {
							0: { className: "xh8yej3 x78zum5 x13a6bvl xwvwv9b xevwqry xvjzkt9" },
							1: { className: "xh8yej3 x78zum5 x13a6bvl xwvwv9b xevwqry x1dgsuza" }
						}[!!A << 0], {
							"data-testid": "schedule_time_picker_submit_container",
							children: w
						}))
					]
				})
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
