__d("WAWebConversationPanelWrapper.react", [
	"fbt",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeModeContext",
	"WAWebCmd",
	"WAWebConversationPanel.react",
	"WAWebConversationPanelWrapper.stylex",
	"WAWebConversationPreview.react",
	"WAWebErrorBoundary.react",
	"WAWebGetConversationPanelKey",
	"WAWebUim",
	"WAWebUimUie.react",
	"react",
	"stylex",
	"useWAWebChatThemeModeValue",
	"useWAWebListener",
	"useWAWebWallpaperState"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useImperativeHandle, _ = m.useRef, f = m.useState, g = { pane: {
		backgroundColor: "x1q80dvb",
		$$css: !0
	} };
	function h(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.chatEntryPoint, c = a.focusCtx, m = a.msgCollection, h = a.notifyChatRendered, y = a.showPreview, C = a.threadId, b = a.updateOpenedChatInfo, v = _(null), S = o("useWAWebWallpaperState").useWallpaperState({
			chat: i,
			chatPreference: a.chatPreference,
			showPreview: y
		}), R = S.backgroundWrapperStyle, L = S.chatThemeStyle, E = S.displayWallpaper, k = S.isDarkTheme, I = S.isVibrant, T = S.showDoodle, D = S.showStockWallpaper, x = S.stockWallpaperUrl, $ = f([]), P = $[0], N = $[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "show_overlay_animation", function(e) {
			N(function(t) {
				return [].concat(t, [e]);
			}), window.setTimeout(function() {
				N(function(t) {
					return t.filter(function(t) {
						return t !== e;
					});
				});
			}, 5e3);
		});
		var M = function(t) {
			return v.current ? v.current.contains(t) : !1;
		};
		p(n, function() {
			return { containsDOMNode: M };
		});
		var w = y != null ? d.jsx(r("WAWebConversationPreview.react"), {
			previewType: y,
			title: y === "theme" ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			wallpaper: E,
			showDoodle: T
		}) : null, A = i && m ? d.jsx(r("WAWebConversationPanel.react"), {
			chat: i,
			chatEntryPoint: l,
			groupMetadata: i.groupMetadata,
			focusCtx: c,
			msgCollection: m,
			threadId: C,
			notifyChatRendered: h,
			updateOpenedChatInfo: b,
			wallpaper: E,
			showDoodle: T
		}, r("WAWebGetConversationPanelKey")(i, C)) : null, F;
		o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? F = w != null ? w : A : F = A != null ? A : w;
		var O = r("useWAWebChatThemeModeValue")(L, I);
		return d.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "conversation-panel",
			type: "fatal",
			children: d.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "ConversationPanel",
				uimState: o("WAWebUim").UIMState.INACTIVE,
				children: d.jsx(r("WAWebChatThemeModeContext").Provider, {
					value: O,
					children: d.jsxs("div", {
						id: "main",
						className: (u || (u = r("stylex")))(o("WAWebConversationPanelWrapper.stylex").styles.pane, g.pane, a.showPreview != null && o("WAWebConversationPanelWrapper.stylex").styles.previewPane, L),
						style: R,
						ref: v,
						"data-testid": "conversation-panel-wrapper",
						children: [
							D && d.jsxs(d.Fragment, { children: [d.jsx("div", {
								className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x18d0r48 x1xsqp64 x1ja2u2z",
								style: { backgroundImage: "url(" + (x != null ? x : "") + ")" },
								"data-testid": "stock-wallpaper-image"
							}), k && d.jsx("div", {
								className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 x1ja2u2z",
								"data-testid": "stock-wallpaper-dim"
							})] }),
							F,
							P
						]
					})
				})
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
