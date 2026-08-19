__d("WAWebMessageCommunityGeneralChatWelcome.react", [
	"fbt",
	"WAWebChatCollection",
	"WAWebCmd",
	"WAWebCommunityGatingUtils",
	"WAWebFormatParticipantNames",
	"WAWebMessageCommunityCard.react",
	"WAWebMessageCommunityGeneralChatWelcomeTitle.react",
	"WAWebModalManager",
	"WAWebOpenAddParticipantModalFlow",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebAddParticipantsSelectedContacts"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingBlock6: {
		paddingTop: "x1yrsyyn",
		paddingBottom: "x10b6aqq",
		$$css: !0
	} };
	function m(t) {
		var n, a = o("react-compiler-runtime").c(41), i = t.author, l = t.subgroupChat, u = t.templateParams, m = u[0], p = u[1], _ = r("useWAWebAddParticipantsSelectedContacts")(), f = _.handleClearSelectedContacts, g = _.selectedContactsMap, h = _.updateSelectedContactsState;
		if (((n = l.groupMetadata) == null ? void 0 : n.parentGroup) == null) {
			var y;
			a[0] === Symbol.for("react.memo_cache_sentinel") ? (y = (e || (e = r("stylex"))).props(d.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingHor12), a[0] = y) : y = a[0];
			var C;
			a[1] !== l.formattedTitle ? (C = o("WAWebMessageCommunityGeneralChatWelcomeTitle.react").communityGeneralChatWelcomeTitle(l.formattedTitle), a[1] = l.formattedTitle, a[2] = C) : C = a[2];
			var b;
			return a[3] !== C ? (b = c.jsx("div", babelHelpers.extends({}, y, { children: C })), a[3] = C, a[4] = b) : b = a[4], b;
		}
		var v = l.groupMetadata.parentGroup, S, R, L;
		if (a[5] !== p || a[6] !== v || a[7] !== l.formattedTitle) {
			var E, k = o("WAWebChatCollection").ChatCollection.get(v);
			S = k == null ? void 0 : k.formattedTitle, R = p != null ? p : l == null ? void 0 : l.formattedTitle, L = (E = k == null ? void 0 : k.iAmAdmin()) != null ? E : !1, a[5] = p, a[6] = v, a[7] = l.formattedTitle, a[8] = S, a[9] = R, a[10] = L;
		} else S = a[8], R = a[9], L = a[10];
		var I = L, T;
		a[11] !== f || a[12] !== I || a[13] !== v || a[14] !== S || a[15] !== g || a[16] !== l || a[17] !== h ? (T = function() {
			if (I) {
				if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
					o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
					return;
				}
				o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
					groupMetadata: r("nullthrows")(l.groupMetadata),
					chat: l,
					communityName: S,
					selectedContactsMap: g,
					updateSelectedContactsState: h,
					reopenAddGroupFlowCallback: T,
					handleClearSelectedContacts: f
				});
			} else o("WAWebCmd").Cmd.openCommunityTabbedInfo(v);
		}, a[11] = f, a[12] = I, a[13] = v, a[14] = S, a[15] = g, a[16] = l, a[17] = h, a[18] = T) : T = a[18];
		var D;
		e: switch (m) {
			case "created": {
				var x;
				a[19] === Symbol.for("react.memo_cache_sentinel") ? (x = !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && s._(
					/*BTDS*/
					""
				), a[19] = x) : x = a[19], D = x;
				break e;
			}
			case "subtype-general_chat_add": {
				var $;
				a[20] === Symbol.for("react.memo_cache_sentinel") ? ($ = !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && s._(
					/*BTDS*/
					""
				), a[20] = $) : $ = a[20], D = $;
				break e;
			}
			case "accept":
			case "":
			case null: {
				var P;
				a[21] !== i ? (P = o("WAWebFormatParticipantNames").getFormattedNames(i), a[21] = i, a[22] = P) : P = a[22];
				var N = P;
				if (N != null && N !== "") {
					var M;
					a[23] !== N ? (M = s._(
						/*BTDS*/
						"",
						[s._param("admin_name", N)]
					), a[23] = N, a[24] = M) : M = a[24], D = M;
				} else {
					var w;
					a[25] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
						/*BTDS*/
						""
					), a[25] = w) : w = a[25], D = w;
				}
				break e;
			}
			case "invite":
			case "linked_group_join":
			default: {
				var A;
				a[26] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
					/*BTDS*/
					""
				), a[26] = A) : A = a[26], D = A;
			}
		}
		var F;
		a[27] === Symbol.for("react.memo_cache_sentinel") ? (F = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[27] = F) : F = a[27];
		var O = F, B;
		a[28] !== D ? (B = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && !D ? c.jsx(c.Fragment, { children: O }) : c.jsx(o("WAWebMessageCommunityCard.react").BulletedList, { items: [c.jsx(c.Fragment, { children: D }), c.jsx(c.Fragment, { children: O })] }), a[28] = D, a[29] = B) : B = a[29];
		var W = B, q;
		a[30] !== I ? (q = I ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[30] = I, a[31] = q) : q = a[31];
		var U = q, V = l.id, H;
		a[32] !== R ? (H = o("WAWebMessageCommunityGeneralChatWelcomeTitle.react").communityGeneralChatWelcomeTitle(R), a[32] = R, a[33] = H) : H = a[33];
		var G;
		return a[34] !== W || a[35] !== U || a[36] !== T || a[37] !== v || a[38] !== l.id || a[39] !== H ? (G = c.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
			communityId: v,
			subgroupId: V,
			title: H,
			body: W,
			footer: U,
			onFooterClick: T
		}), a[34] = W, a[35] = U, a[36] = T, a[37] = v, a[38] = l.id, a[39] = H, a[40] = G) : G = a[40], G;
	}
	l.default = m;
}), 226);
