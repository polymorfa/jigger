__d("WAWebTeamLinkInviteCodeCreatedPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.nonceCode, n = e.onDone;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: n,
			testid: "teamlink-invite-created-dialog",
			children: u.jsxs("div", {
				className: "x78zum5 xdt5ytf x1qvou4u x17upfok",
				children: [u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					testid: "teamlink-invite-code",
					children: u.jsx("span", {
						className: "x1ey7xld xl5zsmt",
						children: t
					})
				})]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
