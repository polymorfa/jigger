__d("WAWebContactInfoCommonGroupsSection.react", [
	"fbt",
	"WALogger",
	"WAWebChat.react",
	"WAWebChatCommunityUtils",
	"WAWebChatEntryPoint",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoExpandButton.react",
	"WAWebCmd",
	"WAWebCommunityGatingUtils",
	"WAWebComposeBoxActions",
	"WAWebFindCommonGroupsContactAction",
	"WAWebFlatList.react",
	"WAWebFrontendContactGetters",
	"WDSPaddings.stylex",
	"err",
	"getErrorSafe",
	"react",
	"useWAWebContactValues",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, f = { titlePadding: {
		paddingInlineStart: "x1phvje8",
		paddingInlineEnd: "xcldk2z",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function g(t) {
		var n = t.contact, a = t.flatListController, i = t.onClose, l = o("useWAWebContactValues").useContactValues(n.id, [o("WAWebFrontendContactGetters").getCommonGroups]), u = l[0], d = p(!0), g = d[0], h = d[1];
		m(function() {
			o("WAWebFindCommonGroupsContactAction").findCommonGroups(n).catch(function(t) {
				throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["get from participants table failed"]))).verbose().catching(r("getErrorSafe")(t)).sendLogs("get from participants table failed when finding common groups"), r("err")("get from participants table failed");
			});
		}, []);
		var y = r("useWAWebEventTargetValue")(u, ["add", "remove"], function() {
			if (!u) return [];
			var e = u;
			return e.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS && g && (e = e.slice(0, o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS)), e.map(function(e) {
				return {
					itemKey: e.id.toString(),
					chat: e,
					height: o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(e.groupMetadata) ? o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT : 68
				};
			});
		}, [g]), C = function() {
			h(!1);
		}, b = function(t, n) {
			o("WAWebCmd").Cmd.openChatFromUnread({
				chat: n,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo
			}).then(function(e) {
				e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
			}), i();
		};
		if (!u || u.length === 0) return null;
		var v;
		if (u.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS && g) {
			var S = u.length - o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS;
			v = c.jsx(r("WAWebChatInfoExpandButton.react"), {
				numMore: S,
				onClick: C
			});
		}
		var R = s._(
			/*BTDS*/
			"",
			[s._plural(u.length, "number")]
		);
		return c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
			titleTestId: "section-common-groups",
			title: R,
			theme: "refresh-new",
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor0, _.marginTop10],
			titleXStyle: f.titlePadding,
			children: [c.jsx("div", {
				className: "x1380le5",
				children: c.jsx(o("WAWebFlatList.react").FlatList, {
					flatListController: a,
					direction: "vertical",
					forceConsistentRenderCount: !1,
					data: y,
					renderItem: function(t) {
						var e = t.chat;
						return c.jsx(o("WAWebChat.react").Chat, {
							chat: e,
							theme: "chat-info",
							mode: o("WAWebChat.react").Mode.INFO,
							onClick: b,
							showCommunityInfo: !0
						}, e.id.toString());
					}
				})
			}), v]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
