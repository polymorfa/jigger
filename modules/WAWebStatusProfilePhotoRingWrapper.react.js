__d("WAWebStatusProfilePhotoRingWrapper.react", [
	"WAWebABProps",
	"WAWebApiContact",
	"WAWebChatCollection",
	"WAWebContactGetters",
	"WAWebConversationDeprecatedLidChatUtils",
	"WAWebDetailImage.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendStatusGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebLogStatusPogImpression",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMetadataCollection",
	"WAWebProfilePicThumbCollection",
	"WAWebStatusCollection",
	"WAWebStatusEphemeralBadgeUtils",
	"WAWebStatusGetters",
	"WAWebStatusProfilePhotoRing.react",
	"WAWebWamEnumTsSurface",
	"WAWebWidFactory",
	"WDSProfilePhoto.react",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebIntersection",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(49), n = e.hideWhenNoUnreadStatuses, a = e.isHoveredOrActive, i = e.logPogImpression, l = e.photoSize, u = e.rowIndex, p = e.rowSection, g = e.waitIdle, h = a === void 0 ? !1 : a, y = i === void 0 ? !1 : i, C = r("useWAWebIntersection")(), b = C[0], v = C[1], S = v.isIntersecting, R;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var L;
			R = [
				(L = o("WAWebContactGetters")).getId,
				L.getCalculatedStatusMute,
				L.getIsMe,
				L.getIsNewsletter
			], t[0] = R;
		} else R = t[0];
		var E = o("useWAWebContactValues").useContactValues(e.contact.id, R), k = E[0], I = E[1], T = E[2], D = E[3], x;
		t[1] !== k ? (x = function() {
			return f(k);
		}, t[1] = k, t[2] = x) : x = t[2];
		var $ = m(x), P = $[0], N = $[1], M;
		t[3] !== k ? (M = function() {
			var e = f(k);
			N(e);
		}, t[3] = k, t[4] = M) : M = t[4];
		var w = M, A;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (A = ["change:msgsChanged"], t[5] = A) : A = t[5], o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, A, w);
		var F;
		if (t[6] !== k || t[7] !== D) {
			var O;
			F = D === !0 && (r("WAWebNewsletterMetadataCollection") == null || (O = r("WAWebNewsletterMetadataCollection").get(k)) == null ? void 0 : O.suspended) === !0, t[6] = k, t[7] = D, t[8] = F;
		} else F = t[8];
		var B = F;
		o("useWAWebListener").useListener(D === !0 ? r("WAWebNewsletterMetadataCollection") : null, "change:suspended", w);
		var W;
		t[9] !== T ? (W = T && !o("WAWebABProps").getABPropConfigValue("wa_web_self_profile_photo_fix_enabled"), t[9] = T, t[10] = W) : W = t[10];
		var q = W, U = !1;
		if (t[11] !== k) {
			var V = o("WAWebChatCollection").ChatCollection.get(k);
			V && (U = o("WAWebConversationDeprecatedLidChatUtils").getLidDeprecatedInfo(V).isLidDeprecated), t[11] = k, t[12] = U;
		} else U = t[12];
		var H = I || U || q || B, G;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (G = [o("WAWebStatusGetters").getUnreadCount, o("WAWebStatusGetters").getTotalCount], t[13] = G) : G = t[13];
		var z = o("useWAWebStatusValues").useOptionalStatusValues(P == null ? void 0 : P.id, G), j;
		t[14] !== z ? (j = z != null ? z : [0, 0], t[14] = z, t[15] = j) : j = t[15];
		var K = j, Q = K[0], X = K[1], Y;
		t[16] !== n || t[17] !== k ? (Y = n && !(k.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled()), t[16] = n, t[17] = k, t[18] = Y) : Y = t[18];
		var J = Y, Z = Q === 0 && J || X === 0, ee = d(!1), te, ne;
		t[19] !== P || t[20] !== S || t[21] !== Z || t[22] !== H || t[23] !== y || t[24] !== u || t[25] !== p ? (te = function() {
			!y || H || Z || !S || ee.current || P == null || (ee.current = !0, o("WAWebLogStatusPogImpression").logStatusPogImpression({
				pogOwnerId: P.id,
				pogIndex: u,
				msg: o("WAWebFrontendStatusGetters").getLastStatus(P),
				statusViewEntrypoint: p,
				tsSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_LIST
			}));
		}, ne = [
			y,
			H,
			S,
			P,
			u,
			p,
			Z
		], t[19] = P, t[20] = S, t[21] = Z, t[22] = H, t[23] = y, t[24] = u, t[25] = p, t[26] = te, t[27] = ne) : (te = t[26], ne = t[27]), c(te, ne);
		var re;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (re = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), t[28] = re) : re = t[28];
		var oe = re, ae;
		t[29] !== k || t[30] !== h || t[31] !== l || t[32] !== e.contact || t[33] !== g ? (ae = oe ? s.jsx(_, {
			id: k,
			contact: e.contact
		}) : s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: k,
			size: l,
			waitIdle: g,
			ephemeralIcon: "chat-list",
			isHoveredOrActive: h
		}), t[29] = k, t[30] = h, t[31] = l, t[32] = e.contact, t[33] = g, t[34] = ae) : ae = t[34];
		var ie = ae, le;
		t[35] === Symbol.for("react.memo_cache_sentinel") ? (le = oe ? { className: "x78zum5 x6s0dn4 xl56j7k x5yr21d" } : null, t[35] = le) : le = t[35];
		var se = le;
		if (H || P == null || !S) {
			var ue;
			return t[36] !== b || t[37] !== ie ? (ue = s.jsx("div", babelHelpers.extends({ ref: b }, se, { children: ie })), t[36] = b, t[37] = ie, t[38] = ue) : ue = t[38], ue;
		}
		var ce;
		t[39] !== P || t[40] !== n || t[41] !== l || t[42] !== u || t[43] !== p || t[44] !== g ? (ce = s.jsx(r("WAWebStatusProfilePhotoRing.react"), {
			contactStatus: P,
			photoSize: l,
			waitIdle: g,
			hideWhenNoUnreadStatuses: n,
			rowSection: p,
			rowIndex: u
		}), t[39] = P, t[40] = n, t[41] = l, t[42] = u, t[43] = p, t[44] = g, t[45] = ce) : ce = t[45];
		var de;
		return t[46] !== b || t[47] !== ce ? (de = s.jsx("div", babelHelpers.extends({
			"data-testid": "chatlist-status-ring",
			ref: b
		}, se, { children: ce })), t[46] = b, t[47] = ce, t[48] = de) : de = t[48], de;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(30), n = e.contact, a = e.id, i;
		t[0] !== a ? (i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(a), t[0] = a, t[1] = i) : i = t[1];
		var l = i, u;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = ["img"], t[2] = u) : u = t[2];
		var c = o("useWAWebModelValues").useOptionalModelValues(l, u), d;
		t[3] !== n ? (d = o("WAWebInitialsFromNameUtils").getInitialsFromContact(n), t[3] = n, t[4] = d) : d = t[4];
		var m = d, p;
		t[5] !== m.firstInitial || t[6] !== m.secondInitial ? (p = [m.firstInitial, m.secondInitial].filter(Boolean), t[5] = m.firstInitial, t[6] = m.secondInitial, t[7] = p) : p = t[7];
		var _ = p.join(""), f;
		t[8] !== a ? (f = o("useWAWebDefaultProfileColors").getWDSProfilePhotoType(a), t[8] = a, t[9] = f) : f = t[9];
		var g = f, h = (c == null ? void 0 : c.img) != null && c.img !== "", y;
		t[10] !== n ? (y = o("WAWebFrontendContactGetters").getFormattedName(n), t[10] = n, t[11] = y) : y = t[11];
		var C = c == null ? void 0 : c.img, b;
		t[12] !== a ? (b = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(a), t[12] = a, t[13] = b) : b = t[13];
		var v;
		t[14] !== a ? (v = o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(a), t[14] = a, t[15] = v) : v = t[15];
		var S;
		t[16] !== a ? (S = o("WAWebStatusEphemeralBadgeUtils").getStatusRingEphemeralBadge(a), t[16] = a, t[17] = S) : S = t[17];
		var R;
		t[18] !== a ? (R = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(a), t[18] = a, t[19] = R) : R = t[19];
		var L = g === "group" && !h ? "default-group-refreshed" : void 0, E;
		return t[20] !== _ || t[21] !== S || t[22] !== R || t[23] !== L || t[24] !== y || t[25] !== C || t[26] !== b || t[27] !== v || t[28] !== g ? (E = s.jsx(r("WDSProfilePhoto.react"), {
			type: g,
			name: y,
			src: C,
			size: "medium",
			initials: _,
			color: b,
			customColor: v,
			badge: S,
			placeholderIcon: R,
			testid: L,
			isDecorative: !0
		}), t[20] = _, t[21] = S, t[22] = R, t[23] = L, t[24] = y, t[25] = C, t[26] = b, t[27] = v, t[28] = g, t[29] = E) : E = t[29], E;
	}
	function f(e) {
		var t = o("WAWebStatusCollection").StatusCollection.get(e);
		if (t != null) return t;
		if (e.isRegularUser()) {
			var n = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e));
			if (n != null) return o("WAWebStatusCollection").StatusCollection.get(o("WAWebWidFactory").asUserWidOrThrow(n));
		}
		return null;
	}
	l.default = p;
}), 98);
