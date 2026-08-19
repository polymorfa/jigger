__d("WAWebBizBroadcastsUpsertAudienceList.react", [
	"fbt",
	"WALogger",
	"WAWebAudienceDurationFilter.react",
	"WAWebAudienceExpressionTypes",
	"WAWebAudienceResolver",
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebBizBroadcastsAudienceStrings",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBizBroadcastsRecipientRow.react",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBizCard.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactGetters",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WDSSearchBar.react",
	"WDSSpinner.react",
	"WDSText.react",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useRef, f = d.useState, g = 56, h = {
		emptyContainer: {
			paddingTop: "xl7twdi",
			paddingBottom: "xvg22vi",
			$$css: !0
		},
		loadingContainer: {
			paddingTop: "x14a8spa",
			paddingBottom: "x1c76a8b",
			$$css: !0
		}
	};
	function y(t) {
		var n = t.audienceCardId, a = t.eligibleRecipientIds, i = t.entryPoint, l = t.hasDurationFilter, u = l === void 0 ? !1 : l, d = t.isLoading, g = d === void 0 ? !1 : d, h = t.selectedRecipientIds, y = t.setAudienceName, b = t.setIsResolvingAudience, v = t.setResolvedRecipientIds, S = t.setSelectedRecipientIds, R = f(""), L = R[0], E = R[1], k = f(function() {
			return new (r("WAWebFlatListController"))();
		}), I = k[0], T = f(30), D = T[0], x = T[1], $ = _(0), P = m(function(t) {
			if (x(t), y(o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameForCard(n, t)), n != null) {
				var a = n === "inactive_chats" ? o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_NOT_MESSAGED_RECENTLY : o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_CHATTED_RECENTLY;
				b(!0);
				var i = ++$.current;
				(async function() {
					try {
						var l = await o("WAWebAudienceResolver").resolveAudienceExpression({
							params: { days: t },
							predicateType: a,
							type: o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE
						});
						if (i !== $.current) return;
						var s = l.map(function(e) {
							return e.split("@")[0];
						}), u = new Set(s);
						v(u), S(u);
						var c = o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameFromRecipients(s);
						c !== "" && y(c);
					} catch (a) {
						if (i !== $.current) return;
						var d = a instanceof Error ? a : r("err")(String(a));
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"Failed to resolve audience expression for ",
							" with ",
							" days"
						])), n, String(t)).catching(d).sendLogs("suggested-audience-resolve-fail");
					} finally {
						i === $.current && b(!1);
					}
				})();
			}
		}, [
			n,
			y,
			b,
			v,
			S
		]), N = p(function() {
			var e;
			if (a != null) {
				var t = [];
				for (var n of a) {
					var r = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(n);
					r != null && t.push(r);
				}
				e = t;
			} else o("WAWebContactCollection").ContactCollection.ensureSorted(), e = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
				filterFn: null,
				showMe: !1,
				showWithoutName: !0
			});
			o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && (e = e.filter(function(e) {
				return !e.isUsernameContact;
			}));
			var i = L.trim();
			if (i === "") return e;
			var l = i.toLowerCase();
			return e.filter(function(e) {
				var t, n, r = (t = o("WAWebFrontendContactGetters").getDisplayName(e)) != null ? t : "", a = (n = o("WAWebContactGetters").getUserid(e)) != null ? n : "";
				return r.toLowerCase().includes(l) || a.includes(i);
			});
		}, [a, L]), M = p(function() {
			return N.map(function(e, t) {
				var n = o("WAWebContactGetters").getUserid(e) || "", r = h.has(n);
				return {
					contact: e,
					contactId: n,
					contentKey: n + ":" + (r ? "1" : "0"),
					isSelected: r,
					itemKey: n !== "" ? n : "idx-" + t
				};
			});
		}, [N, h]), w = m(function(e) {
			e !== "" && S(function(t) {
				var n = new Set(t);
				return n.has(e) ? n.delete(e) : n.size < o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit() && n.add(e), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceContactCheckboxClicked(n.size, i), n;
			});
		}, [i, S]), A = m(function(e, t) {
			return c.jsx(r("WAWebBizBroadcastsRecipientRow.react"), {
				contact: e.contact,
				contactId: e.contactId,
				index: t,
				isSelected: e.isSelected,
				onToggle: w
			});
		}, [w]), F = u && n != null ? c.jsx(r("WAWebAudienceDurationFilter.react"), {
			audienceCardId: n,
			onSelectDuration: P,
			selectedDays: D
		}) : void 0;
		return c.jsx(r("WAWebBizCard.react"), {
			ctaButton: F,
			header: o("WAWebBizBroadcastsAudienceSelectionStrings").getChooseRecipientsHeader(),
			headerTestid: "biz-broadcasts-upsert-audience-table-header",
			children: c.jsxs("div", {
				className: "x78zum5 xdt5ytf x2lwn1j xeuugli x6ikm8r x10wlt62",
				children: [c.jsx("div", {
					className: "x2lah0s x1tiyuxx x1nbhmlj x4tra6z x1j8ymqv",
					children: c.jsx(r("WDSSearchBar.react"), {
						hintText: s._(
							/*BTDS*/
							""
						),
						onValueChange: E,
						platform: "windowsWeb",
						value: L,
						testid: "business_broadcasts_audience_search_bar"
					})
				}), C({
					flatListController: I,
					hasDurationFilter: u,
					isLoading: g,
					renderItem: A,
					rowData: M,
					searchQuery: L
				})]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.flatListController, n = e.hasDurationFilter, a = e.isLoading, i = e.renderItem, l = e.rowData, u = e.searchQuery;
		return a ? c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: h.loadingContainer,
			children: c.jsx(r("WDSSpinner.react"), { size: 24 })
		}) : l.length === 0 ? c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: h.emptyContainer,
			children: c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsAudienceStrings").getEmptyStateMessage(u, n)
			})
		}) : c.jsx(r("WAWebFlatListContainer.react"), {
			className: "x1iyjqo2 xs83m0k x2lwn1j x6ikm8r x1odjw0f",
			flatListControllers: [t],
			children: c.jsx(o("WAWebFlatList.react").FlatList, {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				data: l,
				defaultItemHeight: g,
				direction: "vertical",
				flatListController: t,
				forceConsistentRenderCount: !1,
				renderItem: i
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
