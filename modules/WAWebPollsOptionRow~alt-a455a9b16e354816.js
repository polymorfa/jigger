__d("WAWebPollsOptionRow", [
	"WAWebCheckBox.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFrontendMsgGetters",
	"WAWebMessagePicture.react",
	"WAWebMsgGetters",
	"WAWebPollOptionImage.react",
	"WAWebPollOptionInfo",
	"WAWebPollsGatingUtils",
	"WAWebPollsOptionCheckbox",
	"WAWebQuizOptionCheckbox",
	"WAWebSpinner.react",
	"WAWebTypesMedia",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { paddingInline48: {
		paddingInlineStart: "x1oiqv2n",
		paddingInlineEnd: "x15zmtp0",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, c = {
		infoLayoutContainer: {
			overflowWrap: "x1mzt3pk",
			$$css: !0
		},
		loadingThumb: {
			width: "x15yg21f",
			height: "xnnlda6",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			backgroundColor: "x3x0x6p",
			$$css: !0
		}
	}, d = 18;
	function m(e) {
		var t = e.albumMsgs, n = e.animationPromise, a = e.associatedMsg, i = e.checked, l = e.hideResults, m = e.index, f = e.isAdminOrOwner, g = e.isCorrectOption, h = e.isPollEnded, y = e.loadingPhotoThumb, C = e.msg, b = e.onDetailImageClick, v = e.onOptionToggle, S = e.onPhotoThumbClick, R = e.option, L = e.readonly, E = e.result, k = e.selectable, I = e.trusted, T = e.view, D = R.localId, x = C.id.toString() + "-option-" + D, $ = o("WAWebMsgGetters").getIsSentByMe(C), P = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(), N = s.jsx(s.Fragment, { children: y === !0 ? s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.loadingThumb,
			justify: "center",
			align: "center",
			shrink: 0,
			children: s.jsx(o("WAWebSpinner.react").Spinner, { size: d })
		}) : a && s.jsx(o("WAWebFlex.react").FlexColumn, {
			alignSelf: "start",
			shrink: 0,
			children: s.jsx(r("WAWebPollOptionImage.react"), {
				msg: a,
				size: "large",
				onClick: S
			})
		}) }), M = {
			option: R,
			checked: i,
			id: x,
			onOptionToggle: v,
			count: E.count
		}, w = P && k, A = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			paddingTop: 12,
			paddingBottom: 12,
			columnGap: 8,
			children: [
				!L && s.jsx(r("WAWebFlexItem.react"), {
					align: "start",
					shrink: 0,
					children: g == null ? s.jsx(r("WAWebPollsOptionCheckbox"), babelHelpers.extends({
						disabled: !k,
						theme: $ ? o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER : o("WAWebCheckBox.react").CheckboxTheme.POLLS_RECEIVER,
						testid: "poll-option-" + m
					}, M)) : s.jsx(r("WAWebQuizOptionCheckbox"), babelHelpers.extends({
						isAdminOrOwner: f,
						hideResults: l,
						testid: "quiz-option-" + m,
						isCorrectOption: g,
						msgId: C.id,
						animationPromise: n
					}, M))
				}),
				s.jsx(r("WAWebFlexItem.react"), {
					xstyle: c.infoLayoutContainer,
					grow: 1,
					children: s.jsx(r("WAWebPollOptionInfo"), {
						checkBoxId: x,
						index: m,
						isPollEnded: h,
						msg: C,
						name: R.name,
						onDetailImageClick: b,
						option: R,
						result: E,
						selectable: k,
						trusted: I,
						layout: (a || y) && T === "message" ? "vertical" : "horizontal",
						showFacePile: T === "message",
						hideResults: l,
						checked: i,
						isCorrectOption: g,
						isAdminOrOwner: f
					})
				}),
				T === "message" && N
			]
		}), F = w ? s.jsx(p, {
			onOptionToggle: v,
			localId: D,
			children: A
		}) : s.jsx("div", {
			className: "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma",
			children: A
		});
		return T === "message" ? F : s.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [u.paddingInline48, o("WDSPaddings.stylex").wdsPaddings.paddingVer20],
			children: [s.jsx(_, {
				associatedMsg: a,
				albumMsgs: t,
				albumIndex: m,
				trusted: I
			}), F]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.children, n = e.localId, r = e.onOptionToggle, o = function(t) {
			var e = t.target;
			e instanceof Element && e.closest("a, input") || r(n);
		}, a = function(t) {
			if (t.key === "Enter" || t.key === " ") {
				var e = t.target;
				if (e instanceof Element && e.closest("a, input")) return;
				t.preventDefault(), t.stopPropagation(), r(n);
			}
		};
		return s.jsx("div", {
			className: "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma x1ypdohk x99gfjr xyb16r9 xrughyy xmprcrp",
			onClick: o,
			onKeyDown: a,
			role: "button",
			tabIndex: 0,
			children: t
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.albumIndex, n = e.albumMsgs, r = e.associatedMsg, a = e.trusted;
		if (r) {
			var i = o("WAWebFrontendMsgGetters").getAsImage(r.unsafe());
			if (i) return s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
				albumMsgs: n,
				currentAlbumMessageIndex: t,
				msg: i,
				mediaData: r.mediaData,
				trusted: a,
				displayAuthor: !1,
				hideMeta: !0,
				theme: o("WAWebTypesMedia").DisplayTheme.PhotoPoll
			});
		}
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = m;
}), 98);
