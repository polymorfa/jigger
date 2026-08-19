__d("WAWebGroupInviteRevokeModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebGroupType",
	"WAWebModalManager",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingBottom5: {
		paddingBottom: "xs9asl8",
		$$css: !0
	} }, m = { confirmationText: {
		display: "x1lliihq",
		fontSize: "x6prxxf",
		lineHeight: "x1fc57z9",
		color: "x14ug900",
		$$css: !0
	} };
	function p(t) {
		var n, a = o("react-compiler-runtime").c(13), i = t.chat, l = t.onConfirm, u;
		a[0] !== l ? (u = function() {
			l(), o("WAWebModalManager").ModalManager.close();
		}, a[0] = l, a[1] = u) : u = a[1];
		var p = u, _, f;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
			surface: "unknown",
			viewName: "group-invite-revoke"
		}, f = s._(
			/*BTDS*/
			""
		), a[2] = _, a[3] = f) : (_ = a[2], f = a[3]);
		var g;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), a[4] = g) : g = a[4];
		var h, y;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), y = (e || (e = r("stylex"))).props(m.confirmationText, o("WDSPaddings.stylex").wdsPaddings.paddingTop4, d.paddingBottom5, o("WDSPaddings.stylex").wdsPaddings.paddingHor0), a[5] = h, a[6] = y) : (h = a[5], y = a[6]);
		var C;
		if (a[7] !== i.contact.name || a[8] !== ((n = i.groupMetadata) == null ? void 0 : n.groupType)) {
			var b, v;
			C = c.jsx("div", babelHelpers.extends({}, y, { children: ((b = i.groupMetadata) == null ? void 0 : b.groupType) === o("WAWebGroupType").GroupType.COMMUNITY ? s._(
				/*BTDS*/
				"",
				[s._param("community", i.contact.name)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("group", i.contact.name)]
			) })), a[7] = i.contact.name, a[8] = (v = i.groupMetadata) == null ? void 0 : v.groupType, a[9] = C;
		} else C = a[9];
		var S;
		return a[10] !== p || a[11] !== C ? (S = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: _,
			title: f,
			onOK: p,
			okText: g,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: h,
			children: C
		}), a[10] = p, a[11] = C, a[12] = S) : S = a[12], S;
	}
	l.default = p;
}), 226);
