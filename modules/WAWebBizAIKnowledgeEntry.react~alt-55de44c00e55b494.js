__d("WAWebBizAIKnowledgeEntry.react", [
	"fbt",
	"WALogger",
	"WAWebBizAiKnowledgeReviewDeleteMutation",
	"WAWebBizAiSaveUtils",
	"WAWebClickable.react",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDropdownItem.react",
	"WAWebFlex.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSIconIcVisibility.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		hoverStyle: {
			":hover_backgroundColor": "x1n67ipk",
			":hover_borderStartStartRadius": "xwl5bvh",
			":hover_borderStartEndRadius": "x1fvswcl",
			":hover_borderEndEndRadius": "x1wsr4p6",
			":hover_borderEndStartRadius": "xrzgb8j",
			$$css: !0
		},
		knowledgeEntryQuestion: {
			fontFeatureSettings: "xxhqxmj",
			WebkitLineClamp: "x1h7i4cw",
			WebkitBoxOrient: "x1ua5tub",
			display: "x104kibb",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		knowledgeEntryAnswer: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontFeatureSettings: "xxhqxmj",
			textOverflow: "xlyipyv",
			letterSpacing: "x1p4m5qa",
			marginTop: "x1gslohp",
			WebkitLineClamp: "x1gzmk7r",
			WebkitBoxOrient: "x1ua5tub",
			display: "x104kibb",
			$$css: !0
		},
		dropDownMenu: {
			position: "x10l6tqk",
			insetInlineEnd: "xdg88n9",
			left: null,
			right: null,
			$$css: !0
		},
		paddingStart16: {
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		paddingEnd24: {
			paddingInlineEnd: "xyo0t3i",
			$$css: !0
		},
		paddingTop12: {
			paddingTop: "x1xrf6ya",
			$$css: !0
		},
		paddingBottom12: {
			paddingBottom: "xscbp6u",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.answer, n = e.id, a = e.onKnowledgeItemDeleted, i = e.onViewDetail, l = e.question, u = e.source, p = d(!1), f = p[0], g = p[1], h = d(null), y = h[0], C = h[1];
		function b() {
			g(!0);
		}
		function v() {
			g(!1);
		}
		function S(e) {
			k && E(!L), C(e);
		}
		var R = d(!1), L = R[0], E = R[1], k = f || L;
		return c.jsx("div", {
			onMouseEnter: b,
			onMouseLeave: v,
			className: "xh8yej3",
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: [
					m.paddingStart16,
					m.paddingEnd24,
					m.paddingTop12,
					m.paddingBottom12,
					m.hoverStyle
				],
				children: [c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsxs(o("WAWebClickable.react").Clickable, {
					onClick: function() {
						return i(n);
					},
					children: [c.jsx(o("WAWebText.react").WAWebTextSmall, {
						xstyle: m.knowledgeEntryQuestion,
						children: s._(
							/*BTDS*/
							"",
							[s._param("question", l)]
						)
					}), c.jsx(o("WAWebText.react").WAWebTextTitle, {
						xstyle: m.knowledgeEntryAnswer,
						children: s._(
							/*BTDS*/
							"",
							[s._param("answer", t)]
						)
					})]
				}) }), c.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: m.dropDownMenu,
					children: c.jsxs("div", {
						style: {
							opacity: f ? 1 : 0,
							transition: "opacity 0.2s ease-in-out"
						},
						children: [c.jsx(o("WAWebClickable.react").Clickable, {
							onClick: S,
							tabIndex: 0,
							children: c.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, {})
						}), L && y != null && c.jsx(o("WAWebUimUie.react").UIE, {
							displayName: "MsgContextMenu",
							escapable: !0,
							popable: !0,
							dismissOnWindowResize: !0,
							requestDismiss: function() {
								return E(!1);
							},
							children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
								menu: c.jsx(_, {
									id: n,
									source: u,
									onKnowledgeItemDeleted: a,
									onViewDetail: i
								}),
								anchor: y.target
							} })
						})]
					})
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var a = t.id, i = t.onKnowledgeItemDeleted, l = t.onViewDetail, u = t.source;
		return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "wa-biz-ai-knowledge-view",
			action: function() {
				return l(a);
			},
			icon: c.jsx(r("WDSIconIcVisibility.react"), {}),
			children: s._(
				/*BTDS*/
				""
			)
		}, "view"), c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "wa-biz-ai-knowledge-delete",
			action: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = yield o("WAWebBizAiKnowledgeReviewDeleteMutation").deletePendingData(a, u);
				if (!t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: knowledge review delete failed"]))).sendLogs("biz-ai-knowledge-review-delete"), o("WAWebBizAiSaveUtils").showErrorToast();
					return;
				}
				i(a);
			}),
			icon: c.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}),
			theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
			children: s._(
				/*BTDS*/
				""
			)
		}, "delete")] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
