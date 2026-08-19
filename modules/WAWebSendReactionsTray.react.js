__d("WAWebSendReactionsTray.react", [
	"WAWebSendReactionsTrayV2.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = "__more_reactions__";
	function c(e) {
		var t = o("react-compiler-runtime").c(12), n = e.allowTabEscape, a = e.disableAutoFocus, i = e.isMoreSelected, l = e.isParentMsgSentByMe, u = e.onShiftTabToMenu, c = e.onTabToMenu, d = e.reactions, m = e.rotateFocusArrowsRef, p = e.selectedCallback, _ = e.selectedIndex, f = e.showMoreOption, g = n === void 0 ? !1 : n, h = a === void 0 ? !1 : a, y = i === void 0 ? !1 : i, C = f === void 0 ? !1 : f, b;
		return t[0] !== g || t[1] !== h || t[2] !== y || t[3] !== l || t[4] !== u || t[5] !== c || t[6] !== d || t[7] !== m || t[8] !== p || t[9] !== _ || t[10] !== C ? (b = s.jsx(r("WAWebSendReactionsTrayV2.react"), {
			allowTabEscape: g,
			disableAutoFocus: h,
			isMoreSelected: y,
			isParentMsgSentByMe: l,
			onShiftTabToMenu: u,
			onTabToMenu: c,
			reactions: d,
			rotateFocusArrowsRef: m,
			selectedCallback: p,
			selectedIndex: _,
			showMoreOption: C
		}), t[0] = g, t[1] = h, t[2] = y, t[3] = l, t[4] = u, t[5] = c, t[6] = d, t[7] = m, t[8] = p, t[9] = _, t[10] = C, t[11] = b) : b = t[11], b;
	}
	l.MORE_REACTIONS = u, l.SendReactionsTray = c;
}), 98);
