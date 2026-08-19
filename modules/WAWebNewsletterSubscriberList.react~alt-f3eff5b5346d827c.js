__d("WAWebNewsletterSubscriberList.react", [
	"fbt",
	"WAWebChatContact.react",
	"WAWebContactGetters",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebNewsletterAdminProfilePicture.react",
	"WAWebUserPrefsMeUser",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		italic: {
			fontStyle: "x1k4tb9n",
			$$css: !0
		},
		copyLink: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			height: "x1vqgdyp",
			width: "x100vrsf",
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		lastRow: {
			width: "xh8yej3",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "x1y55ic2",
			marginTop: "x98l61r",
			$$css: !0
		},
		center: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		start: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		lastRowLabel: {
			color: "xhslqc4",
			width: "xh8yej3",
			fontSize: "x1f6kntn",
			lineHeight: "xx6cpbe",
			$$css: !0
		},
		copyIcon: {
			color: "x1awj2ng",
			$$css: !0
		}
	}, m = o("WAWebChatContact.react").ContactFactory();
	function p(e) {
		var t = e.text, n = e.textAlign;
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: [
				o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
				d.lastRow,
				d[n]
			],
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				direction: "auto",
				text: t,
				titlify: !0,
				xstyle: [d.lastRowLabel, o("WDSPaddings.stylex").wdsPaddings.paddingHor20]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return u.jsx(o("WAWebEmojiText.react").EmojiText, {
			breakWord: !0,
			direction: "auto",
			text: s._(
				/*BTDS*/
				""
			),
			titlify: !0,
			xstyle: d.italic
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e, t) {
		var n;
		return !(o("WAWebUserPrefsMeUser").isMeAccount(e) && (n = t == null ? void 0 : t.iAmOwner()) != null && n);
	}
	function g(e) {
		var t = e.active, n = e.handleContactClick, r = e.handleContactContextMenu, a = e.newsletter, i = e.subscriberData, l = c(function() {
			var e;
			return f((e = i.contact) == null ? void 0 : e.id, a == null ? void 0 : a.newsletterMetadata);
		}, [i, a]), s = i.adminProfile, d = i.contact;
		if (d == null) return null;
		var p = h(s, d), _ = s ? u.jsx(o("WAWebNewsletterAdminProfilePicture.react").WAWebNewsletterAdminProfilePicture, {
			newsletterAdminProfile: s,
			theme: o("WAWebNewsletterAdminProfilePicture.react").NewsletterAdminProfilePictureTheme.CONTACT_LIST
		}) : null;
		return u.jsx(m, {
			active: t,
			contact: d,
			contextEnabled: l,
			contextMenu: !0,
			isPendingParticipant: i.isPendingAdmin,
			secondaryAvatar: _,
			newsletterMembershipType: i.role,
			onClick: n,
			onContext: r,
			secondary: p,
			theme: "chat-info"
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		return e != null ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: "auto",
			text: e.name,
			titlify: !0
		}) : o("WAWebContactGetters").getIsMe(t) ? u.jsx(_, {}) : null;
	}
	h.displayName = h.name + " [from " + i.id + "]", l.NewsletterSubListLastRow = p, l.YouArentVisibleToYourFollowersLabel = _, l.showContextForCell = f, l.NewsletterSubscriber = g;
}), 226);
