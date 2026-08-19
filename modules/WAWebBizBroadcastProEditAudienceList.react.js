__d("WAWebBizBroadcastProEditAudienceList.react", [
	"fbt",
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceList_query.graphql",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebBizBroadcastsAudienceStrings",
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebBizBroadcastsRecipientRow.react",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBizCard.react",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebPhoneUtils",
	"WDSBaseCheckbox.react",
	"WDSButton.react",
	"WDSSearchBar.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebStaticButtonA11y"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useState, f = 56, g = 20, h = e !== void 0 ? e : e = n("WAWebBizBroadcastProEditAudienceList_query.graphql"), y = {
		cardContainer: {
			minHeight: "x2lwn1j",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		emptyContainer: {
			paddingTop: "xl7twdi",
			paddingBottom: "xvg22vi",
			$$css: !0
		},
		loadMoreContainer: {
			flexShrink: "x2lah0s",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function C(e) {
		var t, n, a = o("react-compiler-runtime").c(43), i = e.currentAudienceSize, l = e.fragmentRef, u = e.phoneNumbersAdded, d = e.phoneNumbersRemoved, m = e.setPhoneNumbersAdded, p = e.setPhoneNumbersRemoved, C = o("CometRelay").usePaginationFragment(h, l), E = C.data, k = C.hasNext, I = C.isLoadingNext, T = C.loadNext, D = _(""), x = D[0], $ = D[1], P = _(R), N = P[0];
		(t = E.xfb_whatsapp_subscriber_list_members) == null || t.edges;
		var M;
		if (a[0] !== ((n = E.xfb_whatsapp_subscriber_list_members) == null ? void 0 : n.edges)) {
			var w, A, F;
			M = ((w = (A = E.xfb_whatsapp_subscriber_list_members) == null ? void 0 : A.edges) != null ? w : []).map(S).filter(Boolean), a[0] = (F = E.xfb_whatsapp_subscriber_list_members) == null ? void 0 : F.edges, a[1] = M;
		} else M = a[1];
		var O = M, B;
		a[2] !== I || a[3] !== T ? (B = function() {
			I || T(g);
		}, a[2] = I, a[3] = T, a[4] = B) : B = a[4];
		var W = B, q;
		a[5] !== O ? (q = new Set(O), a[5] = O, a[6] = q) : q = a[6];
		var U = q, V;
		a[7] !== U || a[8] !== u || a[9] !== d ? (V = function(t) {
			return u.has(t) || U.has(t) && !d.has(t);
		}, a[7] = U, a[8] = u, a[9] = d, a[10] = V) : V = a[10];
		var H = V, G = v;
		o("WAWebContactCollection").ContactCollection.ensureSorted();
		var z;
		if (a[11] !== O || a[12] !== H || a[13] !== x) {
			var j = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
				filterFn: null,
				showMe: !1,
				showWithoutName: !0
			}).filter(b), K = new Set(j.map(G).filter(Boolean)), Q = [].concat(j.flatMap(function(e) {
				var t = G(e);
				return t != null ? [{
					contact: e,
					contactId: t
				}] : [];
			}), O.filter(function(e) {
				return !K.has(e);
			}).map(function(e) {
				var t = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(e), n = t != null ? G(t) : null;
				return t != null && !t.isUsernameContact && n != null ? {
					contact: t,
					contactId: n
				} : {
					contact: null,
					contactId: e
				};
			})), X = new Set(), Y = Q.filter(function(e) {
				var t = e.contactId;
				return X.has(t) ? !1 : (X.add(t), !0);
			}), J = x.trim().toLowerCase();
			z = Y.filter(function(e) {
				var t, n = e.contact, r = e.contactId;
				if (J === "") return !0;
				var a = n != null && (t = o("WAWebFrontendContactGetters").getDisplayName(n)) != null ? t : "";
				return a.toLowerCase().includes(J) || r.includes(J);
			}).map(function(e) {
				var t = e.contact, n = e.contactId, r = H(n);
				return {
					contact: t,
					contactId: n,
					contentKey: n + ":" + String(r),
					isSelected: r,
					itemKey: n
				};
			}), a[11] = O, a[12] = H, a[13] = x, a[14] = z;
		} else z = a[14];
		var Z = z, ee;
		a[15] !== i || a[16] !== H || a[17] !== U || a[18] !== u.size || a[19] !== d || a[20] !== m || a[21] !== p ? (ee = function(t) {
			var e = U.has(t), n = H(t);
			if (n) m(function(e) {
				if (!e.has(t)) return e;
				var n = new Set(e);
				return n.delete(t), n;
			}), e && p(function(e) {
				return new Set(e).add(t);
			});
			else {
				var r = i + u.size - d.size;
				if (r >= o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit()) return;
				p(function(e) {
					if (!e.has(t)) return e;
					var n = new Set(e);
					return n.delete(t), n;
				}), e || m(function(e) {
					return new Set(e).add(t);
				});
			}
		}, a[15] = i, a[16] = H, a[17] = U, a[18] = u.size, a[19] = d, a[20] = m, a[21] = p, a[22] = ee) : ee = a[22];
		var te = ee, ne;
		a[23] !== te ? (ne = function(t, n) {
			return t.contact != null ? c.jsx(r("WAWebBizBroadcastsRecipientRow.react"), {
				contact: t.contact,
				contactId: t.contactId,
				index: n,
				isSelected: t.isSelected,
				onToggle: te
			}) : c.jsx(L, {
				index: n,
				isSelected: t.isSelected,
				onToggle: te,
				phoneNumber: t.contactId
			});
		}, a[23] = te, a[24] = ne) : ne = a[24];
		var re = ne, oe;
		a[25] !== N || a[26] !== re || a[27] !== Z || a[28] !== x ? (oe = Z.length === 0 ? c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			testid: "biz-broadcast-pro-edit-audience-empty-state",
			xstyle: y.emptyContainer,
			children: c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsAudienceStrings").getEmptyStateMessage(x.trim(), !1)
			})
		}) : c.jsx(r("WAWebFlatListContainer.react"), {
			className: "x1iyjqo2 x2lwn1j x6ikm8r x1odjw0f",
			flatListControllers: [N],
			children: c.jsx(o("WAWebFlatList.react").FlatList, {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				data: Z,
				defaultItemHeight: f,
				direction: "vertical",
				flatListController: N,
				forceConsistentRenderCount: !1,
				renderItem: re,
				testid: "biz-broadcast-pro-edit-audience-list"
			})
		}), a[25] = N, a[26] = re, a[27] = Z, a[28] = x, a[29] = oe) : oe = a[29];
		var ae = oe, ie;
		a[30] === Symbol.for("react.memo_cache_sentinel") ? (ie = o("WAWebBizBroadcastsAudienceSelectionStrings").getChooseRecipientsHeader(), a[30] = ie) : ie = a[30];
		var le;
		a[31] === Symbol.for("react.memo_cache_sentinel") ? (le = { className: "x2lah0s x1tiyuxx x1nbhmlj x4tra6z x1j8ymqv" }, a[31] = le) : le = a[31];
		var se;
		a[32] === Symbol.for("react.memo_cache_sentinel") ? (se = s._(
			/*BTDS*/
			""
		), a[32] = se) : se = a[32];
		var ue;
		a[33] !== x ? (ue = c.jsx("div", babelHelpers.extends({ "data-testid": "biz-broadcast-pro-edit-audience-search-container" }, le, { children: c.jsx(r("WDSSearchBar.react"), {
			hintText: se,
			onValueChange: $,
			platform: "windowsWeb",
			value: x,
			testid: "business_broadcasts_audience_search_bar"
		}) })), a[33] = x, a[34] = ue) : ue = a[34];
		var ce;
		a[35] !== W || a[36] !== k || a[37] !== I ? (ce = k ? c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			testid: "biz_broadcast_pro_edit_audience_load_more_container",
			xstyle: y.loadMoreContainer,
			children: c.jsx(r("WDSButton.react"), {
				variant: "outline",
				size: "medium",
				type: "default",
				loading: I,
				onPress: W,
				label: s._(
					/*BTDS*/
					""
				),
				testid: "biz_broadcast_pro_edit_audience_load_more_button"
			})
		}) : null, a[35] = W, a[36] = k, a[37] = I, a[38] = ce) : ce = a[38];
		var de;
		return a[39] !== ae || a[40] !== ue || a[41] !== ce ? (de = c.jsx(r("WAWebBizCard.react"), {
			header: ie,
			headerTestid: "biz-broadcasts-upsert-audience-table-header",
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				testid: "biz-broadcast-pro-edit-audience-card",
				xstyle: y.cardContainer,
				children: [
					ue,
					ae,
					ce
				]
			})
		}), a[39] = ae, a[40] = ue, a[41] = ce, a[42] = de) : de = a[42], de;
	}
	function b(e) {
		return !e.isUsernameContact;
	}
	function v(e) {
		var t = e.id.isLid() ? e.phoneNumber : e.id;
		return t == null ? void 0 : t.user;
	}
	function S(e) {
		var t;
		return e == null || (t = e.node) == null ? void 0 : t.phone_number;
	}
	function R() {
		return new (r("WAWebFlatListController"))();
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(35), n = e.index, a = e.isSelected, i = e.onToggle, l = e.phoneNumber, u = o("WAWebPhoneUtils").formatPhone(l), d;
		t[0] !== i || t[1] !== l ? (d = function() {
			return i(l);
		}, t[0] = i, t[1] = l, t[2] = d) : d = t[2];
		var m = d, p = r("useWAWebStaticButtonA11y")(m), _ = p[0], f = p[1], g = "biz-broadcast-pro-edit-audience-phone-row-" + n, h;
		t[3] !== a ? (h = {
			0: { className: "x1n67ipk xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 xh8yej3" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 xh8yej3 x1h3rtpe" }
		}[!!a << 0], t[3] = a, t[4] = h) : h = t[4];
		var y = o("WAWebFlex.react").FlexRow, C = "center", b;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1iw51ew xde1mab x3hqpx7" }, t[5] = b) : b = t[5];
		var v = o("WAWebFlex.react").FlexRow, S = "center", R = 12, L = r("WDSBaseCheckbox.react"), E = s._(
			/*BTDS*/
			"",
			[s._param("recipient phone number", u)]
		), k = "biz-broadcast-pro-edit-audience-phone-checkbox-" + n, I;
		t[6] !== L || t[7] !== a || t[8] !== E || t[9] !== k ? (I = c.jsx(L, {
			"aria-label": E,
			tabIndex: -1,
			value: a,
			testid: k
		}), t[6] = L, t[7] = a, t[8] = E, t[9] = k, t[10] = I) : I = t[10];
		var T;
		t[11] !== n ? (T = c.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
			contact: null,
			index: n
		}), t[11] = n, t[12] = T) : T = t[12];
		var D;
		t[13] !== v || t[14] !== I || t[15] !== T ? (D = c.jsxs(v, {
			align: S,
			gap: R,
			children: [I, T]
		}), t[13] = v, t[14] = I, t[15] = T, t[16] = D) : D = t[16];
		var x;
		t[17] !== D || t[18] !== b ? (x = c.jsx("div", babelHelpers.extends({}, b, { children: D })), t[17] = D, t[18] = b, t[19] = x) : x = t[19];
		var $;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "xvtqlqk x3hqpx7" }, t[20] = $) : $ = t[20];
		var P = "biz-broadcast-pro-edit-audience-phone-number-" + n, N;
		t[21] !== u || t[22] !== P ? (N = c.jsx("div", babelHelpers.extends({}, $, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body1",
			maxLines: 1,
			testid: P,
			children: u
		}) })), t[21] = u, t[22] = P, t[23] = N) : N = t[23];
		var M;
		t[24] !== y || t[25] !== x || t[26] !== N ? (M = c.jsxs(y, {
			align: C,
			children: [x, N]
		}), t[24] = y, t[25] = x, t[26] = N, t[27] = M) : M = t[27];
		var w;
		return t[28] !== _ || t[29] !== a || t[30] !== f || t[31] !== M || t[32] !== g || t[33] !== h ? (w = c.jsx("div", babelHelpers.extends({
			ref: _,
			"data-testid": g
		}, h, { "aria-pressed": a }, f, { children: M })), t[28] = _, t[29] = a, t[30] = f, t[31] = M, t[32] = g, t[33] = h, t[34] = w) : w = t[34], w;
	}
	l.default = C;
}), 226);
