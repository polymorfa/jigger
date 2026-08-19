__d("WAWebWDSRichTextFieldWithPlugins.story", [
	"fbt",
	"WALogger",
	"WAWebBidiParagraphNode",
	"WAWebDelimiterNode",
	"WAWebListBulletNode",
	"WAWebListNumberNode",
	"WAWebMentionNode",
	"WAWebMultilinePlugin",
	"WAWebNonJidMentionNode",
	"WAWebQuoteLineNode",
	"WAWebRichTextField.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebShowroomStory.react",
	"WAWebShowroomUtils",
	"WAWebWDSRichTextField.react",
	"react",
	"useWAWebCheckbox"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState;
	function m(e) {}
	function p(e) {
		return e ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	var _ = [
		o("WAWebMentionNode").MentionNode,
		o("WAWebListBulletNode").ListBulletNode,
		o("WAWebListNumberNode").ListNumberNode,
		o("WAWebQuoteLineNode").QuoteLineNode,
		o("WAWebBidiParagraphNode").BidiParagraphNode,
		o("WAWebDelimiterNode").DelimiterNode,
		o("WAWebNonJidMentionNode").NonJidMentionNode
	], f = "*Bold text* _italic_ ~strikethrough~\n\n* Bullet point 1\n* Bullet point 2\n* Bullet point 3\n\n1. Numbered item 1\n2. Numbered item 2\n3. Numbered item 3\n\n> Block quote text\n> Second line of quote\n\nInline code: `const x = 42;`\n\n```\nfunction hello() {\n  return 'world';\n}\n```";
	function g() {
		return c.jsx("div", {
			className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
			children: c.jsxs(r("WAWebWDSRichTextField.react"), {
				label: "Type a message",
				placeholder: "Type a message",
				rows: 6,
				nodes: _,
				testid: "showroom_wds_rtf_all_formatting_textfield",
				emoji: {
					display: !0,
					keyboardShortcut: !0
				},
				children: [c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, { multiline: !0 }), c.jsx(r("WAWebRichTextInputPlugins.react"), {
					textFormatEnabled: !0,
					bulletPointsEnabled: !0,
					numberedListEnabled: !0,
					blockQuoteEnabled: !0,
					inlineCodeEnabled: !0
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		return c.jsx("div", {
			className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
			children: c.jsxs(r("WAWebWDSRichTextField.react"), {
				label: "Pre-populated content",
				placeholder: "Pre-populated content",
				initialText: f,
				rows: 12,
				maxCharacterCount: 500,
				nodes: _,
				testid: "showroom_wds_rtf_pre_populated_textfield",
				emoji: {
					display: !0,
					keyboardShortcut: !0
				},
				children: [c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, { multiline: !0 }), c.jsx(r("WAWebRichTextInputPlugins.react"), {
					textFormatEnabled: !0,
					bulletPointsEnabled: !0,
					numberedListEnabled: !0,
					blockQuoteEnabled: !0,
					inlineCodeEnabled: !0
				})]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		var e, t = (e = o("useWAWebCheckbox")).useCheckBox("Enable bullet points", !0), n = t[0], a = t[1], i = e.useCheckBox("Enable numbered lists", !0), l = i[0], s = i[1], u = e.useCheckBox("Enable block quotes", !0), d = u[0], m = u[1], p = e.useCheckBox("Enable text formatting", !0), f = p[0], g = p[1], h = e.useCheckBox("Enable inline code", !0), y = h[0], C = h[1];
		return c.jsxs("div", {
			className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
			children: [
				c.jsxs(r("WAWebWDSRichTextField.react"), {
					label: "Type a message",
					placeholder: "Type a message",
					rows: 6,
					nodes: _,
					testid: "showroom_wds_rtf_configurable_textfield",
					emoji: {
						display: !0,
						keyboardShortcut: !0
					},
					children: [c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, { multiline: !0 }), c.jsx(r("WAWebRichTextInputPlugins.react"), {
						textFormatEnabled: f,
						bulletPointsEnabled: n,
						numberedListEnabled: l,
						blockQuoteEnabled: d,
						inlineCodeEnabled: y
					})]
				}),
				c.jsx("h2", { children: "Formatting Options" }),
				g,
				a,
				s,
				m,
				C
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		var t = d(""), n = t[0], r = t[1], a = function(n, a) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[auto-migration-example] onChange"]))), r(n.text);
		};
		return c.jsx("div", {
			className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
			children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
				title: "Auto-migrated RichTextField",
				value: n,
				onChange: a,
				textFormatEnabled: !0,
				bulletPointsEnabled: !0,
				numberedListEnabled: !0,
				blockQuoteEnabled: !0,
				multiline: !0,
				emojiBtnPosition: "side"
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return c.jsx("div", {
			className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
			children: c.jsxs(r("WAWebWDSRichTextField.react"), {
				label: "Type a message",
				placeholder: "Type a message",
				rows: 3,
				nodes: [
					o("WAWebMentionNode").MentionNode,
					o("WAWebListBulletNode").ListBulletNode,
					o("WAWebListNumberNode").ListNumberNode,
					o("WAWebQuoteLineNode").QuoteLineNode,
					o("WAWebBidiParagraphNode").BidiParagraphNode,
					o("WAWebDelimiterNode").DelimiterNode,
					o("WAWebNonJidMentionNode").NonJidMentionNode
				],
				testid: "showroom_wds_rtf_emoji_picker",
				emoji: {
					picker: { ariaLabel: s._(
						/*BTDS*/
						""
					) },
					keyboardShortcut: !0
				},
				children: [c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, { multiline: !0 }), c.jsx(r("WAWebRichTextInputPlugins.react"), {
					textFormatEnabled: !0,
					bulletPointsEnabled: !0,
					numberedListEnabled: !0,
					blockQuoteEnabled: !0,
					inlineCodeEnabled: !0
				})]
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	var v = {
		storyName: "WAWebWDSRichTextFieldWithPlugins",
		section: o("WAWebShowroomStory.react").StorySectionType.MOLECULE,
		component: g,
		description: "Tests WAWebWDSRichTextField used with WAWebRichTextInputPlugins and BidiParagraphNode — the WAWeb wrapper pattern for WDS rich text fields. Verifies that BidiParagraphNode is registered as a ParagraphNode replacement (needed for bullet points, numbered lists, and block quotes) and that LineBreakNodes are handled correctly by the text format preview plugin.",
		examples: [
			{
				title: "All Formatting Features",
				description: "WAWebWDSRichTextField with all formatting enabled. Type bullet points (*, -), numbered lists (1.), block quotes (>), and press Enter for newlines. Previously crashed with getTargetIndent (missing BidiParagraphNode replacement) and setFormat (missing $isTextNode guards for LineBreakNode).",
				example: function() {
					return c.jsx(g, {});
				},
				templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
			},
			{
				title: "Pre-populated Rich Text",
				description: "WAWebWDSRichTextField initialized with formatted text including bold, italic, bullet points, numbered lists, block quotes, and a maxCount character counter.",
				example: function() {
					return c.jsx(h, {});
				},
				templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
			},
			{
				title: "Configurable Formatting",
				description: "WAWebWDSRichTextField with toggleable formatting options to test individual feature combinations.",
				example: function() {
					return c.jsx(y, {});
				},
				templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
			},
			{
				title: "Arabic Text Formatting",
				description: "WAWebWDSRichTextField example focused on Arabic (RTL) text input to verify formatting behavior with right-to-left content.",
				example: function() {
					return c.jsx("div", {
						className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
						children: c.jsxs(r("WAWebWDSRichTextField.react"), {
							label: "اكتب رسالة",
							placeholder: "اكتب رسالة",
							initialText: "هذا نص عربي للتجربة\nsome english on this line\n* نقطة أولى\n1. عنصر مرقم\n> اقتباس",
							rows: 8,
							nodes: _,
							testid: "showroom_wds_rtf_arabic_text_textfield",
							emoji: {
								display: !0,
								keyboardShortcut: !0
							},
							children: [c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, { multiline: !0 }), c.jsx(r("WAWebRichTextInputPlugins.react"), {
								textFormatEnabled: !0,
								bulletPointsEnabled: !0,
								numberedListEnabled: !0,
								blockQuoteEnabled: !0,
								inlineCodeEnabled: !0
							})]
						})
					});
				},
				templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
			},
			{
				title: "Password Input",
				description: "WAWebWDSRichTextField with type=\"password\" to mask text input with bullets. Uses -webkit-text-security: disc for masking. Intended for plain-text use only (no rich text plugins).",
				example: function() {
					return c.jsx("div", {
						className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
						children: c.jsx(r("WAWebWDSRichTextField.react"), {
							label: "Enter password",
							placeholder: "Enter password",
							type: "password",
							testid: "password-example",
							passwordVisibilityToggled: m,
							visibilityToggleButtonAriaLabel: p
						})
					});
				},
				templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
			},
			{
				title: "Emoji Picker Prop",
				description: "WAWebWDSRichTextField with the declarative emoji picker prop — renders a dedicated mood icon button at the far right of the field and inserts selected emoji into the editor.",
				example: function() {
					return c.jsx(b, {});
				},
				templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
			},
			{
				title: "Auto-Migration via WAWebRichTextField",
				description: "Uses WAWebRichTextField (RichTextField) which auto-migrates to WDSRichTextField when the wds_web_rich_text_field ABProp is enabled. Tests the full migration path with formatting features.",
				example: function() {
					return c.jsx(C, {});
				},
				templateStyle: babelHelpers.extends({}, o("WAWebShowroomUtils").widePreview, { minWidth: 560 })
			}
		]
	};
	l.default = v;
}), 226);
