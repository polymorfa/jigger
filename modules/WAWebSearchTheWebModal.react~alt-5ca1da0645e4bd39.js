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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(33), n = e.entryPoint, a = e.message, i = e.stwFormat, l = u(!1), c = l[0], d = l[1], p;
		t[0] !== a ? (p = o("WAWebSearchTheWebGetSupportedSearchOptions").getSupportedSearchOptions(a), t[0] = a, t[1] = p) : p = t[1];
		var _ = p;
		if (_.size < 1) return null;
		var f;
		t[2] !== n || t[3] !== a || t[4] !== i ? (f = function() {
			o("WAWebSearchTheWebEventLogger").logSTWEvent({
				stwEntryPoint: n,
				stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.STW_DISMISSED,
				stwFormat: i,
				messageType: o("WAWebWamMsgUtils").getWamMessageType(a)
			}), o("WAWebModalManager").ModalManager.close();
		}, t[2] = n, t[3] = a, t[4] = i, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] !== n || t[7] !== a || t[8] !== _ || t[9] !== i ? (h = async function() {
			if (!r("WAWebNetworkStatus").online) o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(o("WAWebSearchTheWebCommonUtils").getNoInternetToastMsg());
			else {
				var e;
				d(!0), await ((e = _.values().next().value) == null ? void 0 : e.handleSearchAction({
					stwEntryPoint: n,
					stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.SEARCH_CLICKED,
					stwFormat: i,
					messageType: o("WAWebWamMsgUtils").getWamMessageType(a)
				})), d(!1), new (o("WAWebHfmTextSearchCompleteWamEvent")).HfmTextSearchCompleteWamEvent().commit(), o("WAWebModalManager").ModalManager.close();
			}
		}, t[6] = n, t[7] = a, t[8] = _, t[9] = i, t[10] = h) : h = t[10];
		var y = h, C, b, v, S, R, L;
		if (t[11] !== n || t[12] !== g || t[13] !== y || t[14] !== c || t[15] !== a || t[16] !== _ || t[17] !== i) {
			var E = o("WAWebFrontendMsgGetters").getChat(a), k = o("WAWebSearchTheWebCommonUtils").getModalHeaderText({
				entryPoint: n,
				isNewsletter: o("WAWebChatGetters").getIsNewsletter(E),
				messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
				stwFormat: i
			}), I = o("WAWebChatGetters").getIsNewsletter(E) ? null : o("WAWebSearchTheWebCommonUtils").getModalHeaderSubtext();
			b = s.jsx(m, {
				onCancel: g,
				onOk: y,
				isSearching: c,
				headerText: k,
				headerSubText: I
			}), C = r("WAWebMultiSearchModal.react"), v = _, S = n, R = i, L = o("WAWebChatGetters").getIsNewsletter(E), t[11] = n, t[12] = g, t[13] = y, t[14] = c, t[15] = a, t[16] = _, t[17] = i, t[18] = C, t[19] = b, t[20] = v, t[21] = S, t[22] = R, t[23] = L;
		} else C = t[18], b = t[19], v = t[20], S = t[21], R = t[22], L = t[23];
		var T;
		t[24] !== a ? (T = o("WAWebWamMsgUtils").getWamMessageType(a), t[24] = a, t[25] = T) : T = t[25];
		var D;
		t[26] !== C || t[27] !== v || t[28] !== S || t[29] !== R || t[30] !== L || t[31] !== T ? (D = s.jsx(C, {
			searchOptions: v,
			entryPoint: S,
			stwFormat: R,
			isNewsletter: L,
			messageType: T
		}), t[26] = C, t[27] = v, t[28] = S, t[29] = R, t[30] = L, t[31] = T, t[32] = D) : D = t[32];
		var x = D;
		return _.size === 1 ? b : x;
	}
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
