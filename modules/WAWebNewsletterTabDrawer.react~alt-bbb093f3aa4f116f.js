__d("WAWebNewsletterTabDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerHeader.react",
	"WAWebIcAddCircleIcon.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebNewRoundRefreshedIcon.react",
	"WAWebNewsletterFailures.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterLoadingStageManager",
	"WAWebNewsletterTabDrawerContent.react",
	"WAWebNewsletterTabDrawerLoadingShimmer.react",
	"WAWebNewsletterTabMenuDropdown.react",
	"WAWebTabOrder",
	"WAWebWamEnumChannelDirectoryEntryPoint",
	"WDSIconIcGrid.react",
	"WDSIconWdsIcNewChannel.react",
	"WDSMenuBarItem.react",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { drawer: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function d(e) {
		var t = e.initialScrollTop, n = e.newsletters, a = e.onBack, i = e.onCreateNewsletter, l = e.onNewsletterDirectorySearch, d = e.ref, m = e.setScrollTop, p = o("useWAWebModelValues").useModelValues(o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager, ["stage"]), _ = p.stage, f, g = [];
		if (o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() || o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled()) {
			if (o("WAWebNewsletterGatingUtils").getChannelCreationFromDirectoryMode() !== 0) {
				var h = s._(
					/*BTDS*/
					""
				), y = o("WAWebNewsletterGatingUtils").getChannelCreationFromDirectoryMode() === 1 ? o("WAWebIcAddCircleIcon.react").IcAddCircleIcon : r("WDSIconWdsIcNewChannel.react"), C = u.jsx(r("WDSMenuBarItem.react"), {
					tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
					testid: "newsletter-tab-dropdown-button",
					icon: y,
					title: h,
					onClick: i
				}), b = s._(
					/*BTDS*/
					""
				), v = u.jsx(r("WDSMenuBarItem.react"), {
					tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
					testid: "newsletter-tab-dropdown-button",
					icon: r("WDSIconIcGrid.react"),
					title: b,
					onClick: function() {
						return l(o("WAWebWamEnumChannelDirectoryEntryPoint").CHANNEL_DIRECTORY_ENTRY_POINT.EXPLORE_SECTION_HEADER_BUTTON);
					}
				});
				g.push(C, v);
			} else {
				var S = s._(
					/*BTDS*/
					""
				);
				f = u.jsx(r("WDSMenuBarItem.react"), {
					tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
					testid: "newsletter-tab-dropdown-button",
					icon: o("WAWebNewRoundRefreshedIcon.react").NewRoundRefreshedIcon,
					title: S,
					wdsMenuToRender: u.jsx(r("WAWebNewsletterTabMenuDropdown.react"), {
						onCreateNewsletter: i,
						onNewsletterDirectorySearch: l
					})
				});
			}
			g.push(f);
		}
		var R = null;
		switch (_) {
			case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.Failed: {
				R = u.jsx(r("WAWebNewsletterFailures.react"), {});
				break;
			}
			case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.Loading: {
				R = u.jsx(r("WAWebNewsletterTabDrawerLoadingShimmer.react"), { newsletterCount: n.length });
				break;
			}
			case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.None:
			case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.Finished: {
				R = u.jsx(r("WAWebNewsletterTabDrawerContent.react"), {
					initialScrollTop: t,
					newsletters: n,
					setScrollTop: m,
					onNewsletterDirectorySearch: l,
					onCreateNewsletter: i
				});
				break;
			}
		}
		var L = r("useWAWebFocusOnMount")();
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: L,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "newsletter-tab-drawer",
			children: u.jsxs(r("WAWebDrawer.react"), {
				ref: d,
				xstyle: c.drawer,
				testid: "newsletter-drawer",
				tsNavigationData: { surface: "channel-updates-home" },
				children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
					onBack: a,
					children: u.jsx("div", {
						className: "x78zum5 x1qvou4u x1s70e7g",
						children: g
					})
				}), R]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
