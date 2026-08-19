__d("WAWebNewsletterSubscriberList.react", [
	"fbt",
	"WAWebChatContact.react",
	"WAWebContactGetters",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebNewsletterAdminProfilePicture.react",
	"WAWebUserPrefsMeUser",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(8), n = e.text, r = e.textAlign, a = d[r], i;
		t[0] !== a ? (i = [
			o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
			d.lastRow,
			a
		], t[0] = a, t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = [d.lastRowLabel, o("WDSPaddings.stylex").wdsPaddings.paddingHor20], t[2] = l) : l = t[2];
		var s;
		t[3] !== n ? (s = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: "auto",
			text: n,
			titlify: !0,
			xstyle: l
		}), t[3] = n, t[4] = s) : s = t[4];
		var c;
		return t[5] !== i || t[6] !== s ? (c = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: i,
			children: s
		}), t[5] = i, t[6] = s, t[7] = c) : c = t[7], c;
	}
	function _() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			breakWord: !0,
			direction: "auto",
			text: s._(
				/*BTDS*/
				""
			),
			titlify: !0,
			xstyle: d.italic
		}), e[0] = t) : t = e[0], t;
	}
	function f(e, t) {
		var n;
		return !(o("WAWebUserPrefsMeUser").isMeAccount(e) && (n = t == null ? void 0 : t.iAmOwner()) != null && n);
	}
	function g(e) {
		var t, n = o("react-compiler-runtime").c(18), r = e.active, a = e.handleContactClick, i = e.handleContactContextMenu, l = e.newsletter, s = e.subscriberData, c;
		if (n[0] !== (l == null ? void 0 : l.newsletterMetadata) || n[1] !== ((t = s.contact) == null ? void 0 : t.id)) {
			var d;
			c = function() {
				var e;
				return f((e = s.contact) == null ? void 0 : e.id, l == null ? void 0 : l.newsletterMetadata);
			}, n[0] = l == null ? void 0 : l.newsletterMetadata, n[1] = (d = s.contact) == null ? void 0 : d.id, n[2] = c;
		} else c = n[2];
		var p = c, _ = s.adminProfile, g = s.contact;
		if (g == null) return null;
		var y;
		n[3] !== _ || n[4] !== g ? (y = h(_, g), n[3] = _, n[4] = g, n[5] = y) : y = n[5];
		var C = y, b;
		n[6] !== _ ? (b = _ ? u.jsx(o("WAWebNewsletterAdminProfilePicture.react").WAWebNewsletterAdminProfilePicture, {
			newsletterAdminProfile: _,
			theme: o("WAWebNewsletterAdminProfilePicture.react").NewsletterAdminProfilePictureTheme.CONTACT_LIST
		}) : null, n[6] = _, n[7] = b) : b = n[7];
		var v = b, S;
		return n[8] !== r || n[9] !== g || n[10] !== a || n[11] !== i || n[12] !== C || n[13] !== v || n[14] !== p || n[15] !== s.isPendingAdmin || n[16] !== s.role ? (S = u.jsx(m, {
			active: r,
			contact: g,
			contextEnabled: p,
			contextMenu: !0,
			isPendingParticipant: s.isPendingAdmin,
			secondaryAvatar: v,
			newsletterMembershipType: s.role,
			onClick: a,
			onContext: i,
			secondary: C,
			theme: "chat-info"
		}), n[8] = r, n[9] = g, n[10] = a, n[11] = i, n[12] = C, n[13] = v, n[14] = p, n[15] = s.isPendingAdmin, n[16] = s.role, n[17] = S) : S = n[17], S;
	}
	function h(e, t) {
		return e != null ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: "auto",
			text: e.name,
			titlify: !0
		}) : o("WAWebContactGetters").getIsMe(t) ? u.jsx(_, {}) : null;
	}
	h.displayName = h.name + " [from " + i.id + "]", l.NewsletterSubListLastRow = p, l.YouArentVisibleToYourFollowersLabel = _, l.showContextForCell = f, l.NewsletterSubscriber = g;
}), 226);
