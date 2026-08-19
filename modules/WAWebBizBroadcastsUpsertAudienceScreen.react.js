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
	"react",
	"react-compiler-runtime"
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
		var n = o("react-compiler-runtime").c(71), a = t.audienceConfig, i = t.chat, l = t.entryPoint, s = t.isBBCreationFlow, c = t.onBack, d = t.suggestedAudienceData, p = s === void 0 ? !1 : s, g = d == null ? void 0 : d.suggestedAudienceCardId, C = g === "active_chats" || g === "inactive_chats", b;
		if (n[0] !== i || n[1] !== (d == null ? void 0 : d.initialRecipientIds)) {
			var v;
			b = i != null ? (v = i.broadcastMetadata) == null || (v = v.recipients) == null ? void 0 : v.map(y) : d == null ? void 0 : d.initialRecipientIds, n[0] = i, n[1] = d == null ? void 0 : d.initialRecipientIds, n[2] = b;
		} else b = n[2];
		var S = b, R;
		n[3] !== i ? (R = i != null ? o("WAWebWidToJid").widToBroadcastJid(i.id) : null, n[3] = i, n[4] = R) : R = n[4];
		var L = R, E;
		if (n[5] !== g || n[6] !== i || n[7] !== C || n[8] !== S) {
			var k;
			E = i != null ? ((k = i.contact.name) == null ? void 0 : k.trim()) || "" : o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameFromRecipients(S) || (C ? o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameForCard(g, 30) : ""), n[5] = g, n[6] = i, n[7] = C, n[8] = S, n[9] = E;
		} else E = n[9];
		var I = E, T = i != null, D, x;
		n[10] !== l || n[11] !== T ? (D = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceViewed(l, T);
		}, x = [l, T], n[10] = l, n[11] = T, n[12] = D, n[13] = x) : (D = n[12], x = n[13]), m(D, x);
		var $ = _(I), P = $[0], N = $[1], M;
		n[14] !== S ? (M = new Set(S), n[14] = S, n[15] = M) : M = n[15];
		var w = _(M), A = w[0], F = w[1], O = _(!1), B = O[0], W = O[1], q;
		n[16] !== S || n[17] !== d ? (q = d != null ? new Set(S) : null, n[16] = S, n[17] = d, n[18] = q) : q = n[18];
		var U = _(q), V = U[0], H = U[1], G = h, z;
		n[19] !== S ? (z = S != null ? S : [], n[19] = S, n[20] = z) : z = n[20];
		var j;
		n[21] !== z ? (j = G(z), n[21] = z, n[22] = j) : j = n[22];
		var K = j, Q;
		n[23] !== A ? (Q = G(Array.from(A)), n[23] = A, n[24] = Q) : Q = n[24];
		var X = Q, Y = A.size < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS || B;
		d == null || d.suggestedAudienceCardId;
		var J = d == null ? void 0 : d.suggestedAudienceCardId, Z;
		n[25] !== l || n[26] !== J ? (Z = {
			entryPoint: l,
			suggestedAudienceCardId: J
		}, n[25] = l, n[26] = J, n[27] = Z) : Z = n[27];
		var ee = Z, te;
		if (n[28] !== a.kind || n[29] !== A) {
			e: {
				var ne = [];
				if (a.kind !== "pro") {
					te = ne;
					break e;
				}
				for (var re of A) {
					var oe = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(re);
					if (oe != null) {
						var ae = o("WAWebLidMigrationUtils").toPn(oe.id);
						ae != null && ne.push(ae.user);
					}
				}
				te = ne;
			}
			n[28] = a.kind, n[29] = A, n[30] = te;
		} else te = n[30];
		var ie = te, le = ie.length < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS || B, se;
		n[31] !== P || n[32] !== L || n[33] !== I || n[34] !== K || n[35] !== p || n[36] !== le || n[37] !== Y || n[38] !== ee || n[39] !== ie || n[40] !== X ? (se = function(n) {
			if ((typeof n == "object" && n !== null || typeof n == "function") && n.kind === "pro" && "onNewAudienceSuccess" in n && "subscriberPoolID" in n) {
				var t = n.onNewAudienceSuccess, o = n.subscriberPoolID;
				return u.jsx(r("WAWebBizBroadcastProUpsertAudienceSaveButton.react"), {
					broadcastListName: P,
					phoneNumbers: ie,
					isDisabled: le,
					onAudienceCreateSuccess: t,
					subscriberPoolID: o
				});
			}
			if ((typeof n == "object" && n !== null || typeof n == "function") && n.kind === "core") {
				var a = n.kind, i = babelHelpers.objectWithoutPropertiesLoose(n, e);
				return u.jsx(r("WAWebBizBroadcastsUpsertAudienceSaveButton.react"), {
					broadcastJid: L,
					contacts: X,
					broadcastListName: P,
					isBBCreationFlow: p,
					isDisabled: Y,
					onCreateAudienceSuccess: i.onNewAudienceSuccess,
					onSendBroadcast: i.onSendBroadcast,
					onUpdateAudienceSuccess: i.onUpdateAudienceSuccess,
					originalAudienceName: I,
					originalRecipientContactData: K,
					loggingContext: ee
				});
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
		}, n[31] = P, n[32] = L, n[33] = I, n[34] = K, n[35] = p, n[36] = le, n[37] = Y, n[38] = ee, n[39] = ie, n[40] = X, n[41] = se) : se = n[41];
		var ue;
		n[42] !== a || n[43] !== se ? (ue = se(a), n[42] = a, n[43] = se, n[44] = ue) : ue = n[44];
		var ce = ue, de;
		n[45] !== l || n[46] !== T || n[47] !== c ? (de = u.jsx(r("WAWebBizBroadcastsUpsertAudienceHeader.react"), {
			entryPoint: l,
			isEdit: T,
			onBack: c
		}), n[45] = l, n[46] = T, n[47] = c, n[48] = de) : de = n[48];
		var me;
		n[49] !== g || n[50] !== l || n[51] !== C || n[52] !== B || n[53] !== V || n[54] !== A ? (me = u.jsx(r("WAWebBizBroadcastsUpsertAudienceList.react"), {
			audienceCardId: g,
			eligibleRecipientIds: V,
			entryPoint: l,
			hasDurationFilter: C,
			isLoading: B,
			selectedRecipientIds: A,
			setAudienceName: N,
			setIsResolvingAudience: W,
			setResolvedRecipientIds: H,
			setSelectedRecipientIds: F
		}), n[49] = g, n[50] = l, n[51] = C, n[52] = B, n[53] = V, n[54] = A, n[55] = me) : me = n[55];
		var pe;
		n[56] !== P ? (pe = u.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
			onValueChange: N,
			value: P,
			testid: "business_broadcasts_upsert_audience_name_textfield"
		}), n[56] = P, n[57] = pe) : pe = n[57];
		var _e;
		if (n[58] !== (V == null ? void 0 : V.size) || n[59] !== A) {
			var fe;
			_e = A.size > 0 && u.jsx(r("WAWebBizBroadcastsSelectedRecipientsSection.react"), {
				selectedRecipientIds: A,
				setSelectedRecipientIds: F,
				totalRecipientCount: (fe = V == null ? void 0 : V.size) != null ? fe : o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit()
			}), n[58] = V == null ? void 0 : V.size, n[59] = A, n[60] = _e;
		} else _e = n[60];
		var ge;
		n[61] !== pe || n[62] !== _e ? (ge = u.jsxs(u.Fragment, { children: [pe, _e] }), n[61] = pe, n[62] = _e, n[63] = ge) : ge = n[63];
		var he;
		n[64] !== me || n[65] !== ge ? (he = u.jsx(r("WAWebDrawerBody.react"), {
			xstyle: f.drawerBody,
			children: u.jsx(r("WAWebBizTwoColumnLayout.react"), {
				flipResizeOrder: !0,
				primaryContent: me,
				secondaryContent: ge
			})
		}), n[64] = me, n[65] = ge, n[66] = he) : he = n[66];
		var ye;
		return n[67] !== ce || n[68] !== de || n[69] !== he ? (ye = u.jsxs(r("WAWebDrawer.react"), {
			testid: "biz-broadcasts-new-audience-screen",
			xstyle: f.container,
			children: [
				de,
				he,
				ce
			]
		}), n[67] = ce, n[68] = de, n[69] = he, n[70] = ye) : ye = n[70], ye;
	}
	function h(e) {
		var t = [];
		for (var n of e) if (n !== "") {
			var r = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(n);
			r != null && t.push({
				lid: o("WAJids").toLidUserJid(n),
				phone: o("WAWebFrontendContactGetters").getFormattedPhoneAndType(r).displayName
			});
		}
		return t;
	}
	function y(e) {
		return e.id.user;
	}
	l.default = g;
}), 98);
