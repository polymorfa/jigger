__d("WAWebTeamLinkDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebModalManager",
	"WAWebSectionHeader.react",
	"WAWebTeamLinkCreateInvitationDialog.react",
	"WAWebTeamLinkListInvitationsQuery",
	"WAWebTeamLinkMemberRow.react",
	"WAWebTeamLinkRemoveMemberDialog.react",
	"WAWebTeamLinkRenewInvitationDialog.react",
	"WDSIconIcAddCircle.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = e.onBack, n = _(null), a = n[0], i = n[1], l = p(!0), c = d(function(e) {
			l.current && i(e);
		}, []), f = d(function() {
			o("WAWebTeamLinkListInvitationsQuery").fetchTeamLinkInvitations().then(c);
		}, [c]);
		m(function() {
			return l.current = !0, o("WAWebTeamLinkListInvitationsQuery").fetchTeamLinkInvitations().then(c), function() {
				l.current = !1;
			};
		}, [c]);
		var g = d(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebTeamLinkCreateInvitationDialog.react"), { onCreated: f }));
		}, [f]), h = d(function(e) {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebTeamLinkRenewInvitationDialog.react"), {
				invitation: e,
				onRenewed: f
			}));
		}, [f]), y = d(function(e) {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebTeamLinkRemoveMemberDialog.react"), {
				invitation: e,
				onRemoved: f
			}));
		}, [f]), C = (function(e) {
			if (e == null) return u.jsx("div", {
				className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.type === "error") return u.jsx("div", {
				className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "secondaryNegative",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.type === "success" && "invitations" in e) {
				var t = e.invitations;
				return t.length === 0 ? u.jsx("div", {
					className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebSectionHeader.react"), { header: s._(
					/*BTDS*/
					""
				) }), t.map(function(e, t) {
					var n;
					return u.jsx(r("WAWebTeamLinkMemberRow.react"), {
						invitation: e,
						onRenew: h,
						onRemove: y
					}, (n = e.employeeLid) != null ? n : String(t));
				})] });
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})(a);
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "striped",
			testid: "teamlink-panel",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
				onBack: t,
				menu: u.jsx(r("WDSMenuBarItem.react"), {
					icon: r("WDSIconIcAddCircle.react"),
					title: s._(
						/*BTDS*/
						""
					),
					testid: "teamlink-create-invite-btn",
					onClick: g,
					buttonVariant: "borderless",
					tabOrder: -1
				})
			}), u.jsx(r("WAWebDrawerBody.react"), { children: C })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
