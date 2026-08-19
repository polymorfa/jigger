__d("WAWebTeamLinkMemberRow.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebContactImage.react",
	"WAWebFrontendContactGetters",
	"WAWebTeamLinkMemberRowActions.react",
	"WAWebWidFactory",
	"WDSText.react",
	"react"
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
		var t = e.invitation, n = e.onRemove, a = e.onRenew, i = t.employeeLid, l = c(function() {
			if (i == null || i === "") return null;
			try {
				return o("WAWebContactCollection").ContactCollection.get(o("WAWebWidFactory").createUserLidOrThrow(i, "lid"));
			} catch (e) {
				return null;
			}
		}, [i]), p = l != null ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(l) : "", _ = t.employeeName != null && t.employeeName !== "" ? t.employeeName : p, f = l != null ? o("WAWebFrontendContactGetters").getPnForLid(l) : "", g = t.invitationStatus, h = g === "PENDING" ? u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			testid: "teamlink-row-code",
			children: u.jsx("span", {
				className: "x1ey7xld xl5zsmt",
				children: t.nonceCode != null && t.nonceCode !== "" ? t.nonceCode : "—"
			})
		}) : null;
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
			"data-testid": "teamlink-member-row",
			children: [
				l != null ? u.jsx(r("WAWebContactImage.react"), {
					contact: l,
					size: d
				}) : u.jsx("div", { className: "x15jighw x112a4uq x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1518k6t x2lah0s" }),
				u.jsxs("div", {
					className: "x78zum5 xdt5ytf xeuugli x1iyjqo2 xs83m0k x1r8uery",
					children: [u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						maxLines: 1,
						children: _ !== "" ? _ : s._(
							/*BTDS*/
							""
						)
					}), f !== "" && u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						maxLines: 1,
						children: f
					})]
				}),
				u.jsxs("div", {
					className: "x78zum5 xdt5ytf xuk3077 x129bwdz x2lah0s",
					children: [u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: m(g)
					}), h]
				}),
				u.jsx(r("WAWebTeamLinkMemberRowActions.react"), {
					invitation: t,
					onRenew: a,
					onRemove: n
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
