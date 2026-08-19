__d("WAWebStatusMuteContactPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModal.react",
	"WAWebStatusGatingUtils",
	"WAWebText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBottom32: {
		marginBottom: "xg6s713",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(25), n = e.contact, r = e.isNewsletter, a = e.onCancel, i = e.onMute, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = [o("WAWebFrontendContactGetters").getFormattedName], t[0] = l) : l = t[0];
		var d = o("useWAWebContactValues").useContactValues(n.id, l), m = d[0], p;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[1] = p) : p = t[1];
		var _ = p, f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[2] = f) : f = t[2];
		var g = f, h;
		if (r) {
			var y;
			t[3] !== m ? (y = s._(
				/*BTDS*/
				"",
				[s._param("name-of-channel-being-hidden", m)]
			), t[3] = m, t[4] = y) : y = t[4], h = y;
		} else if (o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled()) {
			var C;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
				/*BTDS*/
				""
			), t[5] = C) : C = t[5], h = C;
		} else {
			var b;
			t[6] !== m ? (b = s._(
				/*BTDS*/
				"",
				[s._param("name-of-contact-being-muted", m)]
			), t[6] = m, t[7] = b) : b = t[7], h = b;
		}
		var v = r || o("WAWebStatusGatingUtils").isStatusHideStringEnabled(), S;
		if (r) {
			var R;
			t[8] !== m ? (R = s._(
				/*BTDS*/
				"",
				[s._param("name-of-channel-being-hidden", m)]
			), t[8] = m, t[9] = R) : R = t[9], S = R;
		} else if (v) {
			var L;
			t[10] !== m ? (L = s._(
				/*BTDS*/
				"",
				[s._param("name-of-contact-being-hidden", m)]
			), t[10] = m, t[11] = L) : L = t[11], S = L;
		} else {
			var E;
			t[12] !== m ? (E = s._(
				/*BTDS*/
				"",
				[s._param("name-of-contact-being-muted", m)]
			), t[12] = m, t[13] = E) : E = t[13], S = E;
		}
		var k;
		t[14] !== S ? (k = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: S }), t[14] = S, t[15] = k) : k = t[15];
		var I = v ? g : _, T;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), t[16] = T) : T = t[16];
		var D;
		t[17] !== h ? (D = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
				xstyle: c.marginBottom32,
				children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: h })
			})
		}), t[17] = h, t[18] = D) : D = t[18];
		var x;
		return t[19] !== a || t[20] !== i || t[21] !== k || t[22] !== I || t[23] !== D ? (x = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.StatusReport,
			title: k,
			okText: I,
			onOK: i,
			cancelText: T,
			onCancel: a,
			children: D
		}), t[19] = a, t[20] = i, t[21] = k, t[22] = I, t[23] = D, t[24] = x) : x = t[24], x;
	}
	l.default = d;
}), 226);
