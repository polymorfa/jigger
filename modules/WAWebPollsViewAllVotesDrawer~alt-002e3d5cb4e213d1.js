__d("WAWebPollsViewAllVotesDrawer", [
	"fbt",
	"WALogger",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlatListController",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebMsgModelPropUtils",
	"WAWebPollsOptionSection",
	"WAWebPollsUseResults",
	"nullthrows",
	"react",
	"useLazyRef",
	"useWAWebNewsletterPollsResults",
	"useWAWebPollAssociatedMessagesMap"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react"));
	function m(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u), r = n.msg;
		return r.id.remote.isNewsletter() ? d.jsx(f, babelHelpers.extends({}, n, { ref: t })) : d.jsx(_, babelHelpers.extends({}, n, { ref: t }));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = m;
	function _(e) {
		var t = e.associatedMessages, n = e.msg, r = e.onBack, a = e.onOpenContactInfo, i = e.optionLocalId, l = e.ref, s = o("WAWebPollsUseResults").useResults(n);
		return d.jsx(g, {
			associatedMessages: t,
			mode: "e2ee",
			onBack: r,
			onOpenContactInfo: a,
			optionsToResults: s,
			optionLocalId: i,
			msg: n,
			ref: l
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.associatedMessages, n = e.msg, r = e.onBack, a = e.onOpenContactInfo, i = e.optionLocalId, l = e.ref, s = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(n, { pollVoteLocalId: i });
		return d.jsx(g, {
			associatedMessages: t,
			mode: "newsletter",
			withSectioning: !0,
			onBack: r,
			onOpenContactInfo: a,
			optionsToResults: s,
			optionLocalId: i,
			msg: n,
			ref: l
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.associatedMessages, a = t.mode, i = t.msg, l = t.onBack, u = t.onOpenContactInfo, c = t.optionLocalId, m = t.optionsToResults, p = t.ref, _ = t.withSectioning, f = Array.from(m.keys()).find(function(e) {
			return e.localId === c;
		}), g = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(Array.from(m.keys()), n), h = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		});
		if (f == null) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Polls] Unable to find poll option in ViewAllVotesDrawer"]))).sendLogs("null-poll-option"), null;
		var y = r("nullthrows")(m.get(f)), C = o("WAWebMsgModelPropUtils").isTrusted(i.unsafe());
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: p,
			theme: "striped",
			testid: "poll-details-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "polls-view-all-votes"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: l,
				focusBackOrCancel: !0
			}), d.jsx(r("WAWebDrawerBody.react"), {
				flatListControllers: [h.current],
				children: d.jsx(r("WAWebPollsOptionSection"), {
					associatedMsg: g.get(f),
					mode: a,
					option: f,
					result: y,
					links: C ? o("WAWebMsgLinks").getPollOptionLinks(i.unsafe(), f) : null,
					trusted: C,
					isPollFromMe: i.id.fromMe,
					onOpenContactInfo: u,
					flatListController: h.current,
					withSectioning: _,
					testid: "poll-details-option-" + f.localId,
					isCorrectOption: i.correctOptionIndex == null ? null : f.localId === i.correctOptionIndex,
					hideVoterNames: o("WAWebMsgGetters").getPollHideVoterNames(i) === !0
				})
			})]
		}, "poll-details-drawer");
	}
	g.displayName = g.name + " [from " + i.id + "]", l.ViewAllVotesDrawer = p;
}), 226);
