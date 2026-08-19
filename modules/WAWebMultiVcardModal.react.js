__d("WAWebMultiVcardModal.react", [
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
		var t = o("react-compiler-runtime").c(18), n = e.onSaveContact, a = e.usernames, i = e.vcards, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {
			surface: "unknown",
			viewName: "multi-contact-viewer"
		}, t[0] = l) : l = t[0];
		var c;
		t[1] !== i.length ? (c = s._(
			/*BTDS*/
			"",
			[s._plural(i.length, "count")]
		), t[1] = i.length, t[2] = c) : c = t[2];
		var d;
		t[3] !== c ? (d = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: c,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: o("WAWebModalManager").closeModalManager
		}), t[3] = c, t[4] = d) : d = t[4];
		var m;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x889kno" }, t[5] = m) : m = t[5];
		var p;
		if (t[6] !== n || t[7] !== a || t[8] !== i) {
			var _;
			t[10] !== n || t[11] !== a ? (_ = function(t, i) {
				var e;
				if (!t) return null;
				var l = (e = o("WAWebVcardParsingUtils").vcardLidWid(t)) != null ? e : o("WAWebVcardParsingUtils").vcardPhoneNumberWids(t)[0], s = l && a ? a.get(l.toString()) : null;
				return u.jsx("div", {
					className: "x1n2onr6 xyorhqc x1280gxy x1astcta",
					children: u.jsx(r("WAWebVcardModalDetails.react"), {
						parsedVcard: t,
						thumbnail: o("WAWebVcardParsingUtils").vcardThumbnail(t),
						onSaveContact: n,
						username: s
					})
				}, i);
			}, t[10] = n, t[11] = a, t[12] = _) : _ = t[12], p = i.map(_), t[6] = n, t[7] = a, t[8] = i, t[9] = p;
		} else p = t[9];
		var f;
		t[13] !== p ? (f = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, { children: u.jsx("div", babelHelpers.extends({}, m, { children: p })) }) }), t[13] = p, t[14] = f) : f = t[14];
		var g;
		return t[15] !== d || t[16] !== f ? (g = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Box,
			children: u.jsxs(r("WAWebDrawer.react"), {
				tsNavigationData: l,
				children: [d, f]
			})
		}), t[15] = d, t[16] = f, t[17] = g) : g = t[17], g;
	}
	l.default = c;
}), 226);
