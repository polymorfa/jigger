__d("WAWebSearchTheWebModal.react", [
	"WAWebChatGetters",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebHfmTextSearchCompleteWamEvent",
	"WAWebModalManager",
	"WAWebMultiSearchModal.react",
	"WAWebNetworkStatus",
	"WAWebSTWGatingUtils",
	"WAWebSearchTheWebCommonUtils",
	"WAWebSearchTheWebEventLogger",
	"WAWebSearchTheWebGetSupportedSearchOptions",
	"WAWebText.react",
	"WAWebWamEnumStwInteraction",
	"WAWebWamMsgUtils",
	"WAWebWdsPictoWebsearchIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useState, c = {
		marginTop16: {
			marginTop: "x98l61r",
			$$css: !0
		},
		marginTop12: {
			marginTop: "x1de0gy",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.entryPoint, n = e.message, a = e.stwFormat, i = u(!1), l = i[0], c = i[1], d = o("WAWebSearchTheWebGetSupportedSearchOptions").getSupportedSearchOptions(n);
		if (d.size < 1) return null;
		var p = function() {
			o("WAWebSearchTheWebEventLogger").logSTWEvent({
				stwEntryPoint: t,
				stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.STW_DISMISSED,
				stwFormat: a,
				messageType: o("WAWebWamMsgUtils").getWamMessageType(n)
			}), o("WAWebModalManager").ModalManager.close();
		}, _ = async function() {
			if (!r("WAWebNetworkStatus").online) o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(o("WAWebSearchTheWebCommonUtils").getNoInternetToastMsg());
			else {
				var e;
				c(!0), await ((e = d.values().next().value) == null ? void 0 : e.handleSearchAction({
					stwEntryPoint: t,
					stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.SEARCH_CLICKED,
					stwFormat: a,
					messageType: o("WAWebWamMsgUtils").getWamMessageType(n)
				})), c(!1), new (o("WAWebHfmTextSearchCompleteWamEvent")).HfmTextSearchCompleteWamEvent().commit(), o("WAWebModalManager").ModalManager.close();
			}
		}, f = o("WAWebFrontendMsgGetters").getChat(n), g = o("WAWebSearchTheWebCommonUtils").getModalHeaderText({
			entryPoint: t,
			isNewsletter: o("WAWebChatGetters").getIsNewsletter(f),
			messageType: o("WAWebWamMsgUtils").getWamMessageType(n),
			stwFormat: a
		}), h = o("WAWebChatGetters").getIsNewsletter(f) ? null : o("WAWebSearchTheWebCommonUtils").getModalHeaderSubtext(), y = s.jsx(m, {
			onCancel: p,
			onOk: _,
			isSearching: l,
			headerText: g,
			headerSubText: h
		}), C = s.jsx(r("WAWebMultiSearchModal.react"), {
			searchOptions: d,
			entryPoint: t,
			stwFormat: a,
			isNewsletter: o("WAWebChatGetters").getIsNewsletter(f),
			messageType: o("WAWebWamMsgUtils").getWamMessageType(n)
		});
		return d.size === 1 ? y : C;
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.headerSubText, n = e.headerText, a = e.isSearching, i = e.onCancel, l = e.onOk;
		return o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled() ? s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "search-the-web"
			},
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onCancel: i,
			okText: o("WAWebSearchTheWebCommonUtils").getModalSearchActionText(),
			okSpinner: a,
			okDisabled: a,
			onOK: l,
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				justify: "center",
				align: "center",
				children: [
					s.jsx(o("WAWebWdsPictoWebsearchIcon.react").WdsPictoWebsearchIcon, {
						height: 80,
						width: 120
					}),
					s.jsx(o("WAWebText.react").WAWebTextLarge, {
						xstyle: c.marginTop16,
						children: o("WAWebSearchTheWebCommonUtils").getModalTitleText()
					}),
					s.jsx(o("WAWebText.react").WAWebTextTitle, {
						textAlign: "center",
						xstyle: c.marginTop16,
						children: n
					}),
					t != null && s.jsx(o("WAWebText.react").WAWebTextMuted, {
						xstyle: c.marginTop12,
						children: t
					})
				]
			})
		}) : s.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "search-the-web"
			},
			title: o("WAWebSearchTheWebCommonUtils").getModalTitleText(),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onCancel: i,
			okText: o("WAWebSearchTheWebCommonUtils").getModalSearchActionText(),
			okSpinner: a,
			okDisabled: a,
			onOK: l,
			children: [n, t != null && s.jsx(o("WAWebText.react").WAWebTextMuted, { children: t })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);
