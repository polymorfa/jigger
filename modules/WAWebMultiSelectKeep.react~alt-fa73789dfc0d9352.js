__d("WAWebMultiSelectKeep.react", [
	"fbt",
	"WALogger",
	"WAWebKeepInChatActions",
	"WAWebKeepInChatMsgUtils",
	"WAWebMsgGetters",
	"WAWebMultiSelectBar.react",
	"WAWebMultiSelectUtils",
	"WAWebTabOrder",
	"WAWebWamEnumKicEntryPointType",
	"WAWebWamEnumMessageContextMenuOptionType",
	"WDSIconIcBookmark.react",
	"WDSIconWdsIcBookmarkSlash.react",
	"WDSMenuBarItem.react",
	"getErrorSafe",
	"react",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react"));
	function m(e) {
		if (e == null) return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.ALL_MEDIA;
		switch (e) {
			case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.CONVERSATION_PANEL: return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT;
			case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.MEDIA: return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA;
			case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.DOCS: return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.DOCS;
			case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.LINKS:
			case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.PRODUCTS: return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.LINKS;
		}
	}
	var p = { btnMargin: {
		marginInlineEnd: "xqf2s3x",
		$$css: !0
	} };
	function _(t) {
		"use no forget";
		var n = t.entryPoint, a = t.onCancel, i = t.onKeep, l = t.onUnkeep, c = t.selectedMessages, _ = t.theme, f = c.getSelected(), g = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), h = f.length, y = f.every(function(e) {
			return o("WAWebMsgGetters").getIsKept(e);
		}), C = f.every(function(e) {
			return o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(e);
		}), b = async function() {
			var t = c.getSelected();
			try {
				await o("WAWebKeepInChatActions").runBulkUndoKeepInChatUX(t, m(n), _ === "mediaHub"), a(), l == null || l();
			} catch (t) {
				var i;
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Bulk unkeep operation not complete. Reason: ", ""])), (i = r("getErrorSafe")(t).message) != null ? i : "unknown");
			}
			o("WAWebMultiSelectUtils").logMessageActionClickMetric(t, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
		}, v = async function() {
			var e = c.getSelected();
			try {
				await o("WAWebKeepInChatActions").runBulkKeepInChatUX(e, m(n), _ === "mediaHub"), a(), i == null || i();
			} catch (e) {
				var t;
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Bulk keep operation not complete. Reason: ", ""])), (t = r("getErrorSafe")(e).message) != null ? t : "unknown");
			}
			o("WAWebMultiSelectUtils").logMessageActionClickMetric(e, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN);
		}, S, R, L;
		return h && y ? (S = r("WDSIconWdsIcBookmarkSlash.react"), R = s._(
			/*BTDS*/
			""
		), L = b) : (S = r("WDSIconIcBookmark.react"), R = s._(
			/*BTDS*/
			""
		), L = v), o("useWAWebListener").useListeners(f.map(function(e) {
			return {
				source: e,
				eventOrEvents: "change:kicState",
				callback: g
			};
		})), d.jsx(r("WDSMenuBarItem.react"), {
			icon: S,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
			disabled: !h || !C,
			title: R,
			testid: y ? "unkeep-refreshed" : "keep-refreshed",
			onClick: L,
			marginInlineXstyle: p.btnMargin
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
