__d("WAWebTeamLinkCreateInvitationDialog.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactImage.react",
	"WAWebFrontendContactGetters",
	"WAWebL10NAccentFold",
	"WAWebLidMigrationUtils",
	"WAWebModalManager",
	"WAWebPhoneNumberSearch",
	"WAWebTeamLinkCreateInvitationMutation",
	"WAWebTeamLinkInviteCodeCreatedPopup.react",
	"WAWebWidFactory",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useDeferredValue, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = c.useState;
	function h(e) {
		var t = e.onCreated, n = g(""), a = n[0], i = n[1], l = g(""), c = l[0], h = l[1], y = g(null), C = y[0], b = y[1], v = g(!1), S = v[0], R = v[1], L = g(!1), E = L[0], k = L[1], I = g(!1), T = I[0], D = I[1], x = g(null), $ = x[0], P = x[1], N = f(!0);
		p(function() {
			return N.current = !0, function() {
				N.current = !1;
			};
		}, []);
		var M = m(a), w = _(function() {
			var e = M.trim();
			if (e === "") return [];
			var t = o("WAWebL10NAccentFold").accentFold(e), n = o("WAWebPhoneNumberSearch").numberSearch(t), r = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, { showMe: !1 });
			return r.filter(function(e) {
				return e.searchMatchExact(t, n) != null;
			});
		}, [M]), A = d(function(e) {
			i(e), b(null), h(""), R(!0), D(!1);
		}, []), F = d(function(e) {
			b(e), i(o("WAWebFrontendContactGetters").getDisplayName(e)), h(o("WAWebFrontendContactGetters").getDisplayName(e)), R(!1);
		}, []), O = d(function() {
			o("WAWebModalManager").closeModalManager();
		}, []), B = d(function() {
			if (!(C == null || E)) {
				var e;
				try {
					e = String(o("WAWebLidMigrationUtils").toUserLidOrThrow(o("WAWebWidFactory").asUserWidOrThrow(C.id)));
				} catch (e) {
					D(!0);
					return;
				}
				k(!0), D(!1);
				var n = c.trim() !== "" ? c.trim() : o("WAWebFrontendContactGetters").getDisplayName(C);
				o("WAWebTeamLinkCreateInvitationMutation").createTeamLinkInvitation(e, n).then(function(e) {
					if (e.type === "success" && t(), !!N.current) if (k(!1), e.type === "success") {
						var n;
						P((n = e.invitation.nonceCode) != null ? n : "");
					} else D(!0);
				});
			}
		}, [
			c,
			t,
			C,
			E
		]);
		if ($ != null) return u.jsx(r("WAWebTeamLinkInviteCodeCreatedPopup.react"), {
			nonceCode: $,
			onDone: O
		});
		var W = a.trim() !== "", q = w.length > 0;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
			onOK: B,
			onCancel: O,
			okDisabled: C == null || E,
			okSpinner: E,
			testid: "teamlink-create-invite-dialog",
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
					u.jsxs("div", {
						className: "x1n2onr6",
						children: [
							u.jsx(r("WDSTextField.react"), {
								label: s._(
									/*BTDS*/
									""
								),
								value: a,
								onValueChange: A,
								testid: "teamlink-create-invite-contact"
							}),
							S && W && q && u.jsx("div", {
								className: "xav9cv8 xw6alqk x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a x1xiyphd x1odjw0f",
								children: w.map(function(e) {
									return u.jsxs("div", {
										className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x16ovd2e x12xbjc7 x1iw51ew xde1mab x1ypdohk xjbqb8w xkd4ks6",
										onClick: function() {
											return F(e);
										},
										onKeyDown: function(n) {
											(n.key === "Enter" || n.key === " ") && (n.preventDefault(), F(e));
										},
										role: "button",
										tabIndex: 0,
										"data-testid": "teamlink-contact-option",
										children: [u.jsx(r("WAWebContactImage.react"), {
											contact: e,
											size: 32
										}), u.jsxs("div", {
											className: "x78zum5 xdt5ytf xeuugli x1iyjqo2",
											children: [u.jsx(r("WDSText.react"), {
												type: "Body2",
												colorName: "contentDefault",
												maxLines: 1,
												children: o("WAWebFrontendContactGetters").getDisplayName(e)
											}), u.jsx(r("WDSText.react"), {
												type: "Body3",
												colorName: "contentDeemphasized",
												maxLines: 1,
												children: o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(e)
											})]
										})]
									}, String(e.id));
								})
							}),
							S && W && !q && u.jsx("div", {
								className: "xav9cv8 xw6alqk x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xyi3aci xwf5gio x1p453bz x1suzm8a x1xiyphd x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab",
								children: u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDeemphasized",
									children: s._(
										/*BTDS*/
										""
									)
								})
							})
						]
					}),
					u.jsx(r("WDSTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						value: c,
						onValueChange: h,
						testid: "teamlink-create-invite-name"
					}),
					T && u.jsx(r("WDSText.react"), {
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
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
