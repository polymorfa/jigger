__d("MAWConvertExtendedContentOverlayIconGlyphToInformTreatmentRenderingType", ["WAArmadilloXMA.pb", "WALogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		switch (t) {
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.MEDIA_LABEL: return "media_label";
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.POST_LABEL: return "post_label";
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.NONE: return null;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.WARNING:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.PRIVATE:
			default: return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Not a valid ExtendedContentOverlayIconGlyph: ", ""])), t), "warning_screens";
		}
	}
	l.convertExtendedContentOverlayIconGlyphToInformTreatmentRenderingType = s;
}), 98);
