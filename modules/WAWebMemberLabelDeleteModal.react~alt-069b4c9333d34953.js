__d("WAWebMemberLabelDeleteModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onDelete, a = c(!1), i = a[0], l = a[1], d = m, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[0] = p) : p = t[0];
		var _ = p, f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[1] = f) : f = t[1];
		var g = f, h;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[2] = h) : h = t[2];
		var y = h, C;
		t[3] !== n ? (C = async function() {
			l(!0), await n(), l(!1);
		}, t[3] = n, t[4] = C) : C = t[4];
		var b = C, v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			children: g
		}), t[5] = v) : v = t[5];
		var S;
		return t[6] !== b || t[7] !== i ? (S = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: b,
			okText: y,
			okButtonType: "solid-warning",
			onCancel: d,
			onOverlayClick: d,
			okSpinner: i,
			okDisabled: i,
			title: _,
			children: v
		}), t[6] = b, t[7] = i, t[8] = S) : S = t[8], S;
	}
	function m() {
		o("WAWebModalManager").ModalManager.closeSupportModal();
	}
	l.default = d;
}), 226);
