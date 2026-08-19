__d("WAWebContactImage.react", [
	"WAWebChatSearchQuery",
	"WAWebDetailImage.react",
	"WAWebStatusChatlistRing.react",
	"WAWebStatusProfilePhotoRingWrapper.react",
	"WAWebWamEnumStatusRowSection",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(12), n = e.contact, a = e.ephemeralIcon, i = e.loadPicture, l = e.searchQuery, u = e.secondaryAvatar, c = e.showStatusRingAroundProfilePhoto, d = e.size, m = e.waitIdle, p = i === void 0 ? !0 : i;
		if (c === !0) {
			var _;
			return t[0] !== n || t[1] !== l || t[2] !== d || t[3] !== m ? (_ = o("WAWebChatSearchQuery").isSearchResult(l) ? s.jsx(r("WAWebStatusChatlistRing.react"), {
				contact: n,
				photoSize: d,
				waitIdle: m,
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST_SEARCH,
				rowIndex: 0
			}) : s.jsx(r("WAWebStatusProfilePhotoRingWrapper.react"), {
				contact: n,
				waitIdle: m,
				photoSize: d,
				hideWhenNoUnreadStatuses: !1,
				rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.GROUP_PARTICIPANT,
				rowIndex: 0
			}), t[0] = n, t[1] = l, t[2] = d, t[3] = m, t[4] = _) : _ = t[4], _;
		}
		var f;
		return t[5] !== n.id || t[6] !== a || t[7] !== p || t[8] !== u || t[9] !== d || t[10] !== m ? (f = s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: d,
			ephemeralIcon: a,
			waitIdle: m,
			loadPicture: p,
			secondaryAvatar: u
		}), t[5] = n.id, t[6] = a, t[7] = p, t[8] = u, t[9] = d, t[10] = m, t[11] = f) : f = t[11], f;
	}
	l.default = u;
}), 98);
