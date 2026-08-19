__d("WAWebStatusProfilePhotoRing.react", [
	"fbt",
	"WAJids",
	"WAWebABProps",
	"WAWebDetailImage.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendStatusGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebKeyboardHotKeys.react",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebOpenStatusQuotedFlow",
	"WAWebProfilePicThumbCollection",
	"WAWebStatusEphemeralBadgeUtils",
	"WAWebStatusGatingUtils",
	"WAWebStatusGetters",
	"WAWebStatusImageRing.react",
	"WAWebStatusLoadingRingOverlay.react",
	"WAWebStatusQuotedFlowLoadable",
	"WAWebWamEnumStatusRowSection",
	"WDSProfilePhoto.react",
	"WDSVars.stylex",
	"react",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = 4, m = 53, p = "medium", _ = 48, f = 2;
	function g(e) {
		var t = e.contactStatus, n = e.hideWhenNoUnreadStatuses, a = e.photoSize, i = e.rowIndex, l = e.rowSection, p = e.waitIdle, g = o("useWAWebStatusValues").useStatusValues(t.id, [
			o("WAWebStatusGetters").getId,
			o("WAWebFrontendStatusGetters").getContact,
			o("WAWebStatusGetters").getTotalCount,
			o("WAWebStatusGetters").getUnreadCount,
			o("WAWebFrontendStatusGetters").getLastStatus
		]), y = g[0], C = g[1], b = g[2], v = g[3], S = g[4], R = n && !(y.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled()), L = v === 0 && R || b === 0, E = c(function() {
			return !o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() || S == null ? null : S.statusAudienceMetadata != null ? o("WDSVars.stylex").WDSBaseColor.plum400 : null;
		}, [S]), k = function(n) {
			if (!L) {
				if (n.stopPropagation(), n.preventDefault(), y.isNewsletter() && o("WAWebNewsletterGatingUtils").isNewsletterStatusAllEntrypointsEnabled()) {
					o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
						newsletterJid: o("WAJids").toNewsletterJid(y.toString()),
						statusModelId: y,
						rowSection: l,
						rowIndex: i
					});
					return;
				}
				var e = l === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST || l === o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_LIST_SEARCH, r = e && o("WAWebStatusGatingUtils").isChainFromChatListEnabled();
				o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
					status: t,
					onClose: function() {
						return o("WAWebModalManager").ModalManager.closeMedia();
					},
					continuousPlay: r,
					prioritizeInitialStatus: r,
					rowSection: l,
					rowIndex: i
				}), { transition: "status-modal" });
			}
		}, I = o("WAWebDetailImage.react").getSize(a), T = I != null ? I + d : m, D = s._(
			/*BTDS*/
			""
		), x = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo");
		return u.jsxs(u.Fragment, { children: [!x && u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
			id: y,
			size: T,
			stroke: d,
			hideWhenNoUnreadStatuses: R,
			theme: o("WAWebStatusImageRing.react").RingTheme.ChatList,
			respectAppTheme: !0,
			breakRing: !1,
			customUnreadRingColor: E
		}), u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({ onClick: k }, x ? {
			tabIndex: 0,
			role: "button",
			"aria-label": D
		} : null, { children: x ? u.jsx(r("WAWebStatusLoadingRingOverlay.react"), {
			customUnreadRingColor: E,
			id: y,
			size: _,
			stroke: f,
			children: u.jsx(h, {
				id: y,
				contact: C,
				noStatusInteraction: L,
				totalCount: b,
				unreadCount: v,
				closeFriendsRingColor: E
			})
		}) : u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: C.id,
			theme: L ? void 0 : "status_profile_photo_ring",
			size: a,
			waitIdle: p,
			ephemeralIcon: "chat-list",
			tabIndex: 0,
			ariaLabel: D,
			onClick: k
		}) }))] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.closeFriendsRingColor, n = e.contact, a = e.id, i = e.noStatusInteraction, l = e.totalCount, s = e.unreadCount, c = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(a), d = o("useWAWebModelValues").useOptionalModelValues(c, ["img"]), m = o("WAWebInitialsFromNameUtils").getInitialsFromContact(n), _ = [m.firstInitial, m.secondInitial].filter(Boolean).join("");
		return u.jsx(r("WDSProfilePhoto.react"), {
			type: o("useWAWebDefaultProfileColors").getWDSProfilePhotoType(a),
			name: o("WAWebFrontendContactGetters").getFormattedName(n),
			src: d == null ? void 0 : d.img,
			size: p,
			initials: _,
			color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(a),
			customColor: o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(a),
			badge: o("WAWebStatusEphemeralBadgeUtils").getStatusRingEphemeralBadge(a),
			placeholderIcon: o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(a),
			statusRing: i ? void 0 : {
				totalCount: l,
				viewedCount: l - s,
				variant: t != null ? "closeFriends" : "default"
			},
			isDecorative: !0
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
