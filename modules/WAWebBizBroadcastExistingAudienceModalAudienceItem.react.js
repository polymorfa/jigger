__d("WAWebBizBroadcastExistingAudienceModalAudienceItem.react", [
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBroadcastConsts",
	"WAWebDefaultProfilePicture.react",
	"WAWebFlex.react",
	"WAWebKeyboardListHotKeys.react",
	"WDSBaseCheckbox.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { listItemRow: {
		rowGap: "x8a3fw1",
		columnGap: "x1aj3ljl",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(25), n = e.audience, a = e.isSelected, i = e.onToggle, l;
		t[0] !== i ? (l = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.stopPropagation(), i());
		}, t[0] = i, t[1] = l) : l = t[1];
		var c = l, d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1vsz0ew x1n67ipk", t[2] = d) : d = t[2];
		var m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x2lah0s" }, t[3] = m) : m = t[3];
		var p;
		t[4] !== n.name || t[5] !== a ? (p = s.jsx("div", babelHelpers.extends({}, m, { children: s.jsx(r("WDSBaseCheckbox.react"), {
			value: a,
			"aria-label": n.name,
			tabIndex: -1,
			testid: "audience-checkbox"
		}) })), t[4] = n.name, t[5] = a, t[6] = p) : p = t[6];
		var _;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			children: s.jsx(r("WAWebDefaultProfilePicture.react"), {
				type: "business-broadcast",
				size: o("WAWebBroadcastConsts").DEFAULT_PROFILE_PICTURE_SIZE
			})
		}), t[7] = _) : _ = t[7];
		var f;
		t[8] !== n.name ? (f = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: n.name
		}), t[8] = n.name, t[9] = f) : f = t[9];
		var g;
		t[10] !== n.recipientCount ? (g = o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(n.recipientCount), t[10] = n.recipientCount, t[11] = g) : g = t[11];
		var h;
		t[12] !== g ? (h = s.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: g
		}), t[12] = g, t[13] = h) : h = t[13];
		var y;
		t[14] !== f || t[15] !== h ? (y = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [f, h] }), t[14] = f, t[15] = h, t[16] = y) : y = t[16];
		var C;
		t[17] !== p || t[18] !== y ? (C = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: u.listItemRow,
			children: [
				p,
				_,
				y
			]
		}), t[17] = p, t[18] = y, t[19] = C) : C = t[19];
		var b;
		return t[20] !== c || t[21] !== a || t[22] !== i || t[23] !== C ? (b = s.jsx("div", {
			className: o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME + " " + d,
			onClick: i,
			onKeyDown: c,
			role: "option",
			"aria-selected": a,
			tabIndex: -1,
			children: C
		}), t[20] = c, t[21] = a, t[22] = i, t[23] = C, t[24] = b) : b = t[24], b;
	}
	l.default = c;
}), 98);
