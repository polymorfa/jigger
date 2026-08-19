__d("WAWebGroupChatProfilePicture.react", [
	"fbt",
	"WAWebBotUtils",
	"WAWebChatCollection",
	"WAWebChatGroupUtils",
	"WAWebChatParticipantColor",
	"WAWebCmd",
	"WAWebDetailImage.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebFindChatAction",
	"WAWebGroupHoverCardGatingUtils",
	"WAWebGroupHoverCardLoadable",
	"WAWebMessageUiUtils",
	"WAWebPopover.react",
	"WAWebPrivacyBlurWrapper.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebStylexVars.stylex",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useRef, m = {
		height: "x16ye13r",
		position: "x10l6tqk",
		insetInlineStart: "x1wnpwf8",
		left: "",
		right: "",
		zIndex: "x1vjfegm",
		$$css: !0
	}, p = {
		groupProfilePictureSticky: function(t) {
			return [m, { "--x-height": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t.lastMessageHasReaction ? "calc(100% - " + o("WAWebStylexVars.stylex").reactionBubbleVariables.height + " - " + o("WDSVars.stylex").WDSVars.spacingSinglePlus + ")" : "calc(100% - " + o("WDSVars.stylex").WDSVars.spacingSinglePlus + ")") }];
		},
		metaAiBotBackground: {
			backgroundColor: "x1ew7x2d",
			$$css: !0
		}
	};
	function _(e) {
		var t, n = o("react-compiler-runtime").c(34), a = e.chatWid, i = e.disableClick, l = e.lastMessageHasReaction, u = e.sticky, m = e.usePicInBubbleLayout, _ = e.userContact, g = i === void 0 ? !1 : i, h = l === void 0 ? !1 : l, y = u === void 0 ? !1 : u, C = m === void 0 ? !1 : m, b = o("WAWebChatCollection").ChatCollection.get(a), v;
		n[0] !== _.id ? (v = o("WAWebBotUtils").isMetaAiBot(_.id) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(_.id), n[0] = _.id, n[1] = v) : v = n[1];
		var S = v, R = b ? o("WAWebChatParticipantColor").getAssignedColor(b, _.id, "WAWebGroupChatProfilePicture-" + ((t = o("WAWebQuotedMessageUserJourneyLogger").getChatType(b.id)) != null ? t : "")) : 1, L;
		n[2] !== g || n[3] !== S ? (L = o("WAWebGroupHoverCardGatingUtils").isGroupHoverCardEnabled() && !S && !g, n[2] = g, n[3] = S, n[4] = L) : L = n[4];
		var E = L, k = d(null), I = function(t) {
			var e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(_.id, "handle_click_group_chat_profile_picture");
			e != null && o("WAWebFindChatAction").findOrCreateLatestChat(e, "groupChatProfilePicture").then(function(e) {
				var t = e.chat;
				t != null && o("WAWebCmd").Cmd.chatInfoDrawer(t, b != null ? { sourceGroupChatOrNewsletter: b } : void 0);
			});
		}, T = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(b), D = o("WAWebMessageUiUtils").getAuthorName({
			contact: _,
			isElevatedPushNamesEnabled: T,
			sender: _.id
		}), x = E ? "hover-popover" : "controllable", $;
		n[5] !== a || n[6] !== E || n[7] !== _ ? ($ = E ? c.jsx(o("WAWebGroupHoverCardLoadable").GroupHoverCardLoadable, {
			contact: _,
			chatWid: a
		}) : c.jsx("div", {}), n[5] = a, n[6] = E, n[7] = _, n[8] = $) : $ = n[8];
		var P;
		n[9] !== x || n[10] !== $ ? (P = {
			target: k,
			position: o("WAWebPopover.react").PopoverPosition.Top,
			alignment: o("WAWebPopover.react").PopoverAlignment.Start,
			initHandling: x,
			openingDelay: 300,
			transitionName: "fade-fast",
			element: $,
			name: "GroupChatProfilePictureHoverCard",
			dismissable: !1
		}, n[9] = x, n[10] = $, n[11] = P) : P = n[11];
		var N = o("WAWebPopover.react").usePopoverElement(P), M = N.popover, w;
		n[12] !== D ? (w = s._(
			/*BTDS*/
			"",
			[s._param("author-name", D)]
		), n[12] = D, n[13] = w) : w = n[13];
		var A = w, F = d(null), O;
		n[14] !== y ? (O = y ? { className: "x5yr21d" } : void 0, n[14] = y, n[15] = O) : O = n[15];
		var B = C ? "group_profile_picture_in_bubble" : "group_profile_picture", W = g ? null : I, q = S && p.metaAiBotBackground, U;
		n[16] !== A || n[17] !== R || n[18] !== y || n[19] !== B || n[20] !== W || n[21] !== q || n[22] !== _.id ? (U = c.jsx("div", {
			ref: k,
			children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
				testId: "group-chat-profile-picture",
				id: _.id,
				size: o("WAWebDetailImage.react").DetailImageSize.None,
				theme: B,
				loadAnimation: !1,
				onClick: W,
				authorColor: R,
				tabIndex: 0,
				ariaLabel: A,
				groupProfilePictureSticky: y,
				xstyle: q
			})
		}), n[16] = A, n[17] = R, n[18] = y, n[19] = B, n[20] = W, n[21] = q, n[22] = _.id, n[23] = U) : U = n[23];
		var V;
		n[24] !== O || n[25] !== U ? (V = c.jsx(r("WAWebPrivacyBlurWrapper.react"), {
			containerRef: F,
			children: c.jsx("div", babelHelpers.extends({ ref: F }, O, { children: U }))
		}), n[24] = O, n[25] = U, n[26] = V) : V = n[26];
		var H = E && M, G;
		n[27] !== V || n[28] !== H ? (G = c.jsxs(c.Fragment, { children: [V, H] }), n[27] = V, n[28] = H, n[29] = G) : G = n[29];
		var z;
		return n[30] !== h || n[31] !== y || n[32] !== G ? (z = c.jsx(f, {
			lastMessageHasReaction: h,
			sticky: y,
			children: G
		}), n[30] = h, n[31] = y, n[32] = G, n[33] = z) : z = n[33], z;
	}
	function f(t) {
		var n = o("react-compiler-runtime").c(4), a = t.children, i = t.lastMessageHasReaction, l = t.sticky, s;
		return n[0] !== a || n[1] !== i || n[2] !== l ? (s = l ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.groupProfilePictureSticky({ lastMessageHasReaction: i })), { children: a })) : a, n[0] = a, n[1] = i, n[2] = l, n[3] = s) : s = n[3], s;
	}
	l.default = _;
}), 226);
