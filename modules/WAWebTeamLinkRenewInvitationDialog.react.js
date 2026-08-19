__d("WAWebTeamLinkRenewInvitationDialog.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebTeamLinkCreateInvitationMutation",
	"WAWebTeamLinkInviteCodeCreatedPopup.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t, n = o("react-compiler-runtime").c(28), a = e.invitation, i = e.onRenewed, l = _((t = a.employeeName) != null ? t : ""), c = l[0], d = l[1], f = _(!1), h = f[0], y = f[1], C = _(!1), b = C[0], v = C[1], S = _(null), R = S[0], L = S[1], E = a.employeeLid, k = E != null && E !== "", I = p(!0), T, D;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			return I.current = !0, (function() {
				I.current = !1;
			});
		}, D = [], n[0] = T, n[1] = D) : (T = n[0], D = n[1]), m(T, D);
		var x = g, $;
		n[2] !== a.employeeName || n[3] !== E || n[4] !== c || n[5] !== i || n[6] !== h ? ($ = function() {
			var e;
			if (!(E == null || E === "" || h)) {
				y(!0), v(!1);
				var t = c.trim() !== "" ? c.trim() : (e = a.employeeName) != null ? e : "";
				o("WAWebTeamLinkCreateInvitationMutation").createTeamLinkInvitation(E, t).then(function(e) {
					if (e.type === "success" && i(), !!I.current) if (y(!1), e.type === "success") {
						var t;
						L((t = e.invitation.nonceCode) != null ? t : "");
					} else v(!0);
				});
			}
		}, n[2] = a.employeeName, n[3] = E, n[4] = c, n[5] = i, n[6] = h, n[7] = $) : $ = n[7];
		var P = $;
		if (R != null) {
			var N;
			return n[8] !== R ? (N = u.jsx(r("WAWebTeamLinkInviteCodeCreatedPopup.react"), {
				nonceCode: R,
				onDone: x
			}), n[8] = R, n[9] = N) : N = n[9], N;
		}
		var M, w, A;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), w = s._(
			/*BTDS*/
			""
		), A = s._(
			/*BTDS*/
			""
		), n[10] = M, n[11] = w, n[12] = A) : (M = n[10], w = n[11], A = n[12]);
		var F = !k || h, O;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (O = { className: "x78zum5 xdt5ytf x1qvou4u x17upfok" }, n[13] = O) : O = n[13];
		var B;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (B = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[14] = B) : B = n[14];
		var W;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
			/*BTDS*/
			""
		), n[15] = W) : W = n[15];
		var q;
		n[16] !== c ? (q = u.jsx(r("WDSTextField.react"), {
			label: W,
			value: c,
			onValueChange: d,
			testid: "teamlink-renew-invite-name"
		}), n[16] = c, n[17] = q) : q = n[17];
		var U;
		n[18] !== b ? (U = b && u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "secondaryNegative",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[18] = b, n[19] = U) : U = n[19];
		var V;
		n[20] !== q || n[21] !== U ? (V = u.jsxs("div", babelHelpers.extends({}, O, { children: [
			B,
			q,
			U
		] })), n[20] = q, n[21] = U, n[22] = V) : V = n[22];
		var H;
		return n[23] !== P || n[24] !== h || n[25] !== V || n[26] !== F ? (H = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: M,
			okText: w,
			cancelText: A,
			onOK: P,
			onCancel: x,
			okDisabled: F,
			okSpinner: h,
			testid: "teamlink-renew-invite-dialog",
			children: V
		}), n[23] = P, n[24] = h, n[25] = V, n[26] = F, n[27] = H) : H = n[27], H;
	}
	function g() {
		o("WAWebModalManager").closeModalManager();
	}
	l.default = f;
}), 226);
