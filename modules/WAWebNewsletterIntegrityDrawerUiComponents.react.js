__d("WAWebNewsletterIntegrityDrawerUiComponents.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCommonNewsletterEnums",
	"WAWebCopyPasteSelectable.react",
	"WAWebDSADateUtils",
	"WAWebDetailImage.react",
	"WAWebEmojiText.react",
	"WAWebEnforcementActionLogging",
	"WAWebFlex.react",
	"WAWebKeyboardIsKeyActivation",
	"WAWebMaterialInfoIcon.react",
	"WAWebModalManager",
	"WAWebNewsletterDSAModals.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterModalsUtils.react",
	"WAWebNullFunc",
	"WAWebRemediationOptionSection.react",
	"WAWebSettingsSecureIcon.react",
	"WAWebText.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLocationOn.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginInline9: {
			marginInlineStart: "x1y3qizg",
			marginInlineEnd: "x19dbzi3",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		margin10: {
			marginTop: "x1anpbxc",
			marginInlineEnd: "x1sa5p1d",
			marginBottom: "xyorhqc",
			marginInlineStart: "x1hm9lzh",
			$$css: !0
		}
	}, d = {
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		learnMore: {
			cursor: "x1ypdohk",
			fontWeight: "x117nqv4",
			$$css: !0
		},
		newsletterInfoRow: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			fontSize: "x1f6kntn",
			color: "xhslqc4",
			$$css: !0
		},
		profilePic: {
			minWidth: "xnei2rj",
			$$css: !0
		},
		iconGray: {
			color: "xshy2n",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(3), n = e.content, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [d.header, o("WDSPaddings.stylex").wdsPaddings.paddingTop16], t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
				testid: "newsletter-integrity-header-title",
				xstyle: r,
				weight: "medium",
				children: n
			})
		}), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(2), n = e.content, r;
		return t[0] !== n ? (r = n != null ? u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "newsletter-enforcement-subheader-date",
				xstyle: [d.header, o("WDSPaddings.stylex").wdsPaddings.paddingVer8],
				children: n
			})
		}) : null, t[0] = n, t[1] = r) : r = t[1], r;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(14), n = e.section;
		if (n != null) {
			var r = n.bullets, a = n.key, i = n.subtitle, l = n.testId, s = n.title, c;
			t[0] !== s ? (c = s(), t[0] = s, t[1] = c) : c = t[1];
			var d;
			t[2] !== c ? (d = u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
				color: "primary",
				paddingTop: 24,
				paddingBottom: 12,
				children: c
			}), t[2] = c, t[3] = d) : d = t[3];
			var m;
			t[4] !== i ? (m = i != null && u.jsx(o("WAWebText.react").WAWebTextSmall, { children: i() }), t[4] = i, t[5] = m) : m = t[5];
			var p;
			t[6] !== r ? (p = r != null && u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: r }), t[6] = r, t[7] = p) : p = t[7];
			var _;
			return t[8] !== a || t[9] !== d || t[10] !== m || t[11] !== p || t[12] !== l ? (_ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
				justify: "stretch",
				testid: l,
				children: [
					d,
					m,
					p
				]
			}, a), t[8] = a, t[9] = d, t[10] = m, t[11] = p, t[12] = l, t[13] = _) : _ = t[13], _;
		}
	}
	function f(e, t) {
		var n = function() {
			r("WAWebEnforcementActionLogging").logLearnMoreHowClick(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSADecisionModal, { DSADecisionModalCategory: e }));
		}, a = I(E), i = I(n), l = I(k), c = [].concat(t === !0 ? [] : [{
			Icon: o("WAWebMaterialInfoIcon.react").MaterialInfoIcon,
			iconSize: 22,
			iconXstyle: d.secondaryColor,
			text: o("WAWebNullFunc").returnNull,
			subtext: function() {
				return s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
						xstyle: d.learnMore,
						selectable: !0,
						role: "button",
						tabIndex: 0,
						onClick: E,
						onKeyDown: a,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
			}
		}], [{
			Icon: o("WAWebSettingsSecureIcon.react").SettingsSecureIcon,
			iconXstyle: d.secondaryColor,
			text: o("WAWebNullFunc").returnNull,
			testid: "how-we-made-decision-bullet",
			subtext: function() {
				return s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
						xstyle: d.learnMore,
						selectable: !0,
						role: "button",
						tabIndex: 0,
						onClick: n,
						onKeyDown: i,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
			}
		}]);
		return o("WAWebNewsletterGatingUtils").isDSAEUOnlyNoticeEnabled() && c.push({
			Icon: r("WDSIconIcLocationOn.react"),
			iconXstyle: d.secondaryColor,
			testid: "dsa-eu-only-notice-bullet",
			text: o("WAWebNullFunc").returnNull,
			subtext: function() {
				return s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
						xstyle: d.learnMore,
						selectable: !0,
						role: "button",
						tabIndex: 0,
						onClick: k,
						onKeyDown: l,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
			}
		}), {
			key: "what-you-need-to-know",
			testId: "what-you-need-to-know",
			title: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			bullets: c
		};
	}
	function g(e) {
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: d.newsletterInfoRow,
			grow: 0,
			align: "center",
			children: [u.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: e.id,
				size: 24,
				xstyle: d.profilePic
			}), u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: e.formattedTitle,
				xstyle: c.marginInline9,
				ellipsify: !0
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		switch (e) {
			case "COPS":
			case "RM": return o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RM_COPS;
			case "RM_PRODUCT_RESTRICTION": return o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.RM_PRODUCT_RESTRICTION;
			case "IP_SRT": return o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.IP_SRT_VIOLATION;
			default: return o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.GENERIC_VIOLATION;
		}
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(3), n = e.reportTimestamp, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WDSIconIcInfo.react"), {
			height: 16,
			width: 16,
			xstyle: d.iconGray
		}), t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingTop: 8,
			gap: 8,
			children: [a, u.jsx(o("WAWebText.react").WAWebTextSmall, {
				testid: "newsletter-report-date",
				children: s._(
					/*BTDS*/
					"",
					[s._param("report_creation_time", o("WAWebDSADateUtils").getDSADateDisplayString(n))]
				)
			})]
		}), t[1] = n, t[2] = i) : i = t[2], i;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(3), n = e.requestTimestamp;
		if (n == null) return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WDSIconIcInfo.react"), {
			height: 16,
			width: 16,
			xstyle: d.iconGray
		}), t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingTop: 8,
			gap: 8,
			children: [a, u.jsx(o("WAWebText.react").WAWebTextSmall, {
				testid: "newsletter-review-date",
				children: s._(
					/*BTDS*/
					"",
					[s._param("report_creation_time", o("WAWebDSADateUtils").getDSADateDisplayString(n))]
				)
			})]
		}), t[1] = n, t[2] = i) : i = t[2], i;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(3), n = e.handleDelete, r = e.title, a;
		return t[0] !== n || t[1] !== r ? (a = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			columnGap: 12,
			children: [u.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
				testid: "newsletter-delete-channel-button",
				stretch: !1,
				onClick: n,
				children: r
			}), " "]
		}), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(3), n = e.enforcementType, a = e.onClickSeeOptions, i;
		return t[0] !== n || t[1] !== a ? (i = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: c.margin10,
			justify: "center",
			children: u.jsx(r("WAWebRemediationOptionSection.react"), {
				buttonType: "primary",
				stretch: !1,
				onClickSeeOptions: a,
				enforcementType: n
			})
		}), t[0] = n, t[1] = a, t[2] = i) : i = t[2], i;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(11), n = e.subtext, r = e.testid, a = e.text, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = "x9f619 xh8yej3 x1qjc9v5", t[0] = i) : i = t[0];
		var l;
		t[1] !== a ? (l = u.jsx(o("WAWebText.react").WAWebTextTitle, { children: a }), t[1] = a, t[2] = l) : l = t[2];
		var s;
		t[3] !== n ? (s = u.jsx(o("WAWebText.react").WAWebTextSmall, { children: n }), t[3] = n, t[4] = s) : s = t[4];
		var c;
		t[5] !== l || t[6] !== s ? (c = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [l, s] }), t[5] = l, t[6] = s, t[7] = c) : c = t[7];
		var d;
		return t[8] !== c || t[9] !== r ? (d = u.jsx(o("WAWebFlex.react").FlexRow, {
			className: i,
			paddingStart: 8,
			paddingTop: 4,
			paddingBottom: 4,
			testid: r,
			marginBottom: 8,
			children: c
		}), t[8] = c, t[9] = r, t[10] = d) : d = t[10], d;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(2), n = e.points, r;
		return t[0] !== n ? (r = n.map(L), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function L(e, t) {
		return u.jsx(S, {
			text: e.text(),
			subtext: e.subtext(),
			testid: e.testid
		}, t);
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		r("WAWebEnforcementActionLogging").logLearnMoreWhyClick(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSAGuidelinesModal, {}));
	}
	function k() {
		r("WAWebEnforcementActionLogging").logLearnMoreEuClick(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSAEUNoticeModal, {}));
	}
	function I(e) {
		return function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && (t.preventDefault(), t.stopPropagation(), e());
		};
	}
	l.HeaderTitle = m, l.SubHeaderTitle = p, l.InfoSection = _, l.DSAWhatYouNeedToKnowInfoSection = f, l.getMessageTitleForViolatingMessage = g, l.getDecisionModalCategoryForEnforcementSource = h, l.DateReported = y, l.DateReviewRequested = C, l.DeleteButton = b, l.EnforcementDetailsFooter = v, l.DSBList = R;
}), 226);
