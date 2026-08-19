__d("WAWebUnknownContactSection.react", [
	"fbt",
	"JSResourceForInteraction",
	"WALogger",
	"WAWebAddContactLabel",
	"WAWebApiContact",
	"WAWebBlocklistCollection",
	"WAWebCellFrame.react",
	"WAWebChatContactUtils",
	"WAWebContactCollection",
	"WAWebContactManagementGating",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebLazyLoadedRetriable",
	"WAWebMiscGatingUtils",
	"WAWebPhoneNumberSearch",
	"WAWebPhoneUtils",
	"WAWebProfileImage.react",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebPsaVerifiedIcon.react",
	"WAWebSectionHeader.react",
	"WAWebTabOrder",
	"WAWebUsernameGatingUtils",
	"WDSIconIcPersonAdd.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useMemo, p = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await Promise.all([
			r("JSResourceForInteraction")("WAWebContactEditUtils").__setRef("WAWebUnknownContactSection.react").load(),
			r("JSResourceForInteraction")("WAWebContactLogging").__setRef("WAWebUnknownContactSection.react").load(),
			r("JSResourceForInteraction")("WAWebContactUtils").__setRef("WAWebUnknownContactSection.react").load()
		]), t = e[0], n = e[1], o = e[2];
		return {
			editUtils: t,
			logging: n,
			contactUtils: o
		};
	}, "AddContactNewChat"), _ = { overrideEllipsifyFlexGrow: {
		flexGrow: "x1c4vz4f",
		$$css: !0
	} };
	function f(e) {
		var t = e.onUnknownContactClick, n = e.username, a = "@" + n, i = d.jsx(r("WAWebProfileImage.react"), {});
		return d.jsxs(d.Fragment, { children: [d.jsx(r("WAWebSectionHeader.react"), { header: r("WAWebFbtCommon")("Not in your contacts") }, "not-in-your-contacts-header"), d.jsx(r("WAWebCellFrame.react"), {
			image: i,
			primary: a,
			onClick: t,
			focusable: !0,
			tabIndex: 0,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST
		})] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n, a = t.contactInfo, i = t.disableHeader, l = i === void 0 ? !1 : i, c = t.extraDetail, g = t.onUnknownContactClick, h = t.searchText, y = m(function() {
			return h != null && o("WAWebPhoneNumberSearch").isPhoneNumberLike(h);
		}, [h]);
		if (a.wid == null) return o("WAWebUsernameGatingUtils").usernameSearchEnabled() ? d.jsx(f, {
			username: a.username,
			onUnknownContactClick: g
		}) : null;
		var C = a.chat, b = a.isBusiness, v = a.username, S = a.verifiedLevel, R = a.verifiedName, L = a.wid, E = (n = C == null ? void 0 : C.contact.isContactBlocked) != null ? n : !!o("WAWebBlocklistCollection").BlocklistCollection.get(L), k = d.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: L,
			waitIdle: !0
		}), I = {
			xstyle: _.overrideEllipsifyFlexGrow,
			ellipsify: !0,
			titlify: !0,
			breakWord: !0,
			direction: "auto"
		}, T, D;
		if (o("WAWebUsernameGatingUtils").usernameSearchEnabled() && v != null) T = "@" + v, y && (D = s._(
			/*BTDS*/
			""
		));
		else if (!L.isLid()) T = o("WAWebPhoneUtils").formatPhone(L.user);
		else {
			var x, $ = (x = o("WAWebApiContact").getPhoneNumber(L)) == null ? void 0 : x.user;
			$ != null ? T = o("WAWebPhoneUtils").formatPhone($) : (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[UnknownContactSection] PN null for remote LID search"]))).sendLogs("unknownContactSection-pn-null-for-remote-search"), T = s._(
				/*BTDS*/
				""
			));
		}
		var P = d.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({ text: T }, I));
		if (C) {
			var N = C.contact.pushname;
			if (N || (N = R != null ? R : ""), D = T != null ? T : o("WAWebChatContactUtils").getFormattedNotifyName(N), b) {
				if (S === "high") {
					var M = d.jsx("div", {
						className: "x7r5mf7 x7phf20",
						children: o("WAWebMiscGatingUtils").isBlueEnabled() ? d.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
							width: 16,
							height: 16
						}) : d.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {})
					});
					P = d.jsxs(d.Fragment, { children: [d.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({ text: R }, I)), M] });
				}
				(N == null || N === "") && (D = s._(
					/*BTDS*/
					""
				));
			}
		}
		E && (D = s._(
			/*BTDS*/
			""
		));
		var w = L.isRegularUser() && o("WAWebContactManagementGating").addContactNewChatDrawerEnabled(), A = function() {
			p().then(function(e) {
				var t, n = e.contactUtils, r = e.editUtils, a = e.logging, i = r.openContactEditDrawer, l = a.ContactSourceType, s = n.getContactDataFromContactModel, u = (t = C == null ? void 0 : C.contact) != null ? t : o("WAWebContactCollection").ContactCollection.gadd(L);
				i(s(u), l.NewChatDrawer);
			}).catch(function(e) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[add-contact] module load failed: ", ""])), e).sendLogs("add-contact-new-chat-drawer-load-failure");
			});
		}, F = o("WAWebAddContactLabel").getAddToContactsLabel(), O = w ? d.jsx(r("WDSTooltip.react"), {
			label: F,
			children: d.jsx("div", {
				className: "x1ypdohk x78zum5 x6s0dn4 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x14ug900",
				"aria-label": F,
				"data-testid": "new-chat-add-contact-btn",
				onClick: function(t) {
					t.stopPropagation(), A();
				},
				onKeyDown: function(t) {
					(t.key === "Enter" || t.key === " ") && (t.stopPropagation(), t.preventDefault(), A());
				},
				role: "button",
				tabIndex: 0,
				children: d.jsx(r("WDSIconIcPersonAdd.react"), { "aria-hidden": !0 })
			})
		}) : null, B = null;
		return O != null && c != null ? B = d.jsxs("div", {
			className: "x78zum5 x6s0dn4 x1qvou4u x1s70e7g",
			children: [O, c]
		}) : O != null ? B = O : c != null && (B = c), d.jsxs(d.Fragment, { children: [!l && d.jsx(r("WAWebSectionHeader.react"), { header: r("WAWebFbtCommon")("Not in your contacts") }, "not-in-your-contacts-header"), d.jsx(r("WAWebCellFrame.react"), {
			image: k,
			primary: P,
			secondary: D != null ? d.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({ text: D }, I)) : null,
			detail: B,
			onClick: g,
			focusable: !0,
			tabIndex: 0,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST
		})] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
