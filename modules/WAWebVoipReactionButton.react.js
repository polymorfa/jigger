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
	"react-compiler-runtime",
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
		var n, a, i = o("react-compiler-runtime").c(59), l = t.isDisabled, u = t.onReactionSelect, d = t.selfReaction, y = l === void 0 ? !1 : l, b = m(r("WAWebVoipUiPopoutWindowContext")), v = b.isContextInPopoutWindow && b.windowEl != null ? b.windowEl : void 0, S = b.isContextInPopoutWindow && !b.isDocPip ? o("WAWebDropdown.react").EMOJI_PICKER_WIDTH : o("WAWebDropdown.react").REACTIONS_PANEL_WIDTH, R = _(null), L = _(null), E = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), k = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), I = _(null), T = f(!1), D = T[0], x = T[1], $ = f(!1), P = $[0], N = $[1], M = _(!1), w = D || P || d != null && d !== "", A = r("useWAWebVoipWindowPopoutTooltipProps")(), F = A.tooltipAnchorRef, O = A.tooltipOwnerDocument, B, W;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			return (function() {
				I.current != null && window.clearTimeout(I.current);
			});
		}, W = [], i[0] = B, i[1] = W) : (B = i[0], W = i[1]), p(B, W);
		var q;
		i[2] !== u ? (q = function(t) {
			u == null || u(t);
		}, i[2] = u, i[3] = q) : q = i[3];
		var U = q, V;
		i[4] !== U || i[5] !== E ? (V = function(t) {
			if (t === o("WAWebSendReactionsTray.react").MORE_REACTIONS) {
				var e;
				M.current = !0, (e = E.current) == null || e.hidePopover();
			} else {
				var n;
				(n = E.current) == null || n.hidePopover(), U(t);
			}
		}, i[4] = U, i[5] = E, i[6] = V) : V = i[6];
		var H = V, G;
		i[7] !== k ? (G = function() {
			if (x(!1), M.current) M.current = !1, I.current = window.setTimeout(function() {
				var e;
				(e = k.current) == null || e.showPopover();
			}, g);
			else {
				var e;
				(e = R.current) == null || e.focus();
			}
		}, i[7] = k, i[8] = G) : G = i[8];
		var z = G, j;
		i[9] !== k || i[10] !== U ? (j = function(t) {
			var e;
			(e = k.current) == null || e.hidePopover(), U(t);
		}, i[9] = k, i[10] = U, i[11] = j) : j = i[11];
		var K = j, Q;
		i[12] !== E ? (Q = function() {
			var e;
			(e = E.current) == null || e.showPopover();
		}, i[12] = E, i[13] = Q) : Q = i[13];
		var X = Q, Y;
		i[14] !== d ? (Y = o("WAWebVoipReactionUtils").getSelectedReactionIndex(d), i[14] = d, i[15] = Y) : Y = i[15];
		var J = Y, Z;
		i[16] !== d ? (Z = o("WAWebVoipReactionUtils").getIsMoreReactionSelected(d), i[16] = d, i[17] = Z) : Z = i[17];
		var ee = Z, te;
		i[18] === Symbol.for("react.memo_cache_sentinel") ? (te = s._(
			/*BTDS*/
			""
		), i[18] = te) : te = i[18];
		var ne = te, re = D || P, oe;
		i[19] !== X || i[20] !== w || i[21] !== y || i[22] !== d || i[23] !== re ? (oe = c.jsx(C, {
			ariaLabel: ne,
			buttonRef: R,
			isActive: w,
			isDisabled: y,
			isExpanded: re,
			onPress: X,
			selfReaction: d
		}), i[19] = X, i[20] = w, i[21] = y, i[22] = d, i[23] = re, i[24] = oe) : oe = i[24];
		var ae;
		i[25] !== oe || i[26] !== F || i[27] !== O ? (ae = c.jsx(r("WDSTooltip.react"), {
			label: ne,
			ownerAnchorRef: F,
			ownerDocument: O,
			children: oe
		}), i[25] = oe, i[26] = F, i[27] = O, i[28] = ae) : ae = i[28];
		var ie = (n = b.popoverPortalEl) != null ? n : void 0, le;
		i[29] === Symbol.for("react.memo_cache_sentinel") ? (le = function() {
			x(!0), window.requestAnimationFrame(function() {
				var e;
				(e = L.current) == null || (e = e.querySelector("button")) == null || e.focus();
			});
		}, i[29] = le) : le = i[29];
		var se;
		i[30] === Symbol.for("react.memo_cache_sentinel") ? (se = (e || (e = r("stylex"))).props(o("WDSThemes").WDSDarkTheme, h.reactionTrayWrapper), i[30] = se) : se = i[30];
		var ue;
		i[31] !== H || i[32] !== ee || i[33] !== J ? (ue = c.jsx("div", babelHelpers.extends({ ref: L }, se, { children: c.jsx(o("WAWebSendReactionsTray.react").SendReactionsTray, {
			isInlineMode: !0,
			isMoreSelected: ee,
			reactions: o("WAWebDefaultReactions").DEFAULT_REACTIONS,
			selectedIndex: J,
			showMoreOption: !0,
			isParentMsgSentByMe: !1,
			selectedCallback: H
		}) })), i[31] = H, i[32] = ee, i[33] = J, i[34] = ue) : ue = i[34];
		var ce;
		i[35] !== z || i[36] !== E || i[37] !== ie || i[38] !== ue ? (ce = c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
			popoverPortal: ie,
			position: o("WAWebDropdownV2.react").PopoverPosition.Top,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
			controllerRef: E,
			target: R,
			onOpen: le,
			onClose: z,
			xstyle: h.transparentDropdownContainer,
			children: ue
		}), i[35] = z, i[36] = E, i[37] = ie, i[38] = ue, i[39] = ce) : ce = i[39];
		var de = (a = b.popoverPortalEl) != null ? a : void 0, me, pe;
		i[40] === Symbol.for("react.memo_cache_sentinel") ? (me = function() {
			N(!0);
		}, pe = function() {
			var e;
			N(!1), (e = R.current) == null || e.focus();
		}, i[40] = me, i[41] = pe) : (me = i[40], pe = i[41]);
		var _e;
		i[42] === Symbol.for("react.memo_cache_sentinel") ? (_e = (e || (e = r("stylex"))).props(o("WDSThemes").WDSDarkTheme, h.emojiPickerContainer), i[42] = _e) : _e = i[42];
		var fe;
		i[43] !== S || i[44] !== K || i[45] !== v ? (fe = c.jsx(r("WAWebEmojiPanel.react"), {
			onEmoji: K,
			displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions,
			width: S,
			targetWindow: v
		}), i[43] = S, i[44] = K, i[45] = v, i[46] = fe) : fe = i[46];
		var ge;
		i[47] !== d || i[48] !== fe ? (ge = c.jsx("div", {
			className: "dark",
			children: c.jsx("div", babelHelpers.extends({}, _e, { children: c.jsx(r("WAWebReactionsSelectionContext").Provider, {
				value: d,
				children: fe
			}) }))
		}), i[47] = d, i[48] = fe, i[49] = ge) : ge = i[49];
		var he;
		i[50] !== S || i[51] !== k || i[52] !== de || i[53] !== ge ? (he = c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
			popoverPortal: de,
			position: o("WAWebDropdownV2.react").PopoverPosition.Top,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
			controllerRef: k,
			target: R,
			initHandling: "controllable",
			onOpen: me,
			onClose: pe,
			minWidth: S,
			xstyle: h.transparentDropdownContainer,
			children: ge
		}), i[50] = S, i[51] = k, i[52] = de, i[53] = ge, i[54] = he) : he = i[54];
		var ye;
		return i[55] !== ae || i[56] !== ce || i[57] !== he ? (ye = c.jsxs("div", { children: [
			ae,
			ce,
			he
		] }), i[55] = ae, i[56] = ce, i[57] = he, i[58] = ye) : ye = i[58], ye;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(23), n = e.ariaLabel, a = e.buttonRef, i = e.isActive, l = e.isDisabled, u = e.isExpanded, d = e.onPress, m = e.selfReaction, p;
		t[0] !== m ? (p = m != null && m !== "" ? o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(m) : null, t[0] = m, t[1] = p) : p = t[1];
		var _ = p, f;
		t[2] !== _ ? (f = _ != null ? s._(
			/*BTDS*/
			"",
			[s._param("emoji", c.jsx(r("WAWebEmoji.react"), {
				emoji: _,
				xstyle: h.reactionEmoji
			}))]
		) : null, t[2] = _, t[3] = f) : f = t[3];
		var g = f;
		if (g != null) {
			var y = i && h.reactionButtonActive, C;
			t[4] !== y ? (C = [
				h.reactionButton,
				h.withEmojiLabel,
				y
			], t[4] = y, t[5] = C) : C = t[5];
			var b;
			return t[6] !== n || t[7] !== a || t[8] !== g || t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== C ? (b = c.jsx(r("WDSButton.react"), {
				ref: a,
				type: "media",
				testid: "voip-reaction-button",
				variant: "borderless",
				disabled: l,
				onPress: d,
				label: g,
				size: "medium",
				"aria-label": n,
				"aria-expanded": u,
				xstyle: C
			}), t[6] = n, t[7] = a, t[8] = g, t[9] = l, t[10] = u, t[11] = d, t[12] = C, t[13] = b) : b = t[13], b;
		}
		var v = i && h.reactionButtonActive, S;
		t[14] !== v ? (S = [h.reactionButton, v], t[14] = v, t[15] = S) : S = t[15];
		var R;
		return t[16] !== n || t[17] !== a || t[18] !== l || t[19] !== u || t[20] !== d || t[21] !== S ? (R = c.jsx(r("WDSButton.react"), {
			ref: a,
			testid: "voip-reaction-button",
			variant: "borderless",
			disabled: l,
			onPress: d,
			Icon: r("WDSIconIcMood.react"),
			size: "medium",
			"aria-label": n,
			"aria-expanded": u,
			xstyle: S
		}), t[16] = n, t[17] = a, t[18] = l, t[19] = u, t[20] = d, t[21] = S, t[22] = R) : R = t[22], R;
	}
	l.default = y;
}), 226);
