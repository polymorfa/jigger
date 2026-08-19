__d("WAWebGroupInfoDevToolsSection.react", [
	"WAWebChatInfoDrawerSection.react",
	"WAWebCopyPasteSelectable.react",
	"WAWebDevOnlyBadge.react",
	"WAWebDevToolsSection.react",
	"WAWebExternalLink.react",
	"WAWebURLUtils",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.groupMetadata, n = e.isCommunity, a = o("useWAWebModelValues").useModelValues(t, ["id"]), i = a.id, l = "";
		return n === !0 ? l = r("WAWebURLUtils").build("https://www.internalfb.com/intern/whatsapp/admin/community_info", { gid: i.user }) : l = r("WAWebURLUtils").build("https://www.internalfb.com/intern/whatsapp/admin/group_info/", {
			id: i.user,
			type: "GROUP"
		}), s.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
			selectable: !0,
			children: [s.jsx(r("WAWebDevToolsSection.react"), { children: s.jsxs(o("WAWebExternalLink.react").ExternalLink, {
				href: l,
				children: [
					"Admin Tool - ",
					n === !0 ? "Community" : "Group",
					" Info"
				]
			}) }), s.jsxs(r("WAWebDevToolsSection.react"), { children: ["Group Id: ", i.toString()] })]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		var t = e.groupMetadata, n = e.isCommunity, r = n === void 0 ? !1 : n;
		if (t != null) return s.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			title: s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: "Developer Section" }),
			testid: "group-info-drawer-dev-section-container",
			children: s.jsx(u, {
				groupMetadata: t,
				isCommunity: r
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
