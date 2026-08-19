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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(43), n = e.currentMessageCount, a = e.onCancel, i = e.onCountChanged, l = e.onDone, c = e.primaryButtonLabel, d = e.selectedMessageCount, p = e.showPinDisclaimer, f = m(d), h = f[0], y = f[1], C;
		t[0] !== n ? (C = g(n), t[0] = n, t[1] = C) : C = t[1];
		var b = C, v;
		t[2] !== i ? (v = function(t) {
			var e = parseInt(t, 10);
			y(e), i != null ? i(e) : o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.countChanged({ groupHistoryMessagesCount: e });
		}, t[2] = i, t[3] = v) : v = t[3];
		var S = v, R;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x1phvje8 xcldk2z xvpt6g3" }, t[4] = R) : R = t[4];
		var L;
		t[5] !== c ? (L = c != null ? c : s._(
			/*BTDS*/
			""
		), t[5] = c, t[6] = L) : L = t[6];
		var E;
		t[7] !== h || t[8] !== l ? (E = function() {
			return l(h);
		}, t[7] = h, t[8] = l, t[9] = E) : E = t[9];
		var k;
		t[10] !== L || t[11] !== E ? (k = {
			label: L,
			onPress: E
		}, t[10] = L, t[11] = E, t[12] = k) : k = t[12];
		var I;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[13] = I) : I = t[13];
		var T;
		t[14] !== a ? (T = {
			label: I,
			onPress: a,
			variant: "borderless"
		}, t[14] = a, t[15] = T) : T = t[15];
		var D;
		t[16] !== k || t[17] !== T ? (D = u.jsx("div", babelHelpers.extends({}, R, { children: u.jsx(r("WDSButtonGroup.react"), {
			width: "hug",
			primaryButtonProps: k,
			tertiaryButtonProps: T
		}) })), t[16] = k, t[17] = T, t[18] = D) : D = t[18];
		var x = D, $;
		t[19] !== a ? ($ = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcArrowBack.react"),
			onPress: a,
			variant: "borderless"
		}), t[19] = a, t[20] = $) : $ = t[20];
		var P;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[21] = P) : P = t[21];
		var N;
		t[22] !== $ ? (N = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: _.headerRow,
			align: "center",
			children: [$, P]
		}), t[22] = $, t[23] = N) : N = t[23];
		var M;
		if (t[24] !== S || t[25] !== h || t[26] !== b) {
			var w;
			t[28] !== S || t[29] !== h ? (w = function(t) {
				return u.jsxs("label", {
					className: "x78zum5 x6s0dn4 x1wxaq2x x16ovd2e x12xbjc7",
					"data-testid": "message-count-option-" + t.value,
					children: [u.jsx(r("WDSBaseRadio.react"), {
						value: t.value,
						name: "message-count",
						checked: h === t.value,
						onChange: S
					}), u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						xstyle: _.radioLabel,
						children: t.label
					})]
				}, t.value);
			}, t[28] = S, t[29] = h, t[30] = w) : w = t[30], M = b.map(w), t[24] = S, t[25] = h, t[26] = b, t[27] = M;
		} else M = t[27];
		var A;
		t[31] !== M ? (A = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.contentContainer,
			role: "radiogroup",
			children: M
		}), t[31] = M, t[32] = A) : A = t[32];
		var F;
		t[33] !== p ? (F = p && u.jsx("div", {
			className: "xdx6fka xvtqlqk x16ovd2e xscbp6u",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[33] = p, t[34] = F) : F = t[34];
		var O;
		t[35] !== N || t[36] !== A || t[37] !== F ? (O = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.modalWrapper,
			align: "stretch",
			children: [
				N,
				A,
				F
			]
		}), t[35] = N, t[36] = A, t[37] = F, t[38] = O) : O = t[38];
		var B;
		return t[39] !== x || t[40] !== a || t[41] !== O ? (B = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			actions: x,
			onOverlayClick: a,
			testid: "group-history-send-messages-modal",
			children: O
		}), t[39] = x, t[40] = a, t[41] = O, t[42] = B) : B = t[42], B;
	}
	l.default = h;
}), 226);
