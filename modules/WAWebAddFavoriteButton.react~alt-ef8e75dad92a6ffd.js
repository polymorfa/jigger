__d("WAWebAddFavoriteButton.react", [
	"fbt",
	"WAWebAddToFavoritesModal.react",
	"WAWebCellV2.react",
	"WAWebModalManager",
	"WAWebRoundShape.react",
	"WAWebText.react",
	"WDSIconIcPersonAddFilled.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.ref, n = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebAddToFavoritesModal.react"), { onClose: o("WAWebModalManager").closeModalManager }));
		}, a = r("WDSIconIcPersonAddFilled.react"), i = u.jsx(r("WAWebRoundShape.react"), {
			theme: "compact",
			children: u.jsx(a, { directional: !0 })
		}), l = s._(
			/*BTDS*/
			""
		), c = s._(
			/*BTDS*/
			""
		);
		return u.jsx("div", {
			role: "gridcell",
			children: u.jsx(r("WAWebCellV2.react"), {
				ref: t,
				testid: "add-favorite",
				detailLeft: i,
				primary: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: l }),
				onClick: n,
				ariaLabel: c,
				size: "medium",
				isRefresh: !0
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
