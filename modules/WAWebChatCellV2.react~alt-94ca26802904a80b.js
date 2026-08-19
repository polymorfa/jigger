__d("WAWebChatCellV2.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebChatGetters",
	"WAWebChatIcons.react",
	"WAWebChatTimestamp.react",
	"WAWebChatstateInfo.react",
	"WAWebChevronCustomIcons",
	"WAWebCommunityGatingUtils",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebErrorBoundary.react",
	"WAWebFlexBox.react",
	"WAWebFocusTracer",
	"WAWebGroupChatImage.react",
	"WAWebListsLabelGatingUtils",
	"WAWebName.react",
	"WAWebPopoverContext.react",
	"WAWebStackedCirclesImage.react",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransition",
	"WDSFocusStateStyles",
	"WDSFontTokenStyles",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebHover",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["chat", "ref"], u = [
		"contextMenuItems",
		"forceActive",
		"hideArchivedIcon",
		"hideMuteIcon",
		"onContextMenuToggle",
		"showCommunityInfo",
		"showMessageYourselfName",
		"showSpeakerForCag",
		"useShortName"
	], c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState, h = {
		mutedTextColor: {
			color: "xhslqc4",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function y(t) {
		var n = t.chat, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.contextMenuItems, d = i.forceActive, p = i.hideArchivedIcon, y = p === void 0 ? !1 : p, C = i.hideMuteIcon, b = C === void 0 ? !1 : C, v = i.onContextMenuToggle, S = i.showCommunityInfo, R = S === void 0 ? !1 : S, L = i.showMessageYourselfName, E = L === void 0 ? !1 : L, k = i.showSpeakerForCag, I = k === void 0 ? !1 : k, T = i.useShortName, D = babelHelpers.objectWithoutPropertiesLoose(i, u);
		o("useWAWebModelValues").useModelValues(n, ["unreadCount"]);
		var x = f(null), $ = r("useMergeRefs")(a, x), P = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), N = o("useWAWebHover").useWAWebHover(x), M = g(null), w = M[0], A = M[1], F = d === !0 || D.active, O = f(!1);
		_(function() {
			v == null || v(w != null);
		}, [w, v]);
		var B = function(t) {
			A({
				anchor: t.anchor,
				event: t.event,
				menu: l != null ? l : []
			});
		}, W = function() {
			A(null), q();
		}, q = function() {
			O.current && (O.current = !1, r("WAWebFocusTracer").focus(oe.current));
		}, U = function(t) {
			if (t.key === "Enter") {
				var e;
				t.preventDefault(), t.stopPropagation(), B({ anchor: oe.current }), O.current = !0, (e = P.current) == null || e.showPopover();
			}
		}, V = function(t) {
			t.preventDefault(), t.stopPropagation(), B({
				event: t,
				anchor: oe.current
			});
		}, H = o("WAWebListsLabelGatingUtils").canDisplayLabel(), G;
		if (o("WAWebChatGetters").getIsGroup(n)) G = m.jsx(o("WAWebName.react").Name, {
			chat: n,
			ellipsify: !0,
			showLabelIcon: H,
			showMessageYourselfName: E,
			titlify: !0,
			useShortName: T
		});
		else {
			var z = n.contact;
			G = z != null ? m.jsx(o("WAWebName.react").Name, {
				contact: z,
				ellipsify: !0,
				showBusinessCheckmark: o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(z),
				showLabelIcon: H,
				showMessageYourselfName: E,
				titlify: !0,
				useShortName: T,
				you: !0
			}) : null;
		}
		var j, K = R === !0 && o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(n.groupMetadata);
		if (K) {
			var Q, X = (Q = n.groupMetadata) == null ? void 0 : Q.getParentGroupChat();
			X != null && (j = m.jsx("span", babelHelpers.extends({}, (c || (c = r("stylex"))).props(h.mutedTextColor, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2), { children: m.jsx(o("WAWebName.react").Name, {
				chat: X,
				ellipsify: !0,
				titlify: !0
			}) })));
		}
		var Y = m.jsx(o("WAWebText.react").WAWebTextTitle, { children: G }), J = m.jsx("span", babelHelpers.extends({}, (c || (c = r("stylex"))).props(h.mutedTextColor, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2), { children: m.jsx(r("WAWebChatstateInfo.react"), { chat: n }) })), Z = 40, ee = m.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: Z,
			waitIdle: !0
		}), te = o("WAWebChatGetters").getIsGroup(n) ? m.jsx(r("WAWebGroupChatImage.react"), {
			chat: n,
			isHovered: N,
			regularChatImage: ee,
			showCommunityInfo: R,
			showSpeakerForCag: I,
			size: Z,
			theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
		}) : ee, ne = m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "chat-cell-image",
			children: te
		}), re = m.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: n.unreadCount ? "teal" : null,
			children: m.jsx(r("WAWebChatTimestamp.react"), { chat: n })
		}), oe = f(null), ae;
		w && (ae = m.jsx(o("WAWebUimUie.react").UIE, {
			dismissOnWindowResize: !0,
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			requestDismiss: W,
			children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: w })
		}));
		var ie = w != null || N || D.active === !0, le = m.jsxs(o("WAWebFlexBox.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [m.jsx(o("WAWebChatIcons.react").Icons, {
				chat: n,
				hideArchivedIcon: y,
				hideMuteIcon: b,
				mute: n.mute,
				unreadCount: n.unreadCount,
				unreadMentionIcon: n.hasUnreadMention
			}), l != null && m.jsx(r("WAWebVelocityTransition"), {
				appear: !0,
				in: ie,
				mountOnEnter: !0,
				nodeRef: oe,
				transitionName: "pop-fast-chat",
				unmountOnExit: !0,
				children: m.jsxs("button", babelHelpers.extends({
					"data-testid": "open-chat-context-menu",
					onClick: V,
					onKeyDown: U,
					ref: oe
				}, (c || (c = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					children: [m.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
						iconXstyle: h.secondaryColor,
						height: 24
					}), ae]
				}))
			})]
		}), se, ue, ce;
		return j != null ? (se = re, ue = le, ce = null) : (se = null, ue = re, ce = le), m.jsx(r("WAWebCellV2.react"), babelHelpers.extends({ ref: $ }, D, {
			active: F,
			alignPrimary: "start",
			detailLeft: ne,
			detailTop: j,
			detailTopRight: se,
			onContextMenu: B,
			primary: Y,
			primaryRight: ue,
			secondary: J,
			secondaryRight: ce
		}));
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
