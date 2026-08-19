__d("WAWebTeamLinkRemoveMemberDialog.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebTeamLinkRemoveInvitationMutation",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(29), n = e.invitation, a = e.onRemoved, i = _(!1), l = i[0], c = i[1], d = _(!1), f = d[0], h = d[1], y = n.employeeLid, C = y != null && y !== "", b = n.invitationStatus === "COMPLETED", v;
		t[0] !== n.employeeName ? (v = n.employeeName != null && n.employeeName !== "" ? n.employeeName : s._(
			/*BTDS*/
			""
		), t[0] = n.employeeName, t[1] = v) : v = t[1];
		var S = v, R = p(!0), L, E;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			return R.current = !0, (function() {
				R.current = !1;
			});
		}, E = [], t[2] = L, t[3] = E) : (L = t[2], E = t[3]), m(L, E);
		var k = g, I;
		t[4] !== y || t[5] !== a || t[6] !== l ? (I = function() {
			y == null || y === "" || l || (c(!0), h(!1), o("WAWebTeamLinkRemoveInvitationMutation").removeTeamLinkInvitation(y).then(function(e) {
				if (e.type === "success" && a(), !!R.current) {
					if (e.type === "success") {
						o("WAWebModalManager").closeModalManager();
						return;
					}
					c(!1), h(!0);
				}
			}));
		}, t[4] = y, t[5] = a, t[6] = l, t[7] = I) : I = t[7];
		var T = I, D, x;
		t[8] !== b ? (D = b ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), x = b ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[8] = b, t[9] = D, t[10] = x) : (D = t[9], x = t[10]);
		var $;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[11] = $) : $ = t[11];
		var P = !C || l, N;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "x78zum5 xdt5ytf x1qvou4u x17upfok" }, t[12] = N) : N = t[12];
		var M;
		t[13] !== b || t[14] !== S ? (M = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: b ? s._(
				/*BTDS*/
				"",
				[s._param("name", S)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("name", S)]
			)
		}), t[13] = b, t[14] = S, t[15] = M) : M = t[15];
		var w;
		t[16] !== f || t[17] !== b ? (w = f && u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "secondaryNegative",
			children: b ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[16] = f, t[17] = b, t[18] = w) : w = t[18];
		var A;
		t[19] !== M || t[20] !== w ? (A = u.jsxs("div", babelHelpers.extends({}, N, { children: [M, w] })), t[19] = M, t[20] = w, t[21] = A) : A = t[21];
		var F;
		return t[22] !== T || t[23] !== l || t[24] !== A || t[25] !== D || t[26] !== x || t[27] !== P ? (F = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: D,
			okText: x,
			cancelText: $,
			okButtonType: "negative-destructive",
			onOK: T,
			onCancel: k,
			okDisabled: P,
			okSpinner: l,
			testid: "teamlink-remove-member-dialog",
			children: A
		}), t[22] = T, t[23] = l, t[24] = A, t[25] = D, t[26] = x, t[27] = P, t[28] = F) : F = t[28], F;
	}
	function g() {
		o("WAWebModalManager").closeModalManager();
	}
	l.default = f;
}), 226);
