__d("WAWebContactsModal.react", [
	"fbt",
	"WALogger",
	"WATypeUtils",
	"WAWebBoolFunc",
	"WAWebBotFrontendUtils",
	"WAWebBotUtils",
	"WAWebChatContact.react",
	"WAWebChatParticipantUtils.react",
	"WAWebCommonNewsletterEnums",
	"WAWebContactGetters",
	"WAWebEmptyState.react",
	"WAWebFbtCommon",
	"WAWebFlatList.react",
	"WAWebFrontendContactGetters",
	"WAWebL10NAccentFold",
	"WAWebListButton.react",
	"WAWebModalsListModal.react",
	"WAWebNewsletterAdminProfilePicture.react",
	"WAWebNewsletterSubscriberList.react",
	"WAWebNoop",
	"WAWebPhoneNumberSearch",
	"WAWebSectionHeader.react",
	"WAWebSingleSelection",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebDebouncedSearch"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useMemo, p = {
		HEADER: "HEADER",
		ROW: "ROW",
		BUTTON: "BUTTON"
	}, _ = "in-your-contacts-header-key", f = o("WAWebChatContact.react").ContactFactory(), g = o("WAWebModalsListModal.react").ListModalFactory();
	function h(e) {
		var t = o("react-compiler-runtime").c(52), n = e.active, a = e.contextEnabled, i = e.contextMenu, l = e.data, s = e.elevatedPushNamesEnabled, c = e.filter, m = e.listenForAdminChange, g = e.loadOnlyContactPictures, h = e.newsletterRoles, y = e.onContext, C = e.onSelect, b = e.openContextOnClick, v = e.participantCollection, S = e.showMemberLabel, R = e.showNotifyName, L = e.showStatusRingAroundProfilePhoto, E = e.sourceChat, k = g === void 0 ? !1 : g;
		switch (l.type) {
			case p.HEADER: {
				var I, T = (I = l.header) != null ? I : "", D = l.itemKey !== _, x;
				return t[0] !== T || t[1] !== D ? (x = d.jsx(r("WAWebSectionHeader.react"), {
					header: T,
					uppercase: D
				}), t[0] = T, t[1] = D, t[2] = x) : x = t[2], x;
			}
			case p.ROW: {
				var $ = !!b, P;
				t[3] !== l.contact || t[4] !== c ? (P = o("WATypeUtils").isString(c(l.contact)), t[3] = l.contact, t[4] = c, t[5] = P) : P = t[5];
				var N = P, M = N ? "group-modal" : null, w;
				t[6] !== l.contact || t[7] !== c || t[8] !== N ? (w = N ? c(l.contact) : null, t[6] = l.contact, t[7] = c, t[8] = N, t[9] = w) : w = t[9];
				var A = w, F;
				t[10] !== l.contact || t[11] !== h || t[12] !== A ? (F = h && o("WAWebContactGetters").getIsMe(l.contact) ? d.jsx(o("WAWebNewsletterSubscriberList.react").YouArentVisibleToYourFollowersLabel, {}) : A, t[10] = l.contact, t[11] = h, t[12] = A, t[13] = F) : F = t[13];
				var O = F, B;
				t[14] !== a || t[15] !== i || t[16] !== l.contact.id || t[17] !== y ? (B = y && i && a ? {
					contextEnabled: function() {
						return a(l.contact.id);
					},
					contextMenu: i(l.contact.id),
					onContext: y
				} : {}, t[14] = a, t[15] = i, t[16] = l.contact.id, t[17] = y, t[18] = B) : B = t[18];
				var W = B, q = !0;
				if (k) {
					var U;
					t[19] !== l.contact ? (U = o("WAWebFrontendContactGetters").getIsMyContact(l.contact), t[19] = l.contact, t[20] = U) : U = t[20], q = U;
				}
				var V;
				if ($ && y) V = y;
				else if (N) V = void 0;
				else if (C) {
					var H = l.contact, G;
					t[21] !== H || t[22] !== C ? (G = function() {
						C(H);
					}, t[21] = H, t[22] = C, t[23] = G) : G = t[23], V = G;
				} else V = r("WAWebNoop");
				var z;
				t[24] !== l.contact.id ? (z = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(l.contact.id) ? o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName() : void 0, t[24] = l.contact.id, t[25] = z) : z = t[25];
				var j = z, K;
				t[26] !== l.newsletterAdminProfile ? (K = l.newsletterAdminProfile ? d.jsx(o("WAWebNewsletterAdminProfilePicture.react").WAWebNewsletterAdminProfilePicture, {
					newsletterAdminProfile: l.newsletterAdminProfile,
					theme: o("WAWebNewsletterAdminProfilePicture.react").NewsletterAdminProfilePictureTheme.CONTACT_LIST
				}) : null, t[26] = l.newsletterAdminProfile, t[27] = K) : K = t[27];
				var Q = K, X;
				return t[28] !== n || t[29] !== V || t[30] !== W || t[31] !== l.contact || t[32] !== l.isPending || t[33] !== l.newsletterRole || t[34] !== s || t[35] !== m || t[36] !== q || t[37] !== v || t[38] !== Q || t[39] !== O || t[40] !== S || t[41] !== R || t[42] !== L || t[43] !== E || t[44] !== j || t[45] !== M ? (X = d.jsx(f, babelHelpers.extends({
					contact: l.contact,
					active: n,
					theme: M,
					secondary: O,
					newsletterMembershipType: l.newsletterRole,
					nameOverride: j,
					onClick: V,
					waitIdle: !0,
					showNotifyName: R,
					elevatedPushNamesEnabled: s,
					listenForAdminChange: m,
					participantCollection: v,
					isPendingParticipant: l.isPending
				}, W, {
					showStatusRingAroundProfilePhoto: L,
					loadPicture: q,
					showMemberLabel: S,
					sourceChat: E,
					secondaryAvatar: Q
				})), t[28] = n, t[29] = V, t[30] = W, t[31] = l.contact, t[32] = l.isPending, t[33] = l.newsletterRole, t[34] = s, t[35] = m, t[36] = q, t[37] = v, t[38] = Q, t[39] = O, t[40] = S, t[41] = R, t[42] = L, t[43] = E, t[44] = j, t[45] = M, t[46] = X) : X = t[46], X;
			}
			case p.BUTTON: {
				var Y;
				return t[47] !== n || t[48] !== l.itemKey || t[49] !== l.onClick || t[50] !== l.text ? (Y = d.jsx(o("WAWebListButton.react").ListButton, {
					active: n,
					id: l.itemKey,
					onClick: l.onClick,
					children: l.text
				}), t[47] = n, t[48] = l.itemKey, t[49] = l.onClick, t[50] = l.text, t[51] = Y) : Y = t[51], Y;
			}
			default: throw o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: invoked from WAWebContactsModal"]))), new (o("WAWebFlatList.react")).UnknownDataError(l);
		}
	}
	var y = 5001;
	function C(e, t) {
		var n;
		if (t == null) return o("WAWebFrontendContactGetters").getHeader(e);
		if ((t == null || (n = t.get(e.id)) == null ? void 0 : n.role) === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber) return r("WAWebFbtCommon")("In Your Contacts").toString();
	}
	function b(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.button, l = a.contacts, u = a.contextEnabled, c = a.contextMenu, _ = a.elevatedPushNamesEnabled, f = a.filter, b = f === void 0 ? o("WAWebBoolFunc").returnTrue : f, v = a.firstRows, S = a.isNewsletter, R = S === void 0 ? !1 : S, L = a.isParentGroup, E = a.lastRow, k = a.listenForAdminChange, I = a.loadOnlyContactPictures, T = I === void 0 ? !1 : I, D = a.newsletterRoles, x = a.onBack, $ = a.onCancel, P = a.onContext, N = a.onSelect, M = a.openContextOnClick, w = a.participantCollection, A = a.searchPlaceholder, F = a.showNotifyName, O = a.showStatusRingAroundProfilePhoto, B = a.spinnerInHeader, W = B === void 0 ? !1 : B, q = a.title, U = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return String(e.id);
			});
		}), V = r("useWAWebDebouncedSearch")(), H = V[0], G = V[1], z = function(t, n) {
			if (n.type === p.ROW) {
				var e = n.contact;
				b(e) === !0 && (N == null || N(e));
			}
		}, j = R && l != null && l.length >= y ? d.jsx(o("WAWebNewsletterSubscriberList.react").NewsletterSubListLastRow, {
			text: H != null && H !== "" ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			textAlign: "center"
		}) : E, K = a.sourceChat, Q = a.showMemberLabel === !0, X = K == null ? void 0 : K.groupMetadata, Y = m(function() {
			var e = o("WAWebL10NAccentFold").accentFold(H), t = o("WAWebPhoneNumberSearch").numberSearch(e), n = l.filter(function(n) {
				return b(n) && (!e || n.searchMatchExact(e, t));
			}), r = n.filter(function(e) {
				return b(e) === !0;
			});
			i && r.push({ id: "button" }), U.current.init(r);
			var a = [];
			if (!n.length) return a;
			for (var s, u, c = D == null ? n.length > 10 && L !== !0 : !0, d = 0; d < n.length; d++) {
				s = n[d];
				var m = C(s, D);
				c && m !== u && a.push({
					type: p.HEADER,
					header: m,
					itemKey: (m || "") + "_" + d
				});
				var _ = D == null ? void 0 : D.get(s.id);
				a.push({
					type: p.ROW,
					contact: s,
					itemKey: s.id.toString() + "_" + d,
					newsletterRole: _ == null ? void 0 : _.role,
					isPending: _ == null ? void 0 : _.pendingInvitee,
					height: o("WAWebChatParticipantUtils.react").getParticipantItemHeight({
						contact: s,
						chat: K,
						showMemberLabel: Q,
						groupMetadata: X
					}),
					newsletterAdminProfile: _ == null ? void 0 : _.adminProfile
				}), u = m;
			}
			if (i) {
				var f = i.onClick, g = i.text;
				a.push({
					type: p.BUTTON,
					text: g,
					onClick: f,
					itemKey: "button",
					height: o("WAWebListButton.react").LIST_BUTTON_HEIGHT
				});
			}
			return a;
		}, [
			H,
			l,
			i,
			U,
			D,
			L,
			b,
			K,
			Q,
			X
		]), J = s._(
			/*BTDS*/
			""
		);
		return d.jsx(g, {
			testid: "contacts-modal",
			ref: n,
			title: q,
			data: Y,
			renderItem: function(t) {
				return d.jsx(h, {
					data: t,
					contextMenu: c,
					onContext: P,
					openContextOnClick: M,
					filter: b,
					contextEnabled: u,
					onSelect: N,
					showNotifyName: F,
					elevatedPushNamesEnabled: _,
					listenForAdminChange: k,
					participantCollection: w,
					active: U.current,
					showStatusRingAroundProfilePhoto: O,
					loadOnlyContactPictures: T,
					newsletterRoles: D,
					showMemberLabel: a.showMemberLabel,
					sourceChat: K
				});
			},
			emptyState: d.jsx(o("WAWebEmptyState.react").SearchContacts, {}),
			selection: U.current,
			onSearch: G,
			searchPlaceholder: A != null ? A : J,
			onSelect: z,
			onBack: x,
			onCancel: $,
			firstRows: v,
			isNewsletter: R,
			lastRow: j,
			spinnerInHeader: W
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
