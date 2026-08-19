__d("WAWebBizBroadcastsUpsertAudienceScreen.react", [
	"WAJids",
	"WAWebBizBroadcastProUpsertAudienceSaveButton.react",
	"WAWebBizBroadcastRecipientLimitCommon",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBizBroadcastsSelectedRecipientsSection.react",
	"WAWebBizBroadcastsUpsertAudienceHeader.react",
	"WAWebBizBroadcastsUpsertAudienceList.react",
	"WAWebBizBroadcastsUpsertAudienceSaveButton.react",
	"WAWebBizTwoColumnLayout.react",
	"WAWebBroadcastAudienceNameFieldCard.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebFrontendContactGetters",
	"WAWebLidMigrationUtils",
	"WAWebWidToJid",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["kind"], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useState, f = {
		container: {
			marginInlineStart: "x1sbwfh8",
			$$css: !0
		},
		drawerBody: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		}
	};
	function g(t) {
		var n, a, i, l = t.audienceConfig, s = t.chat, c = t.entryPoint, g = t.isBBCreationFlow, h = g === void 0 ? !1 : g, y = t.onBack, C = t.suggestedAudienceData, b = C == null ? void 0 : C.suggestedAudienceCardId, v = b === "active_chats" || b === "inactive_chats", S = s != null ? (n = s.broadcastMetadata) == null || (n = n.recipients) == null ? void 0 : n.map(function(e) {
			return e.id.user;
		}) : C == null ? void 0 : C.initialRecipientIds, R = s != null ? o("WAWebWidToJid").widToBroadcastJid(s.id) : null, L = s != null ? ((a = s.contact.name) == null ? void 0 : a.trim()) || "" : o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameFromRecipients(S) || (v ? o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameForCard(b, 30) : ""), E = s != null;
		m(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceViewed(c, E);
		}, [c, E]);
		var k = _(L), I = k[0], T = k[1], D = _(new Set(S)), x = D[0], $ = D[1], P = _(!1), N = P[0], M = P[1], w = _(C != null ? new Set(S) : null), A = w[0], F = w[1], O = d(function(e) {
			var t = [];
			for (var n of e) if (n !== "") {
				var r = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(n);
				r != null && t.push({
					lid: o("WAJids").toLidUserJid(n),
					phone: o("WAWebFrontendContactGetters").getFormattedPhoneAndType(r).displayName
				});
			}
			return t;
		}, []), B = O(S != null ? S : []), W = O(Array.from(x)), q = x.size < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS || N, U = p(function() {
			return {
				entryPoint: c,
				suggestedAudienceCardId: C == null ? void 0 : C.suggestedAudienceCardId
			};
		}, [c, C == null ? void 0 : C.suggestedAudienceCardId]), V = p(function() {
			var e = [];
			if (l.kind !== "pro") return e;
			for (var t of x) {
				var n = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(t);
				if (n != null) {
					var r = o("WAWebLidMigrationUtils").toPn(n.id);
					r != null && e.push(r.user);
				}
			}
			return e;
		}, [l.kind, x]), H = V.length < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS || N, G = (function(t) {
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.kind === "pro" && "onNewAudienceSuccess" in t && "subscriberPoolID" in t) {
				var n = t.onNewAudienceSuccess, o = t.subscriberPoolID;
				return u.jsx(r("WAWebBizBroadcastProUpsertAudienceSaveButton.react"), {
					broadcastListName: I,
					phoneNumbers: V,
					isDisabled: H,
					onAudienceCreateSuccess: n,
					subscriberPoolID: o
				});
			}
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.kind === "core") {
				var a = t.kind, i = babelHelpers.objectWithoutPropertiesLoose(t, e);
				return u.jsx(r("WAWebBizBroadcastsUpsertAudienceSaveButton.react"), {
					broadcastJid: R,
					contacts: W,
					broadcastListName: I,
					isBBCreationFlow: h,
					isDisabled: q,
					onCreateAudienceSuccess: i.onNewAudienceSuccess,
					onSendBroadcast: i.onSendBroadcast,
					onUpdateAudienceSuccess: i.onUpdateAudienceSuccess,
					originalAudienceName: L,
					originalRecipientContactData: B,
					loggingContext: U
				});
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})(l);
		return u.jsxs(r("WAWebDrawer.react"), {
			testid: "biz-broadcasts-new-audience-screen",
			xstyle: f.container,
			children: [
				u.jsx(r("WAWebBizBroadcastsUpsertAudienceHeader.react"), {
					entryPoint: c,
					isEdit: E,
					onBack: y
				}),
				u.jsx(r("WAWebDrawerBody.react"), {
					xstyle: f.drawerBody,
					children: u.jsx(r("WAWebBizTwoColumnLayout.react"), {
						flipResizeOrder: !0,
						primaryContent: u.jsx(r("WAWebBizBroadcastsUpsertAudienceList.react"), {
							audienceCardId: b,
							eligibleRecipientIds: A,
							entryPoint: c,
							hasDurationFilter: v,
							isLoading: N,
							selectedRecipientIds: x,
							setAudienceName: T,
							setIsResolvingAudience: M,
							setResolvedRecipientIds: F,
							setSelectedRecipientIds: $
						}),
						secondaryContent: u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
							onValueChange: T,
							value: I,
							testid: "business_broadcasts_upsert_audience_name_textfield"
						}), x.size > 0 && u.jsx(r("WAWebBizBroadcastsSelectedRecipientsSection.react"), {
							selectedRecipientIds: x,
							setSelectedRecipientIds: $,
							totalRecipientCount: (i = A == null ? void 0 : A.size) != null ? i : o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit()
						})] })
					})
				}),
				G
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
