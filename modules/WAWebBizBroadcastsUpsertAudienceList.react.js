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
	"asyncToGeneratorRuntime",
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
		var a = t.audienceCardId, i = t.eligibleRecipientIds, l = t.entryPoint, u = t.hasDurationFilter, d = u === void 0 ? !1 : u, g = t.isLoading, h = g === void 0 ? !1 : g, y = t.selectedRecipientIds, b = t.setAudienceName, v = t.setIsResolvingAudience, S = t.setResolvedRecipientIds, R = t.setSelectedRecipientIds, L = f(""), E = L[0], k = L[1], I = f(function() {
			return new (r("WAWebFlatListController"))();
		}), T = I[0], D = f(30), x = D[0], $ = D[1], P = _(0), N = m(function(t) {
			if ($(t), b(o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameForCard(a, t)), a != null) {
				var i = a === "inactive_chats" ? o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_NOT_MESSAGED_RECENTLY : o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_CHATTED_RECENTLY;
				v(!0);
				var l = ++P.current;
				n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						var n = yield o("WAWebAudienceResolver").resolveAudienceExpression({
							params: { days: t },
							predicateType: i,
							type: o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE
						});
						if (l !== P.current) return;
						var s = n.map(function(e) {
							return e.split("@")[0];
						}), u = new Set(s);
						S(u), R(u);
						var c = o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameFromRecipients(s);
						c !== "" && b(c);
					} catch (n) {
						if (l !== P.current) return;
						var d = n instanceof Error ? n : r("err")(String(n));
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"Failed to resolve audience expression for ",
							" with ",
							" days"
						])), a, String(t)).catching(d).sendLogs("suggested-audience-resolve-fail");
					} finally {
						l === P.current && v(!1);
					}
				})();
			}
		}, [
			a,
			b,
			v,
			S,
			R
		]), M = p(function() {
			var e;
			if (i != null) {
				var t = [];
				for (var n of i) {
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
			var a = E.trim();
			if (a === "") return e;
			var l = a.toLowerCase();
			return e.filter(function(e) {
				var t, n, r = (t = o("WAWebFrontendContactGetters").getDisplayName(e)) != null ? t : "", i = (n = o("WAWebContactGetters").getUserid(e)) != null ? n : "";
				return r.toLowerCase().includes(l) || i.includes(a);
			});
		}, [i, E]), w = p(function() {
			return M.map(function(e, t) {
				var n = o("WAWebContactGetters").getUserid(e) || "", r = y.has(n);
				return {
					contact: e,
					contactId: n,
					contentKey: n + ":" + (r ? "1" : "0"),
					isSelected: r,
					itemKey: n !== "" ? n : "idx-" + t
				};
			});
		}, [M, y]), A = m(function(e) {
			e !== "" && R(function(t) {
				var n = new Set(t);
				return n.has(e) ? n.delete(e) : n.size < o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit() && n.add(e), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceContactCheckboxClicked(n.size, l), n;
			});
		}, [l, R]), F = m(function(e, t) {
			return c.jsx(r("WAWebBizBroadcastsRecipientRow.react"), {
				contact: e.contact,
				contactId: e.contactId,
				index: t,
				isSelected: e.isSelected,
				onToggle: A
			});
		}, [A]), O = d && a != null ? c.jsx(r("WAWebAudienceDurationFilter.react"), {
			audienceCardId: a,
			onSelectDuration: N,
			selectedDays: x
		}) : void 0;
		return c.jsx(r("WAWebBizCard.react"), {
			ctaButton: O,
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
						onValueChange: k,
						platform: "windowsWeb",
						value: E,
						testid: "business_broadcasts_audience_search_bar"
					})
				}), C({
					flatListController: T,
					hasDurationFilter: d,
					isLoading: h,
					renderItem: F,
					rowData: w,
					searchQuery: E
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
