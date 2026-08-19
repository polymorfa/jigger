__d("WAWebSendReactionsTray.react", ["WAWebSendReactionsTrayV2.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = "__more_reactions__";
	function c(e) {
		var t = e.allowTabEscape, n = t === void 0 ? !1 : t, o = e.disableAutoFocus, a = o === void 0 ? !1 : o, i = e.isInlineMode, l = e.isMoreSelected, u = l === void 0 ? !1 : l, c = e.isParentMsgSentByMe, d = e.onShiftTabToMenu, m = e.onTabToMenu, p = e.reactions, _ = e.rotateFocusArrowsRef, f = e.selectedCallback, g = e.selectedIndex, h = e.showMoreOption, y = h === void 0 ? !1 : h;
		return s.jsx(r("WAWebSendReactionsTrayV2.react"), {
			allowTabEscape: n,
			disableAutoFocus: a,
			isMoreSelected: u,
			isParentMsgSentByMe: c,
			onShiftTabToMenu: d,
			onTabToMenu: m,
			reactions: p,
			rotateFocusArrowsRef: _,
			selectedCallback: f,
			selectedIndex: g,
			showMoreOption: y
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.MORE_REACTIONS = u, l.SendReactionsTray = c;
}), 98);
