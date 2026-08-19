__d("WAWebDeleteContactPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.hasCustomerData, r = e.onCancel, a = e.onOK, i = e.syncToAddressbook, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var c = l, d;
		if (n === !0) {
			var m;
			t[1] !== i ? (m = i ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[1] = i, t[2] = m) : m = t[2], d = m;
		} else {
			var p;
			t[3] !== i ? (p = i ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[3] = i, t[4] = p) : p = t[4], d = p;
		}
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f = _, g;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[6] = g) : g = t[6];
		var h = g, y;
		t[7] !== d ? (y = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: d }), t[7] = d, t[8] = y) : y = t[8];
		var C;
		return t[9] !== r || t[10] !== a || t[11] !== y ? (C = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: a,
			okText: f,
			okButtonType: "solid-warning",
			onCancel: r,
			cancelText: h,
			title: c,
			children: y
		}), t[9] = r, t[10] = a, t[11] = y, t[12] = C) : C = t[12], C;
	}
	l.default = c;
}), 226);
