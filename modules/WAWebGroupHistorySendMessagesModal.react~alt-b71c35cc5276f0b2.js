__d("WAWebGroupHistorySendMessagesModal.react", [
	"fbt",
	"WAWebABProps",
	"WAWebFlex.react",
	"WAWebGroupMemberAddingUserJourneyLogger",
	"WAWebModal.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = [
		100,
		75,
		50,
		25
	], _ = {
		modalWrapper: {
			boxSizing: "x9f619",
			width: "xvue9z",
			$$css: !0
		},
		headerRow: {
			columnGap: "x1aj3ljl",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		contentContainer: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		radioLabel: {
			paddingInlineStart: "xdx6fka",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.count, n = e.isAll;
		return n ? s._(
			/*BTDS*/
			"",
			[s._param("count", t)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("count", t)]
		);
	}
	function g(e) {
		var t = [], n = o("WAWebABProps").getABPropConfigValue("group_history_message_count_limit");
		e <= n && t.push({
			label: f({
				count: e,
				isAll: e !== Math.max.apply(Math, p)
			}),
			value: e
		});
		var r = p.reduce(function(t, n) {
			return n < e && t.push({
				label: f({
					count: n,
					isAll: !1
				}),
				value: n
			}), t;
		}, t);
		return r.length === 0 && e > 0 && r.push({
			label: f({
				count: e,
				isAll: !0
			}),
			value: e
		}), r;
	}
	function h(e) {
		var t = e.currentMessageCount, n = e.onCancel, a = e.onCountChanged, i = e.onDone, l = e.primaryButtonLabel, c = e.selectedMessageCount, p = e.showPinDisclaimer, f = m(c), h = f[0], y = f[1], C = d(function() {
			return g(t);
		}, [t]), b = function(t) {
			var e = parseInt(t, 10);
			y(e), a != null ? a(e) : o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.countChanged({ groupHistoryMessagesCount: e });
		}, v = u.jsx("div", {
			className: "x1phvje8 xcldk2z xvpt6g3",
			children: u.jsx(r("WDSButtonGroup.react"), {
				width: "hug",
				primaryButtonProps: {
					label: l != null ? l : s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						return i(h);
					}
				},
				tertiaryButtonProps: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: n,
					variant: "borderless"
				}
			})
		});
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			actions: v,
			onOverlayClick: n,
			testid: "group-history-send-messages-modal",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: _.modalWrapper,
				align: "stretch",
				children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: _.headerRow,
						align: "center",
						children: [u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcArrowBack.react"),
							onPress: n,
							variant: "borderless"
						}), u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: _.contentContainer,
						role: "radiogroup",
						children: C.map(function(e) {
							return u.jsxs("label", {
								className: "x78zum5 x6s0dn4 x1wxaq2x x16ovd2e x12xbjc7",
								"data-testid": "message-count-option-" + e.value,
								children: [u.jsx(r("WDSBaseRadio.react"), {
									value: e.value,
									name: "message-count",
									checked: h === e.value,
									onChange: b
								}), u.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									xstyle: _.radioLabel,
									children: e.label
								})]
							}, e.value);
						})
					}),
					p && u.jsx("div", {
						className: "xdx6fka xvtqlqk x16ovd2e xscbp6u",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
