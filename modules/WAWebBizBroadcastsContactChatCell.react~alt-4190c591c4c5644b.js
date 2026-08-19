__d("WAWebBizBroadcastsContactChatCell.react", [
	"WAWebBroadcastConsts",
	"WAWebContactImage.react",
	"WAWebContactImportTemplateParsingUtils",
	"WAWebDefaultContactRefreshedIcon.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.memo, c = {
		circleIconRefreshed: {
			backgroundColor: "x1od0jb8",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		profilePictureOutlineRefreshed: {
			outline: "x4u6w88",
			outlineOffset: "x1g40iwv",
			$$css: !0
		},
		svgSize: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = e.contact, a = e.index, i = e.rowData, l = (t = o("WAWebDetailImage.react").getSize(o("WAWebDetailImage.react").DetailImageSize.ExtraSmall)) != null ? t : o("WAWebBroadcastConsts").DEFAULT_PROFILE_PICTURE_SIZE, u = (function() {
			return n != null ? o("WAWebFrontendContactGetters").getDisplayName(n) : i != null ? o("WAWebContactImportTemplateParsingUtils").extractName(i) : null;
		})();
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			marginTop: 8,
			marginBottom: 8,
			align: "center",
			gap: 12,
			children: [s.jsx("div", {
				className: "x2lah0s",
				children: n != null ? s.jsx(r("WAWebContactImage.react"), {
					contact: n,
					size: l
				}) : s.jsx("div", {
					style: {
						height: l,
						width: l
					},
					children: s.jsx(o("WAWebDefaultContactRefreshedIcon.react").DefaultContactRefreshedIcon, {
						iconXstyle: [
							c.svgSize,
							c.circleIconRefreshed,
							c.profilePictureOutlineRefreshed
						],
						"aria-hidden": !0
					})
				})
			}), s.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				maxLines: 1,
				testid: "biz-broadcasts-contact-chat-cell-" + a,
				children: u
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = u(d);
	l.default = m;
}), 98);
