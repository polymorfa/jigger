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
	"react"
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
		var t = e.content;
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
				testid: "newsletter-integrity-header-title",
				xstyle: [d.header, o("WDSPaddings.stylex").wdsPaddings.paddingTop16],
				weight: "medium",
				children: t
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.content;
		return t != null ? u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "newsletter-enforcement-subheader-date",
				xstyle: [d.header, o("WDSPaddings.stylex").wdsPaddings.paddingVer8],
				children: t
			})
		}) : null;
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.section;
		if (t != null) {
			var n = t.bullets, r = t.key, a = t.subtitle, i = t.testId, l = t.title;
			return u.jsxs(o("WAWebFlex.react").FlexColumn, {
				justify: "stretch",
				testid: i,
				children: [
					u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						color: "primary",
						paddingTop: 24,
						paddingBottom: 12,
						children: l()
					}),
					a != null && u.jsx(o("WAWebText.react").WAWebTextSmall, { children: a() }),
					n != null && u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: n })
				]
			}, r);
		}
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e, t) {
		var n = function() {
			r("WAWebEnforcementActionLogging").logLearnMoreHowClick(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSADecisionModal, { DSADecisionModalCategory: e }));
		}, a = k(L), i = k(n), l = k(E), c = [].concat(t === !0 ? [] : [{
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
						onClick: L,
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
						onClick: E,
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
		var t = e.reportTimestamp;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingTop: 8,
			gap: 8,
			children: [u.jsx(r("WDSIconIcInfo.react"), {
				height: 16,
				width: 16,
				xstyle: d.iconGray
			}), u.jsx(o("WAWebText.react").WAWebTextSmall, {
				testid: "newsletter-report-date",
				children: s._(
					/*BTDS*/
					"",
					[s._param("report_creation_time", o("WAWebDSADateUtils").getDSADateDisplayString(t))]
				)
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.requestTimestamp;
		return t == null ? null : u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingTop: 8,
			gap: 8,
			children: [u.jsx(r("WDSIconIcInfo.react"), {
				height: 16,
				width: 16,
				xstyle: d.iconGray
			}), u.jsx(o("WAWebText.react").WAWebTextSmall, {
				testid: "newsletter-review-date",
				children: s._(
					/*BTDS*/
					"",
					[s._param("report_creation_time", o("WAWebDSADateUtils").getDSADateDisplayString(t))]
				)
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.handleDelete, n = e.title;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			columnGap: 12,
			children: [u.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
				testid: "newsletter-delete-channel-button",
				stretch: !1,
				onClick: t,
				children: n
			}), " "]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.enforcementType, n = e.onClickSeeOptions;
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: c.margin10,
			justify: "center",
			children: u.jsx(r("WAWebRemediationOptionSection.react"), {
				buttonType: "primary",
				stretch: !1,
				onClickSeeOptions: n,
				enforcementType: t
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.subtext, n = e.testid, r = e.text;
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			className: "x9f619 xh8yej3 x1qjc9v5",
			paddingStart: 8,
			paddingTop: 4,
			paddingBottom: 4,
			testid: n,
			marginBottom: 8,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(o("WAWebText.react").WAWebTextTitle, { children: r }), u.jsx(o("WAWebText.react").WAWebTextSmall, { children: t })] })
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.points;
		return t.map(function(e, t) {
			return u.jsx(S, {
				text: e.text(),
				subtext: e.subtext(),
				testid: e.testid
			}, t);
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L() {
		r("WAWebEnforcementActionLogging").logLearnMoreWhyClick(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSAGuidelinesModal, {}));
	}
	function E() {
		r("WAWebEnforcementActionLogging").logLearnMoreEuClick(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterDSAModals.react").NewsletterDSAEUNoticeModal, {}));
	}
	function k(e) {
		return function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && (t.preventDefault(), t.stopPropagation(), e());
		};
	}
	l.HeaderTitle = m, l.SubHeaderTitle = p, l.InfoSection = _, l.DSAWhatYouNeedToKnowInfoSection = f, l.getMessageTitleForViolatingMessage = g, l.getDecisionModalCategoryForEnforcementSource = h, l.DateReported = y, l.DateReviewRequested = C, l.DeleteButton = b, l.EnforcementDetailsFooter = v, l.DSBList = R;
}), 226);
