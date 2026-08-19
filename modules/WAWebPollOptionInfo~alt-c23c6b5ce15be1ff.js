__d("WAWebPollOptionInfo", [
	"fbt",
	"WAWebEmojiText.react",
	"WAWebFacePile.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFormatConfigurationConversation",
	"WAWebFrontendPollVoteGetters",
	"WAWebL10N",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebPollsGatingUtils",
	"WAWebPollsOptionBar",
	"WAWebPollsPollVoteModel",
	"WAWebTextSizeUtils",
	"WAWebUnstyledButton.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		top: {
			minHeight: "xisnujt",
			$$css: !0
		},
		optionName: {
			width: "xh8yej3",
			cursor: "x1ypdohk",
			overflowY: "x10wlt62",
			$$css: !0
		},
		voteCountContainer: {
			minWidth: "xk8lq53",
			$$css: !0
		},
		votersContainer: {
			display: "x78zum5",
			justifyContent: "x13a6bvl",
			$$css: !0
		},
		disabledPollLabel: {
			cursor: "xt0e3qv",
			$$css: !0
		},
		pollEndedLabel: {
			color: "x1bvqhpb",
			$$css: !0
		},
		pollsSender: {
			borderTopColor: "x3ewwah",
			borderInlineEndColor: "xzt7qbt",
			borderBottomColor: "x1xnb2cf",
			borderInlineStartColor: "xphqdy3",
			$$css: !0
		},
		pollsReceiver: {
			borderTopColor: "xm7onvi",
			borderInlineEndColor: "xxy6lca",
			borderBottomColor: "x4728lr",
			borderInlineStartColor: "x4bbfdb",
			$$css: !0
		},
		verticalHiddenOptionInfo: {
			paddingBottom: "xvpt6g3",
			$$css: !0
		}
	}, d = 18, m = 2;
	function p(e) {
		var t = e.checkBoxId, n = e.checked, a = e.hideResults, i = e.index, l = e.isAdminOrOwner, s = e.isCorrectOption, d = e.isPollEnded, m = e.layout, p = e.msg, g = e.name, h = e.onDetailImageClick, y = e.option, C = e.result, b = e.selectable, v = e.showFacePile, S = e.trusted, R = o("WAWebMsgGetters").getIsSentByMe(p), L = R ? "polls_sender" : "polls_receiver", E = u.jsx(_, {
			checkBoxId: t,
			index: i,
			isPollEnded: d,
			msg: p,
			name: g,
			option: y,
			selectable: b,
			trusted: S
		}), k = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(), I = !a && u.jsx(f, {
			msg: p,
			theme: L,
			onClick: k ? void 0 : h,
			result: C,
			showFacePile: v
		}), T = u.jsx(r("WAWebPollsOptionBar"), {
			result: a ? void 0 : C,
			isPollSentByMe: R,
			isAdminOrOwner: l,
			checked: n,
			isCorrectOption: s
		});
		return m === "horizontal" ? u.jsxs(r("WAWebFlexItem.react"), { children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.top,
			columnGap: 2,
			children: [E, I]
		}), T] }) : u.jsxs(r("WAWebFlexItem.react"), {
			xstyle: a && c.verticalHiddenOptionInfo,
			children: [
				u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: c.top,
					columnGap: 2,
					children: E
				}),
				T,
				I
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t, n = e.checkBoxId, a = e.index, i = e.isPollEnded, l = e.msg, s = e.name, d = e.option, m = e.selectable, p = e.trusted, _ = o("WAWebMsgGetters").getIsSentByMe(l), f = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().textSize, g = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(), h = o("WAWebFormatConfigurationConversation").Conversation({
			links: g ? (t = o("WAWebMsgLinks").getPollOptionLinks(l.unsafe(), d)) != null ? t : [] : [],
			phoneNumbers: [],
			selectable: m,
			trusted: p === !0,
			fromMe: _,
			messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(l.unsafe())
		}), y = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: s,
			selectable: !0,
			formatters: h
		});
		return u.jsx(r("WAWebFlexItem.react"), {
			xstyle: [
				c.optionName,
				f,
				!m && c.disabledPollLabel,
				i && c.pollEndedLabel
			],
			children: g ? u.jsx("div", {
				"data-testid": "poll-option-row-label-" + a,
				children: y
			}) : u.jsx("label", {
				htmlFor: n,
				"data-testid": "poll-option-row-label-" + a,
				children: y
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.msg, n = e.onClick, a = e.result, i = e.showFacePile, l = i === void 0 ? !0 : i, p = e.theme, _ = a.count, f = a.votes, h = f.slice(0, m).map(function(e) {
			return g(e).id;
		}), y = p === "polls_sender" ? c.pollsSender : c.pollsReceiver, C = o("WAWebMsgGetters").getPollHideVoterNames(t) === !0, b = h.length > 0 && l && !C && u.jsx(r("WAWebFacePile.react"), {
			faceSize: d,
			idsOrUrls: h,
			borderColor: y
		}), v = u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 4,
			children: [b, u.jsx(r("WAWebFlexItem.react"), {
				xstyle: c.voteCountContainer,
				children: u.jsx("span", {
					className: "x1pg5gke",
					children: r("WAWebL10N").d(_)
				})
			})]
		});
		return n == null ? u.jsx("div", {
			className: "x78zum5 x13a6bvl",
			children: v
		}) : u.jsx(r("WAWebUnstyledButton.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			disabled: o("WAWebMsgGetters").getIsNewsletterMsg(t),
			xstyle: c.votersContainer,
			onClick: n,
			children: v
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e instanceof o("WAWebPollsPollVoteModel").PollVote ? o("WAWebFrontendPollVoteGetters").getSenderObj(e) : e;
	}
	l.default = p;
}), 226);
