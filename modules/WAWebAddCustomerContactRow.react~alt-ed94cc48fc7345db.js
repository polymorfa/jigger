__d("WAWebAddCustomerContactRow.react", [
	"WAWebContactImage.react",
	"WAWebFrontendContactGetters",
	"WAWebUsernameTypes",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = e.contact, n = e.onClick, a = e.position, i = o("WAWebFrontendContactGetters").getDisplayName(t), l = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(t), c = t.username != null ? o("WAWebUsernameTypes").displayUsername(t.username) : null, d = u(function() {
			n(t, a);
		}, [
			t,
			n,
			a
		]), m = u(function(e) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), n(t, a));
		}, [
			t,
			n,
			a
		]);
		return s.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x16ovd2e x12xbjc7 x1iw51ew xde1mab x1ypdohk xjbqb8w xkd4ks6",
			onClick: d,
			onKeyDown: m,
			role: "button",
			tabIndex: 0,
			"data-testid": "add-customer-contact-row",
			children: [s.jsx(r("WAWebContactImage.react"), {
				contact: t,
				size: 32
			}), s.jsxs("div", {
				className: "x78zum5 xdt5ytf xeuugli x1iyjqo2 xs83m0k x1r8uery",
				children: [s.jsxs("div", {
					className: "x78zum5 x1q0g3np x1pha0wt x1trrmfo",
					children: [s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						maxLines: 1,
						children: i
					}), c != null && s.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						maxLines: 1,
						children: c
					})]
				}), s.jsx("div", {
					className: "x78zum5 x1q0g3np x6s0dn4 x1trrmfo x6ikm8r x10wlt62 xuxw1ft xlyipyv",
					children: l !== "" && s.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						maxLines: 1,
						children: l
					})
				})]
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
