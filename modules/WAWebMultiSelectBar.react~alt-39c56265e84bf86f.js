__d("WAWebMultiSelectBar.react", [
	"fbt",
	"$InternalEnum",
	"WAWebChatEphemerality",
	"WAWebCopyUtils",
	"WAWebEnvironment",
	"WAWebForwardActionUserJourneyLogger",
	"WAWebKeepInChatMsgUtils",
	"WAWebMsgActionCapability",
	"WAWebMsgCollection",
	"WAWebMultiSelectCount.react",
	"WAWebMultiSelectDelete.react",
	"WAWebMultiSelectDownload.react",
	"WAWebMultiSelectForward.react",
	"WAWebMultiSelectKeep.react",
	"WAWebMultiSelectStar.react",
	"WAWebNewsletterMsgLinkUtils",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcClose.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcLink.react",
	"WDSMenuBarItem.react",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useRef, p = { paddingInlineStart15: {
		paddingInlineStart: "x1gx403c",
		$$css: !0
	} }, _ = {
		multiControls: {
			position: "x10l6tqk",
			bottom: "x1ey2m1c",
			insetInlineStart: "x1o0tod",
			zIndex: "xfo81ep",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			height: "x12659sl",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		mediaGalleryTheme: {
			top: "x13vifvy",
			height: "x185czh",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		btnMargin: {
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		}
	}, f = n("$InternalEnum")({
		CONVERSATION_PANEL: "conversation_panel",
		MEDIA: "media",
		DOCS: "docs",
		LINKS: "links",
		PRODUCTS: "products"
	}), g = n("$InternalEnum")({
		DEFAULT: "default",
		DELETE: "delete",
		FORWARD: "forward"
	});
	function h(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.selectedMessages, l = a.chat, c = a.toastPosition, f = a.onCancel, h = a.noSortOnForward, y = a.downloadButton, C = y === void 0 ? !0 : y, b = a.entryPoint, v = a.mode, S = v === void 0 ? g.DEFAULT : v, R = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), L = m(null), E = r("useMergeRefs")(n, L), k = function() {
			var e = i.getSelected();
			o("WAWebNewsletterMsgLinkUtils").handleNewsletterMessageLinkCopyClick(e[0]);
		}, I = async function() {
			var e = await o("WAWebCopyUtils").copyMessagesToClipboard(T);
			if (e != null && e > 0) {
				var t = s._(
					/*BTDS*/
					"",
					[s._plural(e, "number_of_reactions")]
				);
				o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: t })), f();
			} else o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		};
		o("useWAWebListener").useListeners(i.getSelected().map(function(e) {
			return {
				source: e,
				eventOrEvents: "change:star",
				callback: R
			};
		})), o("useWAWebListener").useListener(i, "all", R), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "change:star change:kicState", function(e) {
			i.isSelected(e) && R();
		});
		var T = a.selectedMessages.getSelected(), D = T.length, x = D === 1 && o("WAWebMsgActionCapability").canCopyNewsletterMessageLink(T[0]), $ = x ? d.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
			icon: r("WDSIconIcLink.react"),
			onClick: k,
			title: s._(
				/*BTDS*/
				""
			),
			marginInlineXstyle: _.btnMargin
		}) : null, P = r("WAWebEnvironment").isWindows ? d.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
			icon: r("WDSIconIcContentCopy.react"),
			disabled: T.length === 0 || !T.every(function(e) {
				return o("WAWebCopyUtils").canCopyMessage(e);
			}),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: I,
			marginInlineXstyle: _.btnMargin
		}) : null, N = d.jsx(r("WAWebMultiSelectForward.react"), {
			noSortOnForward: h,
			onCancel: f,
			selectedMessages: i,
			onForwardModalOpen: function() {
				o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.forwardButtonTappedInForwardToolbar(i.getSelected());
			}
		}), M = d.jsx(r("WAWebMultiSelectDelete.react"), {
			onCancel: f,
			selectedMessages: i,
			toastPosition: c
		}), w = D > 0, A = w, F = !1, O = !1, B = !1;
		T.forEach(function(e) {
			o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(e) ? F = !0 : (O = !0, A = !1, o("WAWebKeepInChatMsgUtils").keepIsLockedForMe(e) && (B = !0));
		});
		var W, q, U = (F || B) && O;
		if (!U) {
			var V = A || !D && o("WAWebChatEphemerality").isEphemeralSettingOn(l);
			V ? q = d.jsx(r("WAWebMultiSelectKeep.react"), {
				selectedMessages: i,
				onCancel: f,
				entryPoint: b
			}) : W = d.jsx(r("WAWebMultiSelectStar.react"), {
				selectedMessages: i,
				onCancel: f,
				toastPosition: c
			});
		}
		var H = d.jsx(r("WAWebMultiSelectDownload.react"), {
			downloadButton: C,
			onCancel: f,
			selectedMessages: i,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR
		}), G = a.theme === "mediaGallery", z = [];
		switch (S) {
			case g.DELETE:
				z.push(M);
				break;
			case g.FORWARD:
				z.push(N);
				break;
			case g.DEFAULT:
				z.push($, P, W, q, M, N, H);
				break;
		}
		var j = S === g.DELETE ? s._(
			/*BTDS*/
			""
		) : S === g.FORWARD ? s._(
			/*BTDS*/
			""
		) : S === g.DEFAULT ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + S);
		})(), K = d.jsx(r("WDSMenuBarItem.react"), {
			title: j,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
			icon: r("WDSIconIcClose.react"),
			testid: "ic-close",
			onClick: a.onCancel,
			marginInlineXstyle: _.btnMargin
		});
		return d.jsxs("div", babelHelpers.extends({ ref: E }, (u || (u = r("stylex"))).props(G && _.mediaGalleryTheme, _.multiControls, p.paddingInlineStart15, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), { children: [
			K,
			d.jsx(r("WAWebMultiSelectCount.react"), {
				selectedMsgsCount: D,
				theme: a.theme
			}),
			z
		] }));
	}
	h.displayName = h.name + " [from " + i.id + "]", l.MultiSelectBarEntryPoint = f, l.MultiSelectMode = g, l.MultiSelectBar = h;
}), 226);
