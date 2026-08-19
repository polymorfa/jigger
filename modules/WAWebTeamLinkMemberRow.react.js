__d("WAWebTeamLinkMemberRow.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebContactImage.react",
	"WAWebFrontendContactGetters",
	"WAWebTeamLinkMemberRowActions.react",
	"WAWebWidFactory",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = 49;
	function m(e) {
		return e === "COMPLETED" ? s._(
			/*BTDS*/
			""
		) : e === "PENDING" ? s._(
			/*BTDS*/
			""
		) : e === "EXPIRED" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(39), n = e.invitation, a = e.onRemove, i = e.onRenew, l = n.employeeLid, c;
		e: {
			if (l == null || l === "") {
				c = null;
				break e;
			}
			try {
				var p;
				t[0] !== l ? (p = o("WAWebContactCollection").ContactCollection.get(o("WAWebWidFactory").createUserLidOrThrow(l, "lid")), t[0] = l, t[1] = p) : p = t[1], c = p;
			} catch (e) {
				c = null;
			}
		}
		var _ = c, f;
		t[2] !== _ ? (f = _ != null ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(_) : "", t[2] = _, t[3] = f) : f = t[3];
		var g = f, h = n.employeeName != null && n.employeeName !== "" ? n.employeeName : g, y;
		t[4] !== _ ? (y = _ != null ? o("WAWebFrontendContactGetters").getPnForLid(_) : "", t[4] = _, t[5] = y) : y = t[5];
		var C = y, b = n.invitationStatus, v;
		t[6] !== n.nonceCode || t[7] !== b ? (v = b === "PENDING" ? u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			testid: "teamlink-row-code",
			children: u.jsx("span", {
				className: "x1ey7xld xl5zsmt",
				children: n.nonceCode != null && n.nonceCode !== "" ? n.nonceCode : "—"
			})
		}) : null, t[6] = n.nonceCode, t[7] = b, t[8] = v) : v = t[8];
		var S = v, R;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x16ovd2e x12xbjc7 xdx6fka xvtqlqk" }, t[9] = R) : R = t[9];
		var L;
		t[10] !== _ ? (L = _ != null ? u.jsx(r("WAWebContactImage.react"), {
			contact: _,
			size: d
		}) : u.jsx("div", { className: "x15jighw x112a4uq x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1518k6t x2lah0s" }), t[10] = _, t[11] = L) : L = t[11];
		var E;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x78zum5 xdt5ytf xeuugli x1iyjqo2 xs83m0k x1r8uery" }, t[12] = E) : E = t[12];
		var k;
		t[13] !== h ? (k = h !== "" ? h : s._(
			/*BTDS*/
			""
		), t[13] = h, t[14] = k) : k = t[14];
		var I;
		t[15] !== k ? (I = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			maxLines: 1,
			children: k
		}), t[15] = k, t[16] = I) : I = t[16];
		var T;
		t[17] !== C ? (T = C !== "" && u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			maxLines: 1,
			children: C
		}), t[17] = C, t[18] = T) : T = t[18];
		var D;
		t[19] !== T || t[20] !== I ? (D = u.jsxs("div", babelHelpers.extends({}, E, { children: [I, T] })), t[19] = T, t[20] = I, t[21] = D) : D = t[21];
		var x;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x78zum5 xdt5ytf xuk3077 x129bwdz x2lah0s" }, t[22] = x) : x = t[22];
		var $;
		t[23] !== b ? ($ = m(b), t[23] = b, t[24] = $) : $ = t[24];
		var P;
		t[25] !== $ ? (P = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: $
		}), t[25] = $, t[26] = P) : P = t[26];
		var N;
		t[27] !== S || t[28] !== P ? (N = u.jsxs("div", babelHelpers.extends({}, x, { children: [P, S] })), t[27] = S, t[28] = P, t[29] = N) : N = t[29];
		var M;
		t[30] !== n || t[31] !== a || t[32] !== i ? (M = u.jsx(r("WAWebTeamLinkMemberRowActions.react"), {
			invitation: n,
			onRenew: i,
			onRemove: a
		}), t[30] = n, t[31] = a, t[32] = i, t[33] = M) : M = t[33];
		var w;
		return t[34] !== D || t[35] !== N || t[36] !== M || t[37] !== L ? (w = u.jsxs("div", babelHelpers.extends({}, R, {
			"data-testid": "teamlink-member-row",
			children: [
				L,
				D,
				N,
				M
			]
		})), t[34] = D, t[35] = N, t[36] = M, t[37] = L, t[38] = w) : w = t[38], w;
	}
	l.default = p;
}), 226);
