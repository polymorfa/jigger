__d("useWAWebNewsletterSubscribersContextMenu", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterStrings",
	"WAWebDropdownItem.react",
	"WAWebModalManager",
	"WAWebNewsletterAdminSelectionFlow.react",
	"WAWebNewsletterDismissAdminPopup.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterRevokeInvitePopup.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsMeUser",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(15), n = e.chat, a = e.followerInformation, i = e.isFullModal, l = e.newsletter, d = e.onTransferOwnershipSelection, m = e.onVerification, p = l == null ? void 0 : l.newsletterMetadata, _ = c(null), f = _[0], g = _[1], h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = [], t[0] = h) : h = t[0];
		var y = h, C;
		t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== l || t[5] !== p || t[6] !== d || t[7] !== m ? (C = function(t, c) {
			var e, _, f = a.get(c.id), h = s._(
				/*BTDS*/
				""
			), C = function() {
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebNewsletterDismissAdminPopup.react"), {
					isMe: o("WAWebUserPrefsMeUser").isMeAccount(c.id),
					contact: c,
					newsletter: l
				}));
			}, b = function() {
				o("WAWebNewsletterAdminSelectionFlow.react").startAdminInviteFlow({
					chat: n,
					invitees: [c]
				});
			}, v = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "newsletter-dismiss-as-admin",
				action: C,
				children: h
			}, "newsletter-dismiss-as-admin"), S = l == null || (e = l.newsletterMetadata) == null || (e = e.pendingAdmins) == null ? void 0 : e.get(c.id);
			if (!o("WAWebUserPrefsMeUser").isMeAccount(c.id)) {
				var R;
				if ((R = p == null ? void 0 : p.iAmOwner()) != null && R && o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()) {
					if (S != null) {
						var L = s._(
							/*BTDS*/
							""
						), E = function() {
							o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterRevokeInvitePopup.react").NewsletterRevokeInvitePopupWithContactName, {
								contact: c,
								chat: l
							}));
						};
						y.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
							testid: "newsletter-revoke-invite",
							action: E,
							children: L
						}, "newsletter-revoke-invite"));
					} else if ((f == null ? void 0 : f.newsletterRole) === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin) {
						y.push(v);
						var k = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
							testid: "newsletter-transfer-ownership",
							action: function() {
								d == null || d(c);
							},
							children: o("WAWebCommonNewsletterStrings").getNewsletterTransferOwnershipText()
						}, "newsletter-transfer-ownership");
						y.push(k);
					} else if (S == null) {
						var I = s._(
							/*BTDS*/
							""
						);
						y.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
							testid: "newsletter-invite-as-channel-admin",
							action: b,
							children: I
						}, "newsletter-invite-as-channel-admin"));
					}
				}
				var T = function() {
					m(c);
				}, D = s._(
					/*BTDS*/
					""
				);
				y.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "newsletter-verify-identify",
					action: T,
					children: D
				}, "newsletter-verify-identity"));
			}
			(_ = p == null ? void 0 : p.iAmAdmin()) != null && _ && o("WAWebUserPrefsMeUser").isMeAccount(c.id) && o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() && y.push(v);
			var x = t.type === "click" ? void 0 : t.target, $ = t.anchor ? void 0 : t;
			g({
				contactId: c.id,
				menu: y,
				anchor: i ? x : t.anchor,
				event: i ? $ : t.event
			});
		}, t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = p, t[6] = d, t[7] = m, t[8] = C) : C = t[8];
		var b = C, v;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			g(null);
		}, t[9] = v) : v = t[9];
		var S = v, R;
		if (f) {
			var L;
			t[10] !== f ? (L = u.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "NewsletterSubscribersContextMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: S,
				children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f })
			}), t[10] = f, t[11] = L) : L = t[11], R = L;
		}
		var E;
		return t[12] !== b || t[13] !== R ? (E = [R, b], t[12] = b, t[13] = R, t[14] = E) : E = t[14], E;
	}
	l.useNewsletterSubscribersContextMenu = d;
}), 226);
