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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(87), a, i, l;
		n[0] !== t ? (a = t.chat, l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l) : (a = n[1], i = n[2], l = n[3]);
		var d, p, y, C, b, v, S, R, L, E;
		if (n[4] !== i) {
			var k = i;
			p = k.contextMenuItems, y = k.forceActive, b = k.hideArchivedIcon, v = k.hideMuteIcon, C = k.onContextMenuToggle, S = k.showCommunityInfo, R = k.showMessageYourselfName, L = k.showSpeakerForCag, E = k.useShortName, d = babelHelpers.objectWithoutPropertiesLoose(k, u), n[4] = i, n[5] = d, n[6] = p, n[7] = y, n[8] = C, n[9] = b, n[10] = v, n[11] = S, n[12] = R, n[13] = L, n[14] = E;
		} else d = n[5], p = n[6], y = n[7], C = n[8], b = n[9], v = n[10], S = n[11], R = n[12], L = n[13], E = n[14];
		var I = b === void 0 ? !1 : b, T = v === void 0 ? !1 : v, D = S === void 0 ? !1 : S, x = R === void 0 ? !1 : R, $ = L === void 0 ? !1 : L, P;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (P = ["unreadCount"], n[15] = P) : P = n[15], o("useWAWebModelValues").useModelValues(a, P);
		var N = f(null), M = r("useMergeRefs")(l, N), w = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), A = o("useWAWebHover").useWAWebHover(N), F = g(null), O = F[0], B = F[1], W = y === !0 || d.active, q = f(!1), U, V;
		n[16] !== O || n[17] !== C ? (U = function() {
			C == null || C(O != null);
		}, V = [O, C], n[16] = O, n[17] = C, n[18] = U, n[19] = V) : (U = n[18], V = n[19]), _(U, V);
		var H;
		n[20] !== p ? (H = function(t) {
			B({
				anchor: t.anchor,
				event: t.event,
				menu: p != null ? p : []
			});
		}, n[20] = p, n[21] = H) : H = n[21];
		var G = H, z;
		if (n[22] === Symbol.for("react.memo_cache_sentinel")) {
			z = function() {
				B(null), j();
			};
			var j = function() {
				q.current && (q.current = !1, r("WAWebFocusTracer").focus(Ee.current));
			};
			n[22] = z;
		} else z = n[22];
		var K;
		n[23] !== w || n[24] !== G ? (K = function(t) {
			if (t.key === "Enter") {
				var e;
				t.preventDefault(), t.stopPropagation(), G({ anchor: Ee.current }), q.current = !0, (e = w.current) == null || e.showPopover();
			}
		}, n[23] = w, n[24] = G, n[25] = K) : K = n[25];
		var Q = K, X;
		n[26] !== G ? (X = function(t) {
			t.preventDefault(), t.stopPropagation(), G({
				event: t,
				anchor: Ee.current
			});
		}, n[26] = G, n[27] = X) : X = n[27];
		var Y = X, J;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (J = o("WAWebListsLabelGatingUtils").canDisplayLabel(), n[28] = J) : J = n[28];
		var Z = J, ee;
		if (o("WAWebChatGetters").getIsGroup(a)) {
			var te;
			n[29] !== a || n[30] !== x || n[31] !== E ? (te = m.jsx(o("WAWebName.react").Name, {
				chat: a,
				ellipsify: !0,
				showLabelIcon: Z,
				showMessageYourselfName: x,
				titlify: !0,
				useShortName: E
			}), n[29] = a, n[30] = x, n[31] = E, n[32] = te) : te = n[32], ee = te;
		} else {
			var ne = a.contact, re;
			n[33] !== ne || n[34] !== x || n[35] !== E ? (re = ne != null ? m.jsx(o("WAWebName.react").Name, {
				contact: ne,
				ellipsify: !0,
				showBusinessCheckmark: o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(ne),
				showLabelIcon: Z,
				showMessageYourselfName: x,
				titlify: !0,
				useShortName: E,
				you: !0
			}) : null, n[33] = ne, n[34] = x, n[35] = E, n[36] = re) : re = n[36], ee = re;
		}
		var oe, ae = D === !0 && o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(a.groupMetadata);
		if (ae) {
			var ie;
			if (n[37] !== a.groupMetadata) {
				var le;
				ie = (le = a.groupMetadata) == null ? void 0 : le.getParentGroupChat(), n[37] = a.groupMetadata, n[38] = ie;
			} else ie = n[38];
			var se = ie;
			if (se != null) {
				var ue;
				n[39] === Symbol.for("react.memo_cache_sentinel") ? (ue = (c || (c = r("stylex"))).props(h.mutedTextColor, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2), n[39] = ue) : ue = n[39];
				var ce;
				n[40] !== se ? (ce = m.jsx("span", babelHelpers.extends({}, ue, { children: m.jsx(o("WAWebName.react").Name, {
					chat: se,
					ellipsify: !0,
					titlify: !0
				}) })), n[40] = se, n[41] = ce) : ce = n[41], oe = ce;
			}
		}
		var de;
		n[42] !== ee ? (de = m.jsx(o("WAWebText.react").WAWebTextTitle, { children: ee }), n[42] = ee, n[43] = de) : de = n[43];
		var me = de, pe;
		n[44] === Symbol.for("react.memo_cache_sentinel") ? (pe = (c || (c = r("stylex"))).props(h.mutedTextColor, o("WDSFontTokenStyles").WDSFontTokenStyles.Body2), n[44] = pe) : pe = n[44];
		var _e;
		n[45] !== a ? (_e = m.jsx("span", babelHelpers.extends({}, pe, { children: m.jsx(r("WAWebChatstateInfo.react"), { chat: a }) })), n[45] = a, n[46] = _e) : _e = n[46];
		var fe = _e, ge;
		n[47] !== a.id ? (ge = m.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a.id,
			size: 40,
			waitIdle: !0
		}), n[47] = a.id, n[48] = ge) : ge = n[48];
		var he = ge, ye;
		if (n[49] !== a || n[50] !== he || n[51] !== A || n[52] !== D || n[53] !== $) {
			var Ce = o("WAWebChatGetters").getIsGroup(a) ? m.jsx(r("WAWebGroupChatImage.react"), {
				chat: a,
				isHovered: A,
				regularChatImage: he,
				showCommunityInfo: D,
				showSpeakerForCag: $,
				size: 40,
				theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
			}) : he;
			ye = m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "chat-cell-image",
				children: Ce
			}), n[49] = a, n[50] = he, n[51] = A, n[52] = D, n[53] = $, n[54] = ye;
		} else ye = n[54];
		var be = ye, ve = a.unreadCount ? "teal" : null, Se;
		n[55] !== a ? (Se = m.jsx(r("WAWebChatTimestamp.react"), { chat: a }), n[55] = a, n[56] = Se) : Se = n[56];
		var Re;
		n[57] !== ve || n[58] !== Se ? (Re = m.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: ve,
			children: Se
		}), n[57] = ve, n[58] = Se, n[59] = Re) : Re = n[59];
		var Le = Re, Ee = f(null), ke;
		if (O) {
			var Ie;
			n[60] !== O ? (Ie = m.jsx(o("WAWebUimUie.react").UIE, {
				dismissOnWindowResize: !0,
				displayName: "ChatContextMenu",
				escapable: !0,
				popable: !0,
				requestDismiss: z,
				children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: O })
			}), n[60] = O, n[61] = Ie) : Ie = n[61], ke = Ie;
		}
		var Te = O != null || A || d.active === !0, De;
		n[62] !== a || n[63] !== I || n[64] !== T ? (De = m.jsx(o("WAWebChatIcons.react").Icons, {
			chat: a,
			hideArchivedIcon: I,
			hideMuteIcon: T,
			mute: a.mute,
			unreadCount: a.unreadCount,
			unreadMentionIcon: a.hasUnreadMention
		}), n[62] = a, n[63] = I, n[64] = T, n[65] = De) : De = n[65];
		var xe;
		n[66] !== p || n[67] !== Y || n[68] !== Q || n[69] !== Te || n[70] !== ke ? (xe = p != null && m.jsx(r("WAWebVelocityTransition"), {
			appear: !0,
			in: Te,
			mountOnEnter: !0,
			nodeRef: Ee,
			transitionName: "pop-fast-chat",
			unmountOnExit: !0,
			children: m.jsxs("button", babelHelpers.extends({
				"data-testid": "open-chat-context-menu",
				onClick: Y,
				onKeyDown: Q,
				ref: Ee
			}, (c || (c = r("stylex"))).props(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: [m.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
					iconXstyle: h.secondaryColor,
					height: 24
				}), ke]
			}))
		}), n[66] = p, n[67] = Y, n[68] = Q, n[69] = Te, n[70] = ke, n[71] = xe) : xe = n[71];
		var $e;
		n[72] !== De || n[73] !== xe ? ($e = m.jsxs(o("WAWebFlexBox.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [De, xe]
		}), n[72] = De, n[73] = xe, n[74] = $e) : $e = n[74];
		var Pe = $e, Ne, Me, we;
		oe != null ? (Ne = Le, Me = Pe, we = null) : (Ne = null, Me = Le, we = Pe);
		var Ae;
		return n[75] !== W || n[76] !== d || n[77] !== be || n[78] !== oe || n[79] !== Ne || n[80] !== M || n[81] !== G || n[82] !== me || n[83] !== Me || n[84] !== fe || n[85] !== we ? (Ae = m.jsx(r("WAWebCellV2.react"), babelHelpers.extends({ ref: M }, d, {
			active: W,
			alignPrimary: "start",
			detailLeft: be,
			detailTop: oe,
			detailTopRight: Ne,
			onContextMenu: G,
			primary: me,
			primaryRight: Me,
			secondary: fe,
			secondaryRight: we
		})), n[75] = W, n[76] = d, n[77] = be, n[78] = oe, n[79] = Ne, n[80] = M, n[81] = G, n[82] = me, n[83] = Me, n[84] = fe, n[85] = we, n[86] = Ae) : Ae = n[86], Ae;
	}
	l.default = y;
}), 226);
