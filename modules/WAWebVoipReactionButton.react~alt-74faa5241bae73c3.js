__d("WAWebVoipReactionButton.react", [
	"fbt",
	"WAWebDefaultReactions",
	"WAWebDropdown.react",
	"WAWebDropdownV2.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiPanel.react",
	"WAWebPanelsDisplayLocation",
	"WAWebPopoverContext.react",
	"WAWebReactionsSelectionContext",
	"WAWebSendReactionsTray.react",
	"WAWebVoipReactionUtils",
	"WAWebVoipUiPopoutWindowContext",
	"WDSButton.react",
	"WDSIconIcMood.react",
	"WDSThemes",
	"WDSTooltip.react",
	"react",
	"stylex",
	"useWAWebVoipWindowPopoutTooltipProps"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = d.useRef, f = d.useState, g = 400, h = {
		emojiPickerContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		reactionButtonActive: {
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		reactionButton: {
			width: "x1useyqa",
			height: "xsdox4t",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			$$css: !0
		},
		withEmojiLabel: {
			minWidth: "x900493",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		reactionEmoji: {
			fontSize: "xngnso2",
			$$css: !0
		},
		transparentDropdownContainer: {
			backgroundColor: "xjbqb8w",
			boxShadow: "x1gnnqk1",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			borderEndStartRadius: "x11o6v7j",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			$$css: !0
		},
		reactionTrayWrapper: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1qjc9v5",
			$$css: !0
		}
	};
	function y(t) {
		var n, a, i = t.isDisabled, l = i === void 0 ? !1 : i, u = t.onReactionSelect, d = t.selfReaction, y = m(r("WAWebVoipUiPopoutWindowContext")), b = y.isContextInPopoutWindow && y.windowEl != null ? y.windowEl : void 0, v = y.isContextInPopoutWindow && !y.isDocPip ? o("WAWebDropdown.react").EMOJI_PICKER_WIDTH : o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH, S = _(null), R = _(null), L = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), E = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), k = _(null), I = f(!1), T = I[0], D = I[1], x = f(!1), $ = x[0], P = x[1], N = _(!1), M = T || $ || d != null && d !== "", w = r("useWAWebVoipWindowPopoutTooltipProps")(), A = w.tooltipAnchorRef, F = w.tooltipOwnerDocument;
		p(function() {
			return function() {
				k.current != null && window.clearTimeout(k.current);
			};
		}, []);
		var O = function(t) {
			u == null || u(t);
		}, B = function(t) {
			if (t === o("WAWebSendReactionsTray.react").MORE_REACTIONS) {
				var e;
				N.current = !0, (e = L.current) == null || e.hidePopover();
			} else {
				var n;
				(n = L.current) == null || n.hidePopover(), O(t);
			}
		}, W = function() {
			if (D(!1), N.current) N.current = !1, k.current = window.setTimeout(function() {
				var e;
				(e = E.current) == null || e.showPopover();
			}, g);
			else {
				var e;
				(e = S.current) == null || e.focus();
			}
		}, q = function(t) {
			var e;
			(e = E.current) == null || e.hidePopover(), O(t);
		}, U = function() {
			var e;
			(e = L.current) == null || e.showPopover();
		}, V = o("WAWebVoipReactionUtils").getSelectedReactionIndex(d), H = o("WAWebVoipReactionUtils").getIsMoreReactionSelected(d), G = s._(
			/*BTDS*/
			""
		);
		return c.jsxs("div", { children: [
			c.jsx(r("WDSTooltip.react"), {
				label: G,
				ownerAnchorRef: A,
				ownerDocument: F,
				children: c.jsx(C, {
					ariaLabel: G,
					buttonRef: S,
					isActive: M,
					isDisabled: l,
					isExpanded: T || $,
					onPress: U,
					selfReaction: d
				})
			}),
			c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
				popoverPortal: (n = y.popoverPortalEl) != null ? n : void 0,
				position: o("WAWebDropdownV2.react").PopoverPosition.Top,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
				controllerRef: L,
				target: S,
				onOpen: function() {
					D(!0), window.requestAnimationFrame(function() {
						var e;
						(e = R.current) == null || (e = e.querySelector("button")) == null || e.focus();
					});
				},
				onClose: W,
				xstyle: h.transparentDropdownContainer,
				children: c.jsx("div", babelHelpers.extends({ ref: R }, (e || (e = r("stylex"))).props(o("WDSThemes").WDSDarkTheme, h.reactionTrayWrapper), { children: c.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
					isInlineMode: !0,
					isMoreSelected: H,
					reactions: o("WAWebDefaultReactions").DEFAULT_REACTIONS,
					selectedIndex: V,
					showMoreOption: !0,
					isParentMsgSentByMe: !1,
					selectedCallback: B
				}) }))
			}),
			c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
				popoverPortal: (a = y.popoverPortalEl) != null ? a : void 0,
				position: o("WAWebDropdownV2.react").PopoverPosition.Top,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
				controllerRef: E,
				target: S,
				initHandling: "controllable",
				onOpen: function() {
					P(!0);
				},
				onClose: function() {
					var e;
					P(!1), (e = S.current) == null || e.focus();
				},
				minWidth: v,
				xstyle: h.transparentDropdownContainer,
				children: c.jsx("div", {
					className: "dark",
					children: c.jsx("div", babelHelpers.extends({}, e.props(o("WDSThemes").WDSDarkTheme, h.emojiPickerContainer), { children: c.jsx(r("WAWebReactionsSelectionContext").Provider, {
						value: d,
						children: c.jsx(r("WAWebEmojiPanel.react"), {
							onEmoji: q,
							displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions,
							width: v,
							targetWindow: b
						})
					}) }))
				})
			})
		] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.ariaLabel, n = e.buttonRef, a = e.isActive, i = e.isDisabled, l = e.isExpanded, u = e.onPress, d = e.selfReaction, m = d != null && d !== "" ? o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(d) : null, p = m != null ? s._(
			/*BTDS*/
			"",
			[s._param("emoji", c.jsx(r("WAWebEmoji.react"), {
				emoji: m,
				xstyle: h.reactionEmoji
			}))]
		) : null;
		return p != null ? c.jsx(r("WDSButton.react"), {
			ref: n,
			type: "media",
			testid: "voip-reaction-button",
			variant: "borderless",
			disabled: i,
			onPress: u,
			label: p,
			size: "medium",
			"aria-label": t,
			"aria-expanded": l,
			xstyle: [
				h.reactionButton,
				h.withEmojiLabel,
				a && h.reactionButtonActive
			]
		}) : c.jsx(r("WDSButton.react"), {
			ref: n,
			testid: "voip-reaction-button",
			variant: "borderless",
			disabled: i,
			onPress: u,
			Icon: r("WDSIconIcMood.react"),
			size: "medium",
			"aria-label": t,
			"aria-expanded": l,
			xstyle: [h.reactionButton, a && h.reactionButtonActive]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
