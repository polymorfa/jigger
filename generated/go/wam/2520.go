const WamMdAppStateDirtyBits = 2520 // channel: regular

type MdAppStateDirtyBitsEvent struct {
	DirtyBitsFalsePositive bool `wam:"dirty_bits_false_positive"` // field 2
}