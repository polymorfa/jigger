__d("WAWebContactInfoIntegritySection.react", [
	"fbt",
	"WALogger",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebChatCollection",
	"WAWebChatInfoDrawerSection.react",
	"WAWebContactGetters",
	"WAWebDrawerButtonRefreshed.react",
	"WAWebEmojiText.react",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebReportContactDialogUtils",
	"WAWebSpamConstants",
	"WAWebUseBusinessProfile.react",
	"WAWebWid",
	"WDSIconIcBlock.react",
	"WDSIconIcThumbDown.react",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = 2;
	function m(t) {
		var n, a, i = t.contact, l = o("useWAWebContactValues").useContactValues(i.id, [
			(a = o("WAWebContactGetters")).getId,
			o("WAWebFrontendContactGetters").getFormattedUser,
			a.getIsBusiness,
			o("WAWebFrontendContactGetters").getIsContactBlocked,
			a.getIsIAS,
			o("WAWebFrontendContactGetters").getIsMyContact,
			a.getIsCAPISupportAccount
		]), u = l[0], m = l[1], p = l[2], _ = l[3], f = l[4], g = l[5], h = l[6], y = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: m,
			direction: "auto"
		}), C = (n = o("WAWebUseBusinessProfile.react").useBusinessProfile(u, ["isBizBot3p"])) != null ? n : {}, b = C.isBizBot3p, v = b === void 0 ? !1 : b, S = null;
		if (!u.isBot() && !u.isAiHub()) if (_) {
			var R = v ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", y)]
			), L = "li-unblock", E = function() {
				return o("WAWebBlockContactUtils").handleUnblock(i, o("WAWebBlockContants").BlockEntryPoint.Profile);
			}, k = v ? void 0 : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", m)]
			);
			S = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: L,
				icon: c.jsx(r("WDSIconIcBlock.react"), {}),
				maxLines: d,
				ariaLabel: k,
				onClick: E,
				children: R
			});
		} else {
			var I = async function() {
				var e = o("WAWebChatCollection").ChatCollection.get(u);
				if (e == null) {
					var t = await o("WAWebFindChatAction").findOrCreateLatestChat(i.id, "blockFromIntegritySection");
					e = t.chat;
				}
				o("WAWebBlockContactUtils").handleBlock(e, o("WAWebBlockContants").BlockEntryPoint.Profile);
			}, T = v ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", y)]
			), D = "li-block", x = v ? void 0 : s._(
				/*BTDS*/
				"",
				[s._param("contact_name", m)]
			);
			S = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: D,
				danger: !0,
				icon: c.jsx(r("WDSIconIcBlock.react"), {}),
				maxLines: d,
				ariaLabel: x,
				onClick: I,
				children: T
			});
		}
		var $ = async function() {
			var t = await o("WAWebFindChatAction").findOrCreateLatestChat(i.id, "reportFromIntegritySection"), n = t.chat;
			if (n == null) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unexpected null chat during reporting from contact info"]))), o("WAWebModalManager").ModalManager.close();
				return;
			}
			o("WAWebReportContactDialogUtils").openReportContactPopup(n, o("WAWebSpamConstants").SpamFlow.AccountInfoReport);
		}, P = f || h ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		p || (P = s._(
			/*BTDS*/
			"",
			[s._param("contact_name", y)]
		)), v && (P = s._(
			/*BTDS*/
			""
		));
		var N = p ? void 0 : s._(
			/*BTDS*/
			"",
			[s._param("contact_name", m)]
		), M;
		if (!r("WAWebWid").isPSA(u) && !u.isBot() && !u.isAiHub()) {
			var w = "li-report-spam", A = $;
			M = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: w,
				danger: !0,
				icon: c.jsx(r("WDSIconIcThumbDown.react"), {}),
				maxLines: d,
				ariaLabel: N,
				onClick: A,
				children: P
			});
		}
		return c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: [S, M] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
