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
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebIntersection",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState;
	function p(e) {
		var t, n = e.hideWhenNoUnreadStatuses, a = e.isHoveredOrActive, i = a === void 0 ? !1 : a, l = e.logPogImpression, u = l === void 0 ? !1 : l, p = e.photoSize, g = e.rowIndex, h = e.rowSection, y = e.waitIdle, C = r("useWAWebIntersection")(), b = C[0], v = C[1].isIntersecting, S = o("useWAWebContactValues").useContactValues(e.contact.id, [
			o("WAWebContactGetters").getId,
			o("WAWebContactGetters").getCalculatedStatusMute,
			o("WAWebContactGetters").getIsMe,
			o("WAWebContactGetters").getIsNewsletter
		]), R = S[0], L = S[1], E = S[2], k = S[3], I = m(function() {
			return f(R);
		}), T = I[0], D = I[1], x = function() {
			var e = f(R);
			D(e);
		};
		o("useWAWebListener").useListener(o("WAWebStatusCollection").StatusCollection, ["change:msgsChanged"], x);
		var $ = k === !0 && (r("WAWebNewsletterMetadataCollection") == null || (t = r("WAWebNewsletterMetadataCollection").get(R)) == null ? void 0 : t.suspended) === !0;
		o("useWAWebListener").useListener(k === !0 ? r("WAWebNewsletterMetadataCollection") : null, "change:suspended", x);
		var P = E && !o("WAWebABProps").getABPropConfigValue("wa_web_self_profile_photo_fix_enabled"), N = !1, M = o("WAWebChatCollection").ChatCollection.get(R);
		M && (N = o("WAWebConversationDeprecatedLidChatUtils").getLidDeprecatedInfo(M).isLidDeprecated);
		var w = L || N || P || $, A = o("useWAWebStatusValues").useOptionalStatusValues(T == null ? void 0 : T.id, [o("WAWebStatusGetters").getUnreadCount, o("WAWebStatusGetters").getTotalCount]), F = A != null ? A : [0, 0], O = F[0], B = F[1], W = n && !(R.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled()), q = O === 0 && W || B === 0, U = d(!1);
		c(function() {
			!u || w || q || !v || U.current || T == null || (U.current = !0, o("WAWebLogStatusPogImpression").logStatusPogImpression({
				pogOwnerId: T.id,
				pogIndex: g,
				msg: o("WAWebFrontendStatusGetters").getLastStatus(T),
				statusViewEntrypoint: h,
				tsSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_LIST
			}));
		}, [
			u,
			w,
			v,
			T,
			g,
			h,
			q
		]);
		var V = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), H = V ? s.jsx(_, {
			id: R,
			contact: e.contact
		}) : s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: R,
			size: p,
			waitIdle: y,
			ephemeralIcon: "chat-list",
			isHoveredOrActive: i
		}), G = V ? { className: "x78zum5 x6s0dn4 xl56j7k x5yr21d" } : null;
		return w || T == null || !v ? s.jsx("div", babelHelpers.extends({ ref: b }, G, { children: H })) : s.jsx("div", babelHelpers.extends({
			"data-testid": "chatlist-status-ring",
			ref: b
		}, G, { children: s.jsx(r("WAWebStatusProfilePhotoRing.react"), {
			contactStatus: T,
			photoSize: p,
			waitIdle: y,
			hideWhenNoUnreadStatuses: n,
			rowSection: h,
			rowIndex: g
		}) }));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.contact, n = e.id, a = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(n), i = o("useWAWebModelValues").useOptionalModelValues(a, ["img"]), l = o("WAWebInitialsFromNameUtils").getInitialsFromContact(t), u = [l.firstInitial, l.secondInitial].filter(Boolean).join(""), c = o("useWAWebDefaultProfileColors").getWDSProfilePhotoType(n), d = (i == null ? void 0 : i.img) != null && i.img !== "";
		return s.jsx(r("WDSProfilePhoto.react"), {
			type: c,
			name: o("WAWebFrontendContactGetters").getFormattedName(t),
			src: i == null ? void 0 : i.img,
			size: "medium",
			initials: u,
			color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(n),
			customColor: o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(n),
			badge: o("WAWebStatusEphemeralBadgeUtils").getStatusRingEphemeralBadge(n),
			placeholderIcon: o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(n),
			testid: c === "group" && !d ? "default-group-refreshed" : void 0,
			isDecorative: !0
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
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
