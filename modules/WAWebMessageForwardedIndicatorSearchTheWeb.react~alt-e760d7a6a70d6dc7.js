__d("WAWebMessageForwardedIndicatorSearchTheWeb.react", [
	"WAWebCopyPasteSelectable.react",
	"WAWebKeyboardIsKeyActivation",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebSTWGatingUtils",
	"WAWebSearchTheWebCommonUtils",
	"WAWebSearchTheWebEventLogger",
	"WAWebSearchTheWebGetSupportedSearchOptions",
	"WAWebText.react",
	"WAWebWamEnumStwEntryPoint",
	"WAWebWamEnumStwInteraction",
	"WAWebWamMsgUtils",
	"WAWebWebSearchPopup.react",
	"react",
	"useWAWebMsgValues",
	"useWAWebSearchTheWebLogHFMSurfaced"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		learnMore: {
			cursor: "x1ypdohk",
			color: "x1v5yvga",
			$$css: !0
		},
		bold: {
			fontWeight: "x117nqv4",
			$$css: !0
		},
		stw: {
			display: "x1lliihq",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.msg, n = o("useWAWebMsgValues").useMsgValues(t.id, [o("WAWebMsgGetters").getIsFrequentlyForwarded]), a = n[0], i = o("WAWebSearchTheWebGetSupportedSearchOptions").getSupportedSearchOptions(t), l = o("WAWebSearchTheWebCommonUtils").getSTWFormat(i), c = o("useWAWebSearchTheWebLogHFMSurfaced").useWAWebSearchTheWebLogHFMSurfaced({
			stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.HIGHLY_FORWARDED_MESSAGE,
			stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.ENTRY_POINT_SURFACED,
			stwFormat: l,
			messageType: o("WAWebWamMsgUtils").getWamMessageType(t)
		});
		if (!a || i.size === 0) return null;
		var d = function() {
			o("WAWebSearchTheWebEventLogger").logSTWEvent({
				stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.HIGHLY_FORWARDED_MESSAGE,
				stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.ENTRY_POINT_CLICKED,
				stwFormat: l,
				messageType: o("WAWebWamMsgUtils").getWamMessageType(t)
			}), o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebWebSearchPopup.react"), {
				message: t,
				stwFormat: l,
				entryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.HIGHLY_FORWARDED_MESSAGE
			}));
		}, m = function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && (t.preventDefault(), d());
		};
		return s.jsxs(o("WAWebText.react").WAWebTextSmall, {
			weight: "normal",
			color: "secondary",
			xstyle: u.stw,
			ref: c,
			children: [
				o("WAWebSearchTheWebCommonUtils").getHFMHeaderText(),
				" ",
				s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
					"data-testid": "search-the-web-link",
					xstyle: [u.learnMore, o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled() && u.bold],
					selectable: !0,
					role: "button",
					tabIndex: 0,
					onClick: d,
					onKeyDown: m,
					children: o("WAWebSearchTheWebCommonUtils").getHFMHeaderCTAText()
				})
			]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
