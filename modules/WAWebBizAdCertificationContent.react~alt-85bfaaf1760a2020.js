__d("WAWebBizAdCertificationContent.react", [
	"fbt",
	"WAWebChevronCustomIcons",
	"WAWebClickable.react",
	"WAWebFlex.react",
	"WDSIconIcCheck.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = {
		bulletItem: {
			alignItems: "x1cy8zhl",
			columnGap: "x1s70e7g",
			$$css: !0
		},
		bulletList: {
			rowGap: "x1qvou4u",
			$$css: !0
		},
		checkmarkIcon: {
			color: "x1du590y",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		content: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		dropdownContent: {
			paddingTop: "x1tiyuxx",
			rowGap: "x1qvou4u",
			$$css: !0
		},
		dropdownHeader: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		dropdownHeaderText: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		headerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		iconContainer: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		linkList: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		section: {
			rowGap: "x129bwdz",
			$$css: !0
		},
		subsection: {
			paddingTop: "x16ovd2e",
			rowGap: "x129bwdz",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.children, n = e.subtitle, a = e.title, i = c(!1), l = i[0], s = i[1], m = function() {
			s(!l);
		};
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: d.section,
			children: [u.jsx(o("WAWebClickable.react").Clickable, {
				onClick: m,
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: d.dropdownHeader,
					children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						xstyle: d.dropdownHeaderText,
						children: [u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1Emphasized",
							children: a
						}), n != null ? u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: n
						}) : null]
					}), l ? u.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, { height: 20 }) : u.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, { height: 20 })]
				})
			}), l ? u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: d.dropdownContent,
				children: t
			}) : null]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e, t, n;
		return u.jsxs((n = o("WAWebFlex.react")).FlexColumn, {
			align: "stretch",
			xstyle: d.content,
			children: [
				u.jsx(n.FlexColumn, {
					xstyle: d.iconContainer,
					children: u.jsx(e = r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Headline2",
						xstyle: d.headerText,
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(e, {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(e, {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsxs(n.FlexColumn, {
					align: "stretch",
					xstyle: d.section,
					children: [u.jsx(e, {
						colorName: "contentDefault",
						type: "Body1Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsx(e, {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsxs(n.FlexColumn, {
					align: "stretch",
					xstyle: d.section,
					children: [u.jsx(e, {
						colorName: "contentDefault",
						type: "Body1Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsx(e, {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsxs(m, {
					title: s._(
						/*BTDS*/
						""
					),
					children: [
						u.jsx(e, {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						u.jsxs(n.FlexColumn, {
							align: "stretch",
							xstyle: d.subsection,
							children: [
								u.jsx(e, {
									colorName: "contentDefault",
									type: "Body1Emphasized",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								u.jsxs(n.FlexColumn, {
									align: "stretch",
									xstyle: d.section,
									children: [u.jsx(e, {
										colorName: "contentDefault",
										type: "Body1",
										children: s._(
											/*BTDS*/
											""
										)
									}), u.jsx(e, {
										colorName: "contentDeemphasized",
										type: "Body2",
										children: s._(
											/*BTDS*/
											""
										)
									})]
								}),
								u.jsxs(n.FlexColumn, {
									align: "stretch",
									xstyle: d.section,
									children: [u.jsx(e, {
										colorName: "contentDefault",
										type: "Body1",
										children: s._(
											/*BTDS*/
											""
										)
									}), u.jsx(e, {
										colorName: "contentDeemphasized",
										type: "Body2",
										children: s._(
											/*BTDS*/
											""
										)
									})]
								}),
								u.jsxs(n.FlexColumn, {
									align: "stretch",
									xstyle: d.section,
									children: [u.jsx(e, {
										colorName: "contentDefault",
										type: "Body1",
										children: s._(
											/*BTDS*/
											""
										)
									}), u.jsx(e, {
										colorName: "contentDeemphasized",
										type: "Body2",
										children: s._(
											/*BTDS*/
											""
										)
									})]
								})
							]
						}),
						u.jsxs(n.FlexColumn, {
							align: "stretch",
							xstyle: d.subsection,
							children: [
								u.jsx(e, {
									colorName: "contentDefault",
									type: "Body1Emphasized",
									children: s._(
										/*BTDS*/
										""
									)
								}),
								u.jsxs(n.FlexColumn, {
									align: "stretch",
									xstyle: d.section,
									children: [u.jsx(e, {
										colorName: "contentDefault",
										type: "Body1",
										children: s._(
											/*BTDS*/
											""
										)
									}), u.jsx(e, {
										colorName: "contentDeemphasized",
										type: "Body2",
										children: s._(
											/*BTDS*/
											""
										)
									})]
								}),
								u.jsxs(n.FlexColumn, {
									align: "stretch",
									xstyle: d.section,
									children: [u.jsx(e, {
										colorName: "contentDefault",
										type: "Body1",
										children: s._(
											/*BTDS*/
											""
										)
									}), u.jsx(e, {
										colorName: "contentDeemphasized",
										type: "Body2",
										children: s._(
											/*BTDS*/
											""
										)
									})]
								}),
								u.jsxs(n.FlexColumn, {
									align: "stretch",
									xstyle: d.section,
									children: [u.jsx(e, {
										colorName: "contentDefault",
										type: "Body1",
										children: s._(
											/*BTDS*/
											""
										)
									}), u.jsx(e, {
										colorName: "contentDeemphasized",
										type: "Body2",
										children: s._(
											/*BTDS*/
											""
										)
									})]
								})
							]
						})
					]
				}),
				u.jsxs(m, {
					subtitle: s._(
						/*BTDS*/
						""
					),
					title: s._(
						/*BTDS*/
						""
					),
					children: [u.jsx(e, {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsxs(n.FlexColumn, {
						align: "stretch",
						xstyle: d.linkList,
						children: [
							u.jsx(t = r("WDSTextualLink.react"), {
								href: "https://www.hud.gov/",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(t, {
								href: "https://www.eeoc.gov/",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(t, {
								href: "https://www.consumerfinance.gov/",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(t, {
								href: "https://www.aclu.org/",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(t, {
								href: "https://civilrights.org/",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(t, {
								href: "https://www.justice.gov/",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							u.jsx(t, {
								href: "https://nationalfairhousing.org/",
								children: s._(
									/*BTDS*/
									""
								)
							})
						]
					})]
				}),
				u.jsxs(n.FlexColumn, {
					align: "stretch",
					xstyle: d.section,
					children: [u.jsx(e, {
						colorName: "contentDefault",
						type: "Body1Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsxs(n.FlexColumn, {
						align: "stretch",
						xstyle: d.bulletList,
						children: [u.jsxs(n.FlexRow, {
							xstyle: d.bulletItem,
							children: [u.jsx(r("WDSIconIcCheck.react"), {
								height: 20,
								iconXstyle: d.checkmarkIcon,
								width: 20
							}), u.jsx(e, {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						}), u.jsxs(n.FlexRow, {
							xstyle: d.bulletItem,
							children: [u.jsx(r("WDSIconIcCheck.react"), {
								height: 20,
								iconXstyle: d.checkmarkIcon,
								width: 20
							}), u.jsx(e, {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})]
						})]
					})]
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
