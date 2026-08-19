__d("WAWebDebugCommandPalettePlugin", [
	"WALogger",
	"WAWebAlertErrorIcon.react",
	"WAWebCellV2.react",
	"WAWebChevronIcon.react",
	"WAWebCommandPaletteController",
	"WAWebDebugCommandSearchModel",
	"WAWebDeveloperMenuUtils",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebText.react",
	"WDSIconIcCheckCircleFilled.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcInfo.react",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebLexicalSearchModelQuery"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = t.command, a = o("WAWebCommandPaletteController").useCommandPalette(), i = c(), l = i[0], s = i[1], d = async function() {
			var t = a.input.trim(), i = t.split(","), l = i.map(function(e) {
				switch (e) {
					case "": return;
					default: try {
						return JSON.parse(e.trim());
					} catch (e) {
						var t = r("getErrorSafe")(e);
						throw s({
							success: !1,
							result: "Failure parsing argument list: " + t.message
						}), t;
					}
				}
			}).filter(function(e) {
				return e !== void 0;
			});
			l.length === 0 && n.paramsToExecute != null && (l = n.paramsToExecute);
			try {
				var u = await n.func.apply(n, l), c;
				if (typeof u == "string") c = u;
				else {
					var d;
					c = (d = JSON.stringify(u)) != null ? d : "undefined";
				}
				o("WAWebDeveloperMenuUtils").copyToClipboard({
					successText: "Copied return value \"" + c.substr(0, 20) + "\" to clipboard",
					text: c
				}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Debug Command Result"]))), s({
					success: !0,
					result: c
				});
			} catch (e) {
				s({
					success: !1,
					result: r("getErrorSafe")(e).message
				});
			}
		}, m = function() {
			o("WAWebDeveloperMenuUtils").copyToClipboard({
				successText: "Copied \"Debug." + n.id + "\" to clipboard",
				text: "Debug." + n.id
			});
		};
		return u.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
			forceSelection: !0,
			children: [
				l != null && u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebCellV2.react"), {
					size: "medium",
					interactive: !1,
					detailLeft: l.success ? u.jsx(r("WDSIconIcCheckCircleFilled.react"), {
						width: 24,
						height: 24,
						colorName: "accent"
					}) : u.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
						width: 24,
						height: 24
					}),
					primary: u.jsx(o("WAWebText.react").WAWebTextTitle, { children: l.success ? "Success" : "Error" }),
					secondary: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: l.success ? "Return value: " + l.result : l.result })
				}), u.jsx(o("WAWebMenuItems.react").MenuSeparator, {})] }),
				u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
					optionId: "execute",
					primary: "Execute",
					secondary: u.jsx("code", { children: n.id + "(" + n.params.join(", ") + ")" }),
					detailRight: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {}),
					onSelect: d
				}),
				u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
					optionId: "copy",
					primary: "Copy",
					secondary: "Copy the function to your clipboard",
					detailRight: u.jsx(r("WDSIconIcContentCopy.react"), {}),
					onSelect: m
				}),
				u.jsx(o("WAWebMenuItems.react").MenuSeparator, {}),
				u.jsx(r("WAWebCellV2.react"), {
					size: "medium",
					interactive: !1,
					detailLeft: u.jsx(r("WDSIconIcInfo.react"), {
						width: 24,
						height: 24
					}),
					secondary: u.jsx(o("WAWebText.react").WAWebTextSmall, {
						textWrap: "wrap",
						children: u.jsxs("ul", {
							className: "xtaz4m5 xdx6fka",
							children: [
								u.jsxs("li", { children: ["The execute command supports the following parameter types:\xA0", u.jsx("code", { children: "strings (wrapped in quotes), numbers, booleans, and null" })] }),
								u.jsx("li", { children: "It's not possible to determine if a command requires arguments, so it may fail if you don't provide them." }),
								u.jsxs("li", { children: [
									"Some commands require non-stringifyable arguments (for instance, a ",
									u.jsx("code", { children: "Contact Model" }),
									"). You won't be able to execute those commands here."
								] })
							]
						})
					})
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		var e = o("react-compiler-runtime").c(5), t = o("WAWebCommandPaletteController").useCommandPalette(), n = o("useWAWebLexicalSearchModelQuery").useLexicalSearchModelQuery(p), r = n.results, a;
		e[0] !== t ? (a = function(n) {
			t.pushPlugin({
				id: "DebugCommandActionsMenu",
				shortName: n.id,
				placeholder: "Enter a comma-separated list of params",
				Component: function() {
					return u.jsx(d, { command: n });
				}
			});
		}, e[0] = t, e[1] = a) : a = e[1];
		var i = a, l;
		return e[2] !== i || e[3] !== r ? (l = r != null && u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, { children: r.results.map(function(e) {
			return u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: e.id,
				primary: e.data.id,
				secondary: e.data.doc,
				onSelect: function() {
					return i(e.data);
				}
			}, e.id);
		}) }), e[2] = i, e[3] = r, e[4] = l) : l = e[4], l;
	}
	function p() {
		return new (o("WAWebDebugCommandSearchModel")).DebugCommandSearch({ maxPageLength: 8 });
	}
	var _ = {
		plugin: {
			id: "DebugCommandPalettePlugin",
			placeholder: "Search debug commands",
			shortName: ">",
			Component: m,
			restoreInputOnBack: !0
		},
		trigger: "/>",
		doc: {
			isDevOnly: !0,
			name: "Debug Commands",
			description: "Search and execute debug commands"
		}
	};
	l.DebugCommandPalettePlugin = _;
}), 98);
