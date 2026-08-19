__d("WAWebSuggestedLists.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebCheckBox.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebListIcon.react",
	"WAWebListUtils",
	"WAWebNoop",
	"WAWebSuggestedListsUtils",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		sectionHeader: {
			height: "x1gnnpzl",
			paddingTop: "x9orja2",
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		noShrink: {
			flexShrink: "x2lah0s",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.filterText, n = e.onSelect, a = e.selectedSuggestionIds, i = e.suggestedListTheme, l = o("WAWebSuggestedListsUtils").getSuggestedLists(t != null ? t : "");
		return l.length === 0 ? null : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebDrawerSection.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			theme: "list-section",
			animation: !1,
			xstyle: c.noShrink,
			titleXStyle: c.sectionHeader,
			testid: "suggested-lists-section"
		}), l.map(function(e) {
			var t, l, s = (t = a == null ? void 0 : a.has(e.predefinedId)) != null ? t : !1, d = (l = e.displayName) != null ? l : e.name, m = u.jsx(r("WAWebCellFrame.react"), {
				theme: "lists-assign-modal",
				customImage: !0,
				image: u.jsx("div", {
					className: "x78zum5 x1okw0bk x6s0dn4 x13jy36j xsfy40s",
					children: u.jsx("div", {
						className: "x78zum5 xl56j7k x6s0dn4 xvy4d1p xxk0z11",
						children: u.jsx(r("WAWebListIcon.react"), { color: o("WAWebListUtils").colorIndexToHex(e.colorIndex) })
					})
				}),
				primary: d
			}), p = i === "list-assign-modal" ? u.jsx("div", {
				role: "checkbox",
				"aria-checked": s,
				tabIndex: 0,
				className: "xh8yej3 x1ypdohk x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k xnnlda6",
				onClick: function() {
					return n(e);
				},
				onKeyDown: function(r) {
					(r.key === "Enter" || r.key === " ") && (r.preventDefault(), n(e));
				},
				children: u.jsxs("div", {
					className: "x1n2onr6",
					children: [m, u.jsx("div", {
						"aria-hidden": "true",
						className: "x10l6tqk xdg88n9 xlgexem x78zum5 x6s0dn4 x5yr21d x13vifvy",
						children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
							checked: s,
							onChange: r("WAWebNoop")
						})
					})]
				})
			}) : i === "list-assign-inline-edit" ? u.jsx("div", {
				role: "button",
				tabIndex: 0,
				className: "xh8yej3 x1ypdohk x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k xnnlda6",
				onClick: function() {
					return n(e);
				},
				onKeyDown: function(r) {
					(r.key === "Enter" || r.key === " ") && n(e);
				},
				children: m
			}) : i === "list-creation-drawer" ? u.jsx("div", {
				role: "button",
				tabIndex: 0,
				className: "xh8yej3 x1ypdohk xsdox4t x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k",
				onKeyDown: function(r) {
					(r.key === "Enter" || r.key === " ") && (r.preventDefault(), n(e));
				},
				children: u.jsx(r("WAWebCellFrame.react"), {
					theme: "label-selection-new-label",
					onClick: function() {
						return n(e);
					},
					image: u.jsx("div", {
						className: "x78zum5 x6s0dn4 xl56j7k",
						children: u.jsx(r("WAWebListIcon.react"), {
							color: o("WAWebListUtils").colorIndexToHex(e.colorIndex),
							size: 16
						})
					}),
					primary: d
				})
			}) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
			})();
			return u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: c.noShrink,
				children: p
			}, e.predefinedId);
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
