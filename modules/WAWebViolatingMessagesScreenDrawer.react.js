__d("WAWebViolatingMessagesScreenDrawer.react", [
	"fbt",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebDSADateUtils",
	"WAWebDSAWhyThisHappenedInfoSection.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebEnforcementHeader.react",
	"WAWebFlex.react",
	"WAWebMsgCollection",
	"WAWebNewsletterEnforcementInformMsg.react",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"WAWebWhatThisMeansInfoSectionForChannelHidden.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useEffect, m = {
		paddingBlock36: {
			paddingTop: "xijc0j3",
			paddingBottom: "xq1608w",
			$$css: !0
		},
		paddingInline48: {
			paddingInlineStart: "x1oiqv2n",
			paddingInlineEnd: "x15zmtp0",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, p = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(21), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.chat, u = l.currentEnforcementAlert, m = l.onBack, p = l.onClickSeeOptions, _;
		if (n[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], n[3] = _) : _ = n[3], d(f, _), u.targetMsgMapForEvidence == null) return null;
		var h;
		if (n[4] !== s || n[5] !== u || n[6] !== p) {
			var y = Array.from(u.targetMsgMapForEvidence.values());
			h = y.reduce(function(e, t) {
				if (t.appealState === "CONTENT_UNAVAILABLE") return e;
				if (t.msgData != null) {
					var n = o("WAWebMsgCollection").MsgCollection.gadd(t.msgData);
					e.push(c.jsx(r("WAWebNewsletterEnforcementInformMsg.react"), {
						currentEnforcementAlert: u,
						currentEnforcementAppeal: t,
						msg: n,
						onClickSeeOptions: p,
						title: o("WAWebNewsletterIntegrityDrawerUiComponents.react").getMessageTitleForViolatingMessage(s)
					}, n.id.toString()));
				}
				return e;
			}, []), n[4] = s, n[5] = u, n[6] = p, n[7] = h;
		} else h = n[7];
		var C = h, b;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (b = {
			surface: "unknown",
			viewName: "newsletter-violating-messages"
		}, n[8] = b) : b = n[8];
		var v;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(), n[9] = v) : v = n[9];
		var S;
		n[10] !== m ? (S = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: v,
			onBack: m,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[10] = m, n[11] = S) : S = n[11];
		var R;
		n[12] !== u ? (R = c.jsx(g, { currentEnforcementAlert: u }), n[12] = u, n[13] = R) : R = n[13];
		var L;
		n[14] !== C || n[15] !== R ? (L = c.jsxs(r("WAWebDrawerBody.react"), { children: [R, C] }), n[14] = C, n[15] = R, n[16] = L) : L = n[16];
		var E;
		return n[17] !== i || n[18] !== S || n[19] !== L ? (E = c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: i,
			testid: "newsletter-violating-messages-drawer",
			tsNavigationData: b,
			children: [S, L]
		}), n[17] = i, n[18] = S, n[19] = L, n[20] = E) : E = n[20], E;
	}
	function f() {
		r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
	}
	function g(e) {
		var t, n = e.currentEnforcementAlert, a = (t = o("WAWebNewsletterIntegrityDrawerUiComponents.react")).DSAWhatYouNeedToKnowInfoSection(t.getDecisionModalCategoryForEnforcementSource(n.enforcementSource));
		return c.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: [
				p.container,
				m.paddingBlock36,
				m.paddingInline48,
				o("WDSMargins.stylex").wdsMargins.marginBottom0
			],
			children: [
				c.jsx(r("WAWebEnforcementHeader.react"), { enforcementType: o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG }),
				c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
						weight: "medium",
						xstyle: p.header,
						padding: 16,
						color: "primary",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				c.jsx(t.SubHeaderTitle, { content: o("WAWebDSADateUtils").getDSADateDisplayString(n.enforcementCreationTime.toString()) }),
				c.jsx(r("WAWebWhatThisMeansInfoSectionForChannelHidden.react"), {}),
				c.jsx(r("WAWebDSAWhyThisHappenedInfoSection.react"), {
					enforcementType: n.enforcementType,
					enforcementSource: n.enforcementSource
				}),
				c.jsx(t.InfoSection, { section: a }, a.key)
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = _;
}), 226);
