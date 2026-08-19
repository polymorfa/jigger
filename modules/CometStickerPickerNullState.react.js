__d("CometStickerPickerNullState.react", [
	"fbt",
	"CometPickerNullState.react",
	"NullStateMedia",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(3), n = e.notExpanding, a = n === void 0 ? !1 : n, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l;
		return t[1] !== a ? (l = u.jsx(r("CometPickerNullState.react"), {
			body: i,
			icon: r("NullStateMedia"),
			notExpanding: a
		}), t[1] = a, t[2] = l) : l = t[2], l;
	}
	l.default = c;
}), 226);
