__d("WAWebGdprRequestAccountInfoSettingsDrawerAvailable", [
	"fbt",
	"WALongInt",
	"WAWeb-moment",
	"WAWebDeleteIcon.react",
	"WAWebDrawerButton.react",
	"WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup",
	"WAWebIcDownloadIcon.react",
	"WAWebL10nFilesize",
	"WAWebModalManager",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"react",
	"useWAWebGdprDelete",
	"useWAWebGdprDownload"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginTop18: {
			marginTop: "xhrpt6u",
			$$css: !0
		},
		marginTop30: {
			marginTop: "x11fxgd9",
			$$css: !0
		}
	}, d = { availability: {
		marginInlineStart: "xymharo",
		marginInlineEnd: "x2pibh5",
		$$css: !0
	} };
	function m(e) {
		var t = e.gdprStatus, n = t.creation, a = t.documentMessage, i = t.expiration, l = e.onDeleteSuccess, m = e.report, p = o("WALongInt").maybeNumberOrThrowIfTooLarge(a.fileLength), _ = o("useWAWebGdprDownload").useGdprDownload(), f = _[0], g = _[1], h = o("useWAWebGdprDelete").useGdprDelete(m), y = h[0], C = h[1], b = s._(
			/*BTDS*/
			"",
			[s._param("availability_date", r("WAWeb-moment").unix(i).format("MMMM D, YYYY"))]
		);
		return u.jsxs(u.Fragment, { children: [
			u.jsx("div", {
				className: "x178xt8z x13fuv20 xx42vgk xso031l x1q0q8m5 x120ee7l",
				children: u.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
					color: "dark",
					disabled: f,
					icon: u.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {}),
					onClick: function() {
						return g(a, m);
					},
					children: [u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, { children: s._(
						/*BTDS*/
						""
					) }), u.jsx(o("WAWebText.react").WAWebTextMuted, { children: p != null ? s._(
						/*BTDS*/
						"",
						[s._param("availability_date", r("WAWeb-moment").unix(n).format("MMMM D, YYYY")), s._param("file_size", o("WAWebL10nFilesize").getL10nFilesize(p))]
					) : s._(
						/*BTDS*/
						"",
						[s._param("availability_date", r("WAWeb-moment").unix(n).format("MMMM D, YYYY"))]
					) })]
				})
			}),
			u.jsx("div", {
				className: "xso031l x1q0q8m5 x120ee7l",
				children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
					color: "dark",
					disabled: y,
					icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {}),
					onClick: function() {
						o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup"), {
							okDisabled: y,
							okSpinner: y,
							onCancel: o("WAWebModalManager").closeModalManager,
							onOK: function() {
								return C().then(function(e) {
									e.success && (o("WAWebModalManager").ModalManager.close(), l());
								});
							}
						}));
					},
					children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, { children: s._(
						/*BTDS*/
						""
					) })
				})
			}),
			o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() ? u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				color: "secondary",
				size: "16",
				xstyle: [d.availability, c.marginTop18],
				children: b
			}) : u.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: [d.availability, c.marginTop30],
				children: b
			})
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
