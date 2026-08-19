__d("WAWebPollsOptionSection", [
	"fbt",
	"WAWebButton.react",
	"WAWebDrawerSection.react",
	"WAWebFlatList.react",
	"WAWebPollsOptionMetadataRow",
	"WAWebPollsVoterRow",
	"WAWebPollsVoterSectionHeader",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingInline6: {
		paddingInlineStart: "x25sj25",
		paddingInlineEnd: "x1icxu4v",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, m = { viewAllContainer: {
		display: "x78zum5",
		marginInlineStart: "xdln39a",
		minHeight: "x1wiwyrm",
		$$css: !0
	} }, p = 5, _ = 68;
	function f(t) {
		var n = t.associatedMsg, a = t.flatListController, i = t.hideVoterNames, l = i === void 0 ? !1 : i, u = t.isCorrectOption, f = t.isPollFromMe, g = t.links, C = t.onOpenContactInfo, b = t.onViewAllVotes, v = t.option, S = t.result, R = S.count, L = S.isCurrentLeader, E = S.percentageOfAll, k = S.votes, I = t.testid, T = t.trusted, D = T === void 0 ? !1 : T, x = t.withSectioning, $ = x === void 0 ? !1 : x, P = R - p, N = k.length;
		b && (N = P === 1 ? k.length : p);
		var M = h(t.result, $, N);
		return c.jsxs(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			testid: I,
			children: [c.jsx(r("WAWebPollsOptionMetadataRow"), {
				associatedMsg: n,
				name: v.name,
				isCurrentLeader: L,
				percentage: E * 100,
				voteCount: R,
				isPollFromMe: f,
				links: g,
				trusted: D,
				isCorrectOption: u
			}), !l && M.length > 0 && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), { children: [c.jsx(o("WAWebFlatList.react").FlatList, {
				flatListController: a,
				direction: "vertical",
				data: M,
				renderItem: function(t) {
					return y(t, C);
				},
				defaultItemHeight: _,
				reorderAnimationsEnabled: !1
			}), R > p && b != null && N < R && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.viewAllContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop8, o("WDSPaddings.stylex").wdsPaddings.paddingBottom8, d.paddingInline6), { children: c.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				onClick: function(t) {
					b();
				},
				shadowOnHover: !1,
				children: t.mode === "e2ee" ? s._(
					/*BTDS*/
					"",
					[s._plural(P, "leftover_votes_details_view")]
				) : s._(
					/*BTDS*/
					""
				)
			}) }))] }))]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return {
			itemKey: e.id.toString(),
			vote: e,
			kind: "vote"
		};
	}
	function h(e, t, n) {
		if (t && e.mode === "newsletter") {
			var r = e.contactVoters, a = e.otherVoters, i = r.map(g), l = 0;
			return i.length > 0 && a.length > 0 && (i.unshift(o("WAWebPollsVoterSectionHeader").ContactSection), i.push(o("WAWebPollsVoterSectionHeader").OthersSection), l = 2), i.push.apply(i, a.map(g)), i.slice(0, n + l);
		}
		return e.votes.slice(0, n).map(g);
	}
	function y(e, t) {
		switch (e.kind) {
			case "vote": return c.jsx(r("WAWebPollsVoterRow"), {
				vote: e.vote,
				onOpenContactInfo: t
			});
			case "section": return c.jsx(o("WAWebPollsVoterSectionHeader").PollsVoterSectionHeader, { sectionType: e.section });
		}
	}
	l.default = f;
}), 226);
