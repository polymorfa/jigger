__d("WAWebDesktopUpsellCommonStrings", ["fbt", "WAWebDesktopUpsellUtils"], (function(t, n, r, o, a, i, l, s) {
	function e() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function u(t) {
		var n = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
		if (n == null) return e();
		var r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
		if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant2 || r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant3) return s._(
			/*BTDS*/
			""
		);
		switch (n) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return t === !0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	}
	function c(e) {
		var t = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
		if (t == null) return null;
		switch (t) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	}
	function d(e) {
		var t, n = (t = o("WAWebDesktopUpsellUtils").getUserDesktopOs()) != null ? t : o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS, r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
		if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant2) switch (n) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return s._(
				/*BTDS*/
				""
			);
		}
		if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant3) switch (n) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return s._(
				/*BTDS*/
				""
			);
		}
		switch (n) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return e === !0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	}
	function m(e) {
		var t, n = (t = o("WAWebDesktopUpsellUtils").getUserDesktopOs()) != null ? t : o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS, r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
		if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant2) switch (n) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return s._(
				/*BTDS*/
				""
			);
		}
		if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant3) switch (n) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return s._(
				/*BTDS*/
				""
			);
		}
		switch (n) {
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS: return e === !0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	}
	l.getDesktopAppDownloadBtnLabel = e, l.getDesktopAppDownloadFromStoreBtnLabel = u, l.getDesktopUpsellToastbarLabel = c, l.getDesktopUpsellDownloadWhatsAppTitle = d, l.getDesktopUpsellIntroPanelText = m;
}), 226);
