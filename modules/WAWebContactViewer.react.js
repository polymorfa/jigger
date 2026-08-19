__d("WAWebContactViewer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebVcardModalDetails.react",
	"WAWebVcardParsingUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onSaveContact, a = e.username, i = e.vcard, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			surface: "contact-viewer",
			viewName: "contact-viewer"
		}, t[0] = l) : l = t[0];
		var c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: o("WAWebModalManager").closeModalManager
		}), t[1] = c) : c = t[1];
		var d;
		t[2] !== i ? (d = o("WAWebVcardParsingUtils").vcardThumbnail(i), t[2] = i, t[3] = d) : d = t[3];
		var m;
		return t[4] !== n || t[5] !== d || t[6] !== a || t[7] !== i ? (m = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Box,
			tsNavigationData: l,
			children: u.jsxs(r("WAWebDrawer.react"), {
				disableNavigationLogging: !0,
				children: [c, u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, { children: u.jsx(r("WAWebVcardModalDetails.react"), {
					parsedVcard: i,
					thumbnail: d,
					onSaveContact: n,
					username: a
				}) }) })]
			}, "vcard-modal")
		}), t[4] = n, t[5] = d, t[6] = a, t[7] = i, t[8] = m) : m = t[8], m;
	}
	l.default = c;
}), 226);
