__d("GeoFileSelector.react", [
	"fbt",
	"FileDropTarget.react",
	"FileValidationUtils",
	"GeoBaseFormInputLayout.react",
	"GeoBaseText.react",
	"GeoButton.react",
	"GeoFileIconUtils",
	"GeoFlexbox.react",
	"GeoGuidanceCard.react",
	"GeoGuidanceCardHeader.react",
	"GeoHStack.react",
	"GeoHeading.react",
	"GeoIcon.react",
	"GeoList.react",
	"GeoListGenericItem.react",
	"GeoMediaItem.react",
	"GeoNotice.react",
	"GeoPopoverUtils",
	"GeoPrivateMakeComponent",
	"GeoPrivatePressable.react",
	"GeoText.react",
	"GeoTooltip.react",
	"GeoVStack.react",
	"geoMargin",
	"gkx",
	"joinDomIDs",
	"meta-brand-caret-down-outline-16",
	"meta-brand-caret-up-outline-16",
	"meta-brand-container-with-lid-outline-16",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useBoolean",
	"useFileInput",
	"useGeoPrivateAnimationInlineExpandStyles",
	"useGeoTheme",
	"useUniqueID"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo, _ = d.useState, f = r("gkx")("24835"), g = {
		root: {
			alignSelf: "xkh2ocl",
			borderTopStyle: "xlya59e",
			borderInlineEndStyle: "xwy3id5",
			borderBottomStyle: "xpvcztv",
			borderInlineStartStyle: "x11nt7xy",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			textAlign: "x2b8uid",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		container: {
			cursor: "x1ypdohk",
			height: "x5yr21d",
			$$css: !0
		},
		containerDisabled: {
			cursor: "xmper1u",
			$$css: !0
		},
		imageDisabled: {
			filter: "xy712c7",
			$$css: !0
		},
		promptButton: {
			cursor: "x1ypdohk",
			display: "xt0psk2",
			$$css: !0
		},
		promptButtonHover: {
			textDecoration: "x1bvjpef",
			$$css: !0
		},
		fileList: {
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		fileListRow: {
			width: "xh8yej3",
			$$css: !0
		}
	}, h = 434, y = ["*"], C = s._(
		/*BTDS*/
		""
	), b = function(t) {
		for (var e = [], n = new Map(), r = 0; r < t.length; r++) e.push({
			fileIndex: r,
			dupCount: 0
		});
		for (; e.length !== 0;) {
			var o = e.shift();
			if (o != null) {
				var a = o.fileIndex, i = t[a], l = o.dupCount, s = l === 0 ? null : "(" + l + ")", u = "" + i.name + (l === 0 ? "" : " (" + l + ")");
				if (!n.has(u)) {
					n.set(u, {
						fileIndex: a,
						suffix: s != null ? s : ""
					});
					continue;
				}
				do
					l += 1, u = i.name + " (" + l + ")";
				while (n.has(u));
				e.push({
					fileIndex: a,
					dupCount: l
				});
			}
		}
		return Array.from(n.entries(), function(e) {
			var t = e[0], n = e[1];
			return {
				fileName: t,
				data: n
			};
		}).sort(function(e, t) {
			return e.data.fileIndex - t.data.fileIndex;
		}).map(function(e) {
			var t = e.data, n = e.fileName;
			return {
				name: n,
				suffix: t.suffix
			};
		});
	};
	function v(e) {
		var t = o("react-compiler-runtime").c(100), n = e.addon, a = e.allowMultiple, i = e.customValidators, l = e["data-clear-testid"], u = e["data-dropzone-testid"], d = e["data-expand-testid"], m = e["data-file-testid"], p = e["data-testid"], f = e["data-upload-testid"], v = e.description, k = e.disabledMessage, I = e.errorMessage, T = e.fileTypes, D = e.image, x = e.infoMessage, $ = e.infoTooltip, P = e.isDisabled, N = e.isLabelHidden, M = e.isOptional, w = e.label, A = e.maxFileListHeight, F = e.maxFileSize, O = e.onChange, B = e.showSelectedFileNames, W = e.value, q = e.variant, U = e.warningMessage, V = e.xstyle, H = a === void 0 ? !1 : a, G = T === void 0 ? y : T, z = P === void 0 ? !1 : P, j = M === void 0 ? !1 : M, K = A === void 0 ? h : A, Q = F === void 0 ? Number.POSITIVE_INFINITY : F, X;
		t[0] !== G ? (X = o("FileValidationUtils").addCrossBrowserFileTypes(G), t[0] = G, t[1] = X) : X = t[1];
		var Y = X, J;
		t[2] !== H || t[3] !== Y ? (J = {
			accept: Y,
			allowMultiple: H
		}, t[2] = H, t[3] = Y, t[4] = J) : J = t[4];
		var Z = J, ee = _(null), te = ee[0], ne = ee[1], re = r("useUniqueID")(), oe = r("useUniqueID")(), ae, ie;
		t[5] !== I || t[6] !== x || t[7] !== U ? (I != null ? (ie = I, ae = "error") : U != null ? (ie = U, ae = "warning") : (ie = x, ae = "info"), t[5] = I, t[6] = x, t[7] = U, t[8] = ae, t[9] = ie) : (ae = t[8], ie = t[9]);
		var le = _(!1), se = le[0], ue = le[1], ce = r("useGeoTheme")(), de = ce.selectTextColor, me;
		t[10] !== z || t[11] !== se ? (me = {
			isActive: se,
			isDisabled: z
		}, t[10] = z, t[11] = se, t[12] = me) : me = t[12];
		var pe = E(me), _e;
		t[13] !== de ? (_e = de({ color: "link" }), t[13] = de, t[14] = _e) : _e = t[14];
		var fe = _e, ge;
		t[15] !== i ? (ge = i != null ? i : [], t[15] = i, t[16] = ge) : ge = t[16];
		var he;
		t[17] !== Z.accept ? (he = function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._param("name", t), s._param("filetypes", Z.accept.join(", "))]
			);
		}, t[17] = Z.accept, t[18] = he) : he = t[18];
		var ye;
		t[19] !== Z.accept || t[20] !== he ? (ye = o("FileValidationUtils").createFileTypeValidator(Z.accept, he), t[19] = Z.accept, t[20] = he, t[21] = ye) : ye = t[21];
		var Ce;
		t[22] !== Q ? (Ce = function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._param("name", t), s._param("size limit", Q >= 1e3 ? Math.round(Q / 1e3) + " MB" : Q + " KB")]
			);
		}, t[22] = Q, t[23] = Ce) : Ce = t[23];
		var be;
		t[24] !== Q || t[25] !== Ce ? (be = o("FileValidationUtils").createFileSizeValidator(Q, Ce), t[24] = Q, t[25] = Ce, t[26] = be) : be = t[26];
		var ve;
		t[27] !== ge || t[28] !== ye || t[29] !== be ? (ve = [].concat(ge, [ye, be]), t[27] = ge, t[28] = ye, t[29] = be, t[30] = ve) : ve = t[30];
		var Se = ve, Re;
		t[31] !== H || t[32] !== Z || t[33] !== W || t[34] !== z || t[35] !== O || t[36] !== Se ? (Re = function(t) {
			if (!z) {
				var e = o("FileValidationUtils").getUniqueNewFiles(t, W, Z), n = o("FileValidationUtils").validateFiles(e, Se), r = n.errors, a = n.validFiles;
				H ? O([].concat(W, a)) : a.length > 0 && O([a[0]]), ne(r);
			}
		}, t[31] = H, t[32] = Z, t[33] = W, t[34] = z, t[35] = O, t[36] = Se, t[37] = Re) : Re = t[37];
		var Le = Re, Ee = r("useFileInput")(Le, Z), ke;
		t[38] !== O ? (ke = function() {
			ne(null), O([]);
		}, t[38] = O, t[39] = ke) : ke = t[39];
		var Ie = ke, Te;
		t[40] !== W ? (Te = b(W), t[40] = W, t[41] = Te) : Te = t[41];
		var De = Te, xe = typeof B != "function", $e;
		t[42] !== H || t[43] !== xe ? ($e = xe ? s._(
			/*BTDS*/
			"",
			[s._plural(H ? 2 : 1)]
		) : s._(
			/*BTDS*/
			""
		), t[42] = H, t[43] = xe, t[44] = $e) : $e = t[44];
		var Pe = $e, Ne;
		t[45] !== H || t[46] !== Ie || t[47] !== l || t[48] !== pe || t[49] !== k || t[50] !== Pe || t[51] !== u || t[52] !== (te == null ? void 0 : te[0]) || t[53] !== De || t[54] !== W || t[55] !== D || t[56] !== oe || t[57] !== z || t[58] !== fe || t[59] !== Le || t[60] !== Ee || t[61] !== B || t[62] !== xe || t[63] !== ae || t[64] !== ie || t[65] !== re || t[66] !== f || t[67] !== q ? (Ne = function(t) {
			var e = t.describedBy, n = t.inputID;
			return c.jsxs(r("GeoVStack.react"), {
				grow: 1,
				xstyle: [g.container, z && g.containerDisabled],
				children: [
					c.jsxs(r("FileDropTarget.react"), {
						describedby: r("joinDomIDs")(re, oe),
						onActiveChange: ue,
						onClick: z ? void 0 : Ee,
						onDropFiles: Le,
						testID: u,
						xstyle: pe,
						children: [
							c.jsx(r("GeoFlexbox.react"), {
								xstyle: z && g.imageDisabled,
								children: D
							}),
							z ? c.jsx(r("GeoBaseText.react"), {
								color: "value",
								display: "block",
								isDisabled: !0,
								size: "value",
								textAlign: "center",
								children: k != null ? k : s._(
									/*BTDS*/
									""
								)
							}) : c.jsx(r("GeoText.react"), {
								display: "block",
								textAlign: "center",
								children: Pe
							}),
							q !== "drop" && !z && c.jsxs(r("GeoBaseText.react"), {
								color: "placeholder",
								display: "block",
								size: "value",
								textAlign: "center",
								children: [
									s._(
										/*BTDS*/
										""
									),
									" ",
									c.jsx(r("GeoPrivatePressable.react"), {
										accessibilityRelationship: { describedby: e },
										accessibilityRole: "button",
										nativeID: n,
										onPress: Ee,
										testID: f,
										xstyle: function(t) {
											var e = t.hovered;
											return [
												fe,
												g.promptButton,
												e && g.promptButtonHover
											];
										},
										children: s._(
											/*BTDS*/
											"",
											[s._plural(H ? 2 : 1)]
										)
									})
								]
							}),
							W.length > 0 && !xe ? c.jsxs(c.Fragment, { children: [
								c.jsx(r("GeoBaseText.react"), {
									color: "placeholder",
									size: "value",
									xstyle: r("geoMargin").top16,
									children: s._(
										/*BTDS*/
										"",
										[s._plural(W.length), s._param("files", W.length)]
									)
								}),
								B === !0 && De.map(S),
								typeof B == "function" && c.jsx(r("GeoBaseText.react"), {
									color: "placeholder",
									display: "block",
									size: "value",
									textAlign: "center",
									children: B(W)
								})
							] }) : null
						]
					}),
					ie != null && c.jsx(L, {
						id: re,
						showUpdatedFileList: xe,
						status: ae,
						statusMessage: ie
					}),
					(te == null ? void 0 : te[0]) != null && c.jsx(L, {
						id: oe,
						showUpdatedFileList: xe,
						status: "error",
						statusMessage: te == null ? void 0 : te[0]
					}),
					W.length > 0 && !xe && c.jsx(r("GeoButton.react"), {
						"data-testid": void 0,
						isDisabled: z,
						label: W.length === 1 ? C : s._(
							/*BTDS*/
							""
						),
						onClick: Ie,
						width: "100%"
					})
				]
			});
		}, t[45] = H, t[46] = Ie, t[47] = l, t[48] = pe, t[49] = k, t[50] = Pe, t[51] = u, t[52] = te == null ? void 0 : te[0], t[53] = De, t[54] = W, t[55] = D, t[56] = oe, t[57] = z, t[58] = fe, t[59] = Le, t[60] = Ee, t[61] = B, t[62] = xe, t[63] = ae, t[64] = ie, t[65] = re, t[66] = f, t[67] = q, t[68] = Ne) : Ne = t[68];
		var Me;
		t[69] !== n || t[70] !== v || t[71] !== $ || t[72] !== z || t[73] !== N || t[74] !== j || t[75] !== w || t[76] !== Ne || t[77] !== p || t[78] !== V ? (Me = c.jsx(r("GeoBaseFormInputLayout.react"), {
			addon: n,
			"data-testid": void 0,
			description: v,
			isDisabled: z,
			isLabelHidden: N,
			isOptional: j,
			label: w,
			tooltip: $,
			xstyle: V,
			children: Ne
		}), t[69] = n, t[70] = v, t[71] = $, t[72] = z, t[73] = N, t[74] = j, t[75] = w, t[76] = Ne, t[77] = p, t[78] = V, t[79] = Me) : Me = t[79];
		var we = Me, Ae = r("useBoolean")(B === !0), Fe = Ae.toggle, Oe = Ae.value;
		if (xe) {
			var Be = Oe ? o("meta-brand-caret-up-outline-16").metaBrandCaretUpOutline16 : o("meta-brand-caret-down-outline-16").metaBrandCaretDownOutline16, We;
			t[80] !== Oe ? (We = Oe ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[80] = Oe, t[81] = We) : We = t[81];
			var qe = We, Ue;
			t[82] !== we ? (Ue = c.jsx(r("GeoFlexbox.react"), {
				shrink: 0,
				children: we
			}), t[82] = we, t[83] = Ue) : Ue = t[83];
			var Ve;
			t[84] !== Ie || t[85] !== l || t[86] !== Be || t[87] !== qe || t[88] !== d || t[89] !== De || t[90] !== m || t[91] !== W || t[92] !== Oe || t[93] !== K || t[94] !== O || t[95] !== Fe ? (Ve = W.length > 0 ? c.jsxs(r("GeoVStack.react"), { children: [c.jsxs(r("GeoHStack.react"), {
				alignItems: "center",
				justifyContent: "space-between",
				shrink: 0,
				xstyle: r("geoMargin").bottom8,
				children: [c.jsxs(r("GeoHStack.react"), {
					alignItems: "center",
					children: [c.jsx(r("GeoHeading.react"), {
						level: 3,
						children: s._(
							/*BTDS*/
							"",
							[s._plural(W.length), s._param("files", W.length)]
						)
					}), c.jsx(r("GeoButton.react"), {
						"data-testid": void 0,
						icon: Be,
						isLabelHidden: !0,
						label: qe,
						onClick: function() {
							return Fe();
						},
						tooltip: c.jsx(r("GeoTooltip.react"), {
							content: qe,
							renderDelay: o("GeoPopoverUtils").DEFAULT_TOOLTIP_DELAY
						}),
						variant: "flat"
					})]
				}), c.jsx(r("GeoButton.react"), {
					"data-testid": void 0,
					label: W.length === 1 ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					onClick: Ie
				})]
			}), c.jsx(r("GeoVStack.react"), {
				xstyle: g.fileList,
				children: c.jsx(R, {
					fileDisplayNames: De,
					fileTestID: m,
					isListExpanded: Oe,
					maxFileListHeight: K,
					onChange: O,
					value: W
				})
			})] }) : null, t[84] = Ie, t[85] = l, t[86] = Be, t[87] = qe, t[88] = d, t[89] = De, t[90] = m, t[91] = W, t[92] = Oe, t[93] = K, t[94] = O, t[95] = Fe, t[96] = Ve) : Ve = t[96];
			var He;
			return t[97] !== Ue || t[98] !== Ve ? (He = c.jsxs(r("GeoVStack.react"), { children: [Ue, Ve] }), t[97] = Ue, t[98] = Ve, t[99] = He) : He = t[99], He;
		}
		return we;
	}
	function S(e) {
		var t = e.name, n = e.suffix;
		if (n != null) {
			var o = t.lastIndexOf(n);
			o !== -1 && (t = t.substring(0, o).trim());
		}
		return c.jsxs(r("GeoFlexbox.react"), {
			direction: "row",
			children: [c.jsx(r("GeoBaseText.react"), {
				color: "placeholder",
				display: "block",
				size: "value",
				textAlign: "center",
				children: t
			}), n != null && c.jsx(r("GeoBaseText.react"), {
				color: "warning",
				display: "block",
				size: "value",
				textAlign: "center",
				xstyle: r("geoMargin").horiz8,
				children: n
			})]
		}, e.name);
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		var n = o("react-compiler-runtime").c(13), a = t.fileDisplayNames, i = t.fileTestID, l = t.isListExpanded, s = t.maxFileListHeight, u = t.onChange, d = t.value, m;
		n[0] !== l ? (m = {
			isExpanded: l,
			isAnimated: f,
			runAnimationOnMount: !1
		}, n[0] = l, n[1] = m) : m = n[1];
		var p = r("useGeoPrivateAnimationInlineExpandStyles")(m), _ = p.animatedContentStyle, h = p.animatedContentXStyle, y = p.innerContainerRef, b = p.isComponentVisible, v = p.outerContainerStyle, S;
		return n[2] !== _ || n[3] !== h || n[4] !== a || n[5] !== i || n[6] !== d || n[7] !== y || n[8] !== b || n[9] !== s || n[10] !== u || n[11] !== v ? (S = b && c.jsx("div", {
			style: v,
			children: c.jsx("div", babelHelpers.extends({ style: _ }, (e || (e = r("stylex"))).props(h), { children: c.jsx("div", {
				ref: y,
				style: { maxHeight: s },
				children: c.jsx(r("GeoList.react"), {
					density: "dense",
					variant: "divided",
					children: a.map(function(e, t) {
						var n = e.name;
						return c.jsx(r("GeoListGenericItem.react"), { children: c.jsxs(r("GeoFlexbox.react"), {
							alignItems: "center",
							"data-testid": void 0,
							justifyContent: "space-between",
							xstyle: g.fileListRow,
							children: [c.jsxs(r("GeoHStack.react"), {
								alignItems: "center",
								children: [c.jsx(r("GeoMediaItem.react"), {
									fit: "cover",
									hasMediaBackground: !1,
									media: c.jsx(r("GeoIcon.react"), { icon: o("GeoFileIconUtils").getFileIcon(e.name) }),
									ratio: "square",
									size: 16
								}), c.jsx(r("GeoText.react"), {
									display: "block",
									maxLines: 1,
									children: n
								})]
							}), c.jsx(r("GeoButton.react"), {
								icon: o("meta-brand-container-with-lid-outline-16").metaBrandContainerWithLidOutline16,
								isLabelHidden: !0,
								label: C,
								onClick: function() {
									var e = o("FileValidationUtils").removeFile(d[t], d);
									u(e);
								},
								tooltip: c.jsx(r("GeoTooltip.react"), {
									content: C,
									renderDelay: o("GeoPopoverUtils").DEFAULT_TOOLTIP_DELAY
								}),
								variant: "flat"
							})]
						}) }, n);
					})
				})
			}) }))
		}), n[2] = _, n[3] = h, n[4] = a, n[5] = i, n[6] = d, n[7] = y, n[8] = b, n[9] = s, n[10] = u, n[11] = v, n[12] = S) : S = n[12], S;
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(10), n = e.id, a = e.showUpdatedFileList, i = e.status, l = e.statusMessage;
		if (l == null) return null;
		if (a) {
			var s = i === "info" ? "active-feedback" : i, u;
			t[0] !== l ? (u = c.jsx(r("GeoGuidanceCardHeader.react"), { heading: l }), t[0] = l, t[1] = u) : u = t[1];
			var d;
			return t[2] !== s || t[3] !== n || t[4] !== u ? (d = c.jsx(r("GeoGuidanceCard.react"), {
				header: u,
				id: n,
				status: s
			}), t[2] = s, t[3] = n, t[4] = u, t[5] = d) : d = t[5], d;
		}
		var m;
		return t[6] !== n || t[7] !== i || t[8] !== l ? (m = c.jsx(r("GeoNotice.react"), {
			id: n,
			status: i,
			children: l
		}), t[6] = n, t[7] = i, t[8] = l, t[9] = m) : m = t[9], m;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(30), n = e.isActive, a = e.isDisabled, i = r("useGeoTheme")(), l = i.selectBorderColor, s = i.selectBorderRadius, u = i.selectInteractiveColorPalette, c = i.selectSpacing, d = i.selectStaticBackgroundColor, m = i.selectTransition, p;
		t[0] !== d ? (p = d({ surface: "flat" }), t[0] = d, t[1] = p) : p = t[1];
		var _;
		t[2] !== s ? (_ = s({ context: "container" }), t[2] = s, t[3] = _) : _ = t[3];
		var f;
		t[4] !== l ? (f = l({
			color: "element",
			isDisabled: !0
		}), t[4] = l, t[5] = f) : f = t[5];
		var h;
		t[6] !== m ? (h = m({
			duration: "fast",
			timing: "soft"
		}), t[6] = m, t[7] = h) : h = t[7];
		var y;
		t[8] !== c ? (y = c({
			bounds: "internal",
			context: "container",
			relation: "component"
		}), t[8] = c, t[9] = y) : y = t[9];
		var C;
		t[10] !== n || t[11] !== a || t[12] !== u ? (C = n && !a && u({
			color: "selected",
			isActive: !0
		}), t[10] = n, t[11] = a, t[12] = u, t[13] = C) : C = t[13];
		var b;
		t[14] !== n || t[15] !== a || t[16] !== l ? (b = n && !a && l({ color: "blue" }), t[14] = n, t[15] = a, t[16] = l, t[17] = b) : b = t[17];
		var v;
		t[18] !== a || t[19] !== d ? (v = a && d({ surface: "wash" }), t[18] = a, t[19] = d, t[20] = v) : v = t[20];
		var S;
		return t[21] !== p || t[22] !== _ || t[23] !== f || t[24] !== h || t[25] !== y || t[26] !== C || t[27] !== b || t[28] !== v ? (S = [
			g.root,
			p,
			_,
			f,
			h,
			y,
			C,
			b,
			v
		], t[21] = p, t[22] = _, t[23] = f, t[24] = h, t[25] = y, t[26] = C, t[27] = b, t[28] = v, t[29] = S) : S = t[29], S;
	}
	var k = o("GeoPrivateMakeComponent").makeGeoComponent("GeoFileSelector", v);
	l.default = k;
}), 226);
