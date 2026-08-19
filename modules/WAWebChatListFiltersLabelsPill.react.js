__d("WAWebChatListFiltersLabelsPill.react", [
	"fbt",
	"WAWebCTWAConstants",
	"WAWebChatCollection",
	"WAWebChatListFilterLabelsDropdownMenu.react",
	"WAWebDOIntroPopup.react",
	"WAWebFilterLogging",
	"WAWebLabelCollection",
	"WAWebLabels.react",
	"WAWebListsGatingUtils",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNux",
	"WAWebScreenWidthThresholds",
	"WAWebTabOrder",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumSurfaceType",
	"WDSChip.react",
	"react",
	"useMergeRefs",
	"useWAWebListener",
	"useWAWebNux",
	"useWAWebWindowSize"
], (function(t, n, r, o, a, i, l, s) {
	var e = [
		"ref",
		"filterSession",
		"isSelected",
		"onClick",
		"onDropdownOpen",
		"selectedLabelId",
		"unreadChatsCountMap"
	], u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = d.useState, f = function() {
		return o("WAWebLabelCollection").LabelCollection.getChatLabelsWithUnarchivedAssociations().length === 0;
	};
	function g(t) {
		var n, a = t.ref, i = t.filterSession, l = t.isSelected, u = t.onClick, d = t.onDropdownOpen, g = t.selectedLabelId, h = t.unreadChatsCountMap, y = babelHelpers.objectWithoutPropertiesLoose(t, e), C = _(!1), b = C[0], v = C[1], S = p(!1), R = function(t) {
			S.current = t, v(t);
		}, L = _(f), E = L[0], k = L[1], I = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), T = I[0], D = I[1], x = p(null), $ = r("useMergeRefs")(x, a), P = m(function() {
			return g == null ? null : o("WAWebLabelCollection").LabelCollection.get(g);
		}, [g]), N = r("useWAWebWindowSize")(), M = N.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD, w = function(t) {
			var e;
			u(t);
			var n = (e = o("WAWebLabelCollection").LabelCollection.get(t)) == null ? void 0 : e.predefinedId;
			(n === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || n === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) && T && o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus() && o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebDOIntroPopup.react"), {
				onContinue: function() {
					D(), o("WAWebModalManager").ModalManager.close();
				},
				surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST
			}));
		};
		if (o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "change:count remove", function() {
			k(f);
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:archive change:isLocked", function() {
			k(f);
		}), E) return null;
		var A = b ? c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "InboxFilterContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: function() {
				return R(!1);
			},
			requestRecentFocusOnUnmount: !1,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				menu: c.jsx(r("WAWebChatListFilterLabelsDropdownMenu.react"), {
					hideHeader: !0,
					updateSearchFilter: w,
					unreadChatsCountMap: h
				}),
				anchor: x.current
			} })
		}) : null, F = function() {
			var e = !S.current;
			e && (d == null || d(), i != null && o("WAWebFilterLogging").logLabelDropdownShownEvent(i.newSessionId())), R(e);
		}, O = o("WAWebListsGatingUtils").isListsEnabled(), B = P == null ? null : c.jsx(o("WAWebLabels.react").Labels, {
			theme: "label-pill",
			labels: [P.id],
			showName: !0,
			isListsFeatureEnabled: O
		}), W = "";
		return P == null && !M && (W = O ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		)), c.jsxs("div", {
			"data-testid": "filter-button",
			children: [c.jsx(r("WDSChip.react"), {
				tabOrder: Number(y.tabIndex) >= 0 ? o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER : void 0,
				ref: $,
				id: y.id,
				label: W,
				isSelected: l,
				onPress: F,
				onFocus: (n = y.onFocus) != null ? n : r("WAWebNoop"),
				role: y.role,
				"aria-selected": y["aria-selected"],
				"aria-controls": y["aria-controls"],
				showEndDropdownIcon: !0,
				smbLabelsContent: B,
				testid: "chat_list_label_filter_pill"
			}), A]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
