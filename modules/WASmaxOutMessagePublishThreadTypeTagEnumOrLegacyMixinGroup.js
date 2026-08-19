__d("WASmaxOutMessagePublishThreadTypeTagEnumOrLegacyMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishThreadTypeTagEnumMixin",
	"WASmaxOutMessagePublishThreadTypeTagLegacyMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.threadTypeTagEnum) return o("WASmaxOutMessagePublishThreadTypeTagEnumMixin").mergeThreadTypeTagEnumMixin(e, t.threadTypeTagEnum);
		if (t.threadTypeTagLegacy) return o("WASmaxOutMessagePublishThreadTypeTagLegacyMixin").mergeThreadTypeTagLegacyMixin(e, t.threadTypeTagLegacy);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeThreadTypeTagEnumOrLegacyMixinGroup = e;
}), 98);
