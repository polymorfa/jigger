__d("WAWebBizBroadcastsRecipientRow.react", [
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WDSBaseCheckbox.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.memo;
	function c(e) {
		var t = o("react-compiler-runtime").c(41), n = e.contact, a = e.contactId, i = e.index, l = e.isSelected, u = e.onToggle, c;
		t[0] !== n ? (c = o("WAWebFrontendContactGetters").getDisplayName(n), t[0] = n, t[1] = c) : c = t[1];
		var d = c, m;
		t[2] !== a || t[3] !== u ? (m = function() {
			u(a);
		}, t[2] = a, t[3] = u, t[4] = m) : m = t[4];
		var p = m, _;
		t[5] !== a || t[6] !== u ? (_ = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), u(a));
		}, t[5] = a, t[6] = u, t[7] = _) : _ = t[7];
		var f = _, g;
		t[8] !== a || t[9] !== u ? (g = function(t) {
			t == null || t.stopPropagation(), u(a);
		}, t[8] = a, t[9] = u, t[10] = g) : g = t[10];
		var h = g, y = "broadcasts-upsert-audience-screen-row-" + i, C;
		t[11] !== l ? (C = {
			0: { className: "x1n67ipk xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 xh8yej3" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 xh8yej3 x1h3rtpe" }
		}[!!l << 0], t[11] = l, t[12] = C) : C = t[12];
		var b;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1iw51ew xde1mab x3hqpx7" }, t[13] = b) : b = t[13];
		var v = "broadcasts-upsert-audience-screen-checkbox-row-" + i, S;
		t[14] !== d || t[15] !== h || t[16] !== l || t[17] !== v ? (S = s.jsx(r("WDSBaseCheckbox.react"), {
			"aria-label": d,
			onChange: h,
			tabIndex: -1,
			value: l,
			testid: v
		}), t[14] = d, t[15] = h, t[16] = l, t[17] = v, t[18] = S) : S = t[18];
		var R;
		t[19] !== n || t[20] !== i ? (R = s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
			contact: n,
			index: i
		}), t[19] = n, t[20] = i, t[21] = R) : R = t[21];
		var L;
		t[22] !== R || t[23] !== S ? (L = s.jsx("div", babelHelpers.extends({}, b, { children: s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			children: [S, R]
		}) })), t[22] = R, t[23] = S, t[24] = L) : L = t[24];
		var E;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "xvtqlqk x3hqpx7" }, t[25] = E) : E = t[25];
		var k = "broadcasts-upsert-audience-screen-phone-row-" + i, I;
		t[26] !== n ? (I = o("WAWebFrontendContactGetters").getFormattedPhoneAndType(n), t[26] = n, t[27] = I) : I = t[27];
		var T;
		t[28] !== k || t[29] !== I.displayName ? (T = s.jsx("div", babelHelpers.extends({}, E, { children: s.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body1",
			maxLines: 1,
			testid: k,
			children: I.displayName
		}) })), t[28] = k, t[29] = I.displayName, t[30] = T) : T = t[30];
		var D;
		t[31] !== L || t[32] !== T ? (D = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [L, T]
		}), t[31] = L, t[32] = T, t[33] = D) : D = t[33];
		var x;
		return t[34] !== f || t[35] !== p || t[36] !== l || t[37] !== D || t[38] !== y || t[39] !== C ? (x = s.jsx("div", babelHelpers.extends({
			role: "button",
			"data-testid": y
		}, C, {
			"aria-pressed": l,
			tabIndex: 0,
			onClick: p,
			onKeyDown: f,
			children: D
		})), t[34] = f, t[35] = p, t[36] = l, t[37] = D, t[38] = y, t[39] = C, t[40] = x) : x = t[40], x;
	}
	var d = u(c);
	l.default = d;
}), 98);
