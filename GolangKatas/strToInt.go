package golangKatas

import (
	"strconv"
)

func StringToNumber(str string) int {
	i, _ := strconv.Atoi(str)

	return i
}
