__d("WAWebCustomerProfileNotesField.react", [
	"fbt",
	"WAJids",
	"WAWebFlex.react",
	"WAWebFormatConfigurationConversation",
	"WAWebLinkify",
	"WAWebNoop",
	"WAWebNoteAction",
	"WAWebNotesLogEvents",
	"WAWebNotesPrivacyStrings",
	"WAWebNotesUtils",
	"WAWebRichTextField.react",
	"WAWebRichTextFieldEmojiTextBlock.react",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSIconIcStickyNote2.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAsyncSaving",
	"useWAWebBeforeUnload",
	"useWAWebOnScreen"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = 100, h = {
		blockQuoteEnabled: !0,
		bulletPointsEnabled: !0,
		floatingToolbarEnabled: !0,
		inlineCodeEnabled: !0,
		linksEnabled: !0,
		numberedListEnabled: !0,
		textFormatEnabled: !0,
		textFormatShortcutsEnabled: !0
	}, y = {
		row: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		editButtonContainer: {
			marginInlineStart: "xvc5jky",
			opacity: "xg01cxk",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		editButtonVisible: {
			opacity: "x1hc1fzr",
			$$css: !0
		},
		iconContainer: {
			color: "xhslqc4",
			height: "x1nqnulx",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			width: "x1xvr5cs",
			$$css: !0
		},
		fieldContainer: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		editActions: {
			columnGap: "x1trrmfo",
			marginTop: "x1380le5",
			width: "xh8yej3",
			$$css: !0
		},
		richTextOverride: {
			borderTopColor: "x1v8p93f",
			borderBottomColor: "x16stqrj",
			borderTopStyle: "x1ejq31n",
			borderBottomStyle: "x1sy0etr",
			borderTopWidth: "x972fbf",
			borderBottomWidth: "x1qhh985",
			borderInlineStartColor: "xv5lvn5",
			borderInlineEndColor: "x1o3jo1z",
			borderInlineStartStyle: "xstzfhl",
			borderInlineEndStyle: "x18oe1m7",
			borderInlineStartWidth: "x14e42zd",
			borderInlineEndWidth: "x10w94by",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function C(e) {
		var t = o("react-compiler-runtime").c(6), n = e.contact, r = e.noteAsyncState, a;
		if (t[0] !== n.id) {
			var i, l;
			a = o("WAJids").validateChatJid((i = (l = n.id) == null ? void 0 : l.toJid()) != null ? i : ""), t[0] = n.id, t[1] = a;
		} else a = t[1];
		var s = a;
		if (s == null) return null;
		var c;
		return t[2] !== s || t[3] !== n || t[4] !== r ? (c = u.jsx(b, {
			contact: n,
			chatJid: s,
			noteAsyncState: r
		}), t[2] = s, t[3] = n, t[4] = r, t[5] = c) : c = t[5], c;
	}
	function b(e) {
		var t, n = o("react-compiler-runtime").c(12), a = e.chatJid, i = e.contact, l = e.noteAsyncState, s = l.value, c = (t = s == null ? void 0 : s.content) != null ? t : "", d;
		n[0] !== a || n[1] !== i || n[2] !== s || n[3] !== c ? (d = async function(t) {
			if (t !== c) return o("WAWebNotesLogEvents").logNoteSaved(i, {
				content_existed: c !== "",
				has_content: t !== "",
				length: t.length,
				previous_length: c.length
			}), s == null ? o("WAWebNoteAction").noteAddAction({
				chatJid: a,
				content: t,
				type: "unstructured"
			}) : o("WAWebNoteAction").noteEditAction(s.id, "unstructured", a, t, s.createdAt);
		}, n[0] = a, n[1] = i, n[2] = s, n[3] = c, n[4] = d) : d = n[4];
		var m = d, p = r("useWAWebAsyncSaving")(m), _ = p[1];
		if (l.error != null || l.loading) return null;
		var f;
		n[5] !== i || n[6] !== c || n[7] !== _ ? (f = u.jsx(v, {
			contact: i,
			noteContent: c,
			saveNote: _
		}), n[5] = i, n[6] = c, n[7] = _, n[8] = f) : f = n[8];
		var g;
		return n[9] !== i || n[10] !== f ? (g = u.jsx(R, {
			contact: i,
			children: f
		}), n[9] = i, n[10] = f, n[11] = g) : g = n[11], g;
	}
	function v(e) {
		var t = e.contact, n = e.noteContent, a = e.saveNote, i = f(!1), l = i[0], c = i[1], _ = f(!1), C = _[0], b = _[1], v = f(n), R = v[0], L = v[1], E = f(!1), k = E[0], I = E[1], T = f(!1), D = T[0], x = T[1], $ = S(t, l);
		m(function() {
			return L(n);
		}, [n]);
		var P = d(function() {
			return { showConfirmationDialog: R !== n };
		}, [R, n]);
		r("useWAWebBeforeUnload")(P);
		var N = d(function() {
			b(!0);
		}, []), M = d(function() {
			b(!1);
		}, []), w = d(function() {
			L(n), I(!1), c(!0), o("WAWebNotesLogEvents").logEditModeOpened(t), o("WAWebNotesLogEvents").logEditModeSeen(t, { content_existed: n !== "" });
		}, [t, n]), A = d(function() {
			L(n), c(!1);
		}, [n]), F = d(function() {
			R !== n && a(R), c(!1);
		}, [
			R,
			n,
			a
		]), O = l && !k ? r("WAWebNotesPrivacyStrings")() : null, B = p(function() {
			return {
				breakWord: !0,
				formatters: o("WAWebFormatConfigurationConversation").Conversation({
					links: o("WAWebLinkify").findLinks(n, !0),
					parseInlineCode: !0,
					parseLists: !0,
					parseQuotes: !0,
					trusted: !0
				}),
				onReadMore: function() {
					o("WAWebNotesLogEvents").logReadMorePressed(t), x(!0);
				},
				preserveWhitespace: !0,
				readMoreText: s._(
					/*BTDS*/
					""
				),
				textLimit: D ? 1 / 0 : g
			};
		}, [
			t,
			n,
			D
		]), W = s._(
			/*BTDS*/
			""
		);
		if (l) {
			var q;
			return u.jsxs((q = o("WAWebFlex.react")).FlexColumn, {
				align: "stretch",
				xstyle: y.row,
				children: [u.jsxs(q.FlexRow, {
					align: "start",
					gap: 12,
					children: [u.jsx(q.FlexItem, {
						xstyle: y.iconContainer,
						children: u.jsx(r("WDSIconIcStickyNote2.react"), {
							width: 24,
							height: 24
						})
					}), u.jsxs(q.FlexColumn, {
						xstyle: y.fieldContainer,
						children: [u.jsxs("fieldset", {
							className: "xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xdj266r x14z9mp xat24cr x1lziwak x16ovd2e x12xbjc7 x1iw51ew xde1mab xh8yej3",
							children: [u.jsx("legend", {
								className: "xhslqc4 x1pg5gke x181vq82 x1uc92m",
								children: W
							}), u.jsx(o("WAWebRichTextField.react").RichTextField, babelHelpers.extends({
								testid: "customer-profile-note-input",
								value: R,
								lockable: !1,
								lowProfile: !0,
								hideFloatingLabel: !0,
								managed: !1,
								multiline: !0,
								enterIsNewLine: !0,
								minVisibleLines: 3,
								emojiBtnPosition: "side",
								shutEmojiPickerOnSelect: !0,
								selectOnMount: !1,
								maxLength: o("WAWebNotesUtils").MAX_NOTE_LENGTH,
								isRefresh: !0,
								containerXstyle: y.richTextOverride,
								onChange: function(t) {
									var e = t.text;
									e !== R && $(R !== ""), L(e), I(!0);
								},
								onCancel: A
							}, h))]
						}), O != null && u.jsx("div", {
							className: "xav9cv8 x12w63v0",
							children: u.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: O
							})
						})]
					})]
				}), u.jsxs(o("WAWebFlex.react").FlexRow, {
					justify: "end",
					xstyle: y.editActions,
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						size: "small",
						variant: "tonal",
						onPress: A,
						"aria-label": s._(
							/*BTDS*/
							""
						)
					}), u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcCheck.react"),
						size: "small",
						variant: "filled",
						onPress: F,
						"aria-label": s._(
							/*BTDS*/
							""
						)
					})]
				})]
			});
		}
		return u.jsx("div", {
			role: "group",
			onMouseEnter: N,
			onMouseLeave: M,
			className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: n !== "" ? "start" : "center",
				gap: 12,
				xstyle: y.row,
				children: [
					u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: y.iconContainer,
						children: u.jsx(r("WDSIconIcStickyNote2.react"), {
							width: 24,
							height: 24
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: y.fieldContainer,
						children: n !== "" ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: W
						}), u.jsx(r("WAWebRichTextFieldEmojiTextBlock.react"), {
							testid: "customer-profile-note-display",
							textContent: n,
							settings: B,
							isRefresh: !0
						})] }) : u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							maxLines: 1,
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						align: "center",
						justify: "center",
						xstyle: [y.editButtonContainer, C && y.editButtonVisible],
						children: u.jsx("button", {
							className: "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
							onClick: w,
							"aria-label": s._(
								/*BTDS*/
								""
							),
							children: u.jsx(r("WDSIconIcEdit.react"), {
								width: 20,
								height: 20
							})
						})
					})
				]
			})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e, t) {
		var n = o("react-compiler-runtime").c(5), r = _(!1), a, i;
		n[0] !== t ? (a = function() {
			t && (r.current = !1);
		}, i = [t], n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]), m(a, i);
		var l;
		n[3] !== e ? (l = function(n) {
			r.current || (o("WAWebNotesLogEvents").logStartedTypingNote(e, { content_existed: n }), r.current = !0);
		}, n[3] = e, n[4] = l) : l = n[4];
		var s = l;
		return s;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, a = e.contact, i = _(!1), l = _(), s = r("useWAWebOnScreen")(l, r("WAWebNoop")), c, d;
		t[0] !== a || t[1] !== s ? (c = function() {
			s && !i.current && (o("WAWebNotesLogEvents").logNoteViewed(a), i.current = !0);
		}, d = [a, s], t[0] = a, t[1] = s, t[2] = c, t[3] = d) : (c = t[2], d = t[3]), m(c, d);
		var p;
		return t[4] !== n ? (p = u.jsx("span", {
			ref: l,
			children: n
		}), t[4] = n, t[5] = p) : p = t[5], p;
	}
	l.default = C;
}), 226);
