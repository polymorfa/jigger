__d("WAWebMessageBubbleTypingIndicator.react", [
	"WAWebL10N",
	"WAWebLottieAnimationLoadable",
	"WDSMargins.stylex",
	"WDSSpinner.react",
	"gkx",
	"react",
	"stylex",
	"useWAWebGroupColors"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.Suspense, m = c.useRef, p = { margin9: {
		marginTop: "xzbgwbi",
		marginInlineEnd: "x19dbzi3",
		marginBottom: "xfitlp5",
		marginInlineStart: "x1y3qizg",
		$$css: !0
	} }, _ = u.lazy(function() {
		return o("WAWebLottieAnimationLoadable").requireBundle().then(function(e) {
			return { default: e };
		});
	}), f = { typingDots: {
		width: "x17z2i9w",
		height: "x17rw0jw",
		$$css: !0
	} };
	function g(t) {
		var n = t.colorRgb, a = t.isBotMsgStreaming, i = t.xstyle, l = m(null), s = o("useWAWebGroupColors").useGroupsColorRGBValue(0), c = n != null ? n : s;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.typingDots, a === !0 ? [o("WDSMargins.stylex").wdsMargins.marginTop8, o("WDSMargins.stylex").wdsMargins.marginBottom4] : [p.margin9], i), { children: r("gkx")("24693") ? u.jsx(d, {
			fallback: u.jsx(r("WDSSpinner.react"), {
				size: 50,
				stroke: 4
			}),
			children: u.jsx(_, {
				ref: l,
				autoplay: !0,
				direction: r("WAWebL10N").isRTL() ? -1 : 1,
				loop: !0,
				data: h(c)
			})
		}) : u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
			ref: l,
			autoplay: !0,
			direction: r("WAWebL10N").isRTL() ? -1 : 1,
			loop: !0,
			data: h(c)
		}) }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return {
			v: "5.12.1",
			fr: 60,
			ip: 0,
			op: 100,
			w: 72,
			h: 72,
			nm: "SolidColor",
			ddd: 0,
			assets: [],
			layers: [
				{
					ddd: 0,
					ind: 1,
					ty: 4,
					nm: "dot3",
					sr: 1,
					ks: {
						o: {
							a: 0,
							k: 100,
							ix: 11
						},
						r: {
							a: 0,
							k: 0,
							ix: 10
						},
						p: {
							s: !0,
							x: {
								a: 0,
								k: 35.875,
								ix: 3
							},
							y: {
								a: 1,
								k: [
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.358],
											y: [0]
										},
										t: 13,
										s: [36]
									},
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.614],
											y: [0]
										},
										t: 24,
										s: [28]
									},
									{
										i: {
											x: [.369],
											y: [1]
										},
										o: {
											x: [.364],
											y: [0]
										},
										t: 47,
										s: [38]
									},
									{
										i: {
											x: [.384],
											y: [1]
										},
										o: {
											x: [.344],
											y: [0]
										},
										t: 64,
										s: [32]
									},
									{
										t: 82,
										s: [36]
									}
								],
								ix: 4
							}
						},
						a: {
							a: 0,
							k: [
								0,
								0,
								0
							],
							ix: 1,
							l: 2
						},
						s: {
							a: 0,
							k: [
								100,
								100,
								100
							],
							ix: 6,
							l: 2
						}
					},
					ao: 0,
					shapes: [{
						ty: "gr",
						it: [
							{
								d: 1,
								ty: "el",
								s: {
									a: 1,
									k: [
										{
											i: {
												x: [.833, .833],
												y: [.851, .851]
											},
											o: {
												x: [.167, .167],
												y: [.149, .149]
											},
											t: 43,
											s: [14, 14]
										},
										{
											i: {
												x: [.833, .833],
												y: [.833, .833]
											},
											o: {
												x: [.167, .167],
												y: [.167, .167]
											},
											t: 48,
											s: [16, 16]
										},
										{
											t: 72,
											s: [14, 14]
										}
									],
									ix: 2
								},
								p: {
									a: 0,
									k: [0, 0],
									ix: 3
								},
								nm: "Ellipse Path 1",
								mn: "ADBE Vector Shape - Ellipse",
								hd: !1
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: e,
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: !1
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [23, 0],
									ix: 2
								},
								a: {
									a: 0,
									k: [0, 0],
									ix: 1
								},
								s: {
									a: 0,
									k: [100, 100],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Ellipse 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: !1
					}],
					ip: 0,
					op: 102,
					st: 0,
					ct: 1,
					bm: 0
				},
				{
					ddd: 0,
					ind: 2,
					ty: 4,
					nm: "dot2",
					sr: 1,
					ks: {
						o: {
							a: 0,
							k: 100,
							ix: 11
						},
						r: {
							a: 0,
							k: 0,
							ix: 10
						},
						p: {
							s: !0,
							x: {
								a: 0,
								k: 35.875,
								ix: 3
							},
							y: {
								a: 1,
								k: [
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.358],
											y: [0]
										},
										t: 8,
										s: [36]
									},
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.614],
											y: [0]
										},
										t: 19,
										s: [28]
									},
									{
										i: {
											x: [.369],
											y: [1]
										},
										o: {
											x: [.364],
											y: [0]
										},
										t: 42,
										s: [38]
									},
									{
										i: {
											x: [.384],
											y: [1]
										},
										o: {
											x: [.344],
											y: [0]
										},
										t: 59,
										s: [32]
									},
									{
										t: 77,
										s: [36]
									}
								],
								ix: 4
							}
						},
						a: {
							a: 0,
							k: [
								0,
								0,
								0
							],
							ix: 1,
							l: 2
						},
						s: {
							a: 0,
							k: [
								100,
								100,
								100
							],
							ix: 6,
							l: 2
						}
					},
					ao: 0,
					shapes: [{
						ty: "gr",
						it: [
							{
								d: 1,
								ty: "el",
								s: {
									a: 1,
									k: [
										{
											i: {
												x: [.833, .833],
												y: [.851, .851]
											},
											o: {
												x: [.167, .167],
												y: [.149, .149]
											},
											t: 38,
											s: [14, 14]
										},
										{
											i: {
												x: [.833, .833],
												y: [.833, .833]
											},
											o: {
												x: [.167, .167],
												y: [.167, .167]
											},
											t: 43,
											s: [16, 16]
										},
										{
											t: 67,
											s: [14, 14]
										}
									],
									ix: 2
								},
								p: {
									a: 0,
									k: [0, 0],
									ix: 3
								},
								nm: "Ellipse Path 1",
								mn: "ADBE Vector Shape - Ellipse",
								hd: !1
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: e,
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: !1
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [0, 0],
									ix: 2
								},
								a: {
									a: 0,
									k: [0, 0],
									ix: 1
								},
								s: {
									a: 0,
									k: [100, 100],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Ellipse 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: !1
					}],
					ip: 0,
					op: 102,
					st: 0,
					ct: 1,
					bm: 0
				},
				{
					ddd: 0,
					ind: 3,
					ty: 4,
					nm: "dot1",
					sr: 1,
					ks: {
						o: {
							a: 0,
							k: 100,
							ix: 11
						},
						r: {
							a: 0,
							k: 0,
							ix: 10
						},
						p: {
							s: !0,
							x: {
								a: 0,
								k: 35.875,
								ix: 3
							},
							y: {
								a: 1,
								k: [
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.358],
											y: [0]
										},
										t: 3,
										s: [36]
									},
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.614],
											y: [0]
										},
										t: 14,
										s: [28]
									},
									{
										i: {
											x: [.369],
											y: [1]
										},
										o: {
											x: [.364],
											y: [0]
										},
										t: 37,
										s: [38]
									},
									{
										i: {
											x: [.384],
											y: [1]
										},
										o: {
											x: [.344],
											y: [0]
										},
										t: 54,
										s: [32]
									},
									{
										t: 72,
										s: [36]
									}
								],
								ix: 4
							}
						},
						a: {
							a: 0,
							k: [
								0,
								0,
								0
							],
							ix: 1,
							l: 2
						},
						s: {
							a: 0,
							k: [
								100,
								100,
								100
							],
							ix: 6,
							l: 2
						}
					},
					ao: 0,
					shapes: [{
						ty: "gr",
						it: [
							{
								d: 1,
								ty: "el",
								s: {
									a: 1,
									k: [
										{
											i: {
												x: [.833, .833],
												y: [.851, .851]
											},
											o: {
												x: [.167, .167],
												y: [.149, .149]
											},
											t: 33,
											s: [14, 14]
										},
										{
											i: {
												x: [.833, .833],
												y: [.833, .833]
											},
											o: {
												x: [.167, .167],
												y: [.167, .167]
											},
											t: 38,
											s: [16, 16]
										},
										{
											t: 62,
											s: [14, 14]
										}
									],
									ix: 2
								},
								p: {
									a: 0,
									k: [0, 0],
									ix: 3
								},
								nm: "Ellipse Path 1",
								mn: "ADBE Vector Shape - Ellipse",
								hd: !1
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: e,
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: !1
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [-23, 0],
									ix: 2
								},
								a: {
									a: 0,
									k: [0, 0],
									ix: 1
								},
								s: {
									a: 0,
									k: [100, 100],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Ellipse 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: !1
					}],
					ip: 0,
					op: 102,
					st: 0,
					ct: 1,
					bm: 0
				},
				{
					ddd: 0,
					ind: 1,
					ty: 4,
					nm: "dot3",
					sr: 1,
					ks: {
						o: {
							a: 0,
							k: 100,
							ix: 11
						},
						r: {
							a: 0,
							k: 0,
							ix: 10
						},
						p: {
							s: !0,
							x: {
								a: 0,
								k: 35.875,
								ix: 3
							},
							y: {
								a: 1,
								k: [
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.358],
											y: [0]
										},
										t: 13,
										s: [36]
									},
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.614],
											y: [0]
										},
										t: 24,
										s: [28]
									},
									{
										i: {
											x: [.369],
											y: [1]
										},
										o: {
											x: [.364],
											y: [0]
										},
										t: 47,
										s: [38]
									},
									{
										i: {
											x: [.384],
											y: [1]
										},
										o: {
											x: [.344],
											y: [0]
										},
										t: 64,
										s: [32]
									},
									{
										t: 82,
										s: [36]
									}
								],
								ix: 4
							}
						},
						a: {
							a: 0,
							k: [
								0,
								0,
								0
							],
							ix: 1,
							l: 2
						},
						s: {
							a: 0,
							k: [
								100,
								100,
								100
							],
							ix: 6,
							l: 2
						}
					},
					ao: 0,
					shapes: [{
						ty: "gr",
						it: [
							{
								d: 1,
								ty: "el",
								s: {
									a: 1,
									k: [
										{
											i: {
												x: [.833, .833],
												y: [.851, .851]
											},
											o: {
												x: [.167, .167],
												y: [.149, .149]
											},
											t: 43,
											s: [14, 14]
										},
										{
											i: {
												x: [.833, .833],
												y: [.833, .833]
											},
											o: {
												x: [.167, .167],
												y: [.167, .167]
											},
											t: 48,
											s: [16, 16]
										},
										{
											t: 72,
											s: [14, 14]
										}
									],
									ix: 2
								},
								p: {
									a: 0,
									k: [0, 0],
									ix: 3
								},
								nm: "Ellipse Path 1",
								mn: "ADBE Vector Shape - Ellipse",
								hd: !1
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: e,
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: !1
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [23, 0],
									ix: 2
								},
								a: {
									a: 0,
									k: [0, 0],
									ix: 1
								},
								s: {
									a: 0,
									k: [100, 100],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Ellipse 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: !1
					}],
					ip: 0,
					op: 102,
					st: 0,
					ct: 1,
					bm: 0
				},
				{
					ddd: 0,
					ind: 2,
					ty: 4,
					nm: "dot2",
					sr: 1,
					ks: {
						o: {
							a: 0,
							k: 100,
							ix: 11
						},
						r: {
							a: 0,
							k: 0,
							ix: 10
						},
						p: {
							s: !0,
							x: {
								a: 0,
								k: 35.875,
								ix: 3
							},
							y: {
								a: 1,
								k: [
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.358],
											y: [0]
										},
										t: 8,
										s: [36]
									},
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.614],
											y: [0]
										},
										t: 19,
										s: [28]
									},
									{
										i: {
											x: [.369],
											y: [1]
										},
										o: {
											x: [.364],
											y: [0]
										},
										t: 42,
										s: [38]
									},
									{
										i: {
											x: [.384],
											y: [1]
										},
										o: {
											x: [.344],
											y: [0]
										},
										t: 59,
										s: [32]
									},
									{
										t: 77,
										s: [36]
									}
								],
								ix: 4
							}
						},
						a: {
							a: 0,
							k: [
								0,
								0,
								0
							],
							ix: 1,
							l: 2
						},
						s: {
							a: 0,
							k: [
								100,
								100,
								100
							],
							ix: 6,
							l: 2
						}
					},
					ao: 0,
					shapes: [{
						ty: "gr",
						it: [
							{
								d: 1,
								ty: "el",
								s: {
									a: 1,
									k: [
										{
											i: {
												x: [.833, .833],
												y: [.851, .851]
											},
											o: {
												x: [.167, .167],
												y: [.149, .149]
											},
											t: 38,
											s: [14, 14]
										},
										{
											i: {
												x: [.833, .833],
												y: [.833, .833]
											},
											o: {
												x: [.167, .167],
												y: [.167, .167]
											},
											t: 43,
											s: [16, 16]
										},
										{
											t: 67,
											s: [14, 14]
										}
									],
									ix: 2
								},
								p: {
									a: 0,
									k: [0, 0],
									ix: 3
								},
								nm: "Ellipse Path 1",
								mn: "ADBE Vector Shape - Ellipse",
								hd: !1
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: e,
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: !1
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [0, 0],
									ix: 2
								},
								a: {
									a: 0,
									k: [0, 0],
									ix: 1
								},
								s: {
									a: 0,
									k: [100, 100],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Ellipse 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: !1
					}],
					ip: 0,
					op: 102,
					st: 0,
					ct: 1,
					bm: 0
				},
				{
					ddd: 0,
					ind: 3,
					ty: 4,
					nm: "dot1",
					sr: 1,
					ks: {
						o: {
							a: 0,
							k: 100,
							ix: 11
						},
						r: {
							a: 0,
							k: 0,
							ix: 10
						},
						p: {
							s: !0,
							x: {
								a: 0,
								k: 35.875,
								ix: 3
							},
							y: {
								a: 1,
								k: [
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.358],
											y: [0]
										},
										t: 3,
										s: [36]
									},
									{
										i: {
											x: [.667],
											y: [1]
										},
										o: {
											x: [.614],
											y: [0]
										},
										t: 14,
										s: [28]
									},
									{
										i: {
											x: [.369],
											y: [1]
										},
										o: {
											x: [.364],
											y: [0]
										},
										t: 37,
										s: [38]
									},
									{
										i: {
											x: [.384],
											y: [1]
										},
										o: {
											x: [.344],
											y: [0]
										},
										t: 54,
										s: [32]
									},
									{
										t: 72,
										s: [36]
									}
								],
								ix: 4
							}
						},
						a: {
							a: 0,
							k: [
								0,
								0,
								0
							],
							ix: 1,
							l: 2
						},
						s: {
							a: 0,
							k: [
								100,
								100,
								100
							],
							ix: 6,
							l: 2
						}
					},
					ao: 0,
					shapes: [{
						ty: "gr",
						it: [
							{
								d: 1,
								ty: "el",
								s: {
									a: 1,
									k: [
										{
											i: {
												x: [.833, .833],
												y: [.851, .851]
											},
											o: {
												x: [.167, .167],
												y: [.149, .149]
											},
											t: 33,
											s: [14, 14]
										},
										{
											i: {
												x: [.833, .833],
												y: [.833, .833]
											},
											o: {
												x: [.167, .167],
												y: [.167, .167]
											},
											t: 38,
											s: [16, 16]
										},
										{
											t: 62,
											s: [14, 14]
										}
									],
									ix: 2
								},
								p: {
									a: 0,
									k: [0, 0],
									ix: 3
								},
								nm: "Ellipse Path 1",
								mn: "ADBE Vector Shape - Ellipse",
								hd: !1
							},
							{
								ty: "fl",
								c: {
									a: 0,
									k: e,
									ix: 4
								},
								o: {
									a: 0,
									k: 100,
									ix: 5
								},
								r: 1,
								bm: 0,
								nm: "Fill 1",
								mn: "ADBE Vector Graphic - Fill",
								hd: !1
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [-23, 0],
									ix: 2
								},
								a: {
									a: 0,
									k: [0, 0],
									ix: 1
								},
								s: {
									a: 0,
									k: [100, 100],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Ellipse 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: !1
					}],
					ip: 0,
					op: 102,
					st: 0,
					ct: 1,
					bm: 0
				}
			],
			markers: [],
			props: {}
		};
	}
	l.default = g;
}), 98);
