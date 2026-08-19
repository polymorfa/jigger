__d("WAWebBusinessProfileModal.react", [
	"fbt",
	"WAWebModal.react",
	"WAWebRichTextInput.react",
	"WAWebSavePopup.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcSearch.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { iconSearch: {
		alignItems: "x6s0dn4",
		color: "xhslqc4",
		display: "x78zum5",
		height: "x1vqgdyp",
		justifyContent: "xl56j7k",
		width: "x1useyqa",
		$$css: !0
	} };
	function d(e) {
		var t = e.afterSave, n = e.children, a = e.description, i = e.doSave, l = e.isValid, d = e.onCancel, m = e.onSearchChange, p = e.searchLabel, _ = e.title, f = function(t) {
			var e, n = (e = t.text) != null ? e : "";
			m == null || m(n);
		};
		return u.jsxs(r("WAWebSavePopup.react"), {
			title: _,
			doSave: i,
			isValid: l != null ? l : !0,
			modalConfig: { type: o("WAWebModal.react").ModalTheme.BusinessProfile },
			onCancel: d,
			afterSave: t,
			tsNavigationData: { surface: "smb-business-profile-edit-categories" },
			children: [
				u.jsx("div", {
					className: "xvpt6g3 xb0esv5 xyo0t3i",
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: a
					})
				}),
				u.jsxs("div", {
					className: "x6s0dn4 x4wrhlh xt8t1vi x1xc408v x129tdwq x15urzxu x78zum5 x1ua1l7f xyxtwap x7vsco6 x12w63v0 x1nzty39",
					children: [u.jsx(r("WAWebUnstyledButton.react"), {
						xstyle: c.iconSearch,
						"aria-label": s._(
							/*BTDS*/
							""
						),
						children: u.jsx(r("WDSIconIcSearch.react"), {})
					}), u.jsx("div", {
						className: "x1iyjqo2 x16ovd2e x12xbjc7",
						children: u.jsx(r("WAWebRichTextInput.react"), {
							editorName: "business-category-search",
							lineWrap: !1,
							placeholder: p,
							onChange: f
						})
					})]
				}),
				n
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
