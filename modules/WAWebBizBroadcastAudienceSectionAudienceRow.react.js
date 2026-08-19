__d("WAWebBizBroadcastAudienceSectionAudienceRow.react", [
	"fbt",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBroadcastConsts",
	"WAWebDefaultProfilePicture.react",
	"WAWebFlex.react",
	"WAWebWamEnumEntryPoint",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		listItem: {
			alignItems: "x6s0dn4",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			$$css: !0
		},
		rowButtons: {
			columnGap: "x1trrmfo",
			$$css: !0
		},
		textContainer: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(21), n = e.audienceName, a = e.entryPoint, i = e.handleDeleteAudience, l = e.handleEditAudience, s = e.isDuplicate, d = e.isPredicateExpression, m = e.recipientCount, _ = s === void 0 ? !1 : s, f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			children: u.jsx(r("WAWebDefaultProfilePicture.react"), {
				type: "business-broadcast",
				size: o("WAWebBroadcastConsts").DEFAULT_PROFILE_PICTURE_SIZE
			})
		}), t[0] = f) : f = t[0];
		var g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x193iq5w" }, t[1] = g) : g = t[1];
		var h;
		t[2] !== n ? (h = u.jsx("div", babelHelpers.extends({}, g, { children: u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			maxLines: 1,
			testid: "audience-name",
			children: n
		}) })), t[2] = n, t[3] = h) : h = t[3];
		var y;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x193iq5w" }, t[4] = y) : y = t[4];
		var C;
		t[5] !== m ? (C = o("WAWebBizBroadcastsCreationStrings").getAudienceRecipientCountLabel(m), t[5] = m, t[6] = C) : C = t[6];
		var b;
		t[7] !== C ? (b = u.jsx("div", babelHelpers.extends({}, y, { children: u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			testid: "audience-recipient-count",
			children: C
		}) })), t[7] = C, t[8] = b) : b = t[8];
		var v;
		t[9] !== h || t[10] !== b ? (v = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.textContainer,
			children: [h, b]
		}), t[9] = h, t[10] = b, t[11] = v) : v = t[11];
		var S;
		t[12] !== a || t[13] !== i || t[14] !== l || t[15] !== _ || t[16] !== d ? (S = u.jsx(p, {
			entryPoint: a,
			handleDeleteAudience: i,
			handleEditAudience: l,
			isDuplicate: _,
			isPredicateExpression: d
		}), t[12] = a, t[13] = i, t[14] = l, t[15] = _, t[16] = d, t[17] = S) : S = t[17];
		var R;
		return t[18] !== v || t[19] !== S ? (R = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.listItem,
			children: [
				f,
				v,
				S
			]
		}), t[18] = v, t[19] = S, t[20] = R) : R = t[20], R;
	}
	function m(e, t) {
		return e === o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD && !t;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(15), n = e.entryPoint, a = e.handleDeleteAudience, i = e.handleEditAudience, l = e.isDuplicate, d = e.isPredicateExpression, p = l === void 0 ? !1 : l, _ = !d, f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebBizBroadcastsHomeStrings").getEditAudienceOnPhoneLabel(), t[0] = f) : f = t[0];
		var g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[1] = g) : g = t[1];
		var h;
		t[2] !== i || t[3] !== d ? (h = u.jsx(r("WDSButton.react"), {
			"aria-label": g,
			variant: "borderless",
			size: "small",
			type: "default",
			Icon: r("WDSIconIcEdit.react"),
			onPress: i,
			disabled: d,
			testid: "edit-audience-button"
		}), t[2] = i, t[3] = d, t[4] = h) : h = t[4];
		var y;
		t[5] !== _ || t[6] !== h ? (y = u.jsx(r("WDSTooltip.react"), {
			disabled: _,
			label: f,
			children: h
		}), t[5] = _, t[6] = h, t[7] = y) : y = t[7];
		var C;
		t[8] !== n || t[9] !== a || t[10] !== p ? (C = !m(n, p) && u.jsx(r("WDSButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			variant: "borderless",
			size: "small",
			type: "default",
			Icon: r("WDSIconIcClose.react"),
			onPress: a,
			testid: "remove-audience-button"
		}), t[8] = n, t[9] = a, t[10] = p, t[11] = C) : C = t[11];
		var b;
		return t[12] !== y || t[13] !== C ? (b = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.rowButtons,
			shrink: 0,
			children: [y, C]
		}), t[12] = y, t[13] = C, t[14] = b) : b = t[14], b;
	}
	l.default = d;
}), 226);
