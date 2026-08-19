__d("WAWebChipSelectorFooter.react", [
	"fbt",
	"WAWebChipButton.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebRoundXInvIcon.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { chip: {
		marginTop: "x1380le5",
		marginInlineEnd: "xqf2s3x",
		marginBottom: "xat24cr",
		marginInlineStart: "x1lziwak",
		$$css: !0
	} };
	function d(e) {
		var t = e.categories, n = e.onRemoveItem, a = r("WAWebL10N").isRTL();
		return u.jsx("div", {
			className: "x1xrf6ya xcldk2z xa0aww2 x1phvje8 x178xt8z x13fuv20 xx42vgk",
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "start",
				justify: "start",
				wrap: "wrap",
				children: t.map(function(e) {
					var t = function() {
						return n(e.id);
					};
					return u.jsx(r("WAWebChipButton.react"), {
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onClick: t,
						label: e.localized_display_name,
						PostfixIcon: a ? void 0 : o("WAWebRoundXInvIcon.react").RoundXInvIcon,
						PrefixIcon: a ? o("WAWebRoundXInvIcon.react").RoundXInvIcon : void 0,
						xstyle: c.chip
					}, e.id.toString());
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
