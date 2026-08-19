__d("WAWebAddCustomerContactRow.react", [
	"WAWebContactImage.react",
	"WAWebFrontendContactGetters",
	"WAWebUsernameTypes",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = o("react-compiler-runtime").c(39), n = e.contact, a = e.onClick, i = e.position, l;
		t[0] !== n ? (l = o("WAWebFrontendContactGetters").getDisplayName(n), t[0] = n, t[1] = l) : l = t[1];
		var u = l, c;
		t[2] !== n ? (c = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(n), t[2] = n, t[3] = c) : c = t[3];
		var d = c, m;
		t[4] !== n.username ? (m = n.username != null ? o("WAWebUsernameTypes").displayUsername(n.username) : null, t[4] = n.username, t[5] = m) : m = t[5];
		var p = m, _;
		t[6] !== n || t[7] !== a || t[8] !== i ? (_ = function() {
			a(n, i);
		}, t[6] = n, t[7] = a, t[8] = i, t[9] = _) : _ = t[9];
		var f = _, g;
		t[10] !== n || t[11] !== a || t[12] !== i ? (g = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), a(n, i));
		}, t[10] = n, t[11] = a, t[12] = i, t[13] = g) : g = t[13];
		var h = g, y;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x16ovd2e x12xbjc7 x1iw51ew xde1mab x1ypdohk xjbqb8w xkd4ks6" }, t[14] = y) : y = t[14];
		var C;
		t[15] !== n ? (C = s.jsx(r("WAWebContactImage.react"), {
			contact: n,
			size: 32
		}), t[15] = n, t[16] = C) : C = t[16];
		var b, v;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x78zum5 xdt5ytf xeuugli x1iyjqo2 xs83m0k x1r8uery" }, v = { className: "x78zum5 x1q0g3np x1pha0wt x1trrmfo" }, t[17] = b, t[18] = v) : (b = t[17], v = t[18]);
		var S;
		t[19] !== u ? (S = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			maxLines: 1,
			children: u
		}), t[19] = u, t[20] = S) : S = t[20];
		var R;
		t[21] !== p ? (R = p != null && s.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			maxLines: 1,
			children: p
		}), t[21] = p, t[22] = R) : R = t[22];
		var L;
		t[23] !== S || t[24] !== R ? (L = s.jsxs("div", babelHelpers.extends({}, v, { children: [S, R] })), t[23] = S, t[24] = R, t[25] = L) : L = t[25];
		var E;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x78zum5 x1q0g3np x6s0dn4 x1trrmfo x6ikm8r x10wlt62 xuxw1ft xlyipyv" }, t[26] = E) : E = t[26];
		var k;
		t[27] !== d ? (k = d !== "" && s.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			maxLines: 1,
			children: d
		}), t[27] = d, t[28] = k) : k = t[28];
		var I;
		t[29] !== k ? (I = s.jsx("div", babelHelpers.extends({}, E, { children: k })), t[29] = k, t[30] = I) : I = t[30];
		var T;
		t[31] !== L || t[32] !== I ? (T = s.jsxs("div", babelHelpers.extends({}, b, { children: [L, I] })), t[31] = L, t[32] = I, t[33] = T) : T = t[33];
		var D;
		return t[34] !== f || t[35] !== h || t[36] !== T || t[37] !== C ? (D = s.jsxs("div", babelHelpers.extends({}, y, {
			onClick: f,
			onKeyDown: h,
			role: "button",
			tabIndex: 0,
			"data-testid": "add-customer-contact-row",
			children: [C, T]
		})), t[34] = f, t[35] = h, t[36] = T, t[37] = C, t[38] = D) : D = t[38], D;
	}
	l.default = c;
}), 98);
