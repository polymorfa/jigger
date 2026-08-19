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
		var t, n = e.currentAudienceSize, a = e.fragmentRef, i = e.phoneNumbersAdded, l = e.phoneNumbersRemoved, u = e.setPhoneNumbersAdded, d = e.setPhoneNumbersRemoved, C = o("CometRelay").usePaginationFragment(h, a), v = C.data, S = C.hasNext, R = C.isLoadingNext, L = C.loadNext, E = _(""), k = E[0], I = E[1], T = _(function() {
			return new (r("WAWebFlatListController"))();
		}), D = T[0], x = p(function() {
			var e, t;
			return ((e = (t = v.xfb_whatsapp_subscriber_list_members) == null ? void 0 : t.edges) != null ? e : []).map(function(e) {
				var t;
				return e == null || (t = e.node) == null ? void 0 : t.phone_number;
			}).filter(Boolean);
		}, [(t = v.xfb_whatsapp_subscriber_list_members) == null ? void 0 : t.edges]), $ = m(function() {
			R || L(g);
		}, [R, L]), P = p(function() {
			return new Set(x);
		}, [x]), N = m(function(e) {
			return i.has(e) || P.has(e) && !l.has(e);
		}, [
			P,
			i,
			l
		]), M = m(function(e) {
			var t = e.id.isLid() ? e.phoneNumber : e.id;
			return t == null ? void 0 : t.user;
		}, []), w = p(function() {
			o("WAWebContactCollection").ContactCollection.ensureSorted();
			var e = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
				filterFn: null,
				showMe: !1,
				showWithoutName: !0
			}).filter(function(e) {
				return !e.isUsernameContact;
			}), t = new Set(e.map(M).filter(Boolean)), n = [].concat(e.flatMap(function(e) {
				var t = M(e);
				return t != null ? [{
					contact: e,
					contactId: t
				}] : [];
			}), x.filter(function(e) {
				return !t.has(e);
			}).map(function(e) {
				var t = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(e), n = t != null ? M(t) : null;
				return t != null && !t.isUsernameContact && n != null ? {
					contact: t,
					contactId: n
				} : {
					contact: null,
					contactId: e
				};
			})), r = new Set(), a = n.filter(function(e) {
				var t = e.contactId;
				return r.has(t) ? !1 : (r.add(t), !0);
			}), i = k.trim().toLowerCase();
			return a.filter(function(e) {
				var t, n = e.contact, r = e.contactId;
				if (i === "") return !0;
				var a = n != null && (t = o("WAWebFrontendContactGetters").getDisplayName(n)) != null ? t : "";
				return a.toLowerCase().includes(i) || r.includes(i);
			}).map(function(e) {
				var t = e.contact, n = e.contactId, r = N(n);
				return {
					contact: t,
					contactId: n,
					contentKey: n + ":" + String(r),
					isSelected: r,
					itemKey: n
				};
			});
		}, [
			x,
			M,
			N,
			k
		]), A = m(function(e) {
			var t = P.has(e), r = N(e);
			if (r) u(function(t) {
				if (!t.has(e)) return t;
				var n = new Set(t);
				return n.delete(e), n;
			}), t && d(function(t) {
				return new Set(t).add(e);
			});
			else {
				var a = n + i.size - l.size;
				if (a >= o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit()) return;
				d(function(t) {
					if (!t.has(e)) return t;
					var n = new Set(t);
					return n.delete(e), n;
				}), t || u(function(t) {
					return new Set(t).add(e);
				});
			}
		}, [
			n,
			N,
			P,
			i,
			l,
			u,
			d
		]), F = m(function(e, t) {
			return e.contact != null ? c.jsx(r("WAWebBizBroadcastsRecipientRow.react"), {
				contact: e.contact,
				contactId: e.contactId,
				index: t,
				isSelected: e.isSelected,
				onToggle: A
			}) : c.jsx(b, {
				index: t,
				isSelected: e.isSelected,
				onToggle: A,
				phoneNumber: e.contactId
			});
		}, [A]), O = !1, B = w.length === 0 ? c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			testid: "biz-broadcast-pro-edit-audience-empty-state",
			xstyle: y.emptyContainer,
			children: c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsAudienceStrings").getEmptyStateMessage(k.trim(), O)
			})
		}) : c.jsx(r("WAWebFlatListContainer.react"), {
			className: "x1iyjqo2 x2lwn1j x6ikm8r x1odjw0f",
			flatListControllers: [D],
			children: c.jsx(o("WAWebFlatList.react").FlatList, {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				data: w,
				defaultItemHeight: f,
				direction: "vertical",
				flatListController: D,
				forceConsistentRenderCount: !1,
				renderItem: F,
				testid: "biz-broadcast-pro-edit-audience-list"
			})
		});
		return c.jsx(r("WAWebBizCard.react"), {
			header: o("WAWebBizBroadcastsAudienceSelectionStrings").getChooseRecipientsHeader(),
			headerTestid: "biz-broadcasts-upsert-audience-table-header",
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				testid: "biz-broadcast-pro-edit-audience-card",
				xstyle: y.cardContainer,
				children: [
					c.jsx("div", {
						"data-testid": "biz-broadcast-pro-edit-audience-search-container",
						className: "x2lah0s x1tiyuxx x1nbhmlj x4tra6z x1j8ymqv",
						children: c.jsx(r("WDSSearchBar.react"), {
							hintText: s._(
								/*BTDS*/
								""
							),
							onValueChange: I,
							platform: "windowsWeb",
							value: k,
							testid: "business_broadcasts_audience_search_bar"
						})
					}),
					B,
					S ? c.jsx(o("WAWebFlex.react").FlexRow, {
						justify: "center",
						testid: "biz_broadcast_pro_edit_audience_load_more_container",
						xstyle: y.loadMoreContainer,
						children: c.jsx(r("WDSButton.react"), {
							variant: "outline",
							size: "medium",
							type: "default",
							loading: R,
							onPress: $,
							label: s._(
								/*BTDS*/
								""
							),
							testid: "biz_broadcast_pro_edit_audience_load_more_button"
						})
					}) : null
				]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.index, n = e.isSelected, a = e.onToggle, i = e.phoneNumber, l = o("WAWebPhoneUtils").formatPhone(i), u = m(function() {
			return a(i);
		}, [a, i]), d = r("useWAWebStaticButtonA11y")(u), p = d[0], _ = d[1];
		return c.jsx("div", babelHelpers.extends({
			ref: p,
			"data-testid": "biz-broadcast-pro-edit-audience-phone-row-" + t
		}, {
			0: { className: "x1n67ipk xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 xh8yej3" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x1a2a7pz x18z0m94 xh8yej3 x1h3rtpe" }
		}[!!n << 0], { "aria-pressed": n }, _, { children: c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [c.jsx("div", {
				className: "x1iw51ew xde1mab x3hqpx7",
				children: c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 12,
					children: [c.jsx(r("WDSBaseCheckbox.react"), {
						"aria-label": s._(
							/*BTDS*/
							"",
							[s._param("recipient phone number", l)]
						),
						tabIndex: -1,
						value: n,
						testid: "biz-broadcast-pro-edit-audience-phone-checkbox-" + t
					}), c.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
						contact: null,
						index: t
					})]
				})
			}), c.jsx("div", {
				className: "xvtqlqk x3hqpx7",
				children: c.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body1",
					maxLines: 1,
					testid: "biz-broadcast-pro-edit-audience-phone-number-" + t,
					children: l
				})
			})]
		}) }));
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = C;
}), 226);
