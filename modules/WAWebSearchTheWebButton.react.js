__d("WAWebSearchTheWebButton.react", [
	"WAWebModalManager",
	"WAWebSearchTheWebCommonUtils",
	"WAWebSearchTheWebEventLogger",
	"WAWebWamEnumStwInteraction",
	"WAWebWebSearchPopup.react",
	"WDSIconIcSearch.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(8), n = e.entryPoint, a = e.messageType, i = e.msg, l = e.stwFormat, u;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (u = function() {
			o("WAWebSearchTheWebEventLogger").logSTWEvent({
				stwEntryPoint: n,
				stwFormat: l,
				stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.ENTRY_POINT_CLICKED,
				messageType: a
			}), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebWebSearchPopup.react"), {
				message: i,
				entryPoint: n,
				stwFormat: l
			}));
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u) : u = t[4];
		var c = u, d;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebSearchTheWebCommonUtils").getHFMHeaderCTAText(), t[5] = d) : d = t[5];
		var m;
		return t[6] !== c ? (m = s.jsx(r("WDSMenuItem.react"), {
			onPress: c,
			Icon: r("WDSIconIcSearch.react"),
			title: d
		}), t[6] = c, t[7] = m) : m = t[7], m;
	}
	l.default = u;
}), 98);
