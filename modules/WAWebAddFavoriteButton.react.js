__d("WAWebAddFavoriteButton.react", [
	"fbt",
	"WAWebAddToFavoritesModal.react",
	"WAWebCellV2.react",
	"WAWebModalManager",
	"WAWebRoundShape.react",
	"WAWebText.react",
	"WDSIconIcPersonAddFilled.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.ref, a = d, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WAWebRoundShape.react"), {
			theme: "compact",
			children: u.jsx(r("WDSIconIcPersonAddFilled.react"), { directional: !0 })
		}), t[0] = i) : i = t[0];
		var l = i, c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[1] = c) : c = t[1];
		var m = c, p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[2] = p) : p = t[2];
		var _ = p, f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: m }), t[3] = f) : f = t[3];
		var g;
		return t[4] !== n ? (g = u.jsx("div", {
			role: "gridcell",
			children: u.jsx(r("WAWebCellV2.react"), {
				ref: n,
				testid: "add-favorite",
				detailLeft: l,
				primary: f,
				onClick: a,
				ariaLabel: _,
				size: "medium",
				isRefresh: !0
			})
		}), t[4] = n, t[5] = g) : g = t[5], g;
	}
	function d() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebAddToFavoritesModal.react"), { onClose: o("WAWebModalManager").closeModalManager }));
	}
	l.default = c;
}), 226);
