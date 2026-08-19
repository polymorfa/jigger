__d("WAWebComposeBoxExpressionPanels.react", [
	"WAWebComposeBoxPanelTypes",
	"WAWebComposeBoxPanelsMenu.react",
	"WAWebEmojiPanel.react",
	"WAWebErrorBoundary.react",
	"WAWebGifPanel.react",
	"WAWebPanelsDisplayLocation",
	"WAWebStickerPanel.react",
	"WAWebUimUie.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useImperativeHandle, m = c.useRef, p = c.useState;
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.displayCache, l = a.onDisplayCache, s = a.onExpressionPanelChange, c = a.onFocusRelease, _ = a.selectedExpressionPanel, f = a.theme, g = m(i == null ? void 0 : i.emojiPanel), h = m(i == null ? void 0 : i.gifPanel), y = m(i == null ? void 0 : i.stickerPanel), C = m(f === o("WAWebComposeBoxPanelsMenu.react").PanelsTheme.StatusReplyComposeBox), b = m(null), v = m(null), S = m(null), R = p(""), L = R[0], E = R[1], k = function(t) {
			switch (_) {
				case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
					S.current && S.current.restoreFocus();
					break;
				case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
					v.current && v.current.restoreFocus(t);
					break;
				case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
					b.current && b.current.restoreFocus(t);
					break;
			}
		}, I = function() {
			l({
				emojiPanel: g.current,
				gifPanel: h.current,
				stickerPanel: y.current
			});
		}, T = function() {
			var e = C.current ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF;
			s(e);
		}, D = function() {
			c();
		}, x = function(t) {
			h.current = t, I();
		}, $ = function(t, n) {
			E(t);
		}, P = function() {
			s(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER);
		}, N = function() {
			s(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI);
		}, M = function() {
			k(!1);
		}, w = function(t) {
			y.current = t, I();
		}, A = function() {
			c();
		}, F = function() {
			var e = C.current ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF;
			s(e);
		};
		d(n, function() {
			return { restoreFocus: k };
		});
		var O = null, B = C.current ? o("WAWebPanelsDisplayLocation").DisplayLocation.StatusComposeBox : o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox;
		switch (a.selectedExpressionPanel) {
			case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
				O = u.jsx(r("WAWebStickerPanel.react"), {
					ref: S,
					displayCache: y.current,
					displayLocation: B,
					onChange: $,
					defaultSearchText: L,
					onDisplayCache: w,
					onFocusPrev: F,
					onFocusNext: A,
					onSticker: a.onSticker
				});
				break;
			case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
				O = u.jsx(r("WAWebEmojiPanel.react"), {
					ref: b,
					displayCache: g.current,
					width: a.width,
					displayLocation: B,
					onChange: $,
					defaultSearchText: L,
					onEmoji: a.onEmoji,
					onFocusPrev: D,
					onFocusNext: T
				});
				break;
			case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
				O = u.jsx(r("WAWebGifPanel.react"), {
					ref: v,
					displayCache: h.current,
					onChange: $,
					defaultSearchText: L,
					onDisplayCache: x,
					onFocusNext: P,
					onFocusPrev: N,
					onGif: a.onGif
				});
				break;
		}
		return O && u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "compose-box-panels",
			children: u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "ComposeBoxExpressionPanels",
				escapable: !0,
				requestDismiss: a.requestDismiss,
				requestFocus: M,
				children: O
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
