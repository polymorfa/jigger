__d("WAWebTeamLinkRenewInvitationDialog.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebTeamLinkCreateInvitationMutation",
	"WAWebTeamLinkInviteCodeCreatedPopup.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t, n = e.invitation, a = e.onRenewed, i = _((t = n.employeeName) != null ? t : ""), l = i[0], c = i[1], f = _(!1), g = f[0], h = f[1], y = _(!1), C = y[0], b = y[1], v = _(null), S = v[0], R = v[1], L = n.employeeLid, E = L != null && L !== "", k = p(!0);
		m(function() {
			return k.current = !0, function() {
				k.current = !1;
			};
		}, []);
		var I = d(function() {
			o("WAWebModalManager").closeModalManager();
		}, []), T = d(function() {
			var e;
			if (!(L == null || L === "" || g)) {
				h(!0), b(!1);
				var t = l.trim() !== "" ? l.trim() : (e = n.employeeName) != null ? e : "";
				o("WAWebTeamLinkCreateInvitationMutation").createTeamLinkInvitation(L, t).then(function(e) {
					if (e.type === "success" && a(), !!k.current) if (h(!1), e.type === "success") {
						var t;
						R((t = e.invitation.nonceCode) != null ? t : "");
					} else b(!0);
				});
			}
		}, [
			n.employeeName,
			L,
			l,
			a,
			g
		]);
		return S != null ? u.jsx(r("WAWebTeamLinkInviteCodeCreatedPopup.react"), {
			nonceCode: S,
			onDone: I
		}) : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			onOK: T,
			onCancel: I,
			okDisabled: !E || g,
			okSpinner: g,
			testid: "teamlink-renew-invite-dialog",
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1qvou4u x17upfok",
				children: [
					u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WDSTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						value: l,
						onValueChange: c,
						testid: "teamlink-renew-invite-name"
					}),
					C && u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "secondaryNegative",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
