__d("WAWebTeamLinkRemoveMemberDialog.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebTeamLinkRemoveInvitationMutation",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = e.invitation, n = e.onRemoved, a = _(!1), i = a[0], l = a[1], c = _(!1), f = c[0], g = c[1], h = t.employeeLid, y = h != null && h !== "", C = t.invitationStatus === "COMPLETED", b = t.employeeName != null && t.employeeName !== "" ? t.employeeName : s._(
			/*BTDS*/
			""
		), v = p(!0);
		m(function() {
			return v.current = !0, function() {
				v.current = !1;
			};
		}, []);
		var S = d(function() {
			o("WAWebModalManager").closeModalManager();
		}, []), R = d(function() {
			h == null || h === "" || i || (l(!0), g(!1), o("WAWebTeamLinkRemoveInvitationMutation").removeTeamLinkInvitation(h).then(function(e) {
				if (e.type === "success" && n(), !!v.current) {
					if (e.type === "success") {
						o("WAWebModalManager").closeModalManager();
						return;
					}
					l(!1), g(!0);
				}
			}));
		}, [
			h,
			n,
			i
		]);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: C ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			okText: C ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "negative-destructive",
			onOK: R,
			onCancel: S,
			okDisabled: !y || i,
			okSpinner: i,
			testid: "teamlink-remove-member-dialog",
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1qvou4u x17upfok",
				children: [u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: C ? s._(
						/*BTDS*/
						"",
						[s._param("name", b)]
					) : s._(
						/*BTDS*/
						"",
						[s._param("name", b)]
					)
				}), f && u.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "secondaryNegative",
					children: C ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					)
				})]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
